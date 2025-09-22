from langchain_ollama import ChatOllama
from langchain.schema import HumanMessage, AIMessage
from langchain.prompts import ChatPromptTemplate
import re
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def parse_markdown_chat(md_file):
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        messages = []
        parts = re.split(r'^(Human|Assistant):', content, flags=re.MULTILINE)
        logger.debug(f'Parsed {len(parts)} parts from {md_file}')
        for i in range(1, len(parts), 2):
            role = parts[i].strip().lower()
            text = parts[i+1].strip()
            if role == 'human':
                messages.append(HumanMessage(content=text))
            elif role == 'assistant':
                messages.append(AIMessage(content=text))
        logger.debug(f'Loaded {len(messages)} messages')
        for msg in messages:
            logger.debug(f'Message: {msg.content[:50]}...')
        return messages
    except Exception as e:
        logger.error(f'Error parsing {md_file}: {str(e)}')
        raise

try:
    chat_file = 'chat1.md'
    history = parse_markdown_chat(chat_file)
except Exception as e:
    print(f'Failed to load chat history: {str(e)}')
    exit(1)

llm = ChatOllama(model='llama3.1:8b', temperature=0.7, timeout=300)
system_prompt = (
    'You are an AI continuing a conversation from another AI. '
    'Use the following history as context to answer accurately:\n\n'
    '{history_text}\n\n'
    'Respond only based on the provided history and the user\'s input.'
)
history_text = '\n'.join([f'{msg.__class__.__name__}: {msg.content}' for msg in history])
prompt = ChatPromptTemplate.from_messages([
    ('system', system_prompt.format(history_text=history_text)),
    ('human', '{input}')
])

print('Chat loaded! Type your message (or \"quit\" to exit):')
while True:
    try:
        user_input = input('You: ')
        if user_input.lower() == 'quit':
            break
        chain = prompt | llm
        response = chain.invoke({'input': user_input})
        print(f'AI: {response.content}')
        with open(chat_file, 'a', encoding='utf-8') as f:
            f.write(f'\nHuman: {user_input}\nAssistant: {response.content}\n')
    except Exception as e:
        logger.error(f'Error processing input: {str(e)}')
        print(f'Error: {str(e)}')

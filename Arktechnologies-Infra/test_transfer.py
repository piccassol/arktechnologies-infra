from langchain_ollama import ChatOllama
from langchain.schema import HumanMessage, AIMessage
from langchain.prompts import ChatPromptTemplate
import re

def parse_markdown_chat(md_file):
    with open(md_file, 'r') as f:
        content = f.read()
    messages = []
    parts = re.split(r'^(Human|Assistant):', content, flags=re.MULTILINE)
    for i in range(1, len(parts), 2):
        role = parts[i].strip().lower()
        text = parts[i+1].strip()
        if role == 'human':
            messages.append(HumanMessage(content=text))
        elif role == 'assistant':
            messages.append(AIMessage(content=text))
    return messages

chat_file = 'chat1.md'
history = parse_markdown_chat(chat_file)

llm = ChatOllama(model='gpt-oss:20b', temperature=0.7, timeout=300)
system_prompt = 'You are an AI continuing a conversation from another AI. Use the provided history as context.'
prompt = ChatPromptTemplate.from_messages([
    ('system', system_prompt),
    *history,
    ('human', '{input}')
])

chain = prompt | llm
response = chain.invoke({'input': 'What’s my CRM dashboard design?'})
print(f'AI: {response.content}')

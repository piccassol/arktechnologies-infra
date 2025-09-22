from langchain_ollama import ChatOllama
from langchain.prompts import ChatPromptTemplate

llm = ChatOllama(model='llama3.1:8b', temperature=0.7, timeout=300)
prompt = ChatPromptTemplate.from_messages([
    ('system', 'You are a helpful AI.'),
    ('human', '{input}')
])
chain = prompt | llm
response = chain.invoke({'input': 'Hey'})
print(f'AI: {response.content}')

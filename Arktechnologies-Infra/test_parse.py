import re

def parse_markdown_chat(md_file):
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()
    messages = []
    parts = re.split(r'^(Human|Assistant):', content, flags=re.MULTILINE)
    print(f'Parsed {len(parts)} parts from {md_file}')
    for i in range(1, len(parts), 2):
        role = parts[i].strip().lower()
        text = parts[i+1].strip()
        messages.append((role, text))
    print(f'Loaded {len(messages)} messages')
    return messages

chat_file = 'test_chat.md'
history = parse_markdown_chat(chat_file)
for role, text in history:
    print(f'{role}: {text[:50]}...')

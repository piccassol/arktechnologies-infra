FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Copy demo content to root to avoid redirect loop
RUN cp out/demo/index.html out/index.html || true

RUN npm install -g serve
EXPOSE 3001
CMD ["serve", "-s", "out", "-l", "3001"]

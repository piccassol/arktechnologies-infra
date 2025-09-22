FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Install serve globally for static file serving
RUN npm install -g serve

EXPOSE 3000

# Serve the static files from the out directory
CMD ["serve", "-s", "out", "-l", "3000"]

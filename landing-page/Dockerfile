FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

# Use development server instead of production build
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]

FROM node:18-alpine

LABEL org.opencontainers.image.source="https://github.com/piccassol/arktechnologies-infra"
LABEL org.opencontainers.image.description="ARK Technologies Landing Page"

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
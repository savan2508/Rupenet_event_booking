FROM node:alpine
LABEL authors="sawan"

RUN npm install -g pnpm@latest

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod && pnpm store prune
COPY . .

CMD ["pnpm", "dev"]
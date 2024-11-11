FROM node:alpine
LABEL authors="sawan"

RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .

CMD ["pnpm", "start"]
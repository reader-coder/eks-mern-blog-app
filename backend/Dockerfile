FROM node:22 AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci --omit=dev

FROM node:lts-trixie-slim

WORKDIR /backend

COPY --from=builder /app .

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]

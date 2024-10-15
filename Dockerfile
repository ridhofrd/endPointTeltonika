FROM node:20-alpine
WORKDIR /app

COPY package.json ./
RUN npm install ci
COPY . .

EXPOSE 3000

CMD ["node", "--max-http-header-size=2097152", "index.js"]

FROM node:lts-alpine
RUN apk add --no-cache tini
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
ENTRYPOINT ["/sbin/tini", "--", "node", "app.js"]

FROM alpine:latest
RUN apk update
RUN apk add --update nodejs npm
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm ci --force
RUN npm run build
CMD ["npm", "start"]

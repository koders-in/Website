FROM node:slim
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm ci --force
RUN npm run build
CMD ["npm", "start"]

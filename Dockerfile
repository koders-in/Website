FROM ubuntu:latest
RUN apt-get update 
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update 
RUN apt-get install -y nodejs libgl1-mesa-dev
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm install
RUN npm run build
RUN npm install pm2 -g  # For installing pm2 globally
CMD ["/bin/sh", "-c", "pm2-runtime 'npm start'"]

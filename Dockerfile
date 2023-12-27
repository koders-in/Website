FROM node:14-slim as builder

WORKDIR /app

COPY . .

RUN npm ci --force
RUN npm run build
RUN npm run export

FROM nginx:alpine-slim

COPY --from=builder /app/out/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

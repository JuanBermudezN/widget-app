FROM node:alpine AS builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx 
# copy something from the builder phase
# path of nginx /usr/share/nginx/html
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
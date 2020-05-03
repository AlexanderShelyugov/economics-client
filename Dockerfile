FROM node:12.16.2-alpine3.9 AS build
WORKDIR /app
COPY package.json ./
RUN yarn
COPY client.conf ./
COPY ./public ./public
COPY ./src ./src
COPY .env ./
RUN yarn run build

FROM nginx:1.18.0-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/client.conf /etc/nginx/conf.d/
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
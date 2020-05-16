FROM node:12-alpine AS build
WORKDIR /app
COPY package.json ./
RUN yarn install --production
COPY ./nginx ./nginx
COPY .env ./
COPY ./public ./public
COPY ./src ./src
RUN yarn run build

FROM nginx:1.18-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx/client.conf /etc/nginx/conf.d/
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM node:12.16.2-alpine3.9 AS build
WORKDIR /app
ADD . ./
RUN yarn
RUN yarn run build

FROM nginx:1.18.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
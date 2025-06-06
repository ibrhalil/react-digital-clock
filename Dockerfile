FROM node:23 AS build
WORKDIR /app
COPY . .
RUN rm -rf node_modules package-lock.json yarn.lock && yarn install
RUN yarn build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
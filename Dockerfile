FROM node:21 as build
WORKDIR app/
COPY . .
RUN npm i
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
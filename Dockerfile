FROM node:alpine as build
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
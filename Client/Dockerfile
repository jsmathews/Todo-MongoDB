FROM node:alpine AS build
WORKDIR /app/client
COPY Client/package.json .
RUN npm install
COPY Client ./
RUN npm run build

FROM nginx
COPY --from=build /app/client/build /usr/share/nginx/html

FROM node:alpine
WORKDIR /app/backend
COPY Backend/package.json ./
RUN npm install
COPY Backend ./
EXPOSE 4000
#RUN pm2 start index.js
# Start the backend server
CMD [ "npm", "start" ]
FROM node
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY knexfile.js .
COPY src src
COPY wait-for-it.sh .
RUN npm install
CMD npm start
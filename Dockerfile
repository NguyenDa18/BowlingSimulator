FROM node:8
WORKDIR /us/src/bowling
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","test"]

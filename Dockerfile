FROM node:8
WORKDIR /usr/src/bowling
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","test"]
# CMD ["node","main.js","Lara","2/","6-","53","X"]

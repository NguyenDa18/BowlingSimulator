FROM node:7
WORKDIR /bowling
COPY package.json /bowling
RUN npm install
COPY ./bowling
CMD npm test

FROM resin/raspberrypi3-node

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . ./

# CMD node app.js
CMD node matrix-start.js

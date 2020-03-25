FROM mhart/alpine-node AS builder

WORKDIR /app
COPY package.json .

# Install app dependencies
RUN yarn install
COPY . .
# Bundle app source
RUN yarn build

# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:base
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]

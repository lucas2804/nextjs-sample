FROM mhart/alpine-node:10 AS builder

WORKDIR /app
COPY package.json .
COPY yarn.lock .

# Install app dependencies
RUN yarn install
COPY . .
# Bundle app source
RUN yarn build

# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:10
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["yarn", "start"]

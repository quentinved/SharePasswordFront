# pull official base image
FROM node:12-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
# add app
COPY . ./
COPY package.json ./
# COPY package-lock.json ./
# RUN npm cache clean --force
RUN yarn install

EXPOSE 3000
# start app
CMD ["yarn", "dev"]
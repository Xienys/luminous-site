FROM node:22-alpine as build-stage

WORKDIR /nuxtapp

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:22-alpine as prod-stage

WORKDIR /nuxtapp

COPY --from=build-stage /nuxtapp/.output/  ./.output/

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
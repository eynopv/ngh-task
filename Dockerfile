# build stage
FROM node:14-alpine3.10 as build-stage

# web
WORKDIR /app/web
COPY web/package*.json ./
COPY web/tsconfig.json ./
RUN npm install
COPY web/public/ ./public
COPY web/src/ ./src
RUN npm run build

# server
WORKDIR /app/server
COPY server/package*.json ./
COPY server/tsconfig.json ./
RUN npm install
COPY server/ ./
RUN npm run build

# production stage
FROM node:14-alpine3.10
COPY --from=build-stage /app/web /app/web
COPY --from=build-stage /app/server /app/server

EXPOSE 3000

CMD [ "/bin/sh", "-c", "cd /app/server && npm run start" ]

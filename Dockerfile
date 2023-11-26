FROM docker.io/node:16.20 as builder

COPY . /app

WORKDIR /app

RUN yarn install --frozen-lockfile

RUN yarn build

FROM docker.io/nginxinc/nginx-unprivileged:1.25.1-alpine

COPY --from=builder /app/build /usr/share/nginx/html
FROM node:alpine

# Create app directory
WORKDIR /app

ADD ./dist .

# Update OS packages
RUN apk update && apk add --no-cache \
    curl \
    ca-certificates \
    bash

EXPOSE 8080
CMD [ "node", "server.js" ]
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "curl --fail http://localhost:8080" ] || exit 1
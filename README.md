# Hapi Web Site

Sample application for running Hapi framework

## Build

The below command can be used to build the application

```sh
cd ./src
npm run build
```

### Build Docker Image

```sh
docker build -t node-web-app .
```

## Run Web App

The below command will help you run the application

### Locally

```sh
cd ./src
npm run watch
```

### In Docker

```sh
docker run --name node-web-app -p 8080:8080 -d node-web-app
```

## Remote into Docker container

```sh
docker run -it node-web-app bash
```

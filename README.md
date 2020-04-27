# ECONOMICS CLIENT

This repository contains the source code for the client of the Economics project.

You can build and run it locally or use the complete setup using [economics-ci](https://github.com/AlexanderShelyugov/economics-ci) repository.

# Table of contents
1. [Build](#Build)
1.1. [Project](#Project)
1.2. [Docker](#Docker)
2. [Run](#Run)
3. [Libraries](#Libraries)

## Build

### Project
In order to build the client run in shell either
```
npm run build
```

or
```
yarn run build
```

### Docker
You have two options to build a Docker image.
* If you have built a project according to , you can just run 
```
docker build -f Dockerfile.lite -t economics:client
```
* Or if you don't want to setup node, build etc. you can just create a production build using
```
build.sh
```
or
```
docker build . -t economics:client
```

## Run

Same here:
```
npm run start
```

or
```
yarn run start
```
or
```
docker run -d --rm -p 80:80 economics:client
```
or
```
run.sh
```

## Libraries
This app uses [React.js](reactjs.org) for UI, [Redux](redux.js.org) and [Immer](https://immerjs.github.io/immer/) for maintaining state.

Note: Local store is organized according to the "[Ducks](https://github.com/erikras/ducks-modular-redux)" pattern.
# NGH Programming Assignment

## How to Run the application

Prefered method to run the application is docker container.

There is also `start.sh` script which uses docker commands for `linux` and `mac` users.

The application is running on port 3000.

### Docker

Build the image

`docker build --tag eynopv-solution .`

Start the container

`docker run --rm --name eynopv-solution -p 3000:3000 eynopv-solution`

### Building and the starting server

First frontend part should be build:

```
$ cd web
$ npm install
$ npm run build
```

Then go to server directory and build that and the start the server:

```
$ cd server
$ npm install
$ npm run build
$ npm run start
```

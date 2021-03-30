# MLC Seller Panel

[![React badge](https://badges.aleen42.com/src/react.svg)](#) [![Docker badge](https://badges.aleen42.com/src/docker.svg)](#)
[![Generic badge](https://img.shields.io/badge/build-passing-<COLOR>.svg)](#) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](#)

### Installation

MLC API requires [Docker](https://www.docker.com/) v8.0.21+ to run.
Add your docker-compose.override file, this is an example:

```sh
version: '3.2'

services:
  seller:
    environment:
      - API_URL=http://locahhost:3000/api/
```

Finally run the `$ docker-compose up --build -d` command

### SCSS

The styles of the web app was written in SCCS feel free to use any styles processor  

### Todos

 - Write Tests

License
----

All rights are reserved

# NestJS User Management API

A simple REST API built with NestJS that provides basic user management functionality.

## Features

- Get all users
- Get a single user by ID
- Create new users
- Update users (PUT and PATCH)
- Delete users

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Endpoints

### Get all users
```http
GET /users
```

Response:
```json
[
  {
    "id": 1,
    "name": "Charlie"
  },
  {
    "id": 2,
    "name": "Diana"
  }
]
```

### Get user by ID
```http
GET /users/:id
```

Response:
```json
{
  "id": 1,
  "name": "Charlie"
}
```

### Create user
```http
POST /users
```

Request body:
```json
{
  "name": "Josh"
}
```

Response:
```json
{
  "status": "Created",
  "user": {
    "id": 3,
    "name": "Josh"
  }
}
```

### Update user (PUT)
```http
PUT /users/:id
```

Request body:
```json
{
  "name": "Josh"
}
```

Response:
```json
{
  "id": 1,
  "name": "Josh"
}
```

### Update user (PATCH)
```http
PATCH /users/:id
```

Request body:
```json
{
  "name": "Josh"
}
```

Response:
```json
{
  "id": 1,
  "name": "Josh"
}
```

### Delete user
```http
DELETE /users/:id
```

Response:
```json
{
  "id": 1,
  "name": "Josh"
}
```

## License

This project is MIT licensed.

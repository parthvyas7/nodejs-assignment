# NodeJS assignment

NodeJS assignment part of interview for NodeJS developer

Assignment 1 see `src/assignment-1.js`
Assignment 2 see `src`

## Run Locally

Clone project on your machine
```sh
cd nodejs-assignment
npm install
```

Start the server
```sh
npm run dev
```
## Environment Variables

To run this project, you will need to add environment variables to your `.env` file

See `.env.sample`

## API Reference

Import collection directly from `API_collection_User Auth Test.json` (Using Thunder Client VS Code extension)

#### User signup

```http
  POST /api/users/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### User login

```http
  POST /api/users/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**. |

### Authenticated user only

#### View profile

```http
  GET /api/users/me
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | JWT token in Authorisation Header |

#### Get a random joke

```http
  GET /api/random-joke
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | JWT token in Authorisation Header |

#### User logout

```http
  POST /api/users/logout
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | JWT token in Authorisation Header |

# Requirements

Use any famous-

1. NodeJS Framework with TypeScript (Nest js preferred )
2. NodeJS library to validate & sanitize request
3. ORM library to manage data with database
4. Package to handle user authentication
5. Globally handle errors
6. ~~Use middlware to access restricted end points~~

# Notes

1. ~~Commit the code on github & provide the link to review it~~
2. ~~Add a readme file which has all the steps to run the project~~
3. ~~Attach a postman collection to test the rest APIs (You can use any postman alternative as well but just mention the steps)~~

## License

[MIT](https://choosealicense.com/licenses/mit/)
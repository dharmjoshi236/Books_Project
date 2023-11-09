
# Books Api

This is the project given by Brewapps LLC as a practical task for NodeJs developer Position.

## API Reference

#### Add a book

```http
  POST /book/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title of the book |
| `author` | `string` | **Required**. Author of book |
| `summary` | `string` | **Required**. Short summary/description of book |

#### Get Book by Id

```http
  POST /book/get
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookId`      | `string` | **Required**. Id of the book to be fetched |

#### Update a book

```http
  PAtCH /book/update
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bookId` | `string` | **Required** Id of the book to be updated |
| `title` | `string` | Title of the book |
| `author` | `string` | Author of book |
| `summary` | `string` | Short summary/description of book |

#### List of all books

```http
  GET /book/list
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `string` | **Required**. For pagination (Query) |

#### Delete Book

```http
  DELETE /book/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookId`      | `string` | **Required**. Id of the book to be deleted (Query) |


## Run Locally

Clone the project

```bash
  git clone https://github.com/dharmjoshi236/Books_Project.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Deployment

Have deploy this project using Cyclic platform

```bash
 Given github access to cyclic
 Updated Env variables to cyclic
 Deployed with build button.
```

Live Link - https://gold-troubled-python.cyclic.app/



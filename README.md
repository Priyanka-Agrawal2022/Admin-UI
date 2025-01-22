# Admin UI

A Geektrust Frontend coding challenge solved using React.js library. All core features are implemented without using any third-party library.

## [Live Demo](https://priyanka-agrawal2022.github.io/Admin-UI)

## Features

- Displays an interface for admins to see and delete users.
- There is a search bar that can filter on any property.
- Able to edit or delete rows in place.
- Implemented pagination with each page containing 10 rows.
- Buttons at the bottom allow jumping to any page including special buttons for first page, previous page, next page and last page.
- Pagination updates based on search/filtering.
- Able to select one or more rows. A selected row is highlighted with a grayish background color.
- Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
- Checkbox on the top left is a shortcut to select or deselect all displayed rows. This applies only to the ten rows displayed in the current page, and not all 50 rows.

### Users API
API to list all the users and their properties.

### Note :
The users are sorted by `id` field. There is no alphabetical sorting.

### Request Type :
GET

### Endpoint :
https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json

### Sample Response :
[
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  }
]

### Tech Stack
- React.js, React Hooks, JSX, HTML, CSS, JavaScript

### How to Install Project

- Clone the project onto your local machine.
- Run 'npm install' to install required dependencies.
- Run 'npm start' in terminal to start server.
- Open [http://localhost:3000/Admin-UI](http://localhost:3000/Admin-UI) to view it in your browser.
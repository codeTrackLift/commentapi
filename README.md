# Comment API

## Overview

This application will start a local server to post, get, update, and delete comments.  The comments are stored locally as `.txt` files with unique ids.

## How to Run

To start the server, from the root of the project, run:

> `npm start`

This starts the server on port 3000 with nodemon.  Server endpoints can be hit using an application list `Postman`.

## API Endpoints
> Header: "Content-Type", "application/json"

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /comments | To post a comment |
| GET | /comments/:id | To fetch a comment |
| PATCH | /comments/:id | To update a comment |
| DELETE | /delete/:id | To delete a comment |

## Technology Stack

This application was built with JavaScript.  The dependencies are listed below.

* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [Nodemon](https://www.npmjs.com/package/nodemon) This is a tool that helps develop Node.js based applications by automatically restarting the node application when the file changes in the directory are detected.
* [UUID](https://www.npmjs.com/package/uuid/) This package generates Universally Unique Identifiers.

## License
MIT
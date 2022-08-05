# DIY-Tutorial-App

## Description

The DIY-Tutorial-App is the place to share and view tutorials for any task you need to complete. If someone else can do it, then so can you! Search the database of user generated tutorials to find the tutorial you're looking for. Read through user reviews to select the top rated tutorial, or choose based on project time, steps, or materials. After following the tutorial, leave feedback for the creator or share how your project turned out for other DIY-er's. 

Know the best way to do something? Create an account and write and share your own tutorials for others to use. Use the messaging feature to answer questions about your tutorial. Use reviews to improve your tutorial and interact with others who have completed projects using your tutorial. 

## Demo
![Demo gif](https://github.com/ZachFlota/DIY-Tutorial-App/blob/zach/client/src/assets/DIY-Demo_Gif.gif)


## Technologies

| Dependencies | Version |
| ------------ | ------- |
| Axios | 0.27.2 |
| Body-parser | 1.20.0 |
| Bootstrap | 5.1.3 |
| Cors | 2.8.5 |
| Dotenv | 16.0.1 |
| @Emotion/react | 11.9.0 |
| @Emotion/styled | 11.8.1 |
| Express | 4.18.1 |
| Method-override | 3.0.0 |
| Mongoose | 6.3.6 |
| @Mui/icons-material | 5.8.3 |
| @Mui/material | 5.8.3 |
| React | 18.1.0 |
| React-bootstrap | 2.4.0 |
| React-dom | 18.1.0 |
| React-router-dom | 6.3.0 |
| React-scripts | 5.0.1 |
| @Testing-library/jest-dom | 5.16.4 |
| @Testing-library/react | 13.3.0 |
| @Testing-library/user-event | 13.5.0 |
| Web-vitals | 2.1.4 |

## Technical Information

This project utilizes an Express API server and a React frontend UI.

### Installation
From the root directory, run `npm install` to install global project dependencies.

Then, from the root directory, cd into *client* and run `npm install` to install frontend project dependencies. 

### Starting the Server

From the root directory, cd into *server* and run `npm start` to start the Express server on PORT = 3001.

### Starting the Frontend

Also from the root directory, cd into *client* and run `npm start` to start the React frontend UI on PORT = 3000.

### Available Scripts

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## API Documentation

### Routes

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | `/` | The home page |
| POST | `/create-user` | Create a new user |
| POST | `/create` | Create a new tutorial |
| GET | `/tutorials` | Show all tutorials |
| GET | `/edit/:id` | Edit form for a tutorial |
| PUT | `/update/:id` | Make changes to a tutorial |
| DELETE | `/delete/:id` | Delete a tutorial |

### Database

#### Tutorials

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| title | String |
| description | String |
| step | String |
| image | String |

#### User

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| firstName | String |
| lastName | String |
| email | String |
| password | String |

#### Comments 

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| author | String |
| stars | Number |
| content | String |

## Issues

Currently the mongoDB is only setup locally. Therefore, CRUD operations will not work unless the database is reconfigured for your local machine. Upon deployment, the database will need to be deployed to mongoDB Atlas.

When registering an account, account information is saved to the mongoDB, but currently the login functionality is not operational. 

When creating a tutorial, only the first step can be added. The create tutorial form needs to be updated to include functionality to add additional steps.

Clicking on the *Tutorials* link will display all tutorials currently in the database. The searchbar functionality is still in development. When completed it will allow a user to search for specific tutorials. Listed tutorials will be able to be sorted by rating, estimated time it takes to complete project, the number of steps it takes to complete the project, and the number of materials required. 
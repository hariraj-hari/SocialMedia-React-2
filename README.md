# Social-Media

This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Project Features

### Real-Time Messaging
- Implemented real-time messaging using WebSocket technology.
- Users can send and receive messages instantly.

### User Authentication
- Secure user authentication with JWT tokens.
- Protects sensitive routes and actions.

### Social Feed
- Dynamic social feed displaying user posts.
- Users can like and comment on posts.

### User Profiles
- User profiles with customizable avatars and profile information.
- View other users' profiles and follow/unfollow functionality.

### Notifications
- Real-time notifications for new messages, likes, and comments.
- Users receive instant updates on their activities.

### JSON Configuration
- The project utilizes a JSON configuration file for storing certain settings.
- Find the configuration file at `src/config/config.json`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Running on Port 2500
- The development server runs on port 3000 by default.
- If you need to run the server on a different port, use the following command:
  ```bash
  npm start -- --port 2500

# Movies Browser

## Demo

Check out the live demo of the application here:
https://dor-ka.github.io/movies-browser-team-clone/#/movies

## Description:

Discover and organize your favorite films effortlessly. 
Access detailed information, ratings, and reviews all in one place. 
Enjoy a smooth and intuitive experience with modern React technology.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application features a clean and responsive UI, powered by `styled-components`, with dynamic routing handled by `React Router` and state management achieved through `Redux` and `Redux-Saga`. The application is styled using a theme, allowing for consistent design across all components.

## Screenshots

Here are some screenshots of the project in action:

![Popular movies page](github/readme/img/popular-movies.png)

![Movie page](./src/readmeimg/movie.png)

![Popular people page](./src/readmeimg/popular-people.png)

![Actor page](./src/readmeimg/actor.png)

## Features

- **Movie Search**: Browse and search for movies by title, genre, or year.
- **Movie Details**: Click on any movie to view its detailed information, including a synopsis, rating, genre, and more.
- **Responsive Design**: Fully responsive UI, optimized for both desktop and mobile devices.
- **Dynamic Routing**: Navigation between pages using `React Router` with `NavLink` for active link styling.
- **Global State Management**: Managed through `Redux`, with asynchronous actions handled by `Redux-Saga`.
- **Theming**: Consistent styling across the application using `styled-components` and a global theme.
- **Error Handling**: Graceful handling of errors with user-friendly messages.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **Styled-Components**: For styling components with a clean, scoped CSS.
- **React Router (NavLink)**: For dynamic routing within the application.
- **Redux**: Global state management.
- **Redux-Saga**: Handling side effects and asynchronous actions.
- **ThemeProvider**: For consistent theming across the application.

## API

This application uses the [TMDb API](https://developer.themoviedb.org/docs/getting-started) to fetch data about movies and actors. The API provides a vast amount of information about films, including ratings, reviews, cast details, and more. Integration with TMDb allows the app to stay up-to-date with the latest movies and trends.

## Contributors

This project was developed as a group effort by the following team members:

- **Oskar Właszczuk** - [OskarWlaszczuk](https://github.com/OskarWlaszczuk)
- **Dorota Karpińska** - [Dor-Ka](https://github.com/Dor-Ka)
- **Maksim Padrabinkin** - [maxFadet](https://github.com/maxFadet)

We worked together to bring this project to life, combining our skills.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

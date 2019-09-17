
## IMPORTANT
To run the deployed app on gh-pages must click on 'load unsafe scripts' in Chrome.
This is because Chrome blocks http on https, and the Fixer API is only http in free version.
 => RUN the app here: https://acheema90.github.io/currency-converter/

## Notes
This project was scaffolded with create-react-app (react-scripts).
In implementing the requirements, I observed that a single-page React App was the best solution.
No need for Redux or any other state-management libraries.
Only major external dependency besides the react-script defaults is axios, which is an excellent library for ajax requests.
To meet the time constraints all the css is App.css; usually, I use proper SCSS with a meaningful directory stcucture.
The Directory Structure is flat: 
    all the source code is in src.
    the index.html and favicon are in public.
    Build output in build, and so on.
Within src, the app is bootsrapped from index.js and App.js.
The bulk of the code and template is in Converter.js, which can be re-factored into smaller views using functional react components.
Constants.js has all the config needed for ConversionService.js, which fetches data from the Fixer API.
Used a React Portal to create the Modal.js which is used to show the Disclaimer in Disclaimer.js.
No explicit content was given for disclaimer, so I took the first question from https://fixer.io/faq as my disclaimer content.

## TODO
Unit testing.
Refactor css into proper SCSS with meaningful hierarchy.
Refactor the template logic in Converter.js into separate functional React Components.
Re-organize the src folder into components and services.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `npm run deploy`
This will deploy app to gh-pages.
Which has already been done.
Link here:
https://acheema90.github.io/currency-converter/

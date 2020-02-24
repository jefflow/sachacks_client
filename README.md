# SacHacks 2020 - Opioid Data Center
### **Winner for Best CeDAR Hack**
A website that gathers and analyzes data about opioid usage. 

---
## Our DevPost Page
https://devpost.com/software/opioid-data-center

## Inspiration
As technology rapidly advances, so does the obfuscation of information that is accessible to the public. Especially, in the realm of medicine and how it affects society at large, Opioids have and continue to be a common and effective, but addictive medication. Our Opiod Data Center aims to solve this problem by providing an all-in-one data source that will provide easily accessible information to the public about the ongoing Opioid Crisis in America.

## What it does
Statistical data is often left in the hands of expert analysts and data scientists. Not very accessible to the average everday user. For a subject such as medicine, which can lead to life-changing effects for the better or worse, the American public is woefully underinformed about what they are putting into their bodies; and, what is going into their communities. The Opioid Data Center demystifies complex data and presents core insights to the public. Using a variety of technologies and data wrangling, we show correlation with a proven data set in accordance to movement of supply, crime rate, and opioid overdose.

## How we built it
The entire infrastructure is designed around a custom REST API. The UI was first designed using AdobeXD. Then the front end was coded using React + Redux to create a single page application that could support fast rendering of charts. The front end UI was also styled and coded from scratch using styled-components a popular React library for encapsulating styles. The backend is also a JavaScript based infrastructure, we used Node and Express to the write the REST API and Postgres as the database. We also used Python and Jupyter because of it's simple and fast methods to spin up a data analyzation environment.

## Challenges we ran into
The main challenge we ran into was the time constraint. We had more ideas that we wanted to include in the website, but we had to shrink the scope to something that was realistic for the hackathon. However, we plan on expanding this with the features we truly wanted in the future. 

## Accomplishments that we're proud of
We're proud of all the work that we've been able to achieve as a small team of two. Most importantly, we were proud of the amount of data analyzation we were able to do with the given data sets and API's we were able to find. 

## What we learned
We learned that we have to keep the scope realistic for the given team size and time constraints.

## What's next for Opioid Data Center
We wanted to add features like, narrowing down to city, zip code in correlation to crime_date and other data sets that would be the solution for the root cause. Another feature that's in the pipeline is generating articles about a specific opioid showing correlations of death and crime, an RSS feed of news related to the opioid, and a heat map showing more information. 



----------------



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

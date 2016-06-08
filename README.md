# Badges Project

Welcome to the Badges Project, please follow these requirements and [submit your code here](http://codeschool.com) when you think you are done.

## Project Requirements

In this project we will displaying a list of Code School badges using the array defined in the `src/data/badges.js` file.

We have included two components in this project: `Badge` and `BadgeList` and your solution should be written within these two files.

### Requirements for the `BadgeList` component

1. Import the list of badges from `badges.js` and the `Badge` component.

2. Map each element in the `badges` array to the `Badge` component.

### Requirements for the `Badge` component

The `Badge` component should:

1. Return an `<li>` element

2. Include information about the badge, including the title, short description and badge. More specifically, it should include:

  1. Include an `<img />` tag, with a `src` attribute pointing to the `url` property of the `badge` prop.

  2. Include at least one `<a>` tag with the `href` pointing to the course page along with the badge's ID.<br />
  _The course page url should look like this: https://www.codeschool.com/courses/33 (for Course ID #33)_

## Get Started
1. **Install [Node.js](https://nodejs.org)**. Need to run multiple versions of Node.js? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.**
3. **Make sure you're in the directory you just created.**
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

This project was scaffolded using the following [Cory House's Starter Kit](https://github.com/coryhouse/pluralsight-redux-starter.git).

## Submitting project

This project ships with some preliminary tests, so you can check your code before it gets submitted. In order to run the preliminary tests, run `npm test` on your console.

To submit the project, visit the [Project Page](#) and click the "Run Tests" button.

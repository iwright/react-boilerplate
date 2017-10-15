# Introduction to React

## About
A React boilerplate using NPM, Babel 6 and Webpack 3.

### Installation
The following instructions are for macOS using the Homebrew package manager.

Using homebrew install node and webpack.

* `brew install node`
* `brew install webpack`

#### Install required packages:
From our app, change directory so we are in **/.npm**. Install the required dependencies for the project, they are

* Babel
* React
* Webpack

`npm install`

##### Dev compiling:
Compiling as dev runs the following command `webpack -d --watch`. This allows our environment to continue watching for
file updates with a debug output.

* `npm run dev`

##### Prod compiling:
Compiling as prod runs the following command `NODE_ENV=prod webpack`, This sets our `NODE_ENV` environment to *prod* which
will remove any duplicate code and uglify for production.

* `npm run prod`

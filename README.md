# Simple Budget Application

## Table of Contents

* ##### Description
* ##### Node.js installation and setup
* ##### Webpack configuration for Start and Build scripts
* ##### Git Configuration


***

#### Description

Build your own custom budget for monthly income and expenses.

* Add, Edit or remove expense items to calculate **Total Expenses**.
* Calculate fixed cost ie. Debt Orders.
* Declare salary, tax, UIF to generate **Net Pay** and finally **Net Income** figures.
* Calculate **Monthly Disposable Income**.

***

#### Installing project dependencies

Use the following in the command line to install all project dependencies:

```
$ npm install
```

***

#### Webpack configuration for Start and Build scripts

The webpack scripts are configured in the * * webpack.config.js * * file.

Use `npm run start` to initialise the `webpack-dev-server --mode development` development script that is setup in the * * webpack.config.js * * file.

Use `npm run build` to initialise the `webpack --mode production` production build script. This creates the distribution directory called **build**.

***

#### Git Configuration

Recommended local or global Git configuration:

```
[core]
autocrlf = input
```

- Setting `core.autocrlf` to `input` will prevent CRLF line ending from being checkout out or in, keeping the standard for the project to LF only line endings.

***

Neil Bolton: http://www.webcycle.co.za

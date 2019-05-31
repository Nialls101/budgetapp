# OnBudget - Budget and expenses calculator

## Table of Contents

* **Description**
* **Node.js installation and setup**
* **Webpack configuration for Start and Build scripts**
* **Git Configuration**


***

### Description

Build your own custom budget for monthly income and expenses.

- [x] Add expense items.
- [ ] Edit expense items.
- [x] Remove expense items.
- [x] Calculate **Total Expenses**.
- [x] Calculate **Fixed Costs** ie. Debt Orders.
- [x] Add income items.
- [x] Add savings items.
- [ ] Declare salary, tax, UIF to generate **Net Pay** figures.
- [ ] Generate **Net Income** figures.
- [ ] Calculate **Monthly Disposable Income**.

***

### Installing project dependencies

Use the following in the command line to install all project dependencies:

```
$ npm install
```

***

### Webpack configuration for Start and Build scripts

The Webpack scripts are configured in the *webpack.config.js* file.

```
$ npm run dev
```
Use `npm run dev` to initialise the `cross-env NODE_ENV=development webpack-dev-server --open --hot` development script that is setup in the *webpack.config.js* file.

```
$ npm run prod
```
Use `npm run prod` to initialise the `cross-env NODE_ENV=production webpack --progress --hide-modules` production build script. This creates the distribution directory called **build**.

***

### Git Configuration

Recommended local or global Git configuration:

```
[core]
autocrlf = input
```

- Setting `core.autocrlf` to `input` will prevent CRLF line ending from being checkout out or in, keeping the standard for the project to LF only line endings.

***

Neil Bolton: http://www.webcycle.co.za

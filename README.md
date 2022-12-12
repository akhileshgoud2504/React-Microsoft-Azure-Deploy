# react-web-app
A React web app that is built with testing in mind

## How to get started

### Install stuff

```bash
npm init -y
npm i create-react-app
npx create-react-app my-app
cd my-app
npm start
```

### 🧪️Testing strategy

| Expected Behavior  | Tested? | Test Type  | Technologies  |
|---|---|---|---|
| A URL with the right text exists  | 🙅‍♂️ |  |  |
| App renders correctly  | 🙅‍♂️ |   |   |
| URL is correct | 🙅‍♂️ |   |  |
| App looks as expected on web and mobile  | 🙅‍♂️ |   |   |
| Front-end performance is at least a B  | 🙅‍♂️ |   |   |
| App is secure  | 🙅‍♂️ |   |   |
| App is accessibility friendly  | 🙅‍♂️ |   |   |

### Run the tests that come with our app

* In a new terminal `npm run test`

Now that everything is working, let's push this up to CI so that we can make sure it continues to work on other computers besides ours.

### Create CI Pipeline

* A little about [Github Actions](https://github.com/features/actions)
* Use the UI to setup a Workflow
* Paste in the following

```yaml
name: CI
env:
  SCREENER_API_KEY: ${{ secrets.SCREENER_API_KEY }}
  SAUCE_USERNAME: ${{ secrets.SAUCE_USERNAME }}
  SAUCE_ACCESS_KEY: ${{ secrets.SAUCE_ACCESS_KEY }}

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install dependencies 📦
      #Using npm ci is generally faster than running npm install
      run: |
        cd my-app
        npm ci
    - name: Build the app 🏗
      run: |
        cd my-app
        npm run build
    - name: Run component tests 🔸
      run: |
        cd my-app
        npm run test
    - name: Start the app 📤
      run: |
        cd my-app
        npm start &
        npx wait-on --timeout 60000
```
* Add secret variables
* Commit and watch it 🏃‍♀️


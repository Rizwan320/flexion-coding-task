# Flexion Coding Task

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [5 Improvements](#5-improvements)
3. [Installation](#installation)
4. [Running Tests](#running-tests)
    - [Unit Test](#unit-test)
    - [End-to-End (E2E) Test](#end-to-end-e2e-test)


## Technologies Used
- Next.js
- React Icons
- Jest
- Cypress
- Storybook
- AntD / TailwindCSS

## 5 Improvements
1. Currently each unit converter has its own file in its respective quantity folder. I would convert each file into folders so unit tests can be added for that in the given folder.
2. Due to typescript types causing issues for the structure I have, I was not able to divide frontend components into smaller chunks. I would divide the frontend into further components to increase code-reusibility and extendibility.
3. I had integrated Storybook for the project since I could not divide the frontend into smaller components. I would also write user stories from atomic to page level components to make sure each component handles all the states appropriatly.
4. I would write comprehensive unit tests covering each unit converter and each edge case so we can reduce the possibility of bugs in the conversion to almost zero.
5. I introduce some common components like Select, Input and Table. I would add an atomic library that has a lot more customizations for atomic components. 
6. I would introduce much stricter lint/prettier configuration with pre-commit hooks to ensure code quality and formatting.


# Installation
To install Flexion Coding Task, you can use npm:
### Install Dependencies
```
npm i
```
### Run Locally
```
npm run dev
```
### Build
```
npm run build
```

## Installation
### Unit Tests
```
npm run test
```
### E2E Tests
```
npm run cypress
```

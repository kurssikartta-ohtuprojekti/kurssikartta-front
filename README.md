# kurssikartta-front

[![Build Status](https://travis-ci.org/kurssikartta-ohtuprojekti/kurssikartta-front.svg?branch=master)](https://travis-ci.org/kurssikartta-ohtuprojekti/kurssikartta-front)

## Introduction

This repository contains frontend code for course map software (Kurssikartta), coded during University course 'Software development project, Summer 2018'. The software is meant to help students to gain information about the courses provided by departments of computer science and mathematics. The application utilizes React and Node.js

## Project links

### Application links

* [Kurssikartta-sovellus](https://kurssikartta.herokuapp.com/)
* [Backend](https://github.com/kurssikartta-ohtuprojekti/kurssikartta-back)
* [Course list](https://docs.google.com/spreadsheets/d/1K0w4aGHVwqZJpB8wm9sa9eye3nsQXPn2KvacnZGmlh8/edit#gid=91902172)

### Documentation
* [Backlog and progress](https://docs.google.com/spreadsheets/d/1PXgQVgB_MMsUWzie6D0eFcQnCfmKfAFmBePvULNeHoE/edit#gid=422100513)
* [Diagrams and sequences](https://github.com/kurssikartta-ohtuprojekti/kurssikartta-front/tree/master/docs/diagrams_and_use_cases)
* [Backend docs](https://github.com/kurssikartta-ohtuprojekti/kurssikartta-back/tree/master/docs)


## Development

### How to run locally

To run the frontend locally, you will need [Node.js](https://nodejs.org/en/). Then in order to run it, navigate to the root of the repository and run `npm start`. You might have to run `npm install` first if you're lacking some packages.

### Git workflow

New features must have a branch. Pushing directly to master is not allowed and you should employ following protocol:

* `git pull origin master`
* `git checkout -b branch-name-here`
* codecodecode
* `git add your-files`
* `git commit -m "commit msg"`
* `git push origin branch-name-here`
* Create pull request of your push in Github
* Let your teammate review and accept it
* Merge (if teammate didn't already)

### Build pipeline

When code is pushed to Github and a pull request to master branch has been made, Travis CI will run tests for the project and if passed, the project is deployed in Heroku.

### Testing

You can invoke the unit tests with `npm test`

### Programming help

* [Fullstack](https://fullstackopen.github.io/)

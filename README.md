# AdonisJS v6 http server and scheduler boilerplate

Simple boilerplate for setting up an http server together with a job scheduler in an AdonisJS 6 project.\
This repo is linked to a related article on the topic (it will be published soon).

## Introduction

The repo just contains a basic AdonisJS v6 API server setup, together with an integreted scheduler service which is instantiated on server start-up.
The scheduler has been set up via the new `@adonisjs/lock` package, which is based on [Verrou](https://verrou.dev/docs/introduction) and provides an easy way to manage distributed lock, in order to address concurrency issues between multiple server instances.

## Installation

To run the project, just clone the repo, install the dependencies and perform the migrations.\
You are ready to define your routes and jobs!

## Usage

For defining new jobs, create a class extending `BaseJob` abstract class in a new fine in the `jobs` directory. Then schedule them in the `start/scheduler.ts` file, via the `addJob` method.

```typescript
import NewJob from '#jobs/new_job'

[...]

scheduler.addJob({
  key: 'new-job',
  cronExpression: '* * * * *',
  job: new NewJob(),
})
```

Feel free to download this boilerplate and start working on it. Start a new project from scratch and just copy the files you are interested in, if you are not implementing an http server. Modify the config files or start with a new project and install Verrou from scratch for selecting the database provider you prefer.

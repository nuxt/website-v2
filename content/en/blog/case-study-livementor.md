---
title: Case Study / LiveMentor
description: LiveMentor is one of the world's leading education companies focused on entrepreneurship. They decided to migrate their existing front-end to Nuxt. We met with Romain and Alexandre to talk about their journey.
imgUrl: blog/case-study-livementor/main.png
date: 2021-06-01
tags:
  - case-study
  - nuxt-migration
---

For the Case Studies series, we've been talking to companies using Nuxt to build their product. We'll explore their journey into the framework and its ecosystem, examine the variety of projects you can use Nuxt for, and consider the challenges they encountered and benefits they experienced.

We're starting this series with [LiveMentor](https://www.livementor.com/), a company helping entrepreneurs through mentoring and courses. Happy reading!

### What is LiveMentor ?

LiveMentor is one of the world's leading education companies focused on entrepreneurship. We help creators to go from the idea stage to being able to make a living from their projects. So basically being profitable. We have been doing online courses for almost 10 years now, and trying a lot of different ways to teach online. We have tried what we called CBC (cool-off based courses), soft courses, courses with only content and eventually we decided four years ago to focus on one-on-one mentoring. Our three months' training is powered by a messaging app where you can chat with your mentor. We have trained more than 10,000 people so far and we are now on track to train 10,000 people per year.

Our platform is combining technology with storytelling teachers and community integration. We teach in the topics that are the most important for someone who's starting a business, sales, marketing, hiring, financing, business planning, and all the basics that you need when you are creating a company.

We focus on helping you start a business, quit your salary job and be able to live from your own activity. We have students in 30 countries, but all our lessons are in French, so French people leaving abroad. We have 100 people working at LiveMentor.

### How did you discover Nuxt?

We started LiveMentor as a monolith app on a Rails stack, which allowed us to iterate quickly during the first years. Two years ago, we decided to solidify our codebase, and chose VueJS to propose a rich client-side experience.

To make the transition progressive, we built micro Vue apps functioning on page levels, with a wrapper still rendered by Rails. But loading times were increasing, and we then knew we had to go a step further.

We found Nuxt at this time, via Twitter, and made a Proof of Concept project that went very well. Since then we're moving all our pages to Nuxt progressively.

### So you're making a progressive transition?

Yes, and we're now close to the end. We really wanted to reduce that transition phase, so we extracted features "as-is" to Nuxt. It's important to say that Nuxt made it really easy to make this progressive transition, it all fits together very simply.

Regarding deployments, Nuxt also helps a lot by abstracting the Node parts. We're using Heroku, and with a well configured Docker, it was seamless.

### Are you using dynamic or static rendering? Why?

We use dynamic rendering because our pages are not static and we have a lot of content updated constantly, so we use SSR to do this because it's not really a static site.

We are focused like crazy on reactivity because all our pedagogical experience, all the learning experiences is based on the messaging app between the mentor and the students. We had trouble with our previous messaging system, latency and messages not showing up.

The Firebase plus Nuxt combo made it much better.

![LiveMentor dashboard](case-study-livementor/mockup-m1-3.png)

### What is your favorite feature?

The first feature that made us choose Nuxt was the project's architecture. Be it file-based routing or folders separation, it makes all fit in an intuitive way. Just dropping a file in your `pages` folder without having to configure a router is a must.

For the moment, we use Vuex a lot, but we're thinking about moving a little bit from it by leveraging the Composition API.

### Do you have performances benchmarks before & after using Nuxt?

On the migrated pages, we managed to cut by half our loading time. When we launched the new messaging, one of the first feedback from our users was "Wow this is really fast!".

We also noticed that the team velocity increased, as we can now have people who only focus on the front-end, and others on the API. There's a big bonus in development time. But we still work with cross-functional teams, where we're allowed to do Pull Requests in all repositories! So the teams are not siloed by technologies, but more focused.

### Would you recommend Nuxt?

Yes, of course. We have no doubts about the framework's future, it's well maintained by a solid team. And the community and Sébastien Chopin are really reactive to our messages and there is a community around it which is going to grow big in the next few years. So of course I would recommend it.

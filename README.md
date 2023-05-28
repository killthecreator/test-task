# Contact card builder / Covid stats checker

To run the app you need to clone this repository and run `npm install` to load all the packages

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Since we don't have welcome page, you will be automatically redirected to 'Contacts' route.

### `npm run build`

Builds the app for production to the `build` folder.\

You probably won't need this option, since i made a production build for you:
https://test-task-mu-six.vercel.app/

## App features

In the app we have two main routes:

### `.../contacts`

Here we have a card editor page, where user can create/edit/delete contact cards.
Page is empty by default and absence of cards is indicated by a window.

To create a new card you have to click a button 'Create Contact' and fill a form. All form fields are required and validation goes through `react-hook-form`.

When card is created it appears on the screen and now you can edit it, delete or got to subroute of contact details, clicking 'More contact details' button.

The last option will redirect to private route with specific card with more detalized info about the contact. This route is only available for each card only in case the card exists. Otherwise it will redirect you to 404 page.

All the cards are stored locally via redux. I used `@reduxjs/toolkit` package with slices approach to handle the state of the app.

So, when you are navigating through the app, the cards won't disappear, since the are stored within the session.

As was metioned before, every card has it's unique ID generated with `uuid` library. It helps to manipulate exact card user wants to and carefully handle the state.

### `.../chartsnmaps`

On this page you can see three main components:

1. Pie diagram, showing current worldwide Covid-19 death/recovery ratio and general cases/deaths/recovery numbers;
2. Line graph, showing Covid-19 dates/cases approximation;
3. Worldmap with markers for each country available on the API. Clicking on each marker shows a popup with country name, active Covid cases, death number and number of recovery cases.

First two diagrams are made with `react-chartjs-2` library and the third one made with `react-leaflet`.

Extra:

### `.../404`

When user tries to reach a non-existing route, it will lead to 404 page.

App is fully responsive and adaptive.

## What else is used

1. App was made using `create-react-app` with typescript template (P.S. `create-react-app` is not recommended way to maintain react application anymore even via official React docs, but since it was required made the app using it);
2. Tailwind CSS for app styling;
3. Redux(Redux Toolkit) for state management;
4. `shadcn/ui` for UI and styling the components;
5. `uuid` for generating unique IDs for contacts and map markers where they didn't have one;
6. `react-router-dom` for app routing;
7. Icons from `lucid-react` library;
8. `react-hook-form` for form handling and validation;
9. `@tanstack/react-query` and `axios` for handling API calls.

## API

I used suggested API https://disease.sh/v3/covid-19/ with Covid-19 data to maintain graphs and leaflet map. I made three separate functions for each API endpoint: `/all`, `/historical/all?lastdays=all` and
`/counties`. All the routes are than handled with react-router in corresponding components.

1. GET request to the first endpoint returns an object with current worldwide Covid-19 situation and data from it used within the first section of `.../chartsnmaps` page with the pie diagram.
2. GET request to the second endpoint returns an object with Covid-19 situation per day in format `[date]:'number of cases'` and data from it used within the second section of `.../chartsnmaps` page with the line graph.
3. GET request to the third endpoint returns an object with current Covid-19 situation per country and data from it used within the second section of `.../chartsnmaps` page with the line leaflet map.

All the API objects are mocked as custom types for typesafety.

## P.S.

I'd probaly use Next.js even for simple apps like this one, because in my opinion it is easier to handle routing with what Next.js provides us in that terms, especially with dynamic routes, like those with Contact routes with IDs.

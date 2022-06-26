# Multistep form built with pure Scss
This is a presentation of [Kodiraonica](https://kodiraonica.dev/)'s way of teaching. We are a coding school where we teach HTML&CSS, Javascript and React. This event is showcasing what we teach and to what extent.

### How to start this project?
1. clone the repo
2. run `npm install`
3. run `npn start`
4. open `http://localhost:3000/`

### How to follow this project on the meetup?
Go to `start-here` branch and study the architecture. Install all the dependencies and run the local server.

### What is this project built with?
This project uses [Vite](https://vitejs.dev/) to compile Scss and to lint and format the code as well as to serve the page.

### Is this really a pure Scss project, there is some JS code there?
The whole logic for managing states in the form is built using only Scss. The Js code is only needed to generate markup, but if we did not use Vite and local server, that code could have been easily in static markup in `index.html`
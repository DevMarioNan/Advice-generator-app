# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This application gives you a random advice everytime you click the dice button.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](https://i.ibb.co/PMkdr2h/image-2022-10-25-193703694.png)

### Links

- Solution URL: [My own solution code on github](https://github.com/DevMarioNan/Advice-generator-app.git)
- Live Site URL: [Live site at vercel](https://advice-generator-app-snowy.vercel.app)

## My process

I began by building the page before making the api calls.
After making the looking of the site i started implementing the api call functionality.
I have been learning react for sometime but this is my first time using it on a project but it was an amazing project and i've learned a lot .

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

One of the challenges i've encoutered while working on this project was to pass data from a child component to a parent component and i've solved it by passing a function to the child to change a state in the parent component

This function is in the parent component and will be passed to the child component to return the data from the api to the parent component

```js
const handleClick = (response) => {
  const newAdvice = response.slip.advice;
  const newId = response.slip.id;
  setAdvice(newAdvice);
  setId(newId);
};
```

After passing the function i used the fetch api to make a call to the api and then return the response to the parent child

```jsx
  <button onClick={async ()=>{
                const response =await fetch(adviceURI);
                const advice = await response.json();
                handleClick(advice);
          }}>
```

### Continued development

- ~~View the optimal layout for the app depending on their device's screen size~~
- Adding animation to the site

### Useful resources

- [w3schools](https://www.w3schools.com) - This website helpen me with styling

## Author

- Website - [Mario Nan](https://github.com/DevMarioNan)

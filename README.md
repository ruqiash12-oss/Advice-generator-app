# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon



### Links

- Solution URL: https://www.frontendmentor.io/solutions/advice-generator-app-_T1_AfvdZD
- Live Site URL: https://ruqiash12-oss.github.io/Advice-generator-app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Fetch API
- localStorage

### What I learned

This project helped me practice working with APIs and improving the user experience with small but useful features.

- **Fetching data from an external API:**  
  I used `fetch()` to get a random advice from the Advice Slip API and then updated the UI based on the response.

- **Updating the DOM dynamically:**  
  I used `textContent` to update both the advice ID and the advice text on the page.

- **Persisting data using `localStorage`:**  
  I stored the last advice in `localStorage` so it remains visible after refreshing the page.

- **Showing a loading state:**  
  I displayed a loading overlay while requesting new advice, then hid it after the request finishes.

```js
button.addEventListener('click', () => {
  showLoading();
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      adviceId.textContent = `Advice #${data.slip.id}`;
      adviceText.textContent = `"${data.slip.advice}"`;
      localStorage.setItem('advice', JSON.stringify(data.slip));
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
    })
    .finally(() => {
      hideLoading();
    });
});
```

### Continued development

In the future, I’d like to:

- Add smoother transitions/animations when advice updates
- Improve accessibility (keyboard navigation, focus states, ARIA labels)
- Display a user-friendly error message instead of only logging to the console

### Useful resources

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Helped me understand how to work with network requests in JavaScript.
- [MDN Web Docs - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - Useful for saving and restoring the last advice on refresh.
- [Frontend Mentor](https://www.frontendmentor.io/) - Great platform for front-end practice and feedback.

### AI Collaboration

I used AI tools to support development and learning during this project:

- Tools: ChatGPT / GitHub Copilot
- How I used them: debugging, improving code structure, and writing a clean README
- What worked well: faster iteration and clearer explanations
- What didn’t: I still needed to test the UI and confirm API behavior manually

## Author

- Frontend Mentor - [@ruqiash12-oss](https://www.frontendmentor.io/profile/ruqiash12-oss)
- GitHub - [@ruqiash12-oss](https://github.com/ruqiash12-oss)

## Acknowledgments

Thanks to Frontend Mentor for the challenge and to the community for feedback and inspiration.

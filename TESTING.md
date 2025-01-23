# Fruits hold 'em - Testing

[Live link to website](https://lizzyongit.github.io/sotis-lifecoach/index.html)


I have been testing throughout developing, fixing issues as I went. 
- - -

## Contents

* [Automated testing](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [JavaScript Validator](#javascript-validator)
  * [Lighthouse](#lighthouse)
* [Manual testing](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * Issues
    * [Accessibility](#accessibility)
    * [Responsiveness](#responsiveness)
  * [Full Testing](#full-testing)


- - -

#### Responsiveness


I used Chrome developer tools to keep track of responsiveness, placement of buttons and how the content and background image behaved together on different sreen sizes. 

The background image was a challenge, as it's a frame that needs to be around the content at all time. I started with vh100 and vw100 which seems ok, but then when you tilt your smartphone, the game and credit info sections overlapped the frame. So I needed some different css properties. I tried adding the background to another div above the content, but this did not work, and I tried different size values for the background. But then I found *object-fit: fill* [here](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit), and tried it out. This worked. It was mainly luck to finally solve it. Now I just had to adjust padding and margin for different screens sizes so the content would fit inside the frame.


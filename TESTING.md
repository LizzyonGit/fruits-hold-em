# Fruits hold 'em - Testing

[Live link to website](https://lizzyongit.github.io/fruits-hold-em/index.html)


I have been testing throughout developing, fixing issues as I went. 
- - -

## Contents

* [Automated testing](#automated-testing)
  * [HTML validator](#html-validator)
  * [W3C validator](#w3c-validator)
  * [JavaScript validator](#javascript-validator)
  * [Lighthouse](#lighthouse)
* [Manual testing](#manual-testing)
  * [User story testing](#user-story-testing)
  * [Issues](#issues)
    * [Logic](#logic)
    * [Accessibility](#accessibility)
    * [Responsiveness](#responsiveness)
  * [Full Testing](#full-testing)

## Automated testing

### HTML validator

No issues for index.html and 404.html.


### W3C validator

For style.css, there are no errors. There are some warnings related to the imported Google Fonts and used variables, that can be ignored. There are also warnings about setting the same colours for backgrounds and borders onbuttons and the middle row when there is no winning combination, which I did on purpose to override the boostrap button and border colours, and for the middle row, the border is the same colour but it is distinctive from the background colour, to highlight the middle row is the row the whole game is about.


### Javascript validator

I used [JSHint](https://jshint.com/) to validate my script.js file. With the setting ES6, the code passes, part from one error: **One undefined variable: bootstrap**. This has to do with **let resultModal =  new bootstrap.Modal(document.querySelector('#result-modal'));**. Apart from the Stackoverflow post that I took this from, the code is also in the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/components/modal/#via-javascript). So I did not think I needed to change the code, I suspected this had to with the Bootstrap JavaScript file not being read because it is external. I went to look for this error and if I needed to do anything, and I found [this post](https://code-institute-room.slack.com/archives/C026PTF46F5/p1718936785177029) on Slack with the same issue, saying I can indeed ignore this. 


### Lighthouse testing

#### Index.html

Along the way, i have used Lighthouse for checking the colour contrast and it reminded me to add hidden headings for accessibility.

Running the home page in Lighthouse, for desktops, results in 100% for accessibility and best practices, and 97% for performance:

The main suggestions for the performance are related to Bootstrap and Google Fonts, which I can not avoid if I want to use them. 

It also suggests a more efficient cache policy, which is related to static assets not being cached, with my background image as the most important one. According to the [Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl), to fix this I would need to change a configuration in the server, which is beyond the scope of this project.

Running Lighthouse in incognito mode gives 100% on performance.

![Lighthouse result desktop](docs/screenshots/lighthouse-index-desktop-incognito.png)

For mobiles, the performance is 88% with a warning that the h1 element, the title, is the element that takes the longest to load. I really like the font for the title and I think the size is perfect, so I would not want to change it. When I run Lighthouse again for mobiles in incognito mode, the performance is 98% with the same issues as for desktops. So then there is no mention of the title taking too long to load. 

![Lighthouse result mobile](docs/screenshots/lighthouse-index-mobile-incognito.png)


#### 404.html

The first Lighthouse report gives 99% on performance and 100% on accessibility and best practices.

Any issues it mentions are the same as for index.html. In incognito, it gives 100% for performance.

![Lighthouse result desktop](docs/screenshots/lighthouse-404-desktop-incognito.png)

For mobile, it gives 98% for performance, and apart from the same issues as before caused by Bootstrap, Google Fonts and cache policy, it finds an issue with the used font for the h1 element beacause of a large layout shift. But the score 98% is good so I am keeping this as it is. However, running it in incognito mode, first I had 88%, but when I tried it again, it got to 98% as well, with those same issues as before.

![Lighthouse result mobile](docs/screenshots/lighthouse-404-mobile-incognito.png)


- - -

## Manual testing

### User story testing

|   User story                                                            | How it is achieved    |
|  -----------                                                             | -----------           |
|**As a gamer, I want to:**|
|easily navigate on the game page on any device, so that I get a user-friendly experience,|Responsive layout, favicon, possible to play with keys as well as mouse, only a few buttons that you need to click|
|find information on how the game works, so that I can play the game,|**How to play** button which you can click to trigger modal with information on how the game works.|
|be able to play the game,|**GO** button that you use both to start the game and spin the fruits, the game is playable with keys as well as with a mouse and not colour dependant as held **HOLD** buttons change text as well as colour.|
|have the possibilty to hold certain fruits, so that I can increase the chance of winning,|**HOLD** button under each column which you can click to hold a fruit.|
|keep track of how many spins I have left, so that I can adapt my tactic,|**Spins left** in the credit info section, which counts down from 3 to 0.|
|keep track of my credit, so that I can follow my progress,|**Credit** in the credit info section, which increases with 10 for each win, and decreases with 5 at the start of each new round|
|keep track of how many rounds I have played, so that I can follow my progress or decide if I should stop or continue,|**Rounds played** in the credit info section, which increases with 1 at the start of each new round, and the **Game over** modal which pops up after the last round you played if you have no credit left, with the final number of rounds you played.|
|be able to quit or restart the game, so that I have control over the game without needing to leave the website.|**Restart** and **Quit** buttons in the credit info section, the **Quit game** modal triggered by the **Quit** button, with buttons to confirm if you want to quit, or if you change your mind you can stay on the current game, and the **Game over** modal after last round, with a button to restart and a button to quit the game.|
|**As a site owner, I want to offer visitors a:**|
|fun and addictive, user-friendly game, so that I can get a steady user base and gain traffic to my website.|Responsive layout, favicon, the game is easy and fast to play with not too many clicks, and the game is playable with keys as well as with a mouse.|




### Issues

Here I want to highligt some issues and bugs that were not straightforward to fix.

#### Logic

As I started out writing the logic with increasing and decreasing credit, increasing game count, decreasing spins, I stumbled on some minor issues like displaying the correct credit information. I started out calculating with the string value from the UI, which caused problems with additions since the number would just concatenate at the end of the other number, instead of adding up. I thought about converting the string value to a number, which caused an error in the console. So I realised I needed to first calculate and then display it in the UI, like in CIs walkthrough project *Simon says*. I copied the way the *showScore* function works in that project, making the calculations first and then calling the function *showCreditInfo* to show the outcome each time.


The **GO** button was working in a way that the **Spins left** would decrease with 1 each time you click, but this was not good for when you start the game by clicking **GO** when there are no fruits yet, because then you would start out with only two spins left, instead of three. As I believe it is most user friendly to enable the **GO** button as a way to start the game, even if the **Restart** button also starts a new game, I did not want to disable it in the start and force users to use the other button. So I rewrote my code so that, when there are no fruits and the game has not started yet, the **GO** button calls the same function as the **Restart** button, and when there are fruits, it runs the original code with the decreasing spin count. So to start the game, you can click either button, and during the game when you start over, you click **Restart**.


Initially, when the spin count was 1 and you would click **GO**, or when a winning combination would come up, a new round started right away; the spin count went to 3 directly with the new credit and games played count. So I wanted to display this final spin's result, even though you should not be able to do anything since you would have 0 spins left, or the round ended by a winning combination. Inspired by CI's example *Simon says*, I added a *setTimeout* method to display this final result for the user, before starting the new round. During this timeout, you can not click **HOLD** or **GO**, and it will automatically start a new round, you do not have to click anything. This way it also clear how the counting works, as the inbetween step is not missing, and you can for example see that you gain 10 credit with a winning combination, but you loose 5 at the start of the new round. 


After implementing the hold functionality and testing it, I noticed that I needed to change my code for determining the winning combination, as I got winning combinations when the 3 fruits in the middle row were not the same. My code for determining the winning combination looked at the fruits stored in the array at the three indexes used for the middle row, not the fruits actually on the screen in the middle row. My hold functionality updates the array from which the fruit are picked each spin, but it simply does not pick the fruit for held columns. This means that the array stores new fruits every time you spin, while the screen can hold certain columns to keep the same fruits. This discrepancy was easy to fix by making the winning combination function check what is on the screen instead of the array. I am aware that it is not an ideal solution, it would be better to not change certain array indexes at all if a column is held, so the computer does not need to choose random fruits when it is not needed. It would clean up the code, and in a larger program it would benefit the performance to not run unnecessary code.

#### Accessibility

The game uses a lot of colour to check the contrast for. The Chrome developer tools show the contrast which prompted me to change some button text colours. 


I also had to change my colour background for a winning combination from gold to green, since gold did not work with a winning combination of lemons. I wanted to keep the lemons, so changed the background to work together with all fruits. I tested this by just adding it to all the columns first, so I could see it with all the fruits after a few spins. I added a gold border for the background, since gold does convey that winning feeling. 


I focuses a lot on using this game with the keyboard. I think clicking GO all the time is not user friendly, it is easier to press Enter or Space. I found this myself when I was testing the game. I did not have to do antyhing to get Space and Enter to work for clicking the button. But I did encounter other problems.

##### Disabled buttons

For the game flow, some buttons are disabled in some situations. You can not hold three columns, so when two HOLD buttons are clicked, the third HOLD button becomes disabled. But I noticed you could still press the key on it to hold it. Also, after a round with three spins or a winning combination, the game pauses a short time to see the result before starting a new round with three spins. During this time, all HOLD buttons and the GO button are disabled. But I noticed you could still press the Space or Enter key on the GO button, which caused the spins to go negative during this short time. So I needed to find out a way to prevent this from happening, as you should not be able to do anything with disabled buttons.

I spend some time finding a solution for this, as I looked specifically for a way to prevent the default behaviour of Enter and Space for disabled buttons. I added a function with the *preventDefault()* method which worked for before the game starts, when there are no fruits and the HOLD buttons are disabled, to prevent holding empty columns. But the function prevented normal key behaviour also for not disabled HOLD buttons, and it did not work when the GO buttons was disabled. I also tried the function with the *blur()* method that I found, but this did not work as it should either. So I thought I should call the function in each of the rounds and specifically for each button, which seemed to get complicated. I thought it should be easier. I thought that maybe I should give the specific bootstrap *disabled* class this particular function I made, rather than the button itself, but that didn't get me anywhere when I googled for it. 

Then I googled for Bootstrap classes and what to do to prevent key events on disabled buttons. In the Bootstrap documentation, I went to the root of the problem by looking into how to change the disabled class in bootstrap, then I found the confirmation that the *disabled* class does not prevent key events [here](https://getbootstrap.com/docs/5.3/forms/overview/#disabled-forms), only pointer-events. It says you need to add *tabindex -1* to prevent focus. So it turns out it is better to add the *disabled* attribute instead of the class, because the attribute already prevents focus. When I was creating these disabled buttons initially, I went for the *disabled* class because it seemed easier, and I remembered the exact Javascript code for accessing them. I did not think of this crucial difference for key events. So I freshed up my memory about working with attributes instead of classes, and rewrote the code. Attributes are mentioned in the LMS, but I used external sources for more code like *toggleAttribute* from [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute). It was fairly easy to change this and I did not need any more functions to make it work like it should.

##### Focused buttons

When I was testing the keys with the different buttons, I noticed a difference between hovering with a mouse or focusing with a key. I had added some *:hover* pseudo-classes in my css, but not any *:focus* pseudo-classes. I added this to immitate the hovered effect, and while I read more about *:focus*, I found out about *:focus-visible* [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) and how this can be more user friendly. This was applicable for my *Quit* and *Restart* buttons, since when you focus on it and then clicked with the mouse, after moving the mouse, the focus background colour was still there, which was very unnecessary. Using *:focus-visible*, this background colour is removed when you move the mouse away.

I also noticed that all buttons had a border around them when focused, making it clear which button you are on since they appear larger, together with the different background colour of the button. Except for the button **How to play**, which only changed colour and did not have this extra border around it. I could not find out why this was, as it was a Bootstrap button like the others, with custom styled colours. I found [a post](https://github.com/twbs/bootstrap/issues/38903) that this can happen, so I decided to focus on just adding it in my css for the button. I learned about *outline* and found that in Chrome developer tools, I can force a button in certain state. So I did that for the buttons that worked normally, to find out which code I needed to add for the button that did not work. That's how I added *outline: 0*, and *box-shadow: 0 0 0 0.25rem* with a yellow colour, to the **How to play** button, and now it works.

After I implemented a new modal, I noticed that the **GO** button looses focus after it's re-enabled at the beginning of a new round. This is bad when you play with the keys and you expect the focus to still be on the **GO** button, since you would have always clicked it at the end of the prevous round. It did not even have any visible focus anywhere else, but it did not respond to a Space or Enter. I thought this had to do with my new modal and I also got a warning about aria-hidden in the console. I found an easy way to fix the focus issue by just adding *buttonGo.focus();* after the line where the button is enabled again in the *gameDone* function. I found this solution here: https://laracasts.com/index.php/discuss/channels/vue/how-to-focus-on-an-input-after-disabling, and I double checked other documentation for this method.

The warning about aria-hidden seemed a much larger issue, as I found posts about it being an issue with the attribute *disabled*: https://github.com/WordPress/gutenberg/issues/56547, and about Bootstrap using this attribute while it should not: https://github.com/twbs/bootstrap/issues/41005. So I did find a workaround [here](https://stackoverflow.com/questions/62677291/aria-hidden-elements-do-not-contain-focusable-elements-issue-when-modal-is-sho) that says you should use aria-modal for modals, but now I see in Chrome develop tools that this is actually added in all the modals, and not aria-hidden, and then I don't get this warning. When I got the warning, there was aria-hidden. But I did not do anything, so it may come back and is some kind of random error. 


#### Responsiveness

I used Chrome developer tools to keep track of responsiveness, placement and size of buttons and how the content and background image behaved together on different sreen sizes. 

The background image was a challenge, as it's a frame that needs to be around the content at all time. It needs to be stretched and it is not a problem that the aspect ratio is not kept in this case, because it is only a decorative curly frame which can be a bit distorted and still look good. I started with vh100 and vw100 which seemed ok, but then when you tilt your smartphone, the game and credit info sections overlapped the frame. So I needed some different css properties. I tried adding the background to another div above the content, but this did not work, and I tried different size values for the background, like *cover*. In the end, *background-size: 100% 100%* worked. First I had *object-fit: fill* as well, as I found these two lines together on some forum, and thought that was the one that did the trick, but I could comment it out in Chrome developer tools without any effect. So I realised it was exactly this *background-size: 100% 100%* that did what I wanted. When I look up why, it makes sense that it works, since it sets the image to the full size of its parent element, the *body* in this case. And now I understand better what the different values do, since I found a clear description [here](https://cloudinary.com/guides/front-end-development/6-ways-to-stretch-a-background-image-with-css). I understand now as well that *object-fit* does not work on a body tag, it only works on *replaced elements*, as I read [here](https://www.sitepoint.com/using-css-object-fit-object-position-properties/). 
After I found this solution, I just had to adjust padding and margin for different screens sizes so the content would fit inside the decorative frame and not overlap it.



##### Different devices
The fruit symbols on my newer computer look different than on my older computer. I had to test if the background colour for a winning combination worked for both computers. 


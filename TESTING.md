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
    * [Calculations](#calculations)
    * [Accessibility](#accessibility)
    * [Responsiveness](#responsiveness)
  * [Full Testing](#full-testing)


- - -

#### Calculations

As I started out writing the logic with increasing and decreasing credit, increasing game count, decreasing spins, I stumbled on some minor issues like displaying the correct credit information. I started out calculating with the string value from the UI, which caused problems with additions since the number would just concatenate at the end of the other number, instead of adding up. I thought about converting the string value to a number, which caused an error in the console. So I realised I needed to first calculate and then display it in the UI, like in CIs walkthrough project *Simon says*. I copied the way the *showScore* function works in that project, making the calculations first and then calling the function *showCreditInfo* to show the outcome each time.


The **GO** button was working in a way that the **Spins left** would decrease with 1 each time you click, but this was not good for when you start the game by clicking **GO** when there are no fruits yet, because then you would start out with only two spins left, instead of three. As I believe it is most user friendly to enable the **GO** button as a way to start the game, even if the **Restart** button also starts a new game, I did not want to disable it in the start and force users to use the other button. So I rewrote my code so that, when there are no fruits and the game has not started yet, the **GO** button calls the same function as the **Restart** button, and when there are fruits, it runs the original code with the decreasing spin count. So to start the game, you can click either button, and during the game when you start over, you click **Restart**.


Initially, when the spin count was 1 and you would click **GO**, or when a winning combination would come up, a new round started right away; the spin count went to 3 directly with the new credit and games played count. So I wanted to display this final spin's result, even though you should not be able to do anything since you would have 0 spins left, or the round ended by a winning combination. Inspired by CI's example *Simon says*, I added a *setTimeout* method to display this final result for the user, before starting the new round. During this timeout, you can not click **HOLD** or **GO**, and it will automatically start a new round, you do not have to click anything. This way it also clear how the counting works, as the inbetween step is not missing, and you can for example see that you gain 10 credit with a winning combination, but you loose 5 at the start of the new round. 


#### Accessibility

The game uses a lot of colour to check the contrast for. The Chrome developer tools show the contrast which prompted me to change some button text colours. 


I also had to change my colour background for a winning combination from gold to green, since gold did not work with a winning combination of lemons. I wanted to keep the lemons, so changed the background to work together with all fruits. I tested this by just adding it to all the columns first, so I could see it with all the fruits after a few spins. I added a gold border for the background, since gold does convey that winning feeling. 


I focuses a lot on using this game with the keyboard. I think clicking GO all the time is not user friendly, it is easier to press Enter or Space. I found this myself when I was testing the game. I did not have to do antyhing to get Space and Enter to work for clicking the button. But I did encounter other problems.

Disabled buttons

For the game flow, some buttons are disabled in some situations. You can not hold three columns, so when two HOLD buttons are clicked, the third HOLD button becomes disabled. But I noticed you could still press the key on it to hold it. Also, after a round with three spins or a winning combination, the game pauses a short time to see the result before starting a new round with three spins. During this time, all HOLD buttons and the GO button are disabled. But I noticed you could still press the Space or Enter key on the GO button, which caused the spins to go negative during this short time. So I needed to find out a way to prevent this from happening, as you should not be able to do anything with disabled buttons.

I spend some time finding a solution for this, as I looked specifically for a way to prevent the default behaviour of Enter and Space for disabled buttons. I added a function with the *preventDefault()* method which worked for before the game starts, when there are no fruits and the HOLD buttons are disabled, to prevent holding empty columns. But the function prevented normal key behaviour also for not disabled HOLD buttons, and it did not work when the GO buttons was disabled. I also tried the function with the *blur()* method that I found, but this did not work as it should either. So I thought I should call the function in each of the rounds and specifically for each button, which seemed to get complicated. I thought it should be easier. I thought that maybe I should give the specific bootstrap *disabled* class this particular function I made, rather than the button itself, but that didn't get me anywhere when I googled for it. 

Then I googled for Bootstrap classes and what to do to prevent key events on disabled buttons. In the Bootstrap documentation, I went to the root of the problem by looking into how to change the disabled class in bootstrap, then I found the confirmation that the *disabled* class does not prevent key events [here](https://getbootstrap.com/docs/5.3/forms/overview/#disabled-forms), only pointer-events. It says you need to add *tabindex -1* to prevent focus. So it turns out it is better to add the *disabled* attribute instead of the class, because the attribute already prevents focus. When I was creating these disabled buttons initially, I went for the *disabled* class because it seemed easier, and I remembered the exact Javascript code for accessing them. I did not think of this crucial difference for key events. So I freshed up my memory about working with attributes instead of classes, and rewrote the code. Attributes are mentioned in the LMS, but I used external sources for more code like *toggleAttribute* from [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute). It was fairly easy to change this and I did not need any more functions to make it work like it should.

Focused buttons

When I was testing the keys with the different buttons, I noticed a difference between hovering with a mouse or focusing with a key. I had added some *:hover* pseudo-classes in my css, but not any *:focus* pseudo-classes. I added this to immitate the hovered effect, and while I read more about *:focus*, I found out about *:focus-visible* [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) and how this can be more user friendly. This was applicable for my *Quit* and *Restart* buttons, since when you focus on it and then clicked with the mouse, after moving the mouse, the focus background colour was still there, which was very unnecessary. Using *:focus-visible*, this background colour is removed when you move the mouse away.

I also noticed that all buttons had a border around them when focused, making it clear which button you are on since they appear larger, together with the different background colour of the button. Except for the button **How to play**, which only changed colour and did not have this extra border around it. I could not find out why this was, as it was a Bootstrap button like the others, with custom styled colours. I found [a post](https://github.com/twbs/bootstrap/issues/38903) that this can happen, so I decided to focus on just adding it in my css for the button. I learned about *outline* and found that in Chrome developer tools, I can force a button in certain state. So I did that for the buttons that worked normally, to find out which code I needed to add for the button that did not work. That's how I added *outline: 0*, and *box-shadow: 0 0 0 0.25rem* with a yellow colour, to the **How to play** button, and now it works.

#### Responsiveness

I used Chrome developer tools to keep track of responsiveness, placement and size of buttons and how the content and background image behaved together on different sreen sizes. 

The background image was a challenge, as it's a frame that needs to be around the content at all time. I started with vh100 and vw100 which seems ok, but then when you tilt your smartphone, the game and credit info sections overlapped the frame. So I needed some different css properties. I tried adding the background to another div above the content, but this did not work, and I tried different size values for the background. But then I found *object-fit: fill* [here](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit), and tried it out. This worked. It was mainly luck to finally solve it. Now I just had to adjust padding and margin for different screens sizes so the content would fit inside the frame.


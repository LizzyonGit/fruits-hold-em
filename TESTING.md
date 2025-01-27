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

#### Logic

As I started out writing the logic with increasing and decreasing credit, increasing game count, decreasing spins, I stumbled on some minor issues like displaying the correct credit information. I started out calculating with the string value from the UI, which caused problems with additions since the number would just concatenate at the end of the other number, instead of adding up. I thought about converting the string value to a number, which caused an error in the console. So I realised I needed to first calculate and then display it in the UI, like in CIs walkthrough project *Simon says*. I copied the way the *showScore* function works in that project, making the calculations first and then calling the function *showCreditInfo* to show the outcome each time.


The **GO** button was working in a way that the **Spins left** would decrease with 1 each time you click, but this was not good for when you start the game by clicking **GO** when there are no fruits yet, because then you would start out with only two spins left, instead of three. As I believe it is most user friendly to enable the **GO** button as a way to start the game, even if the **Restart** button also starts a new game, I did not want to disable it in the start and force users to use the other button. So I rewrote my code so that, when there are no fruits and the game has not started yet, the **GO** button calls the same function as the **Restart** button, and when there are fruits, it runs the original code with the decreasing spin count. So to start the game, you can click either button, and during the game when you start over, you click **Restart**.


Initially, when the spin count was 1 and you would click **GO**, or when a winning combination would come up, a new round started right away; the spin count went to 3 directly with the new credit and games played count. So I wanted to display this final spin's result, even though you should not be able to do anything since you would have 0 spins left, or the round ended by a winning combination. Inspired by CI's example *Simon says*, I added a *setTimeout* method to display this final result for the user, before starting the new round. During this timeout, you can not click **HOLD** or **GO**, and it will automatically start a new round, you do not have to click anything. This way it also clear how the counting works, as the inbetween step is not missing, and you can for example see that you gain 10 credit with a winning combination, but you loose 5 at the start of the new round. 


After implementing the hold functionality and testing it, I noticed that I needed to change my code for determining the winning combination, as I got winning combinations when the 3 fruits in the middle row were not the same. My code for determining the winning combination looked at the fruits stored in the array at the three indexes used for the middle row, not the fruits actually on the screen in the middle row. My hold functionality updates the array from which the fruit are picked each spin, but it simply does not pick the fruit for held columns. This means that the array stores new fruits every time you spin, while the screen can hold certain columns to keep the same fruits. This discrepancy was easy to fix by making the winning combination function check what is on the screen instead of the array. I am aware that it is not an ideal solution, it would be better to not change certain array indexes at all if a column is held, so the computer does not need to choose random fruits when it is not needed. It would clean up the code, and in a larger program it would benefit the performance to not run unnecessary code.

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

After I implemented a new modal, I noticed that the **GO** button looses focus after it's re-enabled at the beginning of a new round. This is bad when you play with the keys and you expect the focus to still be on the **GO** button, since you would have always clicked it at the end of the prevous round. It did not even have any visible focus anywhere else, but it did not respond to a Space or Enter. I thought this had to do with my new modal and I also got a warning about aria-hidden in the console. I found an easy way to fix the focus issue by just adding **buttonGo.focus();** after the line where the button is enabled again in the **gameDone** function. I found this solution here: https://laracasts.com/index.php/discuss/channels/vue/how-to-focus-on-an-input-after-disabling, and I double checked other documentation for this method.

The warning about aria-hidden seemed a much larger issue, as I found posts about it being an issue with the attribute *disabled*: https://github.com/WordPress/gutenberg/issues/56547, and about Bootstrap using this attribute while it should not: https://github.com/twbs/bootstrap/issues/41005. So I did find a workaround [here](https://stackoverflow.com/questions/62677291/aria-hidden-elements-do-not-contain-focusable-elements-issue-when-modal-is-sho) that says you should use aria-modal for modals, but now I see in Chrome develop tools that this is actually added in all the modals, and not aria-hidden, and then I don't get this warning. When I got the warning, there was aria-hidden. But I did not do anything, so it may come back and is some kind of random error. 


#### Responsiveness

I used Chrome developer tools to keep track of responsiveness, placement and size of buttons and how the content and background image behaved together on different sreen sizes. 

The background image was a challenge, as it's a frame that needs to be around the content at all time. I started with vh100 and vw100 which seems ok, but then when you tilt your smartphone, the game and credit info sections overlapped the frame. So I needed some different css properties. I tried adding the background to another div above the content, but this did not work, and I tried different size values for the background. But then I found *object-fit: fill* [here](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit), and tried it out. This worked. It was mainly luck to finally solve it. Now I just had to adjust padding and margin for different screens sizes so the content would fit inside the frame.



Different computers
The fruit symbols on my newer computer look different than on my older computer. I had to test if the background colour for a winning combination worked for both computers. 

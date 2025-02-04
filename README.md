# Fruits hold 'em

[Live link to website](https://lizzyongit.github.io/fruits-hold-em/index.html)

**Fruits hold 'em** is a slot machine game purely based on luck, for gamers and people who want to see how lucky they are today, or just enjoy playing this kind of games, without losing money.

Click **GO** and the fruit images will line up randomly each spin. You get three spins in one round to try to get a winning middle row with three of the same fruits. You can hold up to two fruits so that you can increase your chance to win. If you win a round, you earn credit. You can keep track of your credit, how many spins you have left the current round, and how many rounds you have played. You can play until your credit is finished, or when you click one of the buttons **Restart** or **Quit**. The button **How to play** triggers a dialog box with the rules of the game.


![Screenshot webpages on different devices](docs/screenshots/responsive-website.png)

## Index
- [Planning](#planning)
- [Features](#features)
- [Testing](#testing)
- [Technologies used](#technologies-used)
- [Deployment](#deployment)
- [Credits](#credits)

## Planning

### Site goals

The website aims to offer users a:
- fun and simple game to just enjoy and/or to quickly and easily test their luck,
- simple navigation on the game page, 
- responsive website across all screen sizes.

### User stories

#### As a gamer, I want to:

- easily navigate on the game page on any device, so that I get a user-friendly experience,
- find information on how the game works, so that I can play the game,
- be able to play the game,
- have the possibilty to hold certain fruits, so that I can increase the chance of winning,
- keep track of how many spins I have left, so that I can adapt my tactic,
- keep track of my credit, so that I can follow my progress,
- keep track of how many rounds I have played, so that I can follow my progress or decide if I should stop or continue,
- be able to quit or restart the game, so that I have control over the game without needing to leave the website.

#### As a site owner, I want to offer visitors a:

- fun and addictive, user-friendly game, so that I can get a steady user base and gain traffic to my website.

#### Tasks to achieve user stories

Create a:
- **How to play** button that triggers information on how to play, which combinations make you win, and how the game ends,
- responsive slot machine like box with:
  - three columns with fruits,
  - **HOLD** buttons under each column, with logic to:
    - hold a column so it does not spin when you click **GO**,
    - keep the held columns held each spin in the same round,
    - change to **HELD** and different colour when clicked,
    - change back to **HOLD** and original colour when clicked again,
    - not being able to hold three columns at once,
    - reset buttons at the start of a new round.
  - a **GO** button to start the game and spin the machine,
- section with: 
  - always visible information on how: 
    - much credit left,
    - many spins left,
    - many games played.
  - a button to restart,
  - a button to quit the game,
  - logic to:
    - increase the credit with a winning combination, 
    - decrease the credit at start of a new round,
    - decrease spins left per round and reset it at start of a round,
    - increase rounds played,
    - display visual effect and appropriate text when there is a winning combination.
- modal with information when:
  - the game ends due to insufficient credit, with the final number of rounds played and an option for the user to restart or quit,
  - you click **Quit**, with an appropriate text and option for the user to stay or confirm quit.
- suitable background image for the pages, to add to the overall positive experience,
- favicon.

### Design

#### Wireframes

Below are my initial wireframes per page for mobile, tablet and laptop screen sizes. I used [Figma](https://www.figma.com/) to create them.

<details>
    <summary>Start page (not used)</summary>

    I decided to not have this separate start page as it just increases the amount of clicks and does not give any value, since the buttons can be on the game page.

  ![Startpage wireframe for mobile, tablet and laptop](docs/wireframes/wireframe-start.png)
</details>
<details>
    <summary>Game page</summary>

    This is how I saw the page with the game itself.

  ![Game page wireframe for mobile, tablet and laptop](docs/wireframes/wireframe-game.png)

</details>
<details>
    <summary>Page 404 not found</summary>

  ![Page 404 not found, wireframe for mobile, tablet and laptop](docs/wireframes/wireframe-404.png)

</details>

#### Color schemes

 A lot has been written about colours in casino's and slot machines in particular, and not all give the same reason for using particular colors. Basically all websites I found say red is the main colour in casino's, because it symbolises excitement, and it attracts attention. Red in combination with gold represents success and winning, and gold ofcourse symbolises luxury. I based my choices on [this article](https://www.newwavemagazine.com/single-post/the-psychology-of-color-in-casinos-how-design-choices-influence-the-player-s-mood), which says gold and red simulates a real life casino feel in online games.
 
 
 Purple and black convey exclusiveness and class and I have seen a purple background a lot in images of slot machines, so I use this as well. 
 
 
 Several sources say orange is a much used colour for spin/go buttons, so I use it for my **GO** button. 
 
 
 I use dark green as a background for credit info, to mimic the green tables in casinos. I also use this for my **HOLD** buttons. I use a darker variation of this green as well as a hover colour, based on how disabled **HOLD** buttons appear on the screen.

 
 As I went on, I used black more than I initially intended, for some buttons and the background for the fruits. I think it adds to the luxury feel of the website and works well with purple, green and gold.


 I would like to add some extra shiny effects or bling in my game, if it is possible. To match a more flashy casino style machine.

 
 This is my pallete: https://coolors.co/4c004c-ff0000-ffd700-105837-28775b-000000-ffa500.

 These are my sources:

 https://colorfulconsole.com/the-art-of-slot-machine-design-using-colors-to-enhance-gameplay/
https://www.globalbrandsmagazine.com/color-schemes-popular-among-online-gambling-brands/
https://fashionisers.com/2020/06/22/color-psychology-in-online-casino-games-design/
https://hickmandesign.co.uk/blog/other/psychology-of-casino-game-design/?srsltid=AfmBOoqN_NQjVzYCdMEXdxkKP7hirVuOcc1yR1pRNuj2DlTwndNwtmi-
https://www.globalbrandsmagazine.com/casino-colors-psychology-lucky-gambling-colors/

https://www.myperfectcolor.com/paint/101581-true-value-3496-casino-green#:~:text=The%20RGB%20values%20for%20True,light%20that%20a%20color%20reflects.


#### Fonts

Searching for fonts on [Google Fonts](https://fonts.google.com/), when I filtered on a *Calm* feeling, *Poiret One* really stood out to me. The calm feeling that I lack because I don't use blue in my colours (which the colour websites stated), can be compensated with this font. So I like it for my headings, but it is not good for informative texts. I found this article https://www.creatopy.com/blog/google-font-pairings/#21, and decided to pair it with *Didact Gothic* for my main body text.


When I filtered on a *Shaded* appearance and *Color* technology, I found *Nabla*, which I liked for my logo, because of the tilted look and the orange colour makes a good match with my fruity theme, although I could change the colour later ofcourse. 

#### Logos and images

For my fruit images, I use HTML symbols. I chose fruits that look distinctive to enhance accessibility, and another advantage of HTML symbols, is that it does not impact my performance as much as images would do. Later, I saw that my old computer displays the symbols differently than my new computer. This would not be with images, but I think for the game functionality, performance is more important. The different symbols do not impact the game functionality. I realise it is not good for consistency and for example marketing, that's why I did not reuse these symbols as images elsewhere on the website, like the favicon, because than it can get messy with different designs on the same page, for some devices. 


The background image is from [Canva](https://www.canva.com/). Originally a black background with gold decoration, I changed the background to purple and removed the outer fram of the decoration, but kept the curly decoration and in the same colour as it was. I think the image enhances the luxury feeling I want to convey.


The favicon is an image of the **'em** in the logo. To create the favicon files, I used [RealFaviconGenerator](https://realfavicongenerator.net/).


The logo is the game name written in font *Nabla*.

## Features 

### Existing features

- __Header__

  - The header holds the logo, a motivating text and the button **How to play**. 

![Header](docs/screenshots/header.png)

- __How to play modal__

  - When you click **How to play**, the corresponding modal opens with information on how to play the game. You can close this modal by clicking **Close** or **X** in the top right corner.

![How to play modal](docs/screenshots/how-to-play-modal.png)

- __Game section__

  The game section holds three columns, a **HOLD** button under each column, and a **GO** button at the bottom. Here is where you play the game.

     __GO button__

     - You click **GO** to start the game so the columns get filled with fruits, and from there, you just click **GO** to 'spin' the columns each time. 
  
     __HOLD buttons__

     - You can click **HOLD** to prevent the column above it to spin. The **HOLD** button changes from green to red with the button text **HELD**, and it changes back when you click it again. When you hold two columns, the third **HOLD** button becomes disabled so you can not hold three columns. If you enable one of the two **HELD** buttons again, the disabled button gets enabled again.

     - Your chosen held columns stay held between the spins, but the buttons get reset at the start of a new round.
  
     __Winning row__

     - When you have a winning middle row, the background for the row changes from red to green with a golden border, and a text appears above the columns with **WINNER!!**. Regardless of how many spins you have left, the round ends with a winning row. The round's final display of fruits displays for one second, and during this time, all **HOLD** buttons and the **GO** button become disabled, until the new round starts automatically with reset fruits.

     __No winning row__

     - When you have zero spins left and no winning combination, the round ends just like when you would have a winning combination; the final spin's fruits display for one second, during which **HOLD** and **GO** buttons are disabled, and a new round starts automatically after that.


![Game section before start](docs/screenshots/game-before-start.png)

![Game section in play with one held column](docs/screenshots/game-in-play.png)

![Game section with winning row](docs/screenshots/winning-game.png)



- __Credit info section__

  The credit info section holds the following:

  __Spins left__
  - The spin count counts down from 3 to 0 each round. A new round gives you 3 spins. At the start of a new round, new fruits are set and count right away if you win, without needing to spin. So effectively, you get four fruit spins, but you can not control the first one.

  __Credit__
  - You start the game with 10 credit. Apart from the first round, which is effectively free, at the start of each new round, credit decreases with 5. If you get a winning row, credit increases with 10 during the 1 second pause at the end of the round. This may look like credit only increases with 5, because a new round takes 5 credit at the start. When you have two winning combinations in a row, credit increases with 10 twice, but then takes 5 at the start of a new round, if this round does not start with a winning combination, so it looks like credit increases with 15.

  - When credit is 0 after the last spin of a round, the **Game over** modal pops up. Credit can not go negative.
  
  __Game over modal__
  - The **Game over** modal informs you that you have no credit left for a new round. It informs you how many rounds you have managed to play. When you click **Play again**, a new game starts. When you click **Quit** r the **X** in the top right corner, you go back to the start page, before a game starts.

  __Rounds played__
  - The number of rounds you played starts at 0 for your first round, and increases with 1 at the start of each new round. If you never get winning combinations, you can play 3 rounds. This is because the first round is effectively free, because you start with 10 credit the first round, and it does not decrease until the start of the next round. 

  __Restart button__
  - The **Restart** button starts a new game right away with reset fruits and the credit info default values. It works the same as the first time you click **GO**.

  __Quit button and Quit game modal__
   - The **Quit** button triggers the **Quit game** modal and asks you to confirm if you want to quit the game. You can click **Stay** or the **X** in the top right corner, to stay on the current game. You can click **Quit** to go back to the start page, before a game starts.



![Credit info section](docs/screenshots/credit-info-section.png)
![Quit game modal](docs/screenshots/quit-game-modal.png)
![Game over modal](docs/screenshots/game-over-modal.png)


- __The 404 page__

  - The 404.html page consists of a simple text saying it is not a lucky page, and a **Play Fruits hold 'em** button that links to the home page.

  Project file: 404.html

![404 not found](docs/screenshots/features-404.png)

### Features left to implement

- Sound toggle with different sounds depending on a win or not.
- More exciting graphics when you have a winning row, like flashing effects.
- Different credit values for different fruits.
- Different winning lines.
- Spinning wheel effect in each spin before the fruits are settled.
- Social media links or links to external website of the game makers.


## Testing 

See [TESTNG.md](TESTING.md).


### Validator testing 

- Html
  - The [W3C validator](https://validator.w3.org) notified me along the way about trailing slashes, since I had used 'br /', a missing p tag because I had put an ol tag inside a p tag, which is not allowed. It also notified me about a section without a header, the section I wrapped around the *About* and *Philosophy* sections and the image in between. This section does not need a separate title, so I gave it an h2 with a *visually-hidden* class.

  - No warnings or errors are currently found when passing through the validator:
    -  [index.html](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Flizzyongit.github.io%2Fsotis-lifecoach%2Findex.html)

    -  [what-i-offer.html](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Flizzyongit.github.io%2Fsotis-lifecoach%2Fwhat-i-offer.html)

    -  [book.html](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Flizzyongit.github.io%2Fsotis-lifecoach%2Fbook.html)

    -  [404.html](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Flizzyongit.github.io%2Fsotis-lifecoach%2F404.html)


- Css
  - The [(Jigsaw) validator](https://jigsaw.w3.org/css-validator) notified me along the way about an invalid value of padding, which I missed. This was easily fixed.

  - No errors are currently found when passing through the validator:

  ![No css errors](docs/screenshots/css-validator.png)

  - The warnings given by the validator apply to the imported Google fonts, variables and the autoprefixer additions. These are the same as the warnings for the *Boardwalk Games* project, and they can be ignored, as they were ignored there.

  ![Css warnings](docs/screenshots/css-warnings.png)


### Lighthouse testing

#### Index.html

Running the home page in Lighthouse resulted in 100% for accessability and best practices, but 79% for performance:

![Lighthouse result 1](docs/screenshots/lighthouse-home-1.png)

(Later, I realised I did not include index.html in the url, so this may have caused the low score.)

An issue was to 'serve images in next-gen formats', suggesting to fix the hero image and my rounded image. I converted those to .webp images.

It also said to 'properly size images', and suggested to fix my logo and the image of Sotis at work. I made my logo and image files smaller, but still made sure the uploaded images would always be larger than they actually will be displayed, as I don't want the risk of the images getting enlarged and losing quality.

After this, performance improved to 92%, but the score does change from time to time, as my computer is also a bit slow.

![Lighthouse result 2](docs/screenshots/lighthouse-home-2.png)

Looking at what more I could do, it said to 'minimize main-thread work', mentioning style and lay-out. My css is not very complicated, but I changed some of my css targets to include child combinators instead of descendent combinators, as they should be faster. However, I did not make all of my targets specific, as this would make it harder to read I think, and it is not done in the walkthrough projects either. Now the result is 93%:

![Lighthouse result 3](docs/screenshots/lighthouse-home-3.png)

After redoing the html with h1 tags, see more below for what-i-offer.html, I got a much better result, but this was taken after I cleaned up my computer a bit, so it could just be my computer's performance influencing this. The red bullets in the Lighthouse report now have to do with Bootstrap, JS, Google fonts, all issues I cannot fix. 

![Lighthouse result 4](docs/screenshots/lighthouse-home-4.png)

#### what-i-offer.html

Before running Lighthouse, I converted all my images to .webp files. The first result was:

![Lighthouse result 1](docs/screenshots/lighthouse-offer-1.png)

Regarding accessibility on 98%, there was an issue 'Heading elements are not in a sequentially-descending order'. This is because the card titles from Bootstrap have the h5, while the descending order would be h3. I changed all these card titles to h3 with a class of h5 to have the same font size. Because of my custom css for h3, the font changed to *Montserrat Alternates*, which I kept.

Running Lighthouse again, resulted in 100% for accessibility, and now suddenly performance got to 95% as well.

![Lighthouse result 2](docs/screenshots/lighthouse-offer-2.png)

After this, I actually went through the use of my headings on all pages, since an h1 was missing on every page. After adding h1 and redoing the html structure a bit, I run the html and css validators again and updated the results. I also got a new better result for Lighthouse on the home page, which may have to do that I took this one after my computer was cleaned up a bit.

![Lighthouse result 3](docs/screenshots/lighthouse-offer-3.png)

The red bullets in the Lighthouse report now have to do with Bootstrap, JS, Google fonts, all issues I cannot fix. Sometimes, it says my image for the *Talking* session is too large, but it is already converted.

#### book.html

The first run Lighthouse report gives 98% on performance and 100% on accessibility and best practices. 

![Lighthouse result 1](docs/screenshots/lighthouse-book-1.png)

The red bullets, like for the other pages, mention CCS, JS which is related to Bootstrap, and Google fonts. It mentions to 'minimize main-thread work' again, 'Other' being the highest, but I don't see how I can fix this and I'm happy with the score.

#### 404.html

The first Lighthouse report gives 98% on performance and 100% on accessibility and best practices.

![Lighthouse result 1](docs/screenshots/lighthouse-404-1.png)

I'm happy with this score for performance, and like the other pages it mentions Bootstrap, Google fonts, and I don't see anything I can improve.

### Manual testing

#### Form testing

I tested the form on the book.html page and you can not send the form if not all fields are filled out. Each time you try to click **Send**, it will give a warning message on the first field that is not filled out, and after you fill that one out and click **Send** again, it will show the message on the next field, and so on. 


For the email field, it requires an @ and a '.com' and something before @ and in between, 'a@a.com' works. 


The phone number field requires a number (however, it does let you type an 'e', but will still give an error).


The selectable option fields all show the correct options and you actively have to select one to continue.


All other fields are texts. 


After sending a completed form, you go to the CI formdump where you can see that the input names and values are correct.

#### Link testing

All links in the navigation bar go to the correct pages or sections. All buttons go to the correct page. The social media links in the footer go to the correct pages and open in a new tab.

#### Browser testing

I tested my website on Chrome, Edge and Firefox. For testing Safari, I used Chrome UA Spoofer.


I found one minor difference:

On Firefox, regarding the **Phone** field in the form on book.html, you can type any letter, but you will get an error message saying you have to fill in a number. In other browsers, you can not even type anything else than a number (except for an 'e', but it will still give you an error). I find this acceptable.

#### Device testing

I checked the website in DevTools for the different dimensions. A few of my features have very different lay-outs on different screens, working as intended:
- Navigation bar: from small mobile screens to and including tablet screens, the menu links are collapsed in a hamburger menu.
- Hero image: from small mobile screens to but not including tablet screens, the header and quote move from the left center of the image, to the bottom of the image, to not overlap Sotis' head.
- **About**, image and **Philosophy**: from small mobile screens to but not including tablet screens, these sections are stacked vertically and take up the full screen width, with the headers centered. From tablet screens and up, they take up one row with three equal-width columns, and the headers are left aligned.
- **Testimonials**: from small mobile screens up to and including 991 px width, the carousel takes the full width of the screen, from 992 px, it takes half the width of the container, but is centered in the middle of the screen.
- Footer: from small mobile screens to but not including tablet screens, the address section and email and phone section are stacked vertically and aligned to the left. From tablet-size screens, these two sections are displayed next to each other in two columns, where the address section in the left column is moved to the end/right of its own column.
- **What I offer** page: 
  - from small mobile screens to but not including tablet screens, the four cards are stacked vertically, each at full width of the screen,
  - from tablet screen size to but not including small laptops at 992 px width, the four cards are displayed in two rows of two cards,
  - from 992 px, the cards are displayed in one row of four cards.
- **Book** page: 
  - from small mobile screens to but not including tablet screens, the form fields are vertically stacked at full width of the screen,
  - from tablet screen size and up, the form fields are displayed in two columns next to each other.


I also checked the different web pages in [Responsinator](http://www.responsinator.com/). I found a missing margin there for 404.html when you turn a device horizontally. I realise I did not see this before because the section is so small, the viewport was always much larger, creating the white space around it when I centered the section with the *.my-auto* class. But turning the device creates a much smaller viewport, so the *.my-auto* did not create any margin around the section, and it does not look good:

![Device test 404.html issue](docs/screenshots/device-test-1.png)

I simple added *.my-3* to the inner div.row to create some margin, without interfering with anything else. It looks fine now:

![Device test 404.html issue fixed](docs/screenshots/device-test-2.png)

This change did not cause any new issue in the html validator or the Lighthouse report for this page.

I also tested on my own Huawei smartphone.

#### Favicon testing

When I ran my website in Realfavicongenerator's [favicon checker](https://realfavicongenerator.net/checker), I got several errors, it seemed like I was missing some files that Favicon.io, that I used initially, did not generate. So I decided to replace my favicons with the ones generated by Realfavicongenerator and get a new html code. I also removed my favicon folder and moved the files to the root folder, as I read on several websites that this is recommended.


After checking my website in the favicon checker again, there were two errors left regarding the web app manifest, saying the 192x192 and 512x512 icons could not be found. I could not fix this issue, so I decided to remove the web app manifest file and images. These icons are for when a website can be installed as an app, which is not relevant at this point.

### Fixed bugs

See [Issues](#issues).

### Unfixed Bugs

None.

## Technologies used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks - libraries - programs used

- [Bootstrap](https://getbootstrap.com/) version 5.3
- [Figma](https://www.figma.com/) for wireframes
- Chrome DevTools for verifying responsibility and troubleshooting code
- [CodePen](https://codepen.io/pen/) for troubleshooting code
- [Gitpod](https://www.gitpod.io/) for coding
- [GitHub](https://github.com/) for version control and hosting
- [Google Fonts](https://fonts.google.com/) for my font pair
- [Canva](https://www.canva.com/) for background image
- Windows Paint for the cropping background image
- [TinyPNG](https://tinypng.com/) for compressing image size and converting to webp
- Windows snipping tool for the favicon
- [RealFaviconGenerator](https://realfavicongenerator.net/) for creating favicon icons and the html code, and checking the favicon
- [Responsinator](http://www.responsinator.com/) for checking responsiveness
- [Autoprefixer](https://autoprefixer.github.io/) for adding the necessary prefixes to my css stylesheet
- [Chrome UA Spoofer](https://chromewebstore.google.com/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg) to test my website on Safari

## Deployment and development

### Deployment
The site was deployed to GitHub pages. The steps to deploy are: 
  1. In the GitHub repository, navigate to the **Settings** tab,
  2. In the left menu, select **Pages**,
  3. Under **Source**, select **Deploy from a branch**,
  4. Under **Branch**, select **main**,
  5. Click **Save**, 
  6. In the GitHub repository, in the right menu, click **Deployments** to view the link to the deployed website.

The live link can be found here - https://lizzyongit.github.io/fruits-hold-em/index.html.

### Local development
To fork the repository:
  - In the GitHub repository, click the **Fork** button in the top right corner.

To clone the repository:
  1. Select if you want to clone with HTTPS, SSH or GitHub CLI, and copy the link below it,
  2. Open the terminal in your code editor and change the current working directory to the location you want to clone this repository to,
  3. Type *git clone* and paste the from step 1. Press enter.




## Credits 

### Content 

- All content is written by me.

### Media

- The original background image is on Canva, by 'hielmannuraddin's Team', called [Black and Gold Classic Background A4 Document](https://www.canva.com/sv_se/mallar/EAGICesfS6E-black-and-gold-classic-background-a4-document/). I edited this image in Canva.

### Resources

- For a font pairing idea, [this article](https://www.creatopy.com/blog/google-font-pairings/#21).
- To decide on which colours to use, I have researched several websites:
  - https://www.newwavemagazine.com/single-post/the-psychology-of-color-in-casinos-how-design-choices-influence-the-player-s-mood
  - https://colorfulconsole.com/the-art-of-slot-machine-design-using-colors-to-enhance-gameplay/ 
  - https://www.globalbrandsmagazine.com/color-schemes-popular-among-online-gambling-brands/ 
  - https://fashionisers.com/2020/06/22/color-psychology-in-online-casino-games-design/ 
  - https://hickmandesign.co.uk/blog/other/psychology-of-casino-game-design/?srsltid=AfmBOoqN_NQjVzYCdMEXdxkKP7hirVuOcc1yR1pRNuj2DlTwndNwtmi- 
  - https://www.globalbrandsmagazine.com/casino-colors-psychology-lucky-gambling-colors/
  - https://www.myperfectcolor.com/paint/101581-true-value-3496-casino-green#:~:text=The%20RGB%20values%20for%20True,light%20that%20a%20color%20reflects
- For getting a colour scheme and checking the color contrast, [Coolors.co](https://coolors.co).

- Bootstrap documentation [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
- [W3schools](https://www.w3schools.com/) for getting the fruit icons and to read up on concepts.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) to read up on concepts.
- [Stackoverflow](https://stackoverflow.com/) for general code questions.
- Inspiration and code bits from CI walkthrough project *Simon says*.

- How to redirect to other page with javascript: [tutorialspoint](https://www.tutorialspoint.com/how-to-redirect-to-another-webpage-using-javascript).
- How to open a Bootstrap modal with javascript: [Stackoverflow](https://stackoverflow.com/questions/62101647/.javascript-bootstrap-open-bootstrap-modal-with-javascript-and-not-with-button).
- To set focus on an element: [Laracasts](https://laracasts.com/index.php/discuss/channels/vue/how-to-focus-on-an-input-after-disabling).
- Troubleshoot *aria-hidden* error: 
 - https://github.com/WordPress/gutenberg/issues/56547, 
 - https://github.com/twbs/bootstrap/issues/41005, 
 - https://stackoverflow.com/questions/62677291/aria-hidden-elements-do-not-contain-focusable-elements-issue-when-modal-is-sho.
- Troubleshoot missing focus-outline on buttons: https://github.com/twbs/bootstrap/issues/38903.
- To understand background-size setting: [Cloudinary](https://cloudinary.com/guides/front-end-development/6-ways-to-stretch-a-background-image-with-css).
- Slack post on a console error I got as well: https://code-institute-room.slack.com/archives/D07L9QW7YS3/p1738070720220649.
- How to target Safari with CSS: [Wojtek Witkowski](https://wojtek.im/journal/targeting-safari-with-css-media-query). 

- [Grammarly](https://www.grammarly.com/grammar-check) spellchecker.
- [Diffchecker](https://www.diffchecker.com/text-compare/) for checking autoprefixer changes.

## Acknowledgments
- My mentor Jubril for the feedback.
- My cohort facilitator Kay for the pep talks.
##### Web App From Scratch @cmda-minor-web 2020 - 2021

![Badge stating project is licensed under MIT license](https://img.shields.io/github/license/ralfz123/web-app-from-scratch-2021) ![Badge stating amount of issues open](https://img.shields.io/github/issues/ralfz123/web-app-from-scratch-2021) [![](https://img.shields.io/badge/site--status-up-success)](https://ralfz123.github.io/web-app-from-scratch-2021) [![Badges via shields.io](https://img.shields.io/badge/badges%20via-shields.io-brightgreen)](shields.io)

[Link to live version :rocket:](https://ralfz123.github.io/CATCH-YOUR-LAUGH/)

# **CAT**CH YOUR LAUGH
_Web App From Scratch, a course of the minor Web Design & Development. It is a minor of the third year from the study [CMD](https://www.cmd-amsterdam.nl/)._

### Table of Contents
<table style="margin-left: auto; margin-right: auto;">
    <tr>
        <td align="center"><a href="#rocket-purpose-of-project">🚀 Purpose of Project<a></td>
        <td align="center"><a href="#heart_eyes-concept">😍 Concept<a></td>
        <td align="center"><a href="#1234-data">🔢 Data<a></td>
        <td align="center"><a href="#nerd_face-technical-summary">🤓  Technical summary<a></td>
        <td align="center"><a href="#gear-installation">⚙️ Installation<a></td>
        <td align="center"><a href="#file_folder-sources">📁 Sources<a></td>
        <td align="center"><a href="#cop-license">👮 License<a></td>
    </tr> 
</table>

## :rocket: Purpose of Project
In this course I will learn to build a web application _without_ frameworks or unnecessary libraries, but with **_vanilla_ HTML**, **CSS** & **JavaScript** as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. I will learn different ways to structure code and develop my own coding style. With the gained knowledge I will be able to build interactive prototypes, based on real data. Also I will gain a better understanding of how API's, frameworks and libraries work.

## :heart_eyes: Concept
~ **CAT**CH YOUR LAUGH ~

**CAT**CH YOUR LAUGH is an application where you can amuse pictures of cats in combination with jokes :cat: :laughing: . You can use this app when the atmosphere is no longer good, or there is no discussion material for a while, or you just want to laugh hard. Then this is the solution! This combination will lead to endless laughter from the user! 

You may *like* the combination of the cat and the joke. It will be saved on the 'My Favourites' page and there you will see all your favourite combinations. You can also click on one of your favourites and you will be taken to the detail page where you will see your favourite in large format.

### [Live version here :red_circle:](https://ralfz123.github.io/CATCH-YOUR-LAUGH)

<img src="assets/README/app-screenshot.png" alt="live-demo-screenshot" width="700px">

#### Features
- By clicking on the 'ANOTHER COMBO' button you can see a different combination of a cat image and a joke
- Like your favourite combination of a cat image and a joke
- Create a favourites list with your favourite combinations of a cat image and a joke

#### Actor diagram
<img src="assets/README/actor-dia-v3.png" width="900px" />



#### Interaction diagram
<img src="assets/README/interaction-dia-v2.png" width="700px" />

## :1234: Data  
### APIs are:
1. Cat images - https://thecatapi.com/
2. Jokes - https://github.com/15Dkatz/official_joke_api

The data variables I used, are:
#### 1. Cat images
- `id`
- `url`  

#### 2. Jokes
- `id`
- `setup` 
- `punchline`

### Dataset structure
#### 1. Cat images

```js
{
    breeds: [ ],
    id: "eg4",
    url: "https://cdn2.thecatapi.com/images/eg4.jpg",
    width: 300,
    height: 225
}
```

#### 2. Jokes
```js
{
    id: 327,
    type: "general",
    setup: "Why did Sweden start painting barcodes on the sides of their battleships?",
    punchline: "So they could Scandinavian."
}
```


## :nerd_face: Technical summary
This app is built, using:

<details>
<summary>.map()</summary>



[filterCatData(rawCatData)](https://github.com/ralfz123/CATCH-YOUR-LAUGH/blob/master/scripts/utils/filter.js#L9-L17)

```js
function filterCatData(rawCatData) {
  const cleanCatData = rawCatData.map((element) => {
    return {
      id: element.id,
      url: element.url,
    };
  });
  return cleanCatData;
}
```
</details>


<details>
<summary>.reduce()</summary>

[checkDuplicateFav()](https://github.com/ralfz123/CATCH-YOUR-LAUGH/blob/master/scripts/modules/like.js#L41-L52)

```js
function checkDuplicateFav() {
  const newArray = favouritesArray.reduce((newArray, currentValue) => {
    if (
      !newArray.some(
        (element) => element.catData.url === currentValue.catData.url
      )
    )
      newArray.push(currentValue);
    return newArray;
  }, []);
  favouritesArray = newArray;
}

```
</details>



<!-- ## Challenges / Inventions:
### Fetch 2 API's (Challenge)


### Modules (Challenge)

### Apply `async await` (Invention)


### reduce() & some()


### focus on that every function has to return something -->



## To-Do's :pencil:
<details>
<summary>Expand</summary>

#### App:
- [x] Data fetch (getdata)
- [x] Dynamic data via virtualDOM
- [x] FavoritesList
- [x] Like adds item (cat+joke) to favList
- [x] Not the same combo's in the favourites list
- [x] Favourite item (detail page)
- [x] Delete favourite item from array and rerender UI
- [x] Delete all favourites from array and rerender UI
- [x] Redirect to detail page when clicking on unique favourite item
- [x] Data rendered in detail page (favourite item)
- [x] "Another combo" button fetches again without page reload (only invoking yet)
- [ ] UI is loaded when data is fetched
- [x] Another section has to be to `display:none;` **when** page is loaded
- [x] Empty state favourites UI

#### Code:
- [x] Modules
- [x] Async fetch (async await)
- [x] Params function
- [x] Feedback (Loader) to user while fetching data
- [x] Split API-url in chunks
- [x] Routing
- [x] Script folder structure (helpers/utils/components)
- [x] Init app and functions in a right way
- [x] Functions/modules always have to return something in stead of invoking other functions
    - [x] Do something based on the return of the function (fetch returns to main, in main invoke render function with data)
    - [x] Invoking of functions in a correct way in a correct file (waterfall effect)
- [ ] Arrow function
- [x] **Map**/filter/reduce: use 1 of the 3
- [x] Check where to use `let` or `const`
- [ ] Descriptive function/variable names
- [ ] BONUS: Templating 
- [ ] BONUS: CSS - custom properties color
##### Readme:
- [x] Transform to English language
- [x] Screenshot app
- [ ] Actor Diagram
- [ ] Interaction Diagram
- [ ] Uitdagingen/learnings uitleggen

</details>


## :gear: Installation
1. Clone the repository:  
```
git clone https://github.com/ralfz123/CATCH-YOUR-LAUGH.git
```

2. Install dependencies   
```
npm install
```

3. To run the app   
```
python -m SimpleHTTPServer 8000  
```

4. Go to [localhost](http://localhost:8000/) in the browser
```
http://localhost:8000/
```

## :file_folder: Sources
Credits to [Joost Faber](https://github.com/joostf) && [Koop](https://github.com/KoopReynders) && Suus for giving interesting lectures about Web Apps and JavaScript and how to deal with it.

### Code sources
- Stackoverflow (n.d.). Searching for answers on dev questions - Stackoverflow. Retrieved 02 February 2021 from https://www.stackoverflow.com

- ES6 modules - hacks.mozilla . Retrieved 10 February 2021, from https://hacks.mozilla.org/2015/08/es6-in-depth-modules/

- Array.prototype.splice() - MDN. Retrieved 16 February 2021, from https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

- Array.prototype.some() - MDN. Retrieved 1 March 2021, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

- Array.prototype.reduce() - MDN. Retrieved 1 March 2021, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

## :cop: License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This project from [Ralf](https://github.com/ralfz123) has a [MIT © License](https://github.com/ralfz123/web-app-from-scratch-2021/blob/main/LICENSE)
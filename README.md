# Project Shoptopia

## Tech Stack

### Written in
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Bundled with
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

### Powered by
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&amp;logoColor=black&amp;style=for-the-badge)

### Tested with
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## Overview
**_Shoptopia_** is a front-end focused, fully functional e-commerce application. Our project was constructed by a team of 4 engineers following the guidelines and specifications of a strict Business Requirement Document (BRD) for each component.

## Table of Contents
* [Team](#Contributors)
* [Requirements](#requirements)
* [Usage](#usage)
* [Product Components](#product-components)
  * [Product Details](#product-details)
  * [Related Products Section](#related-products-section)
  * [Questions And Answers](#questions-and-answers)
  * [Ratings And Reviews](#ratings-and-reviews)

## Contributors
| Name | Component | Github Handle |
|---|---|---|
| Tammam | Product Details | [seguyy](https://github.com/TammamTautou) |
| Andrew | Related Items | [beanjermin](https://github.com/lundas) |
| Dillon | Questions and Answers | [yoko-8](https://github.com/Dillon-Armstrong) |
| Benji | Ratings and Reviews | [davidguy3237](https://github.com/Benjamin-Cardon) |
<a href="https://github.com/Black-Razzberry-Revelers/Shoptopia/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Black-Razzberry-Revelers/Shoptopia" />
</a>

## Requirements
* Install [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## 💻 Usage
1) Run `npm install` in terminal
2) Create a copy of example.env file & rename copy as `.env`
3) Enter GitHub Token on `API_TOKEN` field
4) Run `npm run build` to build webpack
5) Run `npm run dev` to start up the server
6) Go to `localhost:3000` in browser

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

# Product Components

# Product Details
Product details section allows users to scroll through images, select a specific style, size and quantity of a product, and then add it to their cart. This module consists of four main components:
* Image Gallery
* Product Information
* Style Selector
* Add to Cart

<details>
 <summary>Functionalites</summary>
* Image gallery with interactive thumbnails and an expanded view
* The gallery updates based on each new style and thumbnail selection
* Users can change to the next or previous image in the gallery
* Users can toggle between different styles
* Dynamic rendering of prices and styles
* Ability to select a quantity of a style and size to add to cart
* Sharing the product through social media accounts
</details>
<img src="https://github.com/Black-Razzberry-Revelers/Shoptopia/blob/main/client/dist/assets/product-screen.png" width="800" height="600"/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

# Related Products Section
## The Related Products Section is composed of two main components:


### The Related Products List
<details>
 <summary>Functionalites</summary>

   * Contains a list of product cards that is dynamically rendered
   * Utilizes a Carousel slider
     * The left and right buttons on the carousel are displayed conditionally
   * Each product card contains a 'comparison modal' button on the top right corner
     * Upon click, a pop-up modal is displayed comparing the features and values of the main product and the related product
   * If available, each product card displays a list of small thumbnail images (4 max) upon hover
     * The left and right arrow buttons are displayed conditionally
   * Upon clicking the title of the product card, the main page is updated to the target product, and a new list of related products is rendered
 </details>

### Your Outfit List
<details>
 <summary>Functionalities</summary>

  * Contains a list of products cards that is unique to each user
  * Also utilizes a Carousel slider
  * Clicking the 'Add an Oufit' button utilizes local storage to store and render user-specific product cards
    * Product cards that are added to this list persist upon page navigation, refresh, and exit.
  * Users can remove a product card by clicking the 'X' button on the top right corner
 </details>

<img src="https://github.com/Black-Razzberry-Revelers/Shoptopia/blob/main/client/dist/assets/relatedItems-screen.png" width="800" height="600"/>
<img src="https://github.com/Black-Razzberry-Revelers/Shoptopia/blob/main/client/dist/assets/relateditems-detales-screen.png" width="800" height="600"/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

# Questions And Answers
| Questions and Answers List | Modal Windows |
|---|---|
|![QAcomponent](https://github.com/Black-Razzberry-Revelers/Shoptopia/blob/main/client/dist/assets/q&a-screen.png)|![QAmodal](https://github.com/Black-Razzberry-Revelers/Shoptopia/blob/main/client/dist/assets/add-q-screen.png)|

<details>
 <summary>Questions</summary>
* Utilized React’s to create a **real-time responsive Search Bar** as text is typed into field
* More Questions functionality built with overflow to provide good UX with more control over visible page content
* Displays metadata of each question
 </details>


<details>
 <summary>Answers</summary>
* Implemented conditional rendering to limit user’s reported/helpful response to each Q&A
* More Answers functionality built to conditionally render additional customer responses to provide user control of page content
* Displays metadata of each answer
 </details>

<details>
 <summary>Modals & Posting Questions/Answers</summary>
* Modal Forms to Add Your Answer or Ask Your Question to API
* Modal Forms dynamically respond to user input to reinforce valid vs. invalid actions
 </details>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

# Ratings And Reviews
| Review Component | Modal Window |
|---|---|---|
| ![review](https://github.com/Black-Razzberry-Revelers/Shoptopia/blob/main/client/dist/assets/ratings-screen.png) | ![review-modal](https://github.com/Black-Razzberry-Revelers/Shoptopia/blob/main/client/dist/assets/ratings-screen-2.png) | ![write-review](https://github.com/Black-Razzberry-Revelers/Shoptopia/blob/main/client/dist/assets/add-review-screen.png) |

<details>
 <summary>Functionalites</summary>
- Display all of the reviews for a product
  - Sort reviews by relevance, newest, helpful
  - Search for specific reviews
  - Mark reviews as helpful
  - Report reviews to stop them from being displayed
  - Click 'More Reviews' to display additional reviews
- Display a breakdown of ratings by number of stars
  - Filter reviews by star ratings
- Display a breakdown of each characteristic for a product
- Click 'Add A Review' to display a form inside a modal window to submit a review
  - Upload photos along with your review
   </details>
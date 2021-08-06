import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // console.log('These are the ARTICLES', article);
  // console.log('This is the ARTICLE', article.bootstrap)

  // CREATE ELEMENTS
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');
  
  // ADD TEXT CONTENT
  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  // SET STRUCTURE
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  author.appendChild(authorName);

  // ADD CLASSES
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // ADD EVENT LISTENER
  card.addEventListener('click', function(event){
    console.log(article.headline);
  })

  // const cardChange = document.querySelector('.card');
  // cardChange.addEventListener('click', function(event){
  //   console.log(article.headline);
  // })
 
  // RETURN
  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  // selector.forEach(item => {
    axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
    console.log('This is RES', res);
    console.log('This is RES DATA', res.data);
    console.log('This is RES DATA ARTICLES', res.data.articles);

    // THIS WORKS FOR ONE
      const cardEntry = document.querySelector(selector)
      const manyCards = Card(res);
      cardEntry.appendChild(manyCards);

    // THIS DOESN'T WORK
    // const otherAuthors = res.data.article


    // const authorDeck = res.data.articles;
    // console.log(authorDeck);
    // authorDeck.forEach(item => {
    //   const authorArticle = Card(item);
    //   console.log(authorArticle);
    //   document.querySelector('.cards-container').appendChild(authorArticle);
    // })

    // const newCard = ({id, headline, authorPhoto, authorName})
    // res.data.forEach(item => {
    //   const newCards = Card(item);
    //   document.querySelector('.cards-container').appendChild(newCards);
    // })

    // selector.forEach(item => {
    // res.data.forEach(item => {

      // const newCard = Card(res.data)

      // manyCards.textContent = res.data.articles;
      // document.querySelector('.cards-container').appendChild(manyCards);
    // })
    // const cardsArr = Array.from(selector);
    
    // const manyCards = Card(res.data);
    // document.querySelector('.cards-container').appendChild(manyCards);

      // res.data.message.forEach(selector => {
      //   const newCard = Card(res.data);
      //   document.querySelector('.cards-container').appendChild(newCard);
      // })
    })
    .catch(err => {
      debugger
      console.error(err)
    })
  // })
}

export { Card, cardAppender }

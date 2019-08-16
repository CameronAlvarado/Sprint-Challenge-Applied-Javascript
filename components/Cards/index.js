// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entryPoint3 = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then( (response) => {
    console.log(response.data);
    console.log(response.data.articles);
    let obj = response.data.articles;
        obj.javascript.forEach( (element) => {
            entryPoint3.appendChild(Cards(element))
        })
        obj.bootstrap.forEach( (element) => {
            entryPoint3.appendChild(Cards(element))
        })
        obj.technology.forEach( (element) => {
            entryPoint3.appendChild(Cards(element))
        })
        obj.jquery.forEach( (element) => {
            entryPoint3.appendChild(Cards(element))
        })
        obj.node.forEach( (element) => {
            entryPoint3.appendChild(Cards(element))
        })
      });


function Cards(obj) {

    // create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContain = document.createElement('div');
    const img = document.createElement('img');
    const nameBy = document.createElement('span');

    // apply classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContain.classList.add('img-container');

    // sources
    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    nameBy.textContent = [`By ${obj.authorName}`];

    // append
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContain);
    author.appendChild(nameBy);
    imgContain.appendChild(img);

    return card;
}
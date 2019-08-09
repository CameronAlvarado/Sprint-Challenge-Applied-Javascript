// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entryPoint2 = document.querySelector('.topics');
console.log(entryPoint2)

// entryPoint2.forEach((element) => {
//     axios.get("https://lambda-times-backend.herokuapp.com/topics")
//     .then( (response) => {
//       console.log(response.data);
//       entryPoint2.appendChild(Tabs(response.data))
//     });
// });

 axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then( (response) => {
        console.log(response.data);
        console.log(response.data.topics)
        response.data.topics.forEach( (element) => {
            console.log(element);
            entryPoint2.appendChild(Tab(element))
        })
    });

function Tab(string) {
// create elements
    const tab = document.createElement('div');

// apply classes
    tab.classList.add('tab');

// sources
    tab.textContent = string;

// append

return tab;
}
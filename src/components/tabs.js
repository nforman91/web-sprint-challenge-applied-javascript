import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const tabs = document.createElement('div');
  const tab1 = document.createElement('div');
  const tab2 = document.createElement('div');
  const tab3 = document.createElement('div');

  tab1.textContent = topics[0];
  tab2.textContent = topics[1];
  tab3.textContent = topics[2];

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);

  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');

  return tabs;
}

// topics.forEach(item => {
//   const tabsElement = document.createElement('.tab');
//   tabsElement.textContent = topics;
//   tabs.appendChild(tabsElement);
// })

Tabs(['javascript', 'bootstrap', 'technology']);

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/topics`)
  .then(res => {
    selector.forEach(item => {
    const topicsElement = document.createElement('.tabs-container');
    const tabs = Tabs(topics);
    topicsElement.appendChild(tabs)
  })
  })
  .catch(err => {
    console.log(err)
  })
}

export { Tabs, tabsAppender }

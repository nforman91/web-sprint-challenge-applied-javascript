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
  // console.log('This is the TOPICS', topics);

  // const tabContainer = document.createElement('div');
  // const tab = document.createElement('div');

  // tab[0].textContent = topics[0];
  // tab[1].textContent = topics[1];
  // tab[2].textContent = topics[2];
  // tab[3].textContent = topics[3];
  // tab[4].textContent = topics[4];

  // tabContainer.appendChild(tab[0]);
  // tabContainer.appendChild(tab[1]);
  // tabContainer.appendChild(tab[2]);
  // tabContainer.appendChild(tab[3]);
  // tabContainer.appendChild(tab[4]);

  // tabContainer.classList.add('topics');
  // tab[0].classList.add('tab');
  // tab[1].classList.add('tab');
  // tab[2].classList.add('tab');
  // tab[3].classList.add('tab');
  // tab[4].classList.add('tab');

  // return tabContainer;

  // CREATE ELEMENTS
  const tabs = document.createElement('div');
  const tab1 = document.createElement('div');
  const tab2 = document.createElement('div');
  const tab3 = document.createElement('div');

  // ADD TEXT CONTENT
  tab1.textContent = topics[0];
  tab2.textContent = topics[1];
  tab3.textContent = topics[2];

  // SET STRUCTURE
  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);

  // ADD CLASSES
  tabs.classList.add('topics');
  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');

  // RETURN
  return tabs;
}

// topics.forEach(item => {
//   const tabsElement = document.createElement('.tab');
//   tabsElement.textContent = topics;
//   tabs.appendChild(tabsElement);
// })

// Tabs(['javascript', 'bootstrap', 'technology']);

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
    console.log('This is RES', res);
    console.log('This is RES DATA', res.data);
    console.log('This is RES DATA TOPICS', res.data.topics);
    })

    // const newTab = Tabs(res.data);
    // document.querySelector('.tabs-container').appendChild(newTab);
    
    // res.data.topics.forEach(item => {
    //   const newTab = Tabs(res.data.topics);
    //   newTab.textContent = res.data.topics;
    //   tabs.appendChild(newTab);
    // })

    // selector.forEach(item => {
    //   const tabElement = document.createElement('.tabs-container')
    //   tabElement.textContent = topics;
    //   tabs.appendChild(tabElement);
    // })

    // const tabElements = topics.map(item => {
    //   return Tabs(item); 
    // })

    // const newTabs = Tabs(topics);
    // document.querySelector('.tabs-container').appendChild(newTabs);

    // topics.forEach(div => {
    //   document.querySelector('.tabs-container').appendChild(div);
    // })

    // selector.forEach(item => {
    // const tabs = Tabs(topics);
    // document.createElement('.tabs-container').appendChild(tabs);
    // })
    // })
    
    .catch(err => {
      debugger
      console.error(err)
    })
}

export { Tabs, tabsAppender }

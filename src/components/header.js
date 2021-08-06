const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // CREATE ELEMENTS
  const myHeader = document.createElement('div');
  const myDate = document.createElement('span');
  const myTitle = document.createElement('h1');
  const myTemp = document.createElement('span');

  // ADD TEXT CONTENT
  myDate.textContent = date;
  myTitle.textContent = title;
  myTemp.textContent = temp;

  // SET STRUCTURE
  myHeader.appendChild(myDate);
  myHeader.appendChild(myTitle);
  myHeader.appendChild(myTemp);

  // ADD CLASSES
  myDate.classList.add('date');
  myHeader.classList.add('header');
  myTemp.classList.add('temp');

  // RETURN
  return myHeader;
}

// Header('Lambda Times', 'August 6, 2021', '26\u00B0')

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // THIS WORKS
  const headerEntry = document.querySelector(selector);
  const newHeader = Header('Lambda Times', 'August 6, 2021', '26\u00B0');
  headerEntry.appendChild(newHeader);
}

export { Header, headerAppender }

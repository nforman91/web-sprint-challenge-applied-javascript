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

  const myHeader = document.createElement('div');
  const myTitle = document.createElement('h1');
  const myDate = document.createElement('span');
  const myTemp = document.createElement('span');

  myTitle.textContent = title;
  myDate.textContent = date;
  myTemp.textContent = temp;

  myHeader.appendChild(myTitle);
  myHeader.appendChild(myDate);
  myHeader.appendChild(myTemp);

  myHeader.classList.add('header');
  myDate.classList.add('date');
  myTemp.classList.add('temp');

  return myHeader;
}

// Header('Lambda Times', 'January 6, 2021', '26')

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const newHeader = Header('Lambda Times', 'August 6, 2021', '26\u00B0');
  document.querySelector('.header-container').appendChild(newHeader);
}

export { Header, headerAppender }

let navbar = new Array('Home Class Projects Privacy Contact us');
let nav = document.getElementById('nav');
let navItems = document.createElement('li');
nav.innerHTML = navbar;
nav.appendChild(navItems);
//working with styling
nav.style.listStyle = 'none';
nav.style.color = 'red';
let hr = document.createElement('hr');
nav.appendChild(hr);
nav.style.cursor = 'pointer';
//getting data through api
let url = 'https://fakestoreapi.com/products';

async function fetchData() {
  const url = 'https://api.example.com/data'; // Replace this with your API endpoint

  try {
    let response = await fetch(url);
    let findData = await response.json();

    console.log(findData);

    let dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';

    findData.forEach((item) => {
      let dataItem = document.createElement('div');
      dataItem.classList.add('hello');
      dataItem.innerHTML = `
        <p>${item.category}</p>
        <img src="${item.image}" />
      `;
      dataContainer.appendChild(dataItem);
    });
  } catch (err) {
    console.error(err);
  }
}

fetchData();

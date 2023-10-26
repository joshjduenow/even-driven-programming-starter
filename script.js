function onReady() {
  console.log('Yay!, onReady() got called when the page loaded.');
  // We can select things!!
  // document is the HTML file...
  // querySelector will match 1 thing. The first thing
  let header = document.querySelector('h1')
  // document.querySelector('.class')
  // document.getElementById('container')
  console.log(header);
  // manipulating
  header.classList.add('pink-text')

  header.textContent = 'Hello from JavaScript!'
}

function onPotatoClick() {
  console.log('You clicked potato!');

  let potatoFarm = document.getElementById('potatoFarm');

  potatoFarm.innerHTML += '<p>🥔</p>'
}
// Will call onReady() when the page loads.
onReady()
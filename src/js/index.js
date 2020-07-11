const movies = document.getElementById('movie-list');
const mainHall = document.getElementById('main-hall');
const btn = document.querySelector('.btn');
const price = document.getElementById('price');
const tickets = document.getElementById('tickets');
const selectedPrice = document.getElementById('selected-price');

const {
  movieList,
  noOfRows,
  seatsInRow,
} = initialData;

const {
  getMoviePrice,
  renderMoviesList,
  renderRowsAndSeats,
} = documentUtil;

let eachPrice = 0;
let selectedSeats = [];


// render intial view when window loads
(function() {
  renderMoviesList();
  renderRowsAndSeats(onSeatClick);
}());

// when user clicks on any seat
function onSeatClick(event) {
  if(event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
    selectedSeats.pop(event.target);
    setFinalCountAndPrice();
  }
  else {
    event.target.classList.add('selected');
    selectedSeats.push(event.target);
    setFinalCountAndPrice();
  }
}

// on click of Book Tickets Button
btn.onclick = function() {
  if(selectedSeats.length > 0) {
    selectedSeats.forEach((element) => {
      element.classList.add('booked');
    });

    setFinalCountAndPrice();
  }
  else {
    alert('No Seat is Selected');
  }
  selectedSeats = [];
}

// handle movie change

movies.onchange = function(e) {
  selectedPrice.innerText = `₹ ${getMoviePrice(e.target.value)}`;
  selectedSeats = [];
  tickets.innerText = 0;
  price.innerText = '₹ 0';

  const allSeats = document.getElementsByClassName('seat');

  for(let item of allSeats) {
    item.classList.remove('selected');
    item.classList.remove('booked');
  }
}

// sets final Amount and Number of tickets selected

function setFinalCountAndPrice() {
  const moviePrice = getMoviePrice(movies.value);

  tickets.innerText = selectedSeats.length;
  price.innerText = `₹ ${selectedSeats.length * moviePrice}`;
}


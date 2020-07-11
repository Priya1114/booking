let documentUtil = (function() {

  function renderRowsAndSeats(onSeatClick) {

    for(let i = 1; i <= noOfRows; i++){
      const row = document.createElement('div');
      row.classList.add('row');
      for(let j = 1; j <= seatsInRow; j++) {
        const seat = document.createElement('div');
        seat.setAttribute('class', 'seat');
        seat.setAttribute('id', `row${i}-seat${j}`);
        seat.classList.add('seat');
        seat.addEventListener('click', onSeatClick);
        row.append(seat);
      }
      mainHall.append(row);
    }
  }

  function getMoviePrice(movie) {
    const selectedMovie = movieList.filter((element) => {
      return element.name === movie;
    });

    return selectedMovie[0].price;
  }

  function renderMoviesList() {
    movieList.forEach(element => {
      const option = document.createElement('option');
      option.innerText = `${element.name}`;
      movies.append(option);
    });
    selectedPrice.innerText = `₹ ${getMoviePrice(movies.value)}`;
  }


  return {
    getMoviePrice,
    renderRowsAndSeats,
    renderMoviesList,
  }
}());
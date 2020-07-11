let initialData = (function() {
  let movieList = [
    {
      name: 'Toy Story',
      price: 100,
    },
    {
      name: 'MIB',
      price: 200,
    },
    {
      name: 'Avatar',
      price: 150,
    },
    {
      name: 'Gravity',
      price: 100,
    }
  ];

  let noOfRows = 5;
  let seatsInRow = 8;

  return {
    movieList,
    noOfRows,
    seatsInRow,
  }

}());
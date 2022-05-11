function movies(input) {
  let arrOfObjects = [];

  for (let line of input) {
    line = line.split(" ");
    
    if (line.includes("addMovie")) {
      line.shift();
      line = line.join(" ");
      let movieObject = {};
      movieObject.name = line;
      arrOfObjects.push(movieObject);
    } else if (line.includes("directedBy")) {
      line = line.join(" ").split(" directedBy ");
      let movieName = line[0];
      let director = line[1];

      for (let movie of arrOfObjects) {
        if (movie.name === movieName) movie.director = director;
      }
    } 
    else if (line.includes("onDate")) {
      line = line.join(" ").split(" onDate ");
      let movieName = line[0];
      let date = line[1];

      for (let movie of arrOfObjects) {
        if (movie.name === movieName) {
          movie.date = date;
        }
      }
    }
    
  }
  for (let object of arrOfObjects) {
    if (
      object.hasOwnProperty("name") &&
      object.hasOwnProperty("director") &&
      object.hasOwnProperty("date")
    ) {
      let objectAsJSON = JSON.stringify(object);
      console.log(objectAsJSON);
    }
  }
}

movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);

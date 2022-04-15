function movieRatings(input){

    let index = 0
    let countMovies = Number(input[index]);
    index++
    let nameMovie = input[index];
    index++
    let ratingMovie = Number(input[index]);
    index++

    let minRating = Number.MAX_SAFE_INTEGER
    let maxRating = Number.MIN_SAFE_INTEGER
    let counterRating = 0
    let nameMovieMax
    let nameMovieMin

    for(let i = 0;i < countMovies;i++) {

        counterRating += ratingMovie
        if(ratingMovie > maxRating){
            maxRating = ratingMovie
            
            nameMovieMax = nameMovie
            
        } if(ratingMovie < minRating) {
            minRating = ratingMovie
            
            nameMovieMin = nameMovie
        }


        nameMovie = input[index];
        index++
        ratingMovie = Number(input[index]);
        index++
       
    }

    
    console.log(`${nameMovieMax} is with highest rating: ${maxRating.toFixed(1)}`)
    console.log(`${nameMovieMin} is with lowest rating: ${minRating.toFixed(1)}`)
    console.log(`Average rating: ${(counterRating / countMovies).toFixed(1)}`)


}

movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
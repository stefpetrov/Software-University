function sortArrBy2Criteria(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    
    arr = arr.sort((a, b) => {
      // this is 2-nd criteria, it is first, after that we modified the array by the main criteria
      return a.localeCompare(b);
    });

    arr = arr.sort((a, b) => {
      // this is the main criteria, it is last sorting
      return a.length - b.length;
    });

    console.log(arr[i]);
  }
}

sortArrBy2Criteria(["alpha", "beta", "gamma", "alalalal", "babababa"]);

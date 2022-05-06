function solve(input) {
  let perDayPerWorker = Number(input.shift());
  let countOfWorkers = Number(input.shift());
  let otherfactoryFor30Days = Number(input.shift());

  let totalBiscuits = 0
  let biscuitForDay = perDayPerWorker * countOfWorkers

  for(let i = 1; i<=30; i++){

    let currentDay = i

    if(currentDay % 3 !== 0){
        totalBiscuits += Math.floor(biscuitForDay)


    }else{
        totalBiscuits += Math.floor(biscuitForDay * 0.75)
    }
  }

  let diff = otherfactoryFor30Days - totalBiscuits
  let percentDiff = (diff / otherfactoryFor30Days * 100).toFixed(2)

  if(percentDiff > 0){
      console.log(`You have produced ${totalBiscuits} biscuits for the past month.`)
      console.log(`You produce ${percentDiff} percent more biscuits.`)
  }else{
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`)
    console.log(`You produce ${Math.abs(percentDiff)} percent less biscuits.`)
  }
  

}

solve(["163",
"16",
"67020"])

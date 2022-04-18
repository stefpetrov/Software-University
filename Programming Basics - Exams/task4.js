function training(input){

    let index = 0;
    let days = Number(input[index]);
    index++
    let firstDayKm = Number(input[index]);
    index++
    let totalKm = firstDayKm
    let finalKm = firstDayKm

    
    for(let currentDay = 1; currentDay <= days; currentDay++){

        let percent = Number(input[index]);
        index++
        
        let addKm = totalKm * percent / 100

        totalKm += addKm
        finalKm  += totalKm

        
        
        
    }
    

    if(finalKm >= 1000){

        console.log(`You've done a great job running ${Math.ceil(finalKm - 1000)} more kilometers!`)
    }
    else{
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - finalKm)} more kilometers`)
    }


}

training(["5",
"30",
"10",
"15",
"20",
"5",
"12"])
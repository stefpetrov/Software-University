function solve(input){

    let racersNames = input.shift()
    let racers = {}
    
    let distancePattern = /\d/g
    let namePattern = /[A-Za-z]/g

    let command = input.shift()

    while(command !== "end of race"){

        let matchesName = command.match(namePattern).join("")
        let matchDistance = command.match(distancePattern).map(Number).reduce((sum,el) => sum + el)
        
        if(racersNames.includes(matchesName) && !racers.hasOwnProperty(matchesName)){
            racers[matchesName] = matchDistance

        
    }else if(racersNames.includes(matchesName) && racers.hasOwnProperty(matchesName)){
        racers[matchesName] += matchDistance
    }
    

    command = input.shift()
    }
    
    let sorted = Object.entries(racers).sort((a,b)=> b[1] - a[1]).slice(0,3)

    for (let i = 0; i< sorted.length; i++) {
        console.log(`1st place: ${sorted[i++][0]}`)
        console.log(`2nd place: ${sorted[i++][0]}`)
        console.log(`3rd place: ${sorted[i++][0]}`)
        

    }
}

solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])
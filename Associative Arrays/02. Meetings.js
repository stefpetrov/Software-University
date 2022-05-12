function solve(input){
    
    let meetingList = {}

    for (let line of input) {
        line = line.split(" ")
        let [day, name] = line
        if(!meetingList.hasOwnProperty(day)){

        meetingList[day] = name
        console.log(`Scheduled for ${day}`)
        }
        else{
            console.log(`Conflict on ${day}!`)
        }
        
    }
    for(let key in meetingList){
        console.log(`${key} -> ${meetingList[key]}`)
    }

}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])
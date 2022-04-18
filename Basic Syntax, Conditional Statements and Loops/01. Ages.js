function solve(input){
    
    let age = input
    let person

    if(age >= 66){
        person = "elder"
    }
    else if(age >= 20){
        person = "adult"
    }
    else if(age >= 14){
        person = "teenager"
    }
    else if(age >= 3){
        person = "child"
    }
    else if(age >= 0){
        person = "baby"
    }
    else {
        person = "out of bounds"
    }

    console.log(person)


}
solve(20)
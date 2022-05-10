function convertToObject(obj){


    let person = JSON.parse(obj)

    let tuples = Object.entries(person)

    for (let [keys, value] of tuples) {

        console.log(`${keys}: ${value}`)
        
    }



}


convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
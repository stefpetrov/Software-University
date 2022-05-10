function convertToJSON(fn, ln, hc) {


    let person = {
        name : fn,
        lastName : ln,
        hairColor : hc
    }

    let personAsText = JSON.stringify(person)

    console.log(personAsText)

}

convertToJSON('George', 'Jones', 'Brown')
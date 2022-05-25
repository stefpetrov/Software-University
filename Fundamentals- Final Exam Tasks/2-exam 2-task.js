function solve(text){

let pattern = /([=\/])(?<country>[A-Z]+[A-Za-z]{2,})\1/g

let matches = pattern.exec(text)
let result = ""
let outputCountries = []
    
    while(matches !== null){

       result += matches.groups.country
       outputCountries.push(matches.groups.country)

        matches = pattern.exec(text)
        
    }
    console.log(`Destinations: ${outputCountries.join(", ")}`)
    console.log(`Travel Points: ${result.length}`)

}

solve("ThisIs some InvalidInput")
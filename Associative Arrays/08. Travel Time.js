function solve(input){

    
        let countries = {}
    
    
    for (let line of input) {
        
        let [country,city,price] =line.split(" > ")
        price = Number(price)
        
        if(!countries.hasOwnProperty(country)){
            countries[country] = {}
        }
        if(!countries[country].hasOwnProperty(city)){
            countries[country][city] = price
        }
        if(countries[country][city]> price){
            countries[country][city] = price
        }

    
    }
    
    let keys = Object.keys(countries)

    let sorted = keys.sort((a,b)=> a.localeCompare(b))
    
    for (let item of sorted) {
        let sortedCountries =Object.entries(countries[item])
        sortedCountries.sort((a,b) => a[1] - b[1])
        
        let result = []
        for (let city of sortedCountries) {
            result.push(city.join(" -> "))
        }
        console.log(`${item} -> ${result.join(" ")}`)
    }
    
    
    


}


solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
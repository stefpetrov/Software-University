function solve(input){

   let pattern = /([#|])(?<product>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g

    let text = input.shift()

    let matches = pattern.exec(text)
    let calories = 0

    while(matches !== null){

        calories +=Number(matches.groups.calories)
        
        matches = pattern.exec(text)
    }

    let days =Math.floor(calories / 2000)
   
    console.log(`You have food to last you for: ${days} days!`)
    
    matches = pattern.exec(text)   // parse again, becouse if not, matches == null(becouse of first while cycle)

    while(matches !== null){

        console.log(`Item: ${matches.groups.product}, Best before: ${matches.groups.date}, Nutrition: ${matches.groups.calories}`)
        
        matches = pattern.exec(text)
    }

}


solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])
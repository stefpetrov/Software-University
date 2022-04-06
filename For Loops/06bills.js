function bills(input) {

    let index = 0
    let months = Number(input[index]);
    index++

    let electricity
    let water = 20
    let internet = 15
    let others = 0
    let totalElectricitySum = 0
    let totalWater = 0
    let totalInternet = 0
    let totalOthers = 0
    let avg



    for(i = 0; i < months; i++) {
        
        electricity = Number(input[index])
        index++
        totalElectricitySum += electricity
        

    }
    totalWater = (water * months)
    totalInternet = (internet * months)
    totalOthers = (totalElectricitySum + totalInternet + totalWater) * 1.2
    avg = (totalElectricitySum + totalInternet + totalWater + totalOthers) / months
    
console.log(`Electricity: ${totalElectricitySum.toFixed(2)} lv`)
console.log(`Water: ${totalWater.toFixed(2)} lv`)
console.log(`Internet: ${totalInternet.toFixed(2)} lv`)
console.log(`Other: ${totalOthers.toFixed(2)} lv`)
console.log(`Average: ${avg.toFixed(2)} lv`)





}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22])
function gladiatorInventory(input){

    let inventory = input.shift().split(" ")
    
        for(let i = 0; i< input.length;i++){

        let command = input[i].split(" ")
        let correctCommand = command.shift()
        let equipment = command.shift()

        if(correctCommand === "Buy" && !inventory.includes(equipment)){

            inventory.push(equipment)

        }else if(correctCommand === "Trash" && inventory.includes(equipment)){
            let indexToDelete = inventory.indexOf(equipment)
            inventory.splice(indexToDelete,1)

        
        }else if(correctCommand === "Repair" && inventory.includes(equipment)){
            let indexToRepair = inventory.indexOf(equipment)
            let itemToRepair = inventory.splice(indexToRepair,1)
            inventory.push(itemToRepair.shift())

        }
        else if(correctCommand === "Upgrade" && inventory.includes(equipment.split("-").shift())){

            let tokens = equipment.split("-")
            let itemToUpgrade = tokens[0];
            let indexToUpgrade = inventory.indexOf(itemToUpgrade) + 1
            inventory.splice(indexToUpgrade,0,tokens.join(":"))

        }
    }

    console.log(inventory.join(" "))
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])
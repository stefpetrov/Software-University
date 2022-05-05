function shoppingList(input) {
  let arr = input.shift().split("!");

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Go Shopping!") {
    
    let typeCommand = command.split(" ");
    let exactCommand = typeCommand[0];
    
    if(exactCommand === "Urgent" && !arr.includes(typeCommand[1])){

        arr.unshift(typeCommand[1])

    }

    else if(exactCommand === "Unnecessary" && arr.includes(typeCommand[1])){

        let indexToRemove = arr.indexOf(typeCommand[1])
        arr.splice(indexToRemove, 1)

    }
    else if(exactCommand === "Correct" && arr.includes(typeCommand[1])){
        
        let indexToChangeName = arr.indexOf(typeCommand[1]);
        arr[indexToChangeName] = typeCommand[2]

    }
    else if(exactCommand === "Rearrange" && arr.includes(typeCommand[1])){

        let indexToRerrange = arr.indexOf(typeCommand[1]);
        arr.splice(indexToRerrange, 1);
        arr.push(typeCommand[1]);
    }

    command = input[index];
    index++;
  }

  console.log(arr.join(", "))
}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

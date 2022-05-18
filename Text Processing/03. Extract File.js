function solve(str){

    let strAsArr = str.split("\\")
    let lastElementIndex = strAsArr.length - 1
    let file = strAsArr[lastElementIndex]
    
    let splittedFile = file.split(".")

    let extentsion = splittedFile.pop()
    let fileName = splittedFile.join(".");
    

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extentsion}`)
}

solve('C:\\Internal\\training-internal\\Template.bak.pptx')
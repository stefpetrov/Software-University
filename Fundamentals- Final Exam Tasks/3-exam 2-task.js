function solve(text) {

    let pattern = /(#|@)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g

    let matches = pattern.exec(text)
    let result = {}
    let counterMirror = 0

    if (!matches) {
        console.log("No word pairs found!")
    }
    else {
        let counter = 0

         while (matches !== null) {
            counter++

            let firstWord = matches.groups.word1
            let secondWord = matches.groups.word2
            let reversedWord = secondWord.split("").reverse().join("")
            if (firstWord === reversedWord) {

                result[firstWord] = secondWord
                counterMirror++
            }

            matches = pattern.exec(text)

        }

        console.log(`${counter} word pairs found!`)
    }
    let arrOfMirrorWords = []
    if (!counterMirror > 0) {
        console.log("No mirror words!")
    }
    else {
        for (let key of Object.keys(result)) {
            let output = `${key} <=> ${result[key]}`
            arrOfMirrorWords.push(output)


        }
        console.log("The mirror words are:")
        console.log(`${arrOfMirrorWords.join(", ")}`)
    }
}

solve("@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r")
function passwordValidator(input) {
  let isPassed = true;
  function lengthCheck(pass) {
    let passL = pass.length;
    let isLengthEnough = false;

    if (passL >= 6 && passL <= 10) {
      isLengthEnough = true;
    }
    if (isLengthEnough) {
      return true;
    } else {
      isPassed = false;
    }
  }

  function lettersAndDigitsCheck(password) {
    let isOnlyLettersAndDigits = false;
    let counterSymbols = 0;

    for (let elements of password) {
      let elementsToNum = Number(elements.charCodeAt(0));
      if (
        (elementsToNum >= 48 && elementsToNum <= 57) ||
        (elementsToNum >= 65 && elementsToNum <= 90) ||
        (elementsToNum >= 97 && elementsToNum <= 122)
      ) {
        isOnlyLettersAndDigits = true;
        counterSymbols++;
      } else {
        isOnlyLettersAndDigits = false;
        break;
      }
    }
    if (isOnlyLettersAndDigits === true && counterSymbols === password.length) {
      return true;
    } else {
      isPassed = false;
    }
  }
  function digitsCheck(enteredPass) {
    let isThereTwoDigits = false;
    let counterDigits = 0;
    let countElements = 0;
    for (let elements of enteredPass) {
      let elementsToNum = Number(elements.charCodeAt(0));
      countElements++;
      if (elementsToNum >= 48 && elementsToNum <= 57) {
        counterDigits++;
      }
      if (counterDigits >= 2) {
        isThereTwoDigits = true;
        return true;
      } else if (
        isThereTwoDigits === false &&
        countElements === enteredPass.length
      ) {
        isPassed = false;
      }
    }
  }

  if (!lengthCheck(input)) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!lettersAndDigitsCheck(input)) {
    console.log("Password must consist only of letters and digits");
  }
  if (!digitsCheck(input)) {
    console.log("Password must have at least 2 digits");
  }

  if (isPassed) {
    console.log("Password is valid");
  }
}

passwordValidator("Pa$s$s");

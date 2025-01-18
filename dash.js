function getValue() {
        let inputElement = document.getElementById("userInput");
        let inputValue = inputElement.value; // Get the value from input
        document.getElementById("output").innerText = "You entered: " + inputValue;
    }

    inputElement
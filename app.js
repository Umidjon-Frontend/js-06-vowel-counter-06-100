const textInput = document.querySelector(".input"),
    checkBtn = document.querySelector(".check-btn"),
    textOutput = document.querySelector(".show-text h1");

checkBtn.addEventListener("click", checkVowel);

function checkVowel() {
    let countVowel = 0;
    if (textInput.value) {
        let text = textInput.value.toLowerCase();

        for (let i = 0; i < text.length; i++) {
            const element = text[i];
            if (element.match(/([a,e,i,o,u])/)) {
                countVowel++;
            }
        }
    } else {
        alert("Input is not a valid");
    }
    textOutput.innerHTML = `${textInput.value.toUpperCase()} has ${countVowel} vowels`;
}

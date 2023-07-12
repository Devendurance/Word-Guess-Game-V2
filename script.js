//Word and Hint
const wordList = [
    {
        word: "mystery",
        hint: "something that is unknown or difficult to understand"
    },
    {
        word: "adventure",
        hint: "it involves exciting or daring experiences"
    },
    {
        word: "whisper",
        hint: "it has a soft or low-spoken voice"
    },
    {
        word: "sunshine",
        hint: "it refers to the bright light and warmth from the sun"
    },
    {
        word: "giggle",
        hint: "it is a high-pitched, silly laughter"
    },
    {
        word: "harmony", 
        hint: "it describes a pleasing combination of sounds or elements"
    },
    {
        word: "enigma",
        hint: "it refers to something mysterious or puzzling"
    },
    {
        word: "luminous",
        hint: "it means emitting or reflecting light, brightness, or intelligence"
    },
    {
        word: "cascade",
        hint: "it is a small waterfall or a series of stages"
    },
    {
        word: "serendipity",
        hint: "it refers  to finding valuable or delightful things by chance"
    },
    {
        word: "velvet",
        hint: "it is a soft, smooth fabric often associated with luxury"
    },
    {
        word: "flutter",
        hint: "it describes quick and light movements, like those of wings or leaves"
    },
    {
        word: "euphoria",
        hint: "it is an intense feeling od happiness or excitement"
    },
    {
        word: "serenade",
        hint: "it is a musical performance done for someone's beloved"
    },
    {
        word: "radiant",
        hint: "it means shining brightly or beaming with joy"
    },
    {
        word: "football",
        hint: "⚽"
    },
    {
        word: "pizza",
        hint: "🍕"
    },
    {
        word: "basketball",
        hint: "🏀"
    },
    {
        word: "sun",
        hint: "🌞"
    },
    {
        word: "rocket",
        hint: "🚀"
    },
    {
        word: "planet",
        hint: "🪐"
    },
    {
        word: "moon",
        hint: "🌙"
    },
    {
        word: "twelve",
        hint: "1️⃣2️⃣"
    },
    {
        word: "ten",
        hint: "1️⃣ ➕ 9️⃣"
    },

]

//Initial References
const message = document.getElementById("message")
const hintRef = document.querySelector(".hint-ref")
const controls = document.querySelector(".controls-container")
const startBtn = document.getElementById("start")
const letterContainer = document.getElementById("letter-container")
const userInpSection = document.getElementById("user-input-section")
const resultText = document.getElementById("result")
const word = document.getElementById("word")

//Generate random value
let ranObj = wordList[Math.floor(Math.random() * wordList.length)]
let randomWord = ranObj.word
let randomHint = ranObj.hint
console.log(randomWord)
console.log(randomHint)

let winCount = 0,
lossCount = 0;

//Block all the buttons

const blocker = () =>{
    let lettersButton = document.querySelectorAll(".letters")

    stopGame()
}

//Start Game
startBtn.addEventListener("click", ()=> {
    controls.classList.add("hide");
    console.log("i am active")
    init();
})

//Stop Game 
const stopGame = () =>{
    controls.classList.remove("hide")
}
//Generate Word Function 
const generateWord = () =>{
    letterContainer.classList.remove("hide")
    userInpSection.innerText = ""
    randomWord = word
    randomHint = randomHint
    hintRef.innerHTML = `<div id="randomHint">
    <span>Hint:</span>${randomHint}</div>`
    let displayItem = "";
    randomWord.split("").forEach(value =>{
        displayItem += `<span class="inputSpace">_ </span>`
    })

    //Display each element
    userInpSection.innerHTML = displayItem
    userInpSection.innerHTML += `<div id="chanceCount">Chances Left: ${lossCount}</div>`
};

//Initialize Function 
const init = () =>{
    winCount = 0
    lossCount = 7
    randomWord = randomWord
    // word.innerText = randomWord
    randomHint = randomHint
    userInpSection.innerHTML = ""
    letterContainer.classList.add("hide")
    letterContainer.innerHTML = ""
    generateWord()

    //For creating letter buttons
    for(let i = 65; i < 91; i++){
        let button = document.createElement("button")
        button.classList.add("letters")

        //Number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i)

        //CHARACTER BUTTON ONCLICK
        button.addEventListener("click", ()=>{
            message.innerText = `Correct Letter`
            message.style.color = "#008000"
            let charArray = randomWord.toUpperCase().split("")
            let inputSpace = document.getElementsByClassName("inputSpace")
        

        //if array contains clicked value replace the matched dash with letter 
        if (charArray.includes(button.innerText)){
            charArray.forEach((char, index) => {
                //if character in array is same as clicked button
                if (char === button.innerText){
                    button.classList.add("correct");
                    //Replace dash with letter 
                    inputSpace[index].innerText = char
                    //Increment counter 
                    winCount += 1
                    //If winCount equals word length
                    if (winCount == charArray.length){
                        resultText.innerHTML = "You won 🏆"
                        startBtn.innerText = "Restart"
                        startBtn.style.backgroundColor = 'forestgreen'
                        startBtn.style.color = 'white'
                        //block all buttons
                        blocker()
                    }
                }
            });
        } 
        else{
            //lose count
            button.classList.add("incorrect")
            lossCount -= 1
            document.getElementById("chanceCount").innerText = `Chances left: ${lossCount}`
            message.innerText = 'incorrect letter'
            message.style.color = "darkred"
            if (lossCount === 0){
                word.innerHTML = `The word was <span>${randomWord}</span>`
                resultText.innerHTML = "Game Over 😂😝"
                blocker()
            }

        }

                //Disable all buttons
                button.disabled = true;
            });
        
        //append generated buttons to the letters contained
        letterContainer.appendChild(button);
    }
};

startBtn.addEventListener('click', init)

window.onload = () => {
    init()
}



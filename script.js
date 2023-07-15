//Word and Hint
const wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "victory",
        hint: "antonym of defeat"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "game played by two players"
    },
    {
        word: "act",
        hint: "the doing of a thing"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "silver",
        hint: "a shiny and costly natural resource"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "poseidon",
        hint: "greek god of water"
    },
    {
        word: "ares",
        hint: "greek god of war"
    },
    {
        word: "tinubu",
        hint: "nigerian king of the streets"
    },
    {
        word: "venice",
        hint: "italian city surrounded by water"
    },
    {
        word: "khalifa",
        hint: "a famous skyscrapper in dubai, also a title of leadership"
    },
    {
        word: "chocolate",
        hint: "sweet and brown"
    },
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
    {
        word: "taxi",
        hint: "🚕"
    },
    {
        word: "trafficlight",
        hint: "🚦"
    },
    {
        word: "lion",
        hint: "🦁"
    },
    {
        word: "tiger",
        hint: "🐯"
    },
    {
        word: "dolphin",
        hint: "🐬"
    },
    {
        word: "ear",
        hint: "👂"
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
let score = document.querySelector(".score span")
const chanceCount = document.querySelector("#chanceCount span")
let audioOne = new Audio('assets/correct-6033.mp3');
let audioTwo = new Audio('assets/buzzer-or-wrong-answer-20582.mp3')
let victorySound = new Audio('assets/crowd-cheer-ii-6263.mp3')
let defeatSound = new Audio('assets/wah-wah-sad-trombone-6347.mp3')

let winCount = 0
let lossCount = 0;
let loss = []
let randomWord;
let randomHint;
let scoreCount = 0
//Generate random value
let generateRandom = () =>{
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)]
    randomWord = ranObj.word
    randomHint = ranObj.hint
    winCount = 0;
    console.log(randomWord)
    console.log(randomHint)
}


//Block all the buttons

const blocker = () =>{
    let lettersButton = document.querySelectorAll(".letters")

    stopGame()
}

//Start Game

startBtn.addEventListener("click", ()=> {
    generateRandom()
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
    randomWord = randomWord
    randomHint = randomHint
    hintRef.innerHTML = `<div id="randomHint">
    <span>Hint:</span>${randomHint}</div>`
    let displayItem = "";
    randomWord.split("").forEach(value =>{
        displayItem += `<span class="inputSpace" style="color: white;">_ </span>`
    })

    //Display each element
    userInpSection.innerHTML = displayItem
    chanceCount.innerText = lossCount
};

//Initialize Function 
const init = () =>{
    winCount = 0
    lossCount = 8
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
            // message.innerText = `Correct Letter`
            // message.style.color = "#008000"
            let charArray = randomWord.toUpperCase().split("")
            let inputSpace = document.getElementsByClassName("inputSpace")
        

        //if array contains clicked value replace the matched dash with letter 
        if (charArray.includes(button.innerText)){
            charArray.forEach((char, index) => {
                //if character in array is same as clicked button
                if (char === button.innerText){
                    button.classList.add("correct");
                    //Replace dash with letter 
                    audioOne.play()
                    inputSpace[index].innerText = char
                    //Increment counter 
                    winCount += 1
                    scoreCount += 2
                    score.textContent = scoreCount 
                    //If winCount equals word length
                    if (winCount == charArray.length){
                        resultText.innerHTML = "You won this round🏆"
                        startBtn.innerText = "Continue"
                        victorySound.play()
                        startBtn.addEventListener("click",()=>{
                            victorySound.pause()
                        })
                        //block all buttons
                        blocker()
                        if(lossCount > 0 ){
                            return lossCount
                        }
                    }
                
                }
            });
        } 
        else{
            //lose count
            button.classList.add("incorrect")
            lossCount -= 1
            audioTwo.play()
            chanceCount.innerText = lossCount
            message.innerText = `incorrect letter`
            message.style.color = "red"
            if (lossCount === 0){
                word.innerHTML = `The word was <span>${randomWord}</span>`
                resultText.innerHTML = "Game Over 😂😝"
                defeatSound.play()
                startBtn.innerText = "Restart"
                startBtn.addEventListener("click",()=>{
                    scoreCount = 0
                    score.innerText = scoreCount
                    defeatSound.pause()
                    
                })
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



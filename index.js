//1.data setup
//all the const
//2. DOM element references
//3. Functions
// 4. Event Listeners





// We need to pick a question according to the difficulty level



//1. questions data
const questions = [
    { text: "How many shoes do you have?", difficulty: "easy", emoji: "🎈" },
    { text: "What is your favorite food and why?", difficulty: "medium", emoji: "🧃" },
    { text: "If you could travel anywhere in the world, where would you go?", difficulty: "hard", emoji: "🚀" },
    { text: "What time do you usually wake up?", difficulty: "easy", emoji: "🎈" },
    { text: "Describe your ideal weekend.", difficulty: "medium", emoji: "🧃" },
    { text: "If you were invisible for one day, what would you do?", difficulty: "hard", emoji: "🚀" }
  ];


  // 2.Track seen questions
  const seenQuestions = [];


  //3.Get references to elements
  const questionText = document.getElementById('question');
  const emojiElement =document.querySelector('.emoji');
  const emojis = ['👽', '👻', '😻', '🦄']
  const levelSelect = document.getElementById('level');
  const button = document.getElementById('new-question');


//emoji animation

document.getElementById('new-question').addEventListener('mousedown', () => {
    const randomEmoji = emojis[Math.floor(Math.random()* emojis.length)];
    emojiElement.textContent = randomEmoji;
});


  //- Get question according to level
function getQuestion(difficulty = "any"){
    let filtered = questions;

    if(difficulty !== "any"){
        filtered = questions.filter(q => q.difficulty === difficulty);
    }


    // Exclude seen questions
    const unseen = filtered.filtered(q => !seenQuestions.includes(q.text));

    if(unseen.length === 0){
        alert("You've answered all the questions for this level! 🎉");
        return;
    }

    const q = unseen[Math.floor(Math.random()* unseen.length)];
    seenQuestions.push(q.text);
    return q;
}


// 5.Event listener for button click
button.addEventListener('click', ()=> {
    const level = levelSelect.value;
    const q = getQuestion(level);

    if(!q)return;

    emojiElement.textContent = q.emoji;
    emojiElement.title  = q.difficulty;
    questionText.textContent = q.text;

});
















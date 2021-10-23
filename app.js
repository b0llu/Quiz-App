const quizData = [{
    question: 'What is my name?',
    a: 'Dhru',
    b: 'Dhruv',
    c: 'Dhruva',
    d: 'None of Above',
    correct: 'b'
}, {
    question: 'What is my Age?',
    a: '19',
    b: '21',
    c: '22',
    d: '20',
    correct: 'd'
}, {
    question: 'Where do I Live?',
    a: 'Banglore',
    b: 'Mumbai',
    c: 'Ratnagiri',
    d: 'Saudi Arabia',
    correct: 'c'
}, {
    question: 'What is my Favourite Sport?',
    a: 'Cricket',
    b: 'Football',
    c: 'Rugby',
    d: 'Kabaddi',
    correct: 'b'
}, {
    question: 'What is my Height?',
    a: "5'7",
    b: "6'1",
    c: "4",
    d: "5'11",
    correct: 'd'
}, {
    question: 'Know my Favourite Anime?',
    a: 'Attack On Titan',
    b: 'Dragon Ball',
    c: "Stein's Gate",
    d: 'Black Clover',
    correct: 'c'
}, {
    question: 'Know my Favourite Series?',
    a: 'Breaking Bad',
    b: 'Succession',
    c: 'Game of Thrones',
    d: 'Dark',
    correct: 'b'
}, {
    question: 'Know my Favourite Politician?',
    a: 'Amit Shaha',
    b: 'Modi',
    c: 'Rahul Gandhi',
    d: 'Arvin Kejriwal',
    correct: 'b'
}, {
    question: 'Do you know my Favourite Soda Flavour?',
    a: 'Masala Soda',
    b: 'Awla Soda',
    c: 'Lemon Full Jar Soda',
    d: 'Orange Soda',
    correct: 'c'
}, {
    question: 'Who is my Favourite Anime Charater?',
    a: 'Goku',
    b: 'Light Yagami',
    c: 'Minato',
    d: 'Captain Yami',
    correct: 'b'
}]

const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswer() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You Got ${score} out of ${quizData.length} Questions Correct!</h2>`
        }
    }

})
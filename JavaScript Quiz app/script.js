let quizData = [

    {
        question: 'How old is subodh?',
        a: '10',
        b: '21',
        c: '30',
        d: '40',

        correct: 'b'
    },
    {
        question: "Which is the most used programming language in 2021?",
        a: 'python',
        b: 'c',
        c: 'javascript',
        d: 'c++',

        correct: 'c'
    },
    {
        question: "Who is the PM of india?",
        a: 'Subodh thore',
        b: 'Ajinkya rahane',
        c: 'Virat kohli',
        d: 'Narendra modi',

        correct: 'd'
    }
    ,
    {
        question: "What year was javascript launched?",
        a: '2020',
        b: '2019',
        c: '2023',
        d: 'None of the above',

        correct: 'd'

    }

]


let currentQuestion = 0
let score = 0

let quiz = document.getElementById('quiz')


let answers = document.querySelectorAll('.answer')


let questionEl = document.getElementById('question')

let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')

let submitBtn = document.getElementById('submit')

loadQuiz();

function loadQuiz() {
    deSelectedAns()
    let currentQuiz = quizData[currentQuestion]

    questionEl.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
    d_text.innerHTML = currentQuiz.d;

}



submitBtn.addEventListener('click', () => {



    let answer = getSelected()
    console.log(answer)

    if (answer) {

        if(answer===quizData[currentQuestion].correct){
            score=score+1
        }

        currentQuestion++
        if (currentQuestion < quizData.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML=`
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }

    }

})


function getSelected() {
    let answers = document.querySelectorAll('.answer')

    let ans = undefined
    answers.forEach((answer) => {
        if (answer.checked) {
            ans = answer.id
        }
    })

    return ans
}

function deSelectedAns(){
    answers.forEach((answer) => {
        answer.checked=false
    })
         
}
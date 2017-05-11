var correct = 0;
var wrong = 0;
var currentQuestion = false;
var questionCounter = 0;

var questions = [{
    question: "How many Champions League trophies have Liverpool FC (LFC) won?",
    choices: [2, 5, 1, 3],
    correctAnswer: 5,
    imgCorrect: 0,
    imgWrong: 0,
    }, {
    question: "This person has a chant and refers to him as a 'sunny lad from spain'",
    choices: ["Luis Suarez", "Xabi Alonso", "Alberto Moreno", "Fernando Torres"],
    correctAnswer: "Fernando Torres",
    imgCorrect: 0,
    imgWrong: 0,
    }, {
    question: "What stadium does LFC play their home games at?",
    choices: ["Anfield", "Old Trafford", "The Emirates", "Stamford Bridge"],
    correctAnswer: "Anfield",
    imgCorrect: 0,
    imgWrong: 0,
    }, {
    question: "How many english first division titles have LFC won?/nThis includes the time before the inception of the English Premier League",
    choices: [18, 11, 8, 20],
    correctAnswer: 18,
    imgCorrect: 0,
    imgWrong: 0,
    },  {
    question: "This former LFC captain is referred to as 'Captain Fantastic' by LFC fans.",
    choices: ["Graeme Souness", "Ronnie Moran", "Jordan Henderson", "Steven Gerrard"],
    correctAnswer: "Steven Gerrard",
    imgCorrect: 0,
    imgWrong: 0,
    },  {
    question: "In the 'Miracle in Istanbul', how many goals back did Liverpool come back from to win the Champions League trophy in the tournament final",
    choices: [5, 3, 7, 6],
    correctAnswer: 3,
    imgCorrect: 0,
    imgWrong: 0,
    },  {
    question: "Which of the following people is not a former coach of LFC?",
    choices: ["Bob Paisley", "Kenny Dalglish", "Rafa Benitez", "Harry Redknapp"],
    correctAnswer: "Harry Redknapp",
    imgCorrect: 0,
    imgWrong: 0,
    },  {
    question: "In 1989, 96 LFC fans were killed during a match due to overcrowding in a standing section and were crushed against fencing that lined the field. This is called what?",
    choices: ["The Heysel Disaster", "The Hillsborough Tragedy", "Last Stand of the Kopp", "Ellis Park Stadium Disaster"],
    correctAnswer: "The Hillsborough Tragedy",
    imgCorrect: 0,
    imgWrong: 0,
    }, {
    question: "What song is played before every LFC home match?",
    choices: ["Glory, Glory Liverpool", "Sweet Caroline", "Young Turks", "You'll Never Walk Alone"],
    correctAnswer: "You'll Never Walk Alone",
    imgCorrect: 0,
    imgWrong: 0,
    },  {
    question: "What LFC player is amongst Liverpool fans as 'God'",
    choices: ["Luis Suarez", "Ian Rush", "Robbie Fowler", "Jamie Redknapp"],
    correctAnswer: "Robbie Fowler",
    imgCorrect: 0,
    imgWrong: 0,
    }];

    var gameSetup = function(){
        
    }
    var startGame = function(){
        while(questionCounter < 10){
            setInterval(function(){
                chooseQuestion(questionCounter)                
            }, 30000)
        }
    }

    var chooseQuestion = function(index){
        //logic to choose a random question. Prob have it choose random number between 1 and 10, 
        //have a bank to check against to make sure same question does not show up twice.
        //also, have it do the setinterval between questions. Will likely need to set a global variable to check the correct answer
        currentQuestion = questions[index];

        $("#question").text(questions[index].question);
        $("#option-0").text(questions[index].choices[0]);
        $("#option-1").text(questions[index].choices[1]);
        $("#option-2").text(questions[index].choices[2]);
        $("#option-3").text(questions[index].choices[3]);
    }



$(document).ready(function(){

    $("start").on("click", function(){
        $("start").hide();
        startGame();
    });

    $(".option").on("click", function(){
        if ($(this).val === currentQuestion.correctAnswer){
            //show correct img in object
            correct ++;
        } else {
            //show incorrect image in object
            wrong ++;
        }
        clearInterval();

        setTimeout(function(){
            //do this to allow for the images to display. 
        }, 5000);
    });

});
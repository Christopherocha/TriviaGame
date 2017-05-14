var correct = 0;
var wrong = 0;
var unanswered = 0;
var currentQuestion = false;
var questionCounter = 0;
var timer = 1;

var questions = [{
    question: "How many Champions League trophies have Liverpool FC (LFC) won?",
    choices: [2, 5, 1, 3],
    correctAnswerIndex: 1,
    img: '<iframe src="https://giphy.com/embed/26xBxI32jeKx3Ntew" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    }, {
    question: "This person has a chant and refers to him as a 'sunny lad from spain'",
    choices: ["Luis Suarez", "Xabi Alonso", "Alberto Moreno", "Fernando Torres"],
    correctAnswerIndex: 3,
    img: '<iframe src="https://giphy.com/embed/ruNPMjw5Zw0Cs" width="480" height="249" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    }, {
    question: "What stadium does LFC play their home games at?",
    choices: ["Anfield", "Old Trafford", "The Emirates", "Stamford Bridge"],
    correctAnswerIndex: 0,
    img: '<iframe src="https://giphy.com/embed/l3q2UEab6nrlpNZPa" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    }, {
    question: "How many english first division titles have LFC won?\nThis includes the time before the inception of the English Premier League",
    choices: [18, 11, 8, 20],
    correctAnswerIndex: 0,
    img: '<iframe src="https://giphy.com/embed/l4FGqEjOHRcFUqYNy" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },  {
    question: "This former LFC captain is referred to as 'Captain Fantastic' by LFC fans.",
    choices: ["Graeme Souness", "Ronnie Moran", "Jordan Henderson", "Steven Gerrard"],
    correctAnswerIndex: 3,
    img: '<iframe src="https://giphy.com/embed/LcBSPDy84CMda" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },  {
    question: "In the 'Miracle in Istanbul', how many goals back did Liverpool come back from to win the Champions League trophy in the tournament final",
    choices: [5, 3, 7, 6],
    correctAnswerIndex: 1,
    img: '<iframe src="https://giphy.com/embed/wh6JkfvD2vpcI" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },  {
    question: "Which of the following people is not a former coach of LFC?",
    choices: ["Bob Paisley", "Kenny Dalglish", "Rafa Benitez", "Harry Redknapp"],
    correctAnswerIndex: 3,
    img: '<iframe src="https://giphy.com/embed/AIeqqLakLCxWM" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },  {
    question: "In 1989, 96 LFC fans were killed during a match due to overcrowding in a standing section and were crushed against fencing that lined the field. This is called what?",
    choices: ["The Heysel Disaster", "The Hillsborough Tragedy", "Last Stand of the Kopp", "Ellis Park Stadium Disaster"],
    correctAnswerIndex: 1,
    img: '<iframe src="https://giphy.com/embed/x308LZ1by2ohi" width="255" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    }, {
    question: "What song is played before every LFC home match?",
    choices: ["Glory, Glory Liverpool", "Sweet Caroline", "Young Turks", "You'll Never Walk Alone"],
    correctAnswerIndex: 3,
    img: '<iframe src="https://giphy.com/embed/zVoBI1YGvVRUQ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },  {
    question: "What LFC player do Liverpool fans as refer to as 'God'",
    choices: ["Luis Suarez", "Ian Rush", "Robbie Fowler", "Jamie Redknapp"],
    correctAnswerIndex: 2,
    img: '<iframe src="https://giphy.com/embed/7S1O8snYAayCk" width="480" height="294" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    }];

    var gameSetup = function(){
        
    }
    var startGame = function(){
        chooseQuestion(questionCounter);
        var gameTimer = setInterval(function(){    
            questionCounter ++;
            chooseQuestion(questionCounter);
            if(questionCounter === 10){
                clearInterval(timer);
                displayResults();
            }
            unanswered ++;
        }, 20000);
        console.log(gameTimer);
    } 
    var chooseQuestion = function(index){
        currentQuestion = questions[index];

        $("#question").text(questions[index].question);
        $("#option-0").text(questions[index].choices[0]);
        $("#option-1").text(questions[index].choices[1]);
        $("#option-2").text(questions[index].choices[2]);
        $("#option-3").text(questions[index].choices[3]);

        $("#result-img").html(currentQuestion.img)
    }

    $("#start").on("click", function(){
        $("#start").hide();
        $("#start-msg").hide();
        $("#options").show();
        startGame();
    });

function checkAnswer(index){
    if (currentQuestion.correctAnswerIndex === index){
            //show correct img in object
        correct ++;
        $("#result-text").html("<h2>CORRECT!</h2>");
        $("#options").hide();
        $("#result").show();
    } else {
        //show incorrect image in object
        wrong ++;
        $("#result-text").html("<h2>WRONG</h2>");
        $("#options").hide();
        $("#result").show();
    }
    clearInterval(timer);
    timer += 2;
    questionCounter ++;
    setTimeout(function(){
        if(questionCounter < 10){
            startGame();
            $("#result").hide();
            $("#options").show();
        } else {
            displayResults();
        }
    }, 5000);
}

var displayResults = function(){
    $("#options").hide();
    $("#correct").text("Correct: " + correct);
    $("#wrong").text("Wrong: " + wrong);
    $("#other").text("Unanswered: " + unanswered);
    $("#result-text").hide();
    $("#result-img").hide();
    $("#result").show();
}
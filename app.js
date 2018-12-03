 function answerQuestions(answer, targetId) {
     var question = document.querySelector(targetId)

     if (answer === question.value) {
         alert("You got it!")
     } else {
         alert("Wrong. Try again!")
     }
 }
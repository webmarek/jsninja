function update(e,n,t){var o=e.firstChild||document.createElement("p");o.textContent=n,e.appendChild(o),t&&(o.className=t)}function play(e){for(var n=0,t=e.questions.length;n<t;n++)!function(t){t===e.questions[n].answer?(update($feedback,"Correct!","right"),update($score,++score)):update($feedback,"Wrong!","wrong")}(function(n){return update($question,e.question+n),prompt(e.question+n)}(e.questions[n].question));update($question,"Game Over, you scored "+score+" points")}var $question=document.getElementById("question"),$score=document.getElementById("score"),$feedback=document.getElementById("feedback"),quiz={name:"Super Hero Name Quiz",description:"How many super heroes can you name?",question:"What is the real name of ",questions:[{question:"Superman",answer:"Clarke Kent"},{question:"Batman",answer:"Bruce Wayne"},{question:"Wonder Woman",answer:"Dianna Prince"}]},score=0;update($score,score),play(quiz);
// --> save questions to local storage 
function questionsGrabber() {
	console.log("Grab Question and answers from --> https://.........org/");
	document.querySelector("#btn_verify_answers").click();
	right_answer = $('#correct_answers').html(question.answer)[0].innerText;
	question = document.querySelector("#question").innerText;
	answA = document.querySelector("#answer_A").innerText;
	answB = document.querySelector("#answer_B").innerText;
	answC = document.querySelector("#answer_C").innerText;
	answD = document.querySelector("#answer_D").innerText;
	answE = document.querySelector("#answer_E").innerText;
	answF = document.querySelector("#answer_F").innerText;
	answG = document.querySelector("#answer_G").innerText;
	question_id = document.querySelector("#questionIndex").innerText;
	document.querySelector("#answer_group_"+right_answer+" > div > div > div > label.btn.btn-primary.toggle-on").click();

	var question_json = new Object();
	question_json.id = question_id;
	question_json.question = question;
	question_json.answer_A = answA;
	question_json.answer_B = answB;
	question_json.answer_C = answC;
	question_json.answer_D = answD;
	question_json.answer_E = answE;
	question_json.answer_F = answF;
	question_json.answer_G = answG;
	question_json.rightanswer = right_answer;

	localStorage.setItem(question_id, JSON.stringify(question_json));
	document.querySelector("#btn_next_question").click();
}; questionsGrabber();


// --> read data from local sotrage
function getLocalStorage(){
	for (var i = 1; i <= 125; i++) {
		var retrievedObject = localStorage.getItem(i);
		if (retrievedObject){
			console.log('retrievedObject: ', JSON.parse(retrievedObject));
		};
	};
}; getLocalStorage();

/* 

#########
LexTale  LexTale
#########
*/

const lextale_words = [
	{word: 'platery', data: {type: 'nw', lx_trial: '0', cresp: 'no'}},
	{word: 'denial', data: {type: 'w', lx_trial: '0', cresp: 'yes'}},
	{word: 'generic', data: {type: 'w', lx_trial: '0', cresp: 'yes'}},
	{word: 'mensible', data: {type: 'nw', lx_trial: '1', cresp: 'no'}},
	{word: 'scornful', data: {type: 'w', lx_trial: '2', cresp: 'yes'}},
	{word: 'stoutly', data: {type: 'w', lx_trial: '3', cresp: 'yes'}},
	{word: 'ablaze', data: {type: 'w', lx_trial: '4', cresp: 'yes'}},
	{word: 'kermshaw', data: {type: 'nw', lx_trial: '5', cresp: 'no'}},
	{word: 'moonlit', data: {type: 'w', lx_trial: '6', cresp: 'yes'}},
	{word: 'lofty', data: {type: 'w', lx_trial: '7', cresp: 'yes'}},
	{word: 'hurricane', data: {type: 'w', lx_trial: '8', cresp: 'yes'}},
	{word: 'flaw', data: {type: 'w', lx_trial: '9', cresp: 'yes'}},
	{word: 'alberation', data: {type: 'nw', lx_trial: '10', cresp: 'no'}},
	{word: 'unkempt', data: {type: 'w', lx_trial: '11', cresp: 'yes'}},
	{word: 'breeding', data: {type: 'w', lx_trial: '12', cresp: 'yes'}},
	{word: 'festivity', data: {type: 'w', lx_trial: '13', cresp: 'yes'}},
	{word: 'screech', data: {type: 'w', lx_trial: '14', cresp: 'yes'}},
	{word: 'savoury', data: {type: 'w', lx_trial: '15', cresp: 'yes'}},
	{word: 'plaudate', data: {type: 'nw', lx_trial: '16', cresp: 'no'}},
	{word: 'shin', data: {type: 'w', lx_trial: '17', cresp: 'yes'}},
	{word: 'fluid', data: {type: 'w', lx_trial: '18', cresp: 'yes'}},
	{word: 'spaunch', data: {type: 'nw', lx_trial: '19', cresp: 'no'}},
	{word: 'allied', data: {type: 'w', lx_trial: '20', cresp: 'yes'}},
	{word: 'slain', data: {type: 'w', lx_trial: '21', cresp: 'yes'}},
	{word: 'recipient', data: {type: 'w', lx_trial: '22', cresp: 'yes'}},
	{word: 'exprate', data: {type: 'nw', lx_trial: '23', cresp: 'no'}},
	{word: 'eloquence', data: {type: 'w', lx_trial: '24', cresp: 'yes'}},
	{word: 'cleanliness', data: {type: 'w', lx_trial: '25', cresp: 'yes'}},
	{word: 'dispatch', data: {type: 'w', lx_trial: '26', cresp: 'yes'}},
	{word: 'rebondicate', data: {type: 'nw', lx_trial: '27', cresp: 'no'}},
	{word: 'ingenious', data: {type: 'w', lx_trial: '28', cresp: 'yes'}},
	{word: 'bewitch', data: {type: 'w', lx_trial: '29', cresp: 'yes'}},
	{word: 'skave', data: {type: 'nw', lx_trial: '30', cresp: 'no'}},
	{word: 'plaintively', data: {type: 'w', lx_trial: '31', cresp: 'yes'}},
	{word: 'kilp', data: {type: 'nw', lx_trial: '32', cresp: 'no'}},
	{word: 'interfate', data: {type: 'nw', lx_trial: '33', cresp: 'no'}},
	{word: 'hasty', data: {type: 'w', lx_trial: '34', cresp: 'yes'}},
	{word: 'lengthy', data: {type: 'w', lx_trial: '35', cresp: 'yes'}},
	{word: 'fray', data: {type: 'w', lx_trial: '36', cresp: 'yes'}},
	{word: 'crumper', data: {type: 'nw', lx_trial: '37', cresp: 'no'}},
	{word: 'upkeep', data: {type: 'w', lx_trial: '38', cresp: 'yes'}},
	{word: 'majestic', data: {type: 'w', lx_trial: '39', cresp: 'yes'}},
	{word: 'magrity', data: {type: 'nw', lx_trial: '40', cresp: 'no'}},
	{word: 'nourishment', data: {type: 'w', lx_trial: '41', cresp: 'yes'}},
	{word: 'abergy', data: {type: 'nw', lx_trial: '42', cresp: 'no'}},
	{word: 'proom', data: {type: 'nw', lx_trial: '43', cresp: 'no'}},
	{word: 'turmoil', data: {type: 'w', lx_trial: '44', cresp: 'yes'}},
	{word: 'carbohydrate', data: {type: 'w', lx_trial: '45', cresp: 'yes'}},
	{word: 'scholar', data: {type: 'w', lx_trial: '46', cresp: 'yes'}},
	{word: 'turtle', data: {type: 'w', lx_trial: '47', cresp: 'yes'}},
	{word: 'fellick', data: {type: 'nw', lx_trial: '48', cresp: 'no'}},
	{word: 'destription', data: {type: 'nw', lx_trial: '49', cresp: 'no'}},
	{word: 'cylinder', data: {type: 'w', lx_trial: '50', cresp: 'yes'}},
	{word: 'censorship', data: {type: 'w', lx_trial: '51', cresp: 'yes'}},
	{word: 'celestial', data: {type: 'w', lx_trial: '52', cresp: 'yes'}},
	{word: 'rascal', data: {type: 'w', lx_trial: '53', cresp: 'yes'}},
	{word: 'purrage', data: {type: 'nw', lx_trial: '54', cresp: 'no'}},
	{word: 'pulsh', data: {type: 'nw', lx_trial: '55', cresp: 'no'}},
	{word: 'muddy', data: {type: 'w', lx_trial: '56', cresp: 'yes'}},
	{word: 'quirty', data: {type: 'nw', lx_trial: '57', cresp: 'no'}},
	{word: 'pudour', data: {type: 'nw', lx_trial: '58', cresp: 'no'}},
	{word: 'listless', data: {type: 'w', lx_trial: '59', cresp: 'yes'}},
	{word: 'wrought', data: {type: 'w', lx_trial: '60', cresp: 'yes'}}]



const lextale_preamble = {
  type: jsPsychHtmlButtonResponse,
    stimulus: '<p class = "instructions">Next, you will complete a word recognition task. This task should take about five minutes.<br><br>Please press "Continue" to begin the word recognition task.</p><br>',
    choices: ['Continue']
}

	// initialise vars to store real word and non word tallies
	var rw_score = 0;
	var nw_score = 0;

	// I've split the instructions across the screen and added a title, otherwise they should be the same as www.lextale.com
	var instructions_lextale = {
		type: jsPsychInstructions,
		pages: ['<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' +  '<p class = "instructions"> This test consists of about 60 trials, in each of which you will see a string of letters. Your task is to decide whether this is an existing English word or not. If you think it is an existing English word, you click on "yes", and if you think it is not an existing English word, you click on "no".',
		
		'<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' + '<p class = "instructions">If you are sure that the word exists, even though you don\'t know its exact meaning, you may still respond "yes". But if you are not sure if it is an existing word, you should respond "no".</br></br>',
		
		'<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' + '<p class = "instructions">In this experiment, we use British English rather than American English spelling. For example: "realise" instead of "realize"; "colour" instead of "color", and so on. Please don\'t let this confuse you. This experiment is not about detecting such subtle spelling differences anyway.',

		'<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' + '<p class = "instructions">You have as much time as you like for each decision. This part of the experiment will take about 5 minutes.</br>',
		
		'<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' + '<p class = "instructions">If everything is clear, you can now start the test.</br>'],

		show_clickable_nav: true
	};


	var pre_lextale = {
		type: jsPsychHtmlButtonResponse,
		stimulus: 'Click "Start" to begin the Word Recognition Test<br><br>',
		choices: ["Start"]
	};

	// you could remove this since the lextale_stimuli.js has the trial info embedded, would need to modify the if statement to access that structure instead. 
	var lx_trials = 0;

	// This is a very close simulation of the look and feel of the LexTALE test on www.lextale.com. 
	var lextale = {
		timeline: [
			
			{
		type: jsPsychHtmlButtonResponse,

		// without this, the function will fail. this is needed if not in the main jsPsych spot. 
		on_start: function(trial){
			trial.stimulus = '<p style = "font-size: 38px; font-family: Georgia"><i>'.concat(jsPsych.timelineVariable('word')).concat('<br><br></i></p>')
			trial.data = jsPsych.timelineVariable('data')
		},
		stimulus: '',
		data: '',
		choices: ['no', 'yes'],
		button_html: ['<button class = "jspsy ch-btn", style = "width: 120px; height: 60px; background-color: red"><span style = "font-size: 38px">no</span></button>', '<button class = "jspsy ch-btn", style = "width: 120px; height: 60px; background-color: green"><span style = "font-size: 38px">yes</span></button>'],
		prompt: function(){ // use a progress bar bc the original lextale has one
			lx_trials++
			return '<br><progress value = ' + '"' + String(lx_trials) +  '" ' + 'max = "63"></progress>'},
		// calculate running accuracy
		on_finish: function(data){
			if(lx_trials > 3){
				if(data.type == 'w' && data.response == 1){
					rw_score++
				} else {
					if(data.type == 'nw' && data.response == 0){
						nw_score++
					}
				} 
				// for debugging
			//	console.log(data.type);
			//	console.log(nw_score);
			//	console.log(rw_score);
		}}
		},
		],
		timeline_variables: lextale_words,
		on_timeline_finish: function(){
			var lextale_score = ((rw_score / 40*100) + (nw_score / 20 * 100))  / 2;
				jsPsych.data.addProperties({lextale_score: lextale_score});
		  }
	}; 

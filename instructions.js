/*

Various instruction text and other prose is in this file. 

*/

var pre_spr_practice = 
{
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p class = "instructions">Thank you. You are now ready to begin the reading task.<br><br>For this task, you will read a text one word at a time. Each time you press the SPACEBAR, a new word will appear. Keep pressing the SPACEBAR to read the whole text. The text will be presented across a series of different screens. <br><br>Please read the text at your natural reading speed and use your dominant hand to press the spacebar. <br><br>When you are ready, click the button below to see how this works using a short practice text.<br><br></p>',
    choices: ["I'm Ready!"]
}
var after_spr_practice = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p class = 'instructions'>Great work! Now that you know how the texts will be presented, it is time to read a longer text, comprised of the introduction and first two chapters of a short book.<br><br>You will read the texts one after another - once you finish the first text, you will immediately begin reading the next.<br><br> When you are done reading the texts, you will be asked some questions about the texts. Try to keep all the texts in mind while you answer the questions. When you are ready, click the button to begin.</p>",
    choices: ["I'm Ready!"]
}
var pre_spr = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Remember, press the SPACEBAR to advance the text.<br><br>Press the SPACEBAR to begin reading.",
    choices: ' '
}


var reading_comp_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p class = 'instructions'> Now it is time for another reading task. In this task you will read six short encyclopedia texts about a person, event, or thing. Unlike the previous stories, you will see the whole text at once. After reading each text, you will answer three multiple choice questions about the text. The questions will only appear after you have read the text. When you are ready, click the button to read the texts.</p>",
    choices: ['I\'m Ready!']
}


var nfc_instructions = {
	type: jsPsychHtmlButtonResponse,
    stimulus: '<p class = "instructions">Great! Next, please complete another short survey about yourself.<br><br>People have different preferences for different things. For this part of this survey, please select how much you agree or disagree with each statement using the scale provided. Please click the button when you are ready to start answering the questions (18 total).</p>',
    choices: ['I\'m Ready']
};



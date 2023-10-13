
/*

demographic questions + reading habits questions

*/

const demo_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p class = "instructions">Before we start, please answer some questions about yourself.<br><br>Answering these questions helps me better understand the representativeness of the research sample, as well as make comparisons across other samples.<br><br>Please press "Continue".</p><br>',
    choices: ['Continue']
  }

const age = {
    type: jsPsychSurveyHtmlForm,
    html:'<div><ol type="1">' + 'Please enter your current age in years</br> <input type= "number" name= "age" id= "age" min= "0" max= "100" maxlength = "3" required>'+
    '</ol></div>',
      button_label: "Next",
      dataAsArray: false,
      required: true,
      on_finish: function(data){
        jsPsych.data.addProperties({age: data.response});
        data.trial_item = 'age_question';
    }
      };  	
        
const gender = {
    type: jsPsychSurveyMultiChoice,
    questions: [{prompt: "What is your gender?<br>",
    options: ["Female", "Male", "Non-binary/Other"], required: true}],
    on_finish: function(data){
        jsPsych.data.addProperties({sex: data.response})
        data.trial_item = 'sex_question';
    }
    };

const education_level = {
type: jsPsychSurveyMultiChoice,
questions: [{prompt: "What is your highest level of <i>completed</i> education?<br>",
options: ['Grade School', 'High School Diploma/GED', '2-year/Associates Degree,', '4-year/Undergraduate Degree', 'Master\'s degree or equivalent', 'PhD', 'None of these'], required: true}],
on_finish: function(data){
    jsPsych.data.addProperties({education_level: data.response})
    data.trial_item = 'education_level';
}
};

const reading_habits = {
    type: jsPsychSurvey,
    pages: [
        [
            {
            type: 'html',
            prompt: 'Please answer the following questions about your reading habits.',
            name: 'reading-habits-survey'
            },
            {
                type: 'text',
                prompt: "On average, how many books do you read each year?",
                required: true,
                name: 'avg-books-year'
            },
            {
                type: 'likert',
                prompt: 'How much do you enjoy reading? ',
                required: true,
                likert_scale_min_label: 'Do not enjoy',
                likert_scale_max_label: 'Enjoy',
                likert_scale_max: 7, 
                likert_scale_min: 1,
                name: 'enjoy-reading',
            },
            {
                type: 'likert',
                prompt: 'How confident are you in your reading ability?',
                required: true,
                likert_scale_min_label: 'Not confident',
                likert_scale_max_label: 'Confident',
                likert_scale_max: 7, 
                likert_scale_min: 1,
                name: 'enjoy-reading',
                name: 'reading-confident'
            }
        ]
    ]

}




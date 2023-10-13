/* 
Need for Cognition survey as separate likert scale items
*/

var nfc_scale = ['Very Strongly Disagree', 'Strongly Disagree', 'Moderately Disagree', 'Slightly Disagree', 'Neither Agree Nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree', 'Very Strongly Agree'];

var nfc_likert = {
        on_finish: function(data){    
        console.log(data)
        forward_scores = (data.response.nfcQ01 - 4) + (data.response.nfcQ02 - 4) + (data.response.nfcQ06 - 4) + (data.response.nfcQ10 - 4) + (data.response.nfcQ11 - 4) +  (data.response.nfcQ13 - 4) + (data.response.nfcQ14 - 4) + (data.response.nfcQ15 - 4) + (data.response.nfcQ18 - 4)
        // // // scale is -4 to 4, so reverse score by multiplying by -1
        reverse_scores = (data.response.nfcQ03 - 4)*-1 + (data.response.nfcQ04 - 4)*-1 +  (data.response.nfcQ05-4)*-1 + (data.response.nfcQ07-4)*-1 + (data.response.nfcQ08-4)*-1 + (data.response.nfcQ09-4)*-1 + (data.response.nfcQ12-4)*-1 + (data.response.nfcQ16-4)*-1 + (data.response.nfcQ17-4)*-1
        console.log(forward_scores)
        console.log(reverse_scores)
        console.log(forward_scores + reverse_scores)
        jsPsych.data.addProperties({nfc: forward_scores + reverse_scores})
    },
    


    type: jsPsychSurveyLikert,
    preamble: "Please rate how much you agree/disagree with these 18 statements",
    scale_width: 680,
    questions: [
        {prompt: '<b>I would prefer simple to complex problems.</b>', labels: nfc_scale, required: true, name: 'nfcQ01'},
        {prompt: '<b>I like to have the responsibility of handling a situation that requires a lot of thinking.</b>', labels: nfc_scale, required: true, name: 'nfcQ02'},
        {prompt: '<b>Thinking is not my idea of fun.</b>', labels: nfc_scale, required: true, name: 'nfcQ03'},
        {prompt: '<b>I would rather do something that requires little thought than<br> something that is sure to challenge my thinking abilities.</b>', labels: nfc_scale, required: true, name: 'nfcQ04'},
        {prompt: '<b>I try to anticipate and avoid situations where there is likely a chance<br> I will have to think in depth about something.</b>', labels: nfc_scale, required: true, name: 'nfcQ05'},
        {prompt: '<b>I find satisfaction in deliberating hard and long for hours.</b>', labels: nfc_scale, required: true, name: 'nfcQ06'},
        {prompt: '<b>I only think as hard as I have to.</b>', labels: nfc_scale, required: true, name: 'nfcQ07'},
        {prompt: '<b>I prefer to think about small, daily projects compared to long-term ones.</b>', labels: nfc_scale, required: true, name: 'nfcQ08'},
        {prompt: '<b>I like tasks that require little thought once I\'ve learned them.</b>', labels: nfc_scale, required: true, name: 'nfcQ09'},
        {prompt: '<b>The idea of relying on thought to make my way to the top appeals to me.</b>', labels: nfc_scale, required: true, name: 'nfcQ10'},
        {prompt: '<b>I really enjoy a task that involves coming up with new solutions to problems.</b>', labels: nfc_scale, required: true, name: 'nfcQ11'},
        {prompt: '<b>Learning new ways to think doesn\'t excite me very much.</b>', labels: nfc_scale, required: true, name: 'nfcQ12'},
        {prompt: '<b>I prefer my life to be filled with puzzles that I must solve.</b>', labels: nfc_scale, required: true, name: 'nfcQ13'},
        {prompt: '<b>The notion of thinking abstractly is appealing to me.</b>', labels: nfc_scale, required: true, name: 'nfcQ14'},
        {prompt: '<b>I would prefer a task that is intellectual, difficult, and important to one <br> that is somewhat important but does not require much thought.</b>', labels: nfc_scale, required: true, name: 'nfcQ15'},
        {prompt: '<b>I feel relief rather than satisfaction after completing a task that required a lot of mental effort.</b>', labels: nfc_scale, required: true, name: 'nfcQ16'},
        {prompt: '<b>It\'s enough for me that something gets the job done; I don\'t care how or why it works. </b>', labels: nfc_scale, required: true, name: 'nfcQ17'},
        {prompt: '<b>I usually end up deliberating about issues even when they do not affect me personally.</b>', labels: nfc_scale, required: true, name: 'nfcQ18'}
    ]
}




// var nfc_likert_scale_values = [
//     {value: -4, text: '<<<<'},
//     {value: -3, text: '<<<'},
//     {value: -2, text: '<<'},
//     {value: -1, text: '<'},
//     {value: 0, text: 'neutral'},
//     {value: 1, text: '>'},
//     {value: 2, text: '>>'},
//     {value: 3, text: '>>>'},
//     {value: 4, text: '>>>>'},
// ]


// var nfc_likert_scale_values1 = [
//     {value: -4, text: 'very strong'},
//     {value: -3, text: 'strong'},
//     {value: -2, text: 'moderate'},
//     {value: -1, text: 'slight'},
//     {value: 0, text: 'neutral'},
//     {value: 1, text: 'slight'},
//     {value: 2, text: 'moderate'},
//     {value: 3, text: 'strong'},
//     {value: 4, text: 'very strong'},
// ]


// var nfc_likert_scale_values2 = [
//     {value: -4, text: '-4'},
//     {value: -3, text: '-3'},
//     {value: -2, text: '-2'},
//     {value: -1, text: '-1'},
//     {value: 0, text: '0'},
//     {value: 1, text: '1'},
//     {value: 2, text: '2'},
//     {value: 3, text: '3'},
//     {value: 4, text: '4'},
// ]

// var nfc_likert_questions = {
//     type: jsPsychSurvey,
//     on_finish: function(data){
//         console.log(data)
//         forward_scores = data.response.nfcQ01 + data.response.nfcQ02 + data.response.nfcQ06 + data.response.nfcQ10 + data.response.nfcQ11 +  data.response.nfcQ13 + data.response.nfcQ14 + data.response.nfcQ15+ data.response.nfcQ18

//         // scale is -4 to 4, so reverse score by multiplying by -1
//         reverse_scores = data.response.nfcQ03*-1 + data.response.nfcQ04*-1 +  data.response.nfcQ05*-1 + data.response.nfcQ07*-1 + data.response.nfcQ08*-1 + data.response.nfcQ09*-1 + data.response.nfcQ12*-1 + data.response.nfcQ16*-1 + data.response.nfcQ17*-1
//         console.log(forward_scores)
//         console.log(reverse_scores)
//         console.log(forward_scores + reverse_scores)
//         jsPsych.data.addProperties({nfc: forward_scores + reverse_scores})

//     },
//     pages: [
//         [
//             {
//                 type: 'html',
//                 prompt: 'Rate how much you agree/disagree with each statement.',
//                 name: 'nfc-survey-start'
//             },
// {
//             type: 'likert',
//             prompt: "1. I would prefer simple to complex problems",
//             likert_scale_min_label: 'disagreement',
//             likert_scale_max_label: 'agreement', 
//             likert_scale_values: nfc_likert_scale_values2,
//             required: true,
//             name:'nfcQ01'
// },
// {
//     type: 'likert',
//     prompt: "2. I like to have the responsibility of handling a situation that requires a lot of thinking.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values1,
//     required: true,
//     name:'nfcQ02'
// },
// {
//     type: 'likert',
//     prompt: "3. Thinking is not my idea of fun.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,  
//     required: true,
//     name:'nfcQ03'
// },
// {
//     type: 'likert',
//     prompt: "4. I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,
//     required: true,
//     name:'nfcQ04'
// },
// {
//     type: 'likert',
//     prompt: "5. I try to anticipate and avoid situations where there is likely a chance I will have to think in depth about something.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,  
//     required: true,
//     name:'nfcQ05'
// },
// {
//     type: 'likert',
//     prompt: "6. I find satisfaction in deliberating hard and long for hours.",

// likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,   
//     required: true,
//     name:'nfcQ06'
// },
// {
//     type: 'likert',
//     prompt: "7. I only think as hard as I have to.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,   
//     required: true,
//     name:'nfcQ07'
// },
// {
//     type: 'likert',
//     prompt: "8. I prefer to think about small, daily projects compared to long-term ones.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,  
//     required: true,
//     name:'nfcQ08'
// },
// {
//     type: 'likert',
//     prompt: "9. I like tasks that require little thought once I\'ve learned them.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,
//     required: true,
//     name:'nfcQ09'
// },
// {
//     type: 'likert',
//     prompt: "10. The idea of relying on thought to make my way to the top appeals to me.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,
//     required: true,
//     name:'nfcQ10'
// },
// {
//     type: 'likert',
//     prompt: "11. I really enjoy a task that involves coming up with new solutions to problems.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,  
//     required: true,
//     name:'nfcQ11'
// },
// {
//     type: 'likert',
//     prompt: "12. Learning new ways to think doesn\'t excite me very much.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,
//     required: true,
//     name:'nfcQ12'
// },
// {
//     type: 'likert',
//     prompt: "13. I prefer my life to be filled with puzzles that I must solve.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values, 
//     required: true,
//     name:'nfcQ13'
// },
// {
//     type: 'likert',
//     prompt: "14. The notion of thinking abstractly is appealing to me.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,  
//     required: true,
//     name:'nfcQ14'
// },
// {
//     type: 'likert',
//     prompt: "15. I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,
//     required: true,
//     name:'nfcQ15'
// },
// {
//     type: 'likert',
//     prompt: "16. I feel relief rather than satisfaction after completing a task that required a lot of mental effort.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,
//     required: true,
//     name:'nfcQ16'
// },
// {
//     type: 'likert',
//     prompt: "17. It\'s enough for me that something gets the job done; I don\'t care how or why it works.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,
 
//     required: true,
//     name:'nfcQ17'
// },
// {
//     type: 'likert',
//     prompt: "18. I usually end up deliberating about issues even when they do not affect me personally.",
//     likert_scale_min_label: 'disagreement',
// likert_scale_max_label: 'agreement',
//     likert_scale_values: nfc_likert_scale_values,
 
//     required: true,
//     name:'nfcQ18'
// }
//     ]
//     ]
// }
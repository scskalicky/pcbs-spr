/*

comprehension questions for after the SPR texts

*/


var likert_scale = [
    {value: 1, text:'Strongly Disagree'},
    {value: 2, text: '..Disagree..'},
    {value: 3, text: 'Slightly Disagree'},
    {value: 4, text: '  Neutral  '},
    {value: 5, text: 'Slightly Agree'},
    {value: 6, text: '  Agree  '},
    {value: 7, text: 'Strongly Agree'}
]

var comprehension_answers_free_text = {
    type: jsPsychSurvey,
    pages: [
        [
        {
            type: 'html',
            prompt: "Thank you!<br>Now please answer some questions about the texts you just read.<br>Remember, the same author wrote both texts. ",
            name: 'survey-preamble'
        },

        

        /*
        Comprehension questions based on free text. 
        - description, 
        - author's message, 
        - and author's targets
        */
        {
            type: 'text',
            prompt: "Using a single word, how would you describe the stories you just read?",
            required: true,
            name: 'one-word-desc'
        },
        {
            type: 'text',
            prompt: "What does this author have to say, if anything, about society?",
            textbox_rows: 3,
            required: true,
            name: 'say-about-society'
        },
        {
            type: 'text',
            prompt: "Is the author critical towards any specific people, groups, or ideas? If so, what are they?",
            textbox_rows: 3,
            required: true,
            name: 'targets'
        }
    ],
            /*
            message discounting
            */
    [
        {
            type: 'html',
            prompt: 'Please indicate how much do you disagree/agree with the following statements:',
            name: 'message-discount-questions'
        },
        {
            type: 'likert',
            prompt: "It would be easy to dismiss these stories as simply a joke.",
            likert_scale_min_label: 'strongly disagree',
            likert_scale_max_label: 'strongly agree',
            likert_scale_max: 7, 
            likert_scale_min: 1,   
            required: true,
            name:'author-direct'
        },
        {
            type: 'likert',
            prompt: "The author intended to entertain rather than to make a serious point.",
            likert_scale_min_label: 'strongly disagree',
            likert_scale_max_label: 'strongly agree',
            likert_scale_max: 7, 
            likert_scale_min: 1,   
            required: true,
            name:'author-entertain'
        },
        {
            type: 'likert',
            prompt: "The author was being serious about advancing their views in the stories.",
            likert_scale_min_label: 'strongly disagree',
            likert_scale_max_label: 'strongly agree',
            likert_scale_max: 7, 
            likert_scale_min: 1,
            required: true,
            name: 'author-serious'
        },
    ],
 
       /*
       reader perceptions
       */
        [
            {
                type: 'html',
                prompt: 'Please indicate how much do you disagree/agree with the following statements:',
                name: 'reader-perception-questions'
            },
            {
                type: 'likert',
                prompt: "I agree with the point(s) the author was trying to make.",
                likert_scale_min_label: 'strongly disagree',
                likert_scale_max_label: 'strongly agree',
                likert_scale_max: 7, 
                likert_scale_min: 1,
                required: true,
                name: 'agree-main-points'
            },
        {
            type: 'likert',
            prompt: "I was entertained while I was reading the stories.",
            likert_scale_min_label: 'strongly disagree',
            likert_scale_max_label: 'strongly agree',
            likert_scale_max: 7, 
            likert_scale_min: 1,
            required: true,
            name: 'are-you-entertained'
        },
        {
            type: 'likert',
            prompt: "I questioned what the author was trying to do with these stories.",
            likert_scale_min_label: 'strongly disagree',
            likert_scale_max_label: 'strongly agree',
            likert_scale_max: 7, 
            likert_scale_min: 1,
            required: true,
            name: 'question-author'
        },
     
    ],
    [ 
        {
        type: 'html',
        prompt: 'Please indicate how much do you disagree/agree with the following statements:',
        name: 'just-ask-directly'
    },
        {
            type: 'likert',
            prompt: "The stories were funny.",
            likert_scale_min_label: 'strongly disagree',
            likert_scale_max_label: 'strongly agree',
            likert_scale_max: 7, 
            likert_scale_min: 1,
            required: true,
            name: 'stories-funny'
        },
        {
            type: 'likert',
            prompt: "The stories were interesting.",
            likert_scale_min_label: 'strongly disagree',
            likert_scale_max_label: 'strongly agree',
            likert_scale_max: 7, 
            likert_scale_min: 1,
            required: true,
            name: 'stories-interesting'
        },
        {
            type: 'likert',
            prompt: "The stories were satirical.",
            likert_scale_min_label: 'strongly disagree',
            likert_scale_max_label: 'strongly agree',
            likert_scale_max: 7, 
            likert_scale_min: 1,
            required: true,
            name: 'stories-satirical'
        }
    ]
]
}

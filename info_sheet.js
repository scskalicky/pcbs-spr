/* recreate the VUW information sheets in HTML



&emacr; ē

&amacr; ā

*/





var info_sheet = 

"<img src='vuw.png'>" 
+ 
"<p class = 'consent_title'>Reading Short Stories</p><b>INFORMATION SHEET FOR PARTICIPANTS</b></p>" 
+ 
"<p class = 'consent_headings'>T&emacr;n&amacr; koe,</p>"
+
"<p class = 'consent_prose'>You are invited to take part in this research. Please read this information before deciding whether or not to take part. If you decide to participate, thank you. If you decide not to participate, thank you for considering this request.</p>" 
+
"<p class = 'consent_headings' >Ko wai ahau / Who am I?</p>" 
+ 
"<p class = 'consent_prose'>My name is Stephen Skalicky and I am an academic staff member in The School of Linguistics and Applied Language Studies at Te Herenga Waka | Victoria University of Wellington.</p>" 
+  
"<p class = 'consent_headings'>He aha te wh&amacr;inga m&omacr; t&emacr;nei rangahau / What is the aim of the project??</p>" 
+ 
"<p class = 'consent_prose'>This project will explore how people read and understand short stories written in English. Your participation will support this research by providing information as a native speaker of English who lives in the United States of America. This research has been approved by the Victoria University of Wellington Human Ethics Committee #30890.</p>" 
+ 
"<p class = 'consent_headings'>Ka p&emacr;hea t&omacr; &amacr;whina mai / How can you help?</p>" 
+ 
"<p class = 'consent_prose'>You have been invited to participate because you are a native speaker of English and reside in the United States of America. If you agree to take part you will complete an online survey and then complete a reading task. In the reading task, you will read short stories, one word at a time, and then answer questions and write short responses to the stories. You will also answer some questions about yourself, and complete a short reading comprehension task. The entire study will take approximately 30 minutes of your time. You will receive Prolific credit worth &pound;3.75 for your participation.</p>" 
+ 
"<p class = 'consent_headings'>Ka ahatia ng&amacr; k&omacr;rero ka tukuna mai / What will happen to the information you give?</p>" 
+ 
"<p class = 'consent_prose'>This research is anonymous. This means that nobody, including the researcher will be aware of your identity. By clicking \"I Agree\", you are giving consent for me to use your responses in this research. Your answers will remain completely anonymous and unidentifiable. Once you submit the survey, it will be impossible to retract your answer. Please do not include any personal identifiable information in your responses.</p>" 
+ 
"<p class = 'consent_headings'>He aha ng&amacr; hua o te rangahau / What will the project produce?</p>" 
+ 
"<p class = 'consent_prose'>The information from this research will be used in academic publications and conferences.</p>" 
+ 
"<p class = 'consent_headings'>Mehemea ng&amacr; p&amacr;tai, he raruraru r&amacr;nei, me whakap&amacr; ki a wai / If you have any questions or problems, who can you contact?</p>" 
+ 
"<p class = 'consent_prose'>If you have any questions, either now or in the future, please feel free to contact me: Stephen Skalicky (stephen.skalicky@vuw.ac.nz)</p>" 
+ 
"<p class = 'consent_headings'>He k&omacr;rero whakam&amacr;rama m&omacr; HEC / Human Ethics Committee information</p>" 
+
"<p class = 'consent_prose'>If you have any concerns about the ethical conduct of the research you may contact the Te Herenga Waka Victoria University of Wellington HEC Convenor, Associate Professor Rhonda Shaw, by emailing hec@vuw.ac.nz. </p>"



const information_sheet = {
    type: jsPsychHtmlButtonResponse,
    stimulus: info_sheet,
    prompt: '<br><br>',
    choices: ['I Agree'],
    required: true,
    on_finish: function(data){
        data.trial_item = 'info_sheet';}
};
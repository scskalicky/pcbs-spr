/*

reading comprehension test

*/

const reading_comprehension_questions = [
    {
        passage: "Samuel Morse, best known today as the inventor of Morse Code and one of the inventors of the telegraph, was originally a prominent painter. While he was always interested in technology and studied electrical engineering in college, Morse went to Paris to learn from famous artists of his day and later painted many pictures that now hang in museums, including a portrait of former President John Adams. In 1825, Morse was in Washington, D.C., painting a portrait of the Marquis de Lafayette when a messenger arrived on horseback to tell him that his wife was gravely ill back at his home in Connecticut. The message had taken several days to reach him because of the distance. Morse rushed to his home as fast as he could, but his wife had already passed away by the time he arrived. Grief-stricken, he gave up painting and devoted the rest of his life to finding ways to transmit messages over long distances faster.",
        q1: 'What did Morse study in college?',
        q1_choices: ['He did not go to college.', 'Arts.', 'Medicine.', 'Engineering.'],
        q1_cresp: 'Engineering.',
        q2: 'What was NOT said about Morse in the text?',
        q2_choices: ['His wife died while he was away in Paris.', 'He went to study in Paris.', 'He painted portraits.', 'He lived in Connecticut.'],
        q2_cresp: 'His wife died while he was away in Paris.',
        q3: 'After his wife died, Morse:',
        q3_choices: ['moved from France to the USA', 'changed career.', 'started studying.', 'remarried.'],
        q3_cresp: 'changed career.',
        passage_name: 'RC01'
    },

    {
      passage: "Howard Gardner was a psychologist best known for developing the theory of multiple intelligences. Basically, the theory states that the idea of general intelligence or overall intelligence is somewhat inaccurate. This is because people often show intelligence in different areas. He argued that there are actually different types of intelligence. One type of intelligence that Gardner identified was interpersonal intelligence. People who possess this type of intelligence relate and interact well with others. Intrapersonal intelligence, on the other hand, implies that people are in touch with their own feelings. They enjoy thinking about theories and developing their own thoughts and ideas. People who have linguistic intelligence learn best by taking notes and reading textbooks. These people usually excel in traditional academic environments, as many academic subjects stress these types of activities. The other types of intelligence are kinesthetic, musical, spatial, and logical.",

      q1: 'The main scientific contribution of Gardner is:',
      q1_choices: ['helping those who were previously considered intellectually disabled.',
      'developing teaching methods for people with different types of intelligence.',
      'forming an alternative for the theory of general intelligence.',
      'highlighting the role of interpersonal intelligence.'],
      q1_cresp: 'forming an alternative for the theory of general intelligence.',
      q2: 'We can conclude from the passage that:',
      q2_choices: ['Gardner believed that linguistic intelligence was the most desirable type to have.',
      'most people who have a high level of intrapersonal intelligence do well in school.',
      'people who have mathematical intelligence would do the best on a standard IQ test.',
      'people who have a high level of interpersonal intelligence work well in groups.'],
      q2_cresp: 'people who have a high level of interpersonal intelligence work well in groups.',
      q3: 'According to the passage:',
      q3_choices: ['a distinction can be made between linguistic and intrapersonal intelligence.',
      'emotional intelligence is more important in real life than general intelligence.',
      'people with naturalistic intelligence are more concerned about nature.',
      'Howard Gardner is best known for his distinction between kinesthetic and logical intelligence.'],
      q3_cresp: 'a distinction can be made between linguistic and intrapersonal intelligence.',
      passage_name: 'RC02'
  },
  {
    passage: "The Internet has made life a whole lot easier for many people, but being online also brings with it very real risks. Hackers can steal personal and financial information. There are several precautions that computer users can take to minimize the level of risk that is involved with being online. One of the most obvious safety precautions is to purchase a good anti-virus and anti-spyware program. Passwords are also a very important part of online security, and several tips can help users create more secure passwords. First, they should be something that can easily be remembered, but they should not be something others can guess easily. Your first or last name, phone number, or the name of your street are all bad choices, as people could learn this information quite easily. Longer passwords are more secure, and those that use a mixture of upper and lower case letters and a combination of letters and numbers are more secure than those that do not. Finally, passwords should be changed often. This can make remembering them more difficult, but the extra effort is worth the added security.",

    q1: 'The main purpose of this passage is to:',
    q1_choices: ['talk about the importance of anti-virus programs.',
    'discuss the societal changes associated with Internet use.',
    'outline important considerations for passwords.',
    'discuss why certain types of passwords shouldn\'t be used.'],
    q1_cresp: 'outline important considerations for passwords.',
    q2: 'NOT mentioned in this passage are:',
    q2_choices: ['reasons for safety precautions.',
    'tips for good passwords.',
    'reasons to buy a good anti-virus program.',
    'tips for safe online surfing.'],
    q2_cresp: 'are tips for safe online surfing.',
    q3: 'Which statement is made in the text?',
    q3_choices: ['The name of your street is easy to find for hackers.',
    'You should limit your time on the internet as it involves risks.',
    'Short passwords with a combination of letters and numbers are more secure than long passwords consisting of letters only.',
    'It is safer to limit internet visits to sites you are familiar with.'],
    q3_cresp: 'The name of your street is easy to find for hackers.',
    passage_name: 'RC03'
},
{
  passage: "When online file-sharing programs emerged, the music industry changed forever. Perhaps the first widely-used music file sharing program was Napster. It allowed users to sign up to use the service at no charge. Then, they could download music files from other users all over the world by simply typing in what song or album they wanted. Obviously, this was bad news for music artists and record labels because they were not making any profits from downloaded music. Eventually, Napster was shut down. While it later reinvented itself as a paying service, other free music-sharing sites cropped up almost immediately. Even though several sites and individual users have been charged, there are still countless individuals who log onto these sites to obtain free music.",

  q1: 'The main problem associated with peer file-sharing sites is:',
  q1_choices: ['they prevent artists and labels from earning money.',
  'there are too many of them currently in existence.',
  'it is hard to locate users and lay criminal charges against them.',
  'they allow users to sign up for the service free of charge.'],
  q1_cresp: 'they prevent artists and labels from earning money.',
  q2: 'After Napster was shut down, peer file-sharing:',
  q2_choices: ['became less common, since more users became wary of prosecution.',
  'became less available, since users did not know where to look for files.',
  'was not dramatically affected, due to the emergence of similar services.',
  'became more common, due to the publicity of such services.'],
  q2_cresp: 'was not dramatically affected, due to the emergence of similar services.',
  q3: 'According to the text, Napster:',
  q3_choices: ['originally required a small fee in order to download limitless music.',
  'was a program based on people sharing music with each other.',
  'decided to stop rather than charge fees from users.',
  'had to stop because it was being used by hackers to download viruses onto computers.'],
  q3_cresp: 'was a program based on people sharing music with each other.',
  passage_name: 'RC04'
},
{
  passage: "The pencil is a modern-day version of a centuries-old writing implement. Around 1560, an Italian couple designed the modern, wood-encased pencil. Their creation was flatter and more compact than the pencils we use today. Their plan involved hollowing out a stick of wood and inserting a stick of graphite into it. Shortly after, a better technique was discovered: two wooden halves were carved, a graphite stick was inserted, and then the halves were glued together, which is also how pencils are currently made. Although many people refer to the graphite inside pencils as \"lead\", they have always been made with graphite; however, the paint on the wood that surrounded the graphite was, at one time, lead-based.",

  q1: 'According to the passage:',
  q1_choices: ['lead has been used as the black stick in pencils for a short while.',
  'today\'s pencil design is similar to that of the 16th century.',
  'the first pencils were made by gluing two wooden halves together.',
  'graphite is not a major component of modern pencils.'],
  q1_cresp: 'today\'s pencil design is similar to that of the 16th century.',
  q2: 'The main purpose of the text is:',
  q2_choices: ['to provide a history of the pencil.',
  'to discuss the adverse effects of lead.',
  'to describe the modern technology of pencil-making.',
  'to outline the biography of the inventors of the pencil.'],
  q2_cresp: 'to provide a history of the pencil.',
  q3: 'According to the passage, the casing of a pencil:',
  q3_choices: ['is a modern addition.',
  'was once made of graphite.',
  'has always been made of wood.',
  'makes the pencil less prone to breaking.'],
  q3_cresp: 'has always been made of wood.',
  passage_name: 'RC05'
},
{
  passage: "The fortifications of Valletta are a series of defensive walls and other fortifications which surround Valletta, the capital city of Malta. The first fortification was built in 1552, but the fortifications of the city proper began to be built in 1566 when it was founded by Grand Master Jean de Valette. Most of the fortifications remain largely intact today. The city of Valletta, along with Nicosia in Cyprus, was considered to be a practical example of an ideal city of the Renaissance, and this was due to its fortifications as well as the urban life within the city. The fortifications were well known throughout Europe by the 17th century. The construction of a fortified city was first proposed in 1524, when the Order of St. John sent a commission to inspect the Maltese Islands. Back then, the only fortification was a militia watchtower. In 1551, an Ottoman force briefly attacked Malta and as a result the Order of St. John set up a commission to improve the island's fortifications. The watchtower was demolished and the new fortifications were built in its place.",

  q1: 'The main purpose of the text is to:',
  q1_choices: ['describe the influence of the Order of St. John in Malta.',
  'explain the origin of building structures found in Malta.',
  'describe the fame of the city of Valetta during the Renaissance.',
  'explain the importance of Malta in the wars between Ottoman and Catholic forces.'],
  q1_cresp: 'explain the origin of building structures found in Malta.',
  q2: 'Around what time did the fortifications start?',
  q2_choices: ['1650',
  '1600',
  '1550',
  '1700'],
  q2_cresp: '1550',
  q3: 'What gave the city of Valetta its name?',
  q3_choices: ['It was founded by the Templar Knight de Valette.',
  'It was located in a fortified valley.',
  'It was a city of great value in the wars between Ottoman and Catholic forces.',
  'It originally consisted of a Roman villa next to a military watchtower.'],
  q3_cresp: 'It was founded by the Templar Knight de Valette.',
  passage_name: 'RC06'
}
]



// without this, the function will fail. this is needed if not in the main jsPsych spot. 
// on_start: function(trial){
//     trial.stimulus = jsPsych.timelineVariable('word')
//     trial.data = jsPsych.timelineVariable('data')

const rc_trials = {
timeline: [
{
  type: jsPsychHtmlButtonResponse,
  stimulus: '',
  choices: ['Answer Questions'],
  on_start: function(trial)
  {
    trial.stimulus = '<p class = "instructions">'.concat(jsPsych.timelineVariable('passage')).concat("</p>")
    trial.name = jsPsych.timelineVariable('passage_name')
  }
},
{
  type: jsPsychSurveyMultiChoice,
  on_start: function(trial){
    // need to return the values as functions here, otherwise must be in main html file. 
    trial.questions[0].prompt = jsPsych.timelineVariable('q1')
    trial.questions[0].options = jsPsych.timelineVariable('q1_choices')
    trial.questions[1].prompt = jsPsych.timelineVariable('q2')
    trial.questions[1].options = jsPsych.timelineVariable('q2_choices')
    trial.questions[2].prompt = jsPsych.timelineVariable('q3')
    trial.questions[2].options = jsPsych.timelineVariable('q3_choices')
    console.log(trial)
  },
  questions:
  [
    {
    prompt: '',
    options: '',
    required: true
    },
    {
        prompt: '',
        options: '',
        required: true 
    },
    {
        prompt: '',
        options: '',
        required: true
    }
    
],
on_finish: function(data){
  // init the acc data to 0
  data.Q1acc = 0;
  data.Q2acc = 0;
  data.Q3acc = 0;
  // score each question, add to data
  if(data.response.Q0 === jsPsych.timelineVariable('q1_cresp')){
    data.Q1acc = 1
  };
  if(data.response.Q1 === jsPsych.timelineVariable('q2_cresp')){
    data.Q2acc = 1
  };
  if(data.response.Q2 === jsPsych.timelineVariable('q3_cresp')){
    data.Q3acc = 1
  };
  // tally the accuracy and add to data
  question_acc = data.Q1acc + data.Q2acc + data.Q3acc
  data.acc = question_acc
  data.passage = jsPsych.timelineVariable('passage_name')
  console.log(data)
},
}
], timeline_variables: reading_comprehension_questions
}
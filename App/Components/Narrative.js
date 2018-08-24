import { Images } from '../Themes'

const LEVEL = 0

const LEVELS = [
    {   
        'question': 'In case of an earthquake, where will you go?',
        'img': Images.Questions[0],
        'options': {
            'choices': [ 
                {
                    'name': 'Table', 'img': 'table.jpg'
                },
                {
                    'name': 'Sofa', 'img': 'chair.jpg'
                }
            ],
            'correct' : 0,
            'correctText': 'Hiding under a tough object like a table is recommended.',
            'incorrectText': 'You should find a place to cover your head.'
        },
    },
    {   
        'question': 'Question 2',
        'img': Images.Questions[1],
        'options': {
            'choices': [ 
                {
                    'name': 'Run', 'img': 'table.jpg'
                },
                {
                    'name': 'Stay', 'img': 'chair.jpg'
                }
            ],
            'correct' : 1,
            'correctText': 'Run Boy Run',
            'incorrectText': 'Why?'
        },
    }
]

const WIN_DISPLAY = {
    questionText: 'You Won!',
    questionImage: Images.Questions[0],
    choiceOneText: 'Game',
    choiceTwoText: 'Complete'
}
const NO_QUESTIONS = LEVELS.length

const WIN_TEXT = 'Congratulations, You Won!'

export {LEVELS, NO_QUESTIONS, WIN_TEXT, WIN_DISPLAY}
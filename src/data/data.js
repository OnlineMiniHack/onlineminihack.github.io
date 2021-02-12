import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// ABOUT DATA
export const aboutData = {
  img: 'MiniHackGraphic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jigsaw.jpg',
    title: 'Hack 1 - Jigsaw',
    info: 'You are provided with 6 Jigsaw pieces.  The brief for MiniHack 1 is to create something that uses at least one of these images',
    info2: '',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack1',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Hack 2 - Game with no Graphics',
    info: 'The task for Hack 2 is to create a game with no graphics.',
    info2: '',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack2',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Hack 3 - Advent',
    info: 'The aim of this hack was to create an advent to a given date.',
    info2: '',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iot.png',
    title: 'Hack 4 - Locked In',
    info: 'You\'re part of a crack team of spies, who are breaking a high value asset out of prison. Build something that, based on a real world (or simulated real world event) event, performs an action that will communicate with the outside world.',
    info2: '',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack4', // if no repo, the button will not show up
  },
];

// Join MiniHack DATA
export const joinData = {
  cta: 'Join MiniHack?',  
  meetup: 'https://www.meetup.com/mini-hack/'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/OnlineMiniHack',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pcmichaels/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/OnlineMiniHack',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

export const questionData = {
  questions: [
    {
      question: 'What is this?',
      answer: 'MiniHack is a monthly meetup where teams of between 3 and 6 people compete to produce the best solution to a given problem.'
    },
    {
      question: 'How is the winner determined?',
      answer: 'Each month, we invite a guest judge to ... well, judge the different solutions.'
    },
    {
      question: 'Do I need to be a programmer to join?',
      answer: 'No, we welcome anyone, even if you\'ve never written a line of code in your life.'
    },
    {
      question: 'What if I\'m not confident that I\'ll be able to contribute?',
      answer: 'We try to match differing skills levels; and if you don\'t wish to contribute, you can always just watch.'
    },
    {
      question: 'Will I win anything if my team wins?',
      answer: 'Maybe.  We try to get sponsors for each event; and, where we have one, we ask them to provide a prize for the winning team.'
    },
    {
      question: 'What is the league all about?',
      answer: 'Every time you\'re a member of a winning team - assuming you consent, we\'ll give you 3 points - the person with the most points when the league ends, wins!'
    },
    {
      question: 'I\'m a Busy Person - How Long Will This Take?',
      answer: 'It\'s a mini-hackathon, so we\'ll try and keep the whole thing to under two hours - that\'s: 10 minute intro 1 hour 30 minutes coding 10 minutes judging 10 minutes to announce the winners.'
    },
    {
      question: 'What Kind of Problems Will There Be?',
      answer: 'We\'ll try to keep it different each time. We\'ll also try to make it broad enough that you can use whatever tech you think fits the bill.  There are past examples on the main site.'
    }

  ]
}

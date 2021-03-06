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
    info2: 'Martin Beeby',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack1',
  },
  {
    id: nanoid(),
    img: '',
    title: 'Hack 2 - Game with no Graphics',
    info: 'The task for Hack 2 is to create a game with no graphics.',
    info2: 'Alan O\'Donohoe',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack2',
  },
  {
    id: nanoid(),
    img: '',
    title: 'Hack 3 - Advent',
    info: 'The aim of this hack was to create an advent to a given date.',
    info2: 'Kevlin Henney',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iot.png',
    title: 'Hack 4 - Locked In',
    info: 'You\'re part of a crack team of spies, who are breaking a high value asset out of prison. Build something that, based on a real world (or simulated real world event) event, performs an action that will communicate with the outside world.',
    info2: 'Pete Galagher',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack4', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hack5.jpg',
    title: 'Hack 5 - Locked In',
    info: 'The theme for MiniHack 5 is Valentines Day. Your friend has forgotten about valentines day - since we\'re in lockdown, they want you to help them out by creating a virtual valentines card or gift.',
    info2: 'Jon Skeet',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack5', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'easter.png',
    title: 'Hack 6 - Easter',
    info: 'The theme for MiniHack 6 is Easter.  The task this month is to create an "Easter Egg" hunt.  You should hide as many easter eggs as you can around; however, there should be subtle hints and clues as to where the next one can be found.',
    info2: 'Layla Porter',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack6', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'space.png',
    title: 'Hack 7 - Space',
    info: 'The theme for MiniHack 7 is Space.  The task this month is to create a space travel booking system.',
    info2: 'Dave Thomas',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack7', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trains.png',
    title: 'Hack 8 - Trains',
    info: 'The theme for MiniHack 8 is Trains.  The task is to create a system that manages train schedules.',
    info2: 'Steve Poole',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack8', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'doors.png',
    title: 'Hack 9 - Doors',
    info: 'The theme for MiniHack 9 is Doors.  You have been approached by a gang of criminals, who would like you to build a backdoor into the code that you\'re currently producing.',
    info2: 'Robin Wood',
    url: '',
    repo: 'https://github.com/OnlineMiniHack/minihack/tree/master/hack9', // if no repo, the button will not show up
  }  
];

export const leagueData = [
  {
    name: 'Andrew Brewster',
    score: 1,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'John Kilmister',
    score: 2,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'Laurence Dyer',
    score: 4,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'Selvin Brown',
    score: 0,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'Peter Gillett',
    score: 1,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'Petar Dimov',
    score: 2,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'Karim Fazal',
    score: 0,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'Ian Fleeton',
    score: 0,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'Pete Curati',
    score: 0,
    consent: true,
    emailHash: undefined
  },
  {
    name: 'Ben Egan',
    score: 1,
    consent: false,
    emailHash: undefined
  },
  {
    name: 'Davin Stirling',
    score: 1,
    consent: true,
    emailHash: undefined
  }

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
    },
  ],
};

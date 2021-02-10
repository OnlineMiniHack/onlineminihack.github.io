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
    img: 'project.jpg',
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
    img: 'project.jpg',
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

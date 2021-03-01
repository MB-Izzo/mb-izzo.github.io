import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mathieuu.png',
  paragraphOne:
    "Hey I'm Mathieu, a 23 years old Game Designer. I graduated with a Game Design Bachelor in 2019, and created a company with friends, where we developed a game for one year.",
  paragraphTwo:
    'I am a game designer with a passion for the technical aspects of development, hence why I also like to code sometimes.',
  paragraphThree: 'I am now searching for new challenges!',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'talesup.png',
    title: 'Tales Up - Developer & Designer',
    info: 'Tales Up is a narrative local multiplayer game on mobile.',
    info2:
      'This project started after I graduated from school. We created a company with friends to develop this project and released the game after one year of work.',
    url: 'https://talesup.io',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nightcall.jpg',
    title: 'Night Call - Intern developer',
    info: 'Night Call is a noire narrative game taking place in Paris.',
    info2:
      'I worked on this game as an intern programmer between my 2nd and 3rd year of Bachelor Game Design Degree. I helped developing features of the game and participated in design discussions, in a small indie team.',
    url: 'https://nightcall-game.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mathieubouchonnet@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Eagleee_',
    },
    /*     {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mathieu-bouchonnet-497777143/',
    },
    /*     {
      id: nanoid(),
      name: 'github',
      url: '',
    }, */
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

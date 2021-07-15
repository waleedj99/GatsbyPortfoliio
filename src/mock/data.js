import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Waleed Jameel', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Waleed Jameel',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: ' ',
  paragraphOne: 'I am a Final Year Student currently pursuing Computer Science Engineering',
  paragraphTwo:
    'I have experience working as a Web Developer as well as done projects in other domains like browser extensions , VS Code extensions , Social Media bots etc',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1MB_RPIckDySK5BddMm0vzQCAYuRimOiH/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'BookLibDemo.png',
    title: 'Online Book library',
    info: 'A website which can be used for storage and retrieval of pdf files.',
    info2:
      'The website allows users to upload files and save/bookmark the files . Made using MongoDB , NodeJS , expressjs.',
    url: 'https://booklib.eu-gb.mybluemix.net/login',
    repo: 'https://github.com/waleedj99/BookLib', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'FlashCardDemo.png',
    title: 'Flash Card App',
    info: 'A flash card web app made using react and without any css libraries ',
    info2: '',
    url: 'flash-card-quiz.netlify.app/',
    repo: 'https://github.com/waleedj99/FlashCardApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'YTMSC.png',
    title: 'Youtube Video Controller',
    info: 'A Firefox extension that can be used to control YouTube videos that are playing on an another tab.',
    info2: 'The extension can pause , play , go to next and go to previous videos .',
    url: 'https://addons.mozilla.org/en-US/firefox/addon/ytm/',
    repo: 'https://github.com/waleedj99/Youtube-video-controller', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'FootballTrackerDemo3.jpg',
    title: 'Football Tracker',
    info: 'A React Native app that keeps tracks of top 5 football leagues',
    info2: ' ',
    url: 'https://snack.expo.io/@waleedj99/footballtracker',
    repo: 'https://github.com/waleedj99/Football_Tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ReactDic.png',
    title: 'React Dictionary App',
    info: 'A Simple dictionary app made using React JS and the merriam webster API .',
    info2: ' ',
    url: 'csb-39cwf.netlify.app/',
    repo: 'https://github.com/waleedj99/React_Dictionary_App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AlgoVis.png',
    title: 'Algorithm Visualizer',
    info: ' A simple visualizer that shows the working of sorting algorithms like bubble sort and insertion sort',
    info2: ' ',
    url: 'algorithm-visual.glitch.me/',
    repo: 'https://github.com/waleedj99/algorithm-visual', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CSSSortPage.png',
    title: 'CSS dictionary',
    info: ' A VS Code extention that sorts the selected classes of css file.',
    info2: ' ',
    url: 'https://marketplace.visualstudio.com/items?itemName=waleedj1699.css-dictionary',
    repo: 'https://github.com/waleedj99/css-dictionary', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'waleedj1699@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/waleedj1699',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/waleed-jameel-8308ba183/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/waleedj99',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

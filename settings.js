import previewMacenger from './assets/images/macenger.jpg';
import previewMusish from './assets/images/musish.jpg';
import previewNeene from './assets/images/neene1.jpg';

export default {
  name: 'sasank',
  fullName: 'sasank reddy desshur',
  siteDomain: 'ch3r0XD.github.io',
  biography:
    "I'm a student whose works are based on Telegram working at <strong>Cyberbyte</strong>. don't think too much it is created by me. I focus on designing and developing quality services with <strong>React</strong>, <strong>Vue</strong>, <strong>JavaScript</strong>, <strong>Flask</strong>, <strong>HTML</strong>,\n and <strong>CSS / SASS</strong>.",
  experience: [
    {
      position: 'Founder/CTO/Owner/Dev',
      company: 'Cyberbyte',
      location: 'India',
      time: 'Sept 2020 - Now',
      achievements: ['Coming soon.'],
    },
    {
      position: 'Bug Bounty',
      company: 'Google',
      location: 'San Jose, California',
      time: 'April 2020 - Jul 2020',
      achievements: [
        `Worked in an agile team hunting for bugs in interface for the company's Multicloud Manager platform.`,
        'Developed cloud-hosted ai on google actions [not yet published] cost calculator tool, added AWS integration, and wrote dozens of React components throughout the platform.',
        'Designed and implemented a scalable Node.js microservice using Koa and SQL for providing statistical data for platform reports to the user interface via a REST API. Wrote Dockerfile and maintained scripts to deploy to OpenShift.',
        'Invited for google Developers Day on Oct8th'
      ],
    },
    {
      position: 'Alex Skill Developer',
      company: 'Amazon',
      location: 'Remote',
      time: 'June 2016 - Mar 2020',
      achievements: [
        'Designed, implemented, and maintained a Weather client using openweather and implemented it using AWS-lamda.',
        'Developed and maintained .',
        'More coming-soon',
      ],
    },
    {
      position: 'Student',
      company: 'School',
      location: 'Sullurupeta, India',
      time: 'June 2016 - Mar 2020',
      achievements: ['completed my high-school with 2-top highest average marks in schools'],
    },
  ],
  projects: [
    {
      name: `Secktor Userbot`,
      url: 'https://secktor.cf/',
      preview: previewMacenger,
      previewTitle: 'secktor',
      previewType: 'laptop',
      description:
        'An open source Userbot made-with with telethon with MTproto servers as session client. The project is spawning the development of multiple new frameworks, soon to be released on Github. Discontinued.',
      skills: ['Telethon', 'Vue.js', 'Reverse Engineering'],
    },
    {
      name: 'Telux',
      url: null ,
      preview: previewMusish,
      previewTitle: 'Telux',
      previewType: 'window',
      description:
        'Led development of the open source telegram-Unix client for your Terminal. Built with React, Node JS, BotGram API and a serverless backend powered by AWS. Left the team in September 2020',
      skills: ['React', 'JavaScript', 'CSS', 'Serverless', 'AWS Lambda', 'Node.js'],
    },
    {
      name: 'ch3r0',
      url: null,
      preview: previewNeene,
      previewTitle: 'ch3r0 | Discontinued',
      previewType: 'window',
      description:
        "A  network for Ethical-Hackers focused on showing off their skills rather than their profiles. Responsible for implementing the HTML5, CSS3, and JS UI from as well as the service's backend in PHP and Node.js.",
      skills: ['PHP', 'HTML', 'jQuery', 'Node.js', 'MySQL'],
    },
  ],
};

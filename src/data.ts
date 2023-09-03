import image from './images/test.png'
import testGenerator from './images/test-generator.png'
import chatConnect from './images/chat-connect.png'
import quizGenerator from './images/quiz-generator.png'
import damathOnline from './images/damath-online.png'

export type projectData = {
    id: string;
    name: string;
    features: string[];
    href: string;
    image: ImageMetadata;
    github: string[];
    description: string;
    stack: string[]
    site?: string;
}

export const data : projectData[] = [
    {
        id: 'test-generator',
        name: 'Test Generator',
        features: [
            'create different types of test using templates',
            'converts test created into a docx file',
            'undo action functionality',
            'hotkey embedded',
            'localstorage, saves your work automatically',         
        ],
        href: '/test-generator',
        image: testGenerator,        
        github: ['https://github.com/nephriteagain/test-generator'],
        site: 'https://testtodocx.nephriteagain.online/',
        description: 'a test generator site that helps user speed up creating test using predefined templates and converts it to a docx file',
        stack: [
            'nextjs',
            'typescript',
            'tailwindcss',
            'docx',
        ]
    },
    {
        id: 'chat-connect',
        name: 'ChatConnect',
        features: [
            'create public/pirvate lobbies',
            'join public/private lobbies',
            'sign-in/sign-out feature',
            'mod and unmod users',
            'transfer ownership of admin to a mod',
            'ban/kick of user from group chat',
            'admin/mods can delete messages',
            'user can add censored words',
            'user can delete own messages',
        ],
        href: '/chat-connect',
        image: chatConnect,        
        github: ['https://github.com/nephriteagain/ChatConnect'],
        description: 'a group chatting app',
        stack: [
            'react',
            'typescript',
            'tailwindcss',
            'firebase'
        ]
    },
    {
        id: 'quiz-generator',
        name: 'Quiz Generator',
        features: [
            'signin/signout',
            'create quizzes',
            'answer quizzes',
            'password reset via email',
            'pagination',
            'search filters',
        ],
        href: '/quiz-generator',
        image: quizGenerator,        
        github: 
        [
            'https://github.com/nephriteagain/quiz-client',
            'https://github.com/nephriteagain/quiz-server'
        ],
        description: 'Create and solve different types of quiz trivias created by users',
        stack: [
            'react',
            'react-router-dom',
            'axios',
            'tailwindcss',
            'mongodb',
            'expressjs',
            'nodemailer'
        ]
    },{
        id: 'damath-online',
        name: 'Damath Online',
        features: [
            'create and join lobby',            
            'choose different game modes',
            'request game restart while in-game',
            'request game change mode while in-game',
        ],
        href: '/damath-online',
        image: damathOnline,        
        github: ['https://github.com/nephriteagain/damath-online'],
        description: 'The classic filipino educational board game now online!',
        site: 'https://damath-online.nephriteagain.online/',
        stack: [
            'nextjs',
            'typescript',
            'firebase',
            'redux-toolkit',
            'shadcn/ui',
            'tailwindcss',
        ]
    }
]

export const technologies = [
    'HTML/CSS', 'Javascript', 'Typescript', 'React',
    'NodeJS',  'ExpressJS' ,'Git', 'Firebase', 'Tailwind', 'Bootstrap',
    'Sass', 'Astro', 'NextJS', 'Framer-Motion', 'MongoDB',
    'Redux/Redux-toolkit/RTK query', 'Shadcn-ui'
]
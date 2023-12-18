import testGenerator from './images/test-generator.png'
import chatConnect from './images/chat-connect-v2.png'
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
        id: 'chat-connect',
        name: 'ChatConnect',
        features: [
            'create public/private lobbies',
            'join public/private lobbies',
            'sign-in/sign-out feature',
            'image upload',
            'direct message',
            'read only roooms'
            // 'mod and unmod users',
            // 'transfer ownership of admin to a mod',
            // 'ban/kick of user from group chat',
            // 'admin/mods can delete messages',
            // 'user can add censored words',
            // 'user can delete own messages',
        ],
        href: '/chat-connect',
        image: chatConnect,        
        github: ['https://github.com/nephriteagain/chat-connect-v2'],
        site: 'https://chat-connect-v2.vercel.app/',
        description: 'a group chatting app',
        stack: [
            'nextjs',
            'typescript',
            'tailwindcss',
            'firebase',
            'framer-motion'
        ]
    },    
    
    {
        id: 'damath-online',
        name: 'Damath Online',
        features: [
            'create and join lobby',            
            'choose different game modes',
            'request game restart while in-game',
            'request game change mode while in-game',
            'spectate live matches'
        ],
        href: '/damath-online',
        image: damathOnline,        
        github: ['https://github.com/nephriteagain/convex-damath'],
        description: 'The classic filipino educational board game now online!',
        site: 'https://online-damath.vercel.app/',
        stack: [
            'nextjs',
            'typescript',
            'convex',
            'redux-toolkit',
            'shadcn/ui',
            'tailwindcss',
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
            'rate limiting'
        ],
        href: '/quiz-generator',
        image: quizGenerator,        
        github: 
        [
            'https://github.com/nephriteagain/quiz-client',
            'https://github.com/nephriteagain/quiz-server'
        ],
        site: 'https://quizzle-createandsolvequizzes.onrender.com/',
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
    },
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
]

export const technologies = [
    'HTML/CSS', 'Javascript', 'Typescript', 'React',
    'NodeJS',  'ExpressJS' ,'Git', 'Firebase', 'Tailwind', 'Bootstrap',
    'Sass', 'Astro', 'NextJS', 'Framer-Motion', 'MongoDB',
    'Redux/Redux-toolkit/RTK query', 'Shadcn-ui', 'Rest API', 'SQL'
]
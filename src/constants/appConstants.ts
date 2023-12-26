export const APP_CONSTANTS = {
  ACCOUNT_VERIFIED: 'Your account has been verified.',
  HI: 'Hi, ',
  ABOUT_COMPANY: 'Tell us about your company',
  ABOUT_YOU: 'Tell us about you',
  PERSONAL_DETAILS: 'Personal Details',
  CONFIRM: 'Confirm',
  NEXT: 'Next',
  GSUITE: 'Gsuite',
  MICROSOFT: 'Microsoft',
  CREATE_MARKETER_ACCOUNT: 'Create your marketer account',
  CREATE_ACCOUNT_BY_SIGNINGUP: 'You can also create an account by signing up with',
  SIGN_UP: 'Sign up',
  CONFIRMATION_EMAIL_SENT: 'We’ve sent a confirmation link to the email id,',
  CHECK_INBOX: 'Kindly check your inbox and click the link.',
  OPEN_INBOX: 'Open inbox',
  CONFIRM_EMAIL: 'Confirm your email',
  VALIDATION_MESSAGE: {
    EMAIL: 'Invalid email address / we prefer to have your work email',
    EMAIL_REGEX_INVALID:
      'should be 8 characters length,1 lower case, 1 upper case, 1 numeric character, 1 special character',
    REQUIRED: 'Required',
    PASSWORD_MISSMATCH: "Passwords don't match",
  },
  EMAIL_REGEX:
    /^.*(?=.{8,})((?=.*[ !"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
}

export const DEFAULT_CONTENTs = {
  id: 0,
  title: '',
  tags: [],
  jist: '',
  content: '',
  isLiked: false,
  likes: 0,
  isDisliked: false,
  dislikes: 0,
  isBookmarked: false,
  views: 0,
  thumbnail: '',
  verifiedBy: 3,
  createdBy: 1,
  createdAt: '',
  comments: [
    {
      id: 1,
      commentedBy: 'Balaji',
      commentedAt: '12/12/2023',
      content: 'Hi Hello',
    },
  ],
  history: [
    {
      id: 1,
      version: 1,
      updatedBy: 'Balaji',
      updatedAt: '12/12/2023',
      content: {
        title: '',
        tags: [],
        jist: '',
        content: '',
        thumbnail: '',
      },
    },
  ],
}

export const DEFAULT_CONTENT = {
  id: '6589e59fcc5ff27fa297f716',
  title: 'React: Efficient UI Development Framework.',
  tags: ['React', 'Frontend'],
  jist: 'React: Component-based, efficient, virtual DOM, popular for web development.',
  content:
    "<p><br></p><p><strong>React is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. Launched in 2013, React has gained widespread adoption in web development due to its declarative and efficient approach to building interactive UIs.</strong></p><p><u>One of React's core features is its component-based architecture, allowing developers to create modular and reusable UI elements. </u>Components are self-contained units that manage their state and can be combined to build complex user interfaces. This promotes a clean and organized code structure, making it easier to maintain and scale applications.</p><p><em>React utilizes a virtual DOM (Document Object Model) to optimize rendering performance. </em>Instead of updating the entire DOM when changes occur, React updates only the necessary components, minimizing the impact on the user experience. This makes React particularly well-suited for building dynamic and responsive applications.</p><p>React also embraces a one-way data flow, making it predictable and easy to understand how data changes propagate through a component hierarchy. Additionally, React has a vibrant ecosystem with tools like Redux for state management, React Router for navigation, and Next.js for server-side rendering, enabling developers to build powerful and feature-rich applications. Overall, React continues to be a go-to choice for front-end developers seeking a robust and efficient framework for building modern web applications.</p>",
  author: 'Ashok M',
  thumbnail: 'https://ex9tags-js.s3.amazonaws.com/react.png',
  verifiedBy: 2,
  views: 56,
  likes: 11,
  dislikes: 2,
  comments: [
    {
      id: 1,
      content: 'Great initiative! Keep up the good work.',
      commenterName: 'Balaji P',
      likes: 2,
      dislikes: 0,
      createdAt: '2023-12-25T20:27:17.427+00:00',
      updatedAt: '',
    },
    {
      id: 2,
      content: 'Good one. Could give detailed info about react hook?',
      commenterName: 'Niranjan V',
      likes: 1,
      dislikes: 0,
      createdAt: '2023-12-25T20:32:01.747+00:00',
      updatedAt: '',
    },
    {
      id: 3,
      content: 'Great initiative! Keep up the good work.',
      commenterName: 'Aabid Bin',
      likes: 1,
      dislikes: 0,
      createdAt: '2023-12-25T20:46:53.383+00:00',
      updatedAt: '2023-12-25T20:46:53.383+00:00',
    },
  ],
  history: [
    {
      id: 1,
      createdOn: '2023-12-25T20:30:38.358+00:00',
      author: 'Ashok M',
      updatedAt: '2023-12-25T20:30:38.358+00:00',
      updatedBy: 'Balaji P',
      version: 1,
      content: {
        title: 'React latest updates 2023',
        tags: ['React', 'React-Query', 'Frontend'],
        jist: 'It is latest react fetaure 2023',
        content:
          "<ol><li><strong style='color: var(--tw-prose-bold);'>React 18</strong><strong>:</strong> React 18 is an ongoing major version that brings concurrent rendering, automatic batching, and other performance improvements. It introduces new features like the 'startTransition' function, allowing developers to mark certain updates as low priority.</li><li><strong style='color: var(--tw-prose-bold);'>React Server Components</strong>: A new experimental feature that allows developers to build components that can render on the server and be hydrated on the client. This has the potential to improve server-side rendering and enhance performance.</li><li><strong style='color: var(--tw-prose-bold);'>React Hooks</strong><strong>:</strong> While not a new feature in 2022, React Hooks continue to be a significant part of React development, offering a more concise and readable way to manage state and side effects in functional components.</li><li><strong style='color: var(--tw-prose-bold);'>React DevTools Updates</strong><strong>:</strong> The React DevTools extension received updates to better support concurrent mode and provide more insights into the React application's performance and state.</li></ol><p><br></p>",
        thumbnail: 'https://ex9tags-js.s3.amazonaws.com/react.png',
      },
    },
  ],
  createdBy: '6589cd62d27d03073d48cc34',
  updatedBy: null,
  createdAt: '2023-12-25T20:27:11.889+00:00',
  updatedAt: '2023-12-25T20:46:53.386+00:00',
  active: true,
  deleted: false,
}

export const IS_MOCK = true

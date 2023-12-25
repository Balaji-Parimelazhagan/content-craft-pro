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

export const DEFAULT_CONTENT = {
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
    {
      id: 2,
      version: 2,
      updatedBy: 'Ashok',
      updatedAt: '13/12/2023',
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

export const IS_MOCK = true

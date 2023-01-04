export interface topicType {
  [key:number]:{
  youtubeID: string;
  title: string;
  noq: number;}
}

export interface quizType {
  [key: string]: {
    questions: {
      title: string;
      options: {
        title: string;
      }[];
    }[];
  };
}

export interface answersType {
  [key:string]: {
    questions: {
      title: string;
      options: ({
            title: string;
            correct?: boolean;
          }
      )[];
    }[];
  };
}

const topic:topicType = {
    1: {
      youtubeID: "lb7wT1gVU7Y",
      title: "#01 JavaScript Bangla Tutorial | Introduction to JavaScript",
      noq: 4,
    },
    2: {
      youtubeID: "5Xy-t8k_M4A",
      title: "#1 What is React and How it works - React Tutorial Bangla Series",
      noq: 4,
    },
    3: {
      youtubeID: "WC-g0JtEIwM",
      title:
        "#1 - Node.js নিয়ে একটি ছোট্ট গল্প - Node.js Tutorial Bangla | Express.js Tutorial Bangla",
      noq: 4,
    },
    4: {
      youtubeID: "CHnTTzD1pAQ",
      title:
        "Lesson 1 - Introduction & Installation - TypeScript Bangla ( বাংলা ) Tutorial Series",
      noq: 4,
    },
    5: {
      youtubeID: "PHy8h0BixKA",
      title: "#02 JavaScript Bangla Tutorial | JavaScript Output",
      noq: 4,
    },
    6: {
      youtubeID: "2C5834qx0sA",
      title:
        "#2 React Virtual DOM Explained - Easy Explanation - React Tutorial Bangla Series",
      noq: 4,
    },
    7: {
      youtubeID: "qImH1bFubW4",
      title:
        "#2 - Node.js কি & কিভাবে কাজ করে? - Node.js Tutorial Bangla | Bangla Node js Tutorial",
      noq: 0,
    },
    8: {
      youtubeID: "47PASjEF5fo",
      title:
        "Lesson 2 - Editor Setup & Compilation - TypeScript Bangla ( বাংলা ) Tutorial Series",
      noq: 0,
    },
    9: {
      youtubeID: "vXHefJiJM24",
      title: "#03 JavaScript Bangla Tutorial | JavaScript Statement",
      noq: 0,
    },
    10: {
      youtubeID: "ii8GaRjRoNI",
      title:
        "#3 React ESLint, Formatting with Prettier, Editor & Project Setup - React Tutorial Bangla Series",
      noq: 0,
    },
    11: {
      youtubeID: "J5sCarsKX1s",
      title:
        "#3 - Node.js Installation - VS Code Editor Setup - Node.js Tutorial Bangla",
      noq: 0,
    },
    12: {
      youtubeID: "zPxvFjNQN20",
      title:
        "Lesson 3 - Type Basics - TypeScript Bangla ( বাংলা ) Tutorial Series",
      noq: 0,
    },
    13: {
      youtubeID: "xWujZw0yIqg",
      title: "#04 JavaScript Bangla Tutorial | JavaScript Syntax",
      noq: 0,
    },
    14: {
      youtubeID: "-oGMwOOHFyk",
      title:
        "#4 React Prerequisites - React শিখতে কি কি জানা প্রয়োজন - React Tutorial Bangla Series",
      noq: 0,
    },
    15: {
      youtubeID: "IFBeIUX3J8M",
      title:
        "#4 Node.js Global Object & Module System - Node.js Tutorial Bangla | Bangla Node js Tutorial",
      noq: 0,
    },
    16: {
      youtubeID: "fIQQNQ7DaV8",
      title:
        "Lesson 4 - Explicit & Union Types - TypeScript Bangla ( বাংলা ) Tutorial Series",
      noq: 0,
    },
    17: {
      youtubeID: "bH-xZqvPk8A",
      title: "#05 JavaScript Bangla Tutorial | JavaScript Comments",
      noq: 0,
    },
    18: {
      youtubeID: "Uj-Bt0pWEP4",
      title:
        "#5 React JSX Element & Rendering Elements - React Tutorial Bangla Series",
      noq: 0,
    },
    19: {
      youtubeID: "6Yv3YXgPBJU",
      title:
        "#5 - Node.js Server & Core Modules - Node.js Tutorial Bangla | Bangla Node js Tutorial",
      noq: 0,
    },
    20: {
      youtubeID: "Styuf2Bv92I",
      title:
        "Lesson 5 - Dynamic Type - TypeScript Bangla ( বাংলা ) Tutorial Series",
      noq: 0,
    },
    21: {
      youtubeID: "5WXXBGjmsiA",
      title: "#06 JavaScript Bangla Tutorial | JavaScript Variables",
      noq: 0,
    },
    22: {
      youtubeID: "xVx5VqfX75Q",
      title:
        "#6 React Components and Props Core Concept - React Tutorial Bangla Series",
      noq: 0,
    },
    23: {
      youtubeID: "BPdRVquo5pg",
      title:
        "#6 - Node.js Stream & Buffer - Node.js Tutorial Bangla | Bangla Node js Tutorial",
      noq: 0,
    },
    24: {
      youtubeID: "mlrcRxhbN_4",
      title:
        "Lesson 6 - How to use Functions - TypeScript Bangla ( বাংলা ) Tutorial Series",
      noq: 0,
    },
    25: {
      youtubeID: "HS6nkKeuP_M",
      title: "#07 JavaScript Bangla Tutorial | JavaScript let Keyword",
      noq: 0,
    },
    26: {
      youtubeID: "CzyspyBe7rk",
      title:
        "#7 React State & Lifecycle in Class Component - React Tutorial Bangla Series",
      noq: 0,
    },
    27: {
      youtubeID: "dBd1j6x2HOo",
      title:
        "#7 - একটি Node.js এপ্লিকেশনের ব্যবচ্ছেদ - Understanding NodeJS | Node.js Tutorial Bangla",
      noq: 0,
    },
    28: {
      youtubeID: "BrhciRc2F4g",
      title:
        "Lesson 7 - Type Aliases - TypeScript Bangla ( বাংলা ) Tutorial Series",
      noq: 0,
    },
    29: {
      youtubeID: "DZHb10fzbOQ",
      title: "#08 JavaScript Bangla Tutorial | JavaScript const Keyword",
      noq: 0,
    },
    30: {
      youtubeID: "QLxjMwVu0xY",
      title:
        "#8 React Event Handling & Control Re Rendering - React Tutorial Bangla Series",
      noq: 0,
    },
    31: {
      youtubeID: "Xg4effPSJXk",
      title:
        "#8 - Raw Node Project (Part 1) - Node.js Tutorial Bangla | Bangla Node js Tutorial",
      noq: 0,
    },
    32: {
      youtubeID: "mZ-bn4IvlPE",
      title:
        "Lesson 8 - Function Signatures - TypeScript Bangla ( বাংলা ) Tutorial Series",
      noq: 0,
    },
};

const quiz:quizType = {
    lb7wT1gVU7Y: {
      questions: [
        {
          title: "How to declare JavaScript variables?",
          options: [
            {
              title: "with var",
            },
            {
              title: "with let",
            },
            {
              title: "with const",
            },
            {
              title: "with variable",
            },
            {
              title: "with declare",
            },
            {
              title: "with new",
            },
            {
              title: "with number",
            },
            {
              title: "with string",
            },
            {
              title: "with boolean",
            },
            {
              title: "with nothing",
            },
          ],
        },
        {
          title: "When was JavaScript invented?",
          options: [
            {
              title: "September 1998",
            },
            {
              title: "October 1999",
            },
            {
              title: "September 1995",
            },
            {
              title: "September 1993",
            },
            {
              title: "August 1990",
            },
            {
              title: "January 1995",
            },
            {
              title: "with number",
            },
            {
              title: "December 1995",
            },
            {
              title: "March 1996",
            },
            {
              title: "January 1970",
            },
          ],
        },
        {
          title: "Who or which company created JavaScript?",
          options: [
            {
              title: "Jordan Walke",
            },
            {
              title: "Netscape",
            },
            {
              title: "Jack Ma",
            },
            {
              title: "Nayok Razzaq",
            },
            {
              title: "Takla Rubel",
            },
            {
              title: "Tarzan",
            },
            {
              title: "Brendan Eich",
            },
            {
              title: "Mark Zuckerburg",
            },
            {
              title: "Bill Gates",
            },
            {
              title: "Steve Jobs",
            },
          ],
        },
        {
          title: "What is the latest version of ECMAScript",
          options: [
            {
              title: "ES2020",
            },
            {
              title: "ES2021",
            },
            {
              title: "ES6",
            },
            {
              title: "ES7",
            },
            {
              title: "ES8",
            },
            {
              title: "ES2022",
            },
            {
              title: "ES21",
            },
            {
              title: "ES3",
            },
            {
              title: "ES9",
            },
            {
              title: "ES2020",
            },
          ],
        },
      ],
    },
    "5Xy-t8k_M4A": {
      questions: [
        {
          title: "How to declare JavaScript variables?",
          options: [
            {
              title: "with var",
            },
            {
              title: "with let",
            },
            {
              title: "with const",
            },
            {
              title: "with variable",
            },
            {
              title: "with declare",
            },
            {
              title: "with new",
            },
            {
              title: "with number",
            },
            {
              title: "with string",
            },
            {
              title: "with boolean",
            },
            {
              title: "with nothing",
            },
          ],
        },
        {
          title: "When was JavaScript invented?",
          options: [
            {
              title: "September 1998",
            },
            {
              title: "October 1999",
            },
            {
              title: "September 1995",
            },
            {
              title: "September 1993",
            },
            {
              title: "August 1990",
            },
            {
              title: "January 1995",
            },
            {
              title: "with number",
            },
            {
              title: "December 1995",
            },
            {
              title: "March 1996",
            },
            {
              title: "January 1970",
            },
          ],
        },
        {
          title: "Who or which company created JavaScript?",
          options: [
            {
              title: "Jordan Walke",
            },
            {
              title: "Netscape",
            },
            {
              title: "Jack Ma",
            },
            {
              title: "Nayok Razzaq",
            },
            {
              title: "Takla Rubel",
            },
            {
              title: "Tarzan",
            },
            {
              title: "Brendan Eich",
            },
            {
              title: "Mark Zuckerburg",
            },
            {
              title: "Bill Gates",
            },
            {
              title: "Steve Jobs",
            },
          ],
        },
        {
          title: "What is the latest version of ECMAScript",
          options: [
            {
              title: "ES2020",
            },
            {
              title: "ES2021",
            },
            {
              title: "ES6",
            },
            {
              title: "ES7",
            },
            {
              title: "ES8",
            },
            {
              title: "ES2022",
            },
            {
              title: "ES21",
            },
            {
              title: "ES3",
            },
            {
              title: "ES9",
            },
            {
              title: "ES2020",
            },
          ],
        },
      ],
    },
    "WC-g0JtEIwM": {
      questions: [
        {
          title: "How to declare JavaScript variables?",
          options: [
            {
              title: "with var",
            },
            {
              title: "with let",
            },
            {
              title: "with const",
            },
            {
              title: "with variable",
            },
            {
              title: "with declare",
            },
            {
              title: "with new",
            },
            {
              title: "with number",
            },
            {
              title: "with string",
            },
            {
              title: "with boolean",
            },
            {
              title: "with nothing",
            },
          ],
        },
        {
          title: "When was JavaScript invented?",
          options: [
            {
              title: "September 1998",
            },
            {
              title: "October 1999",
            },
            {
              title: "September 1995",
            },
            {
              title: "September 1993",
            },
            {
              title: "August 1990",
            },
            {
              title: "January 1995",
            },
            {
              title: "with number",
            },
            {
              title: "December 1995",
            },
            {
              title: "March 1996",
            },
            {
              title: "January 1970",
            },
          ],
        },
        {
          title: "Who or which company created JavaScript?",
          options: [
            {
              title: "Jordan Walke",
            },
            {
              title: "Netscape",
            },
            {
              title: "Jack Ma",
            },
            {
              title: "Nayok Razzaq",
            },
            {
              title: "Takla Rubel",
            },
            {
              title: "Tarzan",
            },
            {
              title: "Brendan Eich",
            },
            {
              title: "Mark Zuckerburg",
            },
            {
              title: "Bill Gates",
            },
            {
              title: "Steve Jobs",
            },
          ],
        },
        {
          title: "What is the latest version of ECMAScript",
          options: [
            {
              title: "ES2020",
            },
            {
              title: "ES2021",
            },
            {
              title: "ES6",
            },
            {
              title: "ES7",
            },
            {
              title: "ES8",
            },
            {
              title: "ES2022",
            },
            {
              title: "ES21",
            },
            {
              title: "ES3",
            },
            {
              title: "ES9",
            },
            {
              title: "ES2020",
            },
          ],
        },
      ],
    },
    CHnTTzD1pAQ: {
      questions: [
        {
          title: "How to declare JavaScript variables?",
          options: [
            {
              title: "with var",
            },
            {
              title: "with let",
            },
            {
              title: "with const",
            },
            {
              title: "with variable",
            },
            {
              title: "with declare",
            },
            {
              title: "with new",
            },
            {
              title: "with number",
            },
            {
              title: "with string",
            },
            {
              title: "with boolean",
            },
            {
              title: "with nothing",
            },
          ],
        },
        {
          title: "When was JavaScript invented?",
          options: [
            {
              title: "September 1998",
            },
            {
              title: "October 1999",
            },
            {
              title: "September 1995",
            },
            {
              title: "September 1993",
            },
            {
              title: "August 1990",
            },
            {
              title: "January 1995",
            },
            {
              title: "with number",
            },
            {
              title: "December 1995",
            },
            {
              title: "March 1996",
            },
            {
              title: "January 1970",
            },
          ],
        },
        {
          title: "Who or which company created JavaScript?",
          options: [
            {
              title: "Jordan Walke",
            },
            {
              title: "Netscape",
            },
            {
              title: "Jack Ma",
            },
            {
              title: "Nayok Razzaq",
            },
            {
              title: "Takla Rubel",
            },
            {
              title: "Tarzan",
            },
            {
              title: "Brendan Eich",
            },
            {
              title: "Mark Zuckerburg",
            },
            {
              title: "Bill Gates",
            },
            {
              title: "Steve Jobs",
            },
          ],
        },
        {
          title: "What is the latest version of ECMAScript",
          options: [
            {
              title: "ES2020",
            },
            {
              title: "ES2021",
            },
            {
              title: "ES6",
            },
            {
              title: "ES7",
            },
            {
              title: "ES8",
            },
            {
              title: "ES2022",
            },
            {
              title: "ES21",
            },
            {
              title: "ES3",
            },
            {
              title: "ES9",
            },
            {
              title: "ES2020",
            },
          ],
        },
      ],
    },
    PHy8h0BixKA: {
      questions: [
        {
          title: "How to declare JavaScript variables?",
          options: [
            {
              title: "with var",
            },
            {
              title: "with let",
            },
            {
              title: "with const",
            },
            {
              title: "with variable",
            },
            {
              title: "with declare",
            },
            {
              title: "with new",
            },
            {
              title: "with number",
            },
            {
              title: "with string",
            },
            {
              title: "with boolean",
            },
            {
              title: "with nothing",
            },
          ],
        },
        {
          title: "When was JavaScript invented?",
          options: [
            {
              title: "September 1998",
            },
            {
              title: "October 1999",
            },
            {
              title: "September 1995",
            },
            {
              title: "September 1993",
            },
            {
              title: "August 1990",
            },
            {
              title: "January 1995",
            },
            {
              title: "with number",
            },
            {
              title: "December 1995",
            },
            {
              title: "March 1996",
            },
            {
              title: "January 1970",
            },
          ],
        },
        {
          title: "Who or which company created JavaScript?",
          options: [
            {
              title: "Jordan Walke",
            },
            {
              title: "Netscape",
            },
            {
              title: "Jack Ma",
            },
            {
              title: "Nayok Razzaq",
            },
            {
              title: "Takla Rubel",
            },
            {
              title: "Tarzan",
            },
            {
              title: "Brendan Eich",
            },
            {
              title: "Mark Zuckerburg",
            },
            {
              title: "Bill Gates",
            },
            {
              title: "Steve Jobs",
            },
          ],
        },
        {
          title: "What is the latest version of ECMAScript",
          options: [
            {
              title: "ES2020",
            },
            {
              title: "ES2021",
            },
            {
              title: "ES6",
            },
            {
              title: "ES7",
            },
            {
              title: "ES8",
            },
            {
              title: "ES2022",
            },
            {
              title: "ES21",
            },
            {
              title: "ES3",
            },
            {
              title: "ES9",
            },
            {
              title: "ES2020",
            },
          ],
        },
      ],
    },
    "2C5834qx0sA": {
      questions: [
        {
          title: "How to declare JavaScript variables?",
          options: [
            {
              title: "with var",
            },
            {
              title: "with let",
            },
            {
              title: "with const",
            },
            {
              title: "with variable",
            },
            {
              title: "with declare",
            },
            {
              title: "with new",
            },
            {
              title: "with number",
            },
            {
              title: "with string",
            },
            {
              title: "with boolean",
            },
            {
              title: "with nothing",
            },
          ],
        },
        {
          title: "When was JavaScript invented?",
          options: [
            {
              title: "September 1998",
            },
            {
              title: "October 1999",
            },
            {
              title: "September 1995",
            },
            {
              title: "September 1993",
            },
            {
              title: "August 1990",
            },
            {
              title: "January 1995",
            },
            {
              title: "with number",
            },
            {
              title: "December 1995",
            },
            {
              title: "March 1996",
            },
            {
              title: "January 1970",
            },
          ],
        },
        {
          title: "Who or which company created JavaScript?",
          options: [
            {
              title: "Jordan Walke",
            },
            {
              title: "Netscape",
            },
            {
              title: "Jack Ma",
            },
            {
              title: "Nayok Razzaq",
            },
            {
              title: "Takla Rubel",
            },
            {
              title: "Tarzan",
            },
            {
              title: "Brendan Eich",
            },
            {
              title: "Mark Zuckerburg",
            },
            {
              title: "Bill Gates",
            },
            {
              title: "Steve Jobs",
            },
          ],
        },
        {
          title: "What is the latest version of ECMAScript",
          options: [
            {
              title: "ES2020",
            },
            {
              title: "ES2021",
            },
            {
              title: "ES6",
            },
            {
              title: "ES7",
            },
            {
              title: "ES8",
            },
            {
              title: "ES2022",
            },
            {
              title: "ES21",
            },
            {
              title: "ES3",
            },
            {
              title: "ES9",
            },
            {
              title: "ES2020",
            },
          ],
        },
      ],
    },
    qImH1bFubW4: {
      questions: [
        {
          title: "How to declare JavaScript variables?",
          options: [
            {
              title: "with var",
            },
            {
              title: "with let",
            },
            {
              title: "with const",
            },
            {
              title: "with variable",
            },
            {
              title: "with declare",
            },
            {
              title: "with new",
            },
            {
              title: "with number",
            },
            {
              title: "with string",
            },
            {
              title: "with boolean",
            },
            {
              title: "with nothing",
            },
          ],
        },
        {
          title: "When was JavaScript invented?",
          options: [
            {
              title: "September 1998",
            },
            {
              title: "October 1999",
            },
            {
              title: "September 1995",
            },
            {
              title: "September 1993",
            },
            {
              title: "August 1990",
            },
            {
              title: "January 1995",
            },
            {
              title: "with number",
            },
            {
              title: "December 1995",
            },
            {
              title: "March 1996",
            },
            {
              title: "January 1970",
            },
          ],
        },
        {
          title: "Who or which company created JavaScript?",
          options: [
            {
              title: "Jordan Walke",
            },
            {
              title: "Netscape",
            },
            {
              title: "Jack Ma",
            },
            {
              title: "Nayok Razzaq",
            },
            {
              title: "Takla Rubel",
            },
            {
              title: "Tarzan",
            },
            {
              title: "Brendan Eich",
            },
            {
              title: "Mark Zuckerburg",
            },
            {
              title: "Bill Gates",
            },
            {
              title: "Steve Jobs",
            },
          ],
        },
        {
          title: "What is the latest version of ECMAScript",
          options: [
            {
              title: "ES2020",
            },
            {
              title: "ES2021",
            },
            {
              title: "ES6",
            },
            {
              title: "ES7",
            },
            {
              title: "ES8",
            },
            {
              title: "ES2022",
            },
            {
              title: "ES21",
            },
            {
              title: "ES3",
            },
            {
              title: "ES9",
            },
            {
              title: "ES2020",
            },
          ],
        },
      ],
    },
};

const answers:answersType = {
    "lb7wT1gVU7Y": {
      "questions": [
        {
          "title": "How to declare JavaScript variables?",
          "options": [
            {
              "title": "with var",
              "correct": true
            },
            {
              "title": "with let",
              "correct": true
            },
            {
              "title": "with const",
              "correct": true
            },
            {
              "title": "with variable"
            },
            {
              "title": "with declare"
            },
            {
              "title": "with new"
            },
            {
              "title": "with number"
            },
            {
              "title": "with string"
            },
            {
              "title": "with boolean"
            },
            {
              "title": "with nothing"
            }
          ]
        },
        {
          "title": "When was JavaScript invented?",
          "options": [
            {
              "title": "September 1998"
            },
            {
              "title": "October 1999"
            },
            {
              "title": "September 1995",
              "correct": true
            },
            {
              "title": "September 1993"
            },
            {
              "title": "August 1990"
            },
            {
              "title": "January 1995"
            },
            {
              "title": "with number"
            },
            {
              "title": "December 1995"
            },
            {
              "title": "March 1996"
            },
            {
              "title": "January 1970"
            }
          ]
        },
        {
          "title": "Who or which company created JavaScript?",
          "options": [
            {
              "title": "Jordan Walke"
            },
            {
              "title": "Netscape",
              "correct": true
            },
            {
              "title": "Jack Ma"
            },
            {
              "title": "Nayok Razzaq"
            },
            {
              "title": "Takla Rubel"
            },
            {
              "title": "Tarzan"
            },
            {
              "title": "Brendan Eich",
              "correct": true
            },
            {
              "title": "Mark Zuckerburg"
            },
            {
              "title": "Bill Gates"
            },
            {
              "title": "Steve Jobs"
            }
          ]
        },
        {
          "title": "What is the latest version of ECMAScript",
          "options": [
            {
              "title": "ES2020"
            },
            {
              "title": "ES2021",
              "correct": true
            },
            {
              "title": "ES6"
            },
            {
              "title": "ES7"
            },
            {
              "title": "ES8"
            },
            {
              "title": "ES2022"
            },
            {
              "title": "ES21"
            },
            {
              "title": "ES3"
            },
            {
              "title": "ES9"
            },
            {
              "title": "ES2020"
            }
          ]
        }
      ]
    },
    "5Xy-t8k_M4A": {
      "questions": [
        {
          "title": "How to declare JavaScript variables?",
          "options": [
            {
              "title": "with var",
              "correct": true
            },
            {
              "title": "with let",
              "correct": true
            },
            {
              "title": "with const",
              "correct": true
            },
            {
              "title": "with variable"
            },
            {
              "title": "with declare"
            },
            {
              "title": "with new"
            },
            {
              "title": "with number"
            },
            {
              "title": "with string"
            },
            {
              "title": "with boolean"
            },
            {
              "title": "with nothing"
            }
          ]
        },
        {
          "title": "When was JavaScript invented?",
          "options": [
            {
              "title": "September 1998"
            },
            {
              "title": "October 1999"
            },
            {
              "title": "September 1995",
              "correct": true
            },
            {
              "title": "September 1993"
            },
            {
              "title": "August 1990"
            },
            {
              "title": "January 1995"
            },
            {
              "title": "with number"
            },
            {
              "title": "December 1995"
            },
            {
              "title": "March 1996"
            },
            {
              "title": "January 1970"
            }
          ]
        },
        {
          "title": "Who or which company created JavaScript?",
          "options": [
            {
              "title": "Jordan Walke"
            },
            {
              "title": "Netscape",
              "correct": true
            },
            {
              "title": "Jack Ma"
            },
            {
              "title": "Nayok Razzaq"
            },
            {
              "title": "Takla Rubel"
            },
            {
              "title": "Tarzan"
            },
            {
              "title": "Brendan Eich",
              "correct": true
            },
            {
              "title": "Mark Zuckerburg"
            },
            {
              "title": "Bill Gates"
            },
            {
              "title": "Steve Jobs"
            }
          ]
        },
        {
          "title": "What is the latest version of ECMAScript",
          "options": [
            {
              "title": "ES2020"
            },
            {
              "title": "ES2021",
              "correct": true
            },
            {
              "title": "ES6"
            },
            {
              "title": "ES7"
            },
            {
              "title": "ES8"
            },
            {
              "title": "ES2022"
            },
            {
              "title": "ES21"
            },
            {
              "title": "ES3"
            },
            {
              "title": "ES9"
            },
            {
              "title": "ES2020"
            }
          ]
        }
      ]
    },
    "WC-g0JtEIwM": {
      "questions": [
        {
          "title": "How to declare JavaScript variables?",
          "options": [
            {
              "title": "with var",
              "correct": true
            },
            {
              "title": "with let",
              "correct": true
            },
            {
              "title": "with const",
              "correct": true
            },
            {
              "title": "with variable"
            },
            {
              "title": "with declare"
            },
            {
              "title": "with new"
            },
            {
              "title": "with number"
            },
            {
              "title": "with string"
            },
            {
              "title": "with boolean"
            },
            {
              "title": "with nothing"
            }
          ]
        },
        {
          "title": "When was JavaScript invented?",
          "options": [
            {
              "title": "September 1998"
            },
            {
              "title": "October 1999"
            },
            {
              "title": "September 1995",
              "correct": true
            },
            {
              "title": "September 1993"
            },
            {
              "title": "August 1990"
            },
            {
              "title": "January 1995"
            },
            {
              "title": "with number"
            },
            {
              "title": "December 1995"
            },
            {
              "title": "March 1996"
            },
            {
              "title": "January 1970"
            }
          ]
        },
        {
          "title": "Who or which company created JavaScript?",
          "options": [
            {
              "title": "Jordan Walke"
            },
            {
              "title": "Netscape",
              "correct": true
            },
            {
              "title": "Jack Ma"
            },
            {
              "title": "Nayok Razzaq"
            },
            {
              "title": "Takla Rubel"
            },
            {
              "title": "Tarzan"
            },
            {
              "title": "Brendan Eich",
              "correct": true
            },
            {
              "title": "Mark Zuckerburg"
            },
            {
              "title": "Bill Gates"
            },
            {
              "title": "Steve Jobs"
            }
          ]
        },
        {
          "title": "What is the latest version of ECMAScript",
          "options": [
            {
              "title": "ES2020"
            },
            {
              "title": "ES2021",
              "correct": true
            },
            {
              "title": "ES6"
            },
            {
              "title": "ES7"
            },
            {
              "title": "ES8"
            },
            {
              "title": "ES2022"
            },
            {
              "title": "ES21"
            },
            {
              "title": "ES3"
            },
            {
              "title": "ES9"
            },
            {
              "title": "ES2020"
            }
          ]
        }
      ]
    },
    "CHnTTzD1pAQ": {
      "questions": [
        {
          "title": "How to declare JavaScript variables?",
          "options": [
            {
              "title": "with var",
              "correct": true
            },
            {
              "title": "with let",
              "correct": true
            },
            {
              "title": "with const",
              "correct": true
            },
            {
              "title": "with variable"
            },
            {
              "title": "with declare"
            },
            {
              "title": "with new"
            },
            {
              "title": "with number"
            },
            {
              "title": "with string"
            },
            {
              "title": "with boolean"
            },
            {
              "title": "with nothing"
            }
          ]
        },
        {
          "title": "When was JavaScript invented?",
          "options": [
            {
              "title": "September 1998"
            },
            {
              "title": "October 1999"
            },
            {
              "title": "September 1995",
              "correct": true
            },
            {
              "title": "September 1993"
            },
            {
              "title": "August 1990"
            },
            {
              "title": "January 1995"
            },
            {
              "title": "with number"
            },
            {
              "title": "December 1995"
            },
            {
              "title": "March 1996"
            },
            {
              "title": "January 1970"
            }
          ]
        },
        {
          "title": "Who or which company created JavaScript?",
          "options": [
            {
              "title": "Jordan Walke"
            },
            {
              "title": "Netscape",
              "correct": true
            },
            {
              "title": "Jack Ma"
            },
            {
              "title": "Nayok Razzaq"
            },
            {
              "title": "Takla Rubel"
            },
            {
              "title": "Tarzan"
            },
            {
              "title": "Brendan Eich",
              "correct": true
            },
            {
              "title": "Mark Zuckerburg"
            },
            {
              "title": "Bill Gates"
            },
            {
              "title": "Steve Jobs"
            }
          ]
        },
        {
          "title": "What is the latest version of ECMAScript",
          "options": [
            {
              "title": "ES2020"
            },
            {
              "title": "ES2021",
              "correct": true
            },
            {
              "title": "ES6"
            },
            {
              "title": "ES7"
            },
            {
              "title": "ES8"
            },
            {
              "title": "ES2022"
            },
            {
              "title": "ES21"
            },
            {
              "title": "ES3"
            },
            {
              "title": "ES9"
            },
            {
              "title": "ES2020"
            }
          ]
        }
      ]
    },
    "PHy8h0BixKA": {
      "questions": [
        {
          "title": "How to declare JavaScript variables?",
          "options": [
            {
              "title": "with var",
              "correct": true
            },
            {
              "title": "with let",
              "correct": true
            },
            {
              "title": "with const",
              "correct": true
            },
            {
              "title": "with variable"
            },
            {
              "title": "with declare"
            },
            {
              "title": "with new"
            },
            {
              "title": "with number"
            },
            {
              "title": "with string"
            },
            {
              "title": "with boolean"
            },
            {
              "title": "with nothing"
            }
          ]
        },
        {
          "title": "When was JavaScript invented?",
          "options": [
            {
              "title": "September 1998"
            },
            {
              "title": "October 1999"
            },
            {
              "title": "September 1995",
              "correct": true
            },
            {
              "title": "September 1993"
            },
            {
              "title": "August 1990"
            },
            {
              "title": "January 1995"
            },
            {
              "title": "with number"
            },
            {
              "title": "December 1995"
            },
            {
              "title": "March 1996"
            },
            {
              "title": "January 1970"
            }
          ]
        },
        {
          "title": "Who or which company created JavaScript?",
          "options": [
            {
              "title": "Jordan Walke"
            },
            {
              "title": "Netscape",
              "correct": true
            },
            {
              "title": "Jack Ma"
            },
            {
              "title": "Nayok Razzaq"
            },
            {
              "title": "Takla Rubel"
            },
            {
              "title": "Tarzan"
            },
            {
              "title": "Brendan Eich",
              "correct": true
            },
            {
              "title": "Mark Zuckerburg"
            },
            {
              "title": "Bill Gates"
            },
            {
              "title": "Steve Jobs"
            }
          ]
        },
        {
          "title": "What is the latest version of ECMAScript",
          "options": [
            {
              "title": "ES2020"
            },
            {
              "title": "ES2021",
              "correct": true
            },
            {
              "title": "ES6"
            },
            {
              "title": "ES7"
            },
            {
              "title": "ES8"
            },
            {
              "title": "ES2022"
            },
            {
              "title": "ES21"
            },
            {
              "title": "ES3"
            },
            {
              "title": "ES9"
            },
            {
              "title": "ES2020"
            }
          ]
        }
      ]
    },
    "2C5834qx0sA": {
      "questions": [
        {
          "title": "How to declare JavaScript variables?",
          "options": [
            {
              "title": "with var",
              "correct": true
            },
            {
              "title": "with let",
              "correct": true
            },
            {
              "title": "with const",
              "correct": true
            },
            {
              "title": "with variable"
            },
            {
              "title": "with declare"
            },
            {
              "title": "with new"
            },
            {
              "title": "with number"
            },
            {
              "title": "with string"
            },
            {
              "title": "with boolean"
            },
            {
              "title": "with nothing"
            }
          ]
        },
        {
          "title": "When was JavaScript invented?",
          "options": [
            {
              "title": "September 1998"
            },
            {
              "title": "October 1999"
            },
            {
              "title": "September 1995",
              "correct": true
            },
            {
              "title": "September 1993"
            },
            {
              "title": "August 1990"
            },
            {
              "title": "January 1995"
            },
            {
              "title": "with number"
            },
            {
              "title": "December 1995"
            },
            {
              "title": "March 1996"
            },
            {
              "title": "January 1970"
            }
          ]
        },
        {
          "title": "Who or which company created JavaScript?",
          "options": [
            {
              "title": "Jordan Walke"
            },
            {
              "title": "Netscape",
              "correct": true
            },
            {
              "title": "Jack Ma"
            },
            {
              "title": "Nayok Razzaq"
            },
            {
              "title": "Takla Rubel"
            },
            {
              "title": "Tarzan"
            },
            {
              "title": "Brendan Eich",
              "correct": true
            },
            {
              "title": "Mark Zuckerburg"
            },
            {
              "title": "Bill Gates"
            },
            {
              "title": "Steve Jobs"
            }
          ]
        },
        {
          "title": "What is the latest version of ECMAScript",
          "options": [
            {
              "title": "ES2020"
            },
            {
              "title": "ES2021",
              "correct": true
            },
            {
              "title": "ES6"
            },
            {
              "title": "ES7"
            },
            {
              "title": "ES8"
            },
            {
              "title": "ES2022"
            },
            {
              "title": "ES21"
            },
            {
              "title": "ES3"
            },
            {
              "title": "ES9"
            },
            {
              "title": "ES2020"
            }
          ]
        }
      ]
    },
    "qImH1bFubW4": {
      "questions": [
        {
          "title": "How to declare JavaScript variables?",
          "options": [
            {
              "title": "with var",
              "correct": true
            },
            {
              "title": "with let",
              "correct": true
            },
            {
              "title": "with const",
              "correct": true
            },
            {
              "title": "with variable"
            },
            {
              "title": "with declare"
            },
            {
              "title": "with new"
            },
            {
              "title": "with number"
            },
            {
              "title": "with string"
            },
            {
              "title": "with boolean"
            },
            {
              "title": "with nothing"
            }
          ]
        },
        {
          "title": "When was JavaScript invented?",
          "options": [
            {
              "title": "September 1998"
            },
            {
              "title": "October 1999"
            },
            {
              "title": "September 1995",
              "correct": true
            },
            {
              "title": "September 1993"
            },
            {
              "title": "August 1990"
            },
            {
              "title": "January 1995"
            },
            {
              "title": "with number"
            },
            {
              "title": "December 1995"
            },
            {
              "title": "March 1996"
            },
            {
              "title": "January 1970"
            }
          ]
        },
        {
          "title": "Who or which company created JavaScript?",
          "options": [
            {
              "title": "Jordan Walke"
            },
            {
              "title": "Netscape",
              "correct": true
            },
            {
              "title": "Jack Ma"
            },
            {
              "title": "Nayok Razzaq"
            },
            {
              "title": "Takla Rubel"
            },
            {
              "title": "Tarzan"
            },
            {
              "title": "Brendan Eich",
              "correct": true
            },
            {
              "title": "Mark Zuckerburg"
            },
            {
              "title": "Bill Gates"
            },
            {
              "title": "Steve Jobs"
            }
          ]
        },
        {
          "title": "What is the latest version of ECMAScript",
          "options": [
            {
              "title": "ES2020"
            },
            {
              "title": "ES2021",
              "correct": true
            },
            {
              "title": "ES6"
            },
            {
              "title": "ES7"
            },
            {
              "title": "ES8"
            },
            {
              "title": "ES2022"
            },
            {
              "title": "ES21"
            },
            {
              "title": "ES3"
            },
            {
              "title": "ES9"
            },
            {
              "title": "ES2020"
            }
          ]
        }
      ]
    }
  }

  export {
    topic,
    quiz,
    answers,
  }
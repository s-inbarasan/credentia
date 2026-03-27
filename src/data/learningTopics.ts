import { Topic, QuizQuestion } from '../types';

export const LEARNING_TOPICS: Topic[] = [
  {
    "id": "topic-1",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "WHAT IS CYBERSECURITY?",
    "level": "Beginner",
    "icon": "Shield",
    "overview": "Learn the essentials of WHAT IS CYBERSECURITY? and how to protect yourself.",
    "simpleExplanation": "The practice of protecting devices, networks, and data from digital attacks.",
    "whyItMatters": "Your entire identity—money, photos, and secrets—lives on your devices.",
    "explanation": "Cybersecurity is a multi-layered system involving technology (firewalls, encryption) and human behavior (safe habits). It is the digital version of home security, ensuring only authorized people can enter your \"digital house.\"",
    "realWorldExample": "Leaving your laptop unlocked in a library is like leaving your front door wide open.",
    "securityTips": [
      "Treat data like cash.",
      "Use the CREDENTIA AI Chat for instant safety advice."
    ],
    "summary": "Cybersecurity is a basic life skill, not just for IT experts.",
    "quiz": [
      {
        "id": "q1-1",
        "question": "What is the primary goal of cybersecurity?",
        "options": [
          "To make computers faster",
          "To protect data and devices",
          "To build websites",
          "To sell software"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q1-2",
        "question": "Which of these is a \"digital lock\" for your data?",
        "options": [
          "A keyboard",
          "A monitor",
          "Encryption",
          "A mousepad"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      },
      {
        "id": "q1-3",
        "question": "Who is responsible for cybersecurity?",
        "options": [
          "Only hackers",
          "Only the government",
          "Everyone who uses the internet",
          "Only IT staff"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      }
    ]
  },
  {
    "id": "topic-2",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "WHY CYBERSECURITY MATTERS TODAY",
    "level": "Beginner",
    "icon": "Key",
    "overview": "Learn the essentials of WHY CYBERSECURITY MATTERS TODAY and how to protect yourself.",
    "simpleExplanation": "Criminals have moved online because that is where the money and data are.",
    "whyItMatters": "A single breach can lead to identity theft, financial loss, or reputational damage.",
    "explanation": "With the \"Internet of Things\" (IoT), everything from your fridge to your car is connected. This creates more \"entry points\" for hackers. One vulnerability can compromise your entire network.",
    "realWorldExample": "A hacker accessing a smart thermostat to get onto a home Wi-Fi network.",
    "securityTips": [
      "Monitor bank statements for small $1 charges.",
      "These are often \"test\" charges by thieves."
    ],
    "summary": "As the world goes digital, security must be your first priority.",
    "quiz": [
      {
        "id": "q2-1",
        "question": "Why is cybercrime increasing?",
        "options": [
          "It’s easier to rob 1,000 people remotely than 1 person physically",
          "Computers are getting cheaper",
          "The internet is becoming slower",
          "People are using less data"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The correct answer is A."
      },
      {
        "id": "q2-2",
        "question": "What is a \"vulnerability\"?",
        "options": [
          "A strong password",
          "A weakness in a system",
          "A type of computer",
          "An internet service provider"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q2-3",
        "question": "Which of these can be a result of a cyber attack?",
        "options": [
          "Improved PC performance",
          "Identity theft",
          "Free internet",
          "Faster downloads"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-3",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "TYPES OF CYBER THREATS",
    "level": "Beginner",
    "icon": "Lock",
    "overview": "Learn the essentials of TYPES OF CYBER THREATS and how to protect yourself.",
    "simpleExplanation": "Malicious acts intended to steal, damage, or disrupt data.",
    "whyItMatters": "You cannot fight an enemy you don't recognize.",
    "explanation": "Threats include Malware (viruses), Phishing (scams), and Man-in-the-Middle attacks. Most threats use \"deception\" rather than \"force.\"",
    "realWorldExample": "A \"system update\" pop-up on a random website that is actually a virus.",
    "securityTips": [
      "Never download attachments from people you don't know.",
      "Use CREDENTIA's Phishing Detector."
    ],
    "summary": "Threats are usually disguised as something helpful or urgent.",
    "quiz": [
      {
        "id": "q3-1",
        "question": "What is Malware?",
        "options": [
          "Hardware",
          "Malicious software",
          "A secure website",
          "A type of email"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q3-2",
        "question": "What is the goal of a Phishing attack?",
        "options": [
          "To fix your computer",
          "To trick you into giving up info",
          "To speed up Wi-Fi",
          "To update your OS"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q3-3",
        "question": "Which threat involves locking your files for a fee?",
        "options": [
          "Spyware",
          "Adware",
          "Ransomware",
          "Bloatware"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      }
    ]
  },
  {
    "id": "topic-4",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "HOW HACKERS THINK",
    "level": "Beginner",
    "icon": "Smartphone",
    "overview": "Learn the essentials of HOW HACKERS THINK and how to protect yourself.",
    "simpleExplanation": "Hackers are \"path of least resistance\" thinkers. They look for the easiest way in.",
    "whyItMatters": "They rely on you being lazy, tired, or distracted.",
    "explanation": "Hackers use \"Social Engineering\"—manipulating human psychology. They create fear (\"Your account is blocked!\") or curiosity (\"See this leaked photo!\") to make you click.",
    "realWorldExample": "A hacker calling a secretary pretending to be the CEO to get a password.",
    "securityTips": [
      "Always pause when a message feels urgent.",
      "Verify the sender's identity."
    ],
    "summary": "Hackers hack people more often than they hack machines.",
    "quiz": [
      {
        "id": "q4-1",
        "question": "What is \"Social Engineering\"?",
        "options": [
          "Building a social network",
          "Manipulating people into giving up info",
          "Fixing a computer",
          "Coding a website"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q4-2",
        "question": "A hacker sees a post about your first pet’s name. Why is this useful?",
        "options": [
          "They like animals",
          "It might be a security question answer",
          "They want to buy a pet",
          "It helps them code"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q4-3",
        "question": "Which emotion do hackers most commonly exploit?",
        "options": [
          "Happiness",
          "Boredom",
          "Fear/Urgency",
          "Calmness"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      }
    ]
  },
  {
    "id": "topic-5",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "PERSONAL DATA AND DIGITAL IDENTITY",
    "level": "Beginner",
    "icon": "Globe",
    "overview": "Learn the essentials of PERSONAL DATA AND DIGITAL IDENTITY and how to protect yourself.",
    "simpleExplanation": "Data is who you are; Identity is how the internet sees you.",
    "whyItMatters": "If your data is stolen, someone else can \"become\" you.",
    "explanation": "Your identity includes birthdates, SSNs, and even your browsing habits. This data is sold on the \"Dark Web\" to the highest bidder.",
    "realWorldExample": "Someone opening a credit card in your name using your leaked ID.",
    "securityTips": [
      "Don't share photos of boarding passes or ID cards online."
    ],
    "summary": "Your personal data is the currency of the internet—protect your wallet.",
    "quiz": [
      {
        "id": "q5-1",
        "question": "What makes up your \"Digital Identity\"?",
        "options": [
          "Only your name",
          "Only your photo",
          "Everything you do and share online",
          "Only your computer brand"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      },
      {
        "id": "q5-2",
        "question": "Where do hackers often sell stolen data?",
        "options": [
          "Amazon",
          "The Dark Web",
          "Google",
          "Facebook Marketplace"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q5-3",
        "question": "Why is sharing your birthdate on public social media a risk?",
        "options": [
          "People might forget your birthday",
          "It can be used for identity theft",
          "It makes your computer slow",
          "It’s against the law"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-6",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "SAFE INTERNET USAGE BASICS",
    "level": "Beginner",
    "icon": "Mail",
    "overview": "Learn the essentials of SAFE INTERNET USAGE BASICS and how to protect yourself.",
    "simpleExplanation": "Browsing with a \"defensive\" mindset.",
    "whyItMatters": "Malicious websites look exactly like real ones.",
    "explanation": "Look for HTTPS (the 'S' stands for Secure). Avoid public Wi-Fi for banking. Use \"Incognito\" mode on shared computers, but know it doesn't make you invisible.",
    "realWorldExample": "Using \"Starbucks_Free_WiFi\" which was actually set up by a hacker nearby to spy on users.",
    "securityTips": [
      "Use a VPN on public networks.",
      "Check for the \"Padlock\" icon in the browser."
    ],
    "summary": "The internet is a public space; act like you're in a crowded city.",
    "quiz": [
      {
        "id": "q6-1",
        "question": "What does the \"S\" in HTTPS stand for?",
        "options": [
          "Simple",
          "Secure",
          "Standard",
          "System"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q6-2",
        "question": "Why is public Wi-Fi risky?",
        "options": [
          "It’s too slow",
          "Hackers can intercept your data",
          "It’s expensive",
          "It turns off your antivirus"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q6-3",
        "question": "What does the padlock icon in the URL bar mean?",
        "options": [
          "The site is 100% safe",
          "The connection is encrypted",
          "The site is blocked",
          "The site is private"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-7",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "UNDERSTANDING ONLINE RISKS",
    "level": "Beginner",
    "icon": "AlertTriangle",
    "overview": "Learn the essentials of UNDERSTANDING ONLINE RISKS and how to protect yourself.",
    "simpleExplanation": "Assessing the \"cost\" of your digital actions.",
    "whyItMatters": "Convenience is often the enemy of security.",
    "explanation": "Risk assessment involves looking at \"Probability\" (how likely) and \"Impact\" (how bad). Reusing a password is high probability/high impact.",
    "realWorldExample": "Saving your credit card on a random site to save 30 seconds during checkout.",
    "securityTips": [
      "Use the CREDENTIA Simulation Center to practice identifying risks."
    ],
    "summary": "Always weigh the 5 minutes of convenience against the 5 months of fixing identity theft.",
    "quiz": [
      {
        "id": "q7-1",
        "question": "What is the \"risk\" of reusing one password for all accounts?",
        "options": [
          "You might forget it",
          "If one site is hacked, all your accounts are at risk",
          "It makes your phone hot",
          "None"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q7-2",
        "question": "Which is a \"High Risk\" activity?",
        "options": [
          "Updating your apps",
          "Using MFA",
          "Clicking \"Remember Me\" on a public library computer",
          "Buying an antivirus"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      },
      {
        "id": "q7-3",
        "question": "In risk assessment, what is \"Impact\"?",
        "options": [
          "How fast an attack is",
          "How much damage an attack causes",
          "The type of computer used",
          "The color of the website"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-8",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "COMMON CYBER ATTACKS EXPLAINED",
    "level": "Beginner",
    "icon": "EyeOff",
    "overview": "Learn the essentials of COMMON CYBER ATTACKS EXPLAINED and how to protect yourself.",
    "simpleExplanation": "The \"Top 3\" tricks: Phishing, Ransomware, and Credential Stuffing.",
    "whyItMatters": "These cause the most financial damage to individuals.",
    "explanation": "Credential Stuffing is when hackers use passwords leaked from a small site to break into big ones (like Gmail or Bank of America).",
    "realWorldExample": "Your old gaming forum password being used to hack your bank account.",
    "securityTips": [
      "Use unique passwords for every site.",
      "Check haveibeenpwned.com."
    ],
    "summary": "One weak link (an old account) can break your whole chain.",
    "quiz": [
      {
        "id": "q8-1",
        "question": "What is \"Credential Stuffing\"?",
        "options": [
          "Making a long password",
          "Using leaked passwords on other sites",
          "Buying a new PC",
          "Clearing your cache"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q8-2",
        "question": "Which attack encrypts your files and asks for money?",
        "options": [
          "Phishing",
          "Ransomware",
          "Spyware",
          "Adware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q8-3",
        "question": "What is the best way to prevent Phishing?",
        "options": [
          "Buying a faster router",
          "Verifying links and senders",
          "Changing your screen brightness",
          "Deleting your history"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-9",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "DIGITAL FOOTPRINT AWARENESS",
    "level": "Beginner",
    "icon": "UserCheck",
    "overview": "Learn the essentials of DIGITAL FOOTPRINT AWARENESS and how to protect yourself.",
    "simpleExplanation": "The data trail you leave behind—permanently.",
    "whyItMatters": "Your \"Footprint\" is used by hackers to build a profile of you.",
    "explanation": "Footprints include social posts, cookies, and location tags. Even \"deleted\" posts are often archived by third-party sites.",
    "realWorldExample": "A \"Which Disney Character Are You?\" quiz that actually scrapes your profile data.",
    "securityTips": [
      "Google your own name in an \"Incognito\" tab to see what others see."
    ],
    "summary": "The internet is written in ink, not pencil.",
    "quiz": [
      {
        "id": "q9-1",
        "question": "What is a \"Digital Footprint\"?",
        "options": [
          "Your physical shoe size",
          "The trail of data you leave online",
          "A type of computer virus",
          "A brand of laptop"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q9-2",
        "question": "Is a digital footprint permanent?",
        "options": [
          "No, it disappears after 24 hours",
          "Yes, it is very difficult to fully delete",
          "Only if you use a Mac",
          "Only if you have a virus"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q9-3",
        "question": "How can a hacker use your digital footprint?",
        "options": [
          "To speed up your internet",
          "To create a targeted phishing attack",
          "To fix your computer",
          "To give you a gift"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-10",
    "chapterId": "ch1",
    "chapterTitle": "Getting Started with Cybersecurity",
    "title": "BUILDING A SECURITY MINDSET",
    "level": "Beginner",
    "icon": "Database",
    "overview": "Learn the essentials of BUILDING A SECURITY MINDSET and how to protect yourself.",
    "simpleExplanation": "Thinking like a defender in every digital interaction.",
    "whyItMatters": "Tools fail; your brain is the ultimate firewall.",
    "explanation": "Adopt the \"Zero Trust\" model. Never assume a message is real just because it has a logo. Always verify.",
    "realWorldExample": "Pausing for 10 seconds to check an email address before clicking \"Reset Password.\"",
    "securityTips": [
      "Slow down.",
      "Urgency is the hacker’s weapon."
    ],
    "summary": "A skeptical mind is the most expensive thing for a hacker to beat.",
    "quiz": [
      {
        "id": "q10-1",
        "question": "What does a \"Security Mindset\" mean?",
        "options": [
          "Being afraid of the internet",
          "Thinking critically and verifying",
          "Buying every security app",
          "Not using computers"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q10-2",
        "question": "What is \"Zero Trust\"?",
        "options": [
          "Not trusting your family",
          "Verifying every request before granting access",
          "Using no passwords",
          "Having no internet"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q10-3",
        "question": "Why do hackers create a \"sense of urgency\"?",
        "options": [
          "They are in a hurry",
          "To make you act without thinking",
          "To save you time",
          "Because the internet is fast"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-11",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "WHAT MAKES A PASSWORD STRONG",
    "level": "Beginner",
    "icon": "Shield",
    "overview": "Learn the essentials of WHAT MAKES A PASSWORD STRONG and how to protect yourself.",
    "simpleExplanation": "Length + Complexity + Randomness.",
    "whyItMatters": "Computers can guess \"password\" instantly but \"P@ssw0rd!Long\" takes years.",
    "explanation": "A strong password should be at least 12-16 characters. Use the CREDENTIA Password Checker to see \"Entropy\" (randomness) scores.",
    "realWorldExample": "\"Kitten1\" is weak. \"Purple-Kitten-Moon-2024!\" is very strong.",
    "securityTips": [
      "Use the \"Passphrase\" method—4 random words together."
    ],
    "summary": "If you can remember it easily, a computer can guess it easily.",
    "quiz": [
      {
        "id": "q11-1",
        "question": "What is the most important factor in password strength?",
        "options": [
          "Using your name",
          "Length",
          "Using common words",
          "Speed of typing"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q11-2",
        "question": "Which of these is a \"Passphrase\"?",
        "options": [
          "12345",
          "Admin123",
          "Blue-Rocket-Leaf-Chair",
          "Password"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      },
      {
        "id": "q11-3",
        "question": "Why are symbols like #, $, and % used?",
        "options": [
          "To make the password pretty",
          "To increase complexity and entropy",
          "To make it shorter",
          "They are required by law"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-12",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "HOW HACKERS BREAK WEAK PASSWORDS",
    "level": "Beginner",
    "icon": "Key",
    "overview": "Learn the essentials of HOW HACKERS BREAK WEAK PASSWORDS and how to protect yourself.",
    "simpleExplanation": "They use \"Guesser\" machines that never sleep.",
    "whyItMatters": "They don't type; they use software that tries millions of combos.",
    "explanation": "\"Brute Force\" (trying every combo) and \"Dictionary\" (trying every word) are the main methods.",
    "realWorldExample": "A hacker using a leaked list of \"Top 10,000 Passwords\" to unlock 1,000 accounts in 1 minute.",
    "securityTips": [
      "Never use common patterns like \"12345\" or \"qwerty.\"."
    ],
    "summary": "You aren't hiding from a person; you're hiding from a high-speed script.",
    "quiz": [
      {
        "id": "q12-1",
        "question": "What is a \"Brute Force\" attack?",
        "options": [
          "Using a hammer on a PC",
          "Trying every possible combination of characters",
          "Guessing once and giving up",
          "Calling the user"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q12-2",
        "question": "What is a \"Dictionary Attack\"?",
        "options": [
          "Reading a book",
          "Trying every word in a language as a password",
          "Stealing a physical dictionary",
          "Fixing typos"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q12-3",
        "question": "How many passwords can a modern PC try per second?",
        "options": [
          "One",
          "Ten",
          "Millions",
          "Zero"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      }
    ]
  },
  {
    "id": "topic-13",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "CREATING SECURE PASSWORDS",
    "level": "Beginner",
    "icon": "Lock",
    "overview": "Learn the essentials of CREATING SECURE PASSWORDS and how to protect yourself.",
    "simpleExplanation": "Making a password that is a \"Secret,\" not a \"Fact.\"",
    "whyItMatters": "Facts about you (pet's name, birthday) are public. Secrets aren't.",
    "explanation": "Use random associations. Don't use your name, company name, or username inside the password.",
    "realWorldExample": "\"I love New York\" is a bad password. \"Pizza-Moon-Dance-99!\" is better.",
    "securityTips": [
      "Use a mix of character types.",
      "Never write them down where others can see."
    ],
    "summary": "Be random. Computers hate randomness.",
    "quiz": [
      {
        "id": "q13-1",
        "question": "Which is a BAD practice for creating passwords?",
        "options": [
          "Using random words",
          "Using your birth year",
          "Making it long",
          "Using symbols"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q13-2",
        "question": "Why is \"Pass123\" a bad password?",
        "options": [
          "It’s too long",
          "It’s predictable and common",
          "It’s too random",
          "It uses numbers"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q13-3",
        "question": "How often should you use the same password for two different sites?",
        "options": [
          "Always",
          "Only for social media",
          "Never",
          "Only if they are related"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      }
    ]
  },
  {
    "id": "topic-14",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "PASSWORD MANAGERS EXPLAINED",
    "level": "Beginner",
    "icon": "Smartphone",
    "overview": "Learn the essentials of PASSWORD MANAGERS EXPLAINED and how to protect yourself.",
    "simpleExplanation": "A digital vault that stores all your passwords behind one \"Master Key.\"",
    "whyItMatters": "You only have to remember ONE strong password. The app does the rest.",
    "explanation": "Managers like Bitwarden or 1Password generate unique passwords for every site. They encrypt the vault so even the company can't see your data.",
    "realWorldExample": "Your manager fills in \"xP9!vM2#zQ\" for your bank automatically.",
    "securityTips": [
      "Set up MFA for your Password Manager vault."
    ],
    "summary": "A manager is the ONLY way to have unique passwords for 100+ accounts.",
    "quiz": [
      {
        "id": "q14-1",
        "question": "What is a Password Manager?",
        "options": [
          "A person who watches you type",
          "A secure app that stores and generates passwords",
          "A list on your phone",
          "A notebook"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q14-2",
        "question": "What is the \"Master Password\"?",
        "options": [
          "Your email password",
          "The one password that unlocks your vault",
          "Your computer login",
          "\"123456\""
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q14-3",
        "question": "What is a benefit of using a manager?",
        "options": [
          "It makes the internet faster",
          "It allows you to use unique, complex passwords for every site",
          "It fixes your Wi-Fi",
          "It’s free money"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-15",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "MULTI-FACTOR AUTHENTICATION (MFA)",
    "level": "Beginner",
    "icon": "Globe",
    "overview": "Learn the essentials of MULTI-FACTOR AUTHENTICATION (MFA) and how to protect yourself.",
    "simpleExplanation": "A second \"Lock\" on your account. Password + Phone Code.",
    "whyItMatters": "If a hacker steals your password, they are still STUCK.",
    "explanation": "MFA uses: Something you Know (Password), Something you Have (Phone/Token), or Something you Are (Fingerprint).",
    "realWorldExample": "Getting a text code from Google when logging in from a new PC.",
    "securityTips": [
      "Use an \"Authenticator App\" (like Google/Microsoft) rather than SMS/Text."
    ],
    "summary": "MFA is the #1 tool to stop 99% of account takeovers.",
    "quiz": [
      {
        "id": "q15-1",
        "question": "What does MFA stand for?",
        "options": [
          "Multiple File Access",
          "Multi-Factor Authentication",
          "My Fast Account",
          "Mail File Archive"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q15-2",
        "question": "Which is the SAFEST type of MFA?",
        "options": [
          "Text Message (SMS)",
          "Authenticator App",
          "Security Questions",
          "No MFA"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q15-3",
        "question": "What happens if a hacker gets your password but you have MFA?",
        "options": [
          "They get in",
          "They are blocked because they don't have your phone/code",
          "They steal your phone",
          "Nothing"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-16",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "PROTECTING SOCIAL MEDIA ACCOUNTS",
    "level": "Beginner",
    "icon": "Mail",
    "overview": "Learn the essentials of PROTECTING SOCIAL MEDIA ACCOUNTS and how to protect yourself.",
    "simpleExplanation": "Locking the \"window\" to your personal life.",
    "whyItMatters": "Social media is used for impersonation and phishing.",
    "explanation": "Check your \"Privacy Settings.\" Limit who can see your posts. Turn on \"Login Alerts\" to know if someone else logs in.",
    "realWorldExample": "A hacker taking over your Instagram and asking your followers for money.",
    "securityTips": [
      "Don't use \"Log in with Facebook\" on untrusted websites."
    ],
    "summary": "Your profile is a target. Treat it like a bank account.",
    "quiz": [
      {
        "id": "q16-1",
        "question": "Why should you use \"Login Alerts\"?",
        "options": [
          "To see how many likes you have",
          "To know instantly if an unauthorized person logs in",
          "To save battery",
          "To update your app"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q16-2",
        "question": "What is a risk of \"Public\" profiles?",
        "options": [
          "Too many friends",
          "Hackers can gather personal info for scams",
          "Faster internet",
          "Better photos"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q16-3",
        "question": "Is \"Log in with Facebook\" always safe?",
        "options": [
          "Yes, Facebook is secure",
          "No, it gives that website access to your profile data",
          "Only if you have a virus",
          "Only on Tuesdays"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-17",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "EMAIL SECURITY BASICS",
    "level": "Beginner",
    "icon": "AlertTriangle",
    "overview": "Learn the essentials of EMAIL SECURITY BASICS and how to protect yourself.",
    "simpleExplanation": "Protecting the \"Key to the City.\"",
    "whyItMatters": "If your email is hacked, every other account can be reset.",
    "explanation": "Use a \"Burner\" email for shopping and a \"Secure\" email for banking. Never use the same password for your email and other sites.",
    "realWorldExample": "Hacker enters your Gmail, clicks \"Forgot Password\" on your bank, and gets the reset link.",
    "securityTips": [
      "Check your \"Recovery Phone Number\" regularly to ensure it's yours."
    ],
    "summary": "Your email is your most sensitive account. Protect it first.",
    "quiz": [
      {
        "id": "q17-1",
        "question": "Why is your email account the \"Master Key\"?",
        "options": [
          "It’s where you get reset links for other accounts",
          "It’s the oldest account",
          "It’s easy to hack",
          "It has the most storage"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The correct answer is A."
      },
      {
        "id": "q17-2",
        "question": "Which is a good email safety habit?",
        "options": [
          "Using the same password as Facebook",
          "Using a unique, strong password + MFA",
          "Sharing your login with friends",
          "Not using a password"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q17-3",
        "question": "What should you check in your email settings regularly?",
        "options": [
          "The background color",
          "The \"Recovery\" email and phone number",
          "The font size",
          "The number of sent emails"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-18",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "ACCOUNT RECOVERY METHODS",
    "level": "Beginner",
    "icon": "EyeOff",
    "overview": "Learn the essentials of ACCOUNT RECOVERY METHODS and how to protect yourself.",
    "simpleExplanation": "Your \"Emergency Backup\" plan.",
    "whyItMatters": "You will eventually forget a password or lose a phone.",
    "explanation": "Set up \"Recovery Codes\" and print them out. Don't use honest answers for security questions (e.g., Mother's maiden name = \"Blueberry\").",
    "realWorldExample": "Using a \"One-Time Recovery Code\" to get back into Google after losing your phone.",
    "securityTips": [
      "Keep recovery codes in a physical safe or a locked drawer."
    ],
    "summary": "Don't wait until you're locked out to set up your backup.",
    "quiz": [
      {
        "id": "q18-1",
        "question": "What are \"Recovery Codes\"?",
        "options": [
          "Discount codes for shopping",
          "One-time codes used if you lose access to MFA",
          "Programming code",
          "Zip codes"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q18-2",
        "question": "Why should you \"Lie\" on security questions?",
        "options": [
          "It’s fun",
          "Honest answers are easy for hackers to find online",
          "It’s a law",
          "To confuse your family"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q18-3",
        "question": "Where should you store recovery codes?",
        "options": [
          "On a sticky note on your monitor",
          "In a secure, physical location or encrypted vault",
          "In a public folder",
          "On your desktop"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-19",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "AVOIDING ACCOUNT TAKEOVERS",
    "level": "Beginner",
    "icon": "UserCheck",
    "overview": "Learn the essentials of AVOIDING ACCOUNT TAKEOVERS and how to protect yourself.",
    "simpleExplanation": "Stopping the hacker *before* they change your settings.",
    "whyItMatters": "Once a hacker changes your email/password, you are locked out forever.",
    "explanation": "Watch for \"New Login\" emails. If you get one you don't recognize, log in and \"Sign out of all sessions\" immediately.",
    "realWorldExample": "Getting a text from Instagram saying \"Your email has been changed\" and clicking \"Revert\" instantly.",
    "securityTips": [
      "Act fast.",
      "Hackers work quickly once they gain entry."
    ],
    "summary": "Vigilance and speed are your best friends during an attack.",
    "quiz": [
      {
        "id": "q19-1",
        "question": "What is an \"Account Takeover\"?",
        "options": [
          "Deleting your account",
          "A hacker gaining control and locking you out",
          "Buying a new account",
          "Updating your profile"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q19-2",
        "question": "What is a warning sign of a takeover?",
        "options": [
          "Your phone is charging",
          "You get a \"Password Changed\" email you didn't trigger",
          "Your internet is fast",
          "You have new emails"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q19-3",
        "question": "What should you do if you see an unknown device logged into your account?",
        "options": [
          "Nothing",
          "Log it out immediately and change your password",
          "Message the device",
          "Call the police"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-20",
    "chapterId": "ch2",
    "chapterTitle": "Protecting Your Online Accounts",
    "title": "BEST PRACTICES FOR ACCOUNT SAFETY",
    "level": "Beginner",
    "icon": "Database",
    "overview": "Learn the essentials of BEST PRACTICES FOR ACCOUNT SAFETY and how to protect yourself.",
    "simpleExplanation": "Daily habits for a \"Bulletproof\" digital life.",
    "whyItMatters": "Security is a process, not a product.",
    "explanation": "1. Unique Passwords. 2. MFA on everything. 3. Use a Manager. 4. Weekly security reviews. 5. Never click links in emails.",
    "realWorldExample": "A person whose bank account was saved because they had MFA, even though their password was leaked.",
    "securityTips": [
      "Set a \"Security Day\" once a month to check all your accounts."
    ],
    "summary": "Be proactive, not reactive.",
    "quiz": [
      {
        "id": "q20-1",
        "question": "Which is a \"Golden Rule\" of account safety?",
        "options": [
          "Share passwords with family",
          "Use one password for everything",
          "Never reuse passwords",
          "Only use free Wi-Fi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      },
      {
        "id": "q20-2",
        "question": "How often should you review your account security?",
        "options": [
          "Once every 10 years",
          "Never",
          "Regularly (e.g., monthly)",
          "Only after being hacked"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      },
      {
        "id": "q20-3",
        "question": "What is the benefit of a \"Unique Password\"?",
        "options": [
          "It’s easier to type",
          "If one site is hacked, your other accounts are still safe",
          "It makes your monitor brighter",
          "None"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-21",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "WHAT IS PHISHING?",
    "level": "Intermediate",
    "icon": "Shield",
    "overview": "Learn the essentials of WHAT IS PHISHING? and how to protect yourself.",
    "simpleExplanation": "Phishing is a digital scam where hackers \"fish\" for your private information by pretending to be a trustworthy person or company.",
    "whyItMatters": "Phishing is responsible for over 90% of all successful data breaches worldwide. It is the hacker's favorite tool because it is cheap and effective.",
    "explanation": "Unlike technical hacking, phishing targets the \"human operating system.\" Attackers send millions of messages via email, text, or social media, hoping a small percentage of people will click a malicious link or provide a password.",
    "realWorldExample": "Receiving an email that looks exactly like a PayPal notification saying your account is \"Limited\" until you log in to verify your identity.",
    "securityTips": [
      "Never trust the \"From\" name alone.",
      "Use the CREDENTIA Phishing Detector to scan suspicious messages."
    ],
    "summary": "If a message asks for sensitive data or login credentials, it is almost certainly a phishing attempt.",
    "quiz": [
      {
        "id": "q21-1",
        "question": "Where does the term \"Phishing\" come from?",
        "options": [
          "A type of computer code",
          "\"Fishing\" for victims with bait",
          "A brand of server",
          "An ancient myth"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q21-2",
        "question": "What is the main goal of a phisher?",
        "options": [
          "To fix your computer",
          "To steal credentials or money",
          "To send you a gift",
          "To update your software"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q21-3",
        "question": "How do phishers usually reach their victims?",
        "options": [
          "Through physical mail",
          "Through email, SMS, and social media",
          "Through a phone's hardware",
          "By visiting your house"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-22",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "TYPES OF PHISHING ATTACKS",
    "level": "Intermediate",
    "icon": "Key",
    "overview": "Learn the essentials of TYPES OF PHISHING ATTACKS and how to protect yourself.",
    "simpleExplanation": "Phishing isn't just generic emails; it can be highly targeted (Spear Phishing) or aimed at powerful people (Whaling).",
    "whyItMatters": "The more targeted the attack, the harder it is to spot.",
    "explanation": "",
    "realWorldExample": "An employee gets an email that seems to be from their boss, mentioning a specific project they are working on, asking them to \"Review this invoice.\"",
    "securityTips": [
      "Be extra cautious with messages that use personal details you might have posted on LinkedIn or Facebook."
    ],
    "summary": "The more a message knows about you, the more suspicious you should be.",
    "quiz": [
      {
        "id": "q22-1",
        "question": "What is \"Smishing\"?",
        "options": [
          "Small phishing",
          "Phishing via SMS (Text)",
          "Phishing for kids",
          "Deleting a virus"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q22-2",
        "question": "Which type of phishing targets high-ranking executives?",
        "options": [
          "Minnowing",
          "Whaling",
          "Sharking",
          "Hooking"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q22-3",
        "question": "What makes \"Spear Phishing\" different from regular phishing?",
        "options": [
          "It is sent to more people",
          "It uses personal information to target a specific individual",
          "It is only done via phone",
          "It is legal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-23",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "HOW TO IDENTIFY FAKE EMAILS",
    "level": "Intermediate",
    "icon": "Lock",
    "overview": "Learn the essentials of HOW TO IDENTIFY FAKE EMAILS and how to protect yourself.",
    "simpleExplanation": "Learning to spot the \"red flags\" in the anatomy of a scam email.",
    "whyItMatters": "Most people click because they are in a hurry. Knowing what to look for stops the \"reflex click.\"",
    "explanation": "Look for:",
    "realWorldExample": "An email from \"Apple Support\" that has a logo that looks slightly blurry and starts with \"Dear User.\"",
    "securityTips": [
      "Always expand the sender's email address to see the actual domain after the \"@\" symbol."
    ],
    "summary": "Professional companies rarely send emails with typos or generic greetings.",
    "quiz": [
      {
        "id": "q23-1",
        "question": "Which of these is a red flag in an email?",
        "options": [
          "Your real name",
          "A blurry logo and poor grammar",
          "A professional signature",
          "An official domain"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q23-2",
        "question": "What should you check first when you receive a \"security alert\"?",
        "options": [
          "The font size",
          "The sender's actual email address",
          "The time it was sent",
          "Your computer's volume"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q23-3",
        "question": "If an email says \"Act in 10 minutes or your account is deleted,\" what is it using?",
        "options": [
          "Professionalism",
          "Artificial Urgency",
          "Good customer service",
          "Legal authority"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-24",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "DETECTING SUSPICIOUS LINKS",
    "level": "Intermediate",
    "icon": "Smartphone",
    "overview": "Learn the essentials of DETECTING SUSPICIOUS LINKS and how to protect yourself.",
    "simpleExplanation": "A link may look like \"google.com\" but actually lead to \"malware-site.net.\"",
    "whyItMatters": "One click on a hidden link can download a virus or take you to a fake login page.",
    "explanation": "Use the \"Hover\" technique. On a computer, hover your mouse over a link (without clicking) to see the real destination in the bottom corner of your browser. On a phone, press and hold the link to see the preview.",
    "realWorldExample": "A button says \"Click here to see your tax refund,\" but hovering reveals the link goes to \"http://bit.ly/random-scam-123.\"",
    "securityTips": [
      "If a link uses a URL shortener (like bit.ly or tinyurl) and you weren't expecting it, do not click."
    ],
    "summary": "What you see is NOT always where you go. Always verify the destination.",
    "quiz": [
      {
        "id": "q24-1",
        "question": "How can you see where a link leads on a computer without clicking it?",
        "options": [
          "Right-click it",
          "Hover your mouse over it",
          "Print the page",
          "Restart the computer"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q24-2",
        "question": "Why do hackers use \"Link Shorteners\" (like bit.ly)?",
        "options": [
          "To save space",
          "To hide the real destination of a malicious link",
          "To make the internet faster",
          "To improve SEO"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q24-3",
        "question": "What is the safest way to visit a website mentioned in an email?",
        "options": [
          "Click the link provided",
          "Type the official URL directly into your browser",
          "Search for it on social media",
          "Ask a friend"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-25",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "FAKE WEBSITES AND LOGIN PAGES",
    "level": "Intermediate",
    "icon": "Globe",
    "overview": "Learn the essentials of FAKE WEBSITES AND LOGIN PAGES and how to protect yourself.",
    "simpleExplanation": "Websites designed to look identical to real brands (Amazon, Gmail, Bank) to steal your username and password.",
    "whyItMatters": "If you enter your password on a fake page, the hacker has it instantly.",
    "explanation": "Look at the URL carefully. Hackers use \"Typosquatting\" (e.g., `amozon.com` instead of `amazon.com`) or \"Homograph\" attacks (using a Cyrillic 'a' that looks exactly like a normal 'a').",
    "realWorldExample": "You click a link for a \"50% off Sale\" and end up at `www.nike-outlets-deals.co`. It looks like Nike, but the URL is wrong.",
    "securityTips": [
      "Look for the padlock, but remember: many fake sites have padlocks now too! The URL domain is the only thing that matters."
    ],
    "summary": "A fake website is a digital trap. Check every letter of the URL before you type anything.",
    "quiz": [
      {
        "id": "q25-1",
        "question": "What is \"Typosquatting\"?",
        "options": [
          "Typing too fast",
          "Registering a domain with a common misspelling of a famous site",
          "Deleting your history",
          "Using a big keyboard"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q25-2",
        "question": "If a website looks real but the URL is `faceb00k.com`, is it safe?",
        "options": [
          "Yes, it's just a new version",
          "No, it’s a fake site using numbers to mimic letters",
          "Only if it has a padlock",
          "Only on mobile"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q25-3",
        "question": "What is a \"Homograph attack\"?",
        "options": [
          "Using characters from different alphabets that look like English letters",
          "Attacking a computer with a graph",
          "Using too many images",
          "Coding a virus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The correct answer is A."
      }
    ]
  },
  {
    "id": "topic-26",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "SOCIAL ENGINEERING ATTACKS",
    "level": "Intermediate",
    "icon": "Mail",
    "overview": "Learn the essentials of SOCIAL ENGINEERING ATTACKS and how to protect yourself.",
    "simpleExplanation": "Hacking the human brain using psychological manipulation.",
    "whyItMatters": "It is often easier to trick a person than to break through a firewall.",
    "explanation": "Hackers use six main principles: Authority (pretending to be a boss), Urgency, Fear, Social Proof (everyone else is doing it), Scarcity, and Liking.",
    "realWorldExample": "A hacker leaves a USB drive in a company parking lot labeled \"CEO Salary Details.\" Curiosity makes an employee plug it in, infecting the whole office.",
    "securityTips": [
      "Be wary of anyone asking for \"favors\" that involve bypassing security rules."
    ],
    "summary": "Your emotions are a hacker's favorite entryway. Stay calm and stay skeptical.",
    "quiz": [
      {
        "id": "q26-1",
        "question": "Social Engineering is an attack on:",
        "options": [
          "Hardware",
          "Software",
          "Human Psychology",
          "The Internet"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The correct answer is C."
      },
      {
        "id": "q26-2",
        "question": "Why might a hacker leave a USB drive in a public place?",
        "options": [
          "They lost it",
          "They want someone to plug it in and infect their computer",
          "It’s a gift",
          "To test the USB port"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q26-3",
        "question": "Which of these is a common social engineering tactic?",
        "options": [
          "Improving Wi-Fi",
          "Pretending to be an IT technician",
          "Updating your BIOS",
          "Cleaning your screen"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-27",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "SCAM MESSAGES AND FRAUD CALLS",
    "level": "Intermediate",
    "icon": "AlertTriangle",
    "overview": "Learn the essentials of SCAM MESSAGES AND FRAUD CALLS and how to protect yourself.",
    "simpleExplanation": "Phishing via phone calls (Vishing) and text messages (Smishing).",
    "whyItMatters": "People are more likely to trust a voice or a text than an email.",
    "explanation": "Fraud calls often use \"Caller ID Spoofing\" to make it look like they are calling from your local police station or bank. They use high-pressure tactics to get you to send money or reveal your Social Security Number.",
    "realWorldExample": "A text message from \"USPS\" saying your package is \"on hold\" and you must pay a $1 re-delivery fee. They just want your credit card info.",
    "securityTips": [
      "If you get a suspicious call, hang up and call the official number on the back of your bank card."
    ],
    "summary": "If a caller asks for payment via \"Gift Cards\" or \"Crypto,\" it is 100% a scam.",
    "quiz": [
      {
        "id": "q27-1",
        "question": "What is \"Vishing\"?",
        "options": [
          "Very fast phishing",
          "Phishing via voice calls",
          "Phishing for videos",
          "Visual phishing"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q27-2",
        "question": "What is \"Caller ID Spoofing\"?",
        "options": [
          "Buying a new phone",
          "Making a call appear to come from a different number",
          "Blocking your number",
          "Recording a call"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q27-3",
        "question": "A caller asks you to pay a \"fine\" using Amazon Gift Cards. What should you do?",
        "options": [
          "Buy the cards",
          "Hang up immediately—it's a scam",
          "Give them your bank info instead",
          "Ask for a discount"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-28",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "MALWARE AND VIRUSES EXPLAINED",
    "level": "Intermediate",
    "icon": "EyeOff",
    "overview": "Learn the essentials of MALWARE AND VIRUSES EXPLAINED and how to protect yourself.",
    "simpleExplanation": "Malware is \"Malicious Software\" designed to steal data, spy on you, or destroy your system.",
    "whyItMatters": "Malware can sit silently on your device for months, recording every keystroke.",
    "explanation": "",
    "realWorldExample": "You download a \"Free Game\" from a random site. The game works, but it secretly installs a \"Keylogger\" that records your bank password.",
    "securityTips": [
      "Use reputable antivirus software and never disable your firewall."
    ],
    "summary": "Only download software from official, verified sources.",
    "quiz": [
      {
        "id": "q28-1",
        "question": "What is a \"Trojan Horse\" in cybersecurity?",
        "options": [
          "A fast computer",
          "Malware disguised as a legitimate program",
          "A type of firewall",
          "A hardware device"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q28-2",
        "question": "What does \"Spyware\" do?",
        "options": [
          "Speeds up your PC",
          "Monitors your activity and steals data",
          "Cleans your hard drive",
          "Fixes bugs"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q28-3",
        "question": "How does a \"Worm\" differ from a \"Virus\"?",
        "options": [
          "It is smaller",
          "It can spread itself across a network without human help",
          "It is only on Macs",
          "It is not dangerous"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-29",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "RANSOMWARE BASICS",
    "level": "Intermediate",
    "icon": "UserCheck",
    "overview": "Learn the essentials of RANSOMWARE BASICS and how to protect yourself.",
    "simpleExplanation": "A type of malware that locks (encrypts) all your files and demands you pay a \"ransom\" to get them back.",
    "whyItMatters": "For businesses and individuals, this can mean losing years of work, photos, and data forever.",
    "explanation": "Once inside, ransomware spreads quickly. It usually demands payment in Cryptocurrency (like Bitcoin) because it is hard to track. Even if you pay, there is NO guarantee the hacker will give you the key.",
    "realWorldExample": "You wake up to a red screen on your computer saying all your family photos are encrypted and you must pay $500 to a specific address.",
    "securityTips": [
      "The only 100% protection against ransomware is having an \"Offline Backup\" (a hard drive not plugged into the computer)."
    ],
    "summary": "Never pay the ransom. Back up your data instead.",
    "quiz": [
      {
        "id": "q29-1",
        "question": "What does Ransomware do to your files?",
        "options": [
          "Deletes them",
          "Encrypts (locks) them",
          "Makes them public",
          "Renames them"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q29-2",
        "question": "Why do hackers want payment in Cryptocurrency?",
        "options": [
          "It’s faster",
          "It’s difficult for police to track",
          "It’s worth more",
          "It’s legal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q29-3",
        "question": "What is the best defense against Ransomware?",
        "options": [
          "A bigger monitor",
          "Regular offline backups",
          "A faster keyboard",
          "Deleting your history"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-30",
    "chapterId": "ch3",
    "chapterTitle": "Identifying Online Threats",
    "title": "SAFE DOWNLOAD PRACTICES",
    "level": "Intermediate",
    "icon": "Database",
    "overview": "Learn the essentials of SAFE DOWNLOAD PRACTICES and how to protect yourself.",
    "simpleExplanation": "Ensuring that the files you bring onto your device are clean and safe.",
    "whyItMatters": "Downloading is the primary way malware enters a computer.",
    "explanation": "Only use official stores (App Store, Play Store). Avoid \"Cracked\" or \"Pirated\" software—these are almost always infected with Trojans. Before opening a downloaded file, right-click and \"Scan with Antivirus.\"",
    "realWorldExample": "Downloading a \"Free Version\" of Adobe Photoshop from a torrent site and finding out it includes a \"Backdoor\" for hackers.",
    "securityTips": [
      "Check the file extension.",
      "A file named `Vacation_Photos.jpg.exe` is a virus, not a picture!."
    ],
    "summary": "If the software is usually expensive but you found it for \"free,\" the price is your security.",
    "quiz": [
      {
        "id": "q30-1",
        "question": "Which is the safest place to download an app?",
        "options": [
          "A random blog",
          "The official App Store/Play Store",
          "A pop-up ad",
          "A shared USB drive"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q30-2",
        "question": "What is a \"Cracked\" software?",
        "options": [
          "A broken CD",
          "Paid software modified to be free (often contains malware)",
          "Old software",
          "Faster software"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q30-3",
        "question": "If a file has a double extension like `movie.mp4.exe`, what is it?",
        "options": [
          "A high-quality movie",
          "A virus disguised as a movie",
          "A system file",
          "A shortcut"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-31",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "SECURE BROWSING HABITS",
    "level": "Intermediate",
    "icon": "Shield",
    "overview": "Learn the essentials of SECURE BROWSING HABITS and how to protect yourself.",
    "simpleExplanation": "Using the web in a way that minimizes your exposure to threats.",
    "whyItMatters": "Your browser is your window to the world, but it can also be a door for hackers.",
    "explanation": "Use \"Private\" or \"Incognito\" mode to prevent your browser from saving history or cookies on shared devices. Regularly clear your cache and cookies. Avoid \"Save Password\" on public computers.",
    "realWorldExample": "Logging into your bank at a library and forgetting to log out, leaving your session open for the next person.",
    "securityTips": [
      "Use browser extensions like \"uBlock Origin\" to block malicious ads."
    ],
    "summary": "Browse like everyone is watching your screen.",
    "quiz": [
      {
        "id": "q31-1",
        "question": "What does \"Incognito Mode\" do?",
        "options": [
          "Makes you invisible to hackers",
          "Stops the browser from saving history and cookies",
          "Increases your RAM",
          "Gives you free Wi-Fi"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q31-2",
        "question": "What are \"Cookies\" in browsing?",
        "options": [
          "Digital snacks",
          "Small files that store your login and site data",
          "Viruses",
          "Browser updates"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q31-3",
        "question": "Why should you clear your browser history regularly?",
        "options": [
          "To save disk space",
          "To remove sensitive data that could be stolen",
          "To make the internet faster",
          "To fix your monitor"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-32",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "RISKS OF PUBLIC WI-FI",
    "level": "Intermediate",
    "icon": "Key",
    "overview": "Learn the essentials of RISKS OF PUBLIC WI-FI and how to protect yourself.",
    "simpleExplanation": "Using free Wi-Fi at airports or cafes is like talking loudly in a crowded room—everyone can listen.",
    "whyItMatters": "Hackers can set up \"Evil Twin\" hotspots to steal your data as it travels through the air.",
    "explanation": "On an unencrypted public Wi-Fi, a hacker using a \"Packet Sniffer\" can see exactly what you are doing online. They can capture passwords, credit card numbers, and private messages.",
    "realWorldExample": "You connect to \"Free_Airport_WiFi\" and log into your email. A hacker nearby captures your login details because the Wi-Fi had no password.",
    "securityTips": [
      "Never do banking or shopping on public Wi-Fi.",
      "Use your phone's cellular data instead."
    ],
    "summary": "If the Wi-Fi is free, you might be the \"product\" being stolen.",
    "quiz": [
      {
        "id": "q32-1",
        "question": "What is an \"Evil Twin\" attack?",
        "options": [
          "A virus that clones files",
          "A fake Wi-Fi hotspot designed to look like a real one",
          "A type of computer",
          "A physical theft"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q32-2",
        "question": "What tool do hackers use to \"listen\" to your Wi-Fi traffic?",
        "options": [
          "A Packet Sniffer",
          "A Wi-Fi booster",
          "A Digital Radio",
          "A browser extension"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The correct answer is A."
      },
      {
        "id": "q32-3",
        "question": "Which activity is safest to do on public Wi-Fi?",
        "options": [
          "Online banking",
          "Checking the weather on a news site",
          "Buying a plane ticket",
          "Logging into your company portal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-33",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "USING VPN FOR SECURITY",
    "level": "Intermediate",
    "icon": "Lock",
    "overview": "Learn the essentials of USING VPN FOR SECURITY and how to protect yourself.",
    "simpleExplanation": "A VPN (Virtual Private Network) creates a \"secure tunnel\" for your data, making it unreadable to anyone else.",
    "whyItMatters": "It protects you on public Wi-Fi and hides your location from websites.",
    "explanation": "A VPN encrypts your data before it even leaves your device. Even if a hacker intercepts it, they will only see gibberish. It also hides your IP address, making it harder for advertisers and hackers to track your physical location.",
    "realWorldExample": "You are in a cafe using a VPN. A hacker tries to steal your data, but all they see is scrambled, encrypted code.",
    "securityTips": [
      "Avoid \"Free VPNs\"—they often sell your data to make money.",
      "Use a trusted, paid service."
    ],
    "summary": "A VPN is your personal armored car on the digital highway.",
    "quiz": [
      {
        "id": "q33-1",
        "question": "What does a VPN do to your data?",
        "options": [
          "Deletes it",
          "Encrypts it in a secure tunnel",
          "Makes it public",
          "Speeds it up"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q33-2",
        "question": "What does a VPN hide from websites?",
        "options": [
          "Your name",
          "Your IP address and location",
          "Your battery level",
          "Your keyboard type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q33-3",
        "question": "Should you use a \"Free\" VPN for sensitive work?",
        "options": [
          "Yes, it's a good deal",
          "No, they often track and sell your data",
          "Only if it's fast",
          "Only on a Mac"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-34",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "SOFTWARE UPDATES AND WHY THEY MATTER",
    "level": "Intermediate",
    "icon": "Smartphone",
    "overview": "Learn the essentials of SOFTWARE UPDATES AND WHY THEY MATTER and how to protect yourself.",
    "simpleExplanation": "Updates aren't just for new features; they are \"patches\" that fix holes in your security.",
    "whyItMatters": "Hackers love \"Zero-Day\" vulnerabilities—holes that the company hasn't fixed yet.",
    "explanation": "When a company like Apple or Microsoft finds a security bug, they release an update to fix it. If you don't update, your computer is left with an \"open window\" that hackers already know how to climb through.",
    "realWorldExample": "The \"WannaCry\" ransomware attack in 2017 only infected computers that hadn't installed a specific security update from months earlier.",
    "securityTips": [
      "Enable \"Automatic Updates\" on your phone and computer."
    ],
    "summary": "An unpatched computer is an invitation to a hacker.",
    "quiz": [
      {
        "id": "q34-1",
        "question": "Why do companies release security \"patches\"?",
        "options": [
          "To change the icons",
          "To fix vulnerabilities that hackers could use",
          "To make you buy a new PC",
          "To slow down your device"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q34-2",
        "question": "What is a \"Zero-Day\" vulnerability?",
        "options": [
          "A virus that lasts one day",
          "A security hole that is known to hackers but not yet fixed by the company",
          "A new computer",
          "A fast update"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q34-3",
        "question": "How often should you update your software?",
        "options": [
          "Once a year",
          "As soon as an update is available",
          "Never",
          "Only if the computer breaks"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-35",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "ANTIVIRUS AND SYSTEM PROTECTION",
    "level": "Intermediate",
    "icon": "Globe",
    "overview": "Learn the essentials of ANTIVIRUS AND SYSTEM PROTECTION and how to protect yourself.",
    "simpleExplanation": "A security guard for your computer that scans files for \"bad DNA\" (malware).",
    "whyItMatters": "It can stop an attack in real-time before it infects your files.",
    "explanation": "Modern antivirus uses \"Heuristics\"—it doesn't just look for known viruses, it looks for \"suspicious behavior\" (like a program trying to encrypt all your files at once).",
    "realWorldExample": "You accidentally download a malicious file. Your antivirus pops up a red alert and moves the file to \"Quarantine\" before you can even open it.",
    "securityTips": [
      "Never have two antivirus programs running at once; they will fight each other and slow you down."
    ],
    "summary": "Antivirus is your last line of defense. Keep it turned on and updated.",
    "quiz": [
      {
        "id": "q35-1",
        "question": "What does it mean when an antivirus \"Quarantines\" a file?",
        "options": [
          "It deletes it",
          "It moves it to a safe, isolated area where it can't run",
          "It repairs the file",
          "It shares the file"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q35-2",
        "question": "What is \"Heuristic Analysis\" in antivirus?",
        "options": [
          "Scanning for known names",
          "Looking for suspicious behavior in programs",
          "Speeding up the CPU",
          "Cleaning the registry"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q35-3",
        "question": "Is Windows Defender (built-in) enough for most people?",
        "options": [
          "No, it's useless",
          "Yes, it is a very strong and capable antivirus",
          "Only if you don't use the internet",
          "Only on laptops"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-36",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "PROTECTING MOBILE DEVICES",
    "level": "Intermediate",
    "icon": "Mail",
    "overview": "Learn the essentials of PROTECTING MOBILE DEVICES and how to protect yourself.",
    "simpleExplanation": "Your phone is a pocket-sized computer that contains your entire life. It needs the same protection as a PC.",
    "whyItMatters": "Phones are easily lost or stolen.",
    "explanation": "Use strong biometrics (FaceID/Fingerprint) and a 6-digit PIN. Enable \"Find My Device\" so you can track it or \"Remote Wipe\" all your data if it's stolen.",
    "realWorldExample": "You leave your phone in a taxi. Because you enabled \"Remote Wipe,\" you log in from a computer and erase your banking apps and photos before the driver can get in.",
    "securityTips": [
      "Be careful with \"App Permissions\"—does a Calculator app really need access to your Location?."
    ],
    "summary": "A phone without a passcode is a gift to a thief.",
    "quiz": [
      {
        "id": "q36-1",
        "question": "What does \"Remote Wipe\" do?",
        "options": [
          "Cleans your screen",
          "Erases all data from a lost or stolen device via the internet",
          "Updates your apps",
          "Restarts your phone"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q36-2",
        "question": "Why is a 6-digit PIN better than a 4-digit PIN?",
        "options": [
          "It's easier to remember",
          "It's much harder for a thief to guess",
          "It makes the screen brighter",
          "It's required by Google"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q36-3",
        "question": "What is a \"Biometric\" lock?",
        "options": [
          "A physical key",
          "Using your face, fingerprint, or iris to unlock a device",
          "A long password",
          "A voice command"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-37",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "SECURE FILE SHARING",
    "level": "Intermediate",
    "icon": "AlertTriangle",
    "overview": "Learn the essentials of SECURE FILE SHARING and how to protect yourself.",
    "simpleExplanation": "Sending files to others without letting hackers intercept them.",
    "whyItMatters": "Sending sensitive files (like a passport scan) via regular email is like sending a postcard—anyone can read it.",
    "explanation": "Use encrypted cloud services (Google Drive, OneDrive, Dropbox). When sharing a link, set it to \"View Only\" and add an \"Expiry Date\" or a \"Password\" to the link.",
    "realWorldExample": "You share a folder with a co-worker. Instead of \"Public,\" you set the link so only their specific email address can open it.",
    "securityTips": [
      "Once the person has the file, \"Revoke\" the access so the link stops working."
    ],
    "summary": "Share only what is necessary, with only the people who need it, for only as long as they need it.",
    "quiz": [
      {
        "id": "q37-1",
        "question": "What is the risk of \"Public\" file sharing links?",
        "options": [
          "They are too slow",
          "Anyone with the link (including hackers) can see your files",
          "They use too much data",
          "They delete your files"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q37-2",
        "question": "What does \"View Only\" permission do?",
        "options": [
          "Allows the person to edit the file",
          "Allows the person to see but not change the file",
          "Hides the file",
          "Deletes the file"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q37-3",
        "question": "Why should you add an \"Expiry Date\" to a shared link?",
        "options": [
          "To save storage",
          "To ensure the link stops working after a certain time for better security",
          "To make it faster",
          "To follow the law"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-38",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "DATA BACKUP STRATEGIES",
    "level": "Intermediate",
    "icon": "EyeOff",
    "overview": "Learn the essentials of DATA BACKUP STRATEGIES and how to protect yourself.",
    "simpleExplanation": "Keeping extra copies of your important data so you don't lose it if your device breaks or is hacked.",
    "whyItMatters": "Hardware fails and Ransomware happens. A backup is your \"Reset Button.\"",
    "explanation": "Follow the \"3-2-1 Rule\":",
    "realWorldExample": "Your laptop is stolen. You buy a new one, log into your Cloud Backup, and all your files are back in 30 minutes.",
    "securityTips": [
      "Test your backups! A backup that doesn't work is not a backup."
    ],
    "summary": "If your data doesn't exist in two places, it doesn't exist.",
    "quiz": [
      {
        "id": "q38-1",
        "question": "What is the \"3-2-1 Rule\" of backups?",
        "options": [
          "3 devices, 2 passwords, 1 email",
          "3 copies, 2 media types, 1 offsite copy",
          "3 days, 2 hours, 1 minute",
          "3 hackers, 2 firewalls, 1 PC"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q38-2",
        "question": "Why is a \"Cloud\" backup useful?",
        "options": [
          "It's free",
          "It can be accessed from anywhere and is safe if your house burns down",
          "it makes your PC faster",
          "It cleans your files"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q38-3",
        "question": "What is an \"Offline\" backup?",
        "options": [
          "A backup on a drive that is NOT connected to the internet",
          "A backup on your desktop",
          "A printed copy",
          "A backup that failed"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The correct answer is A."
      }
    ]
  },
  {
    "id": "topic-39",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "DEVICE ENCRYPTION BASICS",
    "level": "Intermediate",
    "icon": "UserCheck",
    "overview": "Learn the essentials of DEVICE ENCRYPTION BASICS and how to protect yourself.",
    "simpleExplanation": "Scrambling all the data on your hard drive so it can only be read with your password.",
    "whyItMatters": "If a thief steals your laptop, they can't see your files even if they take the hard drive out.",
    "explanation": "Most modern devices have this built-in (BitLocker for Windows, FileVault for Mac). Encryption ensures that without the \"Key,\" your data looks like random junk.",
    "realWorldExample": "A criminal steals a company laptop. They try to plug the drive into their own PC to read the files, but they only see encrypted gibberish.",
    "securityTips": [
      "Make sure your \"Recovery Key\" is stored somewhere safe, NOT on the device itself!."
    ],
    "summary": "Encryption is the ultimate vault for your physical hardware.",
    "quiz": [
      {
        "id": "q39-1",
        "question": "What does encryption do to your hard drive?",
        "options": [
          "Deletes it",
          "Scrambles data into an unreadable format without a key",
          "Speeds it up",
          "Makes it bigger"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q39-2",
        "question": "What is \"BitLocker\"?",
        "options": [
          "A type of virus",
          "Windows' built-in disk encryption tool",
          "A password manager",
          "A hardware part"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q39-3",
        "question": "What happens if you lose your \"Encryption Key\"?",
        "options": [
          "You get a new one",
          "Your data is lost forever",
          "The computer works faster",
          "You call Microsoft"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-40",
    "chapterId": "ch4",
    "chapterTitle": "Safe Browsing & Device Security",
    "title": "PREVENTING UNAUTHORIZED ACCESS",
    "level": "Intermediate",
    "icon": "Database",
    "overview": "Learn the essentials of PREVENTING UNAUTHORIZED ACCESS and how to protect yourself.",
    "simpleExplanation": "Physical security for your digital devices.",
    "whyItMatters": "A hacker doesn't need to code if they can just walk up to your unlocked desk.",
    "explanation": "Always lock your screen when you walk away (Windows Key + L). Use \"Privacy Screens\" on laptops to prevent \"Shoulder Surfing.\" Never leave your devices unattended in public.",
    "realWorldExample": "An employee goes to get coffee and leaves their PC unlocked. A stranger walks by and plugs in a \"Rubber Ducky\" USB that steals all their passwords in 5 seconds.",
    "securityTips": [
      "Disable \"Auto-Run\" for USB drives so they don't start programs automatically."
    ],
    "summary": "Digital security starts with physical awareness.",
    "quiz": [
      {
        "id": "q40-1",
        "question": "What is the shortcut to lock a Windows computer?",
        "options": [
          "Alt + F4",
          "Win + L",
          "Ctrl + C",
          "Shift + Tab"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q40-2",
        "question": "What is \"Shoulder Surfing\"?",
        "options": [
          "Surfing the web at the beach",
          "Someone watching your screen over your shoulder to steal info",
          "A type of virus",
          "A fast login"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q40-3",
        "question": "Why should you use a \"Privacy Screen\" protector?",
        "options": [
          "To protect from scratches",
          "To make the screen visible only to the person directly in front of it",
          "To make it brighter",
          "To fix dead pixels"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-41",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "WHAT IS A DIGITAL FOOTPRINT?",
    "level": "Advanced",
    "icon": "Shield",
    "overview": "Learn the essentials of WHAT IS A DIGITAL FOOTPRINT? and how to protect yourself.",
    "simpleExplanation": "Everything you do online leaves a permanent trail of data—your \"Digital Footprint.\"",
    "whyItMatters": "This data is collected, analyzed, and sold by companies, and it can be used by hackers to target you.",
    "explanation": "",
    "realWorldExample": "You search for \"running shoes\" on Google. For the next week, every website you visit shows you ads for running shoes.",
    "securityTips": [
      "Regularly search your own name on Google to see what information is publicly available about you."
    ],
    "summary": "The internet never forgets. Think before you click, post, or share.",
    "quiz": [
      {
        "id": "q41-1",
        "question": "What is an \"Active\" digital footprint?",
        "options": [
          "Data collected secretly",
          "Information you intentionally share online",
          "Your shoe size",
          "A fast internet connection"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q41-2",
        "question": "What is a \"Passive\" digital footprint?",
        "options": [
          "A slow computer",
          "Data collected about you without your direct knowledge (like browsing history)",
          "A deleted file",
          "A private message"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q41-3",
        "question": "Why should you search your own name online?",
        "options": [
          "To get famous",
          "To see what public information is available about you",
          "To find friends",
          "To test your keyboard"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-42",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "SOCIAL MEDIA PRIVACY SETTINGS",
    "level": "Advanced",
    "icon": "Key",
    "overview": "Learn the essentials of SOCIAL MEDIA PRIVACY SETTINGS and how to protect yourself.",
    "simpleExplanation": "Controlling who can see your posts, photos, and personal details on platforms like Instagram, Facebook, and TikTok.",
    "whyItMatters": "Default settings usually make your profile public, exposing you to stalkers, identity thieves, and scammers.",
    "explanation": "Go into the \"Privacy and Security\" settings of every app. Change your profile to \"Private.\" Restrict who can send you friend requests and who can tag you in photos.",
    "realWorldExample": "A hacker finds your public Facebook profile, sees your pet's name is \"Buster,\" and uses that to guess your password.",
    "securityTips": [
      "Never share your phone number or home address on your public profile."
    ],
    "summary": "If your profile is public, you are sharing your life with billions of strangers.",
    "quiz": [
      {
        "id": "q42-1",
        "question": "What is the default privacy setting for most social media accounts?",
        "options": [
          "Private",
          "Public",
          "Hidden",
          "Deleted"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q42-2",
        "question": "Why is it dangerous to have a public profile?",
        "options": [
          "It uses too much data",
          "It exposes personal details that hackers can use to steal your identity",
          "It makes your phone slow",
          "It costs money"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q42-3",
        "question": "What should you do with your privacy settings?",
        "options": [
          "Leave them as default",
          "Change them to \"Private\" and restrict who can see your info",
          "Turn them off",
          "Share them"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-43",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "OVERSHARING AND ITS RISKS",
    "level": "Advanced",
    "icon": "Lock",
    "overview": "Learn the essentials of OVERSHARING AND ITS RISKS and how to protect yourself.",
    "simpleExplanation": "Posting too much personal information online, often without realizing the consequences.",
    "whyItMatters": "Oversharing gives attackers the puzzle pieces they need to steal your identity or answer your security questions.",
    "explanation": "Avoid posting photos of your driver's license, boarding passes (the barcodes contain your info), or the front of your house. Don't announce when you are going on vacation (it tells burglars your house is empty).",
    "realWorldExample": "You post a picture of your new car with the license plate visible. A stalker uses the plate number to find your home address.",
    "securityTips": [
      "Wait until you return from a trip to post the vacation photos."
    ],
    "summary": "Share the experience, not the evidence.",
    "quiz": [
      {
        "id": "q43-1",
        "question": "What is \"Oversharing\"?",
        "options": [
          "Sharing a large file",
          "Posting too much personal or sensitive information online",
          "Using too much Wi-Fi",
          "Having too many friends"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q43-2",
        "question": "Why is it dangerous to post a picture of your boarding pass?",
        "options": [
          "It's illegal",
          "The barcode contains sensitive personal information",
          "It makes the plane heavy",
          "It wastes ink"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q43-3",
        "question": "When is the safest time to post vacation photos?",
        "options": [
          "While you are at the airport",
          "After you have returned home",
          "While you are at the hotel",
          "Never"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-44",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "DATA BROKERS AND HOW TO OPT OUT",
    "level": "Advanced",
    "icon": "Smartphone",
    "overview": "Learn the essentials of DATA BROKERS AND HOW TO OPT OUT and how to protect yourself.",
    "simpleExplanation": "Companies that collect your personal data from public records and sell it to advertisers or anyone willing to pay.",
    "whyItMatters": "Your data is being sold without your explicit consent, increasing your risk of spam and identity theft.",
    "explanation": "Data brokers scrape information from social media, property records, and online purchases to build a detailed profile of you. You have the right to \"Opt-Out\" and request they delete your data.",
    "realWorldExample": "You start getting junk mail and spam calls for a specific medical condition you only searched for once. A data broker sold that search history.",
    "securityTips": [
      "Use services like \"DeleteMe\" or manually submit opt-out requests to major data brokers like Spokeo or Whitepages."
    ],
    "summary": "Your data is a product. Take control of who is selling it.",
    "quiz": [
      {
        "id": "q44-1",
        "question": "What does a \"Data Broker\" do?",
        "options": [
          "Fixes computers",
          "Collects and sells your personal information",
          "Sells internet access",
          "Deletes viruses"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q44-2",
        "question": "Where do data brokers get your information?",
        "options": [
          "From the government only",
          "From public records, social media, and online purchases",
          "From your friends",
          "From your dreams"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q44-3",
        "question": "What is an \"Opt-Out\" request?",
        "options": [
          "Asking a company to delete your data and stop selling it",
          "Quitting a job",
          "Turning off your computer",
          "Deleting an app"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The correct answer is A."
      }
    ]
  },
  {
    "id": "topic-45",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "UNDERSTANDING APP PERMISSIONS",
    "level": "Advanced",
    "icon": "Globe",
    "overview": "Learn the essentials of UNDERSTANDING APP PERMISSIONS and how to protect yourself.",
    "simpleExplanation": "The access rights you grant to an app on your phone (e.g., Camera, Microphone, Location, Contacts).",
    "whyItMatters": "Many apps ask for more permissions than they need so they can collect and sell your data.",
    "explanation": "A flashlight app does not need access to your contacts or your location. Always review permissions before installing an app. Use \"Allow only while using the app\" for location services.",
    "realWorldExample": "A free weather app asks for access to your microphone. It uses it to listen to the TV shows you watch and sells that data to advertisers.",
    "securityTips": [
      "Regularly review the permissions in your phone's settings and revoke access for apps you don't use often."
    ],
    "summary": "If an app asks for a permission it doesn't need to function, deny it.",
    "quiz": [
      {
        "id": "q45-1",
        "question": "Why might a free game ask for access to your contacts?",
        "options": [
          "To improve graphics",
          "To collect and sell your friends' data",
          "To save your game",
          "To make the game faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q45-2",
        "question": "What is the safest setting for Location permissions?",
        "options": [
          "Always Allow",
          "Allow only while using the app",
          "Never Allow",
          "Ask every time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q45-3",
        "question": "What should you do if a Flashlight app asks for Microphone access?",
        "options": [
          "Allow it",
          "Deny it, because it doesn't need it to function",
          "Delete your phone",
          "Call the police"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-46",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "THE DANGERS OF QUIZZES AND GAMES",
    "level": "Advanced",
    "icon": "Mail",
    "overview": "Learn the essentials of THE DANGERS OF QUIZZES AND GAMES and how to protect yourself.",
    "simpleExplanation": "Those fun \"What kind of pizza are you?\" quizzes on social media are often data-mining tools.",
    "whyItMatters": "They trick you into giving away the answers to your security questions.",
    "explanation": "Quizzes often ask for your mother's maiden name, your first pet's name, or the street you grew up on. These are the exact questions banks use to verify your identity.",
    "realWorldExample": "You take a quiz called \"Find your Royal Name!\" which asks for your first pet's name and the street you lived on. A hacker uses those answers to reset your email password.",
    "securityTips": [
      "Never participate in social media trends that ask for personal historical facts."
    ],
    "summary": "If a quiz asks for personal details, it's not a game; it's an interrogation.",
    "quiz": [
      {
        "id": "q46-1",
        "question": "Why are social media quizzes often dangerous?",
        "options": [
          "They are boring",
          "They trick you into revealing answers to common security questions",
          "They use too much battery",
          "They are illegal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q46-2",
        "question": "What kind of information do these quizzes usually ask for?",
        "options": [
          "Your favorite color",
          "Personal historical facts (first pet, hometown)",
          "Your shoe size",
          "Your opinion on movies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q46-3",
        "question": "What should you do if a quiz asks for your mother's maiden name?",
        "options": [
          "Answer honestly",
          "Stop taking the quiz immediately",
          "Give a fake name",
          "Share the quiz"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-47",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "PROTECTING YOUR LOCATION DATA",
    "level": "Advanced",
    "icon": "AlertTriangle",
    "overview": "Learn the essentials of PROTECTING YOUR LOCATION DATA and how to protect yourself.",
    "simpleExplanation": "Stopping apps and services from tracking exactly where you are at all times.",
    "whyItMatters": "Location data reveals your daily routine, where you live, where you work, and when your house is empty.",
    "explanation": "Turn off \"Location Services\" globally when you don't need them. Disable \"Geotagging\" in your camera app so your photos don't contain hidden GPS coordinates.",
    "realWorldExample": "You post a photo of your new TV on Twitter. A burglar downloads the photo, extracts the hidden GPS data (EXIF data), and knows exactly where you live.",
    "securityTips": [
      "Check your phone's settings to see which apps have tracked your location in the last 24 hours."
    ],
    "summary": "Your location is your physical security. Don't broadcast it.",
    "quiz": [
      {
        "id": "q47-1",
        "question": "What is \"Geotagging\"?",
        "options": [
          "Tagging a friend in a post",
          "Adding hidden GPS coordinates to a photo or post",
          "A type of game",
          "A fast internet connection"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q47-2",
        "question": "Why is it dangerous to share your real-time location online?",
        "options": [
          "It uses data",
          "It tells criminals exactly where you are (and where you aren't)",
          "It drains the battery",
          "It's illegal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q47-3",
        "question": "How can you stop photos from saving your location?",
        "options": [
          "Delete the photos",
          "Disable location access for your Camera app",
          "Use a different phone",
          "Take photos indoors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-48",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "MANAGING COOKIES AND TRACKERS",
    "level": "Advanced",
    "icon": "EyeOff",
    "overview": "Learn the essentials of MANAGING COOKIES AND TRACKERS and how to protect yourself.",
    "simpleExplanation": "Taking control of the small files websites use to remember you and track your behavior across the internet.",
    "whyItMatters": "Trackers build a profile of your interests, politics, and health issues to target you with hyper-specific ads.",
    "explanation": "\"First-party cookies\" are useful (they keep you logged in). \"Third-party cookies\" are used by advertisers to track you across different websites.",
    "realWorldExample": "You look at a pair of shoes on Site A, and then see an ad for those exact shoes on Site B, C, and D. That is a third-party tracker at work.",
    "securityTips": [
      "Set your browser to \"Block Third-Party Cookies\" and use a privacy-focused browser like Brave or Firefox."
    ],
    "summary": "You have the right to browse without being followed.",
    "quiz": [
      {
        "id": "q48-1",
        "question": "What is the difference between a first-party and third-party cookie?",
        "options": [
          "First-party is faster",
          "First-party keeps you logged in; third-party tracks you across other sites",
          "Third-party is illegal",
          "First-party is for games"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q48-2",
        "question": "How do advertisers know what you looked at on a different website?",
        "options": [
          "They guess",
          "They use third-party tracking cookies",
          "They ask your friends",
          "They hack your computer"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q48-3",
        "question": "What is the best way to stop cross-site tracking?",
        "options": [
          "Turn off your monitor",
          "Set your browser to block third-party cookies",
          "Delete your history",
          "Use a smaller keyboard"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-49",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "THE RIGHT TO BE FORGOTTEN",
    "level": "Advanced",
    "icon": "UserCheck",
    "overview": "Learn the essentials of THE RIGHT TO BE FORGOTTEN and how to protect yourself.",
    "simpleExplanation": "The legal right (in some regions like the EU under GDPR) to ask companies to delete your personal data.",
    "whyItMatters": "It gives you control over your past and allows you to remove outdated or embarrassing information from search engines.",
    "explanation": "You can submit a request to Google to remove search results that contain your personal information (like your address or phone number) or images of you.",
    "realWorldExample": "An old news article contains your personal address. You submit a \"Right to be Forgotten\" request to Google, and they remove the link from their search results.",
    "securityTips": [
      "Even if you don't live in the EU, many companies offer data deletion tools globally.",
      "Look for \"Privacy Center\" or \"Data Request\" at the bottom of a website."
    ],
    "summary": "You don't have to live with your digital past forever.",
    "quiz": [
      {
        "id": "q49-1",
        "question": "What does the \"Right to be Forgotten\" allow you to do?",
        "options": [
          "Forget your password",
          "Request that companies delete your personal data or remove it from search results",
          "Delete other people's data",
          "Ignore laws"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q49-2",
        "question": "Which major privacy law introduced this concept?",
        "options": [
          "The US Constitution",
          "GDPR (General Data Protection Regulation) in the EU",
          "The Internet Act",
          "The Tech Bill"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q49-3",
        "question": "Can you ask Google to remove your personal phone number from search results?",
        "options": [
          "No, never",
          "Yes, by submitting a removal request",
          "Only if you pay them",
          "Only if you are famous"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-50",
    "chapterId": "ch5",
    "chapterTitle": "Data Privacy & Digital Footprint",
    "title": "SECURING YOUR SMART HOME (IoT)",
    "level": "Advanced",
    "icon": "Database",
    "overview": "Learn the essentials of SECURING YOUR SMART HOME (IoT) and how to protect yourself.",
    "simpleExplanation": "Protecting internet-connected devices like smart TVs, cameras, and thermostats (the Internet of Things).",
    "whyItMatters": "These devices often have weak security and can be used by hackers to spy on you or attack other networks.",
    "explanation": "Always change the default password on your smart devices. Put them on a separate \"Guest Wi-Fi\" network so if they get hacked, the attacker can't reach your main computer.",
    "realWorldExample": "A hacker guesses the default password (\"admin\") on a family's smart baby monitor and uses it to yell at the child.",
    "securityTips": [
      "If a smart device doesn't need to be connected to the internet to work (like a smart fridge), don't connect it."
    ],
    "summary": "The \"S\" in IoT stands for Security. (There is no S in IoT—meaning security is often an afterthought).",
    "quiz": [
      {
        "id": "q50-1",
        "question": "What does \"IoT\" stand for?",
        "options": [
          "Internet of Things",
          "Internal Online Tech",
          "International Office Tools",
          "Internet of Time"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The correct answer is A."
      },
      {
        "id": "q50-2",
        "question": "What is the biggest security risk with new smart home devices?",
        "options": [
          "They use too much power",
          "They often come with weak, default passwords that people never change",
          "They are too expensive",
          "They break easily"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q50-3",
        "question": "How can you isolate your smart devices from your main computer?",
        "options": [
          "Put them in a different room",
          "Connect them to a separate \"Guest Wi-Fi\" network",
          "Turn them off",
          "Paint them black"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-51",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "UNDERSTANDING ENCRYPTION (E2EE)",
    "level": "Advanced",
    "icon": "Shield",
    "overview": "Learn the essentials of UNDERSTANDING ENCRYPTION (E2EE) and how to protect yourself.",
    "simpleExplanation": "End-to-End Encryption (E2EE) ensures that only you and the person you are communicating with can read what is sent.",
    "whyItMatters": "Without E2EE, the company hosting the service (like Facebook or Google) or a hacker intercepting the message can read your private conversations.",
    "explanation": "When you send a message, it is locked with a cryptographic key. Only the recipient's device has the matching key to unlock it. Not even the app developers can read it.",
    "realWorldExample": "You send a message on Signal or WhatsApp. A hacker intercepts the data in transit, but it looks like \"x9f8j3k2l\"—complete gibberish.",
    "securityTips": [
      "Always use messaging apps that have E2EE enabled by default (like Signal)."
    ],
    "summary": "If it's not End-to-End Encrypted, it's a postcard. If it is, it's a sealed vault.",
    "quiz": [
      {
        "id": "q51-1",
        "question": "What does E2EE stand for?",
        "options": [
          "Easy to Enter Encryption",
          "End-to-End Encryption",
          "Every Two Emails Encrypted",
          "Enter to Exit Encryption"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q51-2",
        "question": "Who can read an E2EE message?",
        "options": [
          "Anyone",
          "Only the sender and the intended recipient",
          "The government",
          "The app developer"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q51-3",
        "question": "Which of these apps uses E2EE by default?",
        "options": [
          "Standard SMS Texting",
          "Signal",
          "Public Twitter",
          "Open Email"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-52",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "ZERO TRUST ARCHITECTURE",
    "level": "Advanced",
    "icon": "Key",
    "overview": "Learn the essentials of ZERO TRUST ARCHITECTURE and how to protect yourself.",
    "simpleExplanation": "A security model that assumes EVERYONE and EVERYTHING is a potential threat, even if they are already inside the network.",
    "whyItMatters": "The old model was a \"castle and moat\"—once you were inside, you were trusted. Zero Trust says \"never trust, always verify.\"",
    "explanation": "In a Zero Trust system, you must constantly prove who you are (using MFA) and that your device is secure before you can access any file or application, every single time.",
    "realWorldExample": "An employee logs into the company network. Even though they are in the office, the system still asks for an MFA code before letting them open a sensitive document.",
    "securityTips": [
      "Apply Zero Trust to your personal life: don't trust an email just because it comes from a friend's address (their account might be hacked)."
    ],
    "summary": "Trust must be earned continuously, not granted permanently.",
    "quiz": [
      {
        "id": "q52-1",
        "question": "What is the core motto of Zero Trust?",
        "options": [
          "Trust everyone",
          "Never trust, always verify",
          "Trust but verify",
          "Only trust admins"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q52-2",
        "question": "How does Zero Trust differ from the old \"Castle and Moat\" model?",
        "options": [
          "It uses bigger firewalls",
          "It doesn't automatically trust users just because they are inside the network",
          "It is cheaper",
          "It only works on Macs"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q52-3",
        "question": "What technology is essential for Zero Trust to work?",
        "options": [
          "A fast mouse",
          "Multi-Factor Authentication (MF",
          "A big monitor",
          "A new keyboard"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-53",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "THE DARK WEB EXPLAINED",
    "level": "Advanced",
    "icon": "Lock",
    "overview": "Learn the essentials of THE DARK WEB EXPLAINED and how to protect yourself.",
    "simpleExplanation": "A hidden part of the internet that cannot be found using standard search engines like Google, often used for illegal activities.",
    "whyItMatters": "This is where stolen passwords, credit card numbers, and personal data are bought and sold.",
    "explanation": "The internet has three layers: The Surface Web (Google, Wikipedia), The Deep Web (your private email, online banking), and The Dark Web (requires special software like Tor to access).",
    "realWorldExample": "A hacker steals 10,000 passwords from a website and sells the database on a Dark Web forum for $500.",
    "securityTips": [
      "Use \"Dark Web Monitoring\" services (often included with password managers) to alert you if your email or passwords are found there."
    ],
    "summary": "You don't need to visit the Dark Web, but you need to know if your data is there.",
    "quiz": [
      {
        "id": "q53-1",
        "question": "What is the \"Deep Web\"?",
        "options": [
          "The illegal part of the internet",
          "Parts of the internet not indexed by search engines (like your private email inbox)",
          "A type of virus",
          "A fast network"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q53-2",
        "question": "What special software is typically required to access the Dark Web?",
        "options": [
          "Chrome",
          "Tor",
          "Word",
          "Excel"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q53-3",
        "question": "Why do criminals use the Dark Web?",
        "options": [
          "It's faster",
          "It provides high levels of anonymity to buy and sell illegal goods and stolen data",
          "It's free",
          "It has better graphics"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-54",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "INCIDENT RESPONSE (WHAT TO DO IF HACKED)",
    "level": "Advanced",
    "icon": "Smartphone",
    "overview": "Learn the essentials of INCIDENT RESPONSE (WHAT TO DO IF HACKED) and how to protect yourself.",
    "simpleExplanation": "The emergency steps you take immediately after realizing you have been compromised.",
    "whyItMatters": "Acting quickly can mean the difference between a minor inconvenience and total identity theft.",
    "explanation": "",
    "realWorldExample": "You click a bad link and your screen locks up. You immediately unplug the computer from the wall and call your bank from your phone.",
    "securityTips": [
      "Never try to \"fix\" a hacked computer while it is still connected to the internet."
    ],
    "summary": "Don't panic. Disconnect, assess, and reset.",
    "quiz": [
      {
        "id": "q54-1",
        "question": "What is the FIRST thing you should do if you realize your computer is hacked?",
        "options": [
          "Call the police",
          "Disconnect it from the internet (turn off Wi-Fi/unplug cable)",
          "Restart it",
          "Pay the hacker"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q54-2",
        "question": "Why should you use a \"clean device\" to change your passwords after a hack?",
        "options": [
          "It's faster",
          "The hacked device might have a keylogger recording your new passwords",
          "It looks better",
          "It's required by law"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q54-3",
        "question": "What does it mean to \"Freeze your credit\"?",
        "options": [
          "Put your credit card in the freezer",
          "Stop anyone from opening new accounts in your name",
          "Stop paying bills",
          "Get a new card"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-55",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "SECURING CRYPTOCURRENCY WALLETS",
    "level": "Advanced",
    "icon": "Globe",
    "overview": "Learn the essentials of SECURING CRYPTOCURRENCY WALLETS and how to protect yourself.",
    "simpleExplanation": "Protecting your digital assets (like Bitcoin or Ethereum) from theft.",
    "whyItMatters": "Cryptocurrency transactions are irreversible. If a hacker steals your crypto, it is gone forever. No bank can refund you.",
    "explanation": "Use a \"Hardware Wallet\" (Cold Storage) to keep your private keys offline. Never store your \"Seed Phrase\" (the 12-24 word recovery password) digitally—write it on paper and lock it in a safe.",
    "realWorldExample": "A user saves their 12-word seed phrase in a Google Doc. A hacker gains access to their Google account, finds the doc, and drains their crypto wallet.",
    "securityTips": [
      "Never take a photo of your seed phrase.",
      "Malware can scan your photo library for text."
    ],
    "summary": "Not your keys, not your coins. Keep them offline.",
    "quiz": [
      {
        "id": "q55-1",
        "question": "What makes cryptocurrency theft different from credit card theft?",
        "options": [
          "It's slower",
          "Crypto transactions are irreversible; there is no bank to refund you",
          "It's legal",
          "It only happens at night"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q55-2",
        "question": "What is a \"Hardware Wallet\" (Cold Storage)?",
        "options": [
          "A heavy wallet",
          "A physical device that stores your crypto keys offline",
          "A fast computer",
          "A type of software"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q55-3",
        "question": "Where is the SAFEST place to store your \"Seed Phrase\"?",
        "options": [
          "In a Google Doc",
          "Written on physical paper and stored in a secure safe",
          "In an email to yourself",
          "On your phone's notepad"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-56",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "OPEN SOURCE INTELLIGENCE (OSINT)",
    "level": "Advanced",
    "icon": "Mail",
    "overview": "Learn the essentials of OPEN SOURCE INTELLIGENCE (OSINT) and how to protect yourself.",
    "simpleExplanation": "Gathering information about a target using only publicly available sources.",
    "whyItMatters": "Hackers use OSINT to build a profile on you before launching a targeted Spear Phishing attack.",
    "explanation": "Attackers look at your LinkedIn (to find your boss's name), your Instagram (to find your hobbies), and public property records (to find your address).",
    "realWorldExample": "A hacker wants to breach a company. They use LinkedIn to find the IT manager, see on Twitter that the manager loves a specific sports team, and send a phishing email offering \"Free VIP Tickets\" to that team's game.",
    "securityTips": [
      "Be mindful of the \"digital breadcrumbs\" you leave across different platforms.",
      "They add up to a full picture."
    ],
    "summary": "If it's public, it's intelligence for an attacker.",
    "quiz": [
      {
        "id": "q56-1",
        "question": "What does OSINT stand for?",
        "options": [
          "Online Security Internal Network",
          "Open Source Intelligence",
          "Over System Internet",
          "Only Secure In The Network"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q56-2",
        "question": "How do hackers use OSINT?",
        "options": [
          "To fix computers",
          "To gather public information to craft highly targeted phishing attacks",
          "To speed up the internet",
          "To delete viruses"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q56-3",
        "question": "Which of these is an example of an OSINT source?",
        "options": [
          "A private email",
          "A public LinkedIn profile",
          "A locked safe",
          "A hidden file"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-57",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "BIOMETRIC SECURITY PROS AND CONS",
    "level": "Advanced",
    "icon": "AlertTriangle",
    "overview": "Learn the essentials of BIOMETRIC SECURITY PROS AND CONS and how to protect yourself.",
    "simpleExplanation": "Using your physical characteristics (face, fingerprint, voice) to unlock devices.",
    "whyItMatters": "Biometrics are convenient, but they cannot be changed if they are compromised.",
    "explanation": "",
    "realWorldExample": "A user relies only on FaceID. While they are sleeping, someone points the phone at their face to unlock it and steal data.",
    "securityTips": [
      "Use biometrics for convenience, but require a strong PIN after a device restarts or after 48 hours of inactivity."
    ],
    "summary": "Biometrics are a username, not a password.",
    "quiz": [
      {
        "id": "q57-1",
        "question": "What is a major disadvantage of Biometric security?",
        "options": [
          "It's too fast",
          "If your biometric data is stolen, you cannot \"reset\" or change your fingerprint or face",
          "It's illegal",
          "It drains the battery"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q57-2",
        "question": "Can police in some jurisdictions force you to unlock a phone with your face/fingerprint?",
        "options": [
          "No, never",
          "Yes, biometrics often have less legal protection than a memorized passcode",
          "Only if you agree",
          "Only on Android"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q57-3",
        "question": "What is the best way to use biometrics safely?",
        "options": [
          "Only use them",
          "Combine them with a strong PIN/Passcode requirement",
          "Never use them",
          "Share them"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-58",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "THE ROLE OF ARTIFICIAL INTELLIGENCE IN HACKING",
    "level": "Advanced",
    "icon": "EyeOff",
    "overview": "Learn the essentials of THE ROLE OF ARTIFICIAL INTELLIGENCE IN HACKING and how to protect yourself.",
    "simpleExplanation": "Hackers are now using AI to write malware, generate perfect phishing emails, and clone voices.",
    "whyItMatters": "AI makes attacks faster, cheaper, and much harder to detect.",
    "explanation": "\"Deepfakes\" can clone a CEO's voice to authorize a fraudulent wire transfer. AI can write phishing emails with perfect grammar in any language, eliminating the \"poor spelling\" red flag.",
    "realWorldExample": "An accountant gets a voicemail from their boss asking them to transfer $50,000 immediately. The voice sounds exactly like the boss, but it was generated by AI.",
    "securityTips": [
      "Establish a \"Safe Word\" with your family or company for emergency financial requests."
    ],
    "summary": "Seeing (or hearing) is no longer believing. Always verify through a second channel.",
    "quiz": [
      {
        "id": "q58-1",
        "question": "How are hackers using AI in phishing?",
        "options": [
          "To make the internet faster",
          "To write perfect, error-free phishing emails that are hard to detect",
          "To fix computers",
          "To design logos"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q58-2",
        "question": "What is an AI \"Deepfake\"?",
        "options": [
          "A deep ocean scan",
          "A highly realistic, AI-generated fake audio or video of a real person",
          "A type of virus",
          "A secure password"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q58-3",
        "question": "How can you protect against AI voice cloning scams?",
        "options": [
          "Don't use phones",
          "Establish a secret \"Safe Word\" with family/colleagues to verify identity",
          "Speak loudly",
          "Use a VPN"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-59",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "SECURING YOUR ROUTER AND HOME NETWORK",
    "level": "Advanced",
    "icon": "UserCheck",
    "overview": "Learn the essentials of SECURING YOUR ROUTER AND HOME NETWORK and how to protect yourself.",
    "simpleExplanation": "Your router is the front door to your home network. If it's weak, every device inside is vulnerable.",
    "whyItMatters": "Hackers can hijack your router to spy on your traffic or use your network to launch attacks on others.",
    "explanation": "Change the default Admin password (usually \"admin/password\"). Update the router's firmware. Change the network name (SSID) so it doesn't reveal your router brand or address. Use WPA3 encryption if available.",
    "realWorldExample": "A user leaves their router password as \"admin.\" A hacker logs in, changes the DNS settings, and redirects all the user's banking traffic to a fake website.",
    "securityTips": [
      "Disable \"WPS\" (Wi-Fi Protected Setup)—it is highly vulnerable to brute-force attacks."
    ],
    "summary": "A strong lock on your front door protects everything inside your house.",
    "quiz": [
      {
        "id": "q59-1",
        "question": "What is the most important first step when setting up a new router?",
        "options": [
          "Painting it",
          "Changing the default Admin username and password",
          "Putting it near a window",
          "Turning it off"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q59-2",
        "question": "Why should you disable WPS (Wi-Fi Protected Setup)?",
        "options": [
          "It's too slow",
          "It has known vulnerabilities that make it easy for hackers to break into your network",
          "It uses too much power",
          "It's illegal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q59-3",
        "question": "What is the strongest type of Wi-Fi encryption currently available for homes?",
        "options": [
          "WEP",
          "WPA3",
          "Open",
          "HTTP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  },
  {
    "id": "topic-60",
    "chapterId": "ch6",
    "chapterTitle": "Advanced Defense & Future Tech",
    "title": "CONTINUOUS LEARNING AND STAYING UPDATED",
    "level": "Advanced",
    "icon": "Database",
    "overview": "Learn the essentials of CONTINUOUS LEARNING AND STAYING UPDATED and how to protect yourself.",
    "simpleExplanation": "Cybersecurity is not a destination; it is a continuous journey.",
    "whyItMatters": "Hackers invent new attacks every day. What was secure yesterday might be vulnerable today.",
    "explanation": "Follow cybersecurity news (like BleepingComputer or The Hacker News). Participate in regular training. Keep a skeptical mindset.",
    "realWorldExample": "A new vulnerability is discovered in a popular app. Because you read a security blog, you know to update the app immediately before hackers can exploit it.",
    "securityTips": [
      "Use the CREDENTIA app regularly to test your skills against the latest threat simulations."
    ],
    "summary": "The best firewall is an educated human.",
    "quiz": [
      {
        "id": "q60-1",
        "question": "Why is continuous learning important in cybersecurity?",
        "options": [
          "To get a degree",
          "Because cyber threats evolve daily and new vulnerabilities are constantly discovered",
          "To type faster",
          "To fix hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q60-2",
        "question": "What is the ultimate goal of the CREDENTIA app?",
        "options": [
          "To sell antivirus",
          "To build a security mindset through continuous education and practice",
          "To make your PC faster",
          "To delete your files"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      },
      {
        "id": "q60-3",
        "question": "Who is the most important part of any security system?",
        "options": [
          "The firewall",
          "The educated human user",
          "The antivirus",
          "The router"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The correct answer is B."
      }
    ]
  }
];

export const CHAPTER_TESTS: Record<string, QuizQuestion[]> = {
  "ch1": [
    {
      "id": "test-ch1-1",
      "question": "(Easy) Which of these is the MOST secure password?",
      "options": [
        "password123",
        "Jsmith1990",
        "x&P9!vL2#mK",
        "12345678"
      ],
      "correctAnswerIndex": 2,
      "explanation": "The correct answer is C."
    },
    {
      "id": "test-ch1-2",
      "question": "(Easy) What should you do if you get an unexpected email from your bank asking for your PIN?",
      "options": [
        "Reply immediately",
        "Delete it",
        "Send your PIN",
        "Click the link to \"Verify\""
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch1-3",
      "question": "(Medium) What is the main purpose of a VPN?",
      "options": [
        "To increase internet speed",
        "To encrypt your traffic on public networks",
        "To delete viruses",
        "To store passwords"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch1-4",
      "question": "(Medium) Which term describes \"hacking the human\" through manipulation?",
      "options": [
        "Malware",
        "Brute Force",
        "Social Engineering",
        "Encryption"
      ],
      "correctAnswerIndex": 2,
      "explanation": "The correct answer is C."
    },
    {
      "id": "test-ch1-5",
      "question": "(Medium) How does Ransomware typically enter a system?",
      "options": [
        "Through a monitor",
        "Through phishing emails or malicious downloads",
        "Through a keyboard",
        "Through a power outlet"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch1-6",
      "question": "(Medium) What does \"MFA\" stand for?",
      "options": [
        "Multi-Factor Authentication",
        "Mail Fast Access",
        "Mobile File Archive",
        "Many Facebook Accounts"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The correct answer is A."
    },
    {
      "id": "test-ch1-7",
      "question": "(Hard) Why is \"Credential Stuffing\" so effective for hackers?",
      "options": [
        "People use unique passwords",
        "People reuse the same password on multiple sites",
        "Hackers are fast typists",
        "It breaks encryption"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch1-8",
      "question": "(Hard) What is the \"Attack Surface\" of a person?",
      "options": [
        "Their computer screen",
        "Every app, device, and account they use",
        "Their physical desk",
        "Their internet speed"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch1-9",
      "question": "(Hard) In the \"Zero Trust\" model, who is trusted by default?",
      "options": [
        "Employees",
        "No one",
        "The CEO",
        "The IT Department"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch1-10",
      "question": "(Pro) If a website has HTTPS but the content seems like a scam, is the site safe?",
      "options": [
        "Yes, HTTPS means the site is verified",
        "No, HTTPS only means the connection is encrypted, not that the owner is honest",
        "Yes, the padlock proves it’s real",
        "Only if you use Chrome"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    }
  ],
  "ch2": [
    {
      "id": "test-ch2-1",
      "question": "(Easy) What is the most important part of a strong password?",
      "options": [
        "The website name",
        "Its length and randomness",
        "Your pet's name",
        "How fast you can type it"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch2-2",
      "question": "(Easy) What should you do with a \"Master Password\" for a manager?",
      "options": [
        "Share it with friends",
        "Keep it extremely secure and never share it",
        "Write it on your desk",
        "Use \"1234\""
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch2-3",
      "question": "(Medium) Why is SMS (Text) MFA less secure than an Authenticator App?",
      "options": [
        "It’s too slow",
        "Hackers can \"SIM Swap\" or intercept text messages",
        "It’s too expensive",
        "It doesn't work on iPhones"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch2-4",
      "question": "(Medium) What does a Password Manager do when you visit a saved site?",
      "options": [
        "It deletes the site",
        "It automatically fills in your secure credentials",
        "It shows you ads",
        "It records your screen"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch2-5",
      "question": "(Medium) Which of these is a \"biometric\" factor in MFA?",
      "options": [
        "A PIN code",
        "A fingerprint or face scan",
        "A text message",
        "A secret question"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch2-6",
      "question": "(Medium) What should you do if you receive an MFA code you didn't request?",
      "options": [
        "Type it in",
        "Ignore it",
        "Change your password immediately; it means someone has your password",
        "Delete the app"
      ],
      "correctAnswerIndex": 2,
      "explanation": "The correct answer is C."
    },
    {
      "id": "test-ch2-7",
      "question": "(Hard) What is \"Entropy\" in the context of passwords?",
      "options": [
        "The length of the password",
        "The measure of randomness/unpredictability",
        "The speed of the internet",
        "The type of encryption"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch2-8",
      "question": "(Hard) How does \"SIM Swapping\" affect your security?",
      "options": [
        "It breaks your phone screen",
        "It allows hackers to receive your SMS MFA codes on their device",
        "It makes your calls clearer",
        "It deletes your apps"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch2-9",
      "question": "(Hard) What is the \"Zero-Knowledge\" architecture in password managers?",
      "options": [
        "The company knows nothing about you",
        "The company cannot see your passwords because they don't have your key",
        "You don't need to know anything to use it",
        "It’s a virus"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch2-10",
      "question": "(Pro) You find a leaked database with your old password. What is the first thing you should do?",
      "options": [
        "Nothing",
        "Use a password manager to change that password on EVERY site where it was reused",
        "Delete your email",
        "Buy a new computer"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    }
  ],
  "ch3": [
    {
      "id": "test-ch3-1",
      "question": "(Easy) Which of these is a form of phishing via voice calls?",
      "options": [
        "Smishing",
        "Vishing",
        "Whaling",
        "Cracking"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch3-2",
      "question": "(Easy) What should you do if an email asks for your password \"immediately\"?",
      "options": [
        "Give it to them",
        "Delete it and ignore it",
        "Call the official company to verify",
        "Send a fake password"
      ],
      "correctAnswerIndex": 2,
      "explanation": "The correct answer is C."
    },
    {
      "id": "test-ch3-3",
      "question": "(Medium) A hacker pretends to be a delivery driver to enter a building. This is:",
      "options": [
        "Physical Phishing",
        "Social Engineering",
        "Brute Force",
        "Malware"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch3-4",
      "question": "(Medium) What is the \"Hover\" technique used for?",
      "options": [
        "Cleaning the screen",
        "Checking the real destination of a link",
        "Speeding up the mouse",
        "Scrolling faster"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch3-5",
      "question": "(Medium) A \"Trojan\" malware is called that because:",
      "options": [
        "It is very fast",
        "It is disguised as something useful",
        "It comes from Greece",
        "It only affects wood"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch3-6",
      "question": "(Medium) If you pay a ransom to a hacker, are you guaranteed to get your files back?",
      "options": [
        "Yes, hackers have honor",
        "No, they often take the money and vanish",
        "Only if you pay in cash",
        "Only on Windows"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch3-7",
      "question": "(Hard) What is the \"Typosquatting\" URL for `google.com`?",
      "options": [
        "google.com",
        "g00gle.com",
        "alphabet.com",
        "gmail.com"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch3-8",
      "question": "(Hard) Which malware type is designed specifically to record what you type on your keyboard?",
      "options": [
        "Keylogger",
        "Adware",
        "Ransomware",
        "Worm"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The correct answer is A."
    },
    {
      "id": "test-ch3-9",
      "question": "(Hard) Why should you avoid \"Pirated\" or \"Cracked\" software?",
      "options": [
        "It's too slow",
        "It almost always contains hidden malware or backdoors",
        "It doesn't have a manual",
        "It's illegal only in some countries"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch3-10",
      "question": "(Pro) An attacker sends a phishing email to everyone in a company. This is:",
      "options": [
        "Spear Phishing",
        "Mass Phishing",
        "Whaling",
        "Vishing"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    }
  ],
  "ch4": [
    {
      "id": "test-ch4-1",
      "question": "(Easy) Which mode stops your browser from saving your history?",
      "options": [
        "Turbo Mode",
        "Incognito/Private Mode",
        "Admin Mode",
        "Developer Mode"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-2",
      "question": "(Easy) What is the safest way to connect to your bank on public Wi-Fi?",
      "options": [
        "Just log in normally",
        "Use a VPN",
        "Use the library's browser",
        "Wait until you get home"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-3",
      "question": "(Medium) Why are \"Free VPNs\" often dangerous?",
      "options": [
        "They are too slow",
        "They often log and sell your private data to third parties",
        "They don't have enough servers",
        "They only work on Android"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-4",
      "question": "(Medium) What should you do if your phone is stolen?",
      "options": [
        "Buy a new one immediately",
        "Use \"Remote Wipe\" to erase your data",
        "Call your friends",
        "Wait for the thief to return it"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-5",
      "question": "(Medium) The \"3-2-1\" rule is used for:",
      "options": [
        "Passwords",
        "Data Backups",
        "Choosing a VPN",
        "Updating Windows"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-6",
      "question": "(Medium) Which tool is used to encrypt a Mac's hard drive?",
      "options": [
        "BitLocker",
        "FileVault",
        "Defender",
        "Time Machine"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-7",
      "question": "(Hard) What is a \"Packet Sniffer\"?",
      "options": [
        "A dog that finds computers",
        "Software that intercepts and \"sniffs\" data moving over a network",
        "A hardware cleaner",
        "A fast router"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-8",
      "question": "(Hard) What does \"Automatic Updates\" primarily protect you from?",
      "options": [
        "Slow internet",
        "Newly discovered security holes (exploits)",
        "Low battery",
        "Spam emails"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-9",
      "question": "(Hard) You find a USB drive in the park. What is the SAFEST thing to do?",
      "options": [
        "Plug it in to find the owner",
        "Throw it away or give it to IT without plugging it in",
        "Format it immediately",
        "Use it for your own files"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch4-10",
      "question": "(Pro) If you are using a VPN, can your Internet Service Provider (ISP) see WHICH websites you are visiting?",
      "options": [
        "Yes, they see everything",
        "No, they only see that you are connected to a VPN and encrypted data",
        "Only if you use Chrome",
        "Only if the VPN is free"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    }
  ],
  "ch5": [
    {
      "id": "test-ch5-1",
      "question": "(Easy) Everything you do online leaves a trail called your:",
      "options": [
        "Digital Shadow",
        "Digital Footprint",
        "Cyber Mark",
        "Web Trail"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-2",
      "question": "(Easy) What should you do with the privacy settings on your social media accounts?",
      "options": [
        "Make them public",
        "Change them to Private",
        "Delete the app",
        "Share your password"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-3",
      "question": "(Medium) Why are \"What kind of potato are you?\" quizzes dangerous?",
      "options": [
        "They are boring",
        "They trick you into revealing answers to security questions",
        "They use too much data",
        "They break your phone"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-4",
      "question": "(Medium) What is a \"Data Broker\"?",
      "options": [
        "A person who fixes computers",
        "A company that collects and sells your personal information",
        "A type of virus",
        "A secure browser"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-5",
      "question": "(Medium) What does \"Geotagging\" do to a photo?",
      "options": [
        "Makes it brighter",
        "Adds hidden GPS coordinates showing exactly where it was taken",
        "Deletes it",
        "Shares it automatically"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-6",
      "question": "(Medium) Which type of cookie tracks you across multiple different websites?",
      "options": [
        "First-party",
        "Third-party",
        "Session",
        "Secure"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-7",
      "question": "(Hard) What is the safest way to handle App Permissions for Location?",
      "options": [
        "Always Allow",
        "Allow only while using the app",
        "Never Allow",
        "Ask your friends"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-8",
      "question": "(Hard) The \"Right to be Forgotten\" allows you to:",
      "options": [
        "Delete your history",
        "Request the removal of your personal data from search engines",
        "Forget your password",
        "Change your name"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-9",
      "question": "(Hard) What is the best way to secure a new Smart Home device (IoT)?",
      "options": [
        "Leave it in the box",
        "Change the default password immediately",
        "Connect it to your main PC",
        "Share the password"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch5-10",
      "question": "(Pro) Why should you put IoT devices on a \"Guest Wi-Fi\" network?",
      "options": [
        "To make them faster",
        "So if they are hacked, the attacker cannot access your main computer and sensitive files",
        "To save electricity",
        "Because they require it"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    }
  ],
  "ch6": [
    {
      "id": "test-ch6-1",
      "question": "(Easy) What does End-to-End Encryption (E2EE) prevent?",
      "options": [
        "Fast typing",
        "Anyone other than the sender and receiver from reading the message",
        "Battery drain",
        "App updates"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch6-2",
      "question": "(Easy) What does OSINT stand for?",
      "options": [
        "Open Source Intelligence",
        "Online System Internal",
        "Over Secure Internet",
        "Only Safe In Town"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The correct answer is A."
    },
    {
      "id": "test-ch6-3",
      "question": "(Medium) The \"Zero Trust\" security model assumes that:",
      "options": [
        "Everyone is safe",
        "No one should be trusted automatically, even if they are inside the network",
        "Only admins are trusted",
        "Passwords are not needed"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch6-4",
      "question": "(Medium) What is the \"Dark Web\"?",
      "options": [
        "A website with a black background",
        "A hidden part of the internet requiring special software, often used for illicit activities",
        "A fast network",
        "A broken website"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch6-5",
      "question": "(Medium) What is the FIRST step in Incident Response if your PC is hacked?",
      "options": [
        "Call the police",
        "Disconnect the device from the internet",
        "Pay the hacker",
        "Restart the PC"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch6-6",
      "question": "(Medium) Why is it dangerous to store your Crypto \"Seed Phrase\" in a Google Doc?",
      "options": [
        "It's too slow",
        "If your Google account is hacked, the attacker can steal all your crypto",
        "Google will delete it",
        "It takes up too much space"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch6-7",
      "question": "(Hard) What is a major legal disadvantage of Biometric security (like FaceID) compared to a passcode?",
      "options": [
        "It's illegal",
        "In some places, law enforcement can force you to use your face/fingerprint, but cannot force you to reveal a memorized passcode",
        "It costs money",
        "It's too slow"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch6-8",
      "question": "(Hard) How are hackers using AI to improve Phishing attacks?",
      "options": [
        "By making the internet faster",
        "By generating perfect, error-free emails and realistic voice clones (Deepfakes)",
        "By fixing computers",
        "By deleting viruses"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch6-9",
      "question": "(Hard) Why should you disable WPS on your home router?",
      "options": [
        "It uses too much electricity",
        "It is highly vulnerable to brute-force attacks",
        "It makes the Wi-Fi slow",
        "It is illegal"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    },
    {
      "id": "test-ch6-10",
      "question": "(Pro) In a Zero Trust Architecture, what must happen before a user accesses a file?",
      "options": [
        "They must pay a fee",
        "Their identity and device security must be verified, every single time",
        "They must use a Mac",
        "They must be in the office"
      ],
      "correctAnswerIndex": 1,
      "explanation": "The correct answer is B."
    }
  ]
};

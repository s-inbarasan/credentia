import { SimulationScenario } from '../types';

export const SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: 'sim-1',
    title: 'Urgent Account Verification',
    type: 'Phishing',
    description: 'You received an email claiming your bank account will be suspended unless you verify your identity.',
    content: `From: security@bank-support-alert.com
To: user@example.com
Subject: URGENT: Verify Your Account Immediately

Dear Customer,

We detected unusual activity on your account. To prevent suspension, please click the link below to verify your identity within 24 hours.

http://verify-bank-secure-login.com/auth

Thank you,
Security Team`,
    correctAnswer: 'Malicious',
    explanation: 'The sender email domain (bank-support-alert.com) is not the official bank domain. The link also points to a suspicious URL, and the email creates a false sense of urgency.',
    prevention: 'Always check the sender email address carefully. Never click links in unsolicited emails. Instead, go directly to the official website by typing the URL in your browser.',
    xpReward: 50
  },
  {
    id: 'sim-2',
    title: 'IT Helpdesk Password Reset',
    type: 'SocialEngineering',
    description: 'You receive a phone call from someone claiming to be from the IT department asking for your password to fix an issue.',
    content: `Caller: "Hi, this is Dave from IT. We are upgrading the server and I need your password to migrate your account. Can you tell me what it is?"`,
    correctAnswer: 'Malicious',
    explanation: 'IT departments will never ask for your password over the phone or email. This is a classic social engineering attack called pretexting.',
    prevention: 'Never share your password with anyone, even if they claim to be an authority figure. Report such incidents to your actual IT department immediately.',
    xpReward: 50
  },
  {
    id: 'sim-3',
    title: 'Suspicious Invoice Attachment',
    type: 'Phishing',
    description: 'An email arrives with an invoice attached from a vendor you do not recognize.',
    content: `From: billing@unknown-vendor.net
To: user@example.com
Subject: Invoice #84729 Overdue

Please find the attached invoice for the services rendered last month. Prompt payment is required.

Attachment: Invoice_84729.pdf.exe`,
    correctAnswer: 'Malicious',
    explanation: 'The attachment has a double extension (.pdf.exe), which is a common trick to hide executable malware. The sender is also unknown.',
    prevention: 'Do not open attachments from unknown senders. Be extremely wary of files with double extensions or executable extensions (.exe, .bat, .js) sent via email.',
    xpReward: 50
  },
  {
    id: 'sim-4',
    title: 'Legitimate Password Expiry Notice',
    type: 'Phishing',
    description: "An email from your company's automated system reminding you to change your password.",
    content: `From: noreply@yourcompany.com
To: user@yourcompany.com
Subject: Password Expiry Reminder

Your corporate password will expire in 14 days. Please log in to the company portal at https://portal.yourcompany.com to update it.`,
    correctAnswer: 'Safe',
    explanation: 'The email comes from the official company domain, the link points to the correct HTTPS portal, and it does not ask for your password directly in the email.',
    prevention: 'Even when an email looks safe, it is best practice to navigate to the portal manually rather than clicking the link, just to be absolutely sure.',
    xpReward: 20
  },
  {
    id: 'sim-5',
    title: 'Free Gift Card Offer',
    type: 'SuspiciousLink',
    description: 'A text message offering a free $100 gift card.',
    content: `SMS: "Congratulations! You've been selected for a $100 Amazon gift card. Click here to claim: http://bit.ly/free-gift-123"`,
    correctAnswer: 'Suspicious',
    explanation: 'Unsolicited offers for free money or gifts are almost always scams. The use of a URL shortener (bit.ly) hides the true destination, which is a red flag.',
    prevention: 'Ignore and delete unsolicited messages offering free gifts. Do not click on shortened links from unknown sources.',
    xpReward: 30
  }
];

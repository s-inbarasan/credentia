import { PasswordAnalysis, PhishingAnalysis } from '../types';

export const analyzePassword = (password: string): PasswordAnalysis => {
  let score = 0;
  const suggestions: string[] = [];

  if (password.length >= 8) score += 20;
  else suggestions.push("Increase length to at least 12 characters.");

  if (/[A-Z]/.test(password)) score += 20;
  else suggestions.push("Add uppercase letters.");

  if (/[a-z]/.test(password)) score += 20;
  else suggestions.push("Add lowercase letters.");

  if (/[0-9]/.test(password)) score += 20;
  else suggestions.push("Add numbers.");

  if (/[^A-Za-z0-9]/.test(password)) score += 20;
  else suggestions.push("Add special symbols.");

  // Common patterns
  const common = ['password', '123456', 'admin', 'qwerty'];
  if (common.some(c => password.toLowerCase().includes(c))) {
    score = Math.max(0, score - 40);
    suggestions.push("Avoid common words or sequences.");
  }

  let strength: PasswordAnalysis['strength'] = 'Weak';
  if (score > 40) strength = 'Medium';
  if (score > 80) strength = 'Strong';

  let crackTime = "Seconds";
  if (score > 80) crackTime = "Centuries";
  else if (score > 60) crackTime = "Years";
  else if (score > 40) crackTime = "Months";
  else if (score > 20) crackTime = "Days";

  return { strength, score, crackTime, suggestions };
};

export const analyzePhishing = (text: string): PhishingAnalysis => {
  const suspiciousKeywords = ['urgent', 'verify', 'login', 'account', 'suspended', 'bank', 'prize', 'winner', 'click here'];
  const foundKeywords = suspiciousKeywords.filter(k => text.toLowerCase().includes(k));
  
  const hasUrl = /https?:\/\/[^\s]+/.test(text);
  const reasons: string[] = [];
  
  if (foundKeywords.length > 2) reasons.push("Highly urgent or suspicious language detected.");
  if (hasUrl && foundKeywords.length > 0) reasons.push("Contains links combined with sensitive keywords.");
  if (text.length < 20 && hasUrl) reasons.push("Short message with a link is often used in smishing.");

  let riskLevel: PhishingAnalysis['riskLevel'] = 'Low';
  if (reasons.length === 1) riskLevel = 'Medium';
  if (reasons.length > 1) riskLevel = 'High';

  return {
    riskLevel,
    suspicious: reasons.length > 0,
    reasons,
    tips: [
      "Never click links from unknown senders.",
      "Check the sender's email address carefully.",
      "Look for spelling and grammar mistakes."
    ]
  };
};

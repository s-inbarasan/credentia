import { Topic } from '../types';

const chapters = [
  { id: 'ch1', title: 'The Basics of Digital Defense' },
  { id: 'ch2', title: 'Securing Your Devices & Networks' },
  { id: 'ch3', title: 'Advanced Threats & Scams' },
  { id: 'ch4', title: 'Data Privacy & Protection' },
  { id: 'ch5', title: 'Cyber Resilience & Future Tech' }
];

const topicsData = [
  // Chapter 1: The Basics of Digital Defense
  { title: 'Introduction to Phishing', icon: 'Mail', analogy: 'Like a fake delivery notice left on your door to steal your keys.', risk: 'Clicking a bad link can hand over your bank login to criminals.', tips: ['Check the sender email address carefully.', 'Hover over links before clicking.', 'Never provide passwords via email.'] },
  { title: 'Password Hygiene', icon: 'Key', analogy: 'Like using the same weak lock for your house, car, and safe.', risk: 'One leaked password could compromise all your digital accounts.', tips: ['Use a password manager.', 'Create long passphrases.', 'Never reuse passwords across sites.'] },
  { title: 'Multi-Factor Authentication (MFA)', icon: 'ShieldCheck', analogy: 'Like needing both a key and a fingerprint to open a vault.', risk: 'Without MFA, a stolen password is all a hacker needs to ruin your life.', tips: ['Enable MFA on all important accounts.', 'Use an authenticator app over SMS.', 'Keep backup codes in a safe place.'] },
  { title: 'Public Wi-Fi Risks', icon: 'Wifi', analogy: 'Like having a private conversation in a crowded room with a megaphone.', risk: 'Hackers on the same network can easily intercept your passwords and messages.', tips: ['Avoid accessing bank accounts on public Wi-Fi.', 'Use a VPN when connected to public networks.', 'Turn off auto-connect for Wi-Fi.'] },
  { title: 'Social Engineering Basics', icon: 'Users', analogy: 'Like a con artist tricking you into handing over your wallet.', risk: 'Human manipulation is the #1 way companies and individuals get hacked.', tips: ['Be skeptical of urgent requests.', 'Verify identities through a secondary channel.', 'Don’t overshare personal info online.'] },
  { title: 'Malware Overview', icon: 'Bug', analogy: 'Like a contagious virus that makes your computer sick and steals its memory.', risk: 'Malware can destroy your files or spy on you through your webcam.', tips: ['Install a reputable antivirus.', 'Don’t download attachments from unknown senders.', 'Scan external drives before opening.'] },
  { title: 'Safe Browsing Habits', icon: 'Globe', analogy: 'Like looking both ways before crossing a dangerous digital street.', risk: 'Visiting the wrong site can silently install tracking software on your device.', tips: ['Look for HTTPS and the padlock icon.', 'Use an ad-blocker to prevent malvertising.', 'Clear your cookies and cache regularly.'] },
  { title: 'Device Encryption', icon: 'Lock', analogy: 'Like translating your diary into an unbreakable secret code.', risk: 'If your laptop is stolen without encryption, all your files are public.', tips: ['Enable BitLocker or FileVault.', 'Use a strong device passcode.', 'Encrypt sensitive USB drives.'] },
  { title: 'Software Updates & Patching', icon: 'RefreshCw', analogy: 'Like fixing a broken window before a burglar finds it.', risk: 'Ignoring updates leaves known holes open for hackers to walk right in.', tips: ['Turn on automatic updates.', 'Don’t delay restarting your device.', 'Update your router firmware.'] },
  { title: 'Data Backup Strategies', icon: 'Database', analogy: 'Like keeping a spare set of car keys in a safe place.', risk: 'Without backups, a single ransomware attack can erase your life’s work.', tips: ['Follow the 3-2-1 backup rule.', 'Test your backups regularly.', 'Keep one backup disconnected from the network.'] },

  // Chapter 2: Securing Your Devices & Networks
  { title: 'Identifying Suspicious Links', icon: 'Link', analogy: 'Like checking the caller ID before answering a strange phone call.', risk: 'A disguised link can secretly download malware onto your phone.', tips: ['Inspect URLs for misspellings.', 'Use a link scanner for shortened URLs.', 'Type the website directly instead of clicking.'] },
  { title: 'Physical Security in Cyber', icon: 'DoorClosed', analogy: 'Like locking your front door even if you have a great alarm system.', risk: 'An unattended, unlocked laptop is a free pass to your digital life.', tips: ['Lock your screen when stepping away.', 'Don’t leave devices in plain sight in cars.', 'Use privacy screens in public.'] },
  { title: 'Incident Reporting', icon: 'AlertTriangle', analogy: 'Like calling the fire department the moment you smell smoke.', risk: 'Delaying a report gives hackers more time to spread through the network.', tips: ['Know who to contact in an emergency.', 'Don’t try to hide a mistake.', 'Disconnect the device from the network immediately.'] },
  { title: 'Network Security Fundamentals', icon: 'Network', analogy: 'Like building a tall fence around your digital property.', risk: 'A weak network allows intruders to freely roam your connected devices.', tips: ['Change default router passwords.', 'Disable remote management on your router.', 'Create a separate guest network.'] },
  { title: 'VPNs and Secure Tunnels', icon: 'Shield', analogy: 'Like driving through a private, armored tunnel instead of an open highway.', risk: 'Without a VPN on public Wi-Fi, your browsing history is visible to anyone.', tips: ['Choose a paid, reputable VPN provider.', 'Enable the VPN kill switch.', 'Use a VPN when traveling.'] },
  { title: 'Firewalls and IDS/IPS', icon: 'Server', analogy: 'Like a bouncer checking IDs at the door of an exclusive club.', risk: 'Without a firewall, malicious traffic can enter your computer unchallenged.', tips: ['Ensure your OS firewall is enabled.', 'Don’t ignore firewall warnings.', 'Review allowed applications periodically.'] },
  { title: 'Symmetric vs Asymmetric Encryption', icon: 'Key', analogy: 'Like having a shared secret handshake versus a public mailbox with a private key.', risk: 'Using the wrong encryption makes it easy for spies to decode your messages.', tips: ['Use end-to-end encrypted messaging apps.', 'Verify encryption keys when possible.', 'Understand that HTTPS uses both types.'] },
  { title: 'Ransomware Defense', icon: 'Lock', analogy: 'Like a kidnapper holding your family photos hostage until you pay up.', risk: 'Ransomware can permanently lock you out of your own business or personal files.', tips: ['Never pay the ransom if possible.', 'Maintain offline backups.', 'Disable macros in Microsoft Office.'] },
  { title: 'Secure File Sharing', icon: 'Share2', analogy: 'Like sending a locked briefcase via armored courier instead of a postcard.', risk: 'Sharing sensitive files insecurely can lead to identity theft.', tips: ['Use password-protected links.', 'Set expiration dates on shared files.', 'Avoid sending sensitive docs via email.'] },
  { title: 'Mobile Device Management (MDM)', icon: 'Smartphone', analogy: 'Like a remote control that can lock or wipe your phone if you lose it.', risk: 'A lost phone without MDM gives whoever finds it access to your emails.', tips: ['Enable "Find My Device".', 'Allow remote wipe capabilities.', 'Keep your mobile OS updated.'] },

  // Chapter 3: Advanced Threats & Scams
  { title: 'Cloud Security Basics', icon: 'Cloud', analogy: 'Like renting a storage unit; you still need to put a good lock on it.', risk: 'Misconfigured cloud settings can expose your private data to the entire internet.', tips: ['Review sharing permissions regularly.', 'Enable MFA on your cloud accounts.', 'Don’t store unencrypted passwords in the cloud.'] },
  { title: 'Identity and Access Management (IAM)', icon: 'UserCheck', analogy: 'Like giving employees keycards that only open the doors they need.', risk: 'Poor access management lets a compromised intern account take down the whole company.', tips: ['Follow the principle of least privilege.', 'Audit account access annually.', 'Remove access immediately when someone leaves.'] },
  { title: 'Zero Trust Architecture', icon: 'EyeOff', analogy: 'Like a security guard who checks your ID at every single door, even if you work there.', risk: 'Trusting internal network traffic blindly allows hackers to move laterally once inside.', tips: ['Never trust, always verify.', 'Segment your networks.', 'Monitor all traffic, even internal.'] },
  { title: 'Endpoint Detection and Response (EDR)', icon: 'Monitor', analogy: 'Like security cameras that automatically tackle intruders.', risk: 'Without EDR, malware can sit silently on your computer for months.', tips: ['Ensure EDR agents are running.', 'Don’t disable security tools for convenience.', 'Investigate all EDR alerts.'] },
  { title: 'Vulnerability Scanning', icon: 'Search', analogy: 'Like a home inspector checking your house for weak locks and broken windows.', risk: 'Unpatched vulnerabilities are the easiest way for automated bots to hack you.', tips: ['Run regular vulnerability scans.', 'Prioritize critical patches.', 'Scan both internal and external assets.'] },
  { title: 'Secure Coding Practices', icon: 'Code', analogy: 'Like building a house with fire-resistant materials from the ground up.', risk: 'Sloppy code is the root cause of almost all major software breaches.', tips: ['Sanitize all user input.', 'Avoid hardcoding secrets.', 'Use parameterized queries for databases.'] },
  { title: 'Advanced Persistent Threats (APTs)', icon: 'Target', analogy: 'Like a highly trained spy team patiently infiltrating a government facility.', risk: 'APTs can steal trade secrets over years without ever being detected.', tips: ['Look for unusual outbound traffic.', 'Implement defense in depth.', 'Assume you have already been breached.'] },
  { title: 'Penetration Testing Methodologies', icon: 'Crosshair', analogy: 'Like hiring a professional thief to test your home security system.', risk: 'If you don’t test your own defenses, real hackers will do it for you.', tips: ['Define clear scopes for pen tests.', 'Fix findings promptly.', 'Test social engineering as well as tech.'] },
  { title: 'Digital Forensics', icon: 'Search', analogy: 'Like a CSI team dusting for fingerprints after a digital crime.', risk: 'Without forensics, you’ll never know how the hackers got in or what they took.', tips: ['Preserve evidence immediately.', 'Don’t turn off a compromised machine (pull the plug instead).', 'Keep detailed logs.'] },
  { title: 'Incident Response Planning', icon: 'ClipboardList', analogy: 'Like a fire drill; everyone needs to know exactly what to do when the alarm sounds.', risk: 'Panic during a breach leads to costly mistakes and longer downtime.', tips: ['Create a written IR plan.', 'Conduct tabletop exercises.', 'Have an out-of-band communication method.'] },

  // Chapter 4: Data Privacy & Protection
  { title: 'Threat Intelligence', icon: 'Brain', analogy: 'Like checking the weather forecast for incoming cyber storms.', risk: 'Ignoring threat intelligence means you’re blind to new attacks targeting your industry.', tips: ['Subscribe to industry threat feeds.', 'Share indicators of compromise (IoCs).', 'Automate threat feed ingestion.'] },
  { title: 'Cryptography Algorithms', icon: 'Hash', analogy: 'Like a complex math puzzle that takes a supercomputer a million years to solve.', risk: 'Weak cryptography can be cracked in seconds, exposing your secrets.', tips: ['Use AES-256 for data at rest.', 'Avoid deprecated algorithms like MD5.', 'Salt your password hashes.'] },
  { title: 'Web Application Security (OWASP)', icon: 'Globe', analogy: 'Like making sure the front door of your online store can’t be easily picked.', risk: 'Web vulnerabilities can allow hackers to steal your entire customer database.', tips: ['Familiarize yourself with the OWASP Top 10.', 'Implement Content Security Policy (CSP).', 'Use a Web Application Firewall (WAF).'] },
  { title: 'API Security', icon: 'Terminal', analogy: 'Like securing the secret back doors that apps use to talk to each other.', risk: 'Unsecured APIs are a massive blind spot that hackers exploit to drain data.', tips: ['Require authentication for all APIs.', 'Implement rate limiting.', 'Validate all API input.'] },
  { title: 'Container Security (Docker/K8s)', icon: 'Box', analogy: 'Like inspecting shipping containers to ensure nothing dangerous is inside.', risk: 'A compromised container can infect the entire server it runs on.', tips: ['Scan container images for vulnerabilities.', 'Don’t run containers as root.', 'Keep base images minimal.'] },
  { title: 'Network Traffic Analysis', icon: 'Activity', analogy: 'Like monitoring highway traffic to spot a getaway car.', risk: 'Without traffic analysis, data exfiltration looks just like normal internet usage.', tips: ['Baseline normal network behavior.', 'Look for large, unexpected data transfers.', 'Monitor DNS requests.'] },
  { title: 'Reverse Engineering Malware', icon: 'Cpu', analogy: 'Like taking apart a captured enemy weapon to see how it works.', risk: 'If you don’t understand the malware, you can’t build a defense against it.', tips: ['Only analyze malware in an isolated sandbox.', 'Use tools like Ghidra or IDA Pro.', 'Look for hardcoded C2 domains.'] },
  { title: 'Security Information and Event Management (SIEM)', icon: 'Layers', analogy: 'Like a central command center that watches all security alarms at once.', risk: 'Without a SIEM, you’ll drown in alerts and miss the actual attack.', tips: ['Tune alerts to reduce fatigue.', 'Correlate logs from multiple sources.', 'Ensure logs are tamper-proof.'] },
  { title: 'Exploit Development', icon: 'TerminalSquare', analogy: 'Like learning how to pick a lock so you can build a better one.', risk: 'Understanding exploits is necessary to defend against sophisticated zero-day attacks.', tips: ['Understand memory management.', 'Learn assembly language.', 'Practice on vulnerable VMs.'] },
  { title: 'Kernel-Level Rootkits', icon: 'Cpu', analogy: 'Like a parasite that takes over the brain of your computer.', risk: 'Rootkits hide so deep in your system that normal antivirus can’t see them.', tips: ['Enable Secure Boot.', 'Monitor for unexpected hidden files.', 'Rebuild from scratch if infected.'] },

  // Chapter 5: Cyber Resilience & Future Tech
  { title: 'Advanced Cryptanalysis', icon: 'Unlock', analogy: 'Like finding the structural weakness in a bank vault.', risk: 'Cryptanalysis can render previously "secure" encryption completely useless.', tips: ['Stay updated on cryptographic standards.', 'Use key lengths recommended by NIST.', 'Prepare for crypto-agility.'] },
  { title: 'Hardware Hacking & IoT Security', icon: 'Cpu', analogy: 'Like a burglar breaking in through your smart fridge.', risk: 'Insecure smart devices can be used to spy on you or launch massive attacks.', tips: ['Put IoT devices on a separate network.', 'Change default IoT passwords.', 'Disable UPnP on your router.'] },
  { title: 'SCADA and ICS Security', icon: 'Factory', analogy: 'Like guarding the controls to the city’s water and power supply.', risk: 'Hacking industrial systems can cause real-world physical damage and power outages.', tips: ['Air-gap critical control systems.', 'Monitor for unauthorized logic changes.', 'Restrict physical access to controllers.'] },
  { title: 'Quantum Cryptography', icon: 'Atom', analogy: 'Like a message that instantly destroys itself if anyone tries to intercept it.', risk: 'Quantum computers will soon be able to crack the encryption we use today.', tips: ['Research post-quantum cryptography.', 'Inventory your current cryptographic assets.', 'Plan for future migrations.'] },
  { title: 'AI and Machine Learning in Cybersecurity', icon: 'Bot', analogy: 'Like a tireless robot guard dog that learns to recognize new threats.', risk: 'Hackers are using AI; if defenders don’t, they will be outmatched.', tips: ['Use AI to automate repetitive analysis.', 'Don’t blindly trust AI decisions.', 'Monitor AI models for drift.'] },
  { title: 'Adversarial Machine Learning', icon: 'BrainCircuit', analogy: 'Like wearing a disguise that tricks facial recognition cameras.', risk: 'Attackers can trick AI security systems into ignoring obvious malware.', tips: ['Train models with adversarial examples.', 'Keep training data secure.', 'Implement human-in-the-loop checks.'] },
  { title: 'Zero-Day Vulnerability Research', icon: 'Search', analogy: 'Like discovering a secret tunnel into a fortress that no one else knows about.', risk: 'Zero-days are the most dangerous weapons in a hacker’s arsenal.', tips: ['Implement network segmentation.', 'Use behavior-based detection.', 'Have a rapid patching process.'] },
  { title: 'Nation-State Cyber Warfare', icon: 'Globe', analogy: 'Like invisible armies fighting battles over power grids and elections.', risk: 'State-sponsored attacks can cripple a country’s infrastructure and economy.', tips: ['Follow government security advisories.', 'Protect critical intellectual property.', 'Assume a highly resourced adversary.'] },
  { title: 'Advanced Red Teaming Operations', icon: 'Flag', analogy: 'Like a highly realistic war game to test your ultimate defenses.', risk: 'If you don’t simulate real attacks, your security team won’t be ready for one.', tips: ['Use external red teams for objectivity.', 'Test physical and cyber defenses together.', 'Focus on the "assume breach" mentality.'] },
  { title: 'Cybersecurity Policy and Governance', icon: 'FileText', analogy: 'Like the rulebook that keeps the entire organization from making foolish mistakes.', risk: 'Without governance, security is just a chaotic guessing game.', tips: ['Align security with business goals.', 'Enforce policies consistently.', 'Review policies annually.'] }
];

const generateTopics = (): Topic[] => {
  const topics: Topic[] = [];
  
  for (let i = 0; i < 50; i++) {
    const t = topicsData[i];
    const chapterIndex = Math.floor(i / 10);
    const chapter = chapters[chapterIndex];
    
    topics.push({
      id: `topic-${i + 1}`,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      title: t.title,
      level: 'Beginner',
      icon: t.icon,
      overview: `Welcome to ${t.title}. This topic is part of ${chapter.title}.`,
      simpleExplanation: t.analogy,
      whyItMatters: t.risk,
      explanation: `In this beginner-friendly module, we explore ${t.title}. ${t.analogy} ${t.risk} By understanding these concepts, you take a major step toward securing your digital life.`,
      realWorldExample: `A common real-world example of ${t.title} involves attackers exploiting everyday habits. For instance, ${t.risk.toLowerCase()}`,
      securityTips: t.tips,
      summary: `To sum up, ${t.title} is essential because ${t.risk.toLowerCase()} Stay vigilant and apply these beginner-friendly concepts.`,
      quiz: [
        {
          id: `q${i}-1`,
          question: `What is the best analogy for ${t.title}?`,
          options: [
            t.analogy,
            'Like leaving your car running with the doors open.',
            'Like writing your PIN on your debit card.',
            'Like shouting your secrets in a crowded room.'
          ],
          correctAnswerIndex: 0,
          explanation: `As we learned, ${t.title} is ${t.analogy.toLowerCase()}`
        },
        {
          id: `q${i}-2`,
          question: `Why does ${t.title} matter in the real world?`,
          options: [
            'It only affects large corporations.',
            t.risk,
            'It makes your computer run faster.',
            'It is a compliance requirement with no real risk.'
          ],
          correctAnswerIndex: 1,
          explanation: `The primary risk is that ${t.risk.toLowerCase()}`
        },
        {
          id: `q${i}-3`,
          question: `Which of the following is a recommended security tip for ${t.title}?`,
          options: [
            'Share your passwords with trusted friends.',
            t.tips[0],
            'Disable your firewall to improve internet speed.',
            'Click on links in urgent emails immediately.'
          ],
          correctAnswerIndex: 1,
          explanation: `${t.tips[0]} is a fundamental security tip for this topic.`
        }
      ]
    });
  }
  return topics;
};

export const LEARNING_TOPICS = generateTopics();

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  summary: string;
  keywords: string[];
  thumbnailUrl: string;
  driveVideoUrl: string;
}

export function getStreamableVideoUrl(videoItem: { title: string; driveVideoUrl?: string }): string {
  if (videoItem.driveVideoUrl && videoItem.driveVideoUrl.includes("dropbox.com")) {
    return videoItem.driveVideoUrl
      .replace("dl=0", "raw=1")
      .replace("www.dropbox.com", "dl.dropboxusercontent.com");
  }

  const folderBase = "https://www.dropbox.com/scl/fo/fjvgw8v4s3xzwda9uw41t/ADc0bdjQrJyzzkoYOADrFVI/Watch%20and%20Learn/Video%20Files";
  const rlkey = "k4mh7rxkk1jpmwbv89or4g7d4";
  const fileName = videoItem.title.endsWith(".mp4") ? videoItem.title : `${videoItem.title}.mp4`;
  
  return `${folderBase}?rlkey=${rlkey}&raw=1&preview=${encodeURIComponent(fileName)}`;
}

export const TOPIC_GROUPS = [
  {
    pillar: "Mind & Emotions",
    topics: [
      "Psychology",
      "Emotional Intelligence",
      "Stress & Overwhelm",
      "Overthinking"
    ],
  },
  {
    pillar: "Relationships",
    topics: [
      "Love & Relationships",
      "Narcissistic Abuse",
      "Toxic Relationship Patterns"
    ],
  },
  {
    pillar: "Personal Growth",
    topics: [
      "Self-Sabotage",
      "Shadow Work",
      "Inner Child Healing",
      "Motivation & Purpose"
    ],
  },
  {
    pillar: "Understanding Behavior",
    topics: [
      "Psychological Paradoxes & Effects",
      "Childhood & Family Patterns"
    ],
  },
];

export const CATEGORIES = [
  "All Videos",
  "Psychology",
  "Emotional Intelligence",
  "Stress & Overwhelm",
  "Overthinking",
  "Love & Relationships",
  "Narcissistic Abuse",
  "Toxic Relationship Patterns",
  "Self-Sabotage",
  "Shadow Work",
  "Inner Child Healing",
  "Motivation & Purpose",
  "Psychological Paradoxes & Effects",
  "Childhood & Family Patterns",
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    "id": "v-1",
    "title": "Choose People Who Choose You",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "The right people make connections feel safe instead of lonely. A healthy circle is built with people who respect someone’s worth and choose them without conditions.",
    "keywords": [
      "Motivation",
      "Relationships",
      "Friendship",
      "EmotionalHealth",
      "Boundaries"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Choose People Who Choose You.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v49/preview"
  },
  {
    "id": "v-2",
    "title": "When Loyalty Becomes A Cage",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Loyalty becomes unhealthy when staying silent feels safer than being honest. Real love allows loyalty to be chosen freely without making someone lose themselves.",
    "keywords": [
      "Relationships",
      "Loyalty",
      "SelfRespect",
      "EmotionalHealth",
      "Love"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Loyalty Becomes A Cage.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v168/preview"
  },
  {
    "id": "v-3",
    "title": "6 Signs Of Power Tripping",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Power tripping shows up when authority turns into control instead of responsibility. Recognizing the signs early can make it easier to set boundaries and respond with clarity.",
    "keywords": [
      "Listicle",
      "Boundaries",
      "Leadership",
      "EmotionalIntelligence",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Signs Of Power Tripping.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v33/preview"
  },
  {
    "id": "v-4",
    "title": "Why Courage Feels So Difficult",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:30 min",
    "summary": "Courage feels difficult because the things that matter most often come with fear. Real courage is moving forward with that fear instead of waiting for it to disappear.",
    "keywords": [
      "ParadoxandEffects",
      "Fear",
      "PersonalGrowth",
      "Mindset",
      "Confidence"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Courage Feels So Difficult.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v185/preview"
  },
  {
    "id": "v-5",
    "title": "When Being Seen Feels Dangerous",
    "category": "Childhood & Family Patterns",
    "duration": "1:30 min",
    "summary": "Being invisible can feel safer when being noticed once felt dangerous. What protected someone in childhood can later keep them silent when their voice deserves space.",
    "keywords": [
      "Childhood",
      "Healing",
      "SelfWorth",
      "EmotionalSafety",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Being Seen Feels Dangerous.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v157/preview"
  },
  {
    "id": "v-6",
    "title": "Anger Is Not Real Strength",
    "category": "Emotional Intelligence",
    "duration": "1:10 min",
    "summary": "Anger can look powerful in the moment, but losing control often shows the opposite. Real strength comes from staying grounded and choosing a response instead of letting emotion take over.",
    "keywords": [
      "EmotionalIntelligence",
      "Anger",
      "SelfControl",
      "Mindset",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Anger Is Not Real Strength.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v41/preview"
  },
  {
    "id": "v-7",
    "title": "Why Awareness Changes Nothing Sometimes",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Knowing the problem is not the same as being ready to change it. Some patterns stay in place because they are tied to old fears that once helped someone feel safe.",
    "keywords": [
      "Psychology",
      "SelfAwareness",
      "Change",
      "Healing",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Awareness Changes Nothing Sometimes.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v179/preview"
  },
  {
    "id": "v-8",
    "title": "The Only Opinions That Matter",
    "category": "Motivation & Purpose",
    "duration": "1:15 min",
    "summary": "Worrying about everyone else’s opinion can make people forget what kind of life actually feels true to them. The opinions that matter most come from the person they once were and the person they are still becoming.",
    "keywords": [
      "Motivation",
      "Authenticity",
      "PersonalGrowth",
      "LifeReminder",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Only Opinions That Matter.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v134/preview"
  },
  {
    "id": "v-9",
    "title": "Why Intimacy Feels So Scary",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Intimacy can feel frightening because it means letting someone see the parts that are usually hidden. Guarding against vulnerability may feel safer at first, but it can also keep real closeness out of reach.",
    "keywords": [
      "Relationships",
      "Intimacy",
      "Vulnerability",
      "EmotionalConnection",
      "Love"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Intimacy Feels So Scary.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v196/preview"
  },
  {
    "id": "v-10",
    "title": "Loneliness Hides Behind Independence",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:05 min",
    "summary": "Independence can feel like strength when relying on people has led to disappointment. Doing everything alone can become so familiar that loneliness starts to feel normal.",
    "keywords": [
      "Listicle",
      "Independence",
      "Connection",
      "Relationships",
      "EmotionalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Loneliness Hides Behind Independence.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v89/preview"
  },
  {
    "id": "v-11",
    "title": "Why Your Problems Feel Harder",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:05 min",
    "summary": "Personal problems often feel harder because emotions make it difficult to see clearly. Solomon’s Paradox shows why people can give wise advice to others while struggling to apply the same wisdom to themselves.",
    "keywords": [
      "ParadoxesandEffects",
      "SolomonsParadox",
      "SelfReflection",
      "Clarity",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Problems Feel Harder.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v243/preview"
  },
  {
    "id": "v-12",
    "title": "Your Childhood Still Controls You",
    "category": "Stress & Overwhelm",
    "duration": "2:15 min",
    "summary": "Mistakes can feel overwhelming when someone grew up believing that being wrong could cost them love or approval. What looks like overthinking in adulthood may actually be an old fear that never had the chance to heal.",
    "keywords": [
      "Childhood",
      "Healing",
      "InnerChild",
      "SelfCompassion",
      "EmotionalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Childhood Still Controls You.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v266/preview"
  },
  {
    "id": "v-13",
    "title": "Why Their Success Triggers You",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Jealousy can reveal what someone wants but does not believe they can have. When understood clearly, that feeling can become motivation instead of resentment.",
    "keywords": [
      "EmotionalIntelligence",
      "Jealousy",
      "Comparison",
      "SelfAwareness",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Their Success Triggers You.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v214/preview"
  },
  {
    "id": "v-14",
    "title": "Why You Push People Away",
    "category": "Toxic Relationship Patterns",
    "duration": "1:10 min",
    "summary": "Pushing people away can feel safer when love has felt uncertain before. Healing starts when people stop testing who will stay and begin recognizing steady connection as something safe.",
    "keywords": [
      "Psychology",
      "AttachmentStyle",
      "EmotionalHealing",
      "SelfProtection",
      "Love"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Push People Away.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v230/preview"
  },
  {
    "id": "v-15",
    "title": "You Keep Second Guessing Yourself",
    "category": "Overthinking",
    "duration": "1:30 min",
    "summary": "Fear of making the wrong choice can keep people stuck searching for certainty that life cannot promise. Real regret often comes from ignoring what feels honest and never giving growth a chance.",
    "keywords": [
      "Motivation",
      "Overthinking",
      "PersonalGrowth",
      "DecisionMaking",
      "GrowthMindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Keep Second Guessing Yourself.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v255/preview"
  },
  {
    "id": "v-16",
    "title": "Love Gets Hard Before Real",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "Love feels easy when everything is going well, but real relationships are revealed during difficult moments. This video looks at how genuine connection grows when two people stop expecting perfection and learn to accept each other as they are.",
    "keywords": [
      "Relationships",
      "Love",
      "EmotionalConnection",
      "Acceptance",
      "Trust"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Love Gets Hard Before Real.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v90/preview"
  },
  {
    "id": "v-17",
    "title": "3 Way Depression Hides Itself",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Most people think depression is easy to spot, but sometimes it hides behind a smile or constant frustration. Three common signs reveal how depression can show up without looking like depression at all.",
    "keywords": [
      "Listicle",
      "Depression",
      "Irritability",
      "EmotionalHealth",
      "HiddenStruggles"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/3 Ways Depression Hides Itself.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_17/preview"
  },
  {
    "id": "v-18",
    "title": "When Fear Keeps You Stuck",
    "category": "Motivation & Purpose",
    "duration": "1:10 min",
    "summary": "Fear of loss can keep people stuck in situations they've already outgrown. Loss aversion helps explain why letting go often feels harder than staying, even when change could lead to something better.",
    "keywords": [
      "Psychology",
      "SelfAwareness",
      "Mindset",
      "HumanBehavior",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Fear Keeps You Stuck.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v160/preview"
  },
  {
    "id": "v-19",
    "title": "Your Inner Child Runs Everything",
    "category": "Inner Child Healing",
    "duration": "1:30 min",
    "summary": "Many of the reactions that shape your life today were learned long ago. Childhood coping patterns can continue influencing your relationships, decisions, and self-talk until you become aware of them.",
    "keywords": [
      "Childhood",
      "SelfAwareness",
      "Healing",
      "PersonalGrowth",
      "ChildhoodPatterns"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Inner Child Runs Everything.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v269/preview"
  },
  {
    "id": "v-20",
    "title": "Why Your Friendship Feels Lonely",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:30 min",
    "summary": "Some friendships can leave you feeling alone even when you're surrounded by people. The floater friend effect highlights why being included isn't always the same as feeling like you truly belong.",
    "keywords": [
      "Psychology",
      "Friendship",
      "Loneliness",
      "Belonging",
      "SocialDynamics",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Friendship Feels Lonely.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v241/preview"
  },
  {
    "id": "v-21",
    "title": "Your Purpose May Be Changing",
    "category": "Motivation & Purpose",
    "duration": "1:45 min",
    "summary": "Sometimes feeling disconnected from a goal isn't a sign that you failed. Purpose can evolve over time, leaving even long-held ambitions feeling out of step with who you've become.",
    "keywords": [
      "Motivation",
      "Purpose",
      "Aligned",
      "Mental",
      "Priorities"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Purpose May Be Changing.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v270/preview"
  },
  {
    "id": "v-22",
    "title": "You’re Still Afraid To love",
    "category": "Love & Relationships",
    "duration": "2:05 min",
    "summary": "After heartbreak, protecting yourself can feel easier than opening up again. Healing can reshape your relationship with love, while trust is rebuilt through consistency rather than intensity.",
    "keywords": [
      "Relationships",
      "Heartbreak",
      "Healing",
      "Trust",
      "Love",
      "RelationshipAdvice"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You’re Still Afraid To Love.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v271/preview"
  },
  {
    "id": "v-23",
    "title": "4 Habits Fix Most Problems",
    "category": "Stress & Overwhelm",
    "duration": "2:05 min",
    "summary": "Small habits can affect how you handle stress and conflict. Four simple practices can help improve your reactions, mood, and communication.",
    "keywords": [
      "Listicle",
      "Habits",
      "Stress",
      "Communication",
      "MentalHealth",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Habits Fix Most Problems.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v12/preview"
  },
  {
    "id": "v-24",
    "title": "Why Group Projects Feel Unfair",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:10 min",
    "summary": "Group projects often leave one person carrying more of the workload than everyone else. Social loafing helps explain why people tend to contribute less when responsibility is shared across a group.",
    "keywords": [
      "ParadoxesandEffects",
      "GroupProjects",
      "Teamwork",
      "HumanBehavior",
      "SocialPsychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Group Projects Feel Unfair.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v195/preview"
  },
  {
    "id": "v-25",
    "title": "You Were The Family Therapist",
    "category": "Childhood & Family Patterns",
    "duration": "1:20 min",
    "summary": "Some children grow up feeling responsible for the emotions of the adults around them. This video explores how that experience can shape the way they relate to themselves and others later in life.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Healing",
      "PeoplePleasing",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Were The Family Therapist.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v261/preview"
  },
  {
    "id": "v-26",
    "title": "What Your Anger Is Hiding",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Anger is often a reaction to emotions that haven't been acknowledged or expressed. This video looks at what can be underneath anger and why recognizing those feelings can change the way we communicate.",
    "keywords": [
      "EmotionalIntelligence",
      "Anger",
      "Communication",
      "Relationships",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What Your Anger Is Hiding.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v155/preview"
  },
  {
    "id": "v-27",
    "title": "Your Brain Deleted Parts Of You",
    "category": "Childhood & Family Patterns",
    "duration": "1:45 min",
    "summary": "Some people remember very little of their childhood and assume it does not mean anything. This video explores why memory gaps can develop and how they can affect the way people relate to themselves later in life.",
    "keywords": [
      "Psychology",
      "Memory",
      "ChildhoodTrauma",
      "Healing",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Brain Deleted Parts Of You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v263/preview"
  },
  {
    "id": "v-28",
    "title": "Borrowed Dreams Create Empty Lives",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Living according to other people's expectations can leave you feeling disconnected from your own life. This video explores what happens when the goals you're chasing no longer reflect who you are or what you truly want.",
    "keywords": [
      "EmotionalIntelligence",
      "Purpose",
      "PersonalGrowth",
      "Authenticity",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Borrowed Dreams Create Empty Lives.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v43/preview"
  },
  {
    "id": "v-29",
    "title": "You Lost Yourself Loving Them",
    "category": "Love & Relationships",
    "duration": "2:05 min",
    "summary": "Heartbreak can leave you grieving more than the relationship itself. This video explores what it means to reconnect with yourself after losing sight of who you were within a relationship.",
    "keywords": [
      "Relationships",
      "Heartbreak",
      "Healing",
      "SelfDiscovery",
      "PersonalGrowth",
      "Love"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Lost Yourself Loving Them.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v257/preview"
  },
  {
    "id": "v-30",
    "title": "10 Signs You’re Just Surviving",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Many people live in survival mode without realizing it. This video highlights ten signs that your mind and body may still be operating from a place of protection rather than safety.",
    "keywords": [
      "Listicle",
      "SurvivalMode",
      "Trauma",
      "Healing",
      "MentalHealth",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/10 Signs Youre Just Surviving.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_30/preview"
  },
  {
    "id": "v-31",
    "title": "You Crave What’s Forbidden",
    "category": "Shadow Work",
    "duration": "2:05 min",
    "summary": "The more people feel forced, pressured, or restricted, the more likely they are to resist. This video explores reactance and why being told \"no\" can make something even harder to ignore.",
    "keywords": [
      "ParadoxesandEffects",
      "Reactance",
      "HumanBehavior",
      "Persuasion",
      "PsychologyFacts"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Crave What’s Forbidden.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v250/preview"
  },
  {
    "id": "v-32",
    "title": "Sorry Was Your Survival Strategy",
    "category": "Childhood & Family Patterns",
    "duration": "1:15 min",
    "summary": "Constantly apologizing can be about more than manners. This video explores why some people say sorry for things that are not their fault and how that pattern can be connected to earlier experiences.",
    "keywords": [
      "Psychology",
      "PeoplePleasing",
      "ChildhoodTrauma",
      "Healing",
      "SelfWorth&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Sorry Was Your Survival Strategy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v99/preview"
  },
  {
    "id": "v-33",
    "title": "Calm People Control The Room",
    "category": "Emotional Intelligence",
    "duration": "1:30 min",
    "summary": "Reacting less can completely change the direction of a difficult conversation. This video looks at why staying calm gives you more control than matching someone else's emotions.",
    "keywords": [
      "EmotionalIntelligence",
      "Communication",
      "ConflictResolution",
      "SelfControl",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Calm People Control The Room.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v45/preview"
  },
  {
    "id": "v-34",
    "title": "Good People Feel Guilty First",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "Many people feel guilty when they start setting boundaries, even when those boundaries are reasonable. This video explores why saying no can feel uncomfortable and how boundaries help create healthier relationships.",
    "keywords": [
      "Psychology",
      "Boundaries",
      "SelfWorth",
      "Relationships",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Good People Feel Guilty First.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v55/preview"
  },
  {
    "id": "v-35",
    "title": "You Outgrew Your Old Life",
    "category": "Motivation & Purpose",
    "duration": "1:10 min",
    "summary": "Outgrowing an old version of yourself can change the way you see your relationships, priorities, and future. This video explores what happens when the life that once fit no longer feels aligned with who you're becoming.",
    "keywords": [
      "Motivation",
      "SelfDiscovery",
      "PersonalGrowth",
      "Boundaries",
      "LifeChanges"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Outgrew Your Old Life.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v258/preview"
  },
  {
    "id": "v-36",
    "title": "Love Lost But Fear Won",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Heartbreak can make self-protection feel safer than connection. This video explores how fear can linger after trust is broken and why healing means learning to let people in again.",
    "keywords": [
      "Relationships",
      "Heartbreak",
      "Trust",
      "Healing",
      "Love",
      "Attachment"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Love Lost But Fear Won.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v91/preview"
  },
  {
    "id": "v-37",
    "title": "5 Rules You Should Break",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Some of the advice people grow up hearing can become limiting over time. This video looks at five common rules that may be worth questioning as you learn more about yourself.",
    "keywords": [
      "Listicle",
      "SelfAwareness",
      "PersonalGrowth",
      "Mindset",
      "LifeLessons"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Rules You Should Break.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v22/preview"
  },
  {
    "id": "v-38",
    "title": "Your Brain Hates Good News",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:05 min",
    "summary": "One negative experience can stick with you longer than many positive ones. This video explores negativity dominance and why the brain tends to give more weight to bad news than good news.",
    "keywords": [
      "ParadoxesandEffects",
      "NegativityDominance",
      "HumanBehavior",
      "PsychologyFacts",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Brain Hates Good News.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v264/preview"
  },
  {
    "id": "v-39",
    "title": "You Grew Up Too Soon",
    "category": "Childhood & Family Patterns",
    "duration": "1:15 min",
    "summary": "Some children take on responsibilities that were never meant to be theirs. This video explores what happens when a child becomes the emotional support system in a family and how that experience can carry into adulthood.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Parentification",
      "Healing",
      "InnerChild&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Grew Up Too Soon.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v253/preview"
  },
  {
    "id": "v-40",
    "title": "How Emotional Intelligence Actually Works",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Emotional intelligence is about understanding emotions and responding to them effectively. This video explains what emotional intelligence is and how it influences the way we relate to ourselves and other people.",
    "keywords": [
      "EmotionalIntelligence",
      "SelfAwareness",
      "Empathy",
      "Communication",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Emotional Intelligence Actually Works.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v61/preview"
  },
  {
    "id": "v-41",
    "title": "You Overthink Every Small Reaction",
    "category": "Overthinking",
    "duration": "2:15 min",
    "summary": "Overthinking often starts with assigning meaning to every text, delay, or change in someone's behavior. This video explores why some people become hyperaware of small reactions and how that pattern can affect relationships.",
    "keywords": [
      "Psychology",
      "Overthinking",
      "Anxiety",
      "Relationships",
      "Attachment"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Overthink Every Small Reaction.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v259/preview"
  },
  {
    "id": "v-42",
    "title": "Why Your Mind Turns Against",
    "category": "Motivation & Purpose",
    "duration": "1:45 min",
    "summary": "Many people are harder on themselves than they would ever be on someone else. This video explores why self-criticism can become an automatic response to mistakes and how it affects confidence over time.",
    "keywords": [
      "Motivation",
      "SelfCriticism",
      "Confidence",
      "SelfWorth",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Mind Turns Against.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v242/preview"
  },
  {
    "id": "v-43",
    "title": "Questions That Create Real Connection",
    "category": "Love & Relationships",
    "duration": "2:05 min",
    "summary": "Strong relationships are built through conversations that go beyond the surface. This video shares questions that can help partners better understand each other's needs, fears, and experiences.",
    "keywords": [
      "Relationships",
      "Communication",
      "EmotionalIntimacy",
      "Love",
      "RelationshipAdvice",
      "Connection"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Questions That Create Real Connection.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v96/preview"
  },
  {
    "id": "v-44",
    "title": "6 Thoughts Trigger Social Anxiety",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:10 min",
    "summary": "Certain thought patterns can make social situations feel much harder than they need to be. This video covers six common ways people unintentionally fuel social anxiety.",
    "keywords": [
      "Listicle",
      "Psychology",
      "SocialAnxiety",
      "Anxiety",
      "MentalHealth",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Thoughts Trigger Social Anxiety.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v34/preview"
  },
  {
    "id": "v-45",
    "title": "Why You Feel Drained Often",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:15 min",
    "summary": "Feeling drained or out of place is a common experience for people with a melancholic temperament. This video looks at what that temperament is and how it shapes a person's experience of life.",
    "keywords": [
      "ParadoxesandEffects",
      "Psychology",
      "Melancholic",
      "PersonalityTypes",
      "HumanBehavior&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Feel Drained Often.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v224/preview"
  },
  {
    "id": "v-46",
    "title": "Stop Proving You Are Enough",
    "category": "Childhood & Family Patterns",
    "duration": "1:15 min",
    "summary": "Some people feel like they always have to prove themselves. This video explores how self-worth can become tied to achievement and why that belief can be difficult to let go of.",
    "keywords": [
      "Childhood",
      "SelfWorth",
      "Psychology",
      "Healing",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Proving You Are Enough.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v106/preview"
  },
  {
    "id": "v-47",
    "title": "Spot Fake Friends Early",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Not every friendship is as genuine as it seems. This video looks at the signs that can reveal when someone is not as supportive as they appear.",
    "keywords": [
      "EmotionalIntelligence",
      "Friendship",
      "Relationships",
      "Psychology",
      "SocialDynamics"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Spot Fake Friends Early.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v100/preview"
  },
  {
    "id": "v-48",
    "title": "Calm Outside Tense Inside You",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Some people appear calm on the outside while feeling constantly alert on the inside. This video explores why the body can stay on guard long after stressful situations have passed.",
    "keywords": [
      "Psychology",
      "Trauma",
      "Anxiety",
      "NervousSystem",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Calm Outside Tense Inside You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v44/preview"
  },
  {
    "id": "v-49",
    "title": "Why You Doubt Every Decision",
    "category": "Stress & Overwhelm",
    "duration": "1:10 min",
    "summary": "Constantly second-guessing yourself can make even small choices feel overwhelming. This video looks at where decision doubt comes from and how self-trust is built over time.",
    "keywords": [
      "Psychology",
      "SelfTrust",
      "Confidence",
      "Mindset",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Doubt Every Decision.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v223/preview"
  },
  {
    "id": "v-50",
    "title": "Stop Trying To Fix People",
    "category": "Love & Relationships",
    "duration": "1:45 min",
    "summary": "Caring about someone does not mean taking responsibility for their healing. This video explores the difference between supporting someone and trying to change them.",
    "keywords": [
      "Psychology",
      "Relationships",
      "Boundaries",
      "SelfWorth",
      "RelationshipAdvice"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Trying To Fix People.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v109/preview"
  },
  {
    "id": "v-51",
    "title": "Signs You’re Secretly Depressed",
    "category": "Stress & Overwhelm",
    "duration": "2:15 min",
    "summary": "Depression does not always look like sadness. This video highlights several signs that can appear when someone is struggling, even if they do not recognize it themselves.",
    "keywords": [
      "Psychology",
      "Depression",
      "overwhelmed",
      "MentalHealthAwareness",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Signs You’re Secretly Depressed.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v98/preview"
  },
  {
    "id": "v-52",
    "title": "You Learned To Avoid People",
    "category": "Childhood & Family Patterns",
    "duration": "1:45 min",
    "summary": "Avoidant attachment can make closeness feel uncomfortable, even when connection is wanted. This video explores how early experiences can shape the way people approach relationships later in life.",
    "keywords": [
      "Childhood",
      "AvoidantAttachment",
      "AttachmentTheory",
      "Psychology",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Learned To Avoid People.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v256/preview"
  },
  {
    "id": "v-53",
    "title": "Acting Tough Is Actually Weak",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Losing control is often mistaken for strength. This video looks at why self-control earns more respect than aggression and how emotional intelligence shapes the way people respond under pressure.",
    "keywords": [
      "EmotionalIntelligence",
      "Psychology",
      "SelfControl",
      "Communication",
      "ConflictResolution"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Acting Tough Is Actually Weak.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v40/preview"
  },
  {
    "id": "v-54",
    "title": "Your Ex Still Controls You",
    "category": "Love & Relationships",
    "duration": "1:15 min",
    "summary": "Checking an ex's social media can keep a breakup feeling unfinished. This video explores why the brain continues searching for connection after a relationship ends and how that can make it harder to move on.",
    "keywords": [
      "Relationships",
      "Breakup",
      "Healing",
      "Psychology",
      "Attachment",
      "MovingOn"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Ex Still Controls You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v267/preview"
  },
  {
    "id": "v-55",
    "title": "Chasing Is Costing You Everything",
    "category": "Motivation & Purpose",
    "duration": "1:10 min",
    "summary": "Constantly chasing love, success, or approval can make it harder to feel satisfied with where you are. This video explores the relationship between self-worth and the need to pursue validation.",
    "keywords": [
      "Psychology",
      "LifeMotivation",
      "SelfWorth",
      "Mindset",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Chasing Is Costing You Everything.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v48/preview"
  },
  {
    "id": "v-56",
    "title": "Motivation Is A Lie",
    "category": "Motivation & Purpose",
    "duration": "1:30 min",
    "summary": "Motivation is often treated as the starting point for action when it is usually the result of taking action first. This video explores why momentum matters more than waiting to feel ready.",
    "keywords": [
      "Motivation",
      "Psychology",
      "Productivity",
      "Mindset",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Motivation Is A Lie.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v94/preview"
  },
  {
    "id": "v-57",
    "title": "5 Burnout Signs You Miss",
    "category": "Stress & Overwhelm",
    "duration": "1:45 min",
    "summary": "Burnout often develops gradually before people recognize what is happening. This video covers five signs that can signal you're running on empty.",
    "keywords": [
      "Listicle",
      "Burnout",
      "MentalHealth",
      "Psychology",
      "Stress"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Burnout Signs You Miss.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v18/preview"
  },
  {
    "id": "v-58",
    "title": "How To Persuade Without Pushing",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:05 min",
    "summary": "The harder people feel pushed, the more likely they are to resist. This video explains the boomerang effect and why questions are often more persuasive than arguments.",
    "keywords": [
      "ParadoxesandEffects",
      "Psychology",
      "BoomerangEffect",
      "Persuasion",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Persuade Without Pushing.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v75/preview"
  },
  {
    "id": "v-59",
    "title": "When Love Feels Like Danger",
    "category": "Childhood & Family Patterns",
    "duration": "1:45 min",
    "summary": "Growing up in an abusive home can change the way safety and connection are experienced later in life. This video explores how those experiences can continue to affect relationships in adulthood.",
    "keywords": [
      "Psychology",
      "Childhood",
      "Trauma",
      "Relationships",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Love Feels Like Danger.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v165/preview"
  },
  {
    "id": "v-60",
    "title": "Stop Taking Things Personally",
    "category": "Emotional Intelligence",
    "duration": "1:30 min",
    "summary": "It is easy to assume other people's actions are about you when they often are not. This video explores why people personalize criticism, distance, and rejection, and how to break that pattern.",
    "keywords": [
      "EmotionalIntelligence",
      "Psychology",
      "SelfWorth",
      "Overthinking",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Taking Things Personally.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v108/preview"
  },
  {
    "id": "v-61",
    "title": "Why Fawning Is Never Kindness",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Always agreeing with others is not necessarily a sign of kindness. This video explores the fawn response and why avoiding conflict can sometimes come at the expense of being honest about your own needs.",
    "keywords": [
      "Psychology",
      "FawnResponse",
      "PeoplePleasing",
      "Boundaries",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Fawning Is Never Kindness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v190/preview"
  },
  {
    "id": "v-62",
    "title": "How Self-Trust Actually Looks",
    "category": "Motivation & Purpose",
    "duration": "1:30 min",
    "summary": "Self-trust is not about always knowing the right answer. This video looks at what self-trust can look like in everyday decisions and moments of uncertainty.",
    "keywords": [
      "Motivation",
      "SelfTrust",
      "PersonalGrowth",
      "Confidence",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Self-Trust Actually Looks.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v66/preview"
  },
  {
    "id": "v-63",
    "title": "Stop Settling For Less",
    "category": "Love & Relationships",
    "duration": "1:20 min",
    "summary": "Many people stay in relationships that do not meet their needs because of fear, self-doubt, or familiarity. This video explores why settling happens and what it can cost over time.",
    "keywords": [
      "Relationships",
      "SelfWorth",
      "Love",
      "Dating",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Settling For Less.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v107/preview"
  },
  {
    "id": "v-64",
    "title": "5 Signs Of Hidden Stress",
    "category": "Stress & Overwhelm",
    "duration": "2:05 min",
    "summary": "Stress often shows up in ways people do not immediately recognize. This video covers five common signs that stress may be affecting your mind and body.",
    "keywords": [
      "Listicle",
      "Stress",
      "MentalHealth",
      "SelfAwareness",
      "Wellbeing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Signs of Hidden Stress.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v26/preview"
  },
  {
    "id": "v-65",
    "title": "The Secret To Making Friends",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:30 min",
    "summary": "The Ben Franklin Effect suggests that helping someone can actually make you like them more. This video explains why doing favors can strengthen social connections.",
    "keywords": [
      "Psychology",
      "BenFranklinEffect",
      "Friendship",
      "SocialPsychology",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Secret To Making Friends.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v143/preview"
  },
  {
    "id": "v-66",
    "title": "When Rules Become A Cage",
    "category": "Childhood & Family Patterns",
    "duration": "1:15 min",
    "summary": "Growing up with strict control can make it difficult to trust your own decisions later in life. This video looks at how control shapes self-trust and why choosing for yourself matters.",
    "keywords": [
      "ParadoxesandEffects",
      "SelfTrust",
      "ChildhoodTrauma",
      "Healing",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Rules Become A Cage.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v169/preview"
  },
  {
    "id": "v-67",
    "title": "Why You Push Love Away",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Pulling away from people you care about is often driven by fear rather than a lack of love. This video explores why some people create distance when relationships start to feel important.",
    "keywords": [
      "Relationships",
      "Attachment",
      "Love",
      "Psychology",
      "EmotionalIntelligence"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Push Love Away.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v229/preview"
  },
  {
    "id": "v-68",
    "title": "The Child Blamed For Everything",
    "category": "Childhood & Family Patterns",
    "duration": "1:45 min",
    "summary": "Scapegoating happens when one child becomes the target of a family's problems and frustrations. This video explores how that role can shape self-worth and identity long into adulthood.",
    "keywords": [
      "Childhood",
      "Scapegoating",
      "FamilyDynamics",
      "Psychology",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Child Blamed For Everything.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v116/preview"
  },
  {
    "id": "v-69",
    "title": "When Kindness Turns Into A Trap",
    "category": "Love & Relationships",
    "duration": "1:20 min",
    "summary": "Inconsistent kindness can make it difficult to see a relationship clearly. This video explores why people often hold on to brief moments of connection while overlooking a larger pattern.",
    "keywords": [
      "Psychology",
      "Relationships",
      "TraumaBond",
      "Attachment",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Kindness Turns Into A Trap.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v163/preview"
  },
  {
    "id": "v-70",
    "title": "Why You Pushed Them Away",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Sometimes the people we walk away from are the ones we end up missing most. This video explores why relationships can seem different after they end and how perspective changes with time.",
    "keywords": [
      "Relationships",
      "Breakups",
      "Love",
      "Psychology",
      "Dating"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Pushed Them Away.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v231/preview"
  },
  {
    "id": "v-71",
    "title": "6 Ways Isolation Damages Romance",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Emotional isolation can slowly weaken even the closest relationships. This video covers six ways withdrawing from others can affect connection, trust, and intimacy.",
    "keywords": [
      "Listicle",
      "Relationships",
      "Isolation",
      "Connection",
      "Psychology&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Ways Isolation Damages Romance.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v36/preview"
  },
  {
    "id": "v-72",
    "title": "When Targets Miss What Matters",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:30 min",
    "summary": "The things we use to measure success can sometimes end up replacing the reason we started in the first place. This video explores Goodhart's Law and how chasing metrics can distort priorities.",
    "keywords": [
      "ParadoxesandEffects",
      "GoodhartsLaw",
      "Psychology",
      "HumanBehavior",
      "BehavioralScience"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Targets Miss What Matters.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v171/preview"
  },
  {
    "id": "v-73",
    "title": "The Kid Who Never Spoke",
    "category": "Inner Child Healing",
    "duration": "2:15 min",
    "summary": "Some children learn that staying quiet earns approval and avoids conflict. This video explores how growing up as the child who never speaks up can affect self-expression and boundaries later in life.",
    "keywords": [
      "Childhood",
      "InnerChild",
      "PeoplePleasing",
      "Psychology",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Kid Who Never Spoke.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v133/preview"
  },
  {
    "id": "v-74",
    "title": "What’s Quietly Holding You Back",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Many adult reactions are rooted in survival responses learned earlier in life. This video explains fight, flight, freeze, and fawn, and how these patterns can continue to shape behavior long after the danger has passed.",
    "keywords": [
      "Psychology",
      "Trauma",
      "FightFlightFreezeFawn",
      "Healing",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What’s Quietly Holding You Back.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v156/preview"
  },
  {
    "id": "v-75",
    "title": "The Secret To Being Heard",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Being heard is often less about what you say and more about how you relate to others. This video explores how emotional intelligence can help people build trust, connection, and influence.",
    "keywords": [
      "EmotionalIntelligence",
      "Communication",
      "Psychology",
      "Influence",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Secret To Being Heard.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v142/preview"
  },
  {
    "id": "v-76",
    "title": "How To Outsmart Your Brain",
    "category": "Motivation & Purpose",
    "duration": "1:45 min",
    "summary": "Progress rarely comes from feeling ready first. This video explores why the brain resists change and how small actions can create momentum before confidence ever shows up.",
    "keywords": [
      "Motivation",
      "Psychology",
      "Mindset",
      "PersonalGrowth",
      "SelfImprovement"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Outsmart Your Brain.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v74/preview"
  },
  {
    "id": "v-77",
    "title": "Stop Guessing If They Care",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Strong relationships are built on more than love alone. This video explores the emotional needs that help people feel secure, valued, and connected in a relationship.",
    "keywords": [
      "Relationships",
      "Love",
      "EmotionalNeeds",
      "Connection",
      "RelationshipAdvice"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Guessing If They Care.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v105/preview"
  },
  {
    "id": "v-78",
    "title": "Why You Stay Stuck",
    "category": "Overthinking",
    "duration": "1:30 min",
    "summary": "Waiting until you feel ready can keep you stuck longer than taking action ever will. This video explores five ways overthinking turns into self-sabotage and prevents people from moving forward.",
    "keywords": [
      "Listicle",
      "Psychology",
      "Overthinking",
      "SelfSabotage",
      "PersonalGrowth&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Stay Stuck.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v234/preview"
  },
  {
    "id": "v-79",
    "title": "Your Brain Is Lying",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:10 min",
    "summary": "We often make decisions based on how we feel in the moment without realizing those feelings will change. This video explains projection bias and why today's emotions can distort the choices we make for our future selves.",
    "keywords": [
      "ParadoxesandEffects",
      "Psychology",
      "ProjectionBias",
      "DecisionMaking",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Brain Is Lying.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v265/preview"
  },
  {
    "id": "v-80",
    "title": "You Shut Down Fast",
    "category": "Overthinking",
    "duration": "1:15 min",
    "summary": "The way you respond to authority is often shaped long before adulthood. This video explores how childhood experiences can influence the reactions you have to criticism, correction, and power dynamics today.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Healing",
      "SelfAwareness",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Shut Down Fast.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v260/preview"
  },
  {
    "id": "v-81",
    "title": "Mastering Love You Never Had",
    "category": "Childhood & Family Patterns",
    "duration": "1:20 min",
    "summary": "Learning to love yourself can be difficult when love was not consistently modeled in childhood. This video explores how self-love is developed and why it can feel unfamiliar at first.",
    "keywords": [
      "Psychology",
      "SelfLove",
      "ChildhoodTrauma",
      "Healing",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Mastering Love You Never Had.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v93/preview"
  },
  {
    "id": "v-82",
    "title": "Why You Can’t Relax",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Feeling restless when you finally slow down doesn't mean you're bad at relaxing. It may be a sign that your nervous system has been in go-mode for so long that slowing down feels unfamiliar. Learning to feel safe in stillness takes time.",
    "keywords": [
      "Physcology",
      "NervousSystem",
      "StressRecovery",
      "Mindfulness",
      "SelfCare"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Cant Relax.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_82/preview"
  },
  {
    "id": "v-83",
    "title": "Why You Can’t Stay Mad",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Some people are quick to forgive because they can easily understand where others are coming from. This video explores how empathy can sometimes make it harder to recognize when a boundary has been crossed.",
    "keywords": [
      "EmotionalIntelligence",
      "Empathy",
      "Boundaries",
      "Relationships",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Can’t Stay Mad.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v222/preview"
  },
  {
    "id": "v-84",
    "title": "Why Stress Feels Normal",
    "category": "Stress & Overwhelm",
    "duration": "1:20 min",
    "summary": "Some people become so used to stress that it stops feeling unusual. This video explores how the brain adapts to chronic stress and why overwhelm can start to feel normal over time.",
    "keywords": [
      "Psychology",
      "Stress",
      "MentalHealth",
      "SelfAwareness",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Stress Feels Normal.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v212/preview"
  },
  {
    "id": "v-85",
    "title": "Control Is Not Love",
    "category": "Love & Relationships",
    "duration": "1:15 min",
    "summary": "Controlling relationships often create self-doubt before people recognize what is happening. This video explores how control can affect a person's sense of self and why healing begins with trusting your own voice again.",
    "keywords": [
      "Relationships",
      "Control",
      "SelfWorth",
      "Healing",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Control Is Not Love.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v50/preview"
  },
  {
    "id": "v-86",
    "title": "Your Gut Is Lying",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:20 min",
    "summary": "People often feel certain they are right long before they have enough evidence to support it. This video explores the illusion of validity and why confidence can sometimes be mistaken for accuracy.",
    "keywords": [
      "ParadoxesandEffects",
      "IllusionOfValidity",
      "Psychology",
      "HumanBehavior",
      "CognitiveBias"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Gut is Lying.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v268/preview"
  },
  {
    "id": "v-87",
    "title": "Is Anxiety Choosing For You?",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Anxiety can influence decisions in ways that feel completely normal at first. This video explores five everyday habits that may be driven more by anxiety than personal preference.",
    "keywords": [
      "Listicle",
      "Psychology",
      "Anxiety",
      "MentalHealth",
      "SelfAwareness&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Is Anxiety Choosing For You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_87/preview"
  },
  {
    "id": "v-88",
    "title": "Don’t Hide Your Failures",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Many people feel pressure to hide their mistakes, especially when something important does not work out. This video explores why being honest about failure can be more valuable than pretending it never happened.",
    "keywords": [
      "EmotionalIntelligence",
      "Failure",
      "Growth",
      "Psychology",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Dont Hide Your Failures.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_88/preview"
  },
  {
    "id": "v-89",
    "title": "When Feelings Have No Words",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Some people struggle to describe what they are feeling even when emotions are present. This video explores alexithymia and the challenge of putting emotions into words.",
    "keywords": [
      "Psychology",
      "Alexithymia",
      "Emotions",
      "MentalHealth",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Feelings Have No Words.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v161/preview"
  },
  {
    "id": "v-90",
    "title": "Why Being Alone Is Healthy",
    "category": "Motivation & Purpose",
    "duration": "2:05 min",
    "summary": "Many people confuse being alone with being lonely, even though they are not the same thing. This video explores how spending time alone can strengthen self-awareness and create healthier relationships.",
    "keywords": [
      "Motivation",
      "SelfAwareness",
      "PersonalGrowth",
      "Psychology",
      "Independence"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Being Alone is Healthy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v180/preview"
  },
  {
    "id": "v-91",
    "title": "Why You Became Emotionally Dependent",
    "category": "Love & Relationships",
    "duration": "1:30 min",
    "summary": "Emotional dependence can develop when a person's sense of security becomes tied to someone else's approval or attention. This video explores how that pattern forms and why it is often mistaken for love.",
    "keywords": [
      "Relationships",
      "EmotionalDependence",
      "Attachment",
      "SelfWorth",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Became Emotionally Dependent.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v220/preview"
  },
  {
    "id": "v-92",
    "title": "4 Signs You Are Quietly Isolating",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Isolation does not always mean being physically alone. This video explores four signs that someone may be becoming disconnected from others without fully realizing it.",
    "keywords": [
      "Listicle",
      "Relationships",
      "Isolation",
      "Connection",
      "MentalHealth&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Signs You Are Quietly Isolating.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v15/preview"
  },
  {
    "id": "v-93",
    "title": "The Pain Of Unproud Parents",
    "category": "Childhood & Family Patterns",
    "duration": "1:30 min",
    "summary": "Some people spend years searching for a sense of accomplishment that never feels complete. This video explores how growing up without parental validation can continue to affect self-worth in adulthood.",
    "keywords": [
      "Childhood",
      "SelfWorth",
      "Healing",
      "Psychology",
      "Childhood"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Pain of Unproud Parents.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v136/preview"
  },
  {
    "id": "v-94",
    "title": "The Skill That Ends Control",
    "category": "Emotional Intelligence",
    "duration": "1:10 min",
    "summary": "Manipulation becomes much harder to spot when emotions take over. This video explores how self-awareness can help people recognize manipulation before getting pulled into it.",
    "keywords": [
      "EmotionalIntelligence",
      "Manipulation",
      "Boundaries",
      "Psychology",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Skill That Ends Control.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v146/preview"
  },
  {
    "id": "v-95",
    "title": "Why Anxious Attachment Chases Love",
    "category": "Love & Relationships",
    "duration": "1:15 min",
    "summary": "People with anxious attachment often experience closeness and distance more intensely than others. This video explores why love can start to feel like something that must be chased rather than something that can be trusted.",
    "keywords": [
      "Relationships",
      "AnxiousAttachment",
      "AttachmentTheory",
      "Love",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Anxious Attachment Chases Love.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v8/preview"
  },
  {
    "id": "v-96",
    "title": "For Everyone Who Feels Everything Too Deeply",
    "category": "Motivation & Purpose",
    "duration": "2:05 min",
    "summary": "Some people experience emotions more intensely and struggle with feeling misunderstood because of it. This video explores sensitivity and why feeling deeply is not something that needs to be changed or hidden.",
    "keywords": [
      "Motivation",
      "Sensitivity",
      "SelfAcceptance",
      "Psychology",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/For Everyone Who Feels Everything Too Deeply.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v54/preview"
  },
  {
    "id": "v-97",
    "title": "Why Breadcrumbing Hurts More Than Rejection",
    "category": "Love & Relationships",
    "duration": "1:15 min",
    "summary": "Uncertainty can be harder to move on from than a clear ending. This video explores why breadcrumbing keeps people emotionally invested and why mixed signals often hurt more than rejection.",
    "keywords": [
      "Relationships",
      "Breadcrumbing",
      "Dating",
      "Attachment",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Breadcrumbing Hurts More than Rejection.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v183/preview"
  },
  {
    "id": "v-98",
    "title": "Why Your Brain Chooses Repetition Over Change",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "In this video, we explore why your brain often chooses familiar pain over unfamiliar change, and how survival patterns can keep you stuck in destructive cycles. Learn the psychology behind repetition, cognitive dissonance, and the small shifts that help retrain your mind to break free and create lasting change.",
    "keywords": [
      "Psychology",
      "Breakthecycle",
      "Repetition",
      "Change",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Brain Chooses Repetition Over Change.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v239/preview"
  },
  {
    "id": "v-99",
    "title": "Stop Calling It Coping You’re Compartmentalizing",
    "category": "Self-Sabotage",
    "duration": "1:15 min",
    "summary": "Some coping habits can look healthy on the surface while keeping difficult emotions out of reach. This video explores compartmentalization and the difference between avoiding feelings and working through them.",
    "keywords": [
      "Psychology",
      "Compartmentalization",
      "MentalHealth",
      "Healing",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Calling It Coping. You’re Compartmentalizing.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_99/preview"
  },
  {
    "id": "v-100",
    "title": "The Barnum Effect: Why Vague Statements Feel Deeply Personal",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Some statements feel deeply personal even when they could apply to almost anyone. This video explores the Barnum Effect and why people are naturally drawn to vague descriptions that seem uniquely true.",
    "keywords": [
      "ParadoxesandEffects",
      "BarnumEffect",
      "Psychology",
      "HumanBehavior",
      "CognitiveBias"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Barnum Effect Why Vague Statements Feel Deeply Personal.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_100/preview"
  },
  {
    "id": "v-101",
    "title": "Why Being Compared To Siblings Hurts More Than You Think",
    "category": "Childhood & Family Patterns",
    "duration": "1:10 min",
    "summary": "Being compared to a sibling can leave lasting doubts about your own value and identity. This video explores how those comparisons can shape self-worth long after childhood ends.",
    "keywords": [
      "Childhood",
      "SelfWorth",
      "FamilyDynamics",
      "Psychology",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Being Compared to Siblings Hurts More Than You Think.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v181/preview"
  },
  {
    "id": "v-102",
    "title": "Think Empathy Means Always Agreeing? Think Again",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Many people assume empathy requires agreement when it actually requires understanding. This video explores how emotional intelligence makes it possible to respect someone else's feelings without abandoning your own perspective.",
    "keywords": [
      "EmotionalIntelligence",
      "Empathy",
      "Communication",
      "Psychology",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Think Empathy Means Always Agreeing Think Again.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_102/preview"
  },
  {
    "id": "v-103",
    "title": "Why We Sometimes Miss Chances To Help Others",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:15 min",
    "summary": "Most people like to think they would help someone in need, yet circumstances can influence behavior more than expected. This video explores the Good Samaritan Effect and how pressure can affect our willingness to act.",
    "keywords": [
      "ParadoxesandEffects",
      "GoodSamaritanEffect",
      "Psychology",
      "HumanBehavior",
      "BehavioralScience"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why We Sometimes Miss Chances To Help Others.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v217/preview"
  },
  {
    "id": "v-104",
    "title": "Why Forgiveness Isn’t Required To Heal Childhood Pain",
    "category": "Childhood & Family Patterns",
    "duration": "1:30 min",
    "summary": "Many people are told that forgiveness is necessary for healing, but that is not always how recovery works. This video explores why acknowledging pain and moving forward can happen with or without forgiveness.",
    "keywords": [
      "Childhood",
      "Healing",
      "Psychology",
      "SelfWorth",
      "Recovery"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Forgiveness Isn’t Required To Heal Childhood Pain.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v192/preview"
  },
  {
    "id": "v-105",
    "title": "How To Handle When People Are Jealous Of You",
    "category": "Emotional Intelligence",
    "duration": "1:30 min",
    "summary": "Other people's reactions to your success are often more about their own struggles than your achievements. This video explores how to respond to jealousy without shrinking yourself to make others comfortable.",
    "keywords": [
      "EmotionalIntelligence",
      "Jealousy",
      "Confidence",
      "Psychology",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Handle When People Are Jealous Of You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v73/preview"
  },
  {
    "id": "v-106",
    "title": "The Body Language That Reveals Hidden Anxiety",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Anxiety is not always expressed through words. This video explores how the body can reveal signs of stress and nervousness before someone ever talks about what they are feeling.",
    "keywords": [
      "Psychology",
      "Anxiety",
      "BodyLanguage",
      "MentalHealth",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Body Language That Reveals Hidden Anxiety.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v115/preview"
  },
  {
    "id": "v-107",
    "title": "Why Good Hearts Break The Most",
    "category": "Love & Relationships",
    "duration": "2:05 min",
    "summary": "People who stay open to others often experience heartbreak differently than those who keep their guard up. This video explores why deep compassion can make loss more painful while also shaping wisdom over time.",
    "keywords": [
      "Motivation",
      "Heartbreak",
      "PersonalGrowth",
      "Psychology",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Good Hearts Break the Most.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v194/preview"
  },
  {
    "id": "v-108",
    "title": "The Hidden Trap Of Love Bombing",
    "category": "Toxic Relationship Patterns",
    "duration": "1:10 min",
    "summary": "Love bombing often feels like intense affection at the beginning, making it difficult to recognize what is happening. This video explores how excessive attention can sometimes be used to create attachment and control.",
    "keywords": [
      "Relationships",
      "LoveBombing",
      "Manipulation",
      "Psychology",
      "Dating"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Trap of Love Bombing.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v132/preview"
  },
  {
    "id": "v-109",
    "title": "5 Signs You Grew Up Feeling Unwanted",
    "category": "Childhood & Family Patterns",
    "duration": "1:20 min",
    "summary": "Feeling unwanted in childhood can shape the way people view themselves and their relationships long into adulthood. This video explores how early experiences of rejection can continue influencing connection, trust, and self-worth.",
    "keywords": [
      "Listicle",
      "ChildhoodTrauma",
      "SelfWorth",
      "Healing",
      "Psychology&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Signs You Grew Up Feeling Unwanted.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v23/preview"
  },
  {
    "id": "v-110",
    "title": "Why You See It Everywhere",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:20 min",
    "summary": "Learning something new can make it feel like it suddenly appears all around you. This video explores the Baader–Meinhof phenomenon and how attention shapes what stands out in everyday life.",
    "keywords": [
      "ParadoxesandEffects",
      "BaaderMeinhofPhenomenon",
      "Psychology",
      "HumanBehavior",
      "CognitiveBias"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You See It Everywhere.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v233/preview"
  },
  {
    "id": "v-111",
    "title": "You Finally Let Someone Care",
    "category": "Childhood & Family Patterns",
    "duration": "2:15 min",
    "summary": "Receiving care can feel unfamiliar for people who spent years taking care of everyone else. This video explores what happens when someone learns they do not have to earn love through sacrifice.",
    "keywords": [
      "Psychology",
      "Healing",
      "SelfWorth",
      "Relationships",
      "ChildhoodTrauma"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Finally Let Someone Care.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v252/preview"
  },
  {
    "id": "v-112",
    "title": "How To Rebuild After Failure",
    "category": "Emotional Intelligence",
    "duration": "2:15 min",
    "summary": "Some people recover from failure faster than others, not because they avoid setbacks, but because they do not let those setbacks define them. This video explores how self-trust shapes the way people respond to rejection, mistakes, and disappointment.",
    "keywords": [
      "EmotionalIntelligence",
      "SelfTrust",
      "Failure",
      "Confidence",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Rebuild After Failure.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v77/preview"
  },
  {
    "id": "v-113",
    "title": "The Guilt Of Choosing You",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Setting boundaries can feel uncomfortable when you were taught to put other people's needs before your own. This video explores why guilt often shows up when people start choosing themselves.",
    "keywords": [
      "Psychology",
      "Boundaries",
      "SelfWorth",
      "Healing",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Guilt Of Choosing You.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v123/preview"
  },
  {
    "id": "v-114",
    "title": "Why Your Brain Goes Blank",
    "category": "Stress & Overwhelm",
    "duration": "1:20 min",
    "summary": "Many people blame themselves when they freeze under pressure without realizing their brain is responding to stress. This video explores why overwhelming situations can make it harder to think clearly in the moment.",
    "keywords": [
      "Psychology",
      "Stress",
      "Anxiety",
      "MentalHealth",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Brain Goes Blank.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v240/preview"
  },
  {
    "id": "v-115",
    "title": "You Worry They Will Leave",
    "category": "Love & Relationships",
    "duration": "1:30 min",
    "summary": "Some people live with a constant fear of abandonment, even in relationships that feel secure. This video explores anxious attachment and why reassurance can feel so important when connection feels uncertain.",
    "keywords": [
      "Relationships",
      "AnxiousAttachment",
      "AttachmentTheory",
      "Healing",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Worry They Will Leave.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v262/preview"
  },
  {
    "id": "v-116",
    "title": "6 Traps Keeping You lonely",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:15 min",
    "summary": "Loneliness is not always caused by being alone. This video explores six habits that can quietly create distance from others and make connection harder to find.",
    "keywords": [
      "Listicle",
      "Relationships",
      "Loneliness",
      "Connection",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Traps Keeping You Lonely.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v35/preview"
  },
  {
    "id": "v-117",
    "title": "How Your Thoughts Cause Pain",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "What we expect can have a powerful effect on how we feel. This video explores the nocebo effect and how negative expectations can influence physical symptoms in ways most people do not realize.",
    "keywords": [
      "ParadoxesandEffects",
      "NoceboEffect",
      "Psychology",
      "MindBodyConnection",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Your Thoughts Cause Pain.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v85/preview"
  },
  {
    "id": "v-118",
    "title": "Safe People Help You Heal",
    "category": "Childhood & Family Patterns",
    "duration": "1:10 min",
    "summary": "Healing often happens in the presence of people who make you feel accepted, understood, and safe. This video explores how supportive relationships can help rebuild trust after difficult childhood experiences.",
    "keywords": [
      "Childhood",
      "Healing",
      "Relationships",
      "Psychology",
      "Trust"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Safe People Help You Heal.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v97/preview"
  },
  {
    "id": "v-119",
    "title": "4 Signs You Are Healing",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:15 min",
    "summary": "Healing does not always feel dramatic or obvious while it is happening. This video explores four subtle signs that often show up when someone is beginning to move forward.",
    "keywords": [
      "Listicle",
      "Healing",
      "PersonalGrowth",
      "Psychology",
      "MentalHealth&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Signs You Are Healing.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v14/preview"
  },
  {
    "id": "v-120",
    "title": "You Are Not Too Much",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Some people feel emotions more deeply and spend years wondering if something is wrong with them because of it. This video explores the melancholic temperament and the strengths that can come with seeing the world that way.",
    "keywords": [
      "Psychology",
      "Melancholic",
      "Personality",
      "SelfAwareness",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Are Not Too Much.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v249/preview"
  },
  {
    "id": "v-121",
    "title": "When They Flip The Blame",
    "category": "Narcissistic Abuse",
    "duration": "1:45 min",
    "summary": "Some people avoid responsibility by making others question themselves instead. This video explores how blame-shifting works and why it can leave people carrying guilt that was never theirs to begin with.",
    "keywords": [
      "Psychology",
      "EmotionalImmaturity",
      "Gaslighting",
      "Relationships",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When They Flip The Blame.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v172/preview"
  },
  {
    "id": "v-122",
    "title": "Love Should Not Have Strings",
    "category": "Childhood & Family Patterns",
    "duration": "1:15 min",
    "summary": "The way we learn about love in childhood often shapes what we accept in adulthood. This video explores how conditional love can influence relationships and why healthy love does not have to be earned.",
    "keywords": [
      "Relationships",
      "ConditionalLove",
      "ChildhoodTrauma",
      "Healing",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Love Should Not Have Strings.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v92/preview"
  },
  {
    "id": "v-123",
    "title": "The Cost Of Staying Quiet",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Avoiding conflict can feel like keeping the peace, especially for people who learned early that speaking up was unsafe. This video explores how staying silent can affect relationships and self-expression over time.",
    "keywords": [
      "Psychology",
      "ConflictAvoidance",
      "Healing",
      "SelfWorth",
      "Communication"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Cost Of Staying Quiet.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v119/preview"
  },
  {
    "id": "v-124",
    "title": "How You Say It Wins",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "The way a message is delivered often has more impact than the words themselves. This video explores how tone of voice influences trust, connection, and the way people respond to us.",
    "keywords": [
      "EmotionalIntelligence",
      "Communication",
      "Psychology",
      "Relationships",
      "Leadership"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How You Say it Wins.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v82/preview"
  },
  {
    "id": "v-125",
    "title": "Why You Want To Disappear",
    "category": "Stress & Overwhelm",
    "duration": "2:05 min",
    "summary": "Wanting to withdraw from the world is not always about giving up or avoiding responsibility. This video explores how the urge to disappear can be a response to feeling overwhelmed for too long.",
    "keywords": [
      "Psychology",
      "MentalHealth",
      "Healing",
      "NervousSystem",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Want To Disappear.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v236/preview"
  },
  {
    "id": "v-126",
    "title": "The Cost Of Being Kind",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "People who love deeply often feel heartbreak more deeply too. This video explores why staying open to others can bring both pain and growth.",
    "keywords": [
      "Motivation",
      "Heartbreak",
      "Relationships",
      "Psychology",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Cost Of Being Kind.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v118/preview"
  },
  {
    "id": "v-127",
    "title": "Why You Love A Maybe",
    "category": "Love & Relationships",
    "duration": "1:20 min",
    "summary": "Sometimes the hardest relationships to move on from are the ones that never fully happened. This video explores why people often stay attached to possibility long after reality has moved on.",
    "keywords": [
      "Relationships",
      "Dating",
      "Heartbreak",
      "Psychology",
      "Attachment"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Love A Maybe.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v226/preview"
  },
  {
    "id": "v-128",
    "title": "4 Habits That Saved You",
    "category": "Childhood & Family Patterns",
    "duration": "1:10 min",
    "summary": "The habits that once helped you feel safe can continue shaping your life long after childhood ends. This video explores four common survival patterns that often follow people into adulthood.",
    "keywords": [
      "Listicle",
      "ChildhoodTrauma",
      "Healing",
      "Psychology",
      "SelfAwareness&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Habits That Saved You.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v13/preview"
  },
  {
    "id": "v-129",
    "title": "You Keep Loving What Hurts",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:20 min",
    "summary": "People often stay attached to things that are no longer working because of the time and effort they have already invested. This video explores the IKEA Effect and how past investment can influence present decisions.",
    "keywords": [
      "ParadoxesandEffects",
      "IKEAEffect",
      "Psychology",
      "HumanBehavior",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Keep Loving What Hurts.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v254/preview"
  },
  {
    "id": "v-130",
    "title": "When Your Truth Gets Taken",
    "category": "Narcissistic Abuse",
    "duration": "1:15 min",
    "summary": "Growing up with gaslighting can make it difficult to trust your own thoughts, feelings, and memories. When a child's reality is consistently questioned, the impact can extend far beyond childhood.",
    "keywords": [
      "Childhood",
      "Gaslighting",
      "Healing",
      "Psychology",
      "SelfTrust"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Your Truth Gets Taken.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v176/preview"
  },
  {
    "id": "v-131",
    "title": "The Power Of Not Reacting",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Some people know how to stop an argument from getting worse without shutting down or walking away. Knowing how to regulate emotions can make the difference between resolving a conflict and fueling it.",
    "keywords": [
      "EmotionalIntelligence",
      "ConflictResolution",
      "Communication",
      "Psychology",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Power Of Not Reacting.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v137/preview"
  },
  {
    "id": "v-132",
    "title": "Why You Repeat Toxic Cycles",
    "category": "Toxic Relationship Patterns",
    "duration": "1:15 min",
    "summary": "Some people know exactly why they keep repeating the same patterns but still struggle to break them. Awareness alone does not always provide the tools needed to change behavior.",
    "keywords": [
      "Psychology",
      "Healing",
      "SelfAwareness",
      "Trauma",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Repeat Toxic Cycles.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v232/preview"
  },
  {
    "id": "v-133",
    "title": "You Are Erasing Your Story",
    "category": "Self-Sabotage",
    "duration": "1:30 min",
    "summary": "Constant comparison can make it difficult to recognize how far you have come. Focusing on other people's lives often distracts from your own growth and progress.",
    "keywords": [
      "Motivation",
      "SelfWorth",
      "PersonalGrowth",
      "Psychology",
      "Confidence"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Are Erasing Your Story.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v248/preview"
  },
  {
    "id": "v-134",
    "title": "When Love Turns Into Testing",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "Some people look for reassurance in relationships by creating tests instead of building trust. Fear of rejection can lead to controlling behaviors that ultimately push people away.",
    "keywords": [
      "Relationships",
      "Trust",
      "Attachment",
      "Psychology",
      "Love"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Love Turns Into Testing.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v167/preview"
  },
  {
    "id": "v-135",
    "title": "Can Trust Be Rebuilt After Cheating",
    "category": "Love & Relationships",
    "duration": "1:45 min",
    "summary": "Cheating leaves people with a difficult choice: rebuild or walk away. Whether trust returns depends less on promises and more on accountability, consistency, and what each person needs to heal.",
    "keywords": [
      "Relationships",
      "Trust",
      "Infidelity",
      "Healing",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Can Trust Be Rebuilt After Cheating.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v46/preview"
  },
  {
    "id": "v-136",
    "title": "Why We Think Luck Owes Us And How To Break Free",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "After enough setbacks, it's easy to believe success is finally due. The gambler's fallacy reveals why our brains expect life to balance itself out, even when chance does not work that way.",
    "keywords": [
      "ParadoxesandEffects",
      "GamblersFallacy",
      "Psychology",
      "HumanBehavior",
      "CognitiveBias"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why We Think Luck Owes Us and How to Break Free.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v218/preview"
  },
  {
    "id": "v-137",
    "title": "When You Were Praised For Being “Mature For Your Age”",
    "category": "Childhood & Family Patterns",
    "duration": "2:05 min",
    "summary": "Being mature for your age is often treated as a strength, but it can also be a sign that a child had to grow up too quickly. Many adults are still carrying responsibilities that were never meant to be theirs.",
    "keywords": [
      "Childhood",
      "Healing",
      "Psychology",
      "Parentification",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When You Were Praised for Being “Mature For Your Age”.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v173/preview"
  },
  {
    "id": "v-138",
    "title": "Why Your Body Rejects Toxic People Instantly",
    "category": "Toxic Relationship Patterns",
    "duration": "2:15 min",
    "summary": "Not every warning sign shows up as a thought. Sometimes your body reacts to unhealthy people before your mind fully understands why, making those early feelings worth paying attention to.",
    "keywords": [
      "Psychology",
      "Trauma",
      "Relationships",
      "SelfAwareness",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Body Rejects Toxic People Instantly.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v238/preview"
  },
  {
    "id": "v-139",
    "title": "How Do I Decide What Really Deserves My Energy",
    "category": "Motivation & Purpose",
    "duration": "1:30 min",
    "summary": "Not everything that demands your attention deserves it. Knowing the difference between a drain and an investment can change where your time, focus, and energy go.",
    "keywords": [
      "Motivation",
      "PersonalGrowth",
      "Psychology",
      "Boundaries",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Do I Decide What Really Deserves My Energy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v59/preview"
  },
  {
    "id": "v-140",
    "title": "The Damage Of Parents Who Never Apologize",
    "category": "Childhood & Family Patterns",
    "duration": "1:30 min",
    "summary": "A parent who never admits fault can leave a child questioning their own reality. The effects often show up years later in the form of self-doubt, over-apologizing, and difficulty trusting their own feelings.",
    "keywords": [
      "Childhood",
      "Healing",
      "SelfWorth",
      "Psychology",
      "FamilyDynamics"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Damage of Parents Who Never Apologize.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v122/preview"
  },
  {
    "id": "v-141",
    "title": "Why You Snap At Those You Love",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Stress rarely stays where it started. When pressure builds up, the people closest to us often end up carrying emotions that were never about them in the first place.",
    "keywords": [
      "Psychology",
      "Stress",
      "EmotionalIntelligence",
      "Relationships",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why you Snap at Those You Love.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v246/preview"
  },
  {
    "id": "v-142",
    "title": "When Your Life Feels Like A Movie",
    "category": "Stress & Overwhelm",
    "duration": "2:15 min",
    "summary": "Some people go through periods where life feels distant, unreal, or like they are watching it from the outside. Derealization is a stress response that can create that feeling of disconnection, even when nothing appears wrong on the surface.",
    "keywords": [
      "Psychology",
      "Derealization",
      "MentalHealth",
      "Stress",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Your Life Feels Like A Movie.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v175/preview"
  },
  {
    "id": "v-143",
    "title": "5 Signs You’re Learning To Trust Yourself Already",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:45 min",
    "summary": "Learning to trust yourself often happens gradually rather than all at once. These five signs reveal how self-trust starts showing up in everyday decisions, mistakes, and moments of uncertainty.",
    "keywords": [
      "Listicle",
      "SelfTrust",
      "PersonalGrowth",
      "Psychology",
      "Confidence&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Signs You’re Learning to Trust Yourself Already.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v25/preview"
  },
  {
    "id": "v-144",
    "title": "What To Do After Leaving A Toxic Relationship",
    "category": "Toxic Relationship Patterns",
    "duration": "2:15 min",
    "summary": "Healing after a toxic relationship rarely happens all at once. Moving forward often involves working through difficult emotions, rebuilding confidence, and gradually reconnecting with yourself.",
    "keywords": [
      "Relationships",
      "Healing",
      "BreakupRecovery",
      "Psychology",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What To Do After Leaving A Toxic Relationship.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v154/preview"
  },
  {
    "id": "v-145",
    "title": "Why It’s Okay For Your Purpose To Change",
    "category": "Motivation & Purpose",
    "duration": "2:15 min",
    "summary": "Purpose is not something people discover once and keep forever. As life changes, goals, values, and priorities often change too, making it natural for a sense of purpose to evolve over time.",
    "keywords": [
      "Motivation",
      "Purpose",
      "PersonalGrowth",
      "Psychology",
      "SelfDiscovery"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why it’s Okay for Your Purpose to Change.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v245/preview"
  },
  {
    "id": "v-146",
    "title": "Why Being Sure Doesn’t Always Make You Right",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:15 min",
    "summary": "Confidence and accuracy are not always the same thing. The overconfidence effect helps explain why people can feel certain about a belief or decision while overlooking evidence that challenges it.",
    "keywords": [
      "ParadoxesandEffects",
      "OverconfidenceEffect",
      "Psychology",
      "HumanBehavior",
      "CognitiveBias"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Being Sure Doesn’t Always Make You Right.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v182/preview"
  },
  {
    "id": "v-147",
    "title": "How To Recognize When You’re Finally Breaking Old Cycles",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Breaking old cycles often happens in quiet moments that are easy to overlook. Choosing different responses, treating yourself with more compassion, and feeling safer in your own life can all be signs that healing is already happening.",
    "keywords": [
      "Psychology",
      "Healing",
      "PersonalGrowth",
      "SelfAwareness",
      "Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How to Recognize When You’re Finally Breaking Old Cycles.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v86/preview"
  },
  {
    "id": "v-148",
    "title": "Stop Waiting For The Perfect Moment",
    "category": "Motivation & Purpose",
    "duration": "2:05 min",
    "summary": "Some people spend so much time waiting to feel ready that they never begin. This explores why progress comes from taking action before conditions feel perfect and how small steps create momentum over time.",
    "keywords": [
      "Motivation",
      "PersonalGrowth",
      "Mindset",
      "Psychology",
      "Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Waiting For The Perfect Moment(2).jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v110/preview"
  },
  {
    "id": "v-149",
    "title": "How To Turn Childhood Pain Into Adult Strength",
    "category": "Childhood & Family Patterns",
    "duration": "1:45 min",
    "summary": "Childhood pain can shape the way people see themselves long after the experience is over. This explores how qualities developed through adversity, such as resilience and empathy, can become strengths during healing.",
    "keywords": [
      "Childhood",
      "Healing",
      "Resilience",
      "Psychology",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Turn Childhood Pain Into Adult Strength.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v81/preview"
  },
  {
    "id": "v-150",
    "title": "Why Asking More Questions Makes People Like You",
    "category": "Emotional Intelligence",
    "duration": "1:30 min",
    "summary": "People feel closer to those who make them feel heard. Asking thoughtful questions shifts the focus from trying to impress others to building genuine connection through curiosity and attention.",
    "keywords": [
      "EmotionalIntelligence",
      "Communication",
      "Relationships",
      "Psychology",
      "Connection"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Asking More Questions Makes People Like You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v178/preview"
  },
  {
    "id": "v-151",
    "title": "How To Find Yourself After Another Heartbreak",
    "category": "Love & Relationships",
    "duration": "1:15 min",
    "summary": "Heartbreak can make people feel disconnected from who they are outside of a relationship. Reconnecting with neglected parts of yourself is often where healing begins.",
    "keywords": [
      "Heartbreak",
      "Healing",
      "Relationships",
      "SelfDiscovery",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Find Yourself After Another Heartbreak copy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_153/preview"
  },
  {
    "id": "v-152",
    "title": "How To Build Real Connection Instead Of Just Company",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "Being around people is not the same as feeling understood. Real connection grows when people show up honestly, take emotional risks, and allow themselves to be seen.",
    "keywords": [
      "Motivation",
      "Connection",
      "Relationships",
      "Psychology",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Build Real Connection Instead of Just Company.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v69/preview"
  },
  {
    "id": "v-153",
    "title": "7 Habits That Quietly Kill Romantic Attraction",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:30 min",
    "summary": "Attraction is shaped by everyday behavior more than most people realize. These seven habits can slowly create distance in a relationship, even when feelings are still there.",
    "keywords": [
      "Listicle",
      "Relationships",
      "Attraction",
      "Dating",
      "Psychology&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/7 Habits That Quietly Kill Romantic Attraction.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v38/preview"
  },
  {
    "id": "v-154",
    "title": "Why It’s Okay To Grieve The Parents You Never Had",
    "category": "Childhood & Family Patterns",
    "duration": "1:20 min",
    "summary": "Some losses are about what never happened rather than what did. Grieving the love or protection you needed from your parents can be an important part of healing.",
    "keywords": [
      "Childhood",
      "Healing",
      "Psychology",
      "Grief",
      "SelfGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why It’s Okay to Grieve the Parents You Never Had.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v198/preview"
  },
  {
    "id": "v-155",
    "title": "Why More Options Makes Us Less Happy",
    "category": "Psychological Paradoxes & Effects",
    "duration": "2:05 min",
    "summary": "Having more choices sounds like freedom, but it often creates more doubt and second-guessing. The paradox of choice explains why endless options can make satisfaction harder to find.",
    "keywords": [
      "ParadoxesandEffects",
      "ParadoxOfChoice",
      "Psychology",
      "HumanBehavior",
      "DecisionMaking"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why More Options Makes Us Less Happy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v201/preview"
  },
  {
    "id": "v-156",
    "title": "When Your Body Screams Stay Away Without Reason",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Sometimes the body reacts to a person before the mind understands why. Past experiences can leave the nervous system on alert, making certain people feel unsafe even when you cannot immediately explain it.",
    "keywords": [
      "Psychology",
      "Trauma",
      "Healing",
      "NervousSystem",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Your Body Screams Stay Away Without Reason.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v174/preview"
  },
  {
    "id": "v-157",
    "title": "How To Actually Show Up When Someone's Hurting",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "When someone is struggling, support is not about having the perfect words. Being present, listening without trying to fix everything, and staying through difficult moments often matters most.",
    "keywords": [
      "EmotionalIntelligence",
      "Empathy",
      "Relationships",
      "Support",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Actually Show Up When Someones Hurting.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_159/preview"
  },
  {
    "id": "v-158",
    "title": "How Your Father Wounds Affect Your Relationships Today",
    "category": "Inner Child Healing",
    "duration": "1:10 min",
    "summary": "Early experiences with a father can shape the way people approach trust, intimacy, and self-worth in adulthood. Recognizing those patterns is often the first step toward changing them.",
    "keywords": [
      "Childhood",
      "FatherWounds",
      "Healing",
      "Relationships",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Your Father Wounds Affect Your Relationships Today.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v83/preview"
  },
  {
    "id": "v-159",
    "title": "Why Givers Are The Strongest People You’ll Ever Meet",
    "category": "Motivation & Purpose",
    "duration": "1:45 min",
    "summary": "Choosing kindness after being disappointed is harder than becoming bitter. Some of the strongest people are those who continue to give, care, and stay open without losing themselves in the process.",
    "keywords": [
      "Motivation",
      "Kindness",
      "Resilience",
      "Psychology",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Givers Are The Strongest People You’ll Ever Meet.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v193/preview"
  },
  {
    "id": "v-160",
    "title": "6 Behaviors That Secretly Push People Away",
    "category": "Toxic Relationship Patterns",
    "duration": "1:15 min",
    "summary": "Some relationship habits seem harmless on the surface but can create distance over time. These six behaviors reveal how small social patterns can affect connection without people realizing it.",
    "keywords": [
      "Listicle",
      "Relationships",
      "Communication",
      "Psychology",
      "SocialSkills&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Behaviors That Secretly Push People Away.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v29/preview"
  },
  {
    "id": "v-161",
    "title": "Why Small Choices Can Change Everything",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:30 min",
    "summary": "The butterfly effect suggests that small actions can lead to much bigger outcomes over time. Tiny decisions and daily habits often shape the future in ways that are impossible to see in the moment.",
    "keywords": [
      "ParadoxesandEffects",
      "ButterflyEffect",
      "Psychology",
      "HumanBehavior",
      "Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Small Choices Can Change Everything.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v206/preview"
  },
  {
    "id": "v-162",
    "title": "Happy New Year\\!",
    "category": "Motivation & Purpose",
    "duration": "1:15 min",
    "summary": "Every New Year brings a wave of resolutions, but lasting change is rarely created by a date on the calendar. Real growth comes from taking action consistently, starting before you feel ready, and continuing even after motivation fades.",
    "keywords": [
      "Motivation",
      "NewYearsResolution",
      "PersonalGrowth",
      "Mindset",
      "Psychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Happy New Year!.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_164/preview"
  },
  {
    "id": "v-163",
    "title": "How To Stop Letting Other People’s Mood Control Yours",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Other people's emotions can be easy to absorb without realizing it. Learning to separate your feelings from someone else's is an important part of emotional intelligence and maintaining healthy boundaries.",
    "keywords": [
      "EmotionalIntelligence",
      "Boundaries",
      "SelfAwareness",
      "Psychology",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Stop Letting Other People’s Mood Control Yours.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v79/preview"
  },
  {
    "id": "v-164",
    "title": "Why Some People Fall In Love After Just Two Weeks",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Falling in love quickly is often misunderstood as neediness or desperation. Accelerated attachment explores why some people form deep connections faster than others and why that is not necessarily a bad thing.",
    "keywords": [
      "Relationships",
      "Attachment",
      "Love",
      "Psychology",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Some People Fall In Love After Just Two Weeks.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v210/preview"
  },
  {
    "id": "v-165",
    "title": "How Your Reactions Becomes Their Weapon",
    "category": "Motivation & Purpose",
    "duration": "2:15 min",
    "summary": "Strong reactions can give other people more influence over your emotions than they deserve. Learning to pause before responding can help you regain control and choose how you want to show up in difficult moments.",
    "keywords": [
      "Motivation",
      "SelfControl",
      "Mindset",
      "Psychology",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Your Reactions Becomes Their Weapon.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v84/preview"
  },
  {
    "id": "v-166",
    "title": "Have You Ever Wondered Why You Attract Toxic Relationships?",
    "category": "Toxic Relationship Patterns",
    "duration": "1:15 min",
    "summary": "Unhealthy relationships often feel familiar for a reason. Early experiences can shape what feels like love, making it easier to confuse chaos, inconsistency, or intensity with genuine connection.",
    "keywords": [
      "Relationships",
      "Attachment",
      "Healing",
      "Psychology",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Have You Ever Wondered Why You Attract Toxic Relationships.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_168/preview"
  },
  {
    "id": "v-167",
    "title": "How Insecure People Act When They’re in Charge",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:10 min",
    "summary": "Power does not always reveal confidence. These six behaviors show how insecurity can show up through control, double standards, and the need to protect an inflated ego.",
    "keywords": [
      "Listicle",
      "Psychology",
      "Leadership",
      "HumanBehavior",
      "SelfAwareness&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Insecure People Act When They’re in Charge.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v62/preview"
  },
  {
    "id": "v-168",
    "title": "The Ostrich Effect: Why We Avoid The Truth",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Avoiding a problem can feel easier in the moment, but it often makes the situation harder to face later. The ostrich effect explains why people look away from uncomfortable truths and what that avoidance can cost.",
    "keywords": [
      "ParadoxesandEffects",
      "OstrichEffect",
      "Psychology",
      "HumanBehavior",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Ostrich Effect Why We Avoid The Truth.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_170/preview"
  },
  {
    "id": "v-169",
    "title": "Why You Still Feel Like The Parent In Your Family",
    "category": "Childhood & Family Patterns",
    "duration": "1:45 min",
    "summary": "Some children grow up feeling responsible for everyone else's needs. This explores how being forced into a caretaker role can follow people into adulthood and make it difficult to accept care from others.",
    "keywords": [
      "Childhood",
      "Parentification",
      "Healing",
      "Psychology",
      "FamilyDynamics"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Still Feel Like The Parent In Your Family.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v235/preview"
  },
  {
    "id": "v-170",
    "title": "How To Disagree Without Losing Someone You Care About",
    "category": "Emotional Intelligence",
    "duration": "2:15 min",
    "summary": "Disagreements do not have to damage a relationship. Understanding how to communicate through differences can help people stay connected without sacrificing honesty.",
    "keywords": [
      "EmotionalIntelligence",
      "Communication",
      "Relationships",
      "Psychology",
      "ConflictResolution"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Disagree Without Losing Someone You Care About.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v70/preview"
  },
  {
    "id": "v-171",
    "title": "The Real Reason You Can’t Stop Scrolling At 2AM",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Late-night scrolling is not always about boredom or habit. Sometimes it becomes a way to avoid difficult emotions, discomfort, or thoughts that feel harder to sit with in silence.",
    "keywords": [
      "Psychology",
      "MentalHealth",
      "SelfAwareness",
      "Habits",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Real Reason You Can’t Stop Scrolling at 2AM.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v138/preview"
  },
  {
    "id": "v-172",
    "title": "Why Disappointing People Is The Key To Your Happiness",
    "category": "Motivation & Purpose",
    "duration": "1:45 min",
    "summary": "Trying to please everyone often means abandoning your own needs in the process. Learning when to disappoint others can be an important step toward building a life that feels true to you.",
    "keywords": [
      "Motivation",
      "Boundaries",
      "PersonalGrowth",
      "Psychology",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Disappointing People is The Key to Your Happiness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v186/preview"
  },
  {
    "id": "v-173",
    "title": "The Childhood Wound That Follows You Into Love",
    "category": "Inner Child Healing",
    "duration": "2:05 min",
    "summary": "Early experiences with love can shape what feels familiar in adulthood. This explores why people sometimes mistake unhealthy relationship patterns for connection and how awareness can help break the cycle.",
    "keywords": [
      "Relationships",
      "Attachment",
      "Healing",
      "Psychology",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Childhood Wound That Follows You Into Love.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v117/preview"
  },
  {
    "id": "v-174",
    "title": "The Healing Power Of Saying “It Wasn’t My Fault”",
    "category": "Inner Child Healing",
    "duration": "1:10 min",
    "summary": "Children often blame themselves for neglect, criticism, or rejection they could not control. Understanding where that guilt comes from can be an important step toward self-compassion and healing.",
    "keywords": [
      "Childhood",
      "Healing",
      "SelfCompassion",
      "Psychology",
      "InnerChild"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Healing Power of Saying “It Wasn’t My Fault”.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v125/preview"
  },
  {
    "id": "v-175",
    "title": "4 Smart Ways To Outsmart A Manipulator",
    "category": "Toxic Relationship Patterns",
    "duration": "1:30 min",
    "summary": "Manipulation becomes less effective when you know how to recognize and respond to it. These four strategies can help you stay grounded, protect your boundaries, and keep difficult conversations from being turned against you.",
    "keywords": [
      "Listicle",
      "Psychology",
      "Manipulation",
      "Boundaries",
      "Communication&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Smart Ways To Outsmart A Manipulator.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v17/preview"
  },
  {
    "id": "v-176",
    "title": "Why Some Kids Grow Distant From Their Parents",
    "category": "Childhood & Family Patterns",
    "duration": "1:10 min",
    "summary": "Some people pull away from their parents as they get older, but that distance often starts in childhood. This explores how emotional neglect, criticism, and control can shape avoidant attachment and make closeness feel difficult later in life.",
    "keywords": [
      "Childhood",
      "Attachment",
      "FamilyDynamics",
      "Psychology",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Some Kids Grow Distant From Their Parents.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v209/preview"
  },
  {
    "id": "v-177",
    "title": "How Naming An Emotion Can Break Its Grip On You",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Putting feelings into words can make them easier to understand and manage. This explores why identifying an emotion often reduces its intensity and creates space for a more thoughtful response.",
    "keywords": [
      "EmotionalIntelligence",
      "SelfAwareness",
      "Psychology",
      "MentalHealth",
      "Emotions"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Naming an Emotion Can Break Its Grip On You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v64/preview"
  },
  {
    "id": "v-178",
    "title": "The Real Reason You Still Stalk Your Ex’s Profile",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Checking an ex’s social media is often less about curiosity and more about searching for closure. Understanding the cycle behind that behavior can make it easier to let go and move forward.",
    "keywords": [
      "Relationships",
      "BreakupRecovery",
      "Healing",
      "Psychology",
      "Attachment"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Real Reason You Still Stalk Your Ex’s Profile.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v140/preview"
  },
  {
    "id": "v-179",
    "title": "When Even Small Tasks Feel Like Heavy Lifting",
    "category": "Stress & Overwhelm",
    "duration": "2:05 min",
    "summary": "Stress can make simple tasks feel much harder than they actually are. Understanding mental load can help explain why overwhelm builds up and why small steps are often the best place to start.",
    "keywords": [
      "Psychology",
      "Stress",
      "MentalLoad",
      "PersonalGrowth",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Even Small Tasks Feel Like Heavy Lifting.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v159/preview"
  },
  {
    "id": "v-180",
    "title": "Why We Confuse Pain With Passion",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "Intensity and emotional ups and downs are often mistaken for deep connection. This explores why unhealthy relationship patterns can feel exciting and how real intimacy differs from emotional chaos.",
    "keywords": [
      "Relationships",
      "Attachment",
      "Healing",
      "Psychology",
      "Love"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why We Confuse Pain With Passion.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v216/preview"
  },
  {
    "id": "v-181",
    "title": "5 Ways Isolation Rewires Your Personality Over Time",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:10 min",
    "summary": "Isolation affects more than social life. These five changes show how long periods of disconnection can influence the way people think, feel, relate to others, and see themselves over time.",
    "keywords": [
      "Listicle",
      "Psychology",
      "Isolation",
      "MentalHealth",
      "HumanBehavior&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Ways Isolation Rewires Your Personality Over Time.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v27/preview"
  },
  {
    "id": "v-182",
    "title": "The Truth About Why Negativity Feels Stronger Than Positivity",
    "category": "Shadow Work",
    "duration": "1:20 min",
    "summary": "Negativity often feels more powerful than positivity, even when the good outweighs the bad. This explores negativity dominance and why the brain tends to focus on mistakes, criticism, and setbacks more than positive experiences.",
    "keywords": [
      "ParadoxesandEffects",
      "NegativityBias",
      "Psychology",
      "HumanBehavior",
      "BehavioralScience"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Truth About Why Negativity Feels Stronger Than Positivity.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v149/preview"
  },
  {
    "id": "v-183",
    "title": "Why Family Secrets Still Haunt You As An Adult",
    "category": "Childhood & Family Patterns",
    "duration": "2:15 min",
    "summary": "Family secrets often affect more than the people directly involved. This explores how growing up around unspoken problems can shape trust, self-expression, and the way people relate to their own experiences later in life.",
    "keywords": [
      "Childhood",
      "FamilyDynamics",
      "Healing",
      "Psychology",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Family Secrets Still Haunt You as an Adult .jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v189/preview"
  },
  {
    "id": "v-184",
    "title": "Why Some Friends Drain You Without Saying A Word",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Not every draining friendship is openly toxic. Learning to pay attention to how people leave you feeling can help you recognize relationships that take more emotional energy than they give back.",
    "keywords": [
      "EmotionalIntelligence",
      "Friendship",
      "Boundaries",
      "Psychology",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Some Friends Drain You Without Saying A Word.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v208/preview"
  },
  {
    "id": "v-185",
    "title": "Why Some People Get Attached Too Fast",
    "category": "Love & Relationships",
    "duration": "1:15 min",
    "summary": "Quick attachment is often misunderstood as clinginess, but it can be rooted in emotional deprivation and a deep need for safety. Understanding where that urgency for connection comes from can help people build healthier relationships with themselves and others.",
    "keywords": [
      "Relationships",
      "Attachment",
      "Healing",
      "Psychology",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Some People Get Attached Too Fast .jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v211/preview"
  },
  {
    "id": "v-186",
    "title": "How To Figure Out What Matters To You",
    "category": "Motivation & Purpose",
    "duration": "1:15 min",
    "summary": "It can be difficult to tell the difference between what genuinely matters and what simply demands your attention. This explores how everyday reactions and experiences can reveal what is most meaningful to you.",
    "keywords": [
      "Motivation",
      "PersonalGrowth",
      "SelfAwareness",
      "Psychology",
      "Purpose"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Figure Out What Matters To You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v71/preview"
  },
  {
    "id": "v-187",
    "title": "You Don’t Know Love Until It’s Tested",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "Love often reveals itself during difficult moments, not easy ones. This explores how stress, vulnerability, and challenges can deepen connection and show what a relationship is truly built on.",
    "keywords": [
      "Relationships",
      "Love",
      "Psychology",
      "Connection",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Don’t Know Love Until It’s Tested.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v251/preview"
  },
  {
    "id": "v-188",
    "title": "How The Mind Has The Hidden Power to Heal",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:45 min",
    "summary": "The placebo effect demonstrates how expectations can influence both the mind and body. Understanding this phenomenon reveals the powerful role belief can play in shaping experiences and outcomes.",
    "keywords": [
      "ParadoxesandEffects",
      "PlaceboEffect",
      "Psychology",
      "HumanBehavior",
      "BehavioralScience"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How The Mind Has The Hidden Power to Heal.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v67/preview"
  },
  {
    "id": "v-189",
    "title": "Why Your Inner Child Still Needs You",
    "category": "Inner Child Healing",
    "duration": "1:45 min",
    "summary": "Childhood needs do not disappear simply because people grow up. Learning how to give yourself the care, safety, and compassion that were once missing can be an important part of healing.",
    "keywords": [
      "Childhood",
      "InnerChild",
      "Healing",
      "SelfCompassion",
      "Psychology&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Inner Child Still Needs You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v4/preview"
  },
  {
    "id": "v-190",
    "title": "The Hidden Strength Of People Who Admit They’re Wrong",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Admitting a mistake is often seen as weakness, but it can be a sign of confidence and maturity. Understanding why accountability builds trust can help strengthen both relationships and personal growth.",
    "keywords": [
      "EmotionalIntelligence",
      "Accountability",
      "Trust",
      "Psychology",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Strength Of People Who Admit They’re Wrong.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v130/preview"
  },
  {
    "id": "v-191",
    "title": "Why Is It So Hard To Make The Right Decision",
    "category": "Overthinking",
    "duration": "1:15 min",
    "summary": "The hardest decisions often involve uncertainty, not obvious right or wrong answers. Learning to let go of perfect certainty can help people make choices with more confidence and less fear of regret.",
    "keywords": [
      "Psychology",
      "DecisionMaking",
      "Overthinking",
      "Mindset",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Is It So Hard To Make The Right Decision.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v197/preview"
  },
  {
    "id": "v-192",
    "title": "How To Tell When Someone Is Lying",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Lies are often revealed through patterns rather than a single giveaway. From contradictions and over-explaining to mismatched emotions, recognizing these signals can help people better understand when something feels off.",
    "keywords": [
      "Psychology",
      "Deception",
      "HumanBehavior",
      "Communication",
      "BodyLanguage"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Tell When Someone Is Lying.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v80/preview"
  },
  {
    "id": "v-193",
    "title": "The 80/20 Rule And Why It Shapes Almost Everything",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Most people assume effort and results are evenly distributed, but they rarely are. The 80/20 rule shows why a small number of actions often create the biggest outcomes and why focusing on the right priorities can be more effective than simply doing more.",
    "keywords": [
      "ParadoxesandEffects",
      "ParetoPrinciple",
      "Psychology",
      "Productivity",
      "BehavioralScience"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The 8020 Rule and Why it Shapes Almost Everything.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_195/preview"
  },
  {
    "id": "v-194",
    "title": "Why Affection In Childhood Matters More Thank You Think",
    "category": "Childhood & Family Patterns",
    "duration": "1:20 min",
    "summary": "When affection is missing in childhood, people often learn to protect themselves through distance and self-reliance. Those early adaptations can shape trust, intimacy, and relationships long into adulthood.",
    "keywords": [
      "Childhood",
      "Attachment",
      "Healing",
      "Psychology",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Affection in Childhood Matters More Thank You Think.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v177/preview"
  },
  {
    "id": "v-195",
    "title": "Why Listening Gives You Real Power",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Strong relationships are built on more than good communication. Learning to listen beyond the words can reveal what people are feeling, strengthen trust, and create deeper connections.",
    "keywords": [
      "EmotionalIntelligence",
      "Communication",
      "Relationships",
      "Psychology",
      "Listening"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Listening Gives You Real Power.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v200/preview"
  },
  {
    "id": "v-196",
    "title": "The Truth About Feeling Numb",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Feeling disconnected from yourself or the world around you is often a response to prolonged stress and emotional overload. This explores why derealization happens and how small grounding practices can help you reconnect.",
    "keywords": [
      "Psychology",
      "Derealization",
      "MentalHealth",
      "Healing",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Truth About Feeling Numb.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v148/preview"
  },
  {
    "id": "v-197",
    "title": "Are You Living Your Life Or Someone Else’s?",
    "category": "Motivation & Purpose",
    "duration": "1:15 min",
    "summary": "Chasing approval can make it difficult to tell whether your goals are truly yours. Recognizing the difference between external expectations and personal values can help you build a life that feels more authentic.",
    "keywords": [
      "Motivation",
      "PersonalGrowth",
      "SelfAwareness",
      "Psychology",
      "Purpose"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Are You Living Your Life or Someone Else’s.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_199/preview"
  },
  {
    "id": "v-198",
    "title": "5 Habits Hiding High-Functioning Depression",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "High-functioning depression does not always look like sadness. Certain habits can mask emotional struggles, making it harder to recognize when someone is carrying more than they appear to show.",
    "keywords": [
      "MentalHealth",
      "Depression",
      "Psychology",
      "SelfAwareness",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Habits Hiding High-Functions Depression.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_200/preview"
  },
  {
    "id": "v-199",
    "title": "When Life Feels Like Nothing Makes You Happy",
    "category": "Stress & Overwhelm",
    "duration": "1:30 min",
    "summary": "Stress can affect more than mood. Anhedonia helps explain why activities that once felt enjoyable can start to feel distant, flat, or emotionally unrewarding.",
    "keywords": [
      "Psychology",
      "Anhedonia",
      "MentalHealth",
      "Stress",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Life Feels Like Nothing Makes You Happy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v164/preview"
  },
  {
    "id": "v-200",
    "title": "What Happens When You Grow Up Without Boundaries",
    "category": "Childhood & Family Patterns",
    "duration": "2:05 min",
    "summary": "A lack of boundaries in childhood can make it difficult to separate your needs from everyone else's. Those early experiences often shape how people handle guilt, closeness, and self-protection in adult relationships.",
    "keywords": [
      "Childhood",
      "Boundaries",
      "Healing",
      "Psychology",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What Happens When You Grow Up Without Boundaries.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v152/preview"
  },
  {
    "id": "v-201",
    "title": "Catch Your Feelings Before They Catch You",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Emotions become easier to manage when they are recognized before they turn into reactions. Naming what you are actually feeling can create space for better communication, healthier choices, and greater self-control.",
    "keywords": [
      "EmotionalIntelligence",
      "SelfAwareness",
      "Psychology",
      "Communication",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Catch Your Feelings Before they Catch You.png",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v47/preview"
  },
  {
    "id": "v-202",
    "title": "Gaslighting: How To Spot It As It Happens",
    "category": "Narcissistic Abuse",
    "duration": "1:15 min",
    "summary": "Gaslighting often starts with small moments that make people question their own memories, feelings, or judgment. Recognizing these patterns can help protect your sense of reality and strengthen trust in your own voice.",
    "keywords": [
      "Psychology",
      "Gaslighting",
      "Relationships",
      "MentalHealth",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Gaslighting How To Spot It as It Happens.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_204/preview"
  },
  {
    "id": "v-203",
    "title": "What If I Never Feel Like I'm Enough?",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Feeling like you are never enough often begins long before adulthood. When love, attention, or praise feel conditional, it can create a lasting need to prove your worth through achievement and approval.",
    "keywords": [
      "Psychology",
      "SelfWorth",
      "Healing",
      "PersonalGrowth",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What If I Never Feel Like Im Enough.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_205/preview"
  },
  {
    "id": "v-204",
    "title": "The Hidden Cost Of Having A Savior Complex",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Some people learn early that being needed is the safest way to feel loved. Over time, that belief can lead them to prioritize other people's problems while ignoring their own, leaving them exhausted and unseen.",
    "keywords": [
      "Psychology",
      "SaviorComplex",
      "PeoplePleasing",
      "Healing",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Cost Of Having a Savior Complex.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v126/preview"
  },
  {
    "id": "v-205",
    "title": "Here’s Proof You’re Healing In Real Time",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Healing is often easier to recognize in small changes than in big breakthroughs. The ability to set boundaries, respond differently, and treat yourself with more compassion can be signs that old patterns are beginning to lose their hold.",
    "keywords": [
      "Psychology",
      "PersonalGrowth",
      "Healing",
      "SelfAwareness",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Here’s Proof You’re Healing in Real Time.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v58/preview"
  },
  {
    "id": "v-206",
    "title": "Emotionally Intelligent People Don’t Take Anger Personally",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Not every angry reaction is really about the person receiving it. Looking beyond the surface of someone's behavior can make it easier to respond with empathy, perspective, and emotional control.",
    "keywords": [
      "EmotionalIntelligence",
      "Psychology",
      "SelfAwareness",
      "Relationships",
      "Communication"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Emotionally Intelligent People Don’t Take Anger Personally.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v53/preview"
  },
  {
    "id": "v-207",
    "title": "When Forgiveness Feels Like Self-Betrayal",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Some people struggle to stay angry because they quickly understand where others are coming from. Cognitive empathy can make it difficult to separate compassion from self-protection, especially after being hurt.",
    "keywords": [
      "Psychology",
      "Empathy",
      "Boundaries",
      "Healing",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Forgiveness Feels Like Self-Betrayal.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v162/preview"
  },
  {
    "id": "v-208",
    "title": "5 Hidden Patterns Of The Constantly Criticized Child",
    "category": "Childhood & Family Patterns",
    "duration": "2:15 min",
    "summary": "Constant criticism in childhood can shape the way people view themselves long after they grow up. Certain habits that look like personality traits may actually be old survival strategies.",
    "keywords": [
      "Childhood",
      "Healing",
      "Psychology",
      "SelfWorth",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Hidden Patterns of The Constantly Criticized Child.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v21/preview"
  },
  {
    "id": "v-209",
    "title": "When Love Feels Safe And Scary Too",
    "category": "Love & Relationships",
    "duration": "2:05 min",
    "summary": "Disorganized attachment can make closeness feel both comforting and threatening at the same time. Learning where these patterns come from is often the first step toward building safer, more secure relationships.",
    "keywords": [
      "Relationships",
      "AttachmentStyle",
      "Psychology",
      "Healing",
      "Love"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Love Feels Safe and Scary Too.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v166/preview"
  },
  {
    "id": "v-210",
    "title": "Why You Perform Better When Someone’s Watching",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:45 min",
    "summary": "The Hawthorne Effect explains why people often work harder when they know they are being observed. Awareness alone can change behavior, motivation, and performance.",
    "keywords": [
      "Psychology",
      "HawthorneEffect",
      "Productivity",
      "Paradox",
      "HumanBehavior"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Perform Better When Someone’s Watching.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v228/preview"
  },
  {
    "id": "v-211",
    "title": "How Childhood Criticism Replays In Adulthood",
    "category": "Childhood & Family Patterns",
    "duration": "1:10 min",
    "summary": "Childhood criticism can become an inner voice that follows people into adulthood. Recognizing that pattern is often the first step toward developing greater self-compassion and self-trust.",
    "keywords": [
      "Childhood",
      "Healing",
      "SelfWorth",
      "Psychology",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Childhood Criticism Replays in Adulthood.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v6/preview"
  },
  {
    "id": "v-212",
    "title": "How Emotionally Intelligent People Handle Hurt",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Hurtful behavior is often driven by emotions that are not immediately visible. Learning to recognize the fear, shame, or pain beneath someone's reactions can help you respond with greater understanding while still protecting your own peace.",
    "keywords": [
      "EmotionalIntelligence",
      "Psychology",
      "SelfAwareness",
      "Relationships",
      "Communication"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v2/preview"
  },
  {
    "id": "v-213",
    "title": "The Hidden Reason You Cry During Arguments",
    "category": "Stress & Overwhelm",
    "duration": "1:30 min",
    "summary": "Crying during conflict is not always a sign of weakness. For many people, it reflects emotional overwhelm, deep sensitivity, or old experiences that make disagreement feel especially painful.",
    "keywords": [
      "Psychology",
      "EmotionalHealth",
      "Healing",
      "SelfAwareness",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Reason You Cry During Arguments.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v129/preview"
  },
  {
    "id": "v-214",
    "title": "Is Your Fear Of Missing Out Ruining Your Life?",
    "category": "Motivation & Purpose",
    "duration": "1:15 min",
    "summary": "Fear of missing out can keep people chasing experiences while feeling disconnected from their own lives. Slowing down and becoming more present often reveals what truly matters.",
    "keywords": [
      "Psychology",
      "FOMO",
      "Mindset",
      "PersonalGrowth",
      "LifeAdvice"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Is Your Fear of Missing Out Ruining Your Life.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_217/preview"
  },
  {
    "id": "v-215",
    "title": "The Real Reason You Push Good People Away",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "Past hurt can make genuine connection feel risky, even when someone treats you well. Understanding how fear influences relationships can help break the cycle of pushing away people who care.",
    "keywords": [
      "Relationships",
      "AttachmentStyle",
      "Healing",
      "Psychology",
      "Love"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Real Reason You Push Good People Away.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v139/preview"
  },
  {
    "id": "v-216",
    "title": "Why People Don’t Help In Emergencies",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:20 min",
    "summary": "The Bystander Effect explains why people are often less likely to help when others are present. Understanding this phenomenon reveals how responsibility can quietly disappear in a crowd.",
    "keywords": [
      "ParadoxesandEffects",
      "BystanderEffect",
      "HumanBehavior",
      "Psychology",
      "SocialPsychology"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why People Don’t Help In Emergencies.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v205/preview"
  },
  {
    "id": "v-217",
    "title": "When Saying “Sorry” Becomes A Survival Habit",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Over-apologizing is often rooted in environments where staying safe meant keeping the peace. Understanding that pattern can help people communicate with more confidence and stronger boundaries.",
    "keywords": [
      "Psychology",
      "PeoplePleasing",
      "Boundaries",
      "Healing",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Saying “Sorry” Becomes a Survival Habit.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v170/preview"
  },
  {
    "id": "v-218",
    "title": "The Strength Of Emotionally Intelligent People",
    "category": "Emotional Intelligence",
    "duration": "2:15 min",
    "summary": "People with strong emotional intelligence often earn trust by helping others feel understood. Their ability to navigate difficult moments with awareness and empathy can strengthen relationships in every area of life.",
    "keywords": [
      "EmotionalIntelligence",
      "Psychology",
      "Relationships",
      "Communication",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Strength of Emotionally Intelligent People.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v147/preview"
  },
  {
    "id": "v-219",
    "title": "Why You Never Feel Like You Belong",
    "category": "Love & Relationships",
    "duration": "1:30 min",
    "summary": "Feeling like an outsider is not always a sign that you are in the wrong place. Sometimes it reflects the difference between being included and being genuinely valued by the people around you.",
    "keywords": [
      "Psychology",
      "Belonging",
      "Relationships",
      "SelfWorth",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Never Feel Like You Belong.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v227/preview"
  },
  {
    "id": "v-220",
    "title": "Why You’re Not As Confident As You Pretend To Be",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Confidence is not always a sign of self-belief. Sometimes the people who appear the most confident are using achievement, approval, or performance to hide deeper insecurities. Understanding the difference can help build confidence that feels genuine instead of forced.",
    "keywords": [
      "Psychology",
      "Confidence",
      "SelfWorth",
      "PersonalGrowth",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You’re Not As Confident As You Pretend To Be.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v244/preview"
  },
  {
    "id": "v-221",
    "title": "Stop Chasing People Who Don’t Choose You",
    "category": "Love & Relationships",
    "duration": "2:05 min",
    "summary": "Healthy relationships are built on mutual effort, not constant pursuit. Paying attention to how people consistently show up can make it easier to recognize the difference between genuine connection and one-sided investment.",
    "keywords": [
      "Relationships",
      "SelfWorth",
      "Psychology",
      "Healing",
      "Boundaries"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Chasing People Who Don’t Choose You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v103/preview"
  },
  {
    "id": "v-222",
    "title": "3 Subtle Signs You’re Emotionally Drained",
    "category": "Stress & Overwhelm",
    "duration": "1:30 min",
    "summary": "Emotional exhaustion does not always show up as stress or sadness. Certain behaviors and emotional shifts can reveal when your mind and body are running low on energy and need time to recover.",
    "keywords": [
      "Psychology",
      "MentalHealth",
      "Burnout",
      "SelfCare",
      "EmotionalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/3 Subtle Signs You’re Emotionally Drained.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v10/preview"
  },
  {
    "id": "v-223",
    "title": "The Black Sheep Effect",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Being misunderstood is sometimes the price of challenging unhealthy patterns. The black sheep effect explains why the people who speak uncomfortable truths are often treated as the problem instead of the messenger.",
    "keywords": [
      "Psychology",
      "BlackSheepEffect",
      "FamilyDynamics",
      "Healing",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Black Sheep Effect.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_227/preview"
  },
  {
    "id": "v-224",
    "title": "Why You Still Feel Responsible For Everyone’s Happiness",
    "category": "Childhood & Family Patterns",
    "duration": "1:20 min",
    "summary": "Feeling responsible for other people's emotions often begins long before adulthood. Understanding where this pattern comes from can help create healthier boundaries and let go of guilt that was never yours to carry.",
    "keywords": [
      "Childhood",
      "Boundaries",
      "Healing",
      "Psychology",
      "PeoplePleasing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why you Still Feel Responsible for Everyone’s Happiness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v247/preview"
  },
  {
    "id": "v-225",
    "title": "Why Narcissists Don’t Have Real Emotional Intelligence",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Narcissism and emotional intelligence are often mistaken for each other because both can appear confident on the surface. This explores the difference between genuine empathy and self-awareness versus behaviors that are rooted in control, image, and self-protection.",
    "keywords": [
      "Psychology",
      "Narcissism",
      "EmotionalIntelligence",
      "Relationships",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Narcissists Don’t Have Real Emotional Intelligence.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v204/preview"
  },
  {
    "id": "v-226",
    "title": "Why You Always Think Of The Perfect Comeback Too Late",
    "category": "Motivation & Purpose",
    "duration": "1:20 min",
    "summary": "The perfect response often arrives after a difficult conversation has ended. Learning why the brain processes pressure this way can help reframe delayed reactions as thoughtful reflection rather than weakness.",
    "keywords": [
      "Psychology",
      "SelfAwareness",
      "Communication",
      "HumanBehavior",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Always Think of the Perfect Comeback Too Late.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v219/preview"
  },
  {
    "id": "v-227",
    "title": "Why Do You Keep Comparing Yourself To Everyone Else?",
    "category": "Motivation & Purpose",
    "duration": "1:15 min",
    "summary": "Comparing yourself to others can distort the way you see your own progress. Understanding why the brain fixates on other people's successes can make it easier to focus on your own path instead.",
    "keywords": [
      "Psychology",
      "SelfWorth",
      "Confidence",
      "PersonalGrowth",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Do You Keep Comparing Yourself to Everyone Else.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_231/preview"
  },
  {
    "id": "v-228",
    "title": "Stop Chasing Potential And See What’s Really There",
    "category": "Love & Relationships",
    "duration": "1:10 min",
    "summary": "Relationships become clearer when you pay attention to actions instead of possibilities. Focusing on how people consistently show up can help separate genuine connection from wishful thinking.",
    "keywords": [
      "Relationships",
      "SelfWorth",
      "Psychology",
      "Healing",
      "Boundaries"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Chasing Potential and See What’s Really There.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v104/preview"
  },
  {
    "id": "v-229",
    "title": "4 Signs Your Anxiety Has Turned Into Avoidance",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:20 min",
    "summary": "Anxiety does not always look obvious. Sometimes it shows up through habits that feel safe in the moment but slowly make life smaller. Recognizing when anxiety has shifted into avoidance can help break patterns that keep fear in control.",
    "keywords": [
      "Listicle",
      "Anxiety",
      "MentalHealth",
      "SelfAwareness",
      "Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Signs Your Anxiety Has Turned Into Avoidance.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v16/preview"
  },
  {
    "id": "v-230",
    "title": "Why Expectations Shape Performance",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:10 min",
    "summary": "The Pygmalion Effect explores how expectations can shape performance. When people are believed in, supported, and encouraged, they often rise to meet those expectations.",
    "keywords": [
      "Psychology",
      "PygmalionEffect",
      "HumanBehavior",
      "Mindset",
      "Success"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Expectations Shape Performance.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v188/preview"
  },
  {
    "id": "v-231",
    "title": "The Cost Of Always Avoiding Conflict",
    "category": "Childhood & Family Patterns",
    "duration": "1:15 min",
    "summary": "Avoiding conflict can feel like keeping the peace, but it often comes at the expense of your own needs and voice. Recognizing this pattern can help build healthier communication and more honest relationships.",
    "keywords": [
      "Childhood",
      "Boundaries",
      "Communication",
      "Psychology",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Cost of Always Avoiding Conflict.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v120/preview"
  },
  {
    "id": "v-232",
    "title": "Why Confirmation Bias Blinds You To Truth",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:20 min",
    "summary": "Confirmation bias influences the way people interpret information by favoring evidence that supports existing beliefs. Recognizing this tendency can encourage more balanced thinking and better decision-making.",
    "keywords": [
      "Psychology",
      "ConfirmationBias",
      "CriticalThinking",
      "HumanBehavior",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Confirmation Bias Blinds You to Truth.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v184/preview"
  },
  {
    "id": "v-233",
    "title": "The Hidden Struggle Behind Asking For Help",
    "category": "Love & Relationships",
    "duration": "2:05 min",
    "summary": "Asking for help can feel difficult when past experiences taught you that vulnerability was unsafe. Exploring the fears and beliefs that make support hard to accept can help build healthier connections and make it easier to reach out when you need it.",
    "keywords": [
      "Psychology",
      "Healing",
      "MentalHealth",
      "SelfWorth",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Struggle Behind Asking for Help.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v131/preview"
  },
  {
    "id": "v-234",
    "title": "Overthinking Or Intuition?",
    "category": "Overthinking",
    "duration": "1:15 min",
    "summary": "Are you listening to your intuition or getting trapped in a cycle of overthinking? In this video, we break down the key differences between instinct and anxiety, how to recognize each one, and why learning to trust the right signals can lead to clearer decisions and greater peace of mind.",
    "keywords": [
      "ParadoxesandEffects",
      "Illusionofvalidity",
      "Overthinking",
      "Intuition",
      "GutFeeling"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Overthinking or Intuition.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_238/preview"
  },
  {
    "id": "v-235",
    "title": "The Hard Truth About Love Nobody Wants To Hear",
    "category": "Love & Relationships",
    "duration": "2:05 min",
    "summary": "Giving love does not guarantee that it will be returned. Accepting that reality can help people approach relationships with healthier expectations, deeper self-awareness, and a greater sense of emotional freedom.",
    "keywords": [
      "Relationships",
      "Love",
      "Psychology",
      "Growth",
      "EmotionalIntelligence&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hard Truth About Love Nobody Wants to Hear.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v124/preview"
  },
  {
    "id": "v-236",
    "title": "5 Ways Trauma Sneaks Into Good Relationships",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Past trauma does not disappear when a healthy relationship begins. Learning how old protective patterns influence trust, safety, and connection can make it easier to build relationships that feel secure instead of familiar.",
    "keywords": [
      "Relationships",
      "Trauma",
      "Healing",
      "Psychology",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Ways Trauma Sneaks Into Good Relationships.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v28/preview"
  },
  {
    "id": "v-237",
    "title": "How To Recognize A Narcissist",
    "category": "Narcissistic Abuse",
    "duration": "1:15 min",
    "summary": "Narcissism is often easier to recognize through repeated patterns than first impressions. Understanding how narcissistic behavior affects the people around it can help you identify unhealthy dynamics with greater clarity and trust your own experiences.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Narcissism",
      "MentalHealth",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Recognize A Narcissist.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v78/preview"
  },
  {
    "id": "v-238",
    "title": "The Hidden Cost of Being Your Parent’s Confidant",
    "category": "Childhood & Family Patterns",
    "duration": "1:15 min",
    "summary": "Children are not meant to carry the emotional weight of their parents. Exploring how these early roles shape boundaries, self-worth, and adult relationships can help explain why receiving support often feels harder than giving it.",
    "keywords": [
      "Childhood",
      "Healing",
      "Boundaries",
      "Psychology",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Cost of Being Your Parent’s Confidant.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v127/preview"
  },
  {
    "id": "v-239",
    "title": "The Hidden Curse Of Being Emotionally Intelligent",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Being highly aware of other people's emotions can strengthen connection, but it can also become exhausting when every feeling and shift in mood feels important to manage. Learning how emotional intelligence develops and how to use it without carrying everyone else's burdens can create healthier relationships and greater peace of mind.",
    "keywords": [
      "EmotionalIntelligence",
      "Psychology",
      "SelfAwareness",
      "MentalHealth",
      "Relationships"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Curse Of Being Emotionally Intelligent.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v128/preview"
  },
  {
    "id": "v-240",
    "title": "Why The Smartest Empaths Struggle With Forgiveness",
    "category": "Emotional Intelligence",
    "duration": "1:30 min",
    "summary": "Why do highly empathetic and emotionally intelligent people often find forgiveness so difficult? In this video, we explore the hidden reasons the smartest empaths struggle to let go, how deep understanding can complicate healing, and what it takes to move forward without betraying yourself.",
    "keywords": [
      "EmotionalIntelligence",
      "Empathy",
      "Forgiveness",
      "Healing",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why The Smartest Empaths Struggle With Forgiveness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v213/preview"
  },
  {
    "id": "v-241",
    "title": "Are You Secretly Sabotaging Your Own Happiness?",
    "category": "Self-Sabotage",
    "duration": "1:15 min",
    "summary": "Happiness can be hard to accept when the mind keeps preparing for something to go wrong. Real joy has more room to stay when people stop treating peace like something they have to earn.",
    "keywords": [
      "Motivation",
      "SelfSabotage",
      "PersonalGrowth",
      "Mindset",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Are you Secretly Sabotaging Your Own Happiness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_245/preview"
  },
  {
    "id": "v-242",
    "title": "What No Contact Really Does To A Narcissist",
    "category": "Narcissistic Abuse",
    "duration": "1:30 min",
    "summary": "What happens when a narcissist loses access to your attention, validation, and emotional energy? In this video, we break down what the no-contact rule really does to a narcissist, why they often react the way they do, and how maintaining boundaries can help you regain control and heal.",
    "keywords": [
      "Relationships",
      "Narcissist",
      "Nocontact",
      "MentalHealth&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What No Contact Really Does To A Narcissist.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v3/preview"
  },
  {
    "id": "v-243",
    "title": "7 Subtle Signs You Might Be Emotionally Drained",
    "category": "Stress & Overwhelm",
    "duration": "1:45 min",
    "summary": "Emotional exhaustion often builds gradually before it becomes obvious. Recognizing the early signs can help you understand what burnout looks like and when it may be time to slow down, recharge, and take care of yourself.",
    "keywords": [
      "Listicle",
      "Burnout",
      "Psychology",
      "SelfCare",
      "EmotionalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/7 Subtle Signs You Might Be Emotionally Drained.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v39/preview"
  },
  {
    "id": "v-244",
    "title": "The Crab Effect: Why People Pull You Down",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "Not everyone is comfortable watching others grow. The crab effect explains why personal progress can sometimes trigger criticism, resistance, or discouragement from people who feel threatened by change.",
    "keywords": [
      "ParadoxesandEffects",
      "CrabEffect",
      "PersonalGrowth",
      "Mindset",
      "Success"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Crab Effect Why People Pull You Down.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_248/preview"
  },
  {
    "id": "v-245",
    "title": "The Truth About The Child Who Was Called “Difficult”",
    "category": "Childhood & Family Patterns",
    "duration": "1:30 min",
    "summary": "Children who are labeled difficult are often misunderstood rather than defiant. Looking at what drives their sensitivity, emotions, and willingness to speak up can reveal strengths that are often overlooked.",
    "keywords": [
      "Childhood",
      "Healing",
      "Psychology",
      "SelfWorth",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Truth About the Child Who Was Called “Difficult”.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v150/preview"
  },
  {
    "id": "v-246",
    "title": "Why Most Arguments Aren’t About What They Seem",
    "category": "Emotional Intelligence",
    "duration": "1:10 min",
    "summary": "Many conflicts begin with small frustrations but are fueled by deeper emotional needs underneath. Learning how to recognize the real issue beneath an argument can lead to better communication and stronger relationships.",
    "keywords": [
      "EmotionalIntelligence",
      "Relationships",
      "Communication",
      "Psychology",
      "ConflictResolution"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Most Arguments Aren’t About What They Seem.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v202/preview"
  },
  {
    "id": "v-247",
    "title": "How Insecurity Distorts Love And How Trust Heals It",
    "category": "Love & Relationships",
    "duration": "2:15 min",
    "summary": "Insecurity can change the way people interpret everyday interactions, making fear feel more convincing than reality. Understanding how trust helps challenge those fears can create healthier and more secure relationships.",
    "keywords": [
      "Relationships",
      "Trust",
      "Psychology",
      "SelfWorth",
      "Healing"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Insecurity Distorts Love And How Trust Heals It.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v63/preview"
  },
  {
    "id": "v-248",
    "title": "How Do You Find Purpose When You Feel Lost?",
    "category": "Stress & Overwhelm",
    "duration": "1:15 min",
    "summary": "Purpose is often built through small moments of curiosity, meaning, and growth rather than one life-changing discovery. Exploring how purpose develops over time can make feeling lost feel less overwhelming and more like part of the process.",
    "keywords": [
      "Motivation",
      "Purpose",
      "PersonalGrowth",
      "Psychology",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Do You Find Purpose When You Feel Lost.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_252/preview"
  },
  {
    "id": "v-249",
    "title": "Do Narcissists Really Know What They’re Doing?",
    "category": "Narcissistic Abuse",
    "duration": "1:15 min",
    "summary": "One of the biggest questions about narcissistic behavior is whether it is intentional or unconscious. Exploring the difference between awareness and accountability can help explain why these patterns are often so difficult to change.",
    "keywords": [
      "Psychology",
      "Narcissism",
      "Relationships",
      "MentalHealth",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Do Narcissists Really Know What They’re Doing.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_253/preview"
  },
  {
    "id": "v-250",
    "title": "6 Habits That Make You Easy To Manipulate",
    "category": "Toxic Relationship Patterns",
    "duration": "1:45 min",
    "summary": "Some habits that seem kind or considerate can quietly make it easier for others to take advantage of you. Understanding how people-pleasing behaviors weaken boundaries can help you protect your time, energy, and sense of self.",
    "keywords": [
      "Listicle",
      "Boundaries",
      "SelfWorth",
      "PersonalGrowth",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Habits That Make You Easy To Manipulate.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v32/preview"
  },
  {
    "id": "v-251",
    "title": "Why So Many People Remember Things That Never Happened",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:45 min",
    "summary": "The Mandela Effect challenges the idea that memory works like a recording. Exploring how false memories form can reveal how easily repetition, suggestion, and social influence shape what people believe to be true.",
    "keywords": [
      "ParadoxandEffects",
      "MandelaEffect",
      "Memory",
      "HumanBehavior",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why So many People Remember Things that Never Happened .jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v207/preview"
  },
  {
    "id": "v-252",
    "title": "How Parents Pass Down Their Unhealed Wounds",
    "category": "Inner Child Healing",
    "duration": "1:15 min",
    "summary": "Unresolved pain often affects the way people parent, even when they do not intend to cause harm. Understanding how emotional wounds are passed from one generation to the next can help explain inherited patterns and how healing can break the cycle.",
    "keywords": [
      "Childhood",
      "Healing",
      "Psychology",
      "GenerationalTrauma",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Parents Pass Down Their Unhealed Wounds..jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_256/preview"
  },
  {
    "id": "v-253",
    "title": "How To Read The Room Without Anyone Saying A Word",
    "category": "Emotional Intelligence",
    "duration": "1:10 min",
    "summary": "The strongest communicators notice more than what people say. Paying attention to body language, emotional cues, and group dynamics can help build trust, strengthen relationships, and improve social awareness.",
    "keywords": [
      "EmotionalIntelligence",
      "Communication",
      "Psychology",
      "Relationships",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Read the Room Without Anyone Saying a Word.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v76/preview"
  },
  {
    "id": "v-254",
    "title": "Why Your Birthday Doesn’t Feel As Happy As It Should",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Birthdays can bring unexpected feelings of loneliness, disappointment, or disconnection, even when surrounded by people who care. Understanding the psychology behind the birthday blues can help explain why a day meant for celebration sometimes feels heavier than expected.",
    "keywords": [
      "Psychology",
      "MentalHealth",
      "BirthdayBlues",
      "SelfWorth",
      "EmotionalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Birthday Doesn’t Feel As Happy As It Should.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v237/preview"
  },
  {
    "id": "v-255",
    "title": "Why Motivation Disappears When You Need It The Most",
    "category": "Stress & Overwhelm",
    "duration": "2:15 min",
    "summary": "What feels like laziness is often a response to burnout, overwhelm, or emotional exhaustion. Recognizing the difference can help explain why motivation disappears and why small actions are often the first step toward rebuilding momentum.",
    "keywords": [
      "Motivation",
      "Psychology",
      "Burnout",
      "MentalHealth",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Motivation Disappears When You Need It The Most.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v203/preview"
  },
  {
    "id": "v-256",
    "title": "The Shocking Truth About Love And Pain That No One Tells You",
    "category": "Love & Relationships",
    "duration": "1:45 min",
    "summary": "Love does more than bring comfort, it often reveals the fears, wounds, and patterns that still need attention. Understanding why relationships trigger personal growth can help make sense of the challenges that come with deep connection.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Love",
      "Healing",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Shocking Truth About Love and Pain That No One Tells You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v144/preview"
  },
  {
    "id": "v-257",
    "title": "7 Everyday Habits That Can Improve Focus",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:20 min",
    "summary": "Focus is shaped more by daily habits than by willpower alone. Small adjustments to routines, energy management, and attention can make it easier to stay productive and mentally engaged throughout the day.",
    "keywords": [
      "Listicle",
      "Productivity",
      "Psychology",
      "Mindset",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/7 Everyday Habits That Can Improve Focus.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v37/preview"
  },
  {
    "id": "v-258",
    "title": "Why Unfinished Tasks Haunt Your Mind",
    "category": "Overthinking",
    "duration": "2:05 min",
    "summary": "Unfinished tasks tend to stay active in your mind long after you've stepped away from them. The Zeigarnik Effect reveals why unresolved work creates mental clutter and how small actions can help your brain finally let go.",
    "keywords": [
      "ParadoxesandEffects",
      "ZeigarnikEffect",
      "Productivity",
      "Focus",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Unfinished Tasks Haunt Your Mind.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v215/preview"
  },
  {
    "id": "v-259",
    "title": "The Silent Burden Of Being The Strong Child",
    "category": "Childhood & Family Patterns",
    "duration": "2:05 min",
    "summary": "Children who are expected to be the strong one often learn to hide their own needs while caring for everyone else. Understanding how this role carries into adulthood can help explain struggles with vulnerability, support, and emotional connection.",
    "keywords": [
      "Childhood",
      "Healing",
      "Psychology",
      "SelfWorth",
      "MentalHealth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Silent Burden of Being The Strong Child.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v145/preview"
  },
  {
    "id": "v-260",
    "title": "6 Emotional Skills",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Some of the most important life skills have nothing to do with intelligence or talent. Building stronger emotional awareness, boundaries, and communication skills can help you navigate relationships with greater confidence and resilience.",
    "keywords": [
      "EmotionalIntelligence",
      "Psychology",
      "MentalHealth",
      "Relationships",
      "SelfGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Emotional Skills.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v30/preview"
  },
  {
    "id": "v-261",
    "title": "Why Focusing On Failure Makes You Fail",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:20 min",
    "summary": "The Carl Wallenda Effect shows how fear of failure can interfere with performance when attention shifts from the process to the outcome. Learning why this happens can help reduce pressure and improve focus when the stakes feel high.",
    "keywords": [
      "ParadoxesandEffects",
      "CarlWallendaEffect",
      "Mindset",
      "Success",
      "Performance"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Focusing On Failure Makes You Fail.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v191/preview"
  },
  {
    "id": "v-262",
    "title": "When Empathy Hurts More Than It Helps",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Deep empathy can make it easier to understand people, even when they cause harm. Exploring the balance between compassion and self-protection can help explain why some empathetic people struggle to recognize when a boundary is needed.",
    "keywords": [
      "Psychology",
      "Empathy",
      "EmotionalIntelligence",
      "Healing",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Empathy Hurts More Than It Helps.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v158/preview"
  },
  {
    "id": "v-263",
    "title": "Why Letting Go Doesn’t Make You Heartless",
    "category": "Love & Relationships",
    "duration": "1:30 min",
    "summary": "Not every relationship is meant to stay in your life forever. Recognizing when a connection is harming your well-being can help create healthier boundaries and make it easier to choose self-respect without guilt.",
    "keywords": [
      "Relationships",
      "Boundaries",
      "Healing",
      "Psychology",
      "SelfWorth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Letting Go Doesn’t Make You Heartless.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v199/preview"
  },
  {
    "id": "v-264",
    "title": "The Real Reason “Laziness” Isn’t What You Think",
    "category": "Stress & Overwhelm",
    "duration": "1:15 min",
    "summary": "People are often labeled lazy when they are actually overwhelmed, exhausted, or running on empty. Looking beyond the label can help explain why motivation disappears and why recovery often starts with self-understanding rather than self-criticism.",
    "keywords": [
      "Psychology",
      "Burnout",
      "MentalHealth",
      "SelfCare",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Real Reason “Laziness” Isn’t What You Think.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v141/preview"
  },
  {
    "id": "v-265",
    "title": "Why You Give Better Advice Than You Take",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:15 min",
    "summary": "The Solomon Paradox explains why people often see other people's problems more clearly than their own. Creating emotional distance from a situation can improve decision-making and make it easier to find clarity when emotions get in the way.",
    "keywords": [
      "ParadoxesandEffects",
      "SolomonParadox",
      "DecisionMaking",
      "Mindset",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Give Better Advice Than You Take.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v225/preview"
  },
  {
    "id": "v-266",
    "title": "4 Behaviors Linked To Chronic Overthinking",
    "category": "Stress & Overwhelm",
    "duration": "1:15 min",
    "summary": "Overthinking does more than create stress,it can drain energy, fuel anxiety, and make everyday decisions feel overwhelming. Recognizing how these thought patterns affect mental well-being is the first step toward creating more peace of mind.",
    "keywords": [
      "Psychology",
      "Overthinking",
      "MentalHealth",
      "Anxiety",
      "SelfAwareness"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Behaviors Linked to Chronic Overthinking.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v1/preview"
  },
  {
    "id": "v-267",
    "title": "5 Habits That Can Lower Your Self Confidence",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:10 min",
    "summary": "Confidence is often shaped by the small things you do every day. Understanding the habits that quietly reinforce self-doubt can help you build a stronger sense of self-worth and trust in yourself.",
    "keywords": [
      "Listicle",
      "SelfConfidence",
      "SelfWorth",
      "PersonalGrowth",
      "Mindset"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Habits That Can Lower Your Self Confidence.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v20/preview"
  },
  {
    "id": "v-268",
    "title": "5 Signs You Struggle To Say What You Need",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:30 min",
    "summary": "Struggling to express your needs often has less to do with communication and more to do with what you've learned about asking for support. This video explores why speaking up can feel uncomfortable, even when what you're asking for is completely reasonable.",
    "keywords": [
      "Listicle",
      "Communication",
      "Boundaries",
      "Psychology",
      "Relationships&nbsp"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Signs You Struggle to Say What You Need.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v24/preview"
  },
  {
    "id": "v-269",
    "title": "6 Habits Silently Destroying Your Mental Health",
    "category": "Psychological Paradoxes & Effects",
    "duration": "1:30 min",
    "summary": "Some habits become so familiar that we mistake them for normal, even when they're quietly wearing down our mental health. The hardest part is realizing the behaviors hurting you may be the same ones you've relied on for years.",
    "keywords": [
      "Listicle",
      "Psychology",
      "SelfCare",
      "EmotionalHealth",
      "PersonalGrowth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Habits Silently Destroying Your Mental Health.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v31/preview"
  }
];

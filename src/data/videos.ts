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
  // If a explicit Dropbox link is provided, convert to direct streamable URL
  if (videoItem.driveVideoUrl && videoItem.driveVideoUrl.includes("dropbox.com")) {
    return videoItem.driveVideoUrl
      .replace("dl=0", "raw=1")
      .replace("www.dropbox.com", "dl.dropboxusercontent.com");
  }

  // Automatic streamable Dropbox URL for all 271 videos from shared Dropbox folder
  const folderBase = "https://www.dropbox.com/scl/fo/fjvgw8v4s3xzwda9uw41t/ADc0bdjQrJyzzkoYOADrFVI/Watch%20and%20Learn/Video%20Files";
  const rlkey = "k4mh7rxkk1jpmwbv89or4g7d4";
  const fileName = videoItem.title.endsWith(".mp4") ? videoItem.title : `${videoItem.title}.mp4`;
  
  return `${folderBase}?rlkey=${rlkey}&raw=1&preview=${encodeURIComponent(fileName)}`;
}

export const CATEGORIES = [
  "All Categories",
  "Overthinking & Anxiety",
  "Emotional Intelligence",
  "Healthy & Narcissistic Relationships",
  "Childhood & Inner Child",
  "Relationships & Attachment",
  "Self-Sabotage",
  "Shadow Work",
  "Psychology",
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    "id": "v1",
    "title": "4 Behaviors Linked to Chronic Overthinking",
    "category": "Overthinking & Anxiety",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on 4 behaviors linked to chronic overthinking and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Behaviors Linked to Chronic Overthinking.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v1/preview"
  },
  {
    "id": "v2",
    "title": "How Emotionally Intelligent People Handle Hurt",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on how emotionally intelligent people handle hurt and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v2/preview"
  },
  {
    "id": "v3",
    "title": "What No Contact Really Does To A Narcissist",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on what no contact really does to a narcissist and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What No Contact Really Does To A Narcissist.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v3/preview"
  },
  {
    "id": "v4",
    "title": "Why Your Inner Child Still Needs You",
    "category": "Childhood & Inner Child",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why your inner child still needs you and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Inner Child Still Needs You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v4/preview"
  },
  {
    "id": "v5",
    "title": "Are you Secretly Sabotaging Your Own Happiness",
    "category": "Self-Sabotage",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on are you secretly sabotaging your own happiness and how to build emotional resilience.",
    "keywords": [
      "Self-Sabotage",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Are you Secretly Sabotaging Your Own Happiness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v5/preview"
  },
  {
    "id": "v6",
    "title": "How Childhood Criticism Replays in Adulthood",
    "category": "Childhood & Inner Child",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on how childhood criticism replays in adulthood and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Childhood Criticism Replays in Adulthood.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v6/preview"
  },
  {
    "id": "v7",
    "title": "Gaslighting How To Spot It as It Happens",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on gaslighting how to spot it as it happens and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Gaslighting How To Spot It as It Happens.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v7/preview"
  },
  {
    "id": "v8",
    "title": "Why Anxious Attachment Chases Love",
    "category": "Relationships & Attachment",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why anxious attachment chases love and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Anxious Attachment Chases Love.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v8/preview"
  },
  {
    "id": "v9",
    "title": "10 Signs Youre Just Surviving",
    "category": "Shadow Work",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on 10 signs youre just surviving and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/10 Signs Youre Just Surviving.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v9/preview"
  },
  {
    "id": "v10",
    "title": "3 Subtle Signs You\u2019re Emotionally Drained",
    "category": "Emotional Intelligence",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on 3 subtle signs you\u2019re emotionally drained and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/3 Subtle Signs You\u2019re Emotionally Drained.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v10/preview"
  },
  {
    "id": "v11",
    "title": "3 Ways Depression Hides Itself",
    "category": "Shadow Work",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on 3 ways depression hides itself and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/3 Ways Depression Hides Itself.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v11/preview"
  },
  {
    "id": "v12",
    "title": "4 Habits Fix Most Problems",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on 4 habits fix most problems and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Habits Fix Most Problems.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v12/preview"
  },
  {
    "id": "v13",
    "title": "4 Habits That Saved You",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on 4 habits that saved you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Habits That Saved You.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v13/preview"
  },
  {
    "id": "v14",
    "title": "4 Signs You Are Healing",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on 4 signs you are healing and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Signs You Are Healing.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v14/preview"
  },
  {
    "id": "v15",
    "title": "4 Signs You Are Quietly Isolating",
    "category": "Overthinking & Anxiety",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on 4 signs you are quietly isolating and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Signs You Are Quietly Isolating.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v15/preview"
  },
  {
    "id": "v16",
    "title": "4 Signs Your Anxiety Has Turned Into Avoidance",
    "category": "Overthinking & Anxiety",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on 4 signs your anxiety has turned into avoidance and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Signs Your Anxiety Has Turned Into Avoidance.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v16/preview"
  },
  {
    "id": "v17",
    "title": "4 Smart Ways To Outsmart A Manipulator",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on 4 smart ways to outsmart a manipulator and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/4 Smart Ways To Outsmart A Manipulator.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v17/preview"
  },
  {
    "id": "v18",
    "title": "5 Burnout Signs You Miss",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on 5 burnout signs you miss and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Burnout Signs You Miss.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v18/preview"
  },
  {
    "id": "v19",
    "title": "5 Habits Hiding High-Functions Depression",
    "category": "Shadow Work",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on 5 habits hiding high-functions depression and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Habits Hiding High-Functions Depression.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v19/preview"
  },
  {
    "id": "v20",
    "title": "5 Habits That Can Lower Your Self Confidence",
    "category": "Self-Sabotage",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on 5 habits that can lower your self confidence and how to build emotional resilience.",
    "keywords": [
      "Self-Sabotage",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Habits That Can Lower Your Self Confidence.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v20/preview"
  },
  {
    "id": "v21",
    "title": "5 Hidden Patterns of The Constantly Criticized Child",
    "category": "Childhood & Inner Child",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on 5 hidden patterns of the constantly criticized child and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Hidden Patterns of The Constantly Criticized Child.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v21/preview"
  },
  {
    "id": "v22",
    "title": "5 Rules You Should Break",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on 5 rules you should break and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Rules You Should Break.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v22/preview"
  },
  {
    "id": "v23",
    "title": "5 Signs You Grew Up Feeling Unwanted",
    "category": "Childhood & Inner Child",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on 5 signs you grew up feeling unwanted and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Signs You Grew Up Feeling Unwanted.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v23/preview"
  },
  {
    "id": "v24",
    "title": "5 Signs You Struggle to Say What You Need",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on 5 signs you struggle to say what you need and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Signs You Struggle to Say What You Need.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v24/preview"
  },
  {
    "id": "v25",
    "title": "5 Signs You\u2019re Learning to Trust Yourself Already",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on 5 signs you\u2019re learning to trust yourself already and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Signs You\u2019re Learning to Trust Yourself Already.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v25/preview"
  },
  {
    "id": "v26",
    "title": "5 Signs of Hidden Stress",
    "category": "Overthinking & Anxiety",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on 5 signs of hidden stress and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Signs of Hidden Stress.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v26/preview"
  },
  {
    "id": "v27",
    "title": "5 Ways Isolation Rewires Your Personality Over Time",
    "category": "Overthinking & Anxiety",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on 5 ways isolation rewires your personality over time and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Ways Isolation Rewires Your Personality Over Time.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v27/preview"
  },
  {
    "id": "v28",
    "title": "5 Ways Trauma Sneaks Into Good Relationships",
    "category": "Relationships & Attachment",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on 5 ways trauma sneaks into good relationships and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/5 Ways Trauma Sneaks Into Good Relationships.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v28/preview"
  },
  {
    "id": "v29",
    "title": "6 Behaviors That Secretly Push People Away",
    "category": "Shadow Work",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on 6 behaviors that secretly push people away and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Behaviors That Secretly Push People Away.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v29/preview"
  },
  {
    "id": "v30",
    "title": "6 Emotional Skills",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on 6 emotional skills and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Emotional Skills.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v30/preview"
  },
  {
    "id": "v31",
    "title": "6 Habits Silently Destroying Your Mental Health",
    "category": "Self-Sabotage",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on 6 habits silently destroying your mental health and how to build emotional resilience.",
    "keywords": [
      "Self-Sabotage",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Habits Silently Destroying Your Mental Health.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v31/preview"
  },
  {
    "id": "v32",
    "title": "6 Habits That Make You Easy To Manipulate",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on 6 habits that make you easy to manipulate and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Habits That Make You Easy To Manipulate.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v32/preview"
  },
  {
    "id": "v33",
    "title": "6 Signs Of Power Tripping",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on 6 signs of power tripping and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Signs Of Power Tripping.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v33/preview"
  },
  {
    "id": "v34",
    "title": "6 Thoughts Trigger Social Anxiety",
    "category": "Overthinking & Anxiety",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on 6 thoughts trigger social anxiety and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Thoughts Trigger Social Anxiety.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v34/preview"
  },
  {
    "id": "v35",
    "title": "6 Traps Keeping You Lonely",
    "category": "Relationships & Attachment",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on 6 traps keeping you lonely and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Traps Keeping You Lonely.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v35/preview"
  },
  {
    "id": "v36",
    "title": "6 Ways Isolation Damages Romance",
    "category": "Overthinking & Anxiety",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on 6 ways isolation damages romance and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/6 Ways Isolation Damages Romance.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v36/preview"
  },
  {
    "id": "v37",
    "title": "7 Everyday Habits That Can Improve Focus",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on 7 everyday habits that can improve focus and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/7 Everyday Habits That Can Improve Focus.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v37/preview"
  },
  {
    "id": "v38",
    "title": "7 Habits That Quietly Kill Romantic Attraction",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on 7 habits that quietly kill romantic attraction and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/7 Habits That Quietly Kill Romantic Attraction.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v38/preview"
  },
  {
    "id": "v39",
    "title": "7 Subtle Signs You Might Be Emotionally Drained",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on 7 subtle signs you might be emotionally drained and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/7 Subtle Signs You Might Be Emotionally Drained.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v39/preview"
  },
  {
    "id": "v40",
    "title": "Acting Tough Is Actually Weak",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on acting tough is actually weak and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Acting Tough Is Actually Weak.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v40/preview"
  },
  {
    "id": "v41",
    "title": "Anger Is Not Real Strength",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on anger is not real strength and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Anger Is Not Real Strength.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v41/preview"
  },
  {
    "id": "v42",
    "title": "Are You Living Your Life or Someone Else\u2019s",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on are you living your life or someone else\u2019s and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Are You Living Your Life or Someone Else\u2019s.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v42/preview"
  },
  {
    "id": "v43",
    "title": "Borrowed Dreams Create Empty Lives",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on borrowed dreams create empty lives and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Borrowed Dreams Create Empty Lives.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v43/preview"
  },
  {
    "id": "v44",
    "title": "Calm Outside Tense Inside You",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on calm outside tense inside you and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Calm Outside Tense Inside You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v44/preview"
  },
  {
    "id": "v45",
    "title": "Calm People Control The Room",
    "category": "Emotional Intelligence",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on calm people control the room and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Calm People Control The Room.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v45/preview"
  },
  {
    "id": "v46",
    "title": "Can Trust Be Rebuilt After Cheating",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on can trust be rebuilt after cheating and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Can Trust Be Rebuilt After Cheating.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v46/preview"
  },
  {
    "id": "v47",
    "title": "Catch Your Feelings Before they Catch You",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on catch your feelings before they catch you and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Catch Your Feelings Before they Catch You.png",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v47/preview"
  },
  {
    "id": "v48",
    "title": "Chasing Is Costing You Everything",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on chasing is costing you everything and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Chasing Is Costing You Everything.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v48/preview"
  },
  {
    "id": "v49",
    "title": "Choose People Who Choose You",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on choose people who choose you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Choose People Who Choose You.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v49/preview"
  },
  {
    "id": "v50",
    "title": "Control Is Not Love",
    "category": "Relationships & Attachment",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on control is not love and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Control Is Not Love.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v50/preview"
  },
  {
    "id": "v51",
    "title": "Do Narcissists Really Know What They\u2019re Doing",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on do narcissists really know what they\u2019re doing and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Do Narcissists Really Know What They\u2019re Doing.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v51/preview"
  },
  {
    "id": "v52",
    "title": "Dont Hide Your Failures",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on dont hide your failures and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Dont Hide Your Failures.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v52/preview"
  },
  {
    "id": "v53",
    "title": "Emotionally Intelligent People Don\u2019t Take Anger Personally",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on emotionally intelligent people don\u2019t take anger personally and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Emotionally Intelligent People Don\u2019t Take Anger Personally.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v53/preview"
  },
  {
    "id": "v54",
    "title": "For Everyone Who Feels Everything Too Deeply",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on for everyone who feels everything too deeply and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/For Everyone Who Feels Everything Too Deeply.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v54/preview"
  },
  {
    "id": "v55",
    "title": "Good People Feel Guilty First",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on good people feel guilty first and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Good People Feel Guilty First.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v55/preview"
  },
  {
    "id": "v56",
    "title": "Happy New Year!",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on happy new year! and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Happy New Year!.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v56/preview"
  },
  {
    "id": "v57",
    "title": "Have You Ever Wondered Why You Attract Toxic Relationships",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on have you ever wondered why you attract toxic relationships and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Have You Ever Wondered Why You Attract Toxic Relationships.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v57/preview"
  },
  {
    "id": "v58",
    "title": "Here\u2019s Proof You\u2019re Healing in Real Time",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on here\u2019s proof you\u2019re healing in real time and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Here\u2019s Proof You\u2019re Healing in Real Time.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v58/preview"
  },
  {
    "id": "v59",
    "title": "How Do I Decide What Really Deserves My Energy",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on how do i decide what really deserves my energy and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Do I Decide What Really Deserves My Energy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v59/preview"
  },
  {
    "id": "v60",
    "title": "How Do You Find Purpose When You Feel Lost",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on how do you find purpose when you feel lost and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Do You Find Purpose When You Feel Lost.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v60/preview"
  },
  {
    "id": "v61",
    "title": "How Emotional Intelligence Actually Works",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on how emotional intelligence actually works and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Emotional Intelligence Actually Works.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v61/preview"
  },
  {
    "id": "v62",
    "title": "How Insecure People Act When They\u2019re in Charge",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on how insecure people act when they\u2019re in charge and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Insecure People Act When They\u2019re in Charge.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v62/preview"
  },
  {
    "id": "v63",
    "title": "How Insecurity Distorts Love And How Trust Heals It",
    "category": "Relationships & Attachment",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on how insecurity distorts love and how trust heals it and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Insecurity Distorts Love And How Trust Heals It.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v63/preview"
  },
  {
    "id": "v64",
    "title": "How Naming an Emotion Can Break Its Grip On You",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on how naming an emotion can break its grip on you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Naming an Emotion Can Break Its Grip On You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v64/preview"
  },
  {
    "id": "v65",
    "title": "How Parents Pass Down Their Unhealed Wounds.",
    "category": "Childhood & Inner Child",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on how parents pass down their unhealed wounds. and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Parents Pass Down Their Unhealed Wounds..jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v65/preview"
  },
  {
    "id": "v66",
    "title": "How Self-Trust Actually Looks",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on how self-trust actually looks and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Self-Trust Actually Looks.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v66/preview"
  },
  {
    "id": "v67",
    "title": "How The Mind Has The Hidden Power to Heal",
    "category": "Shadow Work",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on how the mind has the hidden power to heal and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How The Mind Has The Hidden Power to Heal.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v67/preview"
  },
  {
    "id": "v68",
    "title": "How To Actually Show Up When Someones Hurting",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on how to actually show up when someones hurting and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Actually Show Up When Someones Hurting.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v68/preview"
  },
  {
    "id": "v69",
    "title": "How To Build Real Connection Instead of Just Company",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on how to build real connection instead of just company and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Build Real Connection Instead of Just Company.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v69/preview"
  },
  {
    "id": "v70",
    "title": "How To Disagree Without Losing Someone You Care About",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on how to disagree without losing someone you care about and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Disagree Without Losing Someone You Care About.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v70/preview"
  },
  {
    "id": "v71",
    "title": "How To Figure Out What Matters To You",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on how to figure out what matters to you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Figure Out What Matters To You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v71/preview"
  },
  {
    "id": "v72",
    "title": "How To Find Yourself After Another Heartbreak copy",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on how to find yourself after another heartbreak copy and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Find Yourself After Another Heartbreak copy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v72/preview"
  },
  {
    "id": "v73",
    "title": "How To Handle When People Are Jealous Of You",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on how to handle when people are jealous of you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Handle When People Are Jealous Of You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v73/preview"
  },
  {
    "id": "v74",
    "title": "How To Outsmart Your Brain",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on how to outsmart your brain and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Outsmart Your Brain.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v74/preview"
  },
  {
    "id": "v75",
    "title": "How To Persuade Without Pushing",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on how to persuade without pushing and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Persuade Without Pushing.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v75/preview"
  },
  {
    "id": "v76",
    "title": "How To Read the Room Without Anyone Saying a Word",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on how to read the room without anyone saying a word and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Read the Room Without Anyone Saying a Word.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v76/preview"
  },
  {
    "id": "v77",
    "title": "How To Rebuild After Failure",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on how to rebuild after failure and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Rebuild After Failure.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v77/preview"
  },
  {
    "id": "v78",
    "title": "How To Recognize A Narcissist",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on how to recognize a narcissist and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Recognize A Narcissist.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v78/preview"
  },
  {
    "id": "v79",
    "title": "How To Stop Letting Other People\u2019s Mood Control Yours",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on how to stop letting other people\u2019s mood control yours and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Stop Letting Other People\u2019s Mood Control Yours.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v79/preview"
  },
  {
    "id": "v80",
    "title": "How To Tell When Someone Is Lying",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on how to tell when someone is lying and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Tell When Someone Is Lying.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v80/preview"
  },
  {
    "id": "v81",
    "title": "How To Turn Childhood Pain Into Adult Strength",
    "category": "Childhood & Inner Child",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on how to turn childhood pain into adult strength and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How To Turn Childhood Pain Into Adult Strength.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v81/preview"
  },
  {
    "id": "v82",
    "title": "How You Say it Wins",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on how you say it wins and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How You Say it Wins.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v82/preview"
  },
  {
    "id": "v83",
    "title": "How Your Father Wounds Affect Your Relationships Today",
    "category": "Relationships & Attachment",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on how your father wounds affect your relationships today and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Your Father Wounds Affect Your Relationships Today.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v83/preview"
  },
  {
    "id": "v84",
    "title": "How Your Reactions Becomes Their Weapon",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on how your reactions becomes their weapon and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Your Reactions Becomes Their Weapon.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v84/preview"
  },
  {
    "id": "v85",
    "title": "How Your Thoughts Cause Pain",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on how your thoughts cause pain and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How Your Thoughts Cause Pain.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v85/preview"
  },
  {
    "id": "v86",
    "title": "How to Recognize When You\u2019re Finally Breaking Old Cycles",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on how to recognize when you\u2019re finally breaking old cycles and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/How to Recognize When You\u2019re Finally Breaking Old Cycles.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v86/preview"
  },
  {
    "id": "v87",
    "title": "Is Anxiety Choosing For You",
    "category": "Overthinking & Anxiety",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on is anxiety choosing for you and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Is Anxiety Choosing For You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v87/preview"
  },
  {
    "id": "v88",
    "title": "Is Your Fear of Missing Out Ruining Your Life",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on is your fear of missing out ruining your life and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Is Your Fear of Missing Out Ruining Your Life.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v88/preview"
  },
  {
    "id": "v89",
    "title": "Loneliness Hides Behind Independence",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on loneliness hides behind independence and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Loneliness Hides Behind Independence.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v89/preview"
  },
  {
    "id": "v90",
    "title": "Love Gets Hard Before Real",
    "category": "Relationships & Attachment",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on love gets hard before real and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Love Gets Hard Before Real.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v90/preview"
  },
  {
    "id": "v91",
    "title": "Love Lost But Fear Won",
    "category": "Relationships & Attachment",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on love lost but fear won and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Love Lost But Fear Won.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v91/preview"
  },
  {
    "id": "v92",
    "title": "Love Should Not Have Strings",
    "category": "Relationships & Attachment",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on love should not have strings and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Love Should Not Have Strings.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v92/preview"
  },
  {
    "id": "v93",
    "title": "Mastering Love You Never Had",
    "category": "Relationships & Attachment",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on mastering love you never had and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Mastering Love You Never Had.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v93/preview"
  },
  {
    "id": "v94",
    "title": "Motivation Is A Lie",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on motivation is a lie and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Motivation Is A Lie.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v94/preview"
  },
  {
    "id": "v95",
    "title": "Overthinking or Intuition",
    "category": "Overthinking & Anxiety",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on overthinking or intuition and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Overthinking or Intuition.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v95/preview"
  },
  {
    "id": "v96",
    "title": "Questions That Create Real Connection",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on questions that create real connection and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Questions That Create Real Connection.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v96/preview"
  },
  {
    "id": "v97",
    "title": "Safe People Help You Heal",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on safe people help you heal and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Safe People Help You Heal.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v97/preview"
  },
  {
    "id": "v98",
    "title": "Signs You\u2019re Secretly Depressed",
    "category": "Shadow Work",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on signs you\u2019re secretly depressed and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Signs You\u2019re Secretly Depressed.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v98/preview"
  },
  {
    "id": "v99",
    "title": "Sorry Was Your Survival Strategy",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on sorry was your survival strategy and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Sorry Was Your Survival Strategy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v99/preview"
  },
  {
    "id": "v100",
    "title": "Spot Fake Friends Early",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on spot fake friends early and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Spot Fake Friends Early.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v100/preview"
  },
  {
    "id": "v101",
    "title": "Stop Calling It Coping. You\u2019re Compartmentalizing",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on stop calling it coping. you\u2019re compartmentalizing and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Calling It Coping. You\u2019re Compartmentalizing.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v101/preview"
  },
  {
    "id": "v102",
    "title": "Stop Calling It Coping.Youre Compartmentalizing(2)",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on stop calling it coping.youre compartmentalizing(2) and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Calling It Coping.Youre Compartmentalizing(2).jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v102/preview"
  },
  {
    "id": "v103",
    "title": "Stop Chasing People Who Don\u2019t Choose You",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on stop chasing people who don\u2019t choose you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Chasing People Who Don\u2019t Choose You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v103/preview"
  },
  {
    "id": "v104",
    "title": "Stop Chasing Potential and See What\u2019s Really There",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on stop chasing potential and see what\u2019s really there and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Chasing Potential and See What\u2019s Really There.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v104/preview"
  },
  {
    "id": "v105",
    "title": "Stop Guessing If They Care",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on stop guessing if they care and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Guessing If They Care.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v105/preview"
  },
  {
    "id": "v106",
    "title": "Stop Proving You Are Enough",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on stop proving you are enough and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Proving You Are Enough.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v106/preview"
  },
  {
    "id": "v107",
    "title": "Stop Settling For Less",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on stop settling for less and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Settling For Less.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v107/preview"
  },
  {
    "id": "v108",
    "title": "Stop Taking Things Personally",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on stop taking things personally and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Taking Things Personally.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v108/preview"
  },
  {
    "id": "v109",
    "title": "Stop Trying To Fix People",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on stop trying to fix people and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Trying To Fix People.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v109/preview"
  },
  {
    "id": "v110",
    "title": "Stop Waiting For The Perfect Moment(2)",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on stop waiting for the perfect moment(2) and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Waiting For The Perfect Moment(2).jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v110/preview"
  },
  {
    "id": "v111",
    "title": "Stop Waiting For The Perfect Moment",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on stop waiting for the perfect moment and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Stop Waiting For The Perfect Moment.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v111/preview"
  },
  {
    "id": "v112",
    "title": "The 8020 Rule and Why it Shapes Almost Everything",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on the 8020 rule and why it shapes almost everything and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The 8020 Rule and Why it Shapes Almost Everything.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v112/preview"
  },
  {
    "id": "v113",
    "title": "The Barnum Effect Why Vague Statements Feel Deeply Personal",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on the barnum effect why vague statements feel deeply personal and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Barnum Effect Why Vague Statements Feel Deeply Personal.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v113/preview"
  },
  {
    "id": "v114",
    "title": "The Black Sheep Effect",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on the black sheep effect and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Black Sheep Effect.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v114/preview"
  },
  {
    "id": "v115",
    "title": "The Body Language That Reveals Hidden Anxiety",
    "category": "Overthinking & Anxiety",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on the body language that reveals hidden anxiety and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Body Language That Reveals Hidden Anxiety.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v115/preview"
  },
  {
    "id": "v116",
    "title": "The Child Blamed For Everything",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on the child blamed for everything and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Child Blamed For Everything.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v116/preview"
  },
  {
    "id": "v117",
    "title": "The Childhood Wound That Follows You Into Love",
    "category": "Childhood & Inner Child",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on the childhood wound that follows you into love and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Childhood Wound That Follows You Into Love.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v117/preview"
  },
  {
    "id": "v118",
    "title": "The Cost Of Being Kind",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on the cost of being kind and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Cost Of Being Kind.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v118/preview"
  },
  {
    "id": "v119",
    "title": "The Cost Of Staying Quiet",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on the cost of staying quiet and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Cost Of Staying Quiet.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v119/preview"
  },
  {
    "id": "v120",
    "title": "The Cost of Always Avoiding Conflict",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on the cost of always avoiding conflict and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Cost of Always Avoiding Conflict.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v120/preview"
  },
  {
    "id": "v121",
    "title": "The Crab Effect Why People Pull You Down",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on the crab effect why people pull you down and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Crab Effect Why People Pull You Down.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v121/preview"
  },
  {
    "id": "v122",
    "title": "The Damage of Parents Who Never Apologize",
    "category": "Childhood & Inner Child",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on the damage of parents who never apologize and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Damage of Parents Who Never Apologize.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v122/preview"
  },
  {
    "id": "v123",
    "title": "The Guilt Of Choosing You",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on the guilt of choosing you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Guilt Of Choosing You.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v123/preview"
  },
  {
    "id": "v124",
    "title": "The Hard Truth About Love Nobody Wants to Hear",
    "category": "Relationships & Attachment",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on the hard truth about love nobody wants to hear and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hard Truth About Love Nobody Wants to Hear.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v124/preview"
  },
  {
    "id": "v125",
    "title": "The Healing Power of Saying \u201cIt Wasn\u2019t My Fault\u201d",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on the healing power of saying \u201cit wasn\u2019t my fault\u201d and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Healing Power of Saying \u201cIt Wasn\u2019t My Fault\u201d.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v125/preview"
  },
  {
    "id": "v126",
    "title": "The Hidden Cost Of Having a Savior Complex",
    "category": "Shadow Work",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on the hidden cost of having a savior complex and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Cost Of Having a Savior Complex.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v126/preview"
  },
  {
    "id": "v127",
    "title": "The Hidden Cost of Being Your Parent\u2019s Confidant",
    "category": "Childhood & Inner Child",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on the hidden cost of being your parent\u2019s confidant and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Cost of Being Your Parent\u2019s Confidant.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v127/preview"
  },
  {
    "id": "v128",
    "title": "The Hidden Curse Of Being Emotionally Intelligent",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on the hidden curse of being emotionally intelligent and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Curse Of Being Emotionally Intelligent.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v128/preview"
  },
  {
    "id": "v129",
    "title": "The Hidden Reason You Cry During Arguments",
    "category": "Shadow Work",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on the hidden reason you cry during arguments and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Reason You Cry During Arguments.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v129/preview"
  },
  {
    "id": "v130",
    "title": "The Hidden Strength Of People Who Admit They\u2019re Wrong",
    "category": "Shadow Work",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on the hidden strength of people who admit they\u2019re wrong and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Strength Of People Who Admit They\u2019re Wrong.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v130/preview"
  },
  {
    "id": "v131",
    "title": "The Hidden Struggle Behind Asking for Help",
    "category": "Shadow Work",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on the hidden struggle behind asking for help and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Struggle Behind Asking for Help.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v131/preview"
  },
  {
    "id": "v132",
    "title": "The Hidden Trap of Love Bombing",
    "category": "Relationships & Attachment",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on the hidden trap of love bombing and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Hidden Trap of Love Bombing.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v132/preview"
  },
  {
    "id": "v133",
    "title": "The Kid Who Never Spoke",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on the kid who never spoke and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Kid Who Never Spoke.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v133/preview"
  },
  {
    "id": "v134",
    "title": "The Only Opinions That Matter",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on the only opinions that matter and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Only Opinions That Matter.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v134/preview"
  },
  {
    "id": "v135",
    "title": "The Ostrich Effect Why We Avoid The Truth",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on the ostrich effect why we avoid the truth and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Ostrich Effect Why We Avoid The Truth.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v135/preview"
  },
  {
    "id": "v136",
    "title": "The Pain of Unproud Parents",
    "category": "Childhood & Inner Child",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on the pain of unproud parents and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Pain of Unproud Parents.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v136/preview"
  },
  {
    "id": "v137",
    "title": "The Power Of Not Reacting",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on the power of not reacting and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Power Of Not Reacting.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v137/preview"
  },
  {
    "id": "v138",
    "title": "The Real Reason You Can\u2019t Stop Scrolling at 2AM",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on the real reason you can\u2019t stop scrolling at 2am and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Real Reason You Can\u2019t Stop Scrolling at 2AM.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v138/preview"
  },
  {
    "id": "v139",
    "title": "The Real Reason You Push Good People Away",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on the real reason you push good people away and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Real Reason You Push Good People Away.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v139/preview"
  },
  {
    "id": "v140",
    "title": "The Real Reason You Still Stalk Your Ex\u2019s Profile",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on the real reason you still stalk your ex\u2019s profile and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Real Reason You Still Stalk Your Ex\u2019s Profile.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v140/preview"
  },
  {
    "id": "v141",
    "title": "The Real Reason \u201cLaziness\u201d Isn\u2019t What You Think",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on the real reason \u201claziness\u201d isn\u2019t what you think and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Real Reason \u201cLaziness\u201d Isn\u2019t What You Think.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v141/preview"
  },
  {
    "id": "v142",
    "title": "The Secret To Being Heard",
    "category": "Shadow Work",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on the secret to being heard and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Secret To Being Heard.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v142/preview"
  },
  {
    "id": "v143",
    "title": "The Secret To Making Friends",
    "category": "Shadow Work",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on the secret to making friends and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Secret To Making Friends.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v143/preview"
  },
  {
    "id": "v144",
    "title": "The Shocking Truth About Love and Pain That No One Tells You",
    "category": "Relationships & Attachment",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on the shocking truth about love and pain that no one tells you and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Shocking Truth About Love and Pain That No One Tells You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v144/preview"
  },
  {
    "id": "v145",
    "title": "The Silent Burden of Being The Strong Child",
    "category": "Childhood & Inner Child",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on the silent burden of being the strong child and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Silent Burden of Being The Strong Child.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v145/preview"
  },
  {
    "id": "v146",
    "title": "The Skill That Ends Control",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on the skill that ends control and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Skill That Ends Control.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v146/preview"
  },
  {
    "id": "v147",
    "title": "The Strength of Emotionally Intelligent People",
    "category": "Emotional Intelligence",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on the strength of emotionally intelligent people and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Strength of Emotionally Intelligent People.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v147/preview"
  },
  {
    "id": "v148",
    "title": "The Truth About Feeling Numb",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on the truth about feeling numb and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Truth About Feeling Numb.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v148/preview"
  },
  {
    "id": "v149",
    "title": "The Truth About Why Negativity Feels Stronger Than Positivity",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on the truth about why negativity feels stronger than positivity and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Truth About Why Negativity Feels Stronger Than Positivity.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v149/preview"
  },
  {
    "id": "v150",
    "title": "The Truth About the Child Who Was Called \u201cDifficult\u201d",
    "category": "Childhood & Inner Child",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on the truth about the child who was called \u201cdifficult\u201d and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/The Truth About the Child Who Was Called \u201cDifficult\u201d.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v150/preview"
  },
  {
    "id": "v151",
    "title": "Think Empathy Means Always Agreeing Think Again",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on think empathy means always agreeing think again and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Think Empathy Means Always Agreeing Think Again.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v151/preview"
  },
  {
    "id": "v152",
    "title": "What Happens When You Grow Up Without Boundaries",
    "category": "Relationships & Attachment",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on what happens when you grow up without boundaries and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What Happens When You Grow Up Without Boundaries.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v152/preview"
  },
  {
    "id": "v153",
    "title": "What If I Never Feel Like Im Enough",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on what if i never feel like im enough and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What If I Never Feel Like Im Enough.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v153/preview"
  },
  {
    "id": "v154",
    "title": "What To Do After Leaving A Toxic Relationship",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on what to do after leaving a toxic relationship and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What To Do After Leaving A Toxic Relationship.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v154/preview"
  },
  {
    "id": "v155",
    "title": "What Your Anger Is Hiding",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on what your anger is hiding and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What Your Anger Is Hiding.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v155/preview"
  },
  {
    "id": "v156",
    "title": "What\u2019s Quietly Holding You Back",
    "category": "Self-Sabotage",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on what\u2019s quietly holding you back and how to build emotional resilience.",
    "keywords": [
      "Self-Sabotage",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/What\u2019s Quietly Holding You Back.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v156/preview"
  },
  {
    "id": "v157",
    "title": "When Being Seen Feels Dangerous",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on when being seen feels dangerous and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Being Seen Feels Dangerous.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v157/preview"
  },
  {
    "id": "v158",
    "title": "When Empathy Hurts More Than It Helps",
    "category": "Emotional Intelligence",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on when empathy hurts more than it helps and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Empathy Hurts More Than It Helps.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v158/preview"
  },
  {
    "id": "v159",
    "title": "When Even Small Tasks Feel Like Heavy Lifting",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on when even small tasks feel like heavy lifting and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Even Small Tasks Feel Like Heavy Lifting.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v159/preview"
  },
  {
    "id": "v160",
    "title": "When Fear Keeps You Stuck",
    "category": "Overthinking & Anxiety",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on when fear keeps you stuck and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Fear Keeps You Stuck.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v160/preview"
  },
  {
    "id": "v161",
    "title": "When Feelings Have No Words",
    "category": "Emotional Intelligence",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on when feelings have no words and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Feelings Have No Words.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v161/preview"
  },
  {
    "id": "v162",
    "title": "When Forgiveness Feels Like Self-Betrayal",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on when forgiveness feels like self-betrayal and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Forgiveness Feels Like Self-Betrayal.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v162/preview"
  },
  {
    "id": "v163",
    "title": "When Kindness Turns Into A Trap",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on when kindness turns into a trap and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Kindness Turns Into A Trap.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v163/preview"
  },
  {
    "id": "v164",
    "title": "When Life Feels Like Nothing Makes You Happy",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on when life feels like nothing makes you happy and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Life Feels Like Nothing Makes You Happy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v164/preview"
  },
  {
    "id": "v165",
    "title": "When Love Feels Like Danger",
    "category": "Relationships & Attachment",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on when love feels like danger and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Love Feels Like Danger.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v165/preview"
  },
  {
    "id": "v166",
    "title": "When Love Feels Safe and Scary Too",
    "category": "Relationships & Attachment",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on when love feels safe and scary too and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Love Feels Safe and Scary Too.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v166/preview"
  },
  {
    "id": "v167",
    "title": "When Love Turns Into Testing",
    "category": "Relationships & Attachment",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on when love turns into testing and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Love Turns Into Testing.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v167/preview"
  },
  {
    "id": "v168",
    "title": "When Loyalty Becomes A Cage",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on when loyalty becomes a cage and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Loyalty Becomes A Cage.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v168/preview"
  },
  {
    "id": "v169",
    "title": "When Rules Become A Cage",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on when rules become a cage and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Rules Become A Cage.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v169/preview"
  },
  {
    "id": "v170",
    "title": "When Saying \u201cSorry\u201d Becomes a Survival Habit",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on when saying \u201csorry\u201d becomes a survival habit and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Saying \u201cSorry\u201d Becomes a Survival Habit.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v170/preview"
  },
  {
    "id": "v171",
    "title": "When Targets Miss What Matters",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on when targets miss what matters and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Targets Miss What Matters.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v171/preview"
  },
  {
    "id": "v172",
    "title": "When They Flip The Blame",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on when they flip the blame and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When They Flip The Blame.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v172/preview"
  },
  {
    "id": "v173",
    "title": "When You Were Praised for Being \u201cMature For Your Age\u201d",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on when you were praised for being \u201cmature for your age\u201d and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When You Were Praised for Being \u201cMature For Your Age\u201d.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v173/preview"
  },
  {
    "id": "v174",
    "title": "When Your Body Screams Stay Away Without Reason",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on when your body screams stay away without reason and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Your Body Screams Stay Away Without Reason.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v174/preview"
  },
  {
    "id": "v175",
    "title": "When Your Life Feels Like A Movie",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on when your life feels like a movie and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Your Life Feels Like A Movie.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v175/preview"
  },
  {
    "id": "v176",
    "title": "When Your Truth Gets Taken",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on when your truth gets taken and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/When Your Truth Gets Taken.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v176/preview"
  },
  {
    "id": "v177",
    "title": "Why Affection in Childhood Matters More Thank You Think",
    "category": "Childhood & Inner Child",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why affection in childhood matters more thank you think and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Affection in Childhood Matters More Thank You Think.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v177/preview"
  },
  {
    "id": "v178",
    "title": "Why Asking More Questions Makes People Like You",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why asking more questions makes people like you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Asking More Questions Makes People Like You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v178/preview"
  },
  {
    "id": "v179",
    "title": "Why Awareness Changes Nothing Sometimes",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why awareness changes nothing sometimes and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Awareness Changes Nothing Sometimes.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v179/preview"
  },
  {
    "id": "v180",
    "title": "Why Being Alone is Healthy",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why being alone is healthy and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Being Alone is Healthy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v180/preview"
  },
  {
    "id": "v181",
    "title": "Why Being Compared to Siblings Hurts More Than You Think",
    "category": "Emotional Intelligence",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why being compared to siblings hurts more than you think and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Being Compared to Siblings Hurts More Than You Think.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v181/preview"
  },
  {
    "id": "v182",
    "title": "Why Being Sure Doesn\u2019t Always Make You Right",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why being sure doesn\u2019t always make you right and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Being Sure Doesn\u2019t Always Make You Right.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v182/preview"
  },
  {
    "id": "v183",
    "title": "Why Breadcrumbing Hurts More than Rejection",
    "category": "Emotional Intelligence",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why breadcrumbing hurts more than rejection and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Breadcrumbing Hurts More than Rejection.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v183/preview"
  },
  {
    "id": "v184",
    "title": "Why Confirmation Bias Blinds You to Truth",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why confirmation bias blinds you to truth and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Confirmation Bias Blinds You to Truth.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v184/preview"
  },
  {
    "id": "v185",
    "title": "Why Courage Feels So Difficult",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why courage feels so difficult and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Courage Feels So Difficult.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v185/preview"
  },
  {
    "id": "v186",
    "title": "Why Disappointing People is The Key to Your Happiness",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why disappointing people is the key to your happiness and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Disappointing People is The Key to Your Happiness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v186/preview"
  },
  {
    "id": "v187",
    "title": "Why Do You Keep Comparing Yourself to Everyone Else",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why do you keep comparing yourself to everyone else and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Do You Keep Comparing Yourself to Everyone Else.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v187/preview"
  },
  {
    "id": "v188",
    "title": "Why Expectations Shape Performance",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why expectations shape performance and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Expectations Shape Performance.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v188/preview"
  },
  {
    "id": "v189",
    "title": "Why Family Secrets Still Haunt You as an Adult",
    "category": "Shadow Work",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why family secrets still haunt you as an adult and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Family Secrets Still Haunt You as an Adult .jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v189/preview"
  },
  {
    "id": "v190",
    "title": "Why Fawning Is Never Kindness",
    "category": "Shadow Work",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why fawning is never kindness and how to build emotional resilience.",
    "keywords": [
      "Shadow Work",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Fawning Is Never Kindness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v190/preview"
  },
  {
    "id": "v191",
    "title": "Why Focusing On Failure Makes You Fail",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why focusing on failure makes you fail and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Focusing On Failure Makes You Fail.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v191/preview"
  },
  {
    "id": "v192",
    "title": "Why Forgiveness Isn\u2019t Required To Heal Childhood Pain",
    "category": "Childhood & Inner Child",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why forgiveness isn\u2019t required to heal childhood pain and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Forgiveness Isn\u2019t Required To Heal Childhood Pain.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v192/preview"
  },
  {
    "id": "v193",
    "title": "Why Givers Are The Strongest People You\u2019ll Ever Meet",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why givers are the strongest people you\u2019ll ever meet and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Givers Are The Strongest People You\u2019ll Ever Meet.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v193/preview"
  },
  {
    "id": "v194",
    "title": "Why Good Hearts Break the Most",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why good hearts break the most and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Good Hearts Break the Most.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v194/preview"
  },
  {
    "id": "v195",
    "title": "Why Group Projects Feel Unfair",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why group projects feel unfair and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Group Projects Feel Unfair.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v195/preview"
  },
  {
    "id": "v196",
    "title": "Why Intimacy Feels So Scary",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why intimacy feels so scary and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Intimacy Feels So Scary.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v196/preview"
  },
  {
    "id": "v197",
    "title": "Why Is It So Hard To Make The Right Decision",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why is it so hard to make the right decision and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Is It So Hard To Make The Right Decision.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v197/preview"
  },
  {
    "id": "v198",
    "title": "Why It\u2019s Okay to Grieve the Parents You Never Had",
    "category": "Childhood & Inner Child",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why it\u2019s okay to grieve the parents you never had and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why It\u2019s Okay to Grieve the Parents You Never Had.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v198/preview"
  },
  {
    "id": "v199",
    "title": "Why Letting Go Doesn\u2019t Make You Heartless",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why letting go doesn\u2019t make you heartless and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Letting Go Doesn\u2019t Make You Heartless.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v199/preview"
  },
  {
    "id": "v200",
    "title": "Why Listening Gives You Real Power",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why listening gives you real power and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Listening Gives You Real Power.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v200/preview"
  },
  {
    "id": "v201",
    "title": "Why More Options Makes Us Less Happy",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why more options makes us less happy and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why More Options Makes Us Less Happy.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v201/preview"
  },
  {
    "id": "v202",
    "title": "Why Most Arguments Aren\u2019t About What They Seem",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why most arguments aren\u2019t about what they seem and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Most Arguments Aren\u2019t About What They Seem.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v202/preview"
  },
  {
    "id": "v203",
    "title": "Why Motivation Disappears When You Need It The Most",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why motivation disappears when you need it the most and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Motivation Disappears When You Need It The Most.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v203/preview"
  },
  {
    "id": "v204",
    "title": "Why Narcissists Don\u2019t Have Real Emotional Intelligence",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why narcissists don\u2019t have real emotional intelligence and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Narcissists Don\u2019t Have Real Emotional Intelligence.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v204/preview"
  },
  {
    "id": "v205",
    "title": "Why People Don\u2019t Help In Emergencies",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why people don\u2019t help in emergencies and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why People Don\u2019t Help In Emergencies.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v205/preview"
  },
  {
    "id": "v206",
    "title": "Why Small Choices Can Change Everything",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why small choices can change everything and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Small Choices Can Change Everything.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v206/preview"
  },
  {
    "id": "v207",
    "title": "Why So many People Remember Things that Never Happened",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why so many people remember things that never happened and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why So many People Remember Things that Never Happened .jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v207/preview"
  },
  {
    "id": "v208",
    "title": "Why Some Friends Drain You Without Saying A Word",
    "category": "Emotional Intelligence",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why some friends drain you without saying a word and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Some Friends Drain You Without Saying A Word.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v208/preview"
  },
  {
    "id": "v209",
    "title": "Why Some Kids Grow Distant From Their Parents",
    "category": "Childhood & Inner Child",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why some kids grow distant from their parents and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Some Kids Grow Distant From Their Parents.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v209/preview"
  },
  {
    "id": "v210",
    "title": "Why Some People Fall In Love After Just Two Weeks",
    "category": "Relationships & Attachment",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why some people fall in love after just two weeks and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Some People Fall In Love After Just Two Weeks.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v210/preview"
  },
  {
    "id": "v211",
    "title": "Why Some People Get Attached Too Fast",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why some people get attached too fast and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Some People Get Attached Too Fast .jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v211/preview"
  },
  {
    "id": "v212",
    "title": "Why Stress Feels Normal",
    "category": "Overthinking & Anxiety",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why stress feels normal and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Stress Feels Normal.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v212/preview"
  },
  {
    "id": "v213",
    "title": "Why The Smartest Empaths Struggle With Forgiveness",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why the smartest empaths struggle with forgiveness and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why The Smartest Empaths Struggle With Forgiveness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v213/preview"
  },
  {
    "id": "v214",
    "title": "Why Their Success Triggers You",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why their success triggers you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Their Success Triggers You.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v214/preview"
  },
  {
    "id": "v215",
    "title": "Why Unfinished Tasks Haunt Your Mind",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why unfinished tasks haunt your mind and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Unfinished Tasks Haunt Your Mind.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v215/preview"
  },
  {
    "id": "v216",
    "title": "Why We Confuse Pain With Passion",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why we confuse pain with passion and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why We Confuse Pain With Passion.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v216/preview"
  },
  {
    "id": "v217",
    "title": "Why We Sometimes Miss Chances To Help Others",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why we sometimes miss chances to help others and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why We Sometimes Miss Chances To Help Others.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v217/preview"
  },
  {
    "id": "v218",
    "title": "Why We Think Luck Owes Us and How to Break Free",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why we think luck owes us and how to break free and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why We Think Luck Owes Us and How to Break Free.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v218/preview"
  },
  {
    "id": "v219",
    "title": "Why You Always Think of the Perfect Comeback Too Late",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why you always think of the perfect comeback too late and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Always Think of the Perfect Comeback Too Late.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v219/preview"
  },
  {
    "id": "v220",
    "title": "Why You Became Emotionally Dependent",
    "category": "Emotional Intelligence",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why you became emotionally dependent and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Became Emotionally Dependent.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v220/preview"
  },
  {
    "id": "v221",
    "title": "Why You Cant Relax",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why you cant relax and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Cant Relax.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v221/preview"
  },
  {
    "id": "v222",
    "title": "Why You Can\u2019t Stay Mad",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why you can\u2019t stay mad and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Can\u2019t Stay Mad.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v222/preview"
  },
  {
    "id": "v223",
    "title": "Why You Doubt Every Decision",
    "category": "Self-Sabotage",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why you doubt every decision and how to build emotional resilience.",
    "keywords": [
      "Self-Sabotage",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Doubt Every Decision.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v223/preview"
  },
  {
    "id": "v224",
    "title": "Why You Feel Drained Often",
    "category": "Emotional Intelligence",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why you feel drained often and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Feel Drained Often.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v224/preview"
  },
  {
    "id": "v225",
    "title": "Why You Give Better Advice Than You Take",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why you give better advice than you take and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Give Better Advice Than You Take.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v225/preview"
  },
  {
    "id": "v226",
    "title": "Why You Love A Maybe",
    "category": "Relationships & Attachment",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why you love a maybe and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Love A Maybe.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v226/preview"
  },
  {
    "id": "v227",
    "title": "Why You Never Feel Like You Belong",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why you never feel like you belong and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Never Feel Like You Belong.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v227/preview"
  },
  {
    "id": "v228",
    "title": "Why You Perform Better When Someone\u2019s Watching",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why you perform better when someone\u2019s watching and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Perform Better When Someone\u2019s Watching.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v228/preview"
  },
  {
    "id": "v229",
    "title": "Why You Push Love Away",
    "category": "Relationships & Attachment",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why you push love away and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Push Love Away.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v229/preview"
  },
  {
    "id": "v230",
    "title": "Why You Push People Away",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why you push people away and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Push People Away.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v230/preview"
  },
  {
    "id": "v231",
    "title": "Why You Pushed Them Away",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why you pushed them away and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Pushed Them Away.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v231/preview"
  },
  {
    "id": "v232",
    "title": "Why You Repeat Toxic Cycles",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why you repeat toxic cycles and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Repeat Toxic Cycles.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v232/preview"
  },
  {
    "id": "v233",
    "title": "Why You See It Everywhere",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why you see it everywhere and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You See It Everywhere.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v233/preview"
  },
  {
    "id": "v234",
    "title": "Why You Stay Stuck",
    "category": "Overthinking & Anxiety",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why you stay stuck and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Stay Stuck.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v234/preview"
  },
  {
    "id": "v235",
    "title": "Why You Still Feel Like The Parent In Your Family",
    "category": "Childhood & Inner Child",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why you still feel like the parent in your family and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Still Feel Like The Parent In Your Family.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v235/preview"
  },
  {
    "id": "v236",
    "title": "Why You Want To Disappear",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why you want to disappear and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You Want To Disappear.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v236/preview"
  },
  {
    "id": "v237",
    "title": "Why Your Birthday Doesn\u2019t Feel As Happy As It Should",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why your birthday doesn\u2019t feel as happy as it should and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Birthday Doesn\u2019t Feel As Happy As It Should.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v237/preview"
  },
  {
    "id": "v238",
    "title": "Why Your Body Rejects Toxic People Instantly",
    "category": "Healthy & Narcissistic Relationships",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why your body rejects toxic people instantly and how to build emotional resilience.",
    "keywords": [
      "Healthy",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Body Rejects Toxic People Instantly.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v238/preview"
  },
  {
    "id": "v239",
    "title": "Why Your Brain Chooses Repetition Over Change",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why your brain chooses repetition over change and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Brain Chooses Repetition Over Change.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v239/preview"
  },
  {
    "id": "v240",
    "title": "Why Your Brain Goes Blank",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why your brain goes blank and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Brain Goes Blank.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v240/preview"
  },
  {
    "id": "v241",
    "title": "Why Your Friendship Feels Lonely",
    "category": "Relationships & Attachment",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on why your friendship feels lonely and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Friendship Feels Lonely.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v241/preview"
  },
  {
    "id": "v242",
    "title": "Why Your Mind Turns Against",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on why your mind turns against and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Mind Turns Against.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v242/preview"
  },
  {
    "id": "v243",
    "title": "Why Your Problems Feel Harder",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on why your problems feel harder and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why Your Problems Feel Harder.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v243/preview"
  },
  {
    "id": "v244",
    "title": "Why You\u2019re Not As Confident As You Pretend To Be",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on why you\u2019re not as confident as you pretend to be and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why You\u2019re Not As Confident As You Pretend To Be.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v244/preview"
  },
  {
    "id": "v245",
    "title": "Why it\u2019s Okay for Your Purpose to Change",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on why it\u2019s okay for your purpose to change and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why it\u2019s Okay for Your Purpose to Change.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v245/preview"
  },
  {
    "id": "v246",
    "title": "Why you Snap at Those You Love",
    "category": "Relationships & Attachment",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on why you snap at those you love and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why you Snap at Those You Love.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v246/preview"
  },
  {
    "id": "v247",
    "title": "Why you Still Feel Responsible for Everyone\u2019s Happiness",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on why you still feel responsible for everyone\u2019s happiness and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Why you Still Feel Responsible for Everyone\u2019s Happiness.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v247/preview"
  },
  {
    "id": "v248",
    "title": "You Are Erasing Your Story",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on you are erasing your story and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Are Erasing Your Story.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v248/preview"
  },
  {
    "id": "v249",
    "title": "You Are Not Too Much",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on you are not too much and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Are Not Too Much.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v249/preview"
  },
  {
    "id": "v250",
    "title": "You Crave What\u2019s Forbidden",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on you crave what\u2019s forbidden and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Crave What\u2019s Forbidden.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v250/preview"
  },
  {
    "id": "v251",
    "title": "You Don\u2019t Know Love Until It\u2019s Tested",
    "category": "Relationships & Attachment",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on you don\u2019t know love until it\u2019s tested and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Don\u2019t Know Love Until It\u2019s Tested.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v251/preview"
  },
  {
    "id": "v252",
    "title": "You Finally Let Someone Care",
    "category": "Psychology",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on you finally let someone care and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Finally Let Someone Care.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v252/preview"
  },
  {
    "id": "v253",
    "title": "You Grew Up Too Soon",
    "category": "Childhood & Inner Child",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on you grew up too soon and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Grew Up Too Soon.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v253/preview"
  },
  {
    "id": "v254",
    "title": "You Keep Loving What Hurts",
    "category": "Emotional Intelligence",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on you keep loving what hurts and how to build emotional resilience.",
    "keywords": [
      "Emotional Intelligence",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Keep Loving What Hurts.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v254/preview"
  },
  {
    "id": "v255",
    "title": "You Keep Second Guessing Yourself",
    "category": "Psychology",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on you keep second guessing yourself and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Keep Second Guessing Yourself.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v255/preview"
  },
  {
    "id": "v256",
    "title": "You Learned To Avoid People",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on you learned to avoid people and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Learned To Avoid People.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v256/preview"
  },
  {
    "id": "v257",
    "title": "You Lost Yourself Loving Them",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on you lost yourself loving them and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Lost Yourself Loving Them.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v257/preview"
  },
  {
    "id": "v258",
    "title": "You Outgrew Your Old Life",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on you outgrew your old life and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Outgrew Your Old Life.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v258/preview"
  },
  {
    "id": "v259",
    "title": "You Overthink Every Small Reaction",
    "category": "Overthinking & Anxiety",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on you overthink every small reaction and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Overthink Every Small Reaction.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v259/preview"
  },
  {
    "id": "v260",
    "title": "You Shut Down Fast",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on you shut down fast and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Shut Down Fast.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v260/preview"
  },
  {
    "id": "v261",
    "title": "You Were The Family Therapist",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on you were the family therapist and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Were The Family Therapist.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v261/preview"
  },
  {
    "id": "v262",
    "title": "You Worry They Will Leave",
    "category": "Overthinking & Anxiety",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on you worry they will leave and how to build emotional resilience.",
    "keywords": [
      "Overthinking",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You Worry They Will Leave.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v262/preview"
  },
  {
    "id": "v263",
    "title": "Your Brain Deleted Parts Of You",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on your brain deleted parts of you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Brain Deleted Parts Of You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v263/preview"
  },
  {
    "id": "v264",
    "title": "Your Brain Hates Good News",
    "category": "Psychology",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on your brain hates good news and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Brain Hates Good News.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v264/preview"
  },
  {
    "id": "v265",
    "title": "Your Brain Is Lying",
    "category": "Psychology",
    "duration": "1:10 min",
    "summary": "Discover practical psychological insights on your brain is lying and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Brain Is Lying.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v265/preview"
  },
  {
    "id": "v266",
    "title": "Your Childhood Still Controls You",
    "category": "Childhood & Inner Child",
    "duration": "2:15 min",
    "summary": "Discover practical psychological insights on your childhood still controls you and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Childhood Still Controls You.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v266/preview"
  },
  {
    "id": "v267",
    "title": "Your Ex Still Controls You",
    "category": "Psychology",
    "duration": "1:15 min",
    "summary": "Discover practical psychological insights on your ex still controls you and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Ex Still Controls You.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v267/preview"
  },
  {
    "id": "v268",
    "title": "Your Gut is Lying",
    "category": "Psychology",
    "duration": "1:20 min",
    "summary": "Discover practical psychological insights on your gut is lying and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Gut is Lying.jpg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v268/preview"
  },
  {
    "id": "v269",
    "title": "Your Inner Child Runs Everything",
    "category": "Childhood & Inner Child",
    "duration": "1:30 min",
    "summary": "Discover practical psychological insights on your inner child runs everything and how to build emotional resilience.",
    "keywords": [
      "Childhood",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Inner Child Runs Everything.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v269/preview"
  },
  {
    "id": "v270",
    "title": "Your Purpose May Be Changing",
    "category": "Psychology",
    "duration": "1:45 min",
    "summary": "Discover practical psychological insights on your purpose may be changing and how to build emotional resilience.",
    "keywords": [
      "Psychology",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/Your Purpose May Be Changing.jpeg",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v270/preview"
  },
  {
    "id": "v271",
    "title": "You\u2019re Still Afraid To Love",
    "category": "Relationships & Attachment",
    "duration": "2:05 min",
    "summary": "Discover practical psychological insights on you\u2019re still afraid to love and how to build emotional resilience.",
    "keywords": [
      "Relationships",
      "Psychology",
      "Self Growth"
    ],
    "thumbnailUrl": "/assets/Video Thumbnails/You\u2019re Still Afraid To Love.JPEG",
    "driveVideoUrl": "https://drive.google.com/file/d/demo_v271/preview"
  }
];

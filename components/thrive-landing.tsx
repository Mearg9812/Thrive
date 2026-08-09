"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Dumbbell,
  Flame,
  Mail,
  MapPin,
  Menu,
  MoonStar,
  Phone,
  Play,
  Quote,
  Sparkles,
  SunMedium,
  Target,
  TrendingUp,
  Utensils,
  X,
} from "lucide-react";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Bole+Road+Addis+Ababa+Thrive+Health+Fitness";

const translations = {
  en: {
    navHome: "Home",
    navPrograms: "Programs",
    navAbout: "About",
    navTrainers: "Trainers",
    navPricing: "Pricing",
    navContact: "Contact",
    contactUs: "Contact us",
    heroEyebrow: "BUILT FOR YOUR NEXT LEVEL",
    heroLineOne: "Sculpt Your Body",
    heroLineTwo: "Empower Your Spirit",
    startCta: "Let's Start",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    callTheStudio: "Call the studio",
    emailUs: "Email us",
    getDirections: "Get directions",
    getDirectionsLabel: "Open in Maps",
    contactCallDetail: "Talk to a coach about your goals",
    contactEmailDetail: "Get a reply within one business day",
    contactDirectionsDetail: "Bole Road, Addis Ababa",
    labelAddress: "Address",
    labelStudioHours: "Studio hours",
    labelCall: "Call the studio",
    labelQuestions: "Questions,",
    labelAnswered: "answered",
    readyToTrain: "READY TO TRAIN",
    getStarted: "Get started",
    getStartedSub:
      "Pick whichever feels easiest, a call, a message, or just show up to the floor.",
    findYourEdge: "FIND YOUR EDGE",
    programsTitle: "Programs built",
    programsAccent: "around you",
    programsIntro:
      "No two bodies move the same. Choose a path that matches your goals, your pace, and the life you want to build.",
    thriveStandard: "THE THRIVE STANDARD",
    smallChoices: "Small choices.",
    massiveShifts: "Massive shifts.",
    thriveStandardText:
      "We measure progress by more than a number. It is the confidence you carry, the energy you protect, and the consistency you create.",
    seeHowWeCoach: "See how we coach",
    ourPhilosophy: "OUR PHILOSOPHY",
    inspiredTo: "Inspired to",
    bestSelf: "Inspire Your Best Self",
    meetYourTeam: "MEET YOUR TEAM",
    guidanceThat: "Guidance that",
    getsYou: "gets you",
    teamIntro:
      "Three perspectives. One shared belief: your best training should feel personal.",
    investInYourself: "INVEST IN YOURSELF",
    planFor: "A plan for",
    nextLevel: "your next level",
    pricingIntro:
      "Simple membership, serious momentum. Start where you are and keep moving forward.",
    memberStories: "MEMBER STORIES",
    proofIn: "Proof in",
    process: "the process",
    viewMemberships: "View memberships",
    startConversation: "Start a conversation",
    strongerStory: "YOUR STRONGER STORY STARTS HERE",
    transformWorkout: "Transform Your Workout",
    intoLifestyle: "Into a Lifestyle That Fuels",
    yourProgress: "Your Progress",
    readyWhenYouAre: "READY WHEN YOU ARE",
    makeToday: "Make today the day",
    chooseYou: "you choose you.",
    programs: "Programs",
    trainers: "Trainers",
    memberships: "Memberships",
    contact: "Contact",
    socialInstagram: "Instagram",
    socialLinkedIn: "LinkedIn",
    weeklyClasses: "Weekly class schedule",
    altAthlete: "Ethiopian-Habeshan bodybuilder holding a dumbbell",
    altTrainerOne: "Maya Tesfaye, Strength & Performance",
    altTrainerTwo: "Elias Bekele, Athletic Conditioning",
    altTrainerThree: "Selam Desta, Mobility & Recovery",
    language: "Language",
    theme: "Theme",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    enLabel: "EN",
    amLabel: "አማ",
    scheduleHeading: "Weekly schedule",
  },
  am: {
    navHome: "ዋና ገጽ",
    navPrograms: "ፕሮግራሞች",
    navAbout: "ስለ እኛ",
    navTrainers: "አሰልጣኞች",
    navPricing: "የዋጋ ዝርዝር",
    navContact: "ያግኙን",
    contactUs: "ያግኙን",
    heroEyebrow: "ለቀጣዩ ደረጃዎ የተዘጋጀ",
    heroLineOne: "አካልዎን ይገንቡ",
    heroLineTwo: "መንፈስዎን ያነቃቁ",
    startCta: "እንጀምር",
    openMenu: "ማውጫ ክፈት",
    closeMenu: "ማውጫ ዝጋ",
    callTheStudio: "ወደ ስቱዲዮ ይደውሉ",
    emailUs: "ኢሜይል ይላኩልን",
    getDirections: "አቅጣጫዎችን ያግኙ",
    getDirectionsLabel: "በካርታ ይክፈቱ",
    contactCallDetail: "ስለ ግቦችዎ ከአሰልጣኝ ጋር ይወያዩ",
    contactEmailDetail: "በአንድ የስራ ቀን ውስጥ ምላሽ ያግኙ",
    contactDirectionsDetail: "ቦሌ መንገድ፣ አዲስ አበባ",
    labelAddress: "አድራሻ",
    labelStudioHours: "የስቱዲዮ የስራ ሰዓታት",
    labelCall: "ወደ ስቱዲዮ ይደውሉ",
    labelQuestions: "ጥያቄዎች፣",
    labelAnswered: "ምላሽ አግኝተዋል",
    readyToTrain: "ለስልጠና ዝግጁ ነዎት",
    getStarted: "ይጀምሩ",
    getStartedSub: "ለእርስዎ የሚቀልዎትን ይምረጡ፤ ይደውሉ፣ መልዕክት ይላኩ፣ ወይም በአካል ስቱዲዮ ይምጡ።",
    findYourEdge: "አቅምዎን ያግኙ",
    programsTitle: "ለእርስዎ የተዘጋጁ",
    programsAccent: "ፕሮግራሞች",
    programsIntro:
      "ሁሉም ሰውነት አንድ ዓይነት አይደለም። ከግቦችዎ፣ ከፍጥነትዎ እና ከሚፈልጉት የህይወት ዘይቤ ጋር የሚስማማውን መንገድ ይምረጡ።",
    thriveStandard: "የ Thrive ደረጃ",
    smallChoices: "ትናንሽ ምርጫዎች።",
    massiveShifts: "ትላልቅ ለውጦች።",
    thriveStandardText:
      "እድገትን የምንለካው ከቁጥር ባለፈ ነው። ይህ ማለት እርስዎ የሚያገኙት በራስ መተማመን፣ የሚገነቡት ጉልበት እና የሚፈጥሩት ቋሚነት ነው።",
    seeHowWeCoach: "የአሰልጣኝነት ዘይቤያችንን ይመልከቱ",
    ourPhilosophy: "ፍልስፍናችን",
    inspiredTo: "የተሻለውን እርስዎን",
    bestSelf: "ለማነሳሳት",
    meetYourTeam: "ቡድንዎን ይወቁ",
    guidanceThat: "እርስዎን",
    getsYou: "የሚረዳ አመራር",
    teamIntro: "ሶስት የተለዩ እይታዎች፣ አንድ የጋራ እምነት፡ ምርጥ ስልጠናዎ የግልዎ እንደሆነ ሊሰማዎት ይገባል።",
    investInYourself: "በራስዎ ላይ ኢንቨስት ያድርጉ",
    planFor: "ለቀጣዩ ደረጃዎ",
    nextLevel: "የተዘጋጀ እቅድ",
    pricingIntro: "ቀላል አባልነት፣ ጠንካራ እድገት። ካሉበት ይጀምሩ እና ወደፊት መጓዝዎን ይቀጥሉ።",
    memberStories: "የአባላት ታሪኮች",
    proofIn: "ማረጋገጫው",
    process: "በሂደቱ ላይ ነው",
    viewMemberships: "የአባልነት አማራጮችን ይመልከቱ",
    startConversation: "ውይይት ይጀምሩ",
    strongerStory: "የበለጠ ጠንካራ ታሪክዎ እዚህ ይጀምራል",
    transformWorkout: "የስፖርት እንቅስቃሴዎን",
    intoLifestyle: "እድገትዎን ወደሚያፋጥን የህይወት ዘይቤ",
    yourProgress: "ይቀይሩ",
    readyWhenYouAre: "እርስዎ ሲዘጋጁ ዝግጁ ነን",
    makeToday: "ዛሬን",
    chooseYou: "ለራስዎ ቅድሚያ የሚሰጡበት ቀን ያድርጉት።",
    programs: "ፕሮግራሞች",
    trainers: "አሰልጣኞች",
    memberships: "አባልነቶች",
    contact: "ያግኙን",
    socialInstagram: "ኢንስታግራም (Instagram)",
    socialLinkedIn: "ሊንክዲን (LinkedIn)",
    weeklyClasses: "ሳምንታዊ የክፍል መርሃ ግብር",
    altAthlete: "ኢትዮጵያዊ አትሌት ዳምቤል ሲያነሳ",
    altTrainerOne: "ማያ ተስፋዬ፣ ጥንካሬ እና አፈፃፀም",
    altTrainerTwo: "ኤልያስ በቀለ፣ የአትሌቲክስ ኮንዲሽኒንግ",
    altTrainerThree: "ሰላም ደስታ፣ መተጣጠፍ እና ማገገሚያ",
    language: "ቋንቋ",
    theme: "ገጽታ",
    lightMode: "ብሩህ ገጽታ",
    darkMode: "ጨለማ ገጽታ",
    enLabel: "EN",
    amLabel: "አማ",
    scheduleHeading: "ሳምንታዊ መርሃ ግብር",
  },
} as const;



const getHeroStats = (language: keyof typeof translations) => [
  {
    value: "1.5h",
    label: language === "am" ? "ዕለታዊ ትኩረት" : "Daily Focus",
    icon: Clock3,
    position: "stat-one",
  },
  {
    value: "550",
    label: language === "am" ? "የተቃጠለ ካሎሪ" : "Calories Burned",
    icon: Flame,
    position: "stat-two",
  },
  {
    value: "5x",
    label: language === "am" ? "የጥንካሬ ዙሮች" : "Strength Sets",
    icon: Dumbbell,
    position: "stat-three",
  },
  {
    value: "20",
    label: language === "am" ? "የፍጥነት ልዩነቶች" : "Pace Intervals",
    icon: Play,
    position: "stat-four",
  },
];

const getPrograms = (language: keyof typeof translations) => [
  {
    number: "01",
    title: language === "am" ? "ጥንካሬ እና ጉልበት" : "Strength & Power",
    description:
      language === "am"
        ? "ካሉበት ደረጃ ጋር በሚስማማ እያደገ በሚሄድ ስልጠና የተሻለ መሠረት ይገንቡ።"
        : "Build a stronger foundation with progressive training that meets you where you are.",
    icon: Dumbbell,
    tone: "blue",
  },
  {
    number: "02",
    title: language === "am" ? "የኮንዲሽኒንግ ቤተ ሙከራ" : "Conditioning Lab",
    description:
      language === "am"
        ? "ኃይልዎን በከፍተኛ ደረጃ ለማቆየት እና ጠንካራ ለማድረግ በልዩ ሁኔታ የተነደፉ እንቅስቃሴዎች።"
        : "Engineered intervals and athletic movement to keep your energy high and resilient.",
    icon: Flame,
    tone: "slate",
  },
  {
    number: "03",
    title: language === "am" ? "መተጣጠፍ እና ፍሰት" : "Mobility & Flow",
    description:
      language === "am"
        ? "በተሻለ ሁኔታ ይንቀሳቀሱ፣ በጥልቀት ያገግሙ፣ እና አካልዎ የሚያስፈልገውን ተለዋዋጭነት ይስጡት።"
        : "Move better, recover deeper, and give your body the range it needs to thrive.",
    icon: Target,
    tone: "blue",
  },
];

const getFeatures = (language: keyof typeof translations) => [
  {
    title: language === "am" ? "የግል ስልጠና" : "Personalized Training",
    description:
      language === "am"
        ? "ለግቦችዎ የተበጁ የልምምድ እቅዶች"
        : "Custom workout plans tailored to your goals",
    icon: Dumbbell,
  },
  {
    title: language === "am" ? "የአመጋገብ መመሪያ" : "Nutrition Guidance",
    description:
      language === "am"
        ? "በእርግጥ የሚሰሩ ቀላል የአመጋገብ እቅዶች"
        : "Simple diet plans that actually work",
    icon: Utensils,
  },
  {
    title: language === "am" ? "እውነተኛ ውጤቶች" : "Real Results",
    description:
      language === "am"
        ? "እድገትዎን ይከታተሉ እና የሚታይ ለውጥ ያግኙ"
        : "Track progress and see visible transformation",
    icon: TrendingUp,
  },
];

const getTrainers = (language: keyof typeof translations) => [
  {
    name: "Maya Tesfaye",
    role: language === "am" ? "ጥንካሬ እና አፈፃፀም" : "Strength & Performance",
    detail:
      language === "am"
        ? "በሁሉም የህይወትዎ ዘርፍ የሚዘልቅ ጥንካሬን ይገንቡ።"
        : "Build power that carries into every part of life.",
    image: "/trainer-portrait-one.png",
    closeup: "/trainer-closeup-one.png",
    focus: language === "am" ? "ጥንካሬ" : "Strength",
  },
  {
    name: "Elias Bekele",
    role: language === "am" ? "የአትሌቲክስ ኮንዲሽኒንግ" : "Athletic Conditioning",
    detail:
      language === "am"
        ? "ሞተርዎን ያሰለጥኑ፣ ብቃትዎን ያሳድጉ፣ ፍጥነትዎን ይቆጣጠሩ።"
        : "Train your engine, sharpen your edge, own your pace.",
    image: "/trainer-portrait-two.png",
    closeup: "/trainer-closeup-two.png",
    focus: language === "am" ? "ኮንዲሽኒንግ" : "Conditioning",
  },
  {
    name: "Selam Desta",
    role: language === "am" ? "መተጣጠፍ እና ማገገሚያ" : "Mobility & Recovery",
    detail:
      language === "am"
        ? "የእንቅስቃሴ አቅምዎን ይመልሱ እና እንቅስቃሴ ልፋት አልባ እንዲመስል ያድርጉ።"
        : "Restore your range and make movement feel effortless.",
    image: "/trainer-portrait-three.png",
    closeup: "/trainer-closeup-three.png",
    focus: language === "am" ? "መተጣጠፍ" : "Mobility",
  },
];

const getPlans = (language: keyof typeof translations) => [
  {
    name: language === "am" ? "ጀማሪ" : "Starter",
    price: "$39",
    description:
      language === "am"
        ? "ሪትምዎን ለመገንባት የሚያስችል ትኩረት የተደረገበት መሠረት።"
        : "A focused foundation for building your rhythm.",
    items:
      language === "am"
        ? [
            "በሳምንት 2 በአሰልጣኝ የሚመሩ ክፍለ ጊዜዎች",
            "የመነሻ እንቅስቃሴ ግምገማ",
            "የስልጠና መተግበሪያ ማግኘት",
          ]
        : [
            "2 coached sessions / week",
            "Starter movement assessment",
            "Training app access",
          ],
  },
  {
    name: language === "am" ? "ኤሊት (Elite)" : "Elite",
    price: "$79",
    description:
      language === "am"
        ? "ለቋሚ ለውጥ የእርስዎ የተሟላ ስርዓት።"
        : "Your complete system for consistent transformation.",
    items:
      language === "am"
        ? ["ያልተገደበ የቡድን ስልጠናዎች", "ወርሃዊ 1ለ1 ስልጠና", "የአመጋገብ መመሪያ", "የማገገሚያ ክትትል"]
        : [
            "Unlimited group sessions",
            "Monthly 1:1 coaching",
            "Nutrition guidance",
            "Recovery tracking",
          ],
    featured: true,
  },
  {
    name: language === "am" ? "ፕሮ (Pro)" : "Pro",
    price: "$129",
    description:
      language === "am"
        ? "ለከፍተኛው ደረጃዎ ከፍተኛ ትኩረት ያለው ስልጠና።"
        : "High-touch coaching for your highest level.",
    items:
      language === "am"
        ? [
            "ያልተገደበ ክፍለ ጊዜዎች",
            "ሳምንታዊ 1ለ1 ስልጠና",
            "የግል የአመጋገብ እቅድ",
            "ቅድሚያ የሚሰጠው የአሰልጣኝ ድጋፍ",
          ]
        : [
            "Unlimited sessions",
            "Weekly 1:1 coaching",
            "Custom nutrition plan",
            "Priority trainer access",
          ],
  },
];

const getTestimonials = (language: keyof typeof translations) => [
  {
    quote:
      language === "am"
        ? "Thrive በእርግጥ የማምነውን ስርዓት ሰጠኝ። በየቀኑ ይበልጥ ጠንካራ፣ የጠራ እና በራስ መተማመን የሚሞላ ስሜት ይሰማኛል።"
        : "Thrive gave me a system I could actually trust. I feel stronger, clearer, and more present every day.",
    name: "Nadia M.",
    detail: language === "am" ? "አባል ከ 2023 ጀምሮ" : "Member since 2023",
  },
  {
    quote:
      language === "am"
        ? "አሰልጣኞቹ ከስፖርት እንቅስቃሴው ባሻገር ሙሉ ማንነትን ነው የሚያዩት። ያ ለእኔ ሁሉንም ነገር ቀይሮታል።"
        : "The coaches see the whole person, not just the workout. That changed everything for me.",
    name: "Samuel K.",
    detail: language === "am" ? "ኤሊት አባል" : "Elite member",
  },
  {
    quote:
      language === "am"
        ? "ፈጣን ለውጦችን ማሳደድ አቁሜ የኔ የሚመስለኝን የህይወት ዘይቤ መገንባት ጀምሬያለሁ።"
        : "I stopped chasing quick fixes and started building a lifestyle that feels like mine.",
    name: "Liya A.",
    detail: language === "am" ? "አባል ከ 2024 ጀምሮ" : "Member since 2024",
  },
];

const getFaqs = (language: keyof typeof translations) => [
  {
    q:
      language === "am"
        ? "ለመጀመር ምንም ዓይነት ልምድ ያስፈልገኛል?"
        : "Do I need any experience to start?",
    a:
      language === "am"
        ? "አያስፈልግም። እያንዳንዱ አባልነት በእንቅስቃሴ ግምገማ ይከፈታል፣ ስለዚህ የመጀመሪያ ክፍለ ጊዜዎችዎ ልክ ዛሬ ባሉበት ደረጃ ላይ ይመሰረታሉ።"
        : "No. Every membership opens with a movement assessment, so your first sessions are scaled to exactly where you are today, not where you think you should be.",
  },
  {
    q:
      language === "am"
        ? "ለመጀመሪያው የስልጠና ክፍለ ጊዜ ምን ይዤ መምጣት አለብኝ?"
        : "What should I bring to my first session?",
    a:
      language === "am"
        ? "ምቹ የስልጠና ልብሶች፣ የተዘጉ ጫማዎች፣ እና የውሃ ጠርሙስ። በስቱዲዮ ውስጥ የሚያስፈልጉዎትን ሁሉንም መሳሪያዎች እኛ እናቀርባለን።"
        : "Comfortable training clothes, closed-toe shoes, and a water bottle. We provide every piece of equipment you'll need on the floor.",
  },
  {
    q:
      language === "am"
        ? "አባልነቴን ማቆም ወይም መሰረዝ እችላለሁ?"
        : "Can I pause or cancel my membership?",
    a:
      language === "am"
        ? "አዎ። እያንዳንዱ ዕቅድ በዓመት እስከ ሁለት ወራት ሊታገድ ይችላል፣ እና ወርሃዊ ዕቅዶች በ30 ቀናት ማስታወቂያ በማንኛውም ጊዜ ሊሰረዙ ይችላሉ።"
        : "Yes. Every plan can be frozen for up to two months a year, and monthly plans can be cancelled any time with 30 days notice.",
  },
  {
    q:
      language === "am"
        ? "የአመጋገብ ስልጠና ትሰጣላችሁ?"
        : "Do you offer nutrition coaching?",
    a:
      language === "am"
        ? "አዎ። ኤሊት እና ፕሮ አባላት በእቅዳቸው ውስጥ የተካተተ የአመጋገብ መመሪያ አላቸው። የጀማሪ አባላት ዝግጁ ሲሆኑ የአንድ ጊዜ የአመጋገብ ምክክር ማከል ይችላሉ።"
        : "Elite and Pro members have nutrition guidance built into their plan. Starter members can add a one-time nutrition consult whenever they're ready.",
  },
  {
    q:
      language === "am"
        ? "የሙከራ ክፍለ ጊዜ ይገኛል?"
        : "Is there a trial session available?",
    a:
      language === "am"
        ? "አዎ። ምንም ዓይነት የክፍያ ዝርዝሮች ሳያስፈልግ በስቱዲዮ ወይም በስልክ አንድ የሙከራ ክፍል መያዝ ይችላሉ።"
        : "Yes. Book a single trial class at the studio or over the phone, no commitment or payment details required.",
  },
];

const getGalleryImages = (language: keyof typeof translations) => [
  {
    src: "/studio-gallery-01.png",
    alt:
      language === "am"
        ? "የጥንካሬ አሰልጣኝ ከባድ ባርቤል ስኩዋት በሚሰራበት ጊዜ አባልን ሲደግፍ"
        : "Strength coach spotting a member during a heavy barbell squat",
    size: "wide",
  },
  {
    src: "/studio-gallery-02.png",
    alt:
      language === "am"
        ? "በኖራ የተሸፈኑ እጆች ባርቤልን አንስተው ሲይዙ በቅርበት የሚያሳይ"
        : "Close-up of chalked hands gripping a barbell mid-lift",
    size: "tall",
  },
  {
    src: "/studio-gallery-03.png",
    alt:
      language === "am"
        ? "የቡድን ኮንዲሽኒንግ ክፍል በስቱዲዮ ወለል ላይ ሲሮጡ"
        : "Group conditioning class sprinting across the studio floor",
    size: "normal",
  },
  {
    src: "/studio-gallery-04.png",
    alt:
      language === "am"
        ? "አሰልጣኝ አባልን በምንጣፍ ላይ የመተጣጠፍ ልምምድ ሲያሰራ"
        : "Trainer guiding a member through a mobility stretch on a mat",
    size: "normal",
  },
  {
    src: "/studio-gallery-05.png",
    alt:
      language === "am"
        ? "ኬትልቤሎች እና ዳምቤሎች በስቱዲዮ ግድግዳ ላይ ተደራጅተው"
        : "Rows of kettlebells and dumbbells racked along the studio wall",
    size: "tall",
  },
  {
    src: "/studio-gallery-06.png",
    alt:
      language === "am"
        ? "አንድ አባል አዲስ የግል ክብረወሰኑን ከአሰልጣኙ ጋር ሲያከብር"
        : "Member celebrating a new personal record with their coach",
    size: "normal",
  },
  {
    src: "/studio-gallery-07.png",
    alt:
      language === "am"
        ? "በማለዳ የጥንካሬ ክፍለ ጊዜ የስቱዲዮን ክፍል በብርሃን ሲሞላው"
        : "Early morning light filling the studio during a sunrise strength session",
    size: "wide",
  },
  {
    src: "/studio-gallery-08.png",
    alt:
      language === "am"
        ? "የማገገሚያ ጥግ ከፎም ሮለሮች እና ማራዘሚያ ባንዶች ጋር"
        : "Recovery corner with foam rollers and stretching bands laid out",
    size: "normal",
  },
];

const getStudioHours = (language: keyof typeof translations) => [
  {
    day: language === "am" ? "ሰኞ – አርብ" : "Monday – Friday",
    time: "5:30 AM – 9:00 PM",
  },
  { day: language === "am" ? "ቅዳሜ" : "Saturday", time: "7:00 AM – 5:00 PM" },
  { day: language === "am" ? "እሑድ" : "Sunday", time: "8:00 AM – 2:00 PM" },
];

const getContactActions = (language: keyof typeof translations) => [
  {
    title: language === "am" ? "ወደ ስቱዲዮ ይደውሉ" : "Call the studio",
    detail:
      language === "am"
        ? "ስለ ግቦችዎ ከአሰልጣኝ ጋር ይወያዩ"
        : "Talk to a coach about your goals",
    value: "+251 911 000 000",
    href: "tel:+251911000000",
    icon: Phone,
  },
  {
    title: language === "am" ? "ኢሜይል ይላኩልን" : "Email us",
    detail:
      language === "am"
        ? "በአንድ የስራ ቀን ውስጥ ምላሽ ያግኙ"
        : "Get a reply within one business day",
    value: "hello@thrivefit.co",
    href: "mailto:hello@thrivefit.co",
    icon: Mail,
  },
  {
    title: language === "am" ? "አቅጣጫዎችን ያግኙ" : "Get directions",
    detail: language === "am" ? "ቦሌ መንገድ፣ አዲስ አበባ" : "Bole Road, Addis Ababa",
    value: language === "am" ? "በካርታ ይክፈቱ" : "Open in Maps",
    href: directionsUrl,
    icon: MapPin,
  },
];

const getScheduleItems = (language: keyof typeof translations) => [
  language === "am"
    ? "ሰኞ 6:00 AM ፡ የጥንካሬ መሠረቶች"
    : "MON 6AM: Strength Foundations",
  language === "am"
    ? "ማክሰኞ 6:00 AM ፡ የኮንዲሽኒንግ ቤተ ሙከራ"
    : "TUE 6AM: Conditioning Lab",
  language === "am" ? "ረቡዕ 7:00 AM ፡ መተጣጠፍ እና ፍሰት" : "WED 7AM: Mobility & Flow",
  language === "am"
    ? "ሐሙስ 6:00 AM ፡ የጥንካሬ መሠረቶች"
    : "THU 6AM: Strength Foundations",
  language === "am"
    ? "አርብ 5:30 AM ፡ የሙሉ አካል ጉልበት"
    : "FRI 5:30AM: Full Body Power",
  language === "am"
    ? "ቅዳሜ 8:00 AM ፡ የኮንዲሽኒንግ ቤተ ሙከራ"
    : "SAT 8AM: Conditioning Lab",
  language === "am" ? "ቅዳሜ 9:00 AM ፡ መተጣጠፍ እና ፍሰት" : "SAT 9AM: Mobility & Flow",
  language === "am"
    ? "እሑድ 9:00 AM ፡ የማገገሚያ ክፍለ ጊዜ"
    : "SUN 9AM: Recovery Session",
];

const tickerItems = (language: keyof typeof translations) => [
  ...getScheduleItems(language),
  ...getScheduleItems(language),
];

function ThriveMark({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`brand-mark ${compact ? "brand-mark-compact" : ""}`}
      aria-label="Thrive Health & Fitness"
    >
      <img
        src="/logo_trans.png" /* <-- REPLACE THIS WITH THE ACTUAL PATH TO YOUR LOGO */
        alt="Thrive Health & Fitness"
        className="brand-logo-img"
        style={{
          height: compact ? "34px" : "70px", /* Adjust these sizes to fit your design */
          width: "auto",
          objectFit: "contain",
        }}
      />
       <div className="brand-copy">
        <span className="brand-name">Thrive</span>
        <span className="brand-subtitle">Health &amp; Fitness</span>
      </div>
    </div>
  );
}

function StatBadge({
  value,
  label,
  icon: Icon,
  position,
}: ReturnType<typeof getHeroStats>[number]) {
  return (
    <div className={`stat-badge ${position}`}>
      <div className="stat-icon">
        <Icon size={20} strokeWidth={2.4} />
      </div>
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  accent,
}: {
  kicker: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <Sparkles size={16} /> {kicker}
      </div>
      <h2>
        {title}
        <br />
        <em>{accent}</em>
      </h2>
    </div>
  );
}

function StudioGallery({ language }: { language: keyof typeof translations }) {
  const galleryImages = getGalleryImages(language);
  return (
    <section className="gallery-section" id="gallery">
      <SectionHeading
        kicker={language === "am" ? "ስቱዲዮ ውስጥ" : "INSIDE THE STUDIO"}
        title={language === "am" ? "አንድ የስልጠና" : "A look at"}
        accent={language === "am" ? "ቀን ገጽታ" : "a day in training"}
      />
      <p className="section-intro">
        {language === "am"
          ? "እውነተኛ ክፍለ ጊዜዎች፣ እውነተኛ ላብ። በማንኛውም ጠዋት ስቱዲዮ ውስጥ ያለን ገጽታ የሚያሳይ።"
          : "Real sessions, real sweat. A glimpse of the floor on any given morning."}
      </p>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <figure
            className={`gallery-item gallery-${image.size}`}
            key={image.src}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span className="gallery-overlay" aria-hidden="true" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function FindUsSection({ language }: { language: keyof typeof translations }) {
  const studioHours = getStudioHours(language);
  return (
    <section className="location-section" id="visit">
      <SectionHeading
        kicker={language === "am" ? "ከእኛ ጋር ይሰልጥኑ" : "COME TRAIN WITH US"}
        title={language === "am" ? "እኛን" : "Find us"}
        accent={language === "am" ? "ያግኙን" : "on the ground"}
      />
      <p className="section-intro">
        {language === "am"
          ? "አንድ ስቱዲዮ፣ በማለዳ የሚከፈት እና በመሸ የሚዘጋ፤ ስለዚህ ስልጠናዎ በእርስዎ የጊዜ ሰሌዳ ላይ ይስማማል።"
          : "One studio, open early and late, so training fits your schedule instead of the other way around."}
      </p>
      <div className="location-grid">
        <div className="location-card">
          <div className="location-block">
            <span className="location-label">
              <MapPin size={16} /> {language === "am" ? "አድራሻ" : "Address"}
            </span>
            <p>Bole Road, Addis Ababa, Ethiopia</p>
          </div>
          <div className="location-block">
            <span className="location-label">
              <Clock3 size={16} />{" "}
              {language === "am" ? "የስቱዲዮ የስራ ሰዓታት" : "Studio hours"}
            </span>
            <ul className="hours-list">
              {studioHours.map((entry) => (
                <li key={entry.day}>
                  <span>{entry.day}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="location-block">
            <span className="location-label">
              <Phone size={16} />{" "}
              {language === "am" ? "ወደ ስቱዲዮ ይደውሉ" : "Call the studio"}
            </span>
            <a className="location-phone" href="tel:+251911000000">
              +251 911 000 000
            </a>
          </div>
          <a
            className="start-button location-directions"
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === "am" ? "አቅጣጫዎችን ያግኙ" : "Get directions"}{" "}
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div
          className="directions-card"
          role="img"
          aria-label={
            language === "am"
              ? "በአዲስ አበባ ቦሌ መንገድ ላይ የሚገኘው የትራይቭ (Thrive) ስቱዲዮ የካርታ ምልክት"
              : "Stylized map marker for the Thrive studio on Bole Road, Addis Ababa"
          }
        >
          <div className="directions-grid" aria-hidden="true" />
          <div className="directions-pin" aria-hidden="true">
            <MapPin size={22} strokeWidth={2.4} />
          </div>
          <span className="directions-caption">
            {language === "am" ? "ቦሌ መንገድ ስቱዲዮ" : "Bole Road Studio"}
          </span>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ language }: { language: keyof typeof translations }) {
  const faqs = getFaqs(language);
  return (
    <section className="faq-section" id="faq">
      <SectionHeading
        kicker={language === "am" ? "ማወቅ ያለብዎት" : "GOOD TO KNOW"}
        title={language === "am" ? "የሚጠየቁ" : "Questions,"}
        accent={language === "am" ? "ጥያቄዎች" : "answered"}
      />
      <div className="faq-list">
        {faqs.map((item, index) => (
          <details className="faq-item" key={item.q} open={index === 0}>
            <summary>
              <span>{item.q}</span>
              <ChevronDown
                className="faq-chevron"
                size={18}
                aria-hidden="true"
              />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function GetStartedSection({
  language,
}: {
  language: keyof typeof translations;
}) {
  const contactActions = getContactActions(language);
  return (
    <section className="contact-section" id="get-started">
      <SectionHeading
        kicker={language === "am" ? "ለስልጠና ዝግጁ ነዎት?" : "READY TO TRAIN"}
        title={language === "am" ? "በአንድ" : "Get started"}
        accent={language === "am" ? "እርምጃ ይጀምሩ" : "in one step"}
      />
      <p className="section-intro">
        {language === "am"
          ? "ለእርስዎ የሚቀልዎትን ይምረጡ፤ ይደውሉ፣ መልዕክት ይላኩ፣ ወይም በአካል ስቱዲዮ ይምጡ።"
          : "Pick whichever feels easiest, a call, a message, or just show up to the floor."}
      </p>
      <div className="contact-grid">
        {contactActions.map(({ title, detail, value, href, icon: Icon }) => {
          const isExternal = href.startsWith("http");
          return (
            <a
              className="contact-card"
              href={href}
              key={title}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <div className="contact-icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{detail}</p>
              <span className="contact-value">
                {value} <ArrowUpRight size={15} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
export default function ThriveLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<keyof typeof translations>("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedLanguage = window.localStorage.getItem("thrive-language");
    const savedTheme = window.localStorage.getItem("thrive-theme");

    if (savedLanguage === "am" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem("thrive-language", language);
    window.localStorage.setItem("thrive-theme", theme);
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [language, theme]);

  const t = (key: keyof (typeof translations)["en"]) =>
    translations[language][key] ?? translations.en[key];

  const navItems = [
    { label: t("navHome"), href: "#home" },
    { label: t("navPrograms"), href: "#programs" },
    { label: t("navAbout"), href: "#about" },
    { label: t("navTrainers"), href: "#trainers" },
    { label: t("navPricing"), href: "#pricing" },
    { label: t("navContact"), href: "#contact" },
  ];

  const heroStats = getHeroStats(language);
  const programs = getPrograms(language);
  const features = getFeatures(language);
  const trainers = getTrainers(language);
  const plans = getPlans(language);
  const testimonials = getTestimonials(language);
  const scheduleItems = tickerItems(language);

  return (
    <main className="thrive-page">
      <section className="hero" id="home">
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#home" className="logo-link">
            <ThriveMark />
          </a>
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <div className="header-tools">
            <div className="toggle-group" aria-label={t("language")}>
              <button
                type="button"
                className={`lang-toggle ${language === "en" ? "is-active" : ""}`}
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                aria-label={
                  language === "en" ? "Switch to Amharic" : "Switch to English"
                }
              >
                <span>{t("enLabel")}</span>
                <span>{t("amLabel")}</span>
              </button>
            </div>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
              title={theme === "dark" ? t("lightMode") : t("darkMode")}
            >
              {theme === "dark" ? (
                <SunMedium size={16} />
              ) : (
                <MoonStar size={16} />
              )}
            </button>
          </div>
          <div className="nav-contact">
            <div>
              <span>{t("contactUs")}</span>
              <strong>+251 911 000 000</strong>
            </div>
            <a
              className="phone-button"
              href="tel:+251911000000"
              aria-label="Call Thrive Health & Fitness"
            >
              <Phone size={16} />
            </a>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        <div className="hero-content">
          <div className="eyebrow">
            <span /> {t("heroEyebrow")} <span />
          </div>
          <h1>
            <span className="headline-line">
              {language === "am" ? (
                <>
                  <span className="headline-text">
                    {t("heroLineOne").split(" ")[0]}
                  </span>
                  <span className="headline-gap" aria-hidden="true" />
                  <span className="headline-text">
                    <em>{t("heroLineOne").split(" ").slice(1).join(" ")}</em>
                  </span>
                </>
              ) : (
                <>
                  <span className="headline-text">
                    Sculpt <em>Your</em> Body
                  </span>
                </>
              )}
            </span>
            <span className="headline-line">
              {language === "am" ? (
                <>
                  <span className="headline-text">
                    {t("heroLineTwo").split(" ")[0]}
                  </span>
                  <span className="headline-gap" aria-hidden="true" />
                  <span className="headline-text">
                    <em>{t("heroLineTwo").split(" ").slice(1).join(" ")}</em>
                  </span>
                </>
              ) : (
                <>
                  <span className="headline-text">Empower</span>
                  <span className="headline-gap" aria-hidden="true" />
                  <span className="headline-text">
                    <em>Your</em> Spirit
                  </span>
                </>
              )}
            </span>
          </h1>

          <div className="athlete-stage" aria-label={t("altAthlete")}>
            <img
              src="/thrive-ethiopian-athlete-clean.png"
              alt={t("altAthlete")}
              className="athlete-image"
            />
            {heroStats.map((stat) => (
              <StatBadge key={stat.label} {...stat} />
            ))}
          </div>
          <div className="hero-bottomline">
            <div className="social-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span className="avatar avatar-one" />
                <span className="avatar avatar-two" />
                <span className="avatar avatar-three" />
              </div>
              <div>
                <strong>
                  15k<span>+</span>
                </strong>
                <small>
                  {language === "am" ? "ደስተኛ አባላት" : "Happy Spirits"}
                </small>
              </div>
            </div>
            <a href="#programs" className="start-button">
              {t("startCta")}
              <ChevronRight size={20} strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label={t("weeklyClasses")}>
        <div className="ticker-track">
          {scheduleItems.map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              <b aria-hidden="true">+</b>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="programs-section" id="programs">
        <SectionHeading
          kicker={t("findYourEdge")}
          title={t("programsTitle")}
          accent={t("programsAccent")}
        />
        <p className="section-intro">{t("programsIntro")}</p>
        <div className="program-grid">
          {programs.map(({ number, title, description, icon: Icon, tone }) => (
            <article className="program-card" key={title}>
              <div className={`program-icon ${tone}`}>
                <Icon size={25} />
              </div>
              <span className="program-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact" aria-label={`Explore ${title}`}>
                <ArrowUpRight size={19} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-copy">
          <div className="section-kicker">{t("thriveStandard")}</div>
          <h2>
            {t("smallChoices")}
            <br />
            <em>{t("massiveShifts")}</em>
          </h2>
          <p>{t("thriveStandardText")}</p>
          <a href="#pricing" className="text-link">
            {t("seeHowWeCoach")} <ArrowRight size={16} />
          </a>
        </div>
        <div className="stats-grid">
          <div>
            <strong>
              92<span>%</span>
            </strong>
            <small>
              {language === "am"
                ? "ከአባላት የመጀመሪያ ግባቸውን አሳክተዋል"
                : "members hit their first milestone"}
            </small>
          </div>
          <div>
            <strong>
              7<span>yr</span>
            </strong>
            <small>
              {language === "am"
                ? "የተሻሉ ልምዶችን በማዳበር የተሳለፉ ዓመታት"
                : "of building better habits"}
            </small>
          </div>
          <div>
            <strong>
              4.9<span>/5</span>
            </strong>
            <small>
              {language === "am" ? "የአባላት አማካይ ደረጃ" : "average member rating"}
            </small>
          </div>
          <div>
            <strong>
              24<span>+</span>
            </strong>
            <small>
              {language === "am" ? "ከጎንዎ ያሉ አሰልጣኞች" : "coaches in your corner"}
            </small>
          </div>
        </div>
      </section>

      <section className="trainers-section" id="trainers">
        <SectionHeading
          kicker={t("meetYourTeam")}
          title={t("guidanceThat")}
          accent={t("getsYou")}
        />
        <p className="section-intro">{t("teamIntro")}</p>
        <div className="trainer-grid">
          {trainers.map((trainer) => (
            <article className="trainer-card" key={trainer.name}>
              <div className="trainer-image-wrap">
                <img src={trainer.image} alt={trainer.role} />
                <img
                  src={trainer.closeup}
                  alt=""
                  aria-hidden="true"
                  className="trainer-closeup"
                />
                <div className="trainer-hover">
                  <span>{trainer.focus}</span>
                  <h3>{trainer.name}</h3>
                  <p>{trainer.detail}</p>
                </div>
              </div>
              <div className="trainer-meta">
                <div>
                  <h3>{trainer.name}</h3>
                  <p>{trainer.role}</p>
                </div>
                <ArrowUpRight size={19} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="inspired-section" id="about">
        <SectionHeading
          kicker={t("ourPhilosophy")}
          title={t("inspiredTo")}
          accent={t("bestSelf")}
        />
        <p>
          {language === "am"
            ? "እኛ ለበለጠ ጤናማ፣ ጠንካራ እና"
            : "We're your partner in achieving a healthier, stronger,"}
          <br className="desktop-only" />
          {language === "am"
            ? "በራስ መተማመን ለተሞላበት ህይወትዎ አጋር ነን。"
            : "and more confident you."}
        </p>
        <div className="feature-grid">
          {features.map(({ title, description, icon: Icon }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">
                <Icon size={23} strokeWidth={2.2} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight className="feature-arrow" size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <SectionHeading
          kicker={t("investInYourself")}
          title={t("planFor")}
          accent={t("nextLevel")}
        />
        <p className="section-intro">{t("pricingIntro")}</p>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`price-card ${plan.featured ? "featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="popular-badge">
                  {language === "am" ? "በጣም ተወዳጅ" : "Most Popular"}
                </span>
              )}
              <span className="price-label">{plan.name}</span>
              <div className="price">
                <strong>{plan.price}</strong>
                <span>{language === "am" ? "/ በወር" : "/ month"}</span>
              </div>
              <p>{plan.description}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={plan.featured ? "start-button" : "outline-button"}
              >
                {language === "am"
                  ? `${plan.name} ይምረጡ`
                  : `Choose ${plan.name}`}{" "}
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>


      <StudioGallery language={language} />
      <section className="testimonials-section">
        <SectionHeading
          kicker={t("memberStories")}
          title={t("proofIn")}
          accent={t("process")}
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <Quote size={25} />
              <p>{testimonial.quote}</p>
              <div>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.detail}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FindUsSection language={language} />
      <FaqSection language={language} />
      <GetStartedSection language={language} />

      <section className="closing-section" id="contact">
        <div className="closing-glow" />
        <div className="closing-kicker">{t("strongerStory")}</div>
        <h2>
          {language === "am" ? "የስፖርት እንቅስቃሴዎን" : "Transform Your Workout"}
          <br />
          {language === "am"
            ? "እድገትዎን ወደሚያፋጥን የህይወት ዘይቤ"
            : "Into a Lifestyle That Fuels"}
          <br />
          <em>{language === "am" ? "ይቀይሩ" : "Your Progress"}</em>
        </h2>
        <a href="mailto:hello@thrivefit.co" className="outline-button">
          {t("startConversation")} <ArrowUpRight size={17} />
        </a>
      </section>

      <section className="cta-banner">
        <div>
          <div className="section-kicker">{t("readyWhenYouAre")}</div>
          <h2>
            {t("makeToday")}
            <br />
            <em>{t("chooseYou")}</em>
          </h2>
        </div>
        <a href="#pricing" className="start-button">
          {t("viewMemberships")} <ArrowRight size={18} />
        </a>
      </section>

      <footer className="site-footer">
  <div className="footer-top">
    {/* Column 1: Brand & Elevator Pitch */}
    <div className="footer-col brand-col">
      <ThriveMark />
      <p className="footer-brand-copy">
        {language === "am"
          ? "ለቀጣዩ ደረጃዎ የተዘጋጀ ጥንካሬ እና ጤና። ከእኛ ጋር አኗኗርዎን ይቀይሩ።"
          : "Built for your next level. Sculpting stronger bodies and resilient minds in Addis Ababa."}
      </p>
      <div className="footer-contact-info">
        <a href="tel:+251911000000" className="footer-contact-item">
          <Phone size={14} /> +251 911 000 000
        </a>
        <a href="mailto:hello@thrivefit.co" className="footer-contact-item">
          <Mail size={14} /> hello@thrivefit.co
        </a>
        <span className="footer-contact-item">
          <MapPin size={14} /> Bole Road, Addis Ababa
        </span>
      </div>
    </div>

    {/* Column 2: Navigation */}
    <div className="footer-col">
      <h4 className="footer-heading">
        {language === "am" ? "ማሰሻ" : "Explore"}
      </h4>
      <ul className="footer-links-list">
        <li><a href="#programs">{t("programs")}</a></li>
        <li><a href="#trainers">{t("trainers")}</a></li>
        <li><a href="#pricing">{t("memberships")}</a></li>
        <li><a href="#about">{t("navAbout")}</a></li>
        <li><a href="#visit">{language === "am" ? "ቦታችን" : "Find Us"}</a></li>
      </ul>
    </div>

    {/* Column 3: Hours (Crucial UX for Gyms) */}
    <div className="footer-col">
      <h4 className="footer-heading">
        {language === "am" ? "የስራ ሰዓታት" : "Studio Hours"}
      </h4>
      <ul className="footer-hours">
        <li>
          <span>{language === "am" ? "ሰኞ – አርብ" : "Mon – Fri"}</span>
          <strong>5:30 AM – 9:00 PM</strong>
        </li>
        <li>
          <span>{language === "am" ? "ቅዳሜ" : "Saturday"}</span>
          <strong>7:00 AM – 5:00 PM</strong>
        </li>
        <li>
          <span>{language === "am" ? "እሑድ" : "Sunday"}</span>
          <strong>8:00 AM – 2:00 PM</strong>
        </li>
      </ul>
    </div>

    {/* Column 4: Social & Engagement */}
    <div className="footer-col">
      <h4 className="footer-heading">
        {language === "am" ? "ተከተሉን" : "Connect With Us"}
      </h4>
      <p className="footer-subtext">
        {language === "am"
          ? "የቀን ተቀን እንቅስቃሴዎቻችንን በሶሻል ሚዲያ ይከታተሉ።"
          : "Follow us for daily motivation, workout tips & studio updates."}
      </p>
      <div className="social-links-enhanced">
        <a href="#home" aria-label={t("socialInstagram")} className="social-icon-btn">
          <InstagramIcon size={18} />
        </a>
        <a href="#home" aria-label={t("socialLinkedIn")} className="social-icon-btn">
          <LinkedinIcon size={18} />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Copyright & Legal */}
  {/* <div className="footer-bottom">
    <span>© 2026 Thrive Health &amp; Fitness. All rights reserved.</span>
    <div className="footer-legal-links">
      <a href="#home">{language === "am" ? "የግላዊነት ፖሊሲ" : "Privacy Policy"}</a>
      <a href="#home">{language === "am" ? "የአገልግሎት ውሎች" : "Terms of Service"}</a>
    </div>
  </div> */}
</footer>
    </main>
  );
}

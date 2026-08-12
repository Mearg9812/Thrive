"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
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
  User,
  Users,
  Droplets,
  Snowflake,
  Car,
  Calendar,
} from "lucide-react";

const directionsUrl =
  "https://maps.google.com/maps?q=9.010377,38.877495&ll=9.010377,38.877495&z=16";

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

// --- Scroll Animation Hook ---
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
}

// Reveal Wrapper Component
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isIntersecting } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

const STAT_POSITION_CLASSES: Record<string, string> = {
  "stat-one": "top-[20%] left-0 md:top-[35%] md:-left-[12%]",
  "stat-two": "top-[18%] right-0 md:top-[35%] md:-right-[10%]",
  "stat-three": "bottom-[10%] left-0 md:bottom-[15%] md:-left-[4%]",
  "stat-four": "bottom-[10%] right-0 md:bottom-[15%] md:-right-[4%]",
};

const STAT_VARS: Record<string, React.CSSProperties> = {
  "stat-one": {
    ["--angle" as string]: "-9deg",
    animationDelay: "0s",
    animationDuration: "5.8s",
  },
  "stat-two": {
    ["--angle" as string]: "9deg",
    animationDelay: "0.5s",
    animationDuration: "6.4s",
  },
  "stat-three": {
    ["--angle" as string]: "-7deg",
    animationDelay: "1s",
    animationDuration: "6.8s",
  },
  "stat-four": {
    ["--angle" as string]: "8deg",
    animationDelay: "1.4s",
    animationDuration: "7s",
  },
};

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
    value: "+251 97 0084408",
    href: "tel:+251970084408",
    icon: Phone,
  },
  {
    title: language === "am" ? "ኢሜይል ይላኩልን" : "Email us",
    detail:
      language === "am"
        ? "በአንድ የስራ ቀን ውስጥ ምላሽ ያግኙ"
        : "Get a reply within one business day",
    value: "Email Us",
    href: "mailto:thrivehealthfitness8@gmail.com",
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
      className={`flex items-center gap-2 md:gap-3 ${compact ? "" : "shrink-1 min-w-0"}`}
      aria-label="Thrive Health & Fitness"
    >
      <img
        src="/logo_trans.png"
        alt="Thrive Health & Fitness"
        className="object-contain light:bg-foreground light:rounded-md shrink-0"
        style={{
          // Scales down to 36px on mobile, grows to 70px on desktop
          height: compact ? "34px" : "clamp(36px, 10vw, 70px)",
          width: "auto",
          objectFit: "contain",
        }}
      />
      <div className="flex flex-col justify-center mt-1 md:mt-2.5 -ml-1 md:-ml-1.5 shrink-1 min-w-0">
        <span
          className={`block leading-[0.9] font-black italic tracking-[-0.08em] truncate ${compact ? "text-lg" : "text-[1.15rem] md:text-2xl"}`}
        >
          Thrive
        </span>
        <span
          className={`block md:mt-0.5 text-muted-foreground/80 font-bold uppercase tracking-[0.18em] truncate ${compact ? "text-[5px]" : "text-[0.38rem] md:text-[0.44rem]"}`}
        >
          Health &amp; Fitness
        </span>
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
    <div
      className={`absolute z-1 flex items-center gap-3 min-w-40 h-24 max-md:min-w-28 max-md:h-16 py-4 pr-5 pl-4 max-md:py-2.5 max-md:pr-2.5 max-md:pl-2 text-left border border-border bg-surface/90 backdrop-blur-md rounded-[18px] max-md:rounded-2xl shadow-soft rotate-(--angle,0deg) opacity-100 animate-[badge-float_6s_ease-in-out_infinite] motion-reduce:animate-none transition-[transform,box-shadow,border-color,opacity] duration-300 ease-out hover:z-8 hover:rotate-0 hover:-translate-y-2 hover:scale-[1.04] hover:border-primary/50 ${STAT_POSITION_CLASSES[position]}`}
      style={STAT_VARS[position]}
    >
      <div className="grid place-items-center w-10 h-10 max-md:w-7 max-md:h-7 shrink-0 rounded-xl bg-primary/15 text-primary shadow-[inset_0_0_18px_rgba(41,171,226,0.12)]">
        <Icon size={20} strokeWidth={2.4} className="max-md:scale-75" />
      </div>
      <div>
        <strong className="block text-[1.35rem] max-md:text-[1.1rem] leading-[0.95] tracking-[-0.06em] font-black text-foreground">
          {value}
        </strong>
        <span className="block mt-1 max-md:mt-0.5 text-muted-foreground text-[0.66rem] max-md:text-[9px] tracking-[0.02em] leading-tight font-semibold">
          {label}
        </span>
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
    <Reveal>
      <div className="flex justify-center items-center gap-2.5 text-primary text-[0.7rem] font-extrabold tracking-[0.3em] uppercase">
        <Sparkles size={16} /> {kicker}
      </div>
      <h2 className="mt-4.5 text-[clamp(37px,4.5vw,60px)] max-md:text-[41px] leading-[1.04] tracking-[-2.8px] max-md:tracking-[-2px] font-black">
        {title}
        <br />
        <em className="text-primary not-italic">{accent}</em>
      </h2>
    </Reveal>
  );
}

function StudioGallery({ language }: { language: keyof typeof translations }) {
  const galleryImages = getGalleryImages(language);
  const sizeClasses: Record<string, string> = {
    wide: "col-span-2 row-span-2",
    tall: "col-span-1 row-span-3 max-md:row-span-2",
    normal: "col-span-1 row-span-2",
  };
  return (
    <section
      className="scroll-mt-24 px-[5.2vw] max-md:px-5 py-32 max-md:py-20 text-center bg-navy"
      id="gallery"
    >
      <SectionHeading
        kicker={language === "am" ? "ስቱዲዮ ውስጥ" : "INSIDE THE STUDIO"}
        title={language === "am" ? "አንድ የስልጠና" : "A look at"}
        accent={language === "am" ? "ቀን ገጽታ" : "a day in training"}
      />
      <Reveal delay={100}>
        <p className="max-w-135 mx-auto mt-5 text-muted-foreground text-sm max-md:text-[13px] leading-relaxed">
          {language === "am"
            ? "እውነተኛ ክፍለ ጊዜዎች፣ እውነተኛ ላብ። በማንኛውም ጠዋት ስቱዲዮ ውስጥ ያለን ገጽታ የሚያሳይ።"
            : "Real sessions, real sweat. A glimpse of the floor on any given morning."}
        </p>
      </Reveal>
      <div className="max-w-300 mx-auto mt-16 max-md:mt-10 grid grid-cols-4 max-md:grid-cols-2 auto-rows-37.5 max-md:auto-rows-32.5 gap-3.5 text-left">
        {galleryImages.map((image, i) => (
          <Reveal
            key={image.src}
            delay={i * 50}
            className={`${sizeClasses[image.size]}`}
          >
            <figure className="m-0 h-full w-full relative overflow-hidden rounded-[18px] border border-border bg-surface group">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full block object-cover filter-[saturate(0.8)_contrast(1.05)] transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:filter-[saturate(1)_contrast(1.1)]"
              />
              <span
                className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                aria-hidden="true"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
// We add &output=embed to make the URL work inside an iframe without requiring an API key
const mapEmbedUrl = 
  "https://maps.google.com/maps?q=9.010377,38.877495&ll=9.010377,38.877495&z=16&output=embed";

function FindUsSection({ language }: { language: keyof typeof translations }) {
  const studioHours = getStudioHours(language);

  return (
    <section
      className="scroll-mt-24 px-[5.2vw] max-md:px-5 py-32 max-md:py-20 text-center bg-[radial-gradient(circle_at_50%_0%,rgba(41,171,226,0.035),transparent_38%)]"
      id="visit"
    >
      <SectionHeading
        kicker={language === "am" ? "ከእኛ ጋር ይሰልጥኑ" : "COME TRAIN WITH US"}
        title={language === "am" ? "እኛን" : "Find us"}
        accent={language === "am" ? "ያግኙን" : "on the ground"}
      />
      <Reveal delay={100}>
        <p className="max-w-135 mx-auto mt-5 text-muted-foreground text-sm max-md:text-[13px] leading-relaxed">
          {language === "am"
            ? "አንድ ስቱዲዮ፣ በማለዳ የሚከፈት እና በመሸ የሚዘጋ፤ ስለዚህ ስልጠናዎ በእርስዎ የጊዜ ሰሌዳ ላይ ይስማማል።"
            : "One studio, open early and late, so training fits your schedule instead of the other way around."}
        </p>
      </Reveal>

      <div className="max-w-275 mx-auto mt-16 max-md:mt-10 grid grid-cols-[1.1fr_0.9fr] max-md:grid-cols-1 gap-5 text-left items-stretch">
        {/* Left Information Card */}
        <Reveal delay={150}>
          <div className="h-full p-8 max-md:p-6 flex flex-col gap-6.5 border border-border rounded-[20px] bg-linear-to-br from-surface-light to-surface">
            <div className="flex flex-col gap-2.5">
              <span className="flex items-center gap-2 text-primary text-[11px] font-extrabold tracking-[1.4px] uppercase">
                <MapPin size={16} /> {language === "am" ? "አድራሻ" : "Address"}
              </span>
              <p className="text-foreground text-sm leading-normal">
                {language === "am"
                  ? "አያት ኖህ ሪል እስቴት የትራፊክ መብራቱ ጋር ፣ ኣዲስ ኣበባ፣ ኢትዮጵያ"
                  : "Near the traffic light at Ayat Noah Real Estate, Addis Ababa, Ethiopia"}
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="flex items-center gap-2 text-primary text-[11px] font-extrabold tracking-[1.4px] uppercase">
                <Clock3 size={16} />{" "}
                {language === "am" ? "የስቱዲዮ የስራ ሰዓታት" : "Studio hours"}
              </span>
              <ul className="grid gap-2.5 m-0 p-0 list-none">
                {studioHours.map((entry) => (
                  <li
                    key={entry.day}
                    className="flex items-center justify-between gap-3 text-foreground text-[13px]"
                  >
                    <span className="text-muted-foreground">{entry.day}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="flex items-center gap-2 text-primary text-[11px] font-extrabold tracking-[1.4px] uppercase">
                <Phone size={16} />{" "}
                {language === "am" ? "ወደ ስቱዲዮ ይደውሉ" : "Call the studio"}
              </span>
              <a
                className="self-start text-foreground text-lg font-extrabold tracking-[-0.02em] transition-colors hover:text-primary focus-visible:text-primary"
                href="tel:+251970084408"
              >
                +251 97 0084408
              </a>
              <p>+251 91 2190603</p>
              <p>+251 91 3814546</p>
            </div>

            <a
              className="mt-auto self-start inline-flex items-center gap-3 rounded-full text-white bg-primary text-[0.8rem] font-extrabold py-3.5 pl-5.5 pr-5 shadow-[0_8px_30px_var(--blue-glow)] transition-all hover:-translate-y-1 hover:shadow-[0_13px_36px_var(--blue-glow)]"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "am" ? "አቅጣጫዎችን ያግኙ" : "Get directions"}{" "}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        {/* Right Map Card */}
        <Reveal delay={250}>
          <div className="relative h-full w-full overflow-hidden min-h-[300px] max-md:min-h-[250px] border border-border rounded-[20px] bg-surface-light">
            <iframe
              src={mapEmbedUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location Map"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection({ language }: { language: keyof typeof translations }) {
  const faqs = getFaqs(language);
  return (
    <section
      className="scroll-mt-24 px-[5.2vw] max-md:px-5 py-32 max-md:py-20 text-center bg-navy"
      id="faq"
    >
      <SectionHeading
        kicker={language === "am" ? "ማወቅ ያለብዎት" : "GOOD TO KNOW"}
        title={language === "am" ? "የሚጠየቁ" : "Questions,"}
        accent={language === "am" ? "ጥያቄዎች" : "answered"}
      />
      <div className="max-w-200 mx-auto mt-16 max-md:mt-10 grid gap-3 text-left">
        {faqs.map((item, index) => (
          <Reveal key={item.q} delay={index * 100}>
            <details
              className="faq-item border border-border rounded-2xl bg-linear-to-br from-surface-light to-surface overflow-hidden [&[open]_summary]:border-b [&[open]_summary]:border-border [&[open]_.faq-chevron]:rotate-180"
              open={index === 0}
            >
              <summary className="flex items-center justify-between gap-4 py-5 px-5.5 max-md:py-4 max-md:px-4.5 text-foreground text-sm max-md:text-[13px] font-bold cursor-pointer list-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2">
                <span>{item.q}</span>
                <ChevronDown
                  className="faq-chevron shrink-0 text-primary transition-transform duration-200 ease-out"
                  size={18}
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5.5 max-md:px-4.5 pb-5.5 max-md:pb-4.5 pt-4 text-muted-foreground text-[13px] leading-relaxed">
                {item.a}
              </p>
            </details>
          </Reveal>
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
    <section
      className="scroll-mt-24 px-[5.2vw] max-md:px-5 py-32 max-md:py-20 text-center bg-[radial-gradient(circle_at_50%_0%,rgba(41,171,226,0.04),transparent_37%)]"
      id="contact"
    >
      <SectionHeading
        kicker={language === "am" ? "ለስልጠና ዝግጁ ነዎት?" : "READY TO TRAIN"}
        title={language === "am" ? "በአንድ" : "Get started"}
        accent={language === "am" ? "እርምጃ ይጀምሩ" : "in one step"}
      />
      <Reveal delay={100}>
        <p className="max-w-135 mx-auto mt-5 text-muted-foreground text-sm max-md:text-[13px] leading-relaxed">
          {language === "am"
            ? "ለእርስዎ የሚቀልዎትን ይምረጡ፤ ይደውሉ፣ መልዕክት ይላኩ፣ ወይም በአካል ስቱዲዮ ይምጡ።"
            : "Pick whichever feels easiest, a call, a message, or just show up to the floor."}
        </p>
      </Reveal>
      <div className="max-w-250 mx-auto mt-16 max-md:mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-4 text-left">
        {contactActions.map(
          ({ title, detail, value, href, icon: Icon }, index) => {
            const isExternal = href.startsWith("http");
            return (
              <Reveal key={title} delay={index * 100}>
                <a
                  className="group flex flex-col h-full gap-2 p-6.5 border border-border rounded-[20px] bg-linear-to-br from-surface-light to-surface transition-all hover:-translate-y-1.5 hover:border-primary/50 focus-visible:-translate-y-1.5 focus-visible:border-primary/50"
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <div className="grid place-items-center w-12 h-12 rounded-[14px] text-white bg-primary shadow-[0_0_25px_rgba(41,171,226,0.17)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-3 text-base font-extrabold text-foreground">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {detail}
                  </p>
                  <span className="mt-auto pt-2.5 inline-flex items-center gap-2 text-primary text-[13px] font-bold">
                    {value} <ArrowUpRight size={15} />
                  </span>
                </a>
              </Reveal>
            );
          },
        )}
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

function FacebookIcon({ size = 18 }: { size?: number }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TiktokIcon({ size = 18 }: { size?: number }) {
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
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const getPricingPackages = (language: keyof typeof translations) => [
  {
    title: language === "am" ? "ለግለሰብ" : "Single",
    subtitle: language === "am" ? "ሙሉ ጥቅል" : "Full Package",
    icon: User,
    featured: false,
    prices: [
      { duration: language === "am" ? "1 ወር" : "1 Month", amount: "15,000" },
      { duration: language === "am" ? "2 ወራት" : "2 Months", amount: "25,000" },
      { duration: language === "am" ? "3 ወራት" : "3 Months", amount: "38,000" },
      { duration: language === "am" ? "6 ወራት" : "6 Months", amount: "59,500" },
      { duration: language === "am" ? "1 ዓመት" : "1 Year", amount: "90,000" },
    ],
  },
  {
    title: language === "am" ? "ለጥንዶች" : "Couple",
    subtitle: language === "am" ? "ሙሉ ጥቅል" : "Full Package",
    icon: Users,
    featured: true,
    prices: [
      { duration: language === "am" ? "1 ወር" : "1 Month", amount: "28,000" },
      { duration: language === "am" ? "2 ወራት" : "2 Months", amount: "44,000" },
      { duration: language === "am" ? "3 ወራት" : "3 Months", amount: "68,000" },
      { duration: language === "am" ? "6 ወራት" : "6 Months", amount: "105,000" },
      { duration: language === "am" ? "1 ዓመት" : "1 Year", amount: "150,000" },
    ],
  },
  {
    title: language === "am" ? "የቅናሽ ሰዓት" : "Happy Hour",
    subtitle: language === "am" ? "ለግለሰብ ብቻ" : "Single Only",
    time: "10:00 AM – 4:00 PM",
    icon: Clock3,
    featured: false,
    prices: [
      { duration: language === "am" ? "1 ወር" : "1 Month", amount: "9,000" },
      { duration: language === "am" ? "2 ወራት" : "2 Months", amount: "17,000" },
      { duration: language === "am" ? "3 ወራት" : "3 Months", amount: "25,000" },
      { duration: language === "am" ? "6 ወራት" : "6 Months", amount: "42,000" },
      { duration: language === "am" ? "1 ዓመት" : "1 Year", amount: "60,000" },
    ],
  },
];

const getMembershipIncludes = (language: keyof typeof translations) => [
  {
    label: language === "am" ? "የግል አሰልጣኝ" : "Personal Trainer",
    icon: Dumbbell,
  },
  { label: language === "am" ? "ስቲም እና ሳውና" : "Steam & Sauna", icon: Flame },
  { label: language === "am" ? "ሞሮካን ባዝ" : "Moroccan Bath", icon: Droplets },
  {
    label: language === "am" ? "የበረዶ ውሃ (ለወንዶች)" : "Ice Bath For Men",
    icon: Snowflake,
  },
  { label: language === "am" ? "ነፃ መኪና ማቆሚያ" : "Free Parking", icon: Car },
  {
    label: language === "am" ? "24/7 የጂም አገልግሎት" : "24/7 Gym Access",
    icon: Clock3,
  },
];

const getFreezes = (language: keyof typeof translations) => [
  {
    duration: language === "am" ? "1 ዓመት" : "1 Year",
    freeze: language === "am" ? "3 ወራት ማቆሚያ" : "3 Months Freeze",
  },
  {
    duration: language === "am" ? "6 ወራት" : "6 Months",
    freeze: language === "am" ? "2 ወራት ማቆሚያ" : "2 Months Freeze",
  },
  {
    duration: language === "am" ? "3 ወራት" : "3 Months",
    freeze: language === "am" ? "1 ወር ማቆሚያ" : "1 Month Freeze",
  },
];

export default function ThriveLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<keyof typeof translations>("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedLanguage = window.localStorage.getItem("thrive-language");
    const savedTheme = window.localStorage.getItem("thrive-theme");

    if (savedLanguage === "am" || savedLanguage === "en")
      setLanguage(savedLanguage);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
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
    <main className="overflow-hidden bg-[radial-gradient(circle_at_50%_13%,#0e1a25_0%,var(--background)_42%)] light:bg-[radial-gradient(circle_at_50%_13%,#eaf3fa_0%,var(--background)_42%)]">
      <section
        className="scroll-mt-24 min-h-screen relative px-[5.2vw] max-md:px-5 flex flex-col bg-[#020c13] light:bg-background overflow-hidden"
        id="home"
      >
        {/* Sticky / Glassmorphic Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-[5.2vw] max-md:px-5 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
          <nav
            className="w-full max-w-7xl mx-auto min-h-18 flex items-center justify-between gap-2 md:gap-7 relative py-3"
            aria-label="Primary navigation"
          >
            {/* Logo */}
            <a href="#home" className="block shrink-1 min-w-0 pr-2">
              <ThriveMark />
            </a>

            {/* Links with Animated Glowing Underline */}
            <div
              className={`${
                menuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row items-start md:items-center justify-center gap-4.5 md:gap-[clamp(20px,2.2vw,48px)] mx-auto flex-1 min-w-0 max-md:fixed max-md:top-[72px] max-md:left-4 max-md:right-4 max-md:p-6 max-md:border max-md:border-border max-md:rounded-2xl max-md:bg-surface/95 max-md:backdrop-blur-xl max-md:shadow-2xl`}
            >
              {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="relative py-1 text-foreground text-[0.92rem] max-md:text-base max-md:w-full font-bold tracking-[-0.02em] transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_rgba(41,171,226,0.8)]"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* ACTION BUTTONS GROUP: Kept firmly together to prevent wrapping */}
            <div className="flex items-center justify-end gap-1.5 md:gap-3.5 shrink-0 ml-auto">
              {/* Language Switch */}
              <button
                type="button"
                aria-label={t("language")}
                className="relative inline-flex items-center w-[52px] md:w-16 p-1 border border-border rounded-full bg-panel-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] cursor-pointer overflow-hidden shrink-0"
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
              >
                <span
                  className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-primary shadow-[0_6px_16px_var(--blue-glow)] transition-transform duration-300 ease-in-out"
                  style={{
                    transform:
                      language === "en" ? "translateX(0%)" : "translateX(100%)",
                  }}
                  aria-hidden="true"
                />
                <span
                  className={`relative z-1 flex-1 py-1 rounded-full text-[0.55rem] md:text-[0.66rem] font-extrabold tracking-wider uppercase transition-colors duration-200 ${language === "en" ? "text-white" : "text-muted-foreground"}`}
                >
                  {t("enLabel")}
                </span>
                <span
                  className={`relative z-1 flex-1 py-1 rounded-full text-[0.55rem] md:text-[0.66rem] font-extrabold tracking-wider uppercase transition-colors duration-200 ${language === "en" ? "text-muted-foreground" : "text-white"}`}
                >
                  {t("amLabel")}
                </span>
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                className="grid place-items-center w-7 h-7 md:w-9 md:h-9 border border-border rounded-full bg-panel-bg text-foreground shadow-[0_18px_38px_rgba(4,12,16,0.34)] cursor-pointer transition-all hover:-translate-y-px hover:border-primary/40 shrink-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
                title={theme === "dark" ? t("lightMode") : t("darkMode")}
              >
                {theme === "dark" ? (
                  <SunMedium className="w-3.5 h-3.5 md:w-4 md:h-4" />
                ) : (
                  <MoonStar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                )}
              </button>

              {/* Contact Block (Text hidden on mobile, Icon visible) */}
              <div className="flex items-center gap-1.5 md:gap-3.5 shrink-0">
                <div className="max-md:hidden flex flex-col items-end gap-0.5">
                  <span className="text-muted-foreground/80 text-[0.62rem]">
                    {t("contactUs")}
                  </span>
                  <strong className="text-[0.82rem] tracking-wide">
                    +251 97 0084408
                  </strong>
                </div>
                <a
                  className="grid place-items-center w-7 h-7 md:w-9 md:h-9 rounded-full text-white bg-primary shadow-[0_0_22px_var(--blue-glow)] transition-all hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_0_32px_var(--blue-glow)] shrink-0"
                  href="tel:+251970084408"
                  aria-label="Call Thrive Health & Fitness"
                >
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </a>
              </div>

              {/* Mobile Hamburger Menu */}
              <button
                className="hidden max-md:flex place-items-center z-12 w-7 h-7 border-0 bg-transparent text-foreground cursor-pointer shrink-0 ml-1"
                type="button"
                aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col items-center text-center pt-28 max-md:pt-24">
          <div className="flex items-center gap-2.5 text-primary text-[0.7rem] max-md:text-[8px] font-extrabold tracking-[0.3em] max-md:tracking-[1.6px] uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-6 max-md:w-3.5 h-px bg-primary opacity-70" />
            {t("heroEyebrow")}
            <span className="w-6 max-md:w-3.5 h-px bg-primary opacity-70" />
          </div>

          <h1 className="mt-5 max-md:mt-4 relative z-1 flex flex-col items-center gap-0 text-[clamp(43px,5.6vw,77px)] max-md:text-[clamp(32px,8vw,48px)] leading-[0.9] tracking-[-3.8px] max-md:tracking-[-2px] font-black text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {/* LINE 1: NO GAP (Matches English) */}
            <span className="flex items-baseline justify-center w-full">
              {language === "am" ? (
                <span className="whitespace-nowrap">
                  አካልዎን <em className="text-primary not-italic">ይገንቡ</em>
                </span>
              ) : (
                <span className="whitespace-nowrap">
                  Sculpt <em className="text-primary not-italic">Your</em> Body
                </span>
              )}
            </span>

            {/* LINE 2: HAS GAP (Matches English) */}
            <span className="flex items-baseline justify-center w-full">
              {language === "am" ? (
                <>
                  <span className="whitespace-nowrap">ያነቃቁት</span>
                  <span
                    className="inline-block w-[clamp(80px,13vw,170px)] max-md:w-[clamp(50px,22vw,110px)] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap">
                    <em className="text-primary not-italic">መንፈስዎ</em>
                  </span>
                </>
              ) : (
                <>
                  <span className="whitespace-nowrap">Empower</span>
                  <span
                    className="inline-block w-[clamp(80px,13vw,170px)] max-md:w-[clamp(50px,22vw,110px)] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap">
                    <em className="text-primary not-italic">Your</em> Spirit
                  </span>
                </>
              )}
            </span>
          </h1>

          {/* Athlete Image & Floating Badges */}
          <div
            className="relative isolate z-4 w-[min(780px,72vw)] max-md:w-[calc(100vw-20px)] h-[min(560px,56vw)] max-md:h-[clamp(300px,72vw,430px)] min-h-75 max-md:min-h-0 -mt-20 max-md:-mt-4 mb-[clamp(-120px,-5vw,-80px)] max-md:-mb-8 overflow-visible animate-in fade-in duration-1000 delay-300"
            aria-label={t("altAthlete")}
          >
            <img
              src="/thrive-ethiopian-athlete-clean.png"
              alt={t("altAthlete")}
              className="h-[138%] max-md:h-[118%] w-full object-contain object-[50%_38%] relative z-8 block filter-[saturate(0.92)_contrast(1.05)] translate-y-3 max-md:-mt-7 max-md:translate-y-2 pointer-events-none"
            />
            {heroStats.map((stat) => (
              <StatBadge key={stat.label} {...stat} />
            ))}
          </div>

          <div className="w-full max-w-295 flex max-md:flex-col items-center justify-between max-md:justify-center gap-6 mt-[clamp(10px,10vw,50px)] max-md:mt-32 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="flex items-center gap-3.5 text-left">
              <div className="flex pl-2" aria-hidden="true">
                <span className="block w-8 h-8 -ml-2 border-2 border-background rounded-full bg-[radial-gradient(circle_at_55%_30%,#d89f7a_0_14%,#35241f_15%_29%,#111820_30%_100%)]" />
                <span className="block w-8 h-8 -ml-2 border-2 border-background rounded-full bg-[radial-gradient(circle_at_50%_30%,#d8a17a_0_14%,#582d2a_15%_29%,#182c36_30%_100%)]" />
                <span className="block w-8 h-8 -ml-2 border-2 border-background rounded-full bg-[radial-gradient(circle_at_48%_30%,#9e6d4d_0_14%,#242a35_15%_29%,#466675_30%_100%)]" />
              </div>
              <div>
                <strong className="block text-primary text-[1.35rem] leading-none">
                  15k<span className="text-base">+</span>
                </strong>
                <small className="block mt-1 text-muted-foreground text-[0.6rem]">
                  {language === "am" ? "ደስተኛ አባላት" : "Happy Spirits"}
                </small>
              </div>
            </div>
            <a
              href="#programs"
              className="inline-flex items-center gap-3 rounded-full text-white bg-primary text-[0.8rem] font-extrabold py-3.5 pl-6 pr-5 shadow-[0_8px_30px_var(--blue-glow)] transition-all hover:-translate-y-1 hover:shadow-[0_13px_36px_var(--blue-glow)]"
            >
              {t("startCta")} <ChevronRight size={20} strokeWidth={3} />
            </a>
          </div>
        </div>

        <div className="absolute right-[5.2vw] bottom-11 max-md:hidden flex items-center gap-1.5 text-muted-foreground text-[10px] [writing-mode:vertical-rl] rotate-180 animate-pulse">
          scroll
        </div>
      </section>

      {/* Schedule Ticker */}
      <section
        className="relative z-10 flex items-center min-h-20 overflow-hidden bg-surface-light border-y border-border"
        aria-label={t("weeklyClasses")}
      >
        <div className="absolute inset-y-0 left-0 w-32 max-md:w-16 z-2 pointer-events-none bg-[linear-gradient(90deg,var(--background)_0%,transparent_100%)]" />
        <div className="absolute inset-y-0 right-0 w-32 max-md:w-16 z-2 pointer-events-none bg-[linear-gradient(270deg,var(--background)_0%,transparent_100%)]" />
        <div className="flex items-center gap-4 w-max px-7 animate-[ticker-scroll_28s_linear_infinite] motion-reduce:animate-none hover:paused cursor-default">
          {scheduleItems.map((item, index) => (
            <span
              className="inline-flex items-center gap-3 py-2.5 px-5 rounded-full border border-border bg-panel-bg shadow-sm text-foreground text-[11px] font-extrabold tracking-widest uppercase whitespace-nowrap transition-colors hover:text-primary hover:border-primary/50"
              key={`${item}-${index}`}
            >
              <b
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-base leading-none not-italic"
                aria-hidden="true"
              >
                +
              </b>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section
        className="scroll-mt-24 px-[5.2vw] max-md:px-5 py-32 max-md:py-20 text-center"
        id="programs"
      >
        <SectionHeading
          kicker={t("findYourEdge")}
          title={t("programsTitle")}
          accent={t("programsAccent")}
        />
        <Reveal delay={100}>
          <p className="max-w-135 mx-auto mt-5 text-muted-foreground text-sm max-md:text-[13px] leading-relaxed">
            {t("programsIntro")}
          </p>
        </Reveal>
        <div className="max-w-275 mx-auto mt-16 max-md:mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-4 text-left">
          {programs.map(
            ({ number, title, description, icon: Icon, tone }, i) => (
              <Reveal key={title} delay={i * 100}>
                <article className="min-h-75 max-md:min-h-60 p-6 relative border border-border rounded-[20px] bg-linear-to-br from-surface-light to-surface transition-all hover:-translate-y-2 hover:border-primary/50 cursor-pointer group">
                  <div
                    className={`w-14 h-14 grid place-items-center rounded-2xl transition-transform group-hover:scale-110 ${tone === "slate" ? "text-primary bg-panel-strong" : "text-white bg-primary shadow-[0_0_28px_rgba(41,171,226,0.2)]"}`}
                  >
                    <Icon size={26} />
                  </div>
                  <span className="absolute top-6 right-6 text-muted-foreground font-bold text-[11px] tracking-widest">
                    {number}
                  </span>
                  <h3 className="mt-14 text-xl font-extrabold tracking-[-0.5px] text-foreground group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="max-w-60 mt-3 text-muted-foreground text-[13px] leading-relaxed">
                    {description}
                  </p>
                  <a
                    href="#contact"
                    aria-label={`Explore ${title}`}
                    className="absolute right-6 bottom-6 text-primary opacity-50 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </section>

      <section className="px-[10vw] max-md:px-5 py-32 max-md:py-20 grid grid-cols-[0.9fr_1.1fr] max-md:grid-cols-1 gap-16 max-md:gap-10 items-center bg-navy">
        <Reveal>
          <div>
            <div className="text-primary text-[0.7rem] font-extrabold tracking-[0.3em] uppercase">
              {t("thriveStandard")}
            </div>
            <h2 className="mt-5 text-[clamp(40px,5vw,68px)] max-md:text-[44px] leading-[1.02] tracking-[-3px] max-md:tracking-[-2px] font-black text-foreground">
              {t("smallChoices")}
              <br />
              <em className="text-primary not-italic">{t("massiveShifts")}</em>
            </h2>
            <p className="max-w-96 mt-6 text-muted-foreground text-sm leading-[1.7]">
              {t("thriveStandardText")}
            </p>
            <a
              href="#pricing"
              className="inline-flex gap-2.5 items-center mt-8 text-primary text-xs font-extrabold transition-transform hover:translate-x-1"
            >
              {t("seeHowWeCoach")} <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="grid grid-cols-2 border-t border-l border-border bg-surface">
            {[
              {
                value: "92",
                unit: "%",
                label:
                  language === "am"
                    ? "ከአባላት የመጀመሪያ ግባቸውን አሳክተዋል"
                    : "members hit their first milestone",
              },
              {
                value: "7",
                unit: "yr",
                label:
                  language === "am"
                    ? "የተሻሉ ልምዶችን በማዳበር የተሳለፉ ዓመታት"
                    : "of building better habits",
              },
              {
                value: "4.9",
                unit: "/5",
                label:
                  language === "am"
                    ? "የአባላት አማካይ ደረጃ"
                    : "average member rating",
              },
              {
                value: "24",
                unit: "+",
                label:
                  language === "am"
                    ? "ከጎንዎ ያሉ አሰልጣኞች"
                    : "coaches in your corner",
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="min-h-36 py-7 px-7 max-md:py-5 max-md:px-4 border-r border-b border-border flex flex-col justify-center transition-colors hover:bg-surface-light"
              >
                <strong className="block text-primary text-[clamp(38px,4vw,58px)] leading-none font-black tracking-tighter">
                  {stat.value}
                  <span className="text-xl tracking-normal">{stat.unit}</span>
                </strong>
                <small className="block mt-2 text-muted-foreground text-[11px] leading-[1.45] max-w-32">
                  {stat.label}
                </small>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section
        className="scroll-mt-24 px-[5.2vw] max-md:px-5 py-32 max-md:py-20 text-center bg-[radial-gradient(circle_at_50%_0%,rgba(41,171,226,0.035),transparent_38%)]"
        id="trainers"
      >
        <SectionHeading
          kicker={t("meetYourTeam")}
          title={t("guidanceThat")}
          accent={t("getsYou")}
        />
        <Reveal delay={100}>
          <p className="max-w-135 mx-auto mt-5 text-muted-foreground text-sm max-md:text-[13px] leading-relaxed">
            {t("teamIntro")}
          </p>
        </Reveal>
        <div className="max-w-275 mx-auto mt-16 max-md:mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-5 text-left">
          {trainers.map((trainer, i) => (
            <Reveal key={trainer.name} delay={i * 150}>
              <article className="group overflow-hidden rounded-[20px] bg-surface border border-border cursor-pointer">
                <div className="h-96 max-md:h-80 relative overflow-hidden bg-surface">
                  <img
                    src={trainer.image}
                    alt={trainer.role}
                    className="w-full h-full block object-cover filter-[saturate(0.75)_contrast(1.05)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-0"
                  />
                  <img
                    src={trainer.closeup}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 scale-105 filter-[saturate(1)_contrast(1.1)] transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 lg:group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 pt-20 px-6 pb-6 bg-linear-to-t from-surface via-surface/80 to-transparent opacity-0 max-md:opacity-100 translate-y-4 max-md:translate-y-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-primary text-[10px] font-extrabold tracking-[1.5px] uppercase">
                      {trainer.focus}
                    </span>
                    <h3 className="mt-2 text-xl text-foreground font-bold">
                      {trainer.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-xs leading-normal">
                      {trainer.detail}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4.5 px-5 pb-5">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-muted-foreground text-[11px]">
                      {trainer.role}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={19}
                    className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="scroll-mt-24 px-[5.2vw] max-md:px-5 py-32 max-md:py-20 text-center"
        id="about"
      >
        <SectionHeading
          kicker={t("ourPhilosophy")}
          title={t("inspiredTo")}
          accent={t("bestSelf")}
        />
        <Reveal delay={100}>
          <p className="mt-5 text-muted-foreground text-sm max-md:text-[13px] leading-relaxed">
            {language === "am"
              ? "እኛ ለበለጠ ጤናማ፣ ጠንካራ እና"
              : "We're your partner in achieving a healthier, stronger,"}
            <br className="max-md:hidden" />
            {language === "am"
              ? "በራስ መተማመን ለተሞላበት ህይወትዎ አጋር ነን。"
              : "and more confident you."}
          </p>
        </Reveal>
        <div className="max-w-265 mx-auto mt-16 max-md:mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-5 text-left">
          {features.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="min-h-56 p-6 relative border border-border rounded-[20px] bg-linear-to-br from-surface-light to-surface transition-all hover:-translate-y-1.5 hover:border-primary/50 group">
                <div className="w-12 h-12 grid place-items-center rounded-2xl text-white bg-primary shadow-[0_0_25px_rgba(41,171,226,0.17)] transition-transform group-hover:scale-110">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="mt-8 text-base font-extrabold text-foreground">
                  {title}
                </h3>
                <p className="max-w-52 mt-3 text-muted-foreground text-xs leading-relaxed">
                  {description}
                </p>
                <ArrowUpRight
                  className="absolute top-6 right-6 text-muted-foreground opacity-30 group-hover:text-primary group-hover:opacity-100 transition-all"
                  size={20}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing Section     */}
      <section
        className="scroll-mt-24 px-[5.2vw] max-md:px-5 py-32 max-md:py-20 text-center bg-navy"
        id="pricing"
      >
        <SectionHeading
          kicker={t("investInYourself")}
          title={language === "am" ? "ፕሪሚየም" : "Premium"}
          accent={language === "am" ? "የአባልነት ጥቅሎች" : "Membership Packages"}
        />
        <Reveal delay={100}>
          <p className="max-w-135 mx-auto mt-5 text-muted-foreground text-sm max-md:text-[13px] leading-relaxed">
            {t("pricingIntro")}
          </p>
        </Reveal>

        {/* PRICING CARDS */}
        <div className="max-w-275 mx-auto mt-16 max-md:mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-6 items-stretch text-left">
          {getPricingPackages(language).map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 150} className="h-full">
              <article
                className={`h-full pt-8 px-6 pb-6 relative flex flex-col border rounded-[20px] bg-surface transition-all ${
                  pkg.featured
                    ? "border-primary shadow-[0_0_38px_rgba(41,171,226,0.13)] md:-translate-y-3 hover:-translate-y-4"
                    : "border-border hover:border-primary/50 hover:-translate-y-1"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 py-1.5 px-4 rounded-full text-white bg-primary text-[10px] font-black whitespace-nowrap tracking-wider shadow-sm">
                    {language === "am" ? "በጣም ተወዳጅ" : "Most Popular"}
                  </span>
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary text-[11px] font-extrabold tracking-[1.7px] uppercase">
                    {pkg.subtitle}
                  </span>
                  <pkg.icon className="text-primary/70" size={20} />
                </div>

                <h3 className="mt-1 text-3xl font-black text-foreground uppercase tracking-tight flex flex-col gap-2">
                  {pkg.title}
                  {pkg.time && (
                    <span className="text-[10px] font-bold text-muted-foreground bg-panel-strong px-2.5 py-1 rounded-md w-max tracking-widest uppercase">
                      {pkg.time}
                    </span>
                  )}
                </h3>

                {/* Duration / Pricing List */}
                <div className="flex flex-col mt-7 flex-1">
                  {pkg.prices.map((price, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-3.5 border-b border-border/60 last:border-0"
                    >
                      <span className="text-xs font-bold text-foreground/80 uppercase tracking-wide">
                        {price.duration}
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-foreground tracking-tight">
                          {price.amount}
                        </span>
                        <span className="text-[9px] font-extrabold text-primary uppercase">
                          {language === "am" ? "ብር" : "ETB"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={
                    pkg.featured
                      ? "mt-8 justify-center inline-flex items-center gap-3 rounded-full text-white bg-primary text-[0.8rem] font-extrabold py-3.5 px-5 shadow-[0_8px_30px_var(--blue-glow)] transition-all hover:opacity-90"
                      : "mt-8 justify-center inline-flex items-center gap-3.5 rounded-full text-foreground text-xs font-bold py-3.5 px-5 border border-border transition-colors hover:bg-surface-light hover:border-primary/50 hover:text-primary"
                  }
                >
                  {language === "am" ? "አሁን ይመዝገቡ" : "Get Started"}{" "}
                  <ArrowUpRight size={16} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* YOUR MEMBERSHIP INCLUDES (ICONS) */}
        <Reveal delay={200}>
          <div className="mt-10 max-w-275 mx-auto border border-border rounded-[24px] bg-surface-light overflow-hidden">
            <div className="bg-primary/10 py-3 border-b border-border/50 text-center">
              <h4 className="text-primary text-[10px] font-extrabold tracking-[2px] uppercase">
                {language === "am"
                  ? "አባልነትዎ እነዚህን ያካትታል"
                  : "Your Membership Includes"}
              </h4>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 p-6 md:p-8">
              {getMembershipIncludes(language).map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-surface border border-border flex items-center justify-center text-primary shadow-sm transition-transform group-hover:scale-110">
                    <item.icon size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide max-w-[90px] leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* MEMBERSHIP FREEZE SECTION */}
        <Reveal delay={300}>
          <div className="mt-6 max-w-275 mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-4">
            <div className="border border-border rounded-[20px] bg-surface p-6 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2.5 text-primary mb-2">
                <Snowflake size={22} />
                <h4 className="font-black tracking-tight text-lg uppercase text-foreground">
                  {language === "am" ? "የአባልነት ማገጃ" : "Membership Freeze"}
                </h4>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {language === "am"
                  ? "ህይወት ሲያጋጥም አባልነትዎን ለጊዜው ማቆም ይችላሉ።"
                  : "We've got you covered. Pause when life happens."}
              </p>
            </div>

            {getFreezes(language).map((freeze, i) => (
              <div
                key={i}
                className="border border-border rounded-[20px] bg-surface-light p-5 flex flex-col items-center justify-center text-center gap-2 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-2 text-primary">
                  <Calendar size={18} />
                  <span className="text-sm font-black text-foreground uppercase tracking-wide">
                    {freeze.duration}
                  </span>
                </div>
                <span className="text-[11px] font-extrabold text-muted-foreground tracking-[1px] uppercase">
                  {freeze.freeze}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <StudioGallery language={language} />

      <section className="px-[5.2vw] max-md:px-5 py-32 pb-40 text-center bg-surface-light">
        <SectionHeading
          kicker={t("memberStories")}
          title={t("proofIn")}
          accent={t("process")}
        />
        <div className="max-w-275 mx-auto mt-16 max-md:mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-5 text-left">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 150}>
              <article className="min-h-64 p-7 flex flex-col border border-border rounded-[20px] bg-surface transition-transform hover:-translate-y-1">
                <Quote size={28} className="text-primary/60" />
                <p className="mt-6 text-foreground text-base leading-relaxed italic font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-panel-strong grid place-items-center font-bold text-primary text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <strong className="block text-sm text-foreground font-bold">
                      {testimonial.name}
                    </strong>
                    <small className="block mt-0.5 text-muted-foreground text-[11px] font-medium">
                      {testimonial.detail}
                    </small>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <FindUsSection language={language} />
      <FaqSection language={language} />
      <GetStartedSection language={language} />

      {/* CTA Section */}
      <section
        className="scroll-mt-24 min-h-125 max-md:min-h-96 px-[5.2vw] max-md:px-5 py-24 relative overflow-hidden bg-background max-md:z-3 flex flex-col items-center justify-center text-center"
        id="cta"
      >
        <div className="absolute w-150 h-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(41,171,226,0.15),transparent_70%)] pointer-events-none" />
        <Reveal>
          <div className="relative text-primary text-xs font-extrabold tracking-widest uppercase">
            {t("strongerStory")}
          </div>
          <h2 className="relative mt-5 text-[clamp(40px,5.1vw,73px)] max-md:text-[38px] leading-[1.03] tracking-[-2px] font-black text-foreground">
            {language === "am" ? "የስፖርት እንቅስቃሴዎን" : "Transform Your Workout"}
            <br />
            {language === "am"
              ? "እድገትዎን ወደሚያፋጥን የህይወት ዘይቤ"
              : "Into a Lifestyle That Fuels"}
            <br />
            <em className="text-primary not-italic">
              {language === "am" ? "ይቀይሩ" : "Your Progress"}
            </em>
          </h2>
          <a
            href="mailto:thrivehealthfitness8@gmail.com"
            className="relative inline-flex items-center gap-3 mt-10 rounded-full text-white bg-primary shadow-lg text-sm font-bold py-4 px-8 transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_var(--blue-glow)]"
          >
            {t("startConversation")} <ArrowRight size={18} />
          </a>
        </Reveal>
      </section>

      {/* Footer pre-banner */}
      <section className="mx-[5.2vw] max-md:mx-5 mb-20 z-2 flex max-md:flex-col items-center max-md:items-start justify-between gap-8 rounded-3xl py-14 px-16 max-md:py-10 max-md:px-8 bg-linear-to-r from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm">
        <div>
          <div className="text-primary text-[0.7rem] font-extrabold tracking-widest uppercase">
            {t("readyWhenYouAre")}
          </div>
          <h2 className="mt-3.5 text-[clamp(28px,3vw,44px)] max-md:text-[32px] leading-[1.1] tracking-tight text-foreground font-bold">
            {t("makeToday")}
            <br />
            <em className="text-primary not-italic">{t("chooseYou")}</em>
          </h2>
        </div>
        <a
          href="#pricing"
          className="inline-flex items-center shrink-0 gap-3 rounded-full text-white bg-primary text-sm font-extrabold py-3.5 px-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_var(--blue-glow)]"
        >
          {t("viewMemberships")} <ArrowRight size={18} />
        </a>
      </section>

      {/* Redesigned Footer (Mobile Optimized) */}
      <footer className="relative bg-surface-light pt-20 pb-20 max-md:pb-28 overflow-hidden">
        {/* Subtle Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-[5.2vw] max-md:px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-md:gap-10 pb-12 border-b border-border">
            {/* Brand Column */}
            <div className="flex flex-col gap-5 md:col-span-5">
              <ThriveMark compact />
              <p className="text-muted-foreground text-[0.9rem] leading-relaxed max-w-sm mt-2">
                {language === "am"
                  ? "ለቀጣዩ ደረጃዎ የተዘጋጀ ጥንካሬ እና ጤና። ከእኛ ጋር አኗኗርዎን ይቀይሩ።"
                  : "Built for your next level. Sculpting stronger bodies and resilient minds in Addis Ababa."}
              </p>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://web.facebook.com/profile.php?id=61592291243042&_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid place-items-center w-10 h-10 rounded-full bg-surface border border-border text-muted-foreground transition-all hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://www.instagram.com/thrive_healthfitness?igsh=MTl5dHFyN2l1ZGt5ag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid place-items-center w-10 h-10 rounded-full bg-surface border border-border text-muted-foreground transition-all hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://vm.tiktok.com/ZS9kLQ2vEpRvx-EyMY4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="grid place-items-center w-10 h-10 rounded-full bg-surface border border-border text-muted-foreground transition-all hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1"
                >
                  <TiktokIcon size={18} />
                </a>
              </div>
            </div>

            {/* Explore Links Column */}
            <div className="flex flex-col gap-6 md:col-span-3">
              <h4 className="text-foreground text-xs font-black tracking-[0.15em] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/80"></span>
                {language === "am" ? "ማሰሻ" : "Explore"}
              </h4>
              <ul className="flex flex-col gap-3.5 m-0 p-0 list-none">
                {[
                  { id: "programs", href: "#programs", label: t("programs") },
                  { id: "trainers", href: "#trainers", label: t("trainers") },
                  { id: "pricing", href: "#pricing", label: t("memberships") },
                  { id: "about", href: "#about", label: t("navAbout") },
                  {
                    id: "visit",
                    href: "#visit",
                    label: language === "am" ? "ቦታችን" : "Find Us",
                  },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="relative inline-block text-muted-foreground text-sm font-medium transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_rgba(41,171,226,0.8)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit Us / Contact Column */}
            <div className="flex flex-col gap-6 md:col-span-4">
              <h4 className="text-foreground text-xs font-black tracking-[0.15em] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/80"></span>
                {language === "am" ? "እኛን ያግኙን" : "Visit Us"}
              </h4>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    Bole Road, Addis Ababa
                    <br />
                    Ethiopia
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a
                    href="tel:+251970084408"
                    className="hover:text-primary transition-colors"
                  >
                    +251 97 0084408
                  </a>
                  <a
                    href="tel:+251970084408"
                    className="hover:text-primary transition-colors"
                  >
                    +251 91 2190603
                  </a>
                  <a
                    href="tel:+251970084408"
                    className="hover:text-primary transition-colors"
                  >
                    +251 91 3814546
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a
                    href="mailto:thrivehealthfitness8@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    thrivehealthfitness8@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 flex items-center justify-center">
            <p className="text-[0.7rem] max-md:text-[0.68rem] text-muted-foreground font-medium flex items-center gap-1.5 uppercase tracking-widest flex-wrap justify-center">
              Powered by
              <a
                href="https://magikawi.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-black transition-all duration-300 hover:-translate-y-0.5 group ml-0.5"
              >
                <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[pulse_3s_ease-in-out_infinite] group-hover:animate-none tracking-wide text-[0.85rem] max-md:text-[0.8rem]">
                  Magiካዊ.io
                </span>
                <Sparkles
                  size={14}
                  className="text-primary opacity-80 md:opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-12"
                />
              </a>
            </p>
          </div>

          {/* Bottom Legal & Powered By Container */}
          <div className="pt-8 flex flex-col items-center gap-6 text-center">
            <div className="w-full flex max-md:flex-col items-center justify-between gap-4">
              <p className="text-muted-foreground text-[0.75rem] font-medium">
                © {new Date().getFullYear()} Thrive Health & Fitness. All rights
                reserved.
              </p>
              <div className="flex items-center justify-center gap-6 text-[0.75rem] font-medium text-muted-foreground">
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

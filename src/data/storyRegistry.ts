import type { MemorySceneConfig } from '../types/story';

export const APP_PASSWORD = 'hello likki';

export const AVATAR_ASSETS = {
  male: '/images/avatars/male_avatar.png',
  female: '/images/avatars/female_avatar.png',
} as const;

export const MEMORY_IMAGE_ASSETS = [
  '01_first_car_ride.jpeg',
  '02_stills.jpeg',
  '03_first_coat.jpeg',
  '04_first_cycle.jpeg',
  '05_sometimes_you_need_motivation.jpeg',
  '06_friendship_01.jpeg',
  '07_crime_partner.jpeg',
  '08_one_year_memories.jpeg',
  '09_hackathon_winner.jpeg',
  '10_vr_passion.png',
  '11_ieee_chairperson.jpeg',
  '12_what_not.jpeg',
] as const;

export const STORY_SCENES: MemorySceneConfig[] = [
  // Scene 0 = PASSWORD_GATE
  {
    id: 'PASSWORD_GATE',
    sceneNumber: 0,
    title: 'SPEC: PROBLEM_STATEMENT_v1.0.sys',
    tag: 'SYSTEM_AUTH',
    dialogueLines: [],
  },

  // Scene 1 = OPENING_STATEMENT
  {
    id: 'OPENING_STATEMENT',
    sceneNumber: 1,
    title: 'THE PROBLEM STATEMENT',
    tag: 'ISSUE #001: ASSIGNMENT',
    dialogueLines: [
      {
        text: 'Find some problem statement and do something.',
        speaker: 'male',
        pauseAfterMs: 1500,
      },
      {
        text: 'U told me to find some problem statement I was thinking of a problem 🤔',
        speaker: 'female',
        pauseAfterMs: 1500,
      },
      {
        text: 'Appude anipinchindi nikanna pedda problem em undi',
        speaker: 'female',
        pauseAfterMs: 1500,
      },
      {
        text: 'So YOU are my problem statement 😁',
        speaker: 'female',
        pauseAfterMs: 1500,
      },
      {
        text: "Let's see how the problem will be ..",
        speaker: 'female',
        pauseAfterMs: 2500,
      },
    ],
  },

  // Scene 2 = INSPIRA_CHAOS
  {
    id: 'INSPIRA_CHAOS',
    sceneNumber: 2,
    title: 'JULY 2025 — INSPIRA FEST',
    tag: 'TASK: INSPIRA FEST // STATUS: UNLIMITED CHAOS',
    dialogueLines: [
      {
        text: "July 2025 — that's where it all started...",
        pauseAfterMs: 1800,
      },
      {
        text: 'Then came Inspira... one full month of chaos, work and unlimited roasting 😂',
        pauseAfterMs: 2000,
      },
      {
        text: 'Also... kalisi kastapadi work chesam adi vere vishayam 😅',
        pauseAfterMs: 2500,
      },
    ],
  },

  // Scene 3 = MEMORY_01 (First Car Ride)
  {
    id: 'MEMORY_01',
    sceneNumber: 3,
    title: 'FIRST CAR RIDE',
    tag: 'LOG // 01_CAR_RIDE',
    image: '/images/memories/01_first_car_ride.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'Do u Remember our first car ride',
        pauseAfterMs: 1600,
      },
      {
        text: 'Na driver la unnav but kaadule 😂',
        pauseAfterMs: 2400,
      },
    ],
  },

  // Scene 4 = MEMORY_02 (Stills)
  {
    id: 'MEMORY_02',
    sceneNumber: 4,
    title: 'STILLS & POSES',
    tag: 'FRAME // 02_STILLS',
    image: '/images/memories/02_stills.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'Nitho stills pettinchadaniki raktalu chindinchina rojulu avi ...😮💨',
        pauseAfterMs: 2600,
      },
    ],
  },

  // Scene 5 = MEMORY_03 (First Coat)
  {
    id: 'MEMORY_03',
    sceneNumber: 5,
    title: 'FIRST COAT MOMENT',
    tag: 'DOC // 03_FIRST_COAT',
    image: '/images/memories/03_first_coat.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'Coat malli undadu photo teesukundam annav..but ni coat ni na jada dominate chesesindi bro😎',
        pauseAfterMs: 2200,
      },
      {
        text: 'Anyways first time coat vesinanduku 👏🙌',
        pauseAfterMs: 2400,
      },
    ],
  },

  // Scene 6 = MEMORY_04 (First Cycle)
  {
    id: 'MEMORY_04',
    sceneNumber: 6,
    title: 'FIRST CYCLE PASSENGER',
    tag: 'EXP // 04_FIRST_CYCLE',
    image: '/images/memories/04_first_cycle.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'Enthaina na cycle ekkina first abbai nuvve bro...you are very lucky 😉😅',
        pauseAfterMs: 2600,
      },
    ],
  },

  // Scene 7 = MEMORY_05 (Motivation)
  {
    id: 'MEMORY_05',
    sceneNumber: 7,
    title: 'EXPERT ADVICE PROTOCOL',
    tag: 'ALERT // 05_MOTIVATION',
    image: '/images/memories/05_sometimes_you_need_motivation.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'Nuv entha thopu ayina...',
        pauseAfterMs: 1500,
      },
      {
        text: 'Sometimes..na advice niku avasaram 😂',
        pauseAfterMs: 2500,
      },
    ],
  },

  // Scene 8 = MEMORY_06 (Friendship)
  {
    id: 'MEMORY_06',
    sceneNumber: 8,
    title: 'UNEXPECTED BOND',
    tag: 'NODE // 06_FRIENDSHIP',
    image: '/images/memories/06_friendship_01.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'Somewhere between all the chaos and fights...',
        pauseAfterMs: 1800,
      },
      {
        text: 'we actually became good friends ❤️',
        pauseAfterMs: 2600,
      },
    ],
  },

  // Scene 9 = MEMORY_07 (Crime Partner)
  {
    id: 'MEMORY_07',
    sceneNumber: 9,
    title: 'CERTIFIED CRIME PARTNER',
    tag: 'DOSSIER // 07_CRIME_PARTNER',
    image: '/images/memories/07_crime_partner.jpeg',
    imageFit: 'contain',
    badges: ['CERTIFIED CRIME PARTNER 😎'],
    dialogueLines: [
      {
        text: 'Best crime partner 😎',
        pauseAfterMs: 2600,
      },
    ],
  },

  // Scene 10 = MEMORY_08 (One Year Memories)
  {
    id: 'MEMORY_08',
    sceneNumber: 10,
    title: 'ONE YEAR RECAP',
    tag: 'ARCHIVE // 08_ONE_YEAR',
    image: '/images/memories/08_one_year_memories.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'We actually have some memories together from the past one year ❤️',
        pauseAfterMs: 2800,
      },
    ],
  },

  // Scene 11 = MEMORY_09 (Hackathon Winner)
  {
    id: 'MEMORY_09',
    sceneNumber: 11,
    title: 'HACKATHON TEAM MOMENT',
    tag: 'LOG // 09_HACKATHON',
    image: '/images/memories/09_hackathon_winner.jpeg',
    imageFit: 'contain',
    badges: ['Ni valle hero tho photo vachindi thanks bro..😅'],
    dialogueLines: [
      {
        text: 'From fighting partners to hackathon winning team 🏆 finally gelipinchesav bro❤️',
        pauseAfterMs: 2400,
      },
      {
        text: 'Ni valle hero tho photo vachindi thanks bro..😅',
        pauseAfterMs: 2600,
      },
    ],
  },

  // Scene 12 = MEMORY_10 (VR Passion)
  {
    id: 'MEMORY_10',
    sceneNumber: 12,
    title: 'PASSION FOR VIRTUAL WORLDS',
    tag: 'INNOVATION // 10_VR_PASSION',
    image: '/images/memories/10_vr_passion.png',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'One thing I genuinely admire about you...',
        pauseAfterMs: 1800,
      },
      {
        text: 'Whatever you do, you do it with so much passion.',
        pauseAfterMs: 1800,
      },
      {
        text: "Your curiosity to explore, learn and build... that's something really special.",
        pauseAfterMs: 2800,
      },
    ],
  },

  // Scene 13 = MEMORY_11 (IEEE Chairperson)
  {
    id: 'MEMORY_11',
    sceneNumber: 13,
    title: 'IEEE CHAIRPERSON',
    tag: 'LEADERSHIP // 11_IEEE',
    image: '/images/memories/11_ieee_chairperson.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'IEEE Chairperson...',
        pauseAfterMs: 1800,
      },
      {
        text: 'Every time I see you there, I genuinely feel proud.',
        pauseAfterMs: 2000,
      },
      {
        text: 'Not just because of the position... but because of everything you put into it.',
        pauseAfterMs: 3000,
      },
    ],
  },

  // Scene 14 = MEMORY_12 (What Not...?)
  {
    id: 'MEMORY_12',
    sceneNumber: 14,
    title: 'CHARACTER PROFILE // WHAT NOT...?',
    tag: 'SPEC // 12_WHAT_NOT',
    image: '/images/memories/12_what_not.jpeg',
    imageFit: 'contain',
    dialogueLines: [
      {
        text: 'What not...?',
        pauseAfterMs: 1500,
      },
      {
        text: 'A gamer, a developer, a team leader, a teacher...',
        pauseAfterMs: 2000,
      },
      {
        text: 'Our strength, none other than our Ganeshpati ❤️',
        pauseAfterMs: 3000,
      },
    ],
  },

  // Scene 15 = TEACHERS_DAY_FAKEOUT
  {
    id: 'TEACHERS_DAY_FAKEOUT',
    sceneNumber: 15,
    title: 'SYSTEM DIAGNOSTIC // MENTORSHIP',
    tag: 'CLOSING // TEACHERS_DAY',
    dialogueLines: [
      {
        text: 'U have been my teacher',
        speaker: 'female',
        pauseAfterMs: 1200,
      },
      {
        text: 'chala nerpinchav',
        speaker: 'female',
        pauseAfterMs: 1200,
      },
      {
        text: 'motivate chesav',
        speaker: 'female',
        pauseAfterMs: 1200,
      },
      {
        text: 'so...',
        speaker: 'female',
        pauseAfterMs: 2500,
      },
      {
        text: 'HAPPY TEACHERS DAY GURUJI ❤️',
        speaker: 'female',
        pauseAfterMs: 3500,
      },
    ],
  },

  // Scene 16 = BIRTHDAY_FINALE
  {
    id: 'BIRTHDAY_FINALE',
    sceneNumber: 16,
    title: 'THE SWEETEST PROBLEM // FINALE',
    tag: 'SURPRISE // BIRTHDAY_CELEBRATION',
    dialogueLines: [
      {
        text: 'HAPPY BIRTHDAY 🎂',
        pauseAfterMs: 1500,
      },
      {
        text: 'TO MY SWEETEST PROBLEM ❤️',
        pauseAfterMs: 100000,
      },
    ],
  },
];

// Runtime / Dev-time audit to strictly enforce content integrity
export function auditStoryRegistry(): boolean {
  const memoryScenes = STORY_SCENES.filter((s) => s.image !== undefined);
  const memoryCount = memoryScenes.length;

  if (memoryCount !== 12) {
    console.error(`[AUDIT FAILED] Expected 12 memory scenes with images, found ${memoryCount}`);
    return false;
  }

  for (const asset of MEMORY_IMAGE_ASSETS) {
    const isReferenced = STORY_SCENES.some((s) => s.image?.includes(asset));
    if (!isReferenced) {
      console.error(`[AUDIT FAILED] Memory image ${asset} is NOT referenced in any scene!`);
      return false;
    }
  }

  console.log(`[AUDIT PASSED] All 12 memory images & scenes strictly verified!`);
  return true;
}

// Run audit once at module load
auditStoryRegistry();

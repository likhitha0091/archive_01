export type SceneId = 
  | 'PASSWORD_GATE'
  | 'OPENING_STATEMENT'
  | 'INSPIRA_CHAOS'
  | 'MEMORY_01'
  | 'MEMORY_02'
  | 'MEMORY_03'
  | 'MEMORY_04'
  | 'MEMORY_05'
  | 'MEMORY_06'
  | 'MEMORY_07'
  | 'MEMORY_08'
  | 'MEMORY_09'
  | 'MEMORY_10'
  | 'MEMORY_11'
  | 'MEMORY_12'
  | 'TEACHERS_DAY_FAKEOUT'
  | 'BIRTHDAY_FINALE';

export interface DialogueLine {
  text: string;
  speaker?: 'male' | 'female' | 'system';
  pauseAfterMs?: number;
  highlightWords?: string[];
}

export interface MemorySceneConfig {
  id: SceneId;
  sceneNumber: number;
  title: string;
  tag: string;
  image?: string;
  imageFit?: 'contain' | 'cover';
  imagePosition?: string;
  imageScale?: number;
  dialogueLines: DialogueLine[];
  badges?: string[];
  notes?: string;
}

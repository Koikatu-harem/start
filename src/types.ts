// グループベースゲーム関連の型定義
export interface Group {
  id: string;
  name: string;
  description: string;
  category: 'club' | 'class' | 'committee' | 'special';
  memberCount: number;
  affection: number; // 好感度 (0-100)
  groupType: 'sweet' | 'tsundere' | 'yandere' | 'kuudere' | 'genki' | 'sporty' | 'intellectual' | 'artistic';
  image?: string; // 画像パス（後で追加予定）
}

export interface Choice {
  id: string;
  text: string;
  effects: {
    groupId: string;
    affectionChange: number;
  }[];
  nextSceneId: string;
}

export interface Scene {
  id: string;
  title: string;
  description: string;
  background?: string;
  groups: string[]; // グループIDの配列
  choices: Choice[];
  isEnding?: boolean;
  endingType?: 'harem' | 'yandere' | 'normal' | 'bad';
}

export interface GameState {
  currentSceneId: string;
  groups: Group[];
  completedScenes: string[];
  playerName: string;
}
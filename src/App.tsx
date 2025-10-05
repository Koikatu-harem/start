import React, { useState, useEffect } from 'react';
import { GameState } from './types';
import { initialGroups, gameScenes } from './gameData';
import { GameScreen } from './components/GameScreen';
import { GroupList } from './components/CharacterList';
import { Heart, Users, Play, BookOpen, Settings, ZoomIn } from 'lucide-react';
import { X } from 'lucide-react';

type Screen = 'menu' | 'game' | 'groups';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    currentSceneId: 'start',
    groups: initialGroups,
    completedScenes: [],
    playerName: '柏木壮亮'
  });

  // 自動セーブ機能
  useEffect(() => {
    const autoSave = () => {
      localStorage.setItem('koikatsu_autosave', JSON.stringify(gameState));
    };
    const interval = setInterval(autoSave, 30000); // 30秒ごと
    return () => clearInterval(interval);
  }, [gameState]);

  const newGame = () => {
    setGameState({
      currentSceneId: 'start',
      groups: initialGroups,
      completedScenes: [],
      playerName: '柏木壮亮'
    });
    setCurrentScreen('game');
  };

  const continueGame = () => {
    const saved = localStorage.getItem('koikatsu_autosave');
    if (saved) {
      setGameState(JSON.parse(saved));
    }
    setCurrentScreen('game');
  };

  const hasAutoSave = () => {
    return localStorage.getItem('koikatsu_autosave') !== null;
  };

  if (currentScreen === 'game') {
    return (
      <GameScreen
        gameState={gameState}
        setGameState={setGameState}
        onBackToMenu={() => setCurrentScreen('menu')}
      />
    );
  }

  if (currentScreen === 'groups') {
    return (
      <GroupList
        groups={gameState.groups}
        onBack={() => setCurrentScreen('menu')}
      />
    );
  }

  // メニュー画面
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
          {/* タイトルヘッダー */}
          <div 
            className="relative text-white p-8 text-center"
          >
            <div 
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setIsImageZoomed(true)}
            >
              <img
                src="/start/CharaStudio-2022-04-07-20-36-59-Render.jpg" 
                alt="コイカツ学園" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={48} />
              </div>
            </div>
            <div className="relative z-10">
            <div className="text-6xl mb-4">🏫</div>
            <h1 className="text-4xl font-bold mb-2">コイカツ学園</h1>
            <h2 className="text-2xl font-light mb-4">ハーレムシミュレーション</h2>
            <p className="text-lg opacity-90">君だけの学園生活が始まる</p>
            </div>
          </div>

          <div className="p-8">
            {/* ゲーム情報 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-pink-50 rounded-xl">
                <Heart className="mx-auto mb-2 text-pink-500" size={32} />
                <h3 className="font-bold text-gray-800">全員MAX好感度</h3>
                <p className="text-sm text-gray-600">最初から皆君に夢中</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <Users className="mx-auto mb-2 text-purple-500" size={32} />
                <h3 className="font-bold text-gray-800">複数のグループ</h3>
                <p className="text-sm text-gray-600">部活動・委員会単位の恋愛</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <BookOpen className="mx-auto mb-2 text-blue-500" size={32} />
                <h3 className="font-bold text-gray-800">複数エンディング</h3>
                <p className="text-sm text-gray-600">選択で変わる物語</p>
              </div>
            </div>

            {/* メニューボタン */}
            <div className="space-y-4">
              <button
                onClick={newGame}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3 text-lg font-medium"
              >
                <Play size={24} />
                新しいゲーム
              </button>

              {hasAutoSave() && (
                <button
                  onClick={continueGame}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3 text-lg font-medium"
                >
                  <BookOpen size={24} />
                  続きから
                </button>
              )}

              <button
                onClick={() => setCurrentScreen('groups')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3 text-lg font-medium"
              >
                <Users size={24} />
                グループ一覧
              </button>
            </div>

            {/* ゲーム説明 */}
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Settings size={20} />
                ゲームについて
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p>• コイカツ学園唯一の男子生徒として学園生活を送ります</p>
                <p>• 全ての女子グループが最初から君に恋しています（好感度MAX）</p>
                <p>• 選択肢によって物語が分岐し、複数のエンディングがあります</p>
                <p>• グループ単位での恋愛で、ハーレムエンドから危険なヤンデレエンドまで様々な結末が...</p>
                <p>• とりあえず、犯したり犯されたりしてください</p>
              </div>
            </div>

            {/* 開発者向けメッセージ */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-500 text-center">
                れいわのかわはた
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* 画像拡大モーダル */}
      {isImageZoomed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageZoomed(false)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setIsImageZoomed(false)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 z-10"
            >
              <X size={24} />
            </button>
            <img
              src="/start/CharaStudio-2022-04-07-20-36-59-Render.jpg" 
              alt="拡大画像" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
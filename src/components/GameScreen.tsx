import React, { useState, useEffect } from 'react';
import { GameState, Scene, Choice } from '../types';
import { gameScenes } from '../gameData';
import { Heart, Save, Upload, RotateCcw, X, ZoomIn } from 'lucide-react';

interface GameScreenProps {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  onBackToMenu: () => void;
}

export function GameScreen({ gameState, setGameState, onBackToMenu }: GameScreenProps) {
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  useEffect(() => {
    const scene = gameScenes.find(s => s.id === gameState.currentSceneId);
    setCurrentScene(scene || gameScenes[0]);
  }, [gameState.currentSceneId]);

  const handleChoice = async (choice: Choice) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // 好感度変更を適用
    const updatedGroups = gameState.groups.map(group => {
      const effect = choice.effects.find(e => e.groupId === group.id);
      if (effect) {
        return {
          ...group,
          affection: Math.max(0, Math.min(100, group.affection + effect.affectionChange))
        };
      }
      return group;
    });

    // ゲームステートを更新
    const newGameState: GameState = {
      ...gameState,
      groups: updatedGroups,
      currentSceneId: choice.nextSceneId,
      completedScenes: [...gameState.completedScenes, gameState.currentSceneId]
    };

    setTimeout(() => {
      setGameState(newGameState);
      setIsAnimating(false);
      // 画面上部に自動スクロール
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  const saveGame = () => {
    localStorage.setItem('koikatsu_save', JSON.stringify(gameState));
    alert('ゲームをセーブしました！');
  };

  const loadGame = () => {
    const saved = localStorage.getItem('koikatsu_save');
    if (saved) {
      setGameState(JSON.parse(saved));
      alert('ゲームをロードしました！');
    } else {
      alert('セーブデータが見つかりません。');
    }
  };

  if (!currentScene) return null;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      {/* ヘッダー */}
      <div className="bg-white shadow-md p-4 relative z-10">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-pink-600">コイカツ学園</h1>
          <div className="flex gap-2">
            <button
              onClick={saveGame}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Save size={16} />
              セーブ
            </button>
            <button
              onClick={loadGame}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Upload size={16} />
              ロード
            </button>
            <button
              onClick={onBackToMenu}
              className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RotateCcw size={16} />
              メニュー
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 relative">
        {/* メインゲーム画面 */}
        <div className="max-w-4xl mx-auto">
            <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              {/* シーン画像エリア */}
              {currentScene.background ? (
                <div className="relative">
                  <div
                    className="bg-gray-50 cursor-pointer relative group"
                    onClick={() => setIsImageZoomed(true)}
                >
                  <img
                    src={currentScene.background}
                    alt="シーン画像"
                    className="w-full h-auto"
                  />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                      <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={48} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏫</div>
                    <p className="text-gray-600">ここに背景画像が表示されます</p>
                  </div>
                </div>
              )}

              {/* シーンタイトル */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
                <h2 className="text-3xl font-bold">{currentScene.title}</h2>
              </div>

              {/* テキストエリア */}
              <div className="p-8">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">{currentScene.description}</p>
                </div>

                {/* 選択肢 */}
                {currentScene.isEnding ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {currentScene.endingType === 'harem' && '💕'}
                      {currentScene.endingType === 'yandere' && '🔒'}
                      {currentScene.endingType === 'normal' && '😊'}
                      {currentScene.endingType === 'bad' && '😢'}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {currentScene.endingType === 'harem' && 'ハッピーハーレムエンド'}
                      {currentScene.endingType === 'yandere' && 'ヤンデレエンド'}
                      {currentScene.endingType === 'normal' && 'ノーマルエンド'}
                      {currentScene.endingType === 'bad' && 'バッドエンド'}
                    </h3>
                    <button
                      onClick={onBackToMenu}
                      className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors text-lg font-medium"
                    >
                      タイトルに戻る
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">どうする？</h3>
                    {currentScene.choices.map((choice, index) => (
                      <button
                        key={choice.id}
                        onClick={() => handleChoice(choice)}
                        disabled={isAnimating}
                        className="w-full text-left bg-gradient-to-r from-white to-gray-50 hover:from-pink-50 hover:to-purple-50 border-2 border-gray-200 hover:border-pink-300 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-gray-800 font-semibold text-lg">{choice.text}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>
      </div>

      {/* 画像拡大モーダル */}
      {isImageZoomed && currentScene.background && (
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
              src={currentScene.background} 
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
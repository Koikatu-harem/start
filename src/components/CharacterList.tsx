import React from 'react';
import { Group } from '../types';
import { Heart, Star, ArrowLeft } from 'lucide-react';

interface GroupListProps {
  groups: Group[];
  onBack: () => void;
}

export function GroupList({ groups, onBack }: GroupListProps) {
  const getGroupTypeColor = (groupType: Group['groupType']) => {
    switch (groupType) {
      case 'sweet': return 'from-pink-400 to-rose-400';
      case 'tsundere': return 'from-red-400 to-orange-400';
      case 'yandere': return 'from-purple-400 to-pink-400';
      case 'kuudere': return 'from-blue-400 to-cyan-400';
      case 'genki': return 'from-yellow-400 to-orange-400';
      case 'sporty': return 'from-green-400 to-teal-400';
      case 'intellectual': return 'from-indigo-400 to-blue-400';
      case 'artistic': return 'from-purple-400 to-indigo-400';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getGroupTypeEmoji = (groupType: Group['groupType']) => {
    switch (groupType) {
      case 'sweet': return '🌸';
      case 'tsundere': return '😤';
      case 'yandere': return '😈';
      case 'kuudere': return '❄️';
      case 'genki': return '⭐';
      case 'sporty': return '🏃‍♀️';
      case 'intellectual': return '🤓';
      case 'artistic': return '🎨';
      default: return '😊';
    }
  };

  const getGroupTypeName = (groupType: Group['groupType']) => {
    switch (groupType) {
      case 'sweet': return 'スイート系';
      case 'tsundere': return 'ツンデレ';
      case 'yandere': return 'ヤンデレ';
      case 'kuudere': return 'クーデレ';
      case 'genki': return '元気系';
      case 'sporty': return 'スポーツ系';
      case 'intellectual': return '知的系';
      case 'artistic': return '芸術系';
      default: return '普通';
    }
  };

  const getCategoryName = (category: Group['category']) => {
    switch (category) {
      case 'club': return '部活動';
      case 'committee': return '委員会';
      case 'class': return 'クラス';
      case 'special': return '特別グループ';
      default: return 'その他';
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      {/* ヘッダー */}
      <div className="bg-white shadow-md p-4">
        <div className="flex items-center gap-4 max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft size={16} />
            戻る
          </button>
          <h1 className="text-2xl font-bold text-pink-600">グループ一覧</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <div
              key={group.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* グループ画像エリア */}
              <div className={`bg-gradient-to-br ${getGroupTypeColor(group.groupType)} h-48 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-6xl mb-2">👥</div>
                  <p className="text-white font-medium">画像エリア</p>
                  <p className="text-white text-sm">{group.memberCount}人</p>
                </div>
              </div>

              {/* グループ情報 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{group.name}</h3>
                  <div className="flex items-center gap-1 bg-pink-100 px-3 py-1 rounded-full">
                    <Heart size={16} className="text-pink-500" />
                    <span className="font-bold text-pink-600">{group.affection}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${getGroupTypeColor(group.groupType)} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${group.affection}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-xl">{getGroupTypeEmoji(group.groupType)}</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      {getGroupTypeName(group.groupType)}
                    </span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {getCategoryName(group.category)}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {group.memberCount}人
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{group.description}</p>

                {/* 好感度レベル表示 */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-500" />
                    <span className="font-medium text-gray-700">
                      {group.affection >= 80 && '激愛中💕'}
                      {group.affection >= 60 && group.affection < 80 && '大好き❤️'}
                      {group.affection >= 40 && group.affection < 60 && '好き😊'}
                      {group.affection >= 20 && group.affection < 40 && '普通😐'}
                      {group.affection < 20 && '微妙😔'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 統計情報 */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">ハーレム統計</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">
                {Math.round(groups.reduce((sum, group) => sum + group.affection, 0) / groups.length)}
              </div>
              <p className="text-gray-600">平均好感度</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {groups.reduce((sum, group) => sum + group.memberCount, 0)}
              </div>
              <p className="text-gray-600">総メンバー数</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {groups.length}
              </div>
              <p className="text-gray-600">総グループ数</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
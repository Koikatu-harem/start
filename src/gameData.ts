import { Group, Scene } from './types';

// サンプルグループ（ユーザーが後で変更可能）
const baseGroups: Group[] = [
  {
    id: 'student_council',
    name: '生徒会',
    description: '学園の中枢を担う生徒会メンバー。会長を筆頭に、副会長、書記、会計の4人組。普段は厳格だが、柏木くんの前では皆が競って世話を焼こうとする。',
    category: 'committee',
    memberCount: 14,
    affection: 999,
    groupType: 'tsundere'
  },
  {
    id: 'library_committee',
    name: '図書委員会',
    description: '静かな図書室を管理する図書委員たち。普段は物静かだが、柏木くんが図書室に来ると、皆で取り囲んで本の相談に乗りたがる。内に秘めた情熱は人一倍激しい。',
    category: 'committee',
    memberCount: 16,
    affection: 999,
    groupType: 'yandere'
  },
  {
    id: 'cheerleading',
    name: 'チアリーディング部',
    description: '学園一の美女揃いで有名なチア部。練習中でも柏木くんを見つけると、全員でポンポンを振って応援してくれる。元気いっぱいだが独占欲も人一倍。',
    category: 'club',
    memberCount: 22,
    affection: 999,
    groupType: 'genki'
  },
  {
    id: 'discipline_committee',
    name: '風紀委員会',
    description: '学園の秩序を守る風紀委員たち。普段はクールで近寄りがたいが、柏木くんに対してだけは特別扱い。校則違反も柏木くんなら見逃してしまう。',
    category: 'committee',
    memberCount: 8,
    affection: 999,
    groupType: 'kuudere'
  },
  {
    id: 'health_committee',
    name: '保健委員会',
    description: '優しくて面倒見の良い保健委員たち。柏木くんが少しでも体調を崩すと、全員で看病しようと保健室に駆けつける。天然だが愛情は本物。',
    category: 'committee',
    memberCount: 15,
    affection: 999,
    groupType: 'sweet'
  },
  {
    id: 'tennis_club',
    name: 'テニス部',
    description: 'スポーツ万能で健康的な美少女たちが集まるテニス部。練習後は汗だくで柏木くんにタオルを借りに来る。スポーツで鍛えた体力で愛情表現も激しい。',
    category: 'club',
    memberCount: 35,
    affection: 999,
    groupType: 'sporty'
  },
  {
    id: 'science_club',
    name: '科学部',
    description: '知的で理論的な科学部員たち。柏木くんへの愛を科学的に分析し、最も効率的なアプローチ方法を研究している。実験と称して柏木くんを部室に呼び出すことも。',
    category: 'club',
    memberCount: 7,
    affection: 999,
    groupType: 'intellectual'
  },
  {
    id: 'art_club',
    name: '美術部',
    description: '芸術的センスに溢れる美術部員たち。柏木くんをモデルにした絵や彫刻を制作し、部室は柏木くん作品で埋め尽くされている。芸術への情熱と同じくらい柏木くんを愛している。',
    category: 'club',
    memberCount: 39,
    affection: 999,
    groupType: 'artistic'
  }
];

// 追加グループ（軽量版）
const additionalGroups: Group[] = [
  {
    id: 'swimming_club',
    name: '水泳部',
    description: '水着姿で柏木くんを誘惑する水泳部員たち。ロリ部と巨乳部で分かれており、それぞれ柏木くんへの迫り方が異なる。隠れ巨乳好きの疑いのある柏木くんをプールに誘い、取り囲んで戸惑わせることに恍惚感を覚えている。それに焦りを感じたロリ部は、ローションを水着に塗って全員で柏木くんをマッサージするサービスを開始した。',
    category: 'club',
    memberCount: 34,
    affection: 999,
    groupType: 'sporty'
  },
  {
    id: 'basketball_club', 
    name: 'バスケ部',
    description: '背の高い美女揃いのバスケ部。コイカツ学園のバスケ部は名門で全国的にも有名だが、柏木くんが転入してからは練習が手に付かない時期が存在した。危機感を覚えた女性顧問は、中学時代にバスケ部だった柏木くんに懇願して、一時的に入部させることに成功。それからというもの、入部希望の女子が殺到して、練習にも身が入り、チームは再び王座に君臨した',
    category: 'club',
    memberCount: 138,
    affection: 999,
    groupType: 'sporty'
  },
  {
    id: 'fan_club',
    name: 'コイカツ部',
    description: '柏木くん専用の公式ファンクラブ。会員証や会報誌まで存在し、柏木くんの一挙手一投足を記録・分析している。休み時間には教室に佇む柏木くんを廊下側から見つめている。基本的にはピュアな女子の集まりだが、中には柏木くんを盗撮したり、私物の匂いを嗅いで自慰に浸る者もいる',
    category: 'special',
    memberCount: 456,
    affection: 999,
    groupType: 'sweet'
  },
  {
    id: 'cooking_club',
    name: '柏木くんを犯し隊',
    description: '通称「裏コイカツ部」ピュア集団の向こうに対して、こちらは心の底から柏木くんに依存する者で形成されている。２４時間柏木くんのことしか頭になく、授業中も柏木くんの写真で自慰を繰り返すばかりか、近いうちに柏木くんを拉致してメチャクチャにしようという計画も立てられている。',
    category: 'club', 
    memberCount: 240,
    affection: 999,
    groupType: 'yandere'
  },
  {
    id: 'drama_club',
    name: '女性教師陣',
    description: 'コイカツ学園は発足して間もない施設であり、新人教員から学園長に至るまで若々しい顔ぶれが並んでいる。やはり教師であっても学園で唯一の男子という存在は大きく、片想いする者も多い。オトナである分、もしかしたら学生よりも愛が重く、本気で結婚を望んでいる３０代の教師も複数見受けられる。',
    category: 'club',
    memberCount: 31,
    affection: 999,
    groupType: 'artistic'
  }
];

export const initialGroups: Group[] = [...baseGroups, ...additionalGroups];

export const gameScenes: Scene[] = [
  {
    id: 'start',
    title: '新学期の始まり',
    background: '/start/CharaStudio-2023-08-30-15-34-34-Render.jpg',
    groups: [],
    description: `コイカツ学園の新学期が始まった。
1000人の女子生徒が通う元女学園に、男子が1人単身で転入する。
柏木壮亮は、思わず息をのんだ。

朝の教室。転入の挨拶。
教室の扉が開かれると、クラスメイト40人の息を呑む音が重なった。
それは、まるで何か大切な瞬間が始まる予兆のような、微かな空気の変化だった。柏木壮亮がその一歩を踏み入れると、すぐに、その変化は確かなものとなった。

席に座っていた生徒たちが、物凄いスピードで目を上げる。視線が集まる刹那、その空気が一瞬で沸騰した。
ずっと待ち焦がれていた男子の転入。
「遂に男子が入ってくるけど、あまり期待しないようにしよう？」
なんて言いながらも、心の奥底では転入日が近づくに連れて心拍数が上がっていた女子達。
それを証拠に、今まで膝丈だったスカートが物凄く短くなっている。
古くからエスカレーター式だった女子高。化粧なんかしたことない女子達なのに、その日は殆どの女子が肌も唇も艶やかだった。
そして現れた1人の男子。その輝きは、大幅に抱いていた期待を、更に、ゆうに超越するものだった。

柏木を見た瞬間、教室に居た全ての女子の体温が急上昇した。
頬が物凄く赤く染まった顔、ぎゅっと唇を噛む少女、目を逸らそうとしながらも、その視線は決して柏木から外れることがなかった。

座席の隅々にいる少女たちの瞳が、柏木に吸い寄せられるかのように、無意識のうちにその姿を捉える。彼が教室に一歩踏み込んだその瞬間、まるで全員が彼に尽くす為だけにここにいるかのような錯覚を覚えていた。

`,
    choices: [
      {
        id: 'choice1',
        text: '学園を案内してもらう',
        effects: [],
        nextSceneId: 'student_council'
      },
      {
        id: 'choice2', 
        text: '図書室に向かう',
        effects: [{ groupId: 'library_committee', affectionChange: 5 }],
        nextSceneId: 'library'
      },
    ]
  },
  {
    id: 'student_council',
    title: '学園を案内してもらう',
    background: '/start/CharaStudio-2024-11-28-19-59-20-Render.jpg',
    description: `「柏木くん、こちらへどうぞ」
眼鏡をかけた学級委員長・篠原 美和が、少し硬い笑顔を浮かべて僕に声をかけた。
その隣では、黒髪ストレートの幼馴染・白石 紬が、口を開きかけては閉じ、何度も言葉を飲み込んでいる。二人とも頬が赤く、僕と視線が合うたびに小さく肩をすくめるのが分かった。

僕も同じだった。
これまで女子とまともに喋ったこともない僕が、こんなに可愛い二人の女子に挟まれて学園を歩くなんて……
しかも、何処を見ても女子だらけだし、付いた視線は離れず、全身を隈なく撫でられて……
ただ廊下を歩いているだけなのに、ズボンの膨らみが抑えられず、バレないようにするので必死だった。

「あの……こ、こちらが……図書室です」
美和さんは飽くまで冷静に振る舞おうとするけど、僕と目が合うと途端に耳まで真っ赤になる。声がか細く震え、最後はほとんど囁きのようだった。

僕は慌てて頷いた。
「ありがとう。二人とも、とても分かりやすいよ」

その一言で、二人の顔がさらに赤くなった。
美和さんは咳払いで誤魔化し、紬さんは髪を耳にかけながら視線を逸らす。
廊下の奥では、他のクラスの女子たちがちらちらとこちらを覗いていて、すぐに顔を隠す。まるで僕の一挙手一投足を待ち構えているみたいだった。

それと、廊下がいちいち良い匂いする。
しかも、みんな僕に興味津々……
ヤバい。ガマン汁が出てるよ……
パンツは濡れ切っていた。`,
    groups: ['student_council'],
    choices: [
      {
        id: 'help_council',
        text: 'みんなの手伝いをする',
        effects: [{ groupId: 'student_council', affectionChange: 10 }],
        nextSceneId: 'council_route1'
      },
      {
        id: 'compliment_council',
        text: 'みんな今日も美しいね',
        effects: [{ groupId: 'student_council', affectionChange: 5 }],
        nextSceneId: 'council_flustered'
      }
    ]
  },
  {
    id: 'library',
    title: '図書室',
    description: '静かな図書室で図書委員たちが本の整理をしている。君に気づくと、全員が本で顔を隠しながらちらちらと見つめてくる。',
    groups: ['library_committee'],
    choices: [
      {
        id: 'sit_with_librarians',
        text: '図書委員たちの近くに座る',
        effects: [{ groupId: 'library_committee', affectionChange: 15 }],
        nextSceneId: 'library_route1'
      },
      {
        id: 'ask_book',
        text: 'おすすめの本を教えて',
        effects: [{ groupId: 'library_committee', affectionChange: 8 }],
        nextSceneId: 'library_books'
      }
    ]
  },
  {
    id: 'rooftop',
    title: '屋上',
    description: '屋上に出ると、チア部、風紀委員会、保健委員会のメンバーたちが待っていた。まるで君が来ることを知っていたかのように...',
    groups: ['cheerleading', 'discipline_committee', 'health_committee'],
    choices: [
      {
        id: 'group_talk',
        text: '全グループと話す',
        effects: [
          { groupId: 'cheerleading', affectionChange: 5 },
          { groupId: 'discipline_committee', affectionChange: 3 },
          { groupId: 'health_committee', affectionChange: 7 }
        ],
        nextSceneId: 'group_scene1'
      },
      {
        id: 'ask_waiting',
        text: 'なんで僕が来ると分かったの？',
        effects: [
          { groupId: 'cheerleading', affectionChange: 0 },
          { groupId: 'discipline_committee', affectionChange: -5 },
          { groupId: 'health_committee', affectionChange: 2 }
        ],
        nextSceneId: 'suspicious_route'
      }
    ]
  },
  {
    id: 'council_route1',
    title: '生徒会での一日',
    description: `生徒会の手伝いを申し出た君。

会長の美咲が微笑みながら言う。
「柏木くん、ありがとう。でも...私たちだけで十分よ」

副会長の麗奈が慌てて割り込む。
「会長！柏木くんが手伝ってくれるなんて滅多にないチャンスです！」

書記の優花と会計の千夏も顔を赤らめながら頷く。
「そ、そうです！柏木くんと一緒に作業できるなんて...」

結局、4人全員が君の周りに集まり、書類整理は全く進まなくなった。
むしろ、君が触った書類を「記念品」として隠そうとする始末...`,
    background: '/start/CharaStudio-2022-04-14-17-10-18-Render.jpg',
    groups: ['student_council'],
    choices: [
      {
        id: 'council_lunch',
        text: '一緒にお弁当を食べよう',
        effects: [{ groupId: 'student_council', affectionChange: 15 }],
        nextSceneId: 'council_lunch_scene'
      },
      {
        id: 'council_meeting',
        text: '生徒会会議に参加する',
        effects: [{ groupId: 'student_council', affectionChange: 10 }],
        nextSceneId: 'council_meeting_scene'
      },
      {
        id: 'leave_council',
        text: '他の場所に行く',
        effects: [{ groupId: 'student_council', affectionChange: -5 }],
        nextSceneId: 'afternoon_choice'
      }
    ]
  },
  {
    id: 'council_flustered',
    title: '照れる生徒会',
    description: `「みんな今日も美しいね」
君の言葉に、生徒会室の空気が一瞬で変わった。

会長の美咲は普段のクールな表情を保とうとするが、耳まで真っ赤になっている。
「か、柏木くん...そんなこと急に言われても...」

副会長の麗奈は書類を落としてしまい、慌てて拾おうとして転びそうになる。
「きゃっ！」

書記の優花は顔を両手で覆って机に突っ伏し、
会計の千夏は電卓を握りしめたまま固まっている。

「柏木くんって...本当に罪な人ね」
美咲が小さくつぶやいた。`,
    groups: ['student_council'],
    choices: [
      {
        id: 'comfort_council',
        text: 'みんなを慰める',
        effects: [{ groupId: 'student_council', affectionChange: 20 }],
        nextSceneId: 'council_comfort_scene'
      },
      {
        id: 'tease_council',
        text: 'もっとからかう',
        effects: [{ groupId: 'student_council', affectionChange: 5 }],
        nextSceneId: 'council_tease_scene'
      }
    ]
  },
  {
    id: 'library_route1',
    title: '図書委員との静かな時間',
    description: `図書委員たちの近くに座った君。
普段は静かな図書室だが、今日は違った。

委員長の静香が震える手で本を整理している。
「あの...柏木くん...こんなに近くに座ってくれて...」

他の図書委員たちも本を読むふりをしながら、君をちらちらと見つめている。
ページをめくる音だけが響く中、誰かの心臓の鼓動が聞こえそうなほど静寂が重い。

「柏木くん...」
静香が小さな声で呼びかける。
「もしよろしければ...私たちと一緒に本を読みませんか？」

図書委員全員の視線が君に集中する。`,
    background: '/start/CharaStudio-2022-07-14-16-58-35-Render.jpg',
    groups: ['library_committee'],
    choices: [
      {
        id: 'read_together',
        text: '一緒に本を読む',
        effects: [{ groupId: 'library_committee', affectionChange: 25 }],
        nextSceneId: 'library_reading_scene'
      },
      {
        id: 'help_organize',
        text: '本の整理を手伝う',
        effects: [{ groupId: 'library_committee', affectionChange: 15 }],
        nextSceneId: 'library_organize_scene'
      },
      {
        id: 'whisper_talk',
        text: 'ひそひそ話をする',
        effects: [{ groupId: 'library_committee', affectionChange: 20 }],
        nextSceneId: 'library_whisper_scene'
      }
    ]
  },
  {
    id: 'library_books',
    title: '本の推薦',
    description: `「おすすめの本を教えて」
君の言葉に、図書委員たちの目が輝いた。

「あ、あの！これなんてどうでしょう！」
「いえいえ、こちらの方が柏木くんには...」
「恋愛小説はいかがですか？」

気がつくと、君の周りには本の山ができていた。
図書委員たちが競うように本を持ってきて、それぞれが熱心に説明している。

委員長の静香が困ったような笑顔で言う。
「みんな、柏木くんが困ってしまいますよ...」

でも彼女自身も、手には分厚い文学全集を抱えている。`,
    groups: ['library_committee'],
    choices: [
      {
        id: 'choose_romance',
        text: '恋愛小説を選ぶ',
        effects: [{ groupId: 'library_committee', affectionChange: 18 }],
        nextSceneId: 'library_romance_scene'
      },
      {
        id: 'choose_all',
        text: '全部借りる',
        effects: [{ groupId: 'library_committee', affectionChange: 30 }],
        nextSceneId: 'library_all_books_scene'
      }
    ]
  },
  {
    id: 'group_scene1',
    title: '屋上での出会い',
    description: `屋上で3つのグループと話すことにした君。

チア部のキャプテン、愛美が元気よく手を振る。
「柏木くん！今日も素敵ね！」

風紀委員長の凛が冷静に言う。
「屋上は本来立ち入り禁止区域ですが...柏木くんなら特別です」

保健委員長の優しい笑顔の花音が心配そうに近づく。
「柏木くん、体調は大丈夫？風が強いから風邪をひかないか心配で...」

3つのグループが君を中心に円を作る。
それぞれ異なるアプローチで君への愛情を表現している。`,
    background: '/start/CharaStudio-2024-07-28-17-04-39-Render.jpg',
    groups: ['cheerleading', 'discipline_committee', 'health_committee'],
    choices: [
      {
        id: 'cheer_focus',
        text: 'チア部と話す',
        effects: [
          { groupId: 'cheerleading', affectionChange: 15 },
          { groupId: 'discipline_committee', affectionChange: -3 },
          { groupId: 'health_committee', affectionChange: -3 }
        ],
        nextSceneId: 'cheer_scene'
      },
      {
        id: 'discipline_focus',
        text: '風紀委員会と話す',
        effects: [
          { groupId: 'discipline_committee', affectionChange: 15 },
          { groupId: 'cheerleading', affectionChange: -3 },
          { groupId: 'health_committee', affectionChange: -3 }
        ],
        nextSceneId: 'discipline_scene'
      },
      {
        id: 'health_focus',
        text: '保健委員会と話す',
        effects: [
          { groupId: 'health_committee', affectionChange: 15 },
          { groupId: 'cheerleading', affectionChange: -3 },
          { groupId: 'discipline_committee', affectionChange: -3 }
        ],
        nextSceneId: 'health_scene'
      },
      {
        id: 'group_balance',
        text: '全グループと平等に話す',
        effects: [
          { groupId: 'cheerleading', affectionChange: 8 },
          { groupId: 'discipline_committee', affectionChange: 8 },
          { groupId: 'health_committee', affectionChange: 8 }
        ],
        nextSceneId: 'balanced_scene'
      }
    ]
  },
  {
    id: 'suspicious_route',
    title: '疑問の答え',
    description: `「なんで僕が来ると分かったの？」
君の質問に、3つのグループの表情が微妙に変わった。

チア部の愛美が慌てて手をひらひらと振る。
「え、えーっと...偶然よ！偶然！」

風紀委員長の凛が少し顔を赤らめながら言う。
「...風紀委員として、生徒の動向を把握するのは当然です」

保健委員長の花音が困ったような笑顔で言う。
「柏木くんの健康管理のために...つい...」

どうやら君の行動は常に監視...いや、「見守られて」いるようだ。
愛情が重すぎる彼女たちの本性が少し見えた瞬間だった。`,
    groups: ['cheerleading', 'discipline_committee', 'health_committee'],
    choices: [
      {
        id: 'accept_surveillance',
        text: '見守ってくれてありがとう',
        effects: [
          { groupId: 'cheerleading', affectionChange: 10 },
          { groupId: 'discipline_committee', affectionChange: 12 },
          { groupId: 'health_committee', affectionChange: 15 }
        ],
        nextSceneId: 'grateful_scene'
      },
      {
        id: 'concerned_surveillance',
        text: 'ちょっと心配になる',
        effects: [
          { groupId: 'cheerleading', affectionChange: -5 },
          { groupId: 'discipline_committee', affectionChange: -8 },
          { groupId: 'health_committee', affectionChange: -3 }
        ],
        nextSceneId: 'concern_scene'
      }
    ]
  },
  {
    id: 'afternoon_choice',
    title: '午後の選択',
    description: `午後の時間。学園内では様々な活動が行われている。

廊下を歩いていると、あちこちから君を呼ぶ声が聞こえてくる。

「柏木くん！」
「こっちに来て！」
「一緒に過ごしましょう！」

どのグループと過ごすか選択の時間だ。`,
    groups: ['swimming_club', 'basketball_club', 'cooking_club', 'fan_club'],
    choices: [
      {
        id: 'go_swimming',
        text: 'プールに向かう',
        effects: [{ groupId: 'swimming_club', affectionChange: 10 }],
        nextSceneId: 'swimming_scene'
      },
      {
        id: 'go_basketball',
        text: '体育館に向かう',
        effects: [{ groupId: 'basketball_club', affectionChange: 10 }],
        nextSceneId: 'basketball_scene'
      },
      {
        id: 'go_cooking',
        text: '調理室に向かう',
        effects: [{ groupId: 'cooking_club', affectionChange: 10 }],
        nextSceneId: 'cooking_scene'
      },
      {
        id: 'fan_club_encounter',
        text: '廊下を歩き続ける',
        effects: [{ groupId: 'fan_club', affectionChange: 5 }],
        nextSceneId: 'fan_club_scene'
      }
    ]
  },
  {
    id: 'swimming_scene',
    title: 'プールサイドの誘惑',
    description: `プールに到着すると、水泳部の美女たちが練習中だった。

キャプテンの美波が水から上がってくる。
水滴が彼女の美しい体を伝い落ちる光景に、君は思わず目を奪われる。

「柏木くん！見に来てくれたの？」
美波の笑顔が眩しい。

他の部員たちも次々とプールから上がってきて、君の周りに集まる。
濡れた水着姿の美女たちに囲まれ、君の心拍数が上がる。

「一緒に泳ぎませんか？」
「水着、貸してあげる！」
「柏木くんの泳ぎ、見てみたい！」

プールサイドが一気に賑やかになった。`,
    background: '/start/CharaStudio-2024-08-06-00-12-08-Render.jpg',
    groups: ['swimming_club'],
    choices: [
      {
        id: 'swim_together',
        text: '一緒に泳ぐ',
        effects: [{ groupId: 'swimming_club', affectionChange: 25 }],
        nextSceneId: 'swimming_together_scene'
      },
      {
        id: 'watch_practice',
        text: '練習を見学する',
        effects: [{ groupId: 'swimming_club', affectionChange: 15 }],
        nextSceneId: 'swimming_watch_scene'
      },
      {
        id: 'help_coaching',
        text: 'コーチを手伝う',
        effects: [{ groupId: 'swimming_club', affectionChange: 20 }],
        nextSceneId: 'swimming_coach_scene'
      }
    ]
  },
  // エンディング例
  {
    id: 'harem_ending',
    title: 'ハーレムエンディング',
    description: '全てのグループの愛を受け入れた君。コイカツ学園で1000人の女子生徒に囲まれて幸せな日々を過ごしている。',
    groups: ['student_council', 'library_committee', 'cheerleading', 'discipline_committee', 'health_committee', 'tennis_club', 'science_club', 'art_club'],
    choices: [],
    isEnding: true,
    endingType: 'harem'
  },
  {
    id: 'yandere_ending',
    title: 'ヤンデレエンディング',
    description: '愛が重すぎた女子グループたち。君は学園の地下室に全グループによって「保護」されることになった...',
    groups: ['library_committee', 'science_club'],
    choices: [],
    isEnding: true,
    endingType: 'yandere'
  }
];
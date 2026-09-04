// ここを書き換えるだけで探索者を追加できます。
const investigators = [
 {
    no: "001", name: "譲 朔太郎/ﾕｽﾞﾘ ｻｸﾀﾛｳ", age: 26, job: "登山家", status: "active", statusLabel: "現役",
    quote: "狂気山脈 ～邪神の山嶺～", mark: "朔", bg: "#A1E3FF",
    profile: "誰にも負けない孤高の登山家。ライバルであるK2には絶対負けないという気持ちで山に登る。絶対に初めて登頂を果たすのは自分なのだ。",
    scenarios: [ "狂気山脈 ～邪神の山嶺～(HO4B)"],
    stats: { STR: 15, CON: 16, POW: 17, DEX: 16, APP: 14, SIZ: 14 },
memo: "身長：165cm\n誕生日：5/9\n好きなもの：温かい飲み物\n芸術技能：なし\nモチーフ：なし",
image: "images/sakutaro.png",
  },
 {
    no: "002", name: "和沼 月光/ｵﾇﾏ ﾋｶﾘ", age: 30, job: "刑事", status: "active", statusLabel: "現役",
    quote: "呼声戦線異状あり！～人民、灼熱の時代に斯く戦えり～", mark: "和", bg: "#FFDF81",
    profile: "そう！世界に必要なのは米と米と米！！！！！米のために今日も国と生産者を守る警察官！米を信じて戦ってるから法律なんていらないのさ！",
    scenarios: [ "呼声戦線異状あり！～人民、灼熱の時代に斯く戦えり～(HO1)"],
    stats: { STR: 16, CON: 12, POW: 6, DEX: 9, APP: 11, SIZ: 9 },
memo: "身長：146cm\n誕生日：7/7\n好きなもの：お米\n芸術技能：なし\nモチーフ：南魚沼産コシヒカリ",
image: "images/hikari.png",
  },
  {
    no: "003", name: "龍野 秀/ﾀﾂﾉ ｼｭｳ", age: 26, job: "画家", status: "active", statusLabel: "現役",
    quote: "【炎上】第一回探索者村焼き選手権", mark: "龍", bg: "#62AC71",
    profile: "一部の人間から熱狂的な人気を集める天才画家。どんな絵だって描ける彼にも弱点があり......？",
    scenarios: [ "【炎上】第一回探索者村焼き選手権(HO2)", "地獄からお知らせです","お、捨てKPCだ。可哀想に..."],
    stats: { STR: 8, CON: 9, POW: 11, DEX: 13, APP: 8, SIZ: 14 },
memo: "身長：177cm\n誕生日：4/28\n好きなもの：焼きそば\n芸術技能：絵画\nモチーフ：地獄変(芥川龍之介)",
image: "images/tatsuno.png",
  },
  {
    no: "004", name: "式部/ｼｷﾌﾞ", age: "？", job: "写真家", status: "active", statusLabel: "現役",
    quote: "カノヨ街", mark: "式", bg: "#B29EC5",
    profile: "カノヨ街で写真屋を営んでいる少年。少年のような見た目だが、年老いたような喋り方をする。写真は腕がいいという訳では無いが、彼のもつ雰囲気から写真を撮って欲しいとやってくる客が多い。",
    scenarios: ["カノヨ街(HO4)", "追鯨"],
    stats: { STR: "？", CON: "？", POW: "？", DEX: "？", APP: "？", SIZ: "？" },
memo: "身長：123cm\n誕生日：不明\n好きなもの：なし\n芸術技能：なし\nモチーフ：なし",
image: "images/sikibu.png",
  },
  {
    no: "005", name: "汕菖 聖籠/ｻﾝｼｮ ｾｲﾛｳ", age: 33, job: "刑事", status: "active", statusLabel: "現役",
    quote: "庭師は何を口遊ぶ", mark: "汕", bg: "#FFCBE7",
    profile: "常におどおどしている陰キャオタク。少し医学をかじっているらしい。現在ハマっているゲームは「岩石すたーず(がんすた)」",
    scenarios: ["庭師は何を口遊ぶ(HO4)", "七月に君の死を見る","カタシロ"],
    stats: { STR: 9, CON: 8, POW: 13, DEX: 21, APP: 14, SIZ: 11 },
memo: "身長：164cm\n誕生日：5/5\n好きなもの：激辛麻婆豆腐\n芸術技能：2ch\nモチーフ：走れメロス/ディオニス王(太宰治)＋菖蒲＋聖籠町",
image: "images/seirou.png",
  },
  {
    no: "006", name: "北上 南下/ｷﾀｶﾐ ﾉｳｹﾞ", age: 23, job: "マジシャン", status: "active", statusLabel: "現役",
    quote: "鬼の棲む", mark: "北", bg: "#E18349",
    profile: "マジシャン(芸名ノーサ)として活躍中の男。単独でマジックショーを開いたり、サーカス団と共に地方を巡って盛り上げたりしている。",
    scenarios: ["鬼の棲む", "溜飲嚥下薬過敏症"],
    stats: { STR: 12, CON: 15, POW: 9, DEX: 9, APP: 15, SIZ: 15 },
memo: "身長：182cm\n誕生日：8/7\n好きなもの：パセリ\n芸術技能：マジック,死体修復\nモチーフ：ころしちゃった！(夏山よつぎ)",
image: "images/nouge.png",
  },
 {
    no: "007", name: "大里峠 箸義/ｵｵﾘﾄｳｹﾞ ﾁｮｳｷﾞ", age: 22, job: "宗教家", status: "active", statusLabel: "現役",
    quote: "鰯と柊", mark: "大", bg: "#666E87",
    profile: "いつも笑顔の青年。教団の人が大好きで少し子どもっぽい。しかし他人に対する敬意は忘れておらず、年上、目上の人には敬語を使って話そうと努力している。",
    scenarios: [ "鰯と柊(HO2)"],
    stats: { STR: 15, CON: 9, POW: 9, DEX: 10, APP: 11, SIZ: 18 },
memo: "身長：195cm\n誕生日：7/16\n好きなもの：ロールキャベツ\n芸術技能：蛇使い\nモチーフ：大里峠の大蛇伝説",
image: "images/tyougi.png",
  },
 {
    no: "008", name: "小綱 榴/ｺﾂﾞﾅ ﾘｭｳ", age: 28, job: "美術教師", status: "active", statusLabel: "現役",
    quote: "ソープスクール", mark: "龍", bg: "#335C3B",
    profile: "自由奔放で、気の赴くままに行動する。上下関係をあまり考えず話すことがあるため、同僚をひやひやさせることもあるかもしれない。",
    scenarios: [ "ソープスクール(HO4)", "ワンルーム・ディスコン(HO1)","デスイカ　など"],
    stats: { STR: 17, CON: 6, POW: 15, DEX: 7, APP: 13, SIZ: 13 },
memo: "身長：153cm\n誕生日：12/28\n好きなもの：お稲荷さん\n芸術技能：彫刻\nモチーフ：竜(芥川龍之介)",
image: "images/koduna.png",
  },
 {
    no: "009", name: "几ノ 心百合/ｷﾉ ｺﾕﾘ", age: 17, job: "高校生", status: "lost", statusLabel: "ロスト",
    quote: "膿み堕とし", mark: "龍", bg: "#FFAD83",
    profile: "クラスでもあまり意見しない、流されるまま文化祭などに参加する、特に目立つところはない生徒。",
    scenarios: [ "膿み堕とし(HO1)"],
    stats: { STR: 12, CON: 12, POW: 11, DEX: 10, APP: 18, SIZ: 13 },
memo: "身長：170cm\n誕生日：4/10\n好きなもの：お味噌汁\n芸術技能：料理\nモチーフ：夢十夜/第一夜(夏目漱石)＋月輪草",
image: "images/koyuri.png",
  },
{
    no: "010", name: "BellBot-22/猫次郎", age: "？", job: "配膳係", status: "active", statusLabel: "現役",
    quote: "ぼくはなにもしらない~この事件の犯人はHO2~", mark: "龍", bg: "#FFA5B7",
    profile: "飲食チェーン店で配膳係をしているロボット。特に可愛がられている個体で体から手のようなアームが出る。意思は割とある。",
    scenarios: [ "ぼくはなにもしらない~この事件の犯人はHO2~(HO4)"],
    stats: { STR: 14, CON: 16, POW: 18, DEX: 6, APP: 10, SIZ: 11 },
memo: "身長：129cm\n誕生日：不明\n好きなもの：なし\n芸術技能：配膳\nモチーフ：なし...？",
image: "images/bellbot.png",
  },
 {
    no: "011", name: "丈島 甲太郎/ｼﾞｮｳｼﾏ ｶﾝﾀﾛｳ", age: 26, job: "無職", status: "lost", statusLabel: "ロスト",
    quote: "聖母の降臨する島", mark: "龍", bg: "#9EC3A5",
    profile: "山に引きこもっている男。普段は水墨画を描いて生きている。たまに個展をひらくこともある。",
    scenarios: [ "聖母の降臨する島(HO2)", "美術館ホラーRTA"],
    stats: { STR: 14, CON: 16, POW: 11, DEX: 11, APP: 8, SIZ: 11 },
memo: "身長：165cm\n誕生日：4/28\n好きなもの：生パスタ\n芸術技能：水墨画、呪殺\nモチーフ：蜘蛛の糸(芥川龍之介)",
image: "images/zyosima.png",
  },
{
    no: "012", name: "酒吞 燕/ｻｶﾉﾐ ﾂﾊﾞﾒ", age: 21, job: "大学生/探偵", status: "active", statusLabel: "現役",
    quote: "辜月のN", mark: "龍", bg: "#232323",
    profile: "啓都大学の三回生。「謎」というものに固執しており、知らないということが嫌い。探偵をしているのは人助けをしたいというよりも謎を解きたいからである。",
    scenarios: [ "辜月のN(HO1)", "SHOTGUN KIXXING MARRIAGE","君のためのヒポクリシー(KPC)　など"],
    stats: { STR: 12, CON: 14, POW: 14, DEX: 11, APP: 17, SIZ: 13 },
memo: "身長：171cm\n誕生日：9/11\n好きなもの：たこ焼き\n芸術技能：土下座\nモチーフ：酒吞童子＋燕市(地名)",
image: "images/tsubame.png",
  },
{
    no: "013", name: "Ashburton・Lee/ｱｼｭﾊﾞｰﾄﾝ・ﾘｰ", age: 27, job: "情報屋", status: "active", statusLabel: "現役",
    quote: "かいぶつたちとマホラカルト", mark: "龍", bg: "#A691BC",
    profile: "ニュージーランド人と日本人のハーフ。ニュージーランドの方の実家(母方)は羊を育てている。自由と金をこよなく愛する情報屋。普段は路地裏にある喫茶店を営んでいる。コーヒーはまあまあ美味しい。",
    scenarios: [ "かいぶつたちとマホラカルト(HO1)"],
    stats: { STR: 15, CON: 18, POW: 12, DEX: 13, APP: 12, SIZ: 17 },
memo: "身長：186cm\n誕生日：10/2\n好きなもの：コーヒー\n芸術技能：珈琲\nモチーフ：アシュバートン市(地名)",
image: "images/ashburton.png",
  },
{
    no: "014", name: "東ノ輪 錦/ﾄｳﾉﾜ ﾆｼｷ", age: 23, job: "会計士", status: "active", statusLabel: "現役",
    quote: "海も枯れるまで", mark: "龍", bg: "#EDCF74",
    profile: "会計士として働いていた女性。しかし彼女のミスにより多額のお金を横領したことになり、働いていた場所を追われてしまった。(実際は見た目に嫉妬した先輩に騙されただけである)",
    scenarios: [ "海も枯れるまで(HO1)", "コーヒー一杯分の恐怖"],
    stats: { STR: 8, CON: 13, POW: 12, DEX: 17, APP: 18, SIZ: 9 },
memo: "身長：156cm\n誕生日：2/9\n好きなもの：白湯\n芸術技能：ボトルシップ\nモチーフ：錦鯉＋東の輪海水浴場",
image: "images/nisiki.png",
  },
{
    no: "015", name: "廿六木 杣/ﾄﾄﾞﾛｷ ｿﾏ", age: 25, job: "オカルト作家", status: "active", statusLabel: "現役",
    quote: "キルキルイキル", mark: "龍", bg: "#557998",
    profile: "売れない作家。オカルト作家として活動していたが、出版社に「現実味があまりにもないから怖い話として面白くない」と言われ、現実味のある話とは…？となっており、絶賛スランプ。",
    scenarios: [ "キルキルイキル"],
    stats: { STR: 9, CON: 9, POW: 10, DEX: 14, APP: 10, SIZ: 12 },
memo: "身長：171cm\n誕生日：7/4\n好きなもの：お～いお茶\n芸術技能：詩的表現\nモチーフ：廿六木＋杣木(地名)",
image: "images/soma.png",
  },
{
    no: "016", name: "美守 わや/ﾋﾀﾞﾉﾓﾘ ﾜﾔ", age: 20, job: "大学生", status: "active", statusLabel: "現役",
    quote: "フン、おもしれー女", mark: "龍", bg: "#4c8fc2",
    profile: "人生楽しんだもの勝ち！と思いながら生きている女子大学生。大学では文化財学科に所属しており、遺跡の研究の分野が好き。それ以外の教科にはあまり興味がなく、成績は悪い。",
    scenarios: [ "フン、おもしれー女(HO1)"],
    stats: { STR: 11, CON: 9, POW: 10, DEX: 13, APP: 15, SIZ: 14 },
memo: "身長：166cm\n誕生日：9/17\n好きなもの：餃子\n芸術技能：ダンス\nモチーフ：美守(地名)",
image: "images/waya.png",
  },
{
    no: "017", name: "雪月 花月/ﾕｷﾂｷ ｶﾂﾞｷ", age: 25, job: "殺人鬼", status: "active", statusLabel: "現役",
    quote: "ドロップアウトディスパイア", mark: "龍", bg: "#baff60",
    profile: "人間を死から救ってあげようという気持ちから人を殺し続ける殺人鬼。遺書に関しては正直書いても書かなくてもいいと思っているが、誰かに気持ちを運ぶという点においていいものだと感じている。",
    scenarios: [ "ドロップアウトディスパイア(HO2)","斬火血刀"],
    stats: { STR: 16, CON: 14, POW: 11, DEX: 11, APP: 9, SIZ: 10 },
memo: "身長：156cm\n誕生日：3/1\n好きなもの：みかん\n芸術技能：ホイッスル\nモチーフ：リゾート列車雪月花",
image: "images/kaduki.png",
  },
{
    no: "018", name: "101/ｲｵｲ", age: 23, job: "都市伝説課職員", status: "active", statusLabel: "現役",
    quote: "ようこそ！迷冥市役所都市伝説課へ！", mark: "龍", bg: "#93E2Fa",
    profile: "新撰組に憧れる青年。御用改であるといえばなんでも許されると思っている。日本刀を持っているが剣道などをしていた訳ではなく、独学で使える程度まで鍛えた。",
    scenarios: [ "ようこそ！迷冥市役所都市伝説課へ！　(HO2)","ラストダンスは夜明けまで"],
    stats: { STR: 13, CON: 17, POW: 15, DEX: 12, APP: 15, SIZ: 9 },
memo: "身長：149cm\n誕生日：1/1\n好きなもの：蕎麦\n芸術技能：剣術\nモチーフ：斎藤一",
image: "images/ioi.png",
  },
{
    no: "019", name: "栖吉 祥/ｽﾖｼ ｼｮｳ", age: 18, job: "高校生", status: "active", statusLabel: "現役",
    quote: "Bye-Bye Summer Days", mark: "龍", bg: "#b03d31",
    profile: "星が好きな高校生。8歳のときに見た星がどこの星図にも載っていないことに気付き、興味を持った。いつかその星を発見して名前をつけるのが夢。",
    scenarios: [ "Bye-Bye Summer Days(部長)","ロスタイムブギダンス","無人島アザーハーティット(KPC)　など"],
    stats: { STR: "8→9", CON: 13, POW: 11, DEX: 10, APP: 5, SIZ: 16 },
memo: "身長：181cm\n誕生日：7/26\n好きなもの：パルム、冷たいうどん\n芸術技能：カリンバ\nモチーフ：八方台、吉祥草",
image: "images/suyosi.png",
  },
{
    no: "020", name: "新発田 菊/ｼﾊﾞﾀ　ｷｸ", age: 29, job: "刑事", status: "active", statusLabel: "現役",
    quote: "プルガトリウムの夜", mark: "龍", bg: "#715685",
    profile: "よく男と勘違いされる女刑事。口調も男らしいところがある。小さい頃から日曜朝にやっていた子ども向け番組のヒーローに憧れ、正義の味方になるんだ！と思っていた。",
    scenarios: [ "プルガトリウムの夜(HO1)"],
    stats: { STR: 65, CON: 60, POW: 70, DEX: 75, APP: 65, SIZ: 75 },
memo: "身長：178cm\n誕生日：10/10\n好きなもの：日本酒、たくあん\n芸術技能：歌唱\nモチーフ：菊＋新発田市(地名)",
image: "images/sibata.png",
  },
{
    no: "021", name: "日下 人士/ｸｻｶ ﾋﾄｼ", age: 32, job: "書道家", status: "lost", statusLabel: "ロスト",
    quote: "静なるテロリスタ", mark: "龍", bg: "#608f90",
    profile: "イタリアで活動する書道家。もともとは貧乏な生活をしていたが、書道の才能により芸術界で一躍有名となる。現在は安定した生活を送っている。",
    scenarios: [ "静なるテロリスタ(HO3)"],
    stats: { STR: 7, CON: 12, POW: 13, DEX: 16, APP: 14, SIZ: 11 },
memo: "身長：174cm\n誕生日：11/30\n好きなもの：ワイン\n芸術技能：書道\nモチーフ：羅生門(芥川龍之介)",
image: "images/hitosi.png",
  },
{
    no: "022", name: "三条 イバラ/ｻﾝｼﾞｮｳ ｲﾊﾞﾗ", age: 31, job: "刑事", status: "lost", statusLabel: "ロスト",
    quote: "Good night,Judas.", mark: "龍", bg: "#5591ac",
    profile: "ド理系の楽観主義刑事。数学と物理が好きで趣味で問題を解くほど。鑑識の方あっていると言われるが、葉藝班のことを気に入っているため現状動く気は無い。",
    scenarios: [ "Good night,Judas.(HO2)","Good morning,dear."],
    stats: { STR: 13, CON: 8, POW: 16, DEX: 8, APP: 11, SIZ: 15 },
memo: "身長：180cm\n誕生日：3/3\n好きなもの：牛丼、サーモン\n芸術技能：ルービックキューブ\nモチーフ：茨木童子＋薔薇＋三条市(地名)",
image: "images/sanzyo.png",
  },
{
    no: "023", name: "汕菖 勇聖/ｻﾝｼｮ ﾕｳｾｲ", age: 39, job: "解剖医", status: "active", statusLabel: "現役",
    quote: "花境", mark: "龍", bg: "#E4BEDF",
    profile: "外科医のオネエさま。仕事ができるのか疑われることがあるがちゃんと仕事はできる。大学時代に中学生の弟に強く当たったことで弟が家出してしまったことを今でも後悔している。",
    scenarios: [ "花境(HO2)"],
    stats: { STR: 9, CON: 15, POW: 10, DEX: 15, APP: 11, SIZ: 12 },
memo: "身長：175cm\n誕生日：8/24\n好きなもの：激辛炒飯\n芸術技能：あやとり\nモチーフ：走れメロス/メロス(太宰治)",
image: "images/yusei.png",
  },
{
    no: "024", name: "笹山 関哉/ｻｻﾔﾏ ｾｷﾔ", age: 26, job: "馬券師", status: "active", statusLabel: "現役",
    quote: "怪物a", mark: "龍", bg: "#009d32",
    profile: "全然勝てない馬券師。でも絶対次は勝てると思っている。何故かへこたれない、何故か自信がある。色んな人に借金をしては返さないクズである。",
    scenarios: [ "怪物a"],
    stats: { STR: 12, CON: 9, POW: 11, DEX: 15, APP: 12, SIZ: 17 },
memo: "身長：192cm\n誕生日：9/16\n好きなもの：ケーキ全般\n芸術技能：血統表\nモチーフ：新潟競馬場",
image: "images/sekiya.png",
  },
 {
    no: "025", name: "越河 継丸/ｺｽｺﾞ ﾂｷﾞﾏﾙﾞ", age: "？", job: "殺人鬼", status: "active", statusLabel: "現役",
    quote: "片鱗", mark: "式", bg: "#44a381",
    profile: "とある街に出没した殺人鬼。このような見た目をしているがしっかり男。女装をしている感覚はあまりなく、かわいいものを集めて着ているだけ。",
    scenarios: ["片鱗(HO2)"],
    stats: { STR: "？", CON: "？", POW: "？", DEX: "？", APP: "？", SIZ: "？" },
memo: "身長：157cm\n誕生日：不明\n好きなもの：アイス\n芸術技能：不明\nモチーフ：河合継之助",
image: "images/tugimaru.png",
  },
{
    no: "026", name: "悟位/ｺﾞｲ", age: "？", job: "鬼", status: "active", statusLabel: "現役",
    quote: "堕獄の夜籠り、断つ双刀", mark: "式", bg: "#cdffff",
    profile: "食べるのが好きな鬼。すぐにお腹が空くのでよく腹減ったと他の鬼にもらしている。京の子どもたちの遊び道具(凧や竹とんぼなど)を盗んで遊んでいるようだ。",
    scenarios: ["堕獄の夜籠り、断つ双刀(HO2)","伊弉冉香","ヒトダマ・フェルミ・パラドクス(現コン)"],
    stats: { STR: "？", CON: "？", POW: "？", DEX: "？", APP: "？", SIZ: 14 },
memo: "身長：176cm\n誕生日：不明\n好きなもの：肉\n芸術技能：発光\nモチーフ：青鷺火(妖怪)",
image: "images/goi.png",
  },
{
    no: "027", name: "角田 侑士/ﾂﾉﾀ ﾕｳｼ", age: 28, job: "土木関係者", status: "lost", statusLabel: "ロスト",
    quote: "祠を壊せ！", mark: "龍", bg: "#7f6883",
    profile: "3徹目のダム建設現場職員。礼儀や上下関係に厳しい家で育ち、自分を殺して生きてきた。そのせいで常に不満が溜まっており、早く自由を得たい、思うがまま生きていきたいと思っている。",
    scenarios: [ "祠を壊せ！(HO4)"],
    stats: { STR: 15, CON: 10, POW: 11, DEX: 10, APP: 7, SIZ: 18 },
memo: "身長：198cm\n誕生日：8/24\n好きなもの：こんにゃく\n芸術技能：大工仕事\nモチーフ：角田山＋龍野秀のアナグラム",
image: "images/yusi.png",
  },
{
    no: "028", name: "Auspicis・Gracious/ｱｽﾋﾟｼｽ・ｸﾞﾚｲｼｬｽ", age: 18, job: "???", status: "lost", statusLabel: "ロスト",
    quote: "エンドレイン・ペトリコール", mark: "龍", bg: "#827895",
    profile: "雨の降る街に住む青年。あまり他人を信用していないが、取り入って利用するために気安い感じを装っている。",
    scenarios: [ "エンドレイン・ペトリコール(HO1)"],
    stats: { STR: 14, CON: 11, POW: 12, DEX: 14, APP: 12, SIZ: 12 },
memo: "身長：173cm\n誕生日：1/27\n好きなもの：グラタン\n芸術技能：ティンホイッスル\nモチーフ：吉祥草",
image: "images/asupi.png",
  },
{
    no: "029", name: "鶤鶏 桐一兵衛/ﾄｳﾏﾙ ｷﾘｲﾁﾍﾞｴ", age: 23, job: "大学生/お菓子屋バイト", status: "active", statusLabel: "現役",
    quote: "愛罠蜂", mark: "龍", bg: "#f9c14f",
    profile: "甘いものが好きな元ヤン大学生。よくつまみ食いをしては「どーっしても美味しそうに見えて…すみません。」と謝っている。そしてまた次の日につまみ食いをする。",
    scenarios: [ "愛罠蜂(HO2)","君のためのヒポクリシー(KPC)"],
    stats: { STR: 12, CON: 18, POW: 13, DEX: 11, APP: 9, SIZ: 13 },
memo: "身長：176cm\n誕生日：2/8\n好きなもの：お菓子全般\n芸術技能：不明\nモチーフ：鶤鶏(鶏の品種)＋桐一兵衛(妖怪)",
image: "images/kiriiti.png",
  },
{
    no: "030", name: "猫又 灸太郎/ﾈｺﾏﾀ ｷｭｳﾀﾛｳ", age: 24, job: "救命救急士", status: "active", statusLabel: "現役",
    quote: "旅館の捕食者", mark: "龍", bg: "#a24747",
    profile: "小さな救命救急士。多くの命を救うために弱まった命の炎に薪をくべ、搬送先へ患者を運ぶ。救命救急士になったばかりだが、やりがいをもって働いている。こう見えて男。",
    scenarios: [ "旅館の捕食者(HO3)","コーヒー一杯分の恐怖"],
    stats: { STR: 9, CON: 13, POW: 12, DEX: 12, APP: 14, SIZ: 8 },
memo: "身長：140cm\n誕生日：2/22\n好きなもの：鶏のささみ\n芸術技能：テレパシー、クレアボヤンス、サイコキネシス、パイロキネシス、テレポーテーション\nモチーフ：猫股の火(妖怪)",
image: "images/nekomata.png",
  },
{
    no: "031", name: "師 一心/ﾐﾔｺ ｲｯｼﾝ", age: 42, job: "精神科医", status: "lost", statusLabel: "ロスト",
    quote: "異説・狂人日記", mark: "龍", bg: "#cebb6f",
    profile: "一人の女性をめぐり、親友と争ったことがある。その時に相手を突き放す発言をし、その結果親友は自殺をした。親友を殺したことを後悔すると同時に親友の気持ちがどのようなものだったのか興味が湧いてしまった。",
    scenarios: [ "異説・狂人日記"],
    stats: { STR: 7, CON: 16, POW: 15, DEX: 13, APP: 11, SIZ: 11 },
memo: "身長：183cm\n誕生日：4/20\n好きなもの：鯖\n芸術技能：手紙\nモチーフ：こころ/先生(夏目漱石)",
image: "images/issin.png",
  },
{
    no: "032", name: "優里 奈都古/ﾕｳﾘ ﾅﾂｺ", age: 26, job: "ギャンブラー", status: "active", statusLabel: "現役",
    quote: "スススス", mark: "龍", bg: "#d9a1f2",
    profile: "常にスリルを味わうことを求めて生きるギャンブラー。常識？モラル？倫理？知ったことか！悪いけどアタシはアタシがやりたいようにやらせてもらう！",
    scenarios: [ "スススス(HO1)"],
    stats: { STR: 9, CON: 9, POW: 11, DEX: 18, APP: 10, SIZ: 16 },
memo: "身長：183cm\n誕生日：12/8\n好きなもの：海鮮丼\n芸術技能：ギャンブル、腹話術\nモチーフ：小綱榴のアナグラム",
image: "images/natuko.png",
  },
{
    no: "033", name: "Macchina・Pulsazione/ﾏｷﾅ・ﾌﾟﾙｻｼﾞｵｰﾈ", age: 22, job: "原初のアルカナ", status: "lost", statusLabel: "ロスト",
    quote: "GODARCA", mark: "龍", bg: "#A2B7B4",
    profile: "存在を規定されることを嫌う女性。他人に決められることは嫌いだか、自分が何者か分からず常に何か足りないと思っている。声がでかく、規律に厳しい。",
    scenarios: [ "GODARCA(魔術師)","Welcome Abroad(現コン)","花雷(現コン)"],
    stats: { STR: 12, CON: 15, POW: 18, DEX: 13, APP: 9, SIZ: 10 },
memo: "身長：155cm\n誕生日：10/29\n好きなもの：パン\n芸術技能：オカリナ\nモチーフ：ロストハートバッドエイク(夏山よつぎ)",
image: "images/makina.png",
  },
{
    no: "034", name: "Coastal Campanula Cloudout/ｺｰｽﾀﾙ・C・ｸﾗｳﾀﾞｳﾄ", age: 23, job: "アニムス(刑事)", status: "lost", statusLabel: "ロスト",
    quote: "Liebbing", mark: "龍", bg: "#93cabe",
    profile: "とある地方の方言で喋る。いつもニコニコしており、頼られると嬉しい。こう見えてちゃんと努力しているタイプ。",
    scenarios: [ "Liebbing(HO2)"],
    stats: { STR: 15, CON: 11, POW: 12, DEX: 16, APP: 6, SIZ: 15 },
memo: "身長：185cm\n誕生日：6/6\n好きなもの：ミネストローネ\n芸術技能：トライアングル\nモチーフ：出雲崎町+釣鐘草",
image: "images/ko-su.png",
  },
{
    no: "035", name: "笹茅 千草/ｻｻｶﾞﾔ ﾁｸﾞｻ", age: 44, job: "音楽家", status: "lost", statusLabel: "ロスト",
    quote: "とある幸せな家族の話", mark: "龍", bg: "#276693",
    profile: "音楽家の両親をもつ家庭で育った次男。真面目なところと適当なところがある。音楽に対しては真面目で、真面目すぎるが故に少し心が折れやすい。",
    scenarios: [ "とある幸せな家族の話(HO1)"],
    stats: { STR: 12, CON: 15, POW: 12, DEX: 16, APP: 13, SIZ: 11 },
memo: "身長：173cm\n誕生日：8/2\n好きなもの：ガレット、フィナンシェ\n芸術技能：チェロ、掃除\nモチーフ：千草石",
image: "images/tigusa.png",
  },
{
    no: "036", name: "Filibert・Ridder/ﾌｨﾘﾍﾞﾙﾄ・ﾘﾀﾞﾗ", age: 24, job: "警邏隊", status: "active", statusLabel: "現役",
    quote: "GODARCA ドゥームズデイ", mark: "龍", bg: "#efdc91",
    profile: "警邏隊に所属する隊員。所謂騎士らしい性格、振る舞いをする。幼少期に読んだ小説に登場する騎士に憧れをもち、それ以来、意識的に紳士的な言動をするようになった。",
    scenarios: [ "GODARCA ドゥームズデイ"],
    stats: { STR: 11, CON: 11, POW: 14, DEX: 12, APP: 15, SIZ: 14 },
memo: "身長：177cm\n誕生日：3/2\n好きなもの：ちょっと柔らかいパン\n芸術技能：手品\nモチーフ：騎士",
image: "images/fili.png",
  },
{
    no: "037", name: "二上　百々/ﾌﾀｶﾞﾐ ﾄﾞｳﾄﾞｳ", age: 31, job: "不幸屋", status: "lost", statusLabel: "ロスト",
    quote: "商・不幸堂", mark: "龍", bg: "#5397e1",
    profile: "不幸堂の主。背は低いが堂々としているためパッと見は低いという印象を持たないかもしれない。仲の良い友人には「もも」と呼ばせている。",
    scenarios: [ "商・不幸堂(HO1)"],
    stats: { STR: 10, CON: 13, POW: 12, DEX: 13, APP: 11, SIZ: 8 },
memo: "身長：148cm\n誕生日：10/25\n好きなもの：桃\n芸術技能：火吹き芸\nモチーフ：上百々(地名)",
image: "images/doudou.png",
  },
{
    no: "038", name: "椎葉　弥彦/ｼｲﾊﾞ ﾔﾋｺ", age: "？", job: "刑事(アンドロイド)", status: "active", statusLabel: "現役",
    quote: "VOID", mark: "龍", bg: "#ff934b",
    profile: "ほんわかぼんやりアンドロイド。基本的に人間、上官に従順。言われたことはこなす(つもり)。人間の営みに興味がある。",
    scenarios: [ "VOID(HO2)"],
    stats: { STR: 10, CON: 16, POW: 12, DEX: 14, APP: 10, SIZ: 9 },
memo: "身長：158(耳込み)cm\n製造日：9/9\n好きなもの：なし\n芸術技能：紅茶\nモチーフ：弥彦村(地名)＋椎の木",
image: "images/yahiko.png",
  },
{
    no: "039", name: "栖吉　草苗/ｽﾖｼ ｻﾅｴ", age: 15, job: "中学生", status: "active", statusLabel: "現役",
    quote: "彼方からの君に捧ぐ", mark: "龍", bg: "#f5848d",
    profile: "明るく素直な性格の中学生。なんでも信じるため友人によく騙される、よく勘違いをする。探索者だから悲しい過去を背負った少年…というわけではなく普通の男の子。",
    scenarios: [ "彼方からの君に捧ぐ(HO3)","Life goes on ～人生は続く～","Piece of Her Heart ～心のかけら～","あの銀星を何と呼ぶのだったか　など"],
    stats: { STR: 12, CON: 11, POW: 12, DEX: 15, APP: 14, SIZ: 14 },
memo: "身長：171cm\n誕生日：12/24\n好きなもの：からし\n芸術技能：バスケ\nモチーフ：吉祥草",
image: "images/sanae.png",
  },
{
    no: "040", name: "Sfortuna・Arrogante・ Taurus/ｽﾌｫﾙﾄｩｰﾅ・Ａ・ﾄｰﾗｽ", age: 47, job: "探偵", status: "active", statusLabel: "現役",
    quote: "十二星座館殺人事件", mark: "龍", bg: "#ec9f2a",
    profile: "日本の遊び大好きお茶目おじさん。右手右足が義手義足であり、数々の修羅場をくぐり抜けてきたと思われる。嫉妬深い妻がいる。",
    scenarios: [ "十二星座館殺人事件(HO牡牛座)","Caffe Twinkle","Naughty Chaser’s Night!!　など"],
    stats: { STR: 15, CON: 13, POW: 13, DEX: 5, APP: 11, SIZ: 15 },
memo: "身長：184cm\n誕生日：5/17\n好きなもの：ハンバーガー、胡椒\n芸術技能：けん玉、だるま落とし、凧揚げ、竹とんぼ\nモチーフ：ゼウス",
image: "images/suforu.png",
  },
{
    no: "041", name: "オビオリ", age: "？", job: "傀儡", status: "active", statusLabel: "現役",
    quote: "傀儡怪儡", mark: "龍", bg: "#4c8a43",
    profile: "整った顔の傀儡。常に不機嫌そうな表情をしているのは気を張っているから。納得できない命令なら主の命令でも従うつもりは...ない。",
    scenarios: [ "傀儡怪儡(HO3)","往古来今(if)"],
    stats: { STR: 12, CON: 9, POW: 12, DEX: 14, APP: 15, SIZ: 14 },
memo: "身長：175cm\n製造日：不明\n好きなもの：なし\n芸術技能：蹴鞠\nモチーフ：帯織駅",
image: "images/obiori.png",
  },
{
    no: "042", name: "火無月 輪多流/ﾋﾅﾂﾞｷ ﾜﾀﾙ", age: 18, job: "高校生/クォーター", status: "active", statusLabel: "現役",
    quote: "ラプラスのクォーター達", mark: "龍", bg: "#3b52b2",
    profile: "都会名門高校の生徒会長…ではなく、そこそこの高校の生徒会長。とても頭は悪いが、人望の厚さから生徒会長をしている。名家の出身。",
    scenarios: [ "ラプラスのクォーター達"],
    stats: { STR: "？", CON: "？", POW: "？", DEX: "？", APP: 10, SIZ: 12 },
memo: "身長：152cm\n誕生日：3/26\n好きなもの：白米\n芸術技能：法螺貝\nモチーフ：月輪草",
image: "images/wataru.png",
  },
{
    no: "043", name: "トキ", age: 22, job: "怪盗", status: "active", statusLabel: "現役",
    quote: "レプリカントの葬列", mark: "龍", bg: "#ffffff",
    profile: "絶世の美青年。巷を賑わす怪盗で彼にかかればどんな警備だって潜り抜けられる。彼には克服したい苦手が存在する。",
    scenarios: [ "レプリカントの葬列(HO1)","COLOR AUTHORIZE"],
    stats: { STR: 13, CON: 10, POW: 12, DEX: 17, APP: 17, SIZ: 11 },
memo: "身長：172cm\n誕生日：5/22\n好きなもの：カルパッチョ(納豆)\n芸術技能：魅惑、イカサマ\nモチーフ：朱鷺＋朱の盆",
image: "images/roa.png",
  },
{
    no: "044", name: "西船見　千透星/ﾆｼﾌﾅﾐ ﾁﾄｾ", age: "？", job: "暗殺者", status: "active", statusLabel: "現役",
    quote: "サイレン清掃会社", mark: "龍", bg: "#fee4f4",
    profile: "ちょっとメンヘラが入った少女。見た目だけ見たら可愛らしいが、話してみると面倒くさい。気に入った人間はみんな自分のモノであって欲しい。",
    scenarios: [ "サイレン清掃会社(HO4)"],
    stats: { STR: "？", CON: "？", POW: "？", DEX: "？", APP: 12, SIZ: 9 },
memo: "身長：149cm\n誕生日：7/27\n好きなもの：トマトジュース\n芸術技能：不明\nモチーフ：キャノンボールジェリーフィッシュ",
image: "images/titose.png",
  },
{
    no: "045", name: "毒堕 見附/ﾄﾞｸﾀﾞ ﾐﾂｹ", age: 25, job: "刑事", status: "active", statusLabel: "現役",
    quote: "異能警察は英雄じゃない", mark: "龍", bg: "#a7d2cf",
    profile: "いわゆるギャルと呼ばれるタイプの子。学生の頃から良くも悪くも人の目を引く。意外とゲームやアニメに詳しく、負けず嫌い。",
    scenarios: [ "異能警察は英雄じゃない(HO4)"],
    stats: { STR: 14, CON: 11, POW: 17, DEX: 12, APP: 9, SIZ: 11 },
memo: "身長：162cm\n誕生日：8/8\n好きなもの：大学芋\n芸術技能：かぎ編\nモチーフ：ドクダミ＋見附市(地名)",
image: "images/mituke.png",
  },
{
    no: "046", name: "佐渡 立金/ｻﾄﾞ ﾘﾂｷ", age: 27, job: "刑事", status: "active", statusLabel: "現役",
    quote: "快刀乱魔", mark: "龍", bg: "#92e822",
    profile: "適当と軽薄を足して2で割ったものが服を着て歩いてるような男。自分のことをお兄さんと呼称し、よく「お兄ちゃんって呼んでええで」と言っている。たまに本当に呼んでくれる人がいる。",
    scenarios: [ "快刀乱魔(HO3)","お、捨てKPCだ。可哀想に...","花に鳥、風に月"],
    stats: { STR: 13, CON: 10, POW: 11, DEX: 15, APP: 11, SIZ: 13 },
memo: "身長：175cm\n誕生日：4/4\n好きなもの：チュッパチャプス、小判飴\n芸術技能：アクロバット\nモチーフ：リュウキンカ＋佐渡市(地名)+佐渡金山",
image: "images/rituki.png",
  },
{
    no: "047", name: "Tulpan・Sol・Lillehammer/ﾄｩﾙﾊﾟﾝ・Ｓ・ﾘﾚﾊﾝﾒﾙ", age: 25, job: "暗殺者", status: "active", statusLabel: "現役",
    quote: "純潔と鉄血", mark: "龍", bg: "#3a728c",
    profile: "自分のことをイケメンでかわいいと思っているナルシスト。運動が苦手で自分からは行わない。全体的な評価は「残念な美人」で終わる。",
    scenarios: [ "純潔と鉄血(HO1)"],
    stats: { STR: 6, CON: 12, POW: 15, DEX: 13, APP: 14, SIZ: 15 },
memo: "身長：181cm\n誕生日：2/16\n好きなもの：シチュー\n芸術技能：決めポーズ\nモチーフ：リレハンメル市(地名)＋太陽",
image: "images/tu-ru.png",
  },
{
    no: "048", name: "逆藪 中鳥/ｻｶﾔﾌﾞ ﾅｶﾄ", age: 24, job: "ガラス工芸家", status: "active", statusLabel: "現役",
    quote: "藍はやがて朱となりて", mark: "龍", bg: "#c6af25",
    profile: "何か考えてるのか、それとも何も考えていないのかすらよく分からない。聞いてもよく分からないことや曖昧な返事を返す。しかしきのこの山にはとんでもないほどの敵意を持っている。",
    scenarios: [ "藍はやがて朱となりて"],
    stats: { STR: 11, CON: 13, POW: 12, DEX: 15, APP: 9, SIZ: 16 },
memo: "身長：188cm\n誕生日：1/4\n好きなもの：たけのこ（の里）\n芸術技能：ハーモニカ\nモチーフ：藪の中(芥川龍之介)＋ヤブドリ",
image: "images/nakato.png",
  },
{
    no: "049", name: "西山 香鰊/ﾆｼﾔﾏ ｶﾚﾝ", age: "？", job: "???", status: "active", statusLabel: "現役",
    quote: "灰になってよかった", mark: "龍", bg: "#2998eb",
    profile: "自分が可愛いことに絶対的な自信のある女の子。自分を愛でない男と自分よりかわいい女が嫌いなお嬢様。常に絶対的なかわいさと不死を求めている。",
    scenarios: [ "灰になってよかった"],
    stats: { STR: 10, CON: 12, POW: 14, DEX: 8, APP: 14, SIZ: 9 },
memo: "身長：152cm\n誕生日：9/2\n好きなもの：紅茶とクッキー\n芸術技能：ヴァイオリン\nモチーフ：西山(地名)＋ニシン",
image: "images/karen.png",
  },
{
    no: "050", name: "瞽女 六三/ｺﾞｾﾞ ﾛｸｿﾞｳ", age: 32, job: "修行僧", status: "lost", statusLabel: "ロスト",
    quote: "裏裏裏裏", mark: "龍", bg: "#3a4560",
    profile: "謎の修行僧。視力が悪い。普段何をして生きているのかよく分からない。下手な三味線をかき鳴らしてはよく森や山を散歩している。たまに都心でも出没する。",
    scenarios: [ "裏裏裏裏(クギアルバイト)"],
    stats: { STR: 14, CON: 15, POW: 18, DEX: 12, APP: 9, SIZ: 11 },
memo: "身長：169cm\n誕生日：6/3\n好きなもの：きのこ類\n芸術技能：三味線\nモチーフ：瞽女+夢十夜/第三夜(夏目漱石)",
image: "images/rokuzo.png",
  },
{
    no: "051", name: "六運 慶仁/ﾛｸｳﾝ ｹｲｼﾞ", age: 27, job: "宮大工", status: "lost", statusLabel: "ロスト",
    quote: "裏裏裏裏", mark: "龍", bg: "#795548",
    profile: "ダルがってる宮大工。おそらく歴戦の探索者。錫杖は戦闘にいいから持ってる。",
    scenarios: [ "裏裏裏裏(クギアルバイト)"],
    stats: { STR: 13, CON: 10, POW: 18, DEX: 13, APP: 8, SIZ: 13 },
memo: "身長：174cm\n誕生日：8/6\n好きなもの：カロリーメイト\n芸術技能：木彫り\nモチーフ：夢十夜/第六夜(夏目漱石)",
image: "images/rokuun.png",
  },
{
    no: "052", name: "古志長 鷲井/ｺｼﾅｶﾞ ｼｭｳｾｲ", age: 34, job: "消防士(B'ASH)", status: "active", statusLabel: "現役",
    quote: "B'ASH ", mark: "龍", bg: "#932022",
    profile: "真面目で堅物なリーダー。仕事においては真剣なためちゃんとしているが、私生活はだらしない。お酒が好き。",
    scenarios: [ "B'ASH(HO1)","食パンの大神とアルワッサンの襲来","ひろくてせまい宇宙","AND/HAND　など"],
    stats: { STR: 20, CON: 14, POW: 11, DEX: 11, APP: 6, SIZ: 17 },
memo: "身長：193cm\n誕生日：8/3\n好きなもの：日本酒、唐辛子\n芸術技能：釣り\nモチーフ：長岡花火＋古志長尾家",
image: "images/kosinaga.png",
  },
{
    no: "053", name: "鳥原 常月/ﾄｯﾊﾟﾗ ﾄﾂｷ", age: 16, job: "高校生/イヤサカ隊員", status: "active", statusLabel: "現役",
    quote: "新約・コトリバコ ", mark: "龍", bg: "#116414",
    profile: "武芸の天才でバトルジャンキー。伊賀流忍術を使う鳥原家の2番子。表向きは少し大きな家だが、裏では忍術を途絶えさせないようにと仕込まれている。",
    scenarios: [ "新約・コトリバコ"],
    stats: { 身体: 6, 器用: 1, 精神: 6, 五感: 2, 知力: 6, 運勢: 4 },
memo: "身長：155cm\n誕生日：10/12\n好きなもの：まぜそば\n芸術技能：なし\nモチーフ：月輪草＋鳥原(地名)＋ジョウビタキ",
image: "images/totuki.png",
  },
{
    no: "054", name: "Baraka/ﾊﾞﾗｶ", age: 19, job: "騎士", status: "active", statusLabel: "現役",
    quote: "アルフ・ライラ・ワ・ライラは語らない ", mark: "龍", bg: "#783864",
    profile: "大変人相の悪い騎士。賊と勘違いされたことがあるほど見た目の印象は良くない。見た目とは逆に性格は気前のいい兄ちゃん。",
    scenarios: [ "アルフ・ライラ・ワ・ライラは語らない","welcome to another world!!","Break And Note Glitch!"],
    stats: { STR: 15, CON: 14, POW: 10, DEX: 18, APP: 7, SIZ: 15 },
memo: "身長：182cm\n誕生日：9/6\n好きなもの：カブサ\n芸術技能：\子守歌\nモチーフ：吉祥草＋カラス＋蛇",
image: "images/baraka.png",
  }
];

let currentFilter = "all";
let currentSearch = "";

const gallery = document.getElementById("gallery");
const search = document.getElementById("search");
const dialog = document.getElementById("detailDialog");
const detail = document.getElementById("detail");

function filtered() {
  return investigators.filter(p => {
    const matchFilter = currentFilter === "all" || p.status === currentFilter;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q || `${p.name} ${p.job} ${p.age}`.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });
}

function render() {
  const people = filtered();
  document.getElementById("result-count").textContent = `${people.length} 名の探索者`;
  gallery.innerHTML = people.length ? people.map(p => `
    <button class="card" data-no="${p.no}">
     <div class="portrait" style="--card-bg:${p.bg}">
  <img src="${p.image}" alt="${p.name}">
  <span class="status">${p.statusLabel}</span>
</div>
      <div class="card-body">
        <span class="no">No.${p.no}</span>
        <h2>${p.name}</h2>
        <p class="meta">${p.age}歳 ／ ${p.job}</p>
        <p class="quote">${p.quote}</p>
      </div>
    </button>
  `).join("") : `<div class="empty">該当する探索者がいません。</div>`;

  document.querySelectorAll(".card").forEach(card =>
    card.addEventListener("click", () => openDetail(card.dataset.no))
  );
}

function openDetail(no) {
  const p = investigators.find(x => x.no === no);
  detail.innerHTML = `
   <div class="detail-head" style="--detail-bg:${p.bg}">
  <img class="detail-image" src="${p.image}" alt="${p.name}">
  <div class="detail-title">
        <p>No.${p.no}　${p.statusLabel}</p>
        <h2>${p.name}</h2>
        <p>${p.age}歳 ／ ${p.job}</p>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-grid">
        <section class="detail-section">
          <h3>PROFILE</h3>
          <p>${p.profile}</p>
        </section>
        <section class="detail-section">
          <h3>ABILITY</h3>
          <div class="stats">
            ${Object.entries(p.stats).map(([k,v]) => `<div class="stat"><b>${k}</b><span>${v}</span></div>`).join("")}
          </div>
        </section>
        <section class="detail-section">
          <h3>SCENARIO LOG</h3>
          <ul>${p.scenarios.map(s => `<li>${s}</li>`).join("")}</ul>
        </section>
        <section class="detail-section">
          <h3>MEMO</h3>
         <p style="white-space: pre-line;">${p.memo}</p>
        </section>
      </div>
    </div>`;
  dialog.showModal();
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === button));
    render();
  });
});

search.addEventListener("input", e => {
  currentSearch = e.target.value.trim();
  render();
});

document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => {
  if (e.target === dialog) dialog.close();
});

["all", "active", "lost", "kpc"].forEach(type => {
  const n = type === "all" ? investigators.length : investigators.filter(p => p.status === type).length;
  document.getElementById(`count-${type}`).textContent = `(${n})`;
});

render();

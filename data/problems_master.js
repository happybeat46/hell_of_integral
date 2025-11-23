export const PROBLEMS = [
  {
  id: 1,
    genre: "多項式関数編",
    problem:
      "\\int x(2-x)^7 \\, dx",
    policy:
      "1次置換",
    answer:
      "-" + "\\dfrac{1}{36}(4x + 1)(2 - x)^8 + C",
    explanation:
      "\\(2 - x = t\\) とすると，\\(\\dfrac{dx}{dt} = -1\\)。"
      + "\\[\\int x(2-x)^7\\,dx = \\int (t - 2)t^7\\,dt = \\dfrac{1}{9}t^9 - \\dfrac{1}{4}t^8 + C = \\dfrac{1}{36}t^8(4t - 9) + C = -\\dfrac{1}{36}(4x + 1)(2 - x)^8 + C\\]"
      + "展開したくないカッコは中身を置換することで展開の手間が最小限で済む。"
      + "<br>【別解】"
      + "\\[\\int x(2 - x)^7\\,dx = -\\dfrac{1}{8}x(2 - x)^8 + \\dfrac{1}{8}\\int (2 - x)^8\\,dx = -\\dfrac{1}{8}x(2 - x)^8 - \\dfrac{1}{72}(2 - x)^9 + C\\]"
      + "\\[= -\\dfrac{1}{72}(2 - x)^8(9x + 2 - x) + C = -\\dfrac{1}{36}(2 - x)^8(4x + 1) + C\\]"
      + "\\(x\\) が掛け算されているのであれば，部分積分するのもラク。",
    check: true
  },
    {
    id: 2,
    genre: "多項式関数編",
    problem:
      "\\int \\frac{\\sqrt{x+1}-1}{\\sqrt{x+1}+1} \\, dx",
    policy:
      "有理化",
    answer:
      "x + 2\\log|x| - 4\\sqrt{x+1} - 2\\log\\left|\\frac{\\sqrt{x+1}-1}{\\sqrt{x+1}+1}\\right| + C",
    explanation:
      "\\[\\int \\frac{\\sqrt{x+1}-1}{\\sqrt{x+1}+1}\\,dx"
      + " = \\int \\frac{(\\sqrt{x+1}-1)^2}{x}\\,dx"
      + " = \\int \\frac{(x+2) - 2\\sqrt{x+1}}{x}\\,dx"
      + " = \\int\\!\\left(1 + \\frac{2}{x} - \\frac{2\\sqrt{x+1}}{x}\\right)dx"
      + " = x + 2\\log|x| - 2\\int \\frac{\\sqrt{x+1}}{x}\\,dx\\]"
      + "\\(t=\\sqrt{x+1}\\) とすると、\\(t^2=x+1\\)、\\(\\dfrac{dx}{dt}=2t\\)\\"
      + "\\[\\int \\frac{\\sqrt{x+1}}{x}\\,dx"
      + " = \\int \\frac{t}{t^2-1}\\cdot 2t\\,dt"
      + " = 2\\int \\frac{t^2}{t^2-1}\\,dt"
      + " = 2\\int\\!\\left(1 + \\frac{1}{t^2-1}\\right)dt"
      + " = 2t + \\log\\left|\\frac{t-1}{t+1}\\right| + C_1\\]"
      + "\\[\\therefore "
      + "\\int \\frac{\\sqrt{x+1}-1}{\\sqrt{x+1}+1}\\,dx"
      + " = x + 2\\log|x| - 4t - 2\\log\\left|\\frac{t-1}{t+1}\\right| + C"
      + " = x + 2\\log|x| - 4\\sqrt{x+1} - 2\\log\\left|\\frac{\\sqrt{x+1}-1}{\\sqrt{x+1}+1}\\right| + C\\]"
      + "非常に手間の多い計算問題。まず有理化し，展開し，分割し，置換し，部分分数分解するといった，"
      + "積分の計算の面倒なものがすべて詰まった問題なので，これは一度一気にで解けるように練習しておきたい。"
      + "なお，\\(\\sqrt{\\phantom{x}}\\) がついている部分だけを置換すればよい。",
    check: true
  },
  {
    id: 3,
    genre: "多項式関数編",
    problem:
      "\\int \\frac{x^3 + 2x}{x^2 - 1} \\, dx",
    policy:
      "帯分数化",
    answer:
      "\\dfrac{1}{2}x^2 + \\dfrac{3}{2}\\log|x^2 - 1| + C",
    explanation:
      "\\[\\int \\frac{x^3 + 2x}{x^2 - 1}\\,dx"
      + " = \\int\\!\\left( x + \\frac{\\boxed{3x}}{x^2 - 1} \\right)dx"
      + " = \\dfrac{1}{2}x^2 + \\dfrac{3}{2}\\log|x^2 - 1| + C\\]"
      + "帯分数化すれば簡単に積分できる。後半は分母が因数分解できるが，"
      + "それよりも \\(\\dfrac{3x}{x^2-1}\\) が微分がはみでた形であることに気付けるようにすること。",
    check: true
  },
  {
    id: 4,
    genre: "多項式関数編",
    problem:
      "\\int \\frac{x - 8}{x^2 - 7x + 10} \\, dx",
    policy:
      "部分分数分解",
    answer:
      "2\\log|x - 2| - \\log|x - 5| + C",
    explanation:
      "\\[\\int \\frac{x-8}{x^2 - 7x + 10}\\,dx"
      + " = \\int \\frac{x-8}{(x-2)(x-5)}\\,dx"
      + " = \\int\\!\\left( \\frac{2}{x-2} - \\frac{1}{x-5} \\right)dx"
      + " = 2\\log|x-2| - \\log|x-5| + C\\]"
      + "分母が因数分解できる場合は部分分数分解で処理する。",
    check: true
  },
  {
    id: 5,
    genre: "多項式関数編",
    problem:
      "\\int \\frac{2x}{x^4 - 1} \\, dx",
    policy:
      "部分分数分解",
    answer:
      "\\dfrac{1}{2}\\log\\left|\\frac{x^2 - 1}{x^2 + 1}\\right| + C",
    explanation:
      "\\[\\int \\frac{2x}{x^4 - 1}\\,dx"
      + " = \\int \\frac{2x}{(x^2-1)(x^2+1)}\\,dx"
      + " = \\dfrac{1}{2}\\int\\!\\left( \\frac{1}{x^2 - 1} - \\frac{1}{x^2 + 1} \\right) \\boxed{2x}\\,dx\\]"
      + "\\[= \\dfrac{1}{2}\\log|x^2 - 1| - \\dfrac{1}{2}\\log(x^2 + 1) + C"
      + " = \\dfrac{1}{2}\\log\\left|\\frac{x^2 - 1}{x^2 + 1}\\right| + C\\]"
      + "\\(x^4 - 1 = (x+1)(x-1)(x^2+1)\\) と因数分解できるので，"
      + " \\(\\dfrac{A}{x+1} + \\dfrac{B}{x-1} + \\dfrac{Cx + D}{x^2 + 1}\\) という部分分数分解を処理しても良いが，"
      + "それよりも \\(x^2\\) の微分がはみ出ていると考え，\\(x^2\\) で固めてしまう方法がよい。"
      + "上の解答では置換しなかったが，わかりづらければ \\(t = x^2\\) と置換するとよい。",
    check: true
  },
  {
    id: 6,
    genre: "多項式関数編",
    problem:
      "\\int x\\sqrt{x^2 + 1} \\, dx",
    policy:
      "微分はみだし",
    answer:
      "\\dfrac{1}{3}(x^2 + 1)\\sqrt{x^2 + 1} + C",
    explanation:
      "\\[\\int \\boxed{x}\\sqrt{x^2 + 1}\\,dx"
      + " = \\dfrac{1}{3}(x^2 + 1)\\sqrt{x^2 + 1} + C\\]"
      + "微分がはみでていることには最優先で気づけるようにすること。",
    check: true
  },
    {
    id: 7,
    genre: "多項式関数編",
    problem:
      "\\int_{0}^{\\tfrac{1}{2}} \\frac{1}{\\sqrt{1-x^2}}\\,dx",
    policy:
      "\\(\\sin\\theta\\) で置換",
    answer:
      "\\dfrac{\\pi}{6}",
    explanation:
      "\\(x = \\sin\\theta\\) とすると、\\(\\dfrac{dx}{d\\theta} = \\cos\\theta\\)、\\(x:0 \\to \\dfrac{1}{2}\\) のとき、\\(\\theta:0 \\to \\dfrac{\\pi}{6}\\)"
      + "\\[\\int_0^{\\tfrac{1}{2}} \\frac{1}{\\sqrt{1-x^2}} dx = \\int_0^{\\tfrac{\\pi}{6}} \\frac{1}{\\sqrt{1-\\sin^2\\theta}} \\cos\\theta \\, d\\theta = \\int_0^{\\tfrac{\\pi}{6}} \\frac{\\cos\\theta}{|\\cos\\theta|} d\\theta = \\int_0^{\\tfrac{\\pi}{6}} d\\theta \\left(\\because 0 \\le \\theta \\le \\frac{\\pi}{6}\\right) = \\frac{\\pi}{6}\\]"
      + "\\(\\sqrt{1-x^2} \\)を含む積分は、\\(x = \\sin\\theta\\) と置換するのが鉄則であり、これ以外で処理できない。"
      + "このように置換すると \\(\\sqrt{1-x^2} = \\sqrt{\\cos^2 x} = |\\cos\\theta|\\) のように絶対値が発生する。"
      + "よって、積分区間によっては場合分けが発生してしまうので、細心の注意を払うこと。",
    check: true
  },

  {
    id: 8,
    genre: "多項式関数編",
    problem:
      "\\int_{0}^{\\tfrac{1}{2}} \\frac{x}{\\sqrt{1-x^2}}\\,dx",
    policy:
      "微分はみだし",
    answer:
      "1-\\dfrac{\\sqrt{3}}{2}",
    explanation:
      "\\[\\int_{0}^{\\tfrac{1}{2}} \\frac{\\boxed{x}}{\\sqrt{1-x^2}}dx"
      + " = \\bigl[-\\sqrt{1-x^2}\\bigr]_{0}^{\\tfrac{1}{2}}"
      + " = 1 - \\frac{\\sqrt{3}}{2}\\]"
      + "微分がはみでた形になるので，瞬殺で積分が可能。符号に注意。",
    check: true
  },

  {
    id: 9,
    genre: "多項式関数編",
    problem:
      "\\int_{0}^{1} \\sqrt{x(2-x)}\\,dx",
    policy:
      "平方完成して\\(\\sin\\theta\\)で置換",
    answer:
      "\\dfrac{\\pi}{4}",
    explanation:
      "\\[\\int_0^1 \\sqrt{x(2-x)} \\, dx = \\int_0^1 \\sqrt{-x^2 + 2x} \\, dx = \\int_0^1 \\sqrt{1-(x-1)^2} \\, dx\\]"
      + "\\(x-1 = \\sin\\theta \\text{ とすると、} \\dfrac{dx}{d\\theta} = \\cos\\theta \\text{、} x:0 \\to 1 \\text{ のとき } \\theta:-\\dfrac{\\pi}{2} \\to 0\\)"
      + "\\[\\int_0^1 \\sqrt{1-(x-1)^2} \\, dx = \\int_{-\\tfrac{\\pi}{2}}^0 \\sqrt{1-\\sin^2\\theta} \\cos\\theta \\, d\\theta = \\int_{-\\tfrac{\\pi}{2}}^0 |\\cos\\theta| \\cos\\theta \\, d\\theta\\]"
      + "\\[= \\int_{-\\tfrac{\\pi}{2}}^0 \\cos^2\\theta \\, d\\theta \\left(\\because -\\frac{\\pi}{2} \\le \\theta \\le 0\\right) = \\int_{-\\tfrac{\\pi}{2}}^0 \\frac{1+\\cos2\\theta}{2} d\\theta = \\left[\\frac{1}{2}\\theta + \\frac{1}{4}\\sin2\\theta\\right]_{-\\tfrac{\\pi}{2}}^0 = \\frac{\\pi}{4}\\]"
      + "\\(\\sqrt{x^2の係数が負の2次式} \\) を含む場合は、平方完成して \\(\\sin\\theta\\) に置換する。"
      + "絶対値の処理に注意。なお、円の一部と考えて図を書き、該当する面積を求めた方が早い。",
    check: true
  },

  {
    id: 10,
    genre: "多項式関数編",
    problem:
      "\\int_{0}^{1} \\frac{1}{3+x^2}\\,dx",
    policy:
      "tan\\,\\theta で置換",
    answer:
      "\\dfrac{\\pi}{6\\sqrt{3}}",
    explanation:
      "\\(x = \\sqrt{3}\\tan\\theta \\text{ とすると、} \\dfrac{dx}{d\\theta} = \\dfrac{\\sqrt{3}}{\\cos^2\\theta}\\text{、} x:0 \\to 1 \\text{ のとき } \\theta:0 \\to \\dfrac{\\pi}{6}\\)"
      + "\\[\\int_0^1 \\frac{1}{3+x^2}dx = \\int_0^{\\tfrac{\\pi}{6}} \\frac{1}{3(1+\\tan^2\\theta)} \\cdot \\frac{\\sqrt{3}}{\\cos^2\\theta}d\\theta = \\frac{1}{\\sqrt{3}} \\int_0^{\\tfrac{\\pi}{6}} d\\theta = \\frac{\\pi}{6\\sqrt{3}}\\]"
      + "分母が因数分解不能な2次式である場合、\\(\\tan\\theta\\) で置換することで、"
      + "\\(1+\\tan^2\\theta = \\dfrac{1}{\\cos^2\\theta}\\) を作ることができる。さらに \\((\\tan\\theta)' = \\dfrac{1}{\\cos^2\\theta}\\) なので、"
      + "約分出来たり \\(\\cos\\theta\\) だけの積分になったり、積分できる形になることが多い。",
    check: true
  },

  {
    id: 11,
    genre: "多項式関数編",
    problem:
      "\\int_{0}^{1} \\frac{1}{x^2+x+1}\\,dx",
    policy:
      "平方完成 \\; / \\; tan\\,\\theta で置換",
    answer:
      "\\dfrac{\\pi}{3\\sqrt{3}}",
    explanation:
      "\\[\\int_0^1 \\frac{1}{x^2 + x + 1}dx = \\int_0^1 \\frac{1}{\\left(x+\\tfrac{1}{2}\\right)^2 + \\tfrac{3}{4}}dx\\]"
      + "\\(x + \\dfrac{1}{2} = \\dfrac{\\sqrt{3}}{2}\\tan\\theta \\text{ とすると、} \\dfrac{dx}{d\\theta} = \\dfrac{\\sqrt{3}}{2\\cos^2\\theta}\\text{、} x:0 \\to 1 \\text{ のとき } \\theta:\\dfrac{\\pi}{6} \\to \\dfrac{\\pi}{3}\\)"
      + "\\[\\int_0^1 \\frac{1}{\\left(x+\\tfrac{1}{2}\\right)^2 + \\tfrac{3}{4}}dx = \\int_{\\tfrac{\\pi}{6}}^{\\tfrac{\\pi}{3}} \\frac{1}{\\tfrac{3}{4}(1+\\tan^2\\theta)} \\cdot \\frac{\\sqrt{3}}{2\\cos^2\\theta}d\\theta = \\frac{2}{\\sqrt{3}} \\int_{\\tfrac{\\pi}{6}}^{\\tfrac{\\pi}{3}} d\\theta = \\frac{\\pi}{3\\sqrt{3}}\\]"
      + "上の問題と同様。平方完成して \\(\\tan\\theta\\) と置く。\\(1+\\tan^2\\theta\\) と置いたときに余りが出ないように係数は調整する必要がある。",
    check: true
  },

  {
    id: 12,
    genre: "多項式関数編",
    problem:
      "\\int_{0}^{1} \\frac{2x+1}{\\sqrt{4-x^2}}\\,dx",
    policy:
      "分割 \\; / \\; sin\\,\\theta で置換",
    answer:
      "4-2\\sqrt{3}+\\dfrac{\\pi}{6}",
    explanation:
      "\\[\\int_0^1 \\frac{2x + 1}{\\sqrt{4-x^2}} dx = \\int_0^1 \\frac{\\boxed{2x}}{\\sqrt{4-x^2}}dx + \\int_0^1 \\frac{1}{\\sqrt{4-x^2}}dx\\]"
      + "\\(x = 2\\sin\\theta \\text{ とすると、} \\dfrac{dx}{d\\theta} = 2\\cos\\theta \\text{、} x:0 \\to 1 \\text{ のとき } \\theta:0 \\to \\dfrac{\\pi}{6}\\)"
      + "\\[=\\left[-2\\sqrt{4-x^2}\\right]_0^1 + \\int_0^{\\tfrac{\\pi}{6}} \\dfrac{1}{\\sqrt{4(1-\\sin^2\\theta)}} \\cdot 2\\cos\\theta \\, d\\theta\\]"
      + "\\[=4-2\\sqrt{3} + \\int_0^{\\tfrac{\\pi}{6}} \\frac{1}{2\\cos\\theta} \\cdot 2\\cos\\theta \\, d\\theta \\quad (\\because 0 \\le \\theta \\le \\dfrac{\\pi}{6} \\text{ より } |\\cos\\theta| = \\cos\\theta)\\]"
      + "\\[=4-2\\sqrt{3} + \\int_0^{\\tfrac{\\pi}{6}} d\\theta = 4-2\\sqrt{3} + \\frac{\\pi}{6}\\]"
      + "被積分関数が分数になっており、分子が和になっている時、分母の微分になっている部分とそうでない部分で分割することが非常に多い。前半部分はそのまま積分することができる。そうでない後半部分に関しては、様々な工夫を行う必要があるが、今回は \\(\\sqrt{x^2 の係数が負である2次式}\\)が分母となっているので、\\(\\sin\\theta\\) で置換する。係数の調整も忘れないように。",
    check: true
  },
  {
  "id": 13,
  "genre": "多項式関数",
  "problem": "\\\\int_a^b (x-a)(x-b)^2 \\\\, dx",
  "policy": "部分積分",
  "answer": "\\\\dfrac{1}{12}(b-a)^4",
  "explanation":
    "\\[\\\\int_a^b (x-a)(x-b)^2\\\\,dx = \\\\left[\\\\dfrac{1}{3}(x-a)(x-b)^3\\\\right]_a^b - \\\\dfrac{1}{3}\\\\int_a^b (x-b)^3\\\\,dx = 0 - \\\\dfrac{1}{3}\\\\left[\\\\dfrac{1}{4}(x-b)^4\\\\right]_a^b = -\\\\dfrac{1}{12}(0 - (a-b)^4) = \\\\dfrac{1}{12}(a-b)^4\\]"
    + "【解説】"
    + "積分範囲のどちらを入れても\\\\(0\\\\)になるような多項式関数は、次数の少ない方を微分し、\\\\(0\\\\)になるところまで部分積分することで簡単になる。なぜなら、部分積分の代入部分も、必ず\\\\(0\\\\)になるからである(前半部分)。解答とは符号が逆になっているが、普通は(上端) - (下端)の形にする。",
  "check": true
},
{
  "id": 14,
  "genre": "多項式関数編",
  "problem": "\\\\int_0^{\\\\tfrac{\\\\sqrt{3}}{2}} (x + 4x^3)\\\\sqrt{1 + 4x^2} \\\\, dx",
  "policy": "微分はみだし",
  "answer": "\\\\dfrac{31}{20}",
  "explanation":
    "\\[ \\int_0^{\\tfrac{\\sqrt{3}}{2}}(x+4x^3)\\sqrt{1+4x^2}dx= \\\\int_0^{\\\\tfrac{\\\\sqrt{3}}{2}} \\\\boxed{x}(1 + 4x^2)^{\\\\frac{3}{2}}\\\\,dx = \\\\dfrac{1}{8}\\\\left[\\dfrac{2}{5}(1 + 4x^2)^{\\\\frac{5}{2}}\\\\right]_0^{\\\\tfrac{\\\\sqrt{3}}{2}} = \\\\dfrac{8}{5} - \\\\dfrac{1}{20} = \\\\dfrac{31}{20}\\]"
    + "【解説】"
    + "よく見れば\\\\(1 + 4x^2\\\\)の塊を作ることができ、しかも微分がくっついているということがわかる。これがすぐ見抜けるようになれば、積分の能力が身についている証拠である。",
  "check": true
},{
  "id": 15,
  "genre": "多項式関数編",
  "problem": "\\\\int x\\\\sqrt{1-x}\\\\,dx",
  "policy": "部分積分,または\\(\\sqrt{1-x}\\)丸ごと置換",
  "answer": "-\\\\dfrac{2}{15}(1-x)(3x + 2)\\\\sqrt{1-x} + C",
  "explanation":
    "\\[\\\\int x\\\\sqrt{1-x}\\\\,dx = -\\\\dfrac{2}{3}x(1-x)^{\\\\frac{3}{2}} + \\\\dfrac{2}{3}\\\\int (1-x)^{\\\\frac{3}{2}}\\\\,dx = -\\\\dfrac{2}{3}x(1-x)^{\\\\frac{3}{2}} + \\\\dfrac{2}{3}\\\\cdot ( - \\\\dfrac{2}{5}(1-x)^{\\\\frac{5}{2}}) + C\\]"
    + "\\[= -\\\\dfrac{2}{3}x(1-x)^{\\\\frac{3}{2}} - \\\\dfrac{4}{15}(1-x)^{\\\\frac{5}{2}} + C\\]"
    + "\\[= -\\\\dfrac{2}{15}(1-x)^{\\\\frac{3}{2}}\\\\{5x + 2(1-x)\\\\} + C = -\\\\dfrac{2}{15}(1-x)(3x + 2)\\\\sqrt{1-x} + C\\]"
    + "【解説】被積分関数に\\\\(x\\\\)が掛け算されている多項式は、部分積分がうまく行くことが多い。\\\\(x\\\\)を微分するために、もう一方を積分する。部分積分のせいで2回積分しなければならないので、\\\\(\\sqrt{1-x}\\\\)の形が公式を使わず、\\\\((1-x)^{\\\\frac{1}{2}}\\\\)にしておく。"
    + "<br>【別解】"
    + "\\\\(t=\\\\sqrt{1-x}\\\\)とすると、\\\\(t^2=1-x\\\\)、\\\\(\\dfrac{dx}{dt}=-2t\\\\)"
    + "\\[\\\\int x\\\\sqrt{1-x}\\\\,dx = \\\\int (1-t^2)t(-2t)\\\\,dt = 2\\\\int (t^4 - t^2)\\\\,dt = 2\\\\left(\\dfrac{t^5}{5} - \\\\dfrac{t^3}{3}\\\\right) + C\\]"
    + "\\[= \\\\dfrac{2}{15}t^3(3t^2 - 5) + C = -\\\\dfrac{2}{15}(1-x)(3x + 2)\\\\sqrt{1-x} + C\\]"
    + "【解説】\\\\( \\sqrt{1次式} \\\\)は丸ごと置換するとうまく行く。元に戻す前に共通因数でくくり出しておくこと。",
  "check": true
},{
  "id": 16,
  "genre": "多項式関数編",
  "problem": "\\\\int_0^{\\\\tfrac{1}{2}} \\\\sqrt{1 - x^2}\\\\,dx",
  "policy": "\\\\sin\\\\theta \\\\text{で置換 } / \\\\text{円の面積}",
  "answer": "\\\\dfrac{\\\\pi}{12} + \\\\dfrac{\\\\sqrt{3}}{8}",
  "explanation":
    "\\\\(x = \\\\sin\\\\theta \\\\text{ とすると、} \\\\dfrac{dx}{d\\\\theta} = \\\\cos\\\\theta \\\\text{、} x:0 \\to \\\\dfrac{1}{2} \\\\text{ のとき、} \\\\theta:0 \\to \\\\dfrac{\\\\pi}{6}\\\\)"
    + "\\[\\\\int_0^{\\\\tfrac{1}{2}} \\\\sqrt{1 - x^2}\\\\,dx = \\\\int_0^{\\\\tfrac{\\\\pi}{6}} |\\\\cos\\\\theta| \\\\cos\\\\theta \\\\, d\\\\theta = \\\\int_0^{\\\\tfrac{\\\\pi}{6}} \\\\cos^2\\\\theta \\\\, d\\\\theta \\quad (\\because 0 \\le \\\\theta \\le \\\\dfrac{\\\\pi}{6})\\]"
    + "\\[= \\\\int_0^{\\\\tfrac{\\\\pi}{6}} \\\\dfrac{1 + \\\\cos2\\\\theta}{2} \\\\, d\\\\theta = \\\\left[\\\\dfrac{1}{2}\\\\theta + \\\\dfrac{1}{4}\\\\sin2\\\\theta\\\\right]_0^{\\\\tfrac{\\\\pi}{6}} = \\\\dfrac{\\\\pi}{12} + \\\\dfrac{\\\\sqrt{3}}{8}\\]"
    + "\\\\(\\sqrt{1-x^2}\\\\)の形は\\\\(x = \\\\sin\\\\theta\\\\)と置換するのが定石。"
    + "<br>【別解】\\\\(y = \\\\sqrt{1-x^2}\\\\)とすると、\\\\(x^2 + y^2 = 1\\\\)で、被積分関数は原点中心、半径\\\\(1\\\\)の円の\\\\(y \\ge 0\\\\)の部分なので、"
    + "\\[\\\\int_0^{\\\\tfrac{1}{2}} \\\\sqrt{1-x^2}\\\\,dx = \\\\dfrac{\\\\pi}{12} + \\\\dfrac{\\\\sqrt{3}}{8}\\]"
    + "\\\\(\\sqrt{1-x^2}\\\\)だけの積分は円の面積の一部を表すので、図を書く方が早い。",
  "check": true
},{
  "id": 17,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{1}{x^2 + x}\\\\,dx",
  "policy": "部分分数分解",
  "answer": "\\\\log\\\\left|\\\\dfrac{x}{x + 1}\\\\right| + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{1}{x^2 + x}\\\\,dx = \\\\int \\\\dfrac{1}{x(x+1)}\\\\,dx = \\\\int \\\\left(\\\\dfrac{1}{x} - \\\\dfrac{1}{x+1}\\\\right)\\\\,dx = \\\\log|x| - \\\\log|x + 1| + C = \\\\log\\\\left|\\\\dfrac{x}{x + 1}\\\\right| + C\\]"
    + "【解説】分母が因数分解可能な時は、部分分数分解を実行する。",
  "check": true
},{
  "id": 18,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{x}{x^2 + 1}\\\\,dx",
  "policy": "微分はみだし",
  "answer": "\\\\dfrac{1}{2}\\\\log(x^2 + 1) + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{\\\\boxed{x}}{x^2 + 1}\\\\,dx = \\\\dfrac{1}{2}\\\\log(x^2 + 1) + C\\]"
    + "【解説】最優先で微分がはみ出していないかを確認する。今回は分母がそもそも因数分解できないのでわかりやすい。\\\\(\\tan\\\\theta\\\\)などと置換しないように。",
  "check": true
},{
  "id": 19,
  "genre": "多項式関数編",
  "problem": "\\\\int_{-1}^{1} \\\\dfrac{1}{x^2 + 1}\\\\,dx",
  "policy": "\\(\\tan\\theta\\)で置換",
  "answer": "\\\\dfrac{\\\\pi}{2}",
  "explanation":
    "偶関数であることと、\\\\(x = \\\\tan\\\\theta\\\\)とすると、\\\\(\\dfrac{dx}{d\\\\theta} = \\\\dfrac{1}{\\\\cos^2\\\\theta}\\\\text{、} x:0 \\to 1 \\\\text{ のとき、} \\\\theta:0 \\to \\\\dfrac{\\\\pi}{4}\\\\text{より、}\\\\)"
    + "\\[\\\\int_{-1}^{1} \\\\dfrac{1}{x^2 + 1}\\\\,dx = 2\\\\int_0^1 \\\\dfrac{1}{x^2 + 1}\\\\,dx = 2\\\\int_0^{\\\\tfrac{\\\\pi}{4}} \\\\dfrac{1}{\\\\tan^2\\\\theta + 1} \\\\cdot \\\\dfrac{1}{\\\\cos^2\\\\theta}\\\\,d\\\\theta = 2\\\\int_0^{\\\\tfrac{\\\\pi}{4}} \\\\dfrac{\\\\cos^2\\\\theta}{\\\\cos^2\\\\theta}\\\\,d\\\\theta = 2\\\\int_0^{\\\\tfrac{\\\\pi}{4}} d\\\\theta = \\\\dfrac{\\\\pi}{2}\\]"
    + "【解説】\\\\( \\\\dfrac{定数}{x^2 + A^2} \\\\)の形の積分は、\\\\(x = A \\\\tan\\\\theta\\\\)で置換しないと積分不可。必ず覚えておくこと。",
  "check": true
},{
  "id": 20,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{x^2}{1 - x}\\\\,dx",
  "policy": "帯分数化",
  "answer": "-\\\\dfrac{x^2}{2} - x - \\\\log|1 - x| + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{x^2}{1 - x}\\\\,dx = \\\\int \\\\left\\{-(1 + x) + \\\\dfrac{1}{1 - x}\\\\right\\}\\\\,dx = -\\\\dfrac{x^2}{2} - x - \\\\log|1 - x| + C\\]"
    + "【解説】(分子の次数) \\\\(\\ge \\\\)(分母の次数)の時は、まず帯分数にする。（分数でない部分は簡単に積分できる）",
  "check": true
},{
  "id": 21,
  "genre": "多項式関数編",
  "problem": "\\\\int_0^{\\\\tfrac{1}{2}} \\\\dfrac{1}{1 - x^2}\\\\,dx",
  "policy": "部分分数分解",
  "answer": "\\\\dfrac{1}{2}\\\\log 3",
  "explanation":
    "\\[\\\\int_0^{\\\\tfrac{1}{2}} \\\\dfrac{1}{1 - x^2}\\\\,dx = \\\\int_0^{\\\\tfrac{1}{2}} \\\\dfrac{1}{(1 - x)(1 + x)}\\\\,dx = \\\\dfrac{1}{2}\\\\int_0^{\\\\tfrac{1}{2}} \\\\left(\\\\dfrac{1}{1 - x} + \\\\dfrac{1}{1 + x}\\\\right)\\\\,dx\\]"
    + "\\[= \\\\dfrac{1}{2}\\\\left[-\\log|1 - x| + \\\\log|1 + x|\\\\right]_0^{\\\\tfrac{1}{2}} = \\\\dfrac{1}{2}\\\\log 3\\]"
    + "【解説】分母が因数分解できるので部分分数分解。\\\\(1 + x^2\\\\)の形と間違えやすいので注意。",
  "check": true
},{
  "id": 22,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{x}{1 - x^2}\\\\,dx",
  "policy": "微分はみだし",
  "answer": "-\\\\dfrac{1}{2}\\\\log|1 - x^2| + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{\\\\boxed{x}}{1 - x^2}\\\\,dx = -\\\\dfrac{1}{2}\\\\log|1 - x^2| + C\\]"
    + "【解説】いくら分母が因数分解できても、微分がくっついている方が優先。",
  "check": true
},{
  "id": 23,
  "genre": "多項式関数編",
  "problem": "\\\\int_{-1}^1 \\\\dfrac{x^3}{1 + x^2}\\\\,dx",
  "policy": "奇関数",
  "answer": "0",
  "explanation":
    "\\\\(f(x) = \\\\dfrac{x^3}{1 + x^2}\\\\text{ とすると、} f(-x) = -f(x)\\\\text{より、}\\\\)"
    + "\\[\\\\int_{-1}^1 f(x)\\\\,dx = 0\\]"
    + "\\[※ \\\\int \\\\dfrac{x^3}{1 + x^2}\\\\,dx = \\\\int \\\\left(x - \\\\dfrac{\\boxed{x}}{1 + x^2}\\\\right)\\\\,dx = \\\\dfrac{1}{2}x^2 - \\\\log(1 + x^2) + C\\]"
    + "【解説】積分区間が\\\\(-a\\\\)から\\\\(a\\\\)の時は、奇関数・偶関数でないかを確認するくせをつけよう。なお、この関数自体が積分できるようにしてしておくべきである。",
  "check": true
},{
  "id": 24,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{x}{(x + 1)^2}\\\\,dx",
  "policy": "部分分数分解 または 分母置換",
  "answer": "\\\\log|x + 1| + \\\\dfrac{1}{x + 1} + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{x}{(x + 1)^2}\\\\,dx = \\\\int \\\\left(\\\\dfrac{1}{x + 1} - \\\\dfrac{1}{(x + 1)^2}\\\\right)\\\\,dx = \\\\log|x + 1| + \\\\dfrac{1}{x + 1} + C\\]"
    + "※ \\\\(x + 1 = t\\\\)とすると、\\\\(\\dfrac{dx}{dt} = 1\\\\)より、"
    + "\\[\\\\int \\\\dfrac{x}{(x + 1)^2}\\\\,dx = \\\\int \\\\dfrac{t - 1}{t^2}\\\\,dt = \\\\int \\\\left(\\dfrac{1}{t} - \\\\dfrac{1}{t^2}\\\\right)\\\\,dt = \\\\log|t| + \\\\dfrac{1}{t} + C = \\\\log|x + 1| + \\\\dfrac{1}{x + 1} + C\\]"
    + "【解説】置換しても置換しなくてもどちらでもよいが、どちらにしても部分分数分解になる。",
  "check": true
},{
  "id": 25,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{(x + 1)^2}{x}\\\\,dx",
  "policy": "分割",
  "answer": "\\\\dfrac{1}{2}x^2 + 2x + \\\\log|x| + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{(x + 1)^2}{x}\\\\,dx = \\\\int \\\\left(x + 2 + \\\\dfrac{1}{x}\\\\right)\\\\,dx = \\\\dfrac{1}{2}x^2 + 2x + \\\\log|x| + C\\]"
    + "【解説】分母が1つの項であれば、どんどん分解する。積分は和に分けた方が楽。",
  "check": true
},{
  "id": 26,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{x - 1}{\\\\sqrt{x}}\\\\,dx",
  "policy": "分割",
  "answer": "\\\\dfrac{2}{3}x\\\\sqrt{x} - 2\\\\sqrt{x} + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{x - 1}{\\\\sqrt{x}}\\\\,dx = \\\\int \\\\left(\\\\sqrt{x} - \\\\dfrac{1}{\\\\sqrt{x}}\\\\right)\\\\,dx = \\\\dfrac{2}{3}x\\\\sqrt{x} - 2\\\\sqrt{x} + C\\]"
    + "【解説】分母が1つの項であれば、どんどん分解する。積分は和に分けた方が楽。",
  "check": true
},{
  "id": 27,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{1}{\\\\sqrt{x + 1} - \\\\sqrt{x}}\\\\,dx",
  "policy": "有理化",
  "answer": "\\\\dfrac{2}{3}(x + 1)\\\\sqrt{x + 1} + \\\\dfrac{2}{3}x\\\\sqrt{x} + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{1}{\\\\sqrt{x + 1} - \\\\sqrt{x}}\\\\,dx = \\\\int (\\\\sqrt{x + 1} + \\\\sqrt{x})\\\\,dx = \\\\dfrac{2}{3}(x + 1)\\\\sqrt{x + 1} + \\\\dfrac{2}{3}x\\\\sqrt{x} + C\\]"
    + "【解説】ルート同士の和は、まず有理化を念頭におく。",
  "check": true
},{
  "id": 28,
  "genre": "多項式関数編",
  "problem": "\\\\int_0^{\\\\tfrac{1}{2}} \\\\dfrac{1}{\\\\sqrt{1 - x}}\\\\,dx",
  "policy": "丸ごと置換",
  "answer": "2 - \\\\sqrt{2}",
  "explanation":
    "\\\\(t = \\\\sqrt{1 - x}\\\\text{とすると、} t^2 = 1 - x\\text{、} \\dfrac{dx}{dt} = -2t\\text{、} x:0 \\to \\dfrac{1}{2}\\text{の時} t:1 \\to \\dfrac{\\\\sqrt{2}}{2}\\\\text{より、}\\\\)"
    + "\\[\\\\int_0^{\\\\tfrac{1}{2}} \\\\dfrac{1}{\\\\sqrt{1 - x}}\\\\,dx = \\\\int_1^{\\\\tfrac{\\\\sqrt{2}}{2}} \\\\dfrac{1}{t}(-2t)\\\\,dt = 2\\\\int_{\\\\tfrac{\\\\sqrt{2}}{2}}^1 dt = 2[t]_{\\\\tfrac{\\\\sqrt{2}}{2}}^1 = 2 - \\\\sqrt{2}\\]"
    + "【解説】\\\\(\\sqrt{1次式}\\)は置換。計算が面倒なので注意。",
  "check": true
},{
  "id": 29,
  "genre": "多項式関数編",
  "problem": "\\\\int_0^{\\\\tfrac{1}{2}} \\\\dfrac{x + 1}{\\\\sqrt{1 - x}}\\\\,dx",
  "policy": "\\(\\sqrt{1-x}\\)丸ごと置換 または 部分積分",
  "answer": "\\\\dfrac{10}{3} - \\\\dfrac{11}{6}\\\\sqrt{2}",
  "explanation":
    "\\\\(t = \\\\sqrt{1 - x}\\\\text{とすると、} t^2 = 1 - x\\text{、} \\dfrac{dx}{dt} = -2t\\text{、} x:0 \\to \\dfrac{1}{2}\\text{の時} t:1 \\to \\dfrac{\\\\sqrt{2}}{2}\\\\text{より、}\\\\)"
    + "\\[\\\\int_0^{\\\\tfrac{1}{2}} \\\\dfrac{x + 1}{\\\\sqrt{1 - x}}\\\\,dx = \\\\int_1^{\\\\tfrac{\\\\sqrt{2}}{2}} \\\\dfrac{2 - t^2}{t}(-2t)\\\\,dt = 2\\\\int_{\\\\tfrac{\\\\sqrt{2}}{2}}^1 (2 - t^2)\\\\,dt = 2\\\\left[2t - \\\\dfrac{1}{3}t^3\\\\right]_{\\\\tfrac{\\\\sqrt{2}}{2}}^1 = \\\\dfrac{10}{3} - \\\\dfrac{11}{6}\\\\sqrt{2}\\]"
    + "【解説】\\\\(\\sqrt{1次式}\\)は置換。ルートの3乗が出てくるので、慎重に計算すること。"
    + "<br>【別解】"
    + "\\[\\\\int_0^{\\\\tfrac{1}{2}} \\\\dfrac{x + 1}{\\\\sqrt{1 - x}}\\\\,dx = \\left[-2(x + 1)\\\\sqrt{1 - x}\\\\right]_0^{\\\\tfrac{1}{2}} + 2\\\\int_0^{\\\\tfrac{1}{2}} \\\\sqrt{1 - x}\\\\,dx = -\\\\dfrac{3}{2}\\sqrt{2} + 2 - 2\\\\left[\\\\dfrac{2}{3}(1 - x)\\\\sqrt{1 - x}\\\\right]_0^{\\\\tfrac{1}{2}}\\]"
    + "\\[= -\\dfrac{3}{2} \\sqrt{2} + 2 - \\dfrac{\\sqrt{2}}{3} + \\dfrac{4}{3} =-\\dfrac{11}{6} \\sqrt{2} + \\dfrac{10}{3}\\]"
    + "【解説】\\((x + 1)\\)を微分すると消滅すること、\\(\\dfrac{1}{\\sqrt{1 - x}}\\)を積分すると分数がなくなることから、部分積分の方が置換より簡単にすむ。置換しないおかげで積分区間にルートも出てこない。",
  "check": true
},{
  "id": 30,
  "genre": "多項式関数編",
  "problem": "\\\\int_1^2 \\\\dfrac{1}{x^2 - 2x + 2}\\\\,dx",
  "policy": "\\(\\tan\\thetaに置換\\)",
  "answer": "\\\\dfrac{\\\\pi}{4}",
  "explanation":
    "\\[\\\\int_1^2 \\\\dfrac{1}{x^2 - 2x + 2}\\\\,dx = \\\\int_1^2 \\\\dfrac{1}{(x - 1)^2 + 1}\\\\,dx\\]"
    + "\\\\(x - 1 = \\\\tan\\\\theta \\\\text{ とすると、} \\\\dfrac{dx}{d\\\\theta} = \\\\dfrac{1}{\\\\cos^2\\\\theta}\\\\text{、} x:1 \\to 2 \\\\text{ のとき } \\\\theta:0 \\to \\\\dfrac{\\\\pi}{4}\\\\text{より、}\\\\)"
    + "\\[= \\\\int_0^{\\\\tfrac{\\\\pi}{4}} \\\\dfrac{1}{\\\\tan^2\\\\theta + 1} \\\\cdot \\\\dfrac{1}{\\\\cos^2\\\\theta}\\\\,d\\\\theta = \\\\int_0^{\\\\tfrac{\\\\pi}{4}} d\\\\theta = \\\\dfrac{\\\\pi}{4}\\]"
    + "【解説】分母が因数分解不可能な2次式であれば、平方完成して\\\\(\\tan\\\\theta\\\\)で置換が鉄則。",
  "check": true
},{
  "id": 31,
  "genre": "多項式関数編",
  "problem": "\\\\int \\\\dfrac{5x^2 + x - 1}{x^3 + 1}\\\\,dx",
  "policy": "部分分数分解",
  "answer": "\\\\log|x + 1|(x^2 - x + 1)^2 + C",
  "explanation":
    "\\[\\\\int \\\\dfrac{5x^2 + x - 1}{x^3 + 1}\\\\,dx = \\\\int \\\\left(\\\\dfrac{1}{x + 1} + \\\\dfrac{\\boxed{4x - 2}}{x^2 - x + 1}\\\\right)\\\\,dx = \\\\log|x + 1| + 2\\\\log(x^2 - x + 1) + C\\]"
    + "\\[= \\\\log|x + 1|(x^2 - x + 1)^2 + C\\]"
    + "【解説】\\(x^3 + 1 = (x + 1)(x^2 - x + 1)\\)より因数分解できるので部分分数分解。このとき、\\(x^2 - x + 1\\)の上にくる2次式は1次式であることに留意。メタ的視点というど、2次式が分母に来る場合不定積分であることはほぼありえない（\\(\\arctan x\\)ができてしまうから）ので、不定積分の場合はほぼ確実に分子が分母の微分になる。",
  "check": true
},{
  "id": 33,
  "genre": "多項式関数編",
  "problem": "\\int \\dfrac{1}{\\sqrt{4 + x^2}}\\,dx",
  "policy": "\\(t = x + \\sqrt{4 + x^2}\\)を置換",
  "answer": "\\log(x + \\sqrt{4 + x^2}) + C",
  "explanation":
    "\\(t = x + \\sqrt{4 + x^2}と置くと、 \\dfrac{dt}{dx} = 1 + \\dfrac{x}{\\sqrt{4 + x^2}} = \\dfrac{x + \\sqrt{4 + x^2}}{\\sqrt{4 + x^2}} = \\dfrac{t}{\\sqrt{4 + x^2}}\\) "
    + "\\[\\int \\dfrac{1}{\\sqrt{4 + x^2}}\\,dx = \\int \\dfrac{1}{t}\\,dt = \\log|t| + C = \\log(x + \\sqrt{4 + x^2}) + C \\quad (\\because \\sqrt{4 + x^2} > \\sqrt{x^2} = |x|)\\]"
    + "【解説】\\(\\sqrt{最高次が正の2次式}\\)が含まれていて、かつ部分積分や微分はみだしを作ることが出来ない場合は、この置換（または\\(e^x\\)を用いた置換）が必須となる。試しに微分してみると、なぜかうまくいくが、この背景には双曲線関数の積分が存在する。高難度に挑戦したい人は学習しておくこと。なお、\\(x < 0\\)だったときも\\(\\sqrt{4 + x^2}\\)の方が大きくなるので、絶対値は外れる。",
  "check": true
},{
  "id": 34,
  "genre": "多項式関数編",
  "problem": "\\int \\sqrt{4 + x^2}\\,dx",
  "policy": "\\(t = x + \\sqrt{4 + x^2}\\)を置換 または部分積分",
  "answer": "\\dfrac{1}{2}\\{\\log(x + \\sqrt{4 + x^2}) + x\\sqrt{4 + x^2}\\} + C",
  "explanation":
    "\\(t = x + \\sqrt{4 + x^2}と置くと、 \\dfrac{dt}{dx} = 1 + \\dfrac{x}{\\sqrt{4 + x^2}} = \\dfrac{x + \\sqrt{4 + x^2}}{\\sqrt{4 + x^2}} = \\dfrac{t}{\\sqrt{4 + x^2}}\\) "
    + "\\[\\int \\sqrt{4 + x^2}\\,dx = \\int \\dfrac{4 + x^2}{\\sqrt{4 + x^2}}\\,dx = \\int \\left(\\dfrac{4}{\\sqrt{4 + x^2}} + \\dfrac{x^2}{\\sqrt{4 + x^2}}\\right)\\,dx\\]"
    + "\\[= 4\\int \\dfrac{1}{\\sqrt{4 + x^2}}\\,dx + \\int x \\cdot \\dfrac{\\boxed{x}}{\\sqrt{4 + x^2}}\\,dx = 4\\left\\{\\log(x + \\sqrt{4 + x^2})\\right\\} + x\\sqrt{4 + x^2} - \\int \\sqrt{4 + x^2}\\,dx\\]"
    + "\\[= \\dfrac{1}{2}\\{4\\log(x + \\sqrt{4 + x^2}) + x\\sqrt{4 + x^2}\\} + C \\quad (\\text{同型が出てくるので、左辺に移行して} 2 \\text{で割ったものが答えとなる}。）\\]"
    + "【解説】見た目は単純なのに難問。\\(\\sqrt{ }\\)最高次が正の2次式が含まれていて、かつ部分積分や微分はみだしを作ることが出来ない場合は、この置換（または\\(e^x\\)を用いた置換）が必須となる。この\\(\\sqrt{ }\\)が分母にないと積分できず、無理やり分子の有理化をして分解することで、置換した式がでてくる。後半は微分はみだし形を作って部分積分。同型が出てくるので左辺に移行して2で割ったものが答えとなる。同型出現は複雑な積分の場合よく出てくるので、処理できるようにしておくこと。",
  "check": true
},{
  "id": 35,
  "genre": "多項式関数編",
  "problem": "\\int_0^2 \\dfrac{x^2}{x^2 + (2 - x)^2}\\,dx",
  "policy": "King Property",
  "answer": "1",
  "explanation":
    "\\(t = 2 - x\\)とすると、\\(\\dfrac{dt}{dx} = -1\\text{、} x:0 \\to 2\\)のとき、\\(t:2 \\to 0\\) "
    + "\\[\\int_0^2 \\dfrac{x^2}{x^2 + (2 - x)^2}\\,dx = \\int_2^0 \\dfrac{(2 - t)^2}{(2 - t)^2 + t^2}(-dt) = \\int_0^2 \\dfrac{(2 - x)^2}{x^2 + (2 - x)^2}\\,dx\\text{なので、}\\]"
    + "\\[\\int_0^2 \\dfrac{x^2}{x^2 + (2 - x)^2}\\,dx = \\dfrac{1}{2}\\int_0^2 \\left(\\dfrac{x^2}{x^2 + (2 - x)^2} + \\dfrac{(2 - x)^2}{x^2 + (2 - x)^2}\\right)\\,dx = \\dfrac{1}{2}\\int_0^2 1\\,dx = 1\\]"
    + "【解説】King Propertyの代表的な応用例。\\(x^2\\)、\\((2 - x)^2\\)は積分区間\\(0 \\to 2\\)で左右対称となるので、積分値が等しくなる。定積分の範囲と被積分関数を眺めて、対称性が利用できそうな場合は積極的に使えるようにしたい。"
    + "<br>【別解】"
    + "\\[\\int_0^2 \\dfrac{x^2}{x^2 + (2 - x)^2}\\,dx = \\dfrac{1}{2}\\int_0^2 \\dfrac{x^2}{x^2 - 2x + 2}\\,dx = \\dfrac{1}{2}\\int_0^2 \\dfrac{(x^2 - 2x + 2) + (2x - 2)}{x^2 - 2x + 2}\\,dx\\]"
    + "\\[= \\dfrac{1}{2}\\int_0^2 \\left(1 + \\dfrac{\\boxed{2x - 2}}{x^2 - 2x + 2}\\right)\\,dx = \\dfrac{1}{2}\\left[x + \\log(x^2 - 2x + 2)\\right]_0^2 = 1\\]"
    + "【解説】この程度ならば別に展開してゴリゴリ計算しても大した計算量にならない。ただし、定数項が1でも違えば、\\(x - 1 = \\tan\\theta\\)で置換するタイプの積分になることには気づいたうえで計算できるようにしておくこと。",
  "check": true
},{"id": 36,
  "genre": "三角関数編",
  "problem": "\\int x^2 \\sin x \\, dx",
  "policy": "部分積分2回",
  "answer": "-x^2 \\cos x + 2x \\sin x + 2 \\cos x + C",
  "explanation":
    "\\[\\int x^2 \\sin x \\, dx = -x^2 \\cos x + 2 \\int x \\cos x \\, dx = -x^2 \\cos x + 2x \\sin x - 2 \\int \\sin x \\, dx\\]"
    + "\\[= -x^2 \\cos x + 2x \\sin x + 2 \\cos x + C\\]"
    + "【解説】(多項式) \\( \\times \\) (三角関数) は部分積分。多項式を微分する。",
  "check": true
},{
  "id": 37,
  "genre": "三角関数編",
  "problem": "\\int x \\sin x^2 \\, dx",
  "policy": "微分はみだし",
  "answer": "-\\dfrac{1}{2} \\cos x^2 + C",
  "explanation":
    "\\[\\int \\boxed{x} \\sin x^2 \\, dx = -\\dfrac{1}{2} \\cos x^2 + C\\]"
    + "【解説】微分がはみ出していることに気づくのが最優先。",
  "check": false
},{
  "id": 38,
  "genre": "三角関数編",
  "problem": "\\int x \\sin^2 x \\, dx",
  "policy": "部分積分",
  "answer": "\\dfrac{1}{4}x^2 - \\dfrac{1}{4}x \\sin 2x - \\dfrac{1}{8} \\cos 2x + C",
  "explanation":
    "\\[\\int x \\sin^2 x \\, dx = \\int x \\cdot \\dfrac{1 - \\cos 2x}{2} \\, dx = \\dfrac{1}{2} \\int x \\, dx - \\dfrac{1}{2} \\int x \\cos 2x \\, dx\\]"
    + "\\[= \\dfrac{1}{4}x^2 - \\dfrac{1}{2} \\left[\\dfrac{1}{2}x \\sin 2x - \\int \\dfrac{1}{2} \\sin 2x \\, dx\\right]\\]"
    + "\\[= \\dfrac{1}{4}x^2 - \\dfrac{1}{4}x \\sin 2x + \\dfrac{1}{4} \\left(-\\dfrac{1}{2} \\cos 2x\\right) + C = \\dfrac{1}{4}x^2 - \\dfrac{1}{4}x \\sin 2x - \\dfrac{1}{8} \\cos 2x + C\\]"
    + "【解説】部分積分だが、三角関数が偶数乗になっている時は、倍角公式の逆(半角公式)で次数を下げる必要があることに注意。",
  "check": true
},{
  "id": 39,
  "genre": "三角関数編",
  "problem": "\\int_0^{\\tfrac{\\pi}{2}} \\sin^2 x \\cos x \\, dx",
  "policy": "微分はみだし",
  "answer": "\\dfrac{1}{3}",
  "explanation":
    "\\[\\int_0^{\\tfrac{\\pi}{2}} \\sin^2 x \\boxed{\\cos x} \\, dx = \\left[\\dfrac{1}{3} \\sin^3 x\\right]_0^{\\tfrac{\\pi}{2}} = \\dfrac{1}{3}\\]"
    + "【解説】微分がはみだしている。秒殺すること。",
  "check": true
},{
  "id": 40,
  "genre": "三角関数編",
  "problem": "\\int \\sin^2 x \\tan x \\, dx",
  "policy": "\\[\\tan x = \\dfrac{\\sin x}{\\cos x}\\]",
  "answer": "\\dfrac{1}{2} \\cos^2 x - \\log|\\cos x| + C",
  "explanation":
    "\\[\\int \\sin^2 x \\tan x \\, dx = \\int \\frac{\\sin^3 x}{\\cos x}dx = \\int \\frac{1 - \\cos^2 x}{\\cos x} \\cdot \\sin x \\, dx = \\int \\left(\\frac{1}{\\cos x} - \\cos x\\right) \\boxed{\\sin x}\\,dx\\]"
    + "\\[= \\dfrac{1}{2} \\cos^2 x - \\log|\\cos x| + C\\]"
    + "【解説】\\(\\sin^2 x = 1 - \\cos^2 x\\)、\\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\) と変形することで、微分がはみだしの形を作れる。ただし \\(\\cos x\\) の微分は \\(-\\sin x\\) なので、マイナスがつくことに注意。",
  "check": true
},{
  "id": 41,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{1}{\\tan^2 x} \\, dx",
  "policy": "\\[\\tan x = \\dfrac{\\sin x}{\\cos x}\\]",
  "answer": "-x - \\dfrac{1}{\\tan x} + C",
  "explanation":
    "\\[\\int \\dfrac{1}{\\tan^2 x}\\,dx = \\int \\frac{\\cos^2 x}{\\sin^2 x}\\,dx = \\int \\left(\\frac{1 - \\sin^2 x}{\\sin^2 x}\\right)\\,dx = \\int \\left(\\frac{1}{\\sin^2 x} - 1\\right)\\,dx\\]"
    + "\\[= -x - \\dfrac{1}{\\tan x} + C\\]"
    + "【解説】基本的に三角関数の2乗は、様々な公式を使って簡単にすることができる。",
  "check": true
},{
  "id": 42,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{1}{1 - \\sin x} \\, dx",
  "policy": "分母分子に\\(1 + \\sin x\\)を掛ける",
  "answer": "\\tan x + \\dfrac{1}{\\cos x} + C",
  "explanation":
    "\\[\\int \\dfrac{1}{1 - \\sin x}\\,dx = \\int \\dfrac{1 + \\sin x}{1 - \\sin^2 x}\\,dx = \\int \\dfrac{1 + \\sin x}{\\cos^2 x}\\,dx\\]"
    + "\\[= \\int \\left(\\frac{1}{\\cos^2 x} + \\frac{\\boxed{\\sin x}}{\\cos^2 x}\\right)\\,dx = \\tan x + \\frac{1}{\\cos x} + C\\]"
    + "【解説】\\(1 + \\sin x\\) を分母分子にかけることで \\(\\cos^2 x\\) を作ることができる。和は分解して、それぞれで積分すると良い。\\(\\cos x\\) ごと積分する時は、符号に注意。",
  "check": true
},{
  "id": 43,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{1}{1 - \\sin^2 x} \\, dx",
  "policy": "\\(\\dfrac{1}{\\cos^2 x}\\)の積分",
  "answer": "\\tan x + C",
  "explanation":
    "\\[\\int \\dfrac{1}{1 - \\sin^2 x}\\,dx = \\int \\dfrac{1}{\\cos^2 x}\\,dx = \\tan x + C\\]"
    + "【解説】どう見ても \\(\\dfrac{1}{\\cos^2 x}\\) なので秒殺すること。",
  "check": true
},{
  "id": 44,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{\\sin x}{\\sqrt{1 - \\cos x}} \\, dx",
  "policy": "微分はみだし",
  "answer": "2\\sqrt{1 - \\cos x} + C",
  "explanation":
    "\\[\\int \\frac{\\boxed{\\sin x}}{\\sqrt{1 - \\cos x}}\\,dx = 2\\sqrt{1 - \\cos x} + C\\]"
    + "【解説】見た瞬間は微分がはみだしていることに気づきたい。なお、\\(\\cos x\\) にマイナスがついていることと、\\(\\cos x\\) の微分でマイナスがでることで、プラマイが打ち消されている。符号の反転には十分注意すること。",
  "check": true
},{
  "id": 45,
  "genre": "三角関数編",
  "problem": "\\int_0^{\\pi} \\sqrt{1 - \\sin x} \\, dx",
  "policy": "\\(\\cos(\\dfrac{\\pi}{2} - x)\\)に変換して半角公式",
  "answer": "4\\sqrt{2} - 4",
  "explanation":
    "\\(x = \\dfrac{\\pi}{2} - t\\) とすると、\\(\\dfrac{dx}{dt} = -1\\)、\\(x:0 \\to \\pi\\) のとき、\\(t:\\dfrac{\\pi}{2} \\to -\\dfrac{\\pi}{2}\\)。"
    + "\\[\\int_0^{\\pi} \\sqrt{1 - \\sin x}\\,dx = \\int_{\\tfrac{\\pi}{2}}^{-\\tfrac{\\pi}{2}} \\sqrt{1 - \\sin(\\tfrac{\\pi}{2} - t)}(-1)\\,dt = \\int_{-\\tfrac{\\pi}{2}}^{\\tfrac{\\pi}{2}} \\sqrt{2(1 - \\cos t)}\\,dt\\]"
    + "\\[= 2\\sqrt{2} \\int_0^{\\tfrac{\\pi}{2}} \\sqrt{\\sin^2\\left(\\frac{t}{2}\\right)}\\,dt \\quad (\\because 偶関数) = 2\\sqrt{2} \\int_0^{\\tfrac{\\pi}{2}} |\\sin\\left(\\frac{t}{2}\\right)|\\,dt\\]"
    + "\\[= 4\\sqrt{2} \\left[-\\cos\\left(\\frac{t}{2}\\right)\\right]_0^{\\tfrac{\\pi}{2}} = 4\\sqrt{2} - 4\\]"
    + "【解説】\\(1 \\pm \\cos x\\) は半角公式で変形できるが、\\(1 \\pm \\sin x\\) はそのまま使えない。よって、\\(\\sin x = \\cos(\\frac{\\pi}{2} - x)\\) を使って無理やり \\(\\cos t\\) に変形した上で半角公式を使う。不定積分だと無理だが定積分なら絶対値関数となっても積分区間の分割で対応できる。",
  "check": true
},{
  "id": 46,
  "genre": "三角関数編",
  "problem": "\\int \\frac{1}{\\sin^2 x \\cos^2 x}\\,dx",
  "policy": "\\(\\sin^2 x + \\cos^2 x = 1\\)",
  "answer": "\\tan x - \\frac{1}{\\tan x} + C",
  "explanation":
    "\\[\\int \\frac{1}{\\sin^2 x \\cos^2 x}\\,dx = \\int \\frac{\\sin^2 x + \\cos^2 x}{\\sin^2 x \\cos^2 x}\\,dx = \\int\\!\\left( \\frac{1}{\\cos^2 x} + \\frac{1}{\\sin^2 x} \\right)\\,dx = \\tan x - \\frac{1}{\\tan x} + C\\]"
    + "【解説】\\(\\sin^2 x + \\cos^2 x = 1\\)を逆で使うことが出来れば、公式そのままである。",
  "check": true
},{
  "id": 47,
  "genre": "三角関数編",
  "problem": "\\int \\frac{1}{\\sin x \\cos x}\\,dx",
  "policy": "\\(\\sin^2 x + \\cos^2 x = 1\\)または倍角公式",
  "answer": "\\log|\\tan x| + C",
  "explanation":
    "\\[\\int \\frac{1}{\\sin x \\cos x}\\,dx = \\int \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x}\\,dx = \\int\\!\\left( \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x} \\right)\\,dx = \\int (\\tan x + \\frac{1}{\\tan x})\\,dx\\]"
    + "\\[= -\\log|\\cos x| + \\log|\\sin x| + C = \\log\\left|\\frac{\\sin x}{\\cos x}\\right| + C = \\log|\\tan x| + C\\]"
    + "【解説】\\(1 = \\sin^2 x + \\cos^2 x\\)を用いれば、約分可能。丸覚えても良い。"
    + "<br>【別解】"
    + "\\[\\int \\frac{1}{\\sin x \\cos x}\\,dx = \\int \\frac{2}{\\sin 2x}\\,dx = \\int \\frac{1}{\\sin t}\\,dt \\quad (2x = t, dx = \\frac{dt}{2})\\]"
    + "\\[= \\int \\frac{\\sin t}{1 - \\cos^2 t}\\,dt = \\frac{1}{2}\\int\\!\\left( \\frac{1}{1 - \\cos t} + \\frac{1}{1 + \\cos t} \\right)\\boxed{\\sin t}\\,dt\\]"
    + "\\[= \\frac{1}{2}(\\log|1 + \\cos t| - \\log|1 - \\cos t|) + C = \\frac{1}{2}\\log\\left|\\frac{1 + \\cos 2x}{1 - \\cos 2x}\\right| + C\\]"
    + "【解説】\\(\\sin x \\cos x\\)は\\(\\sin 2x\\)に変えることが出来るので、上のテクニカルな方法に気づかなければこちらも解ける。ただし若干計算は面倒。"
    + "（もっと技巧的な方法もあるが、それをするなら\\(\\sin^2 x + \\cos^2 x = 1\\)の方が早い）",
  "check": true
},{
  "id": 48,
  "genre": "三角関数編",
  "problem": "\\int \\frac{x}{\\cos^2 x}\\,dx",
  "policy": "部分積分",
  "answer": "x \\tan x + \\log|\\cos x| + C",
  "explanation":
    "\\[\\int \\frac{x}{\\cos^2 x}\\,dx = x \\tan x - \\int \\tan x\\,dx = x \\tan x + \\log|\\cos x| + C\\]"
    + "【解説】(多項式) \\(\\times\\) (三角関数)は部分積分。\\(\\dfrac{1}{\\cos^2 x}\\)は積分すると\\(\\tan x\\)なので、見えるように。",
  "check": true
},{
  "id": 49,
  "genre": "三角関数編",
  "problem": "\\int x^3 \\cos x\\,dx",
  "policy": "部分積分\\(3\\)回",
  "answer": "x^3 \\sin x + 3x^2 \\cos x - 6x \\sin x - 6 \\cos x + C",
  "explanation":
    "\\[\\int x^3 \\cos x\\,dx = x^3 \\sin x - \\int 3x^2 \\sin x\\,dx\\]"
    + "\\[= x^3 \\sin x - 3\\left(-x^2 \\cos x - \\int -2x \\cos x\\,dx\\right)\\]"
    + "\\[= x^3 \\sin x + 3x^2 \\cos x - 6 \\int x \\cos x\\,dx\\]"
    + "\\[= x^3 \\sin x + 3x^2 \\cos x - 6\\left(x \\sin x - \\int \\sin x\\,dx\\right)\\]"
    + "\\[= x^3 \\sin x + 3x^2 \\cos x - 6x \\sin x - 6 \\cos x + C\\]"
    + "【解説】部分積分を\\(3\\)回。符号の反転が頻繁に起こるので注意。慣れてきたら特に\\(\\int\\)を毎回書く必要もない。",
  "check": true
},{
  "id": 50,
  "genre": "三角関数編",
  "problem": "\\int \\sin 5x \\cos 3x \\, dx",
  "policy": "積和公式",
  "answer": "-\\dfrac{1}{16} \\cos 8x - \\dfrac{1}{4} \\cos 2x + C",
  "explanation":
    "\\[\\int \\sin 5x \\cos 3x \\, dx = \\dfrac{1}{2}\\int (\\sin 8x + \\sin 2x)\\,dx = -\\dfrac{1}{16} \\cos 8x - \\dfrac{1}{4} \\cos 2x + C\\]"
    + "【解説】和積公式、\\(\\sin \\times \\cos\\) は \\(\\sin\\) の和に分解。",
  "check": true
},{
  "id": 51,
  "genre": "三角関数編",
  "problem": "\\int \\sin 2x \\sin 4x \\, dx",
  "policy": "積和公式",
  "answer": "\\dfrac{1}{12} \\sin 6x - \\dfrac{1}{4} \\sin 2x + C",
  "explanation":
    "\\[\\int \\sin 2x \\sin 4x \\, dx = \\dfrac{1}{2}\\int (\\cos 6x - \\cos 2x)\\,dx = \\dfrac{1}{12} \\sin 6x - \\dfrac{1}{4} \\sin 2x + C\\]"
    + "【解説】積和公式、\\(\\sin \\times \\sin\\) は \\(\\cos\\) の和に分解。",
  "check": true
},{
  "id": 52,
  "genre": "三角関数編",
  "problem": "\\int \\cos x \\cos 5x \\, dx",
  "policy": "積和公式",
  "answer": "\\dfrac{1}{12} \\sin 6x + \\dfrac{1}{8} \\sin 4x + C",
  "explanation":
    "\\[\\int \\cos x \\cos 5x \\, dx = \\dfrac{1}{2}\\int (\\cos 6x + \\cos 4x)\\,dx = \\dfrac{1}{12} \\sin 6x + \\dfrac{1}{8} \\sin 4x + C\\]"
    + "【解説】積和公式、\\(\\cos \\times \\cos\\) は \\(\\cos\\) の和に分解。",
  "check": true
},{
  "id": 53,
  "genre": "三角関数編",
  "problem": "\\int \\sin^3 x \\cos^2 x \\, dx",
  "policy": "微分はみだし",
  "answer": "\\dfrac{1}{5} \\cos^5 x - \\dfrac{1}{3} \\cos^3 x + C",
  "explanation":
    "\\[\\int \\sin^3 x \\cos^2 x \\, dx = \\int (1 - \\cos^2 x)\\cos^2 x \\boxed{\\sin x}\\,dx = \\dfrac{1}{5} \\cos^5 x - \\dfrac{1}{3} \\cos^3 x + C\\]"
    + "【解説】合計奇数乗されている三角関数は、\\(\\sin^2 x = 1 - \\cos^2 x\\) などを駆使して微分はみだしの形に移行できる。あまりに次数が高くなりすぎた場合は、計算ミスをしないように、\\(t = \\cos x\\) 等のように置換した方がよい。",
  "check": true
},{
  "id": 54,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{1}{1 + \\cos x} \\, dx",
  "policy": "分母分子に\\(1 - \\cos x\\)を掛けるまたは半角公式",
  "answer": "\\dfrac{1 - \\cos x}{\\sin x} + C \\quad \\left(\\tan \\dfrac{x}{2} + C\\right)",
  "explanation":
    "\\[\\int \\dfrac{1}{1 + \\cos x}\\,dx = \\int \\dfrac{1 - \\cos x}{\\sin^2 x}\\,dx = \\int\\left(\\dfrac{1}{\\sin^2 x} - \\dfrac{\\boxed{\\cos x}}{\\sin^2 x}\\right)\\,dx = -\\dfrac{1}{\\tan x} + \\dfrac{1}{\\sin x} + C = \\dfrac{1 - \\cos x}{\\sin x} + C\\]"
    + "【解説】\\(1 - \\cos x\\) を分母・分子にかける。分母が1つの項なら分割して積分。\\(\\dfrac{1}{\\tan^2 x} = \\dfrac{1}{\\sin^2 x} - 1\\) は公式として覚えておくこと。"
    + "\\[【別解】\\int \\dfrac{1}{1 + \\cos x}\\,dx = \\int \\dfrac{1}{2 \\cos^2 \\frac{x}{2}}\\,dx = \\int \\dfrac{1}{\\cos^2 \\frac{x}{2}}\\cdot \\dfrac{1}{2}\\,dx = \\tan \\dfrac{x}{2} + C\\]"
    + "【解説】\\(1 \\pm \\cos x\\) は半角公式 \\(\\sin^2 \\frac{x}{2} = \\frac{1 - \\cos x}{2}\\)、\\(\\cos^2 \\frac{x}{2} = \\frac{1 + \\cos x}{2}\\) で置き換えることができる。",
  "check": true
},{
  "id": 55,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{1}{1 + \\sin x} \\, dx",
  "policy": "分母分子に\\(1 - \\sin x\\)を掛ける",
  "answer": "\\dfrac{\\sin x - 1}{\\cos x} + C",
  "explanation":
    "\\[\\int \\dfrac{1}{1 + \\sin x}\\,dx = \\int \\dfrac{1 - \\sin x}{\\cos^2 x}\\,dx = \\int\\left(\\dfrac{1}{\\cos^2 x} - \\dfrac{\\boxed{\\sin x}}{\\cos^2 x}\\right)\\,dx = \\tan x - \\dfrac{1}{\\cos x} + C = \\dfrac{\\sin x - 1}{\\cos x} + C\\]"
    + "【解説】\\(1 - \\sin x\\) を分母・分子にかける。分母が1つの項なら分割して積分。なお、\\(1 \\pm \\sin x\\) には半角公式は使えないので、このやり方のみ。",
  "check": true
},{
  "id": 56,
  "genre": "三角関数編",
  "problem": "\\int \\tan^2 x \\, dx",
  "policy": "\\[\\tan^2 x = \\dfrac{1}{\\cos^2 x} - 1\\]",
  "answer": "\\tan x - x + C",
  "explanation":
    "\\[\\int \\tan^2 x\\,dx = \\int\\left(\\dfrac{1}{\\cos^2 x} - 1\\right)\\,dx = \\tan x - x + C\\]"
    + "【解説】\\(\\tan^2 x = \\dfrac{1}{\\cos^2 x} - 1\\) さえ覚えておけば瞬殺。\\(\\dfrac{1}{\\tan^2 x} = \\dfrac{1}{\\sin^2 x} - 1\\) も覚えておくこと。",
  "check": true
},{
  "id": 57,
  "genre": "三角関数編",
  "problem": "\\int \\tan^3 x \\, dx",
  "policy": "\\[\\tan^2 x = \\dfrac{1}{\\cos^2 x} - 1\\]",
  "answer": "\\dfrac{1}{2} \\tan^2 x + \\log|\\cos x| + C \\quad \\left(\\dfrac{1}{2 \\cos^2 x} + \\log|\\cos x| + C\\right)",
  "explanation":
    "\\[\\int \\tan^3 x\\,dx = \\int\\left(\\dfrac{1}{\\cos^2 x} - 1\\right) \\tan x\\,dx = \\int\\left(\\tan x \\cdot \\boxed{\\dfrac{1}{\\cos^2 x}} - \\tan x\\right)\\,dx\\]"
    + "\\[= \\dfrac{1}{2} \\tan^2 x + \\log|\\cos x| + C\\]"
    + "【解説】\\((\\text{三角関数})^3\\) は微分はみだしが作れる形。\\(\\tan x\\) の場合は公式を用いて分解していくと良い。基本は\\((2\\text{乗}) \\times (1\\text{乗})\\)に分けることを目指していく。"
    + "\\[【別解】\\int \\tan^3 x\\,dx = \\int \\dfrac{\\sin^3 x}{\\cos^3 x}\\,dx = \\int \\left(\\dfrac{1}{\\cos^3 x} - \\dfrac{1}{\\cos x}\\right)\\boxed{\\sin x}\\,dx\\]"
    + "\\[= \\dfrac{1}{2 \\cos^2 x} + \\log|\\cos x| + C\\]"
    + "【解説】\\((\\tan x)' = \\dfrac{1}{\\cos^2 x}\\) には気づきくべきだが、気づけなくても \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\) に変形していけば同様の操作をすることは可能。まず手を動かすこと。",
  "check": true
},{
  "id": 58,
  "genre": "三角関数編",
  "problem": "\\int \\tan^4 x \\, dx",
  "policy": "\\[\\tan^2 x = \\dfrac{1}{\\cos^2 x} - 1\\]",
  "answer": "\\dfrac{1}{3} \\tan^3 x - \\tan x + x + C",
  "explanation":
    "\\[\\int \\tan^4 x\\,dx = \\int \\tan^2 x\\left(\\dfrac{1}{\\cos^2 x} - 1\\right)\\,dx = \\int\\left(\\tan^2 x \\cdot \\boxed{\\dfrac{1}{\\cos^2 x}} - \\tan^2 x\\right)\\,dx\\]"
    + "\\[= \\dfrac{1}{3} \\tan^3 x - \\tan x + x + C\\]"
    + "【解説】4乗は次数を下げるのが鉄則だが、\\(\\tan x\\) に限れば（微分が\\(\\dfrac{1}{\\cos^2 x}\\) と2次なせい で）2乗ごとに区切っていくとうまく積分できる。",
  "check": true
},{
  "id": 59,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{\\tan x}{1 + \\cos x} \\, dx",
  "policy": "\\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\)と微分はみだし",
  "answer": "\\log\\left|\\dfrac{1 + \\cos x}{\\cos x}\\right| + C",
  "explanation":
    "\\[\\int \\dfrac{\\tan x}{1 + \\cos x}\\,dx = \\int \\dfrac{\\sin x}{\\cos x(1 + \\cos x)}\\,dx = \\int\\left(\\dfrac{1}{\\cos x} - \\dfrac{1}{1 + \\cos x}\\right)\\boxed{\\sin x}\\,dx\\]"
    + "\\[= \\log\\left|\\dfrac{1 + \\cos x}{\\cos x}\\right| + C\\]"
    + "【解説】困ったら\\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\)から\\(\\sin x\\)を1つ作れるので、他が\\(\\cos x\\)のみならば、微分はみだしの形を作ることができる。部分分数分解の形に持っていけることに留意。",
  "check": true
},{
  "id": 60,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{\\sin^2 x}{1 + \\cos x} \\, dx",
  "policy": "\\(\\sin^2 x = 1 - \\cos^2 x\\)",
  "answer": "x - \\sin x + C",
  "explanation":
    "\\[\\int \\dfrac{\\sin^2 x}{1 + \\cos x}\\,dx = \\int \\dfrac{1 - \\cos^2 x}{1 + \\cos x}\\,dx = \\int (1 - \\cos x)\\,dx = x - \\sin x + C\\]"
    + "【解説】微分はみだしの形を作れないのであれば、様々な変形を試すようにする。\\(1 \\pm \\cos x\\)、\\(1 \\pm \\sin x\\)が\\(\\sin^2 x\\)、\\(\\cos^2 x\\)を割るという発想はいろいろな場面で使えるので覚えておく。",
  "check": true
},{
  "id": 61,
  "genre": "三角関数編",
  "problem": "\\int \\left(\\tan x + \\dfrac{1}{\\tan x}\\right)\\,dx",
  "policy": "通分",
  "answer": "\\log|\\tan x| + C",
  "explanation":
    "\\[\\int \\left(\\tan x + \\dfrac{1}{\\tan x}\\right)\\,dx = \\int \\dfrac{\\tan^2 x + 1}{\\tan x}\\,dx = \\int \\dfrac{1}{\\tan x} \\cdot  \\boxed{\\dfrac{1}{\\cos^2 x}} \\,dx = \\log|\\tan x| + C\\]"
    + "【解説】通分すると\\(\\dfrac{1}{\\cos^2 x}\\)が作れることに気づきたい。もちろん、\\(\\sin x\\)、\\(\\cos x\\)に直して通分しても良い。",
  "check": true
},{
  "id": 62,
  "genre": "三角関数編",
  "problem": "\\int \\left(\\dfrac{2}{\\cos^2 x} + \\dfrac{3}{\\sin^2 x}\\right)\\,dx",
  "policy": "それぞれ積分",
  "answer": "2 \\tan x - \\dfrac{3}{\\tan x} + C",
  "explanation":
    "\\[\\int \\left(\\dfrac{2}{\\cos^2 x} + \\dfrac{3}{\\sin^2 x}\\right)\\,dx = 2 \\tan x - \\dfrac{3}{\\tan x} + C\\]"
    + "【解説】公式なので瞬殺すること。",
  "check": true
},{
  "id": 63,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{1}{\\sin x} \\, dx",
  "policy": "分母分子に\\(\\sin x\\)を掛けるまたは倍角公式",
  "answer": "\\log|\\tan \\dfrac{x}{2}| + C \\quad \\left(\\dfrac{1}{2} \\log\\left|\\dfrac{1 - \\cos x}{1 + \\cos x}\\right| + C\\right)",
  "explanation":
    "\\[\\int \\dfrac{1}{\\sin x}\\,dx = \\int \\dfrac{\\sin x}{\\sin^2 x}\\,dx = \\int \\dfrac{\\sin x}{1 - \\cos^2 x}\\,dx = \\int \\dfrac{-\\sin x}{\\cos^2 x - 1}\\,dx\\]"
    + "\\[= \\dfrac{1}{2}\\int \\left(\\dfrac{1}{\\cos x - 1} - \\dfrac{1}{\\cos x + 1}\\right) \\cdot (\\boxed{-\\sin x})\\,dx\\]"
    + "\\[= \\dfrac{1}{2} \\left(\\log|\\cos x - 1| - \\log|\\cos x + 1|\\right) + C = \\dfrac{1}{2} \\log\\left|\\dfrac{1 - \\cos x}{1 + \\cos x}\\right| + C\\]"
    + "【解説】分母に\\(\\sin x\\)があり\\(\\cos x\\)がなければ微分はみだしの形をとれないので、三角関数の場合はなんとかこれを作り出す、という方針を常に頭において変形を考えること。"
    + "\\[【別解】\\int \\dfrac{1}{\\sin x}\\,dx = \\int \\dfrac{1}{2 \\sin \\dfrac{x}{2} \\cos \\dfrac{x}{2}}\\,dx = \\int \\dfrac{1}{2 \\tan \\dfrac{x}{2}} \\cdot \\boxed{ \\dfrac{1}{ \\cos^2 \\dfrac{x}{2}}}\\,dx = \\log\\left|\\tan \\dfrac{x}{2}\\right| + C\\]"
    + "【解説】ものすごくテクニカルなやり方だが、面倒な部分分数分解がいらないので、こちらのやりかたは丸暗記しておくと良い。\\(\\sin x\\) はいつでも半角にできる。",
  "check": true
},{
  "id": 64,
  "genre": "三角関数編",
  "problem": "\\int_{0}^{\\frac{\\pi}{3}} \\dfrac{1}{\\cos x} \\, dx",
  "policy": "分母分子に\\(\\cos x\\)を掛ける",
  "answer": "\\log(2 + \\sqrt{3})",
  "explanation":
    "\\[\\int_{0}^{\\frac{\\pi}{3}} \\dfrac{1}{\\cos x}\\,dx = \\int_{0}^{\\frac{\\pi}{3}} \\dfrac{\\cos x}{\\cos^2 x}\\,dx = \\int_{0}^{\\frac{\\pi}{3}} \\dfrac{\\cos x}{1 - \\sin^2 x}\\,dx\\]"
    + "\\[= \\dfrac{1}{2}\\int_{0}^{\\frac{\\pi}{3}}\\left(\\dfrac{1}{1 - \\sin x} + \\dfrac{1}{1 + \\sin x}\\right)[\\cos x]\\,dx\\]"
    + "\\[= \\dfrac{1}{2}\\left[-\\log(1 - \\sin x) + \\log(1 + \\sin x)\\right]_{0}^{\\frac{\\pi}{3}} = \\left[\\dfrac{1}{2}\\log\\left(\\dfrac{1 + \\sin x}{1 - \\sin x}\\right)\\right]_{0}^{\\frac{\\pi}{3}}\\]"
    + "\\[= \\dfrac{1}{2}\\left[\\log\\left(\\dfrac{1 + \\frac{\\sqrt{3}}{2}}{1 - \\frac{\\sqrt{3}}{2}}\\right) - \\log\\left(\\dfrac{1 + 0}{1 - 0}\\right)\\right]\\]"
    + "\\[= \\dfrac{1}{2}\\log\\left(\\dfrac{2 + \\sqrt{3}}{2 - \\sqrt{3}}\\right) - \\dfrac{1}{2}\\log(1) = \\log(2 + \\sqrt{3})\\]"
    + "【解説】分母に\\(\\cos x\\)があり\\(\\sin x\\)がなければ微分はみだしの形をとれないので、三角関数の場合はなんとかこれを作り出す、という方針を常に頭において変形を考えること。なお、\\(\\cos x\\) は単体では半角にできない。",
  "check": true
},{
  "id": 65,
  "genre": "三角関数編",
  "problem": "\\int_{0}^{2\\pi} \\sqrt{1 + \\cos x} \\, dx",
  "policy": "有理化または半角公式",
  "answer": "4\\sqrt{2}",
  "explanation":
    "\\[\\int_{0}^{2\\pi} \\sqrt{1 + \\cos x}\\,dx = \\int_{0}^{2\\pi} \\dfrac{\\sqrt{1 - \\cos^2 x}}{\\sqrt{1 - \\cos x}}\\,dx = \\int_{0}^{2\\pi} \\dfrac{|\\sin x|}{\\sqrt{1 - \\cos x}}\\,dx\\]"
    + "\\[= \\int_{0}^{\\pi} \\dfrac{\\boxed{\\sin x}}{\\sqrt{1 - \\cos x}}\\,dx + \\int_{\\pi}^{2\\pi} \\dfrac{-\\boxed{\\sin x}}{\\sqrt{1 - \\cos x}}\\,dx = 2\\left[\\sqrt{1 - \\cos x}\\right]_{0}^{\\pi} - 2\\left[\\sqrt{1 - \\cos x}\\right]_{\\pi}^{2\\pi} = 4\\sqrt{2}\\]"
    + "【解説】\\(1 + \\cos x\\)と方針は同じ。ルートがつくということは\\(2\\)乗が外れる。ただし絶対値になるので注意。場合分けになるので、積分区間を分割することになる。"
    + "\\[【別解】\\int_{0}^{2\\pi} \\sqrt{1 + \\cos x}\\,dx = \\int_{0}^{2\\pi} \\sqrt{2\\cos^2 \\frac{x}{2}}\\,dx = \\sqrt{2} \\int_{0}^{2\\pi} \\left|\\cos \\frac{x}{2}\\right|\\,dx\\]"
    + "\\[= \\sqrt{2} \\left(\\int_{0}^{\\pi} \\cos \\frac{x}{2}\\,dx - \\int_{\\pi}^{2\\pi} \\cos \\frac{x}{2}\\,dx\\right) = \\sqrt{2} \\left( \\left[2\\sin \\frac{x}{2}\\right]_{0}^{\\pi} - \\left[2\\sin \\frac{x}{2}\\right]_{\\pi}^{2\\pi} \\right) = 4\\sqrt{2}\\]"
    + "【解説】\\(1 \\pm \\cos x\\) は半角公式を用いることができる。この際、次数が\\(2\\)乗に上がるので、ルートとの相性も良い。丸暗記しても良い。",
  "check": true
},{
  "id": 66,
  "genre": "三角関数編",
  "problem": "\\int_{0}^{\\frac{\\pi}{2}} \\sin^2 x \\, dx",
  "policy": "King Propertyまたは半角公式",
  "answer": "\\dfrac{\\pi}{4}",
  "explanation":
    "\\(t = \\dfrac{\\pi}{2} - x\\)とすると、\\(\\dfrac{dt}{dx} = -1\\)、\\(x:0 \\to \\dfrac{\\pi}{2}\\)のとき、\\(t:\\dfrac{\\pi}{2} \\to 0\\)より、"
    + "\\[\\int_{0}^{\\frac{\\pi}{2}} \\sin^2 x\\,dx = \\int_{\\frac{\\pi}{2}}^{0} \\sin^2\\left(\\dfrac{\\pi}{2} - t\\right)(-1)\\,dt = \\int_{0}^{\\frac{\\pi}{2}} \\cos^2 t\\,dt\\quad\\text{より}\\]"
    + "\\[\\int_{0}^{\\frac{\\pi}{2}} \\sin^2 x\\,dx = \\dfrac{1}{2}\\int_{0}^{\\frac{\\pi}{2}} (\\sin^2 x + \\cos^2 x)\\,dx = \\dfrac{1}{2}\\int_{0}^{\\frac{\\pi}{2}} 1\\,dx = \\dfrac{\\pi}{4}\\]"
    + "【解説】\\(f(\\sin x)\\)、\\(f(\\cos x)\\)の\\(0\\to\\dfrac{\\pi}{2}\\)における定積分は等しくなる。これは\\(y = \\sin x\\)と\\(y = \\cos x\\)は\\(x = \\dfrac{\\pi}{4}\\)で線対称だからである。知っていると\\(f(\\cos x)\\)を出現させてまとめることで簡単にできる場合があり、非常に有用。"
    + "\\[【別解】\\int_{0}^{\\frac{\\pi}{2}} \\sin^2 x\\,dx = \\int_{0}^{\\frac{\\pi}{2}} \\dfrac{1 - \\cos 2x}{2}\\,dx = \\left[\\dfrac{1}{2}x - \\dfrac{1}{4}\\sin 2x\\right]_{0}^{\\frac{\\pi}{2}} = \\dfrac{\\pi}{4}\\]"
    + "【解説】上の解法は定積分でしか使用できないので、不定積分自体はできるようにしておくこと。半角公式で次数を落として使用する。",
  "check": true
},{
  "id": 67,
  "genre": "三角関数編",
  "problem": "\\int_{0}^{\\frac{\\pi}{2}} \\sin^3 x \\, dx",
  "policy": "微分はみ出し or 3倍角公式",
  "answer": "\\dfrac{2}{3}",
  "explanation":
    "\\[\\int_{0}^{\\frac{\\pi}{2}} \\sin^3 x\\,dx = \\int_{0}^{\\frac{\\pi}{2}} (1 - \\cos^2 x)\\boxed{\\sin x}\\,dx = \\left[-\\cos x + \\dfrac{1}{3}\\cos^3 x\\right]_{0}^{\\frac{\\pi}{2}} = \\dfrac{2}{3}\\]"
    + "【解説】奇数乗は1つだけ分けると微分はみだしが必ず作れる。"
    + "\\[【別解】\\int_{0}^{\\frac{\\pi}{2}} \\sin^3 x\\,dx = \\int_{0}^{\\frac{\\pi}{2}} \\dfrac{1}{4}(3\\sin x - \\sin 3x)\\,dx = \\dfrac{1}{4}\\left[-3\\cos x + \\dfrac{1}{3}\\cos 3x\\right]_{0}^{\\frac{\\pi}{2}} = \\dfrac{2}{3}\\]"
    + "【解説】3乗に限れば3倍角で処理をすると、置換なしで積分できる。",
  "check": true
},{
  "id": 68,
  "genre": "三角関数編",
  "problem": "\\int_{0}^{\\frac{\\pi}{2}} \\cos^4 x \\, dx",
  "policy": "半角公式2回",
  "answer": "\\dfrac{3}{16}\\pi",
  "explanation":
    "\\[\\int_{0}^{\\frac{\\pi}{2}} \\cos^4 x\\,dx = \\int_{0}^{\\frac{\\pi}{2}} \\left(\\dfrac{1 + \\cos 2x}{2}\\right)^2 \\, dx = \\dfrac{1}{4}\\int_{0}^{\\frac{\\pi}{2}} (1 + 2\\cos 2x + \\cos^2 2x)\\,dx\\]"
    + "\\[= \\dfrac{1}{4}\\int_{0}^{\\frac{\\pi}{2}} \\left(1 + 2\\cos 2x + \\dfrac{1 + \\cos 4x}{2}\\right)\\,dx = \\dfrac{1}{8}\\left[x + \\sin 2x + \\dfrac{1}{4}\\sin 4x\\right]_{0}^{\\frac{\\pi}{2}} = \\dfrac{3}{16}\\pi\\]"
    + "【解説】偶数乗は半角公式で次数を下げるしか手はない。"
    + "4乗以上は、2乗の〇乗、という形を使って展開しながら処理していくしかない。分数計算がかなり煩雑になるので注意。",
    "check": true
},{
  "id": 69,
  "genre": "三角関数編",
  "problem": "\\int_{0}^{\\frac{\\pi}{2}} \\sin^5 x \\, dx",
  "policy": "微分はみ出し",
  "answer": "\\dfrac{8}{15}",
  "explanation":
    "\\[\\int_{0}^{\\frac{\\pi}{2}} \\sin^5 x\\,dx = \\int_{0}^{\\frac{\\pi}{2}} (1 - \\cos^2 x)^2 \\boxed{\\sin x}\\,dx = \\left[-\\left(\\cos x - \\dfrac{2}{3}\\cos^3 x + \\dfrac{1}{5}\\cos^5 x\\right)\\right]_{0}^{\\frac{\\pi}{2}} = 1 - \\dfrac{2}{3} + \\dfrac{1}{5} = \\dfrac{8}{15}\\]"
    + "【解説】5乗以上は\\(n\\)倍角を作る方が面倒なので、おとなしく微分はみだしを作る。",
  "check": true
},{
  "id": 70,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{\\sin^3 x}{\\cos^5 x} \\, dx",
  "policy": "微分はみ出し",
  "answer": "\\dfrac{1}{4\\cos^4 x} - \\dfrac{1}{2\\cos^2 x} + C",
  "explanation":
    "\\[\\int \\dfrac{\\sin^3 x}{\\cos^5 x}\\,dx = \\int \\dfrac{1 - \\cos^2 x}{\\cos^5 x} \\boxed{\\sin x}\\,dx = \\dfrac{1}{4\\cos^4 x} - \\dfrac{1}{2\\cos^2 x} + C\\]"
    + "【解説】とにかく分子の次数に注目。分子が奇数乗なら、必ず\\(\\sin\\)か\\(\\cos\\)の微分はみだしに変形可能。",
  "check": true
},{
  "id": 71,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{1}{\\sin^4 x} \\, dx",
  "policy": "\\(t = \\dfrac{1}{\\tan x}\\)で置換",
  "answer": "-\\dfrac{1}{\\tan x} - \\dfrac{1}{3\\tan^3 x} + C",
  "explanation":
    "\\[\\int \\dfrac{1}{\\sin^4 x}\\,dx = \\int \\dfrac{\\sin^2 x + \\cos^2 x}{\\sin^4 x}\\,dx = \\int\\left(\\dfrac{1}{\\sin^2 x} + \\dfrac{\\cos^2 x}{\\sin^4 x}\\right)\\,dx\\]"
    + "\\[= -\\dfrac{1}{\\tan x} + \\int \\left(\\dfrac{1}{\\tan x}\\right)^2 \\cdot \\boxed{\\dfrac{1}{\\sin^2 x}}\\,dx = -\\dfrac{1}{\\tan x} - \\dfrac{1}{3\\tan^3 x} + C\\]"
    + "【解説】\\(\\dfrac{1}{\\sin^2 x}\\)や\\(\\dfrac{1}{\\cos^2 x}\\)は三角関数の公式によって\\(\\tan x\\)で表せる上に\\(\\tan x\\)や\\(\\dfrac{1}{\\tan x}\\)の微分なので、2乗の状態でも微分はみだし形を作り出すことが出来る。",
  "check": true
},{
  "id": 72,
  "genre": "三角関数編",
  "problem": "\\int \\dfrac{1}{\\cos^4 x} \\, dx",
  "policy": "\\(t = \\tan x\\)で置換",
  "answer": "\\tan x + \\dfrac{1}{3}\\tan^3 x + C",
  "explanation":
    "\\[\\int \\dfrac{1}{\\cos^4 x}\\,dx = \\int \\dfrac{\\sin^2 x + \\cos^2 x}{\\cos^4 x}\\,dx = \\int\\left(\\dfrac{1}{\\cos^2 x} + \\dfrac{\\sin^2 x}{\\cos^4 x}\\right)\\,dx\\]"
    + "\\[= \\tan x + \\int (\\tan x)^2 \\cdot \\boxed{\\dfrac{1}{\\cos^2 x}}\\,dx = \\tan x + \\dfrac{1}{3}\\tan^3 x + C\\]"
    + "【解説】\\(\\dfrac{1}{\\sin^2 x}\\)や\\(\\dfrac{1}{\\cos^2 x}\\)は三角関数の公式によって\\(\\tan x\\)で表せる上に\\(\\tan x\\)や\\(\\dfrac{1}{\\tan x}\\)の微分なので、2乗の状態でも微分はみだし形を作り出すことが出来る。",
  "check": true
},{
  "id": 73,
  "genre": "三角関数編",
  "problem": "\\int e^x \\sin 2x \\, dx",
  "policy": "部分積分2回 \\( \\Rightarrow \\) 同型出現",
  "answer": "\\dfrac{1}{5}e^x (\\sin 2x - 2\\cos 2x) + C",
  "explanation":
    "\\[\\int e^x \\sin 2x\\,dx = e^x \\sin 2x - 2\\int e^x \\cos 2x\\,dx = e^x \\sin 2x - 2\\left(e^x \\cos 2x + 2\\int e^x \\sin 2x\\,dx\\right)\\]"
    + "\\[= e^x \\sin 2x - 2e^x \\cos 2x - 4\\int e^x \\sin 2x\\,dx\\]"
    + "\\[\\text{より }\\int e^x \\sin 2x\\,dx = \\dfrac{1}{5}e^x (\\sin 2x - 2\\cos 2x) + C\\]"
    + "【解説】(指数関数)\\(\\times\\)(三角関数)は部分積分2回で同じ形が出現する。同形が出たら移項して係数を整えればよい。"
    + "\\[【別解】F = \\int e^x \\sin 2x\\,dx\\text{、}G = \\int e^x \\cos 2x\\,dx\\text{とすると、}\\]"
    + "\\[\\left\\{\\begin{matrix} F = e^x \\sin 2x - 2\\int e^x \\cos 2x\\,dx = e^x \\sin 2x - 2G \\\\ G = e^x \\cos 2x + 2\\int e^x \\sin 2x\\,dx = e^x \\cos 2x + 2F \\end{matrix}\\right\\}\\]"
    + "\\(\\text{これを解いて、}\\) "
    + "\\[F = e^x \\sin 2x - 2(e^x \\cos 2x + 2F) = e^x \\sin 2x - 2e^x \\cos 2x - 4F\\]"
    + "\\[\\text{より }F = \\dfrac{1}{5}e^x (\\sin 2x - 2\\cos 2x) + C\\]"
    + "【解説】必ず\\(\\sin\\)と\\(\\cos\\)がペアで出てくることから、両方文字において連立すると、かなりシンプルな計算で求めることが出来る。部分積分が苦手ならこちら。",
  "check": true
},{
  "id": 74,
  "genre": "三角関数編",
  "problem": "\\int e^{2x} \\cos 3x \\, dx",
  "policy": "部分積分2回 \\( \\Rightarrow \\) 同型出現",
  "answer": "\\dfrac{1}{13}e^{2x} (3\\sin 3x + 2\\cos 2x) + C",
  "explanation":
    "\\[\\int e^{2x} \\cos 3x\\,dx = \\dfrac{1}{2}e^{2x} \\cos 3x + \\dfrac{3}{2}\\int e^{2x} \\sin 3x\\,dx\\]"
    + "\\[= \\dfrac{1}{2}e^{2x} \\cos 3x + \\dfrac{3}{2}\\left(\\dfrac{1}{2}e^{2x} \\sin 3x - \\dfrac{3}{2}\\int e^{2x} \\cos 3x\\,dx\\right)\\]"
    + "\\[= \\dfrac{1}{2}e^{2x} \\cos 3x + \\dfrac{3}{4}e^{2x} \\sin 3x - \\dfrac{9}{4}\\int e^{2x} \\cos 3x\\,dx\\]"
    + "\\[\\text{より }\\int e^{2x} \\cos 3x\\,dx = \\dfrac{1}{13}e^{2x} (2\\cos 3x + 3\\sin 3x) + C\\]"
    + "【解説】(指数関数)\\(\\times\\)(三角関数)は部分積分2回で同じ形が出現する。同形が出たら移項して係数を整えればよい。"
    + "\\[【別解】F = \\int e^{2x} \\cos 3x\\,dx\\text{、}G = \\int e^{2x} \\sin 3x\\,dx\\text{とすると、}\\]"
    + "\\[\\left\\{\\begin{matrix} F = \\dfrac{1}{2}e^{2x} \\cos 3x + \\dfrac{3}{2}\\int e^{2x} \\sin 3x\\,dx = \\dfrac{1}{2}e^{2x} \\cos 3x + \\dfrac{3}{2}G \\\\ G = \\dfrac{1}{2}e^{2x} \\sin 3x - \\dfrac{3}{2}\\int e^{2x} \\cos 3x\\,dx = \\dfrac{1}{2}e^{2x} \\sin 3x - \\dfrac{3}{2}F \\end{matrix}\\right\\}\\]"
    + "\\(\\text{これを解いて、}\\)"
    + "\\[F = \\dfrac{1}{2}e^{2x} \\cos 3x + \\dfrac{3}{2}\\left(\\dfrac{1}{2}e^{2x} \\sin 3x - \\dfrac{3}{2}F\\right) = \\dfrac{1}{2}e^{2x} \\cos 3x + \\dfrac{3}{4}e^{2x} \\sin 3x - \\dfrac{9}{4}F\\]"
    + "\\[\\text{より }F = \\dfrac{1}{13}e^{2x} (2\\cos 3x + 3\\sin 3x) + C\\]"
    + "【解説】必ず\\(\\sin\\)と\\(\\cos\\)がペアで出てくることから、両方文字において連立すると、かなりシンプルな計算で求めることが出来る。部分積分が苦手ならこちら。",
  "check": true
},{"id": 75,
  "genre": "指数関数編",
  "problem": "\\int x^3 e^{x^2} \\, dx",
  "policy": "\\(t = x^2\\)と置換 + 部分積分",
  "answer": "\\dfrac{1}{2} e^{x^2} (x+1)(x-1) + C",
  "explanation":
    "\\(t = x^2\\)とすると、\\(\\dfrac{dt}{dx} = 2x\\)より、"
    + "\\[\\int x^3 e^{x^2}\\,dx = \\dfrac{1}{2} \\int t e^t dt = \\dfrac{1}{2} t e^t - \\dfrac{1}{2} \\int e^t dt = \\dfrac{1}{2} e^t(t-1) + C\\]"
    + "\\[= \\dfrac{1}{2} e^{x^2} (x+1)(x-1) + C\\]"
    + "【解説】わかりづらいかもしれないが、\\(x^3\\)には\\(x^2\\)が含まれていること、さらに\\(x^2\\)の微分も含まれているので、置換が可能である。この問題の場合はさらに部分積分が必要なので、文字において丁寧に置換する方が計算ミスが少ない。基本的に「目で見て積分できる」場合は文字に置かない。「目だけではできない」「計算が面倒になる」場合は文字において置換する。",
  "check": true
},{
  "id": 76,
  "genre": "指数関数編",
  "problem": "\\int_0^{\\log 2} \\sqrt{e^x - 1}\\,dx",
  "policy": "\\(t = \\sqrt{e^x - 1}\\)で置換",
  "answer": "2 - \\dfrac{\\pi}{2}",
  "explanation":
    "\\(t = \\sqrt{e^x - 1}\\)とすると、\\(t^2 = e^x - 1\\)、\\(2t \\cdot \\dfrac{dt}{dx} = e^x = 1+t^2\\)であり、"
    + "\\(\\dfrac{dx}{dt} = \\dfrac{2t}{1+t^2}\\)で、\\(x: 0 \\to \\log 2\\)のとき、\\(t: 0 \\to 1\\)だから、"
    + "\\[\\int_0^{\\log 2} \\sqrt{e^x - 1}\\,dx = \\int_0^1 t \\cdot \\frac{2t}{t^2 + 1}\\,dt = 2 \\int_0^1 \\frac{t^2}{t^2 + 1}\\,dt\\]"
    + "\\[= 2 \\int_0^1 \\left(1 - \\frac{1}{t^2 + 1}\\right)\\,dt = 2 - 2 \\int_0^1 \\frac{1}{t^2 + 1}\\,dt\\]"
    + "\\(t = \\tan \\theta\\)とすると、\\(\\dfrac{dt}{d\\theta} = \\dfrac{1}{\\cos^2 \\theta}\\)、\\(t: 0 \\to 1\\)のとき、\\(\\theta: 0 \\to \\dfrac{\\pi}{4}\\)より、"
    + "\\[\\int_0^1 \\frac{1}{t^2 + 1}\\,dt = \\int_0^{\\tfrac{\\pi}{4}} \\frac{1}{t^2 + 1} \\cdot dt = \\dfrac{\\pi}{4}\\]"
    + "\\[\\int_0^{\\log 2} \\sqrt{e^x - 1}\\,dx = 2 - \\dfrac{\\pi}{2}\\]"
    + "【解説】2段階の置換が必要。\\(e^x\\)が絡む積分は最終的に必ず\\(e^x = t\\)と置くことで\\(t\\)だけの積分にすることができるので、\\(e^x\\)が\\(x\\)のような感覚で積分していくとよい。具体的には、\\(\\sqrt{e^x - 1}\\)は\\(e^x\\)の1次なので、丸ごと置換してしまえばよいのである。なお、この結果分母に因数分解できない2次式が出てしまうので、もう一度\\(\\tan \\theta\\)に置き換える必要がある。この時、他の部分は簡単に計算できるので、面倒そうな積分部分だけ分けて計算することが、結果的に計算ミスを防ぐことにつながる。",
  "check": true
},{
  "id": 77,
  "genre": "指数関数編",
  "problem": "\\int_0^{\\log 2} \\sqrt{e^x + 1}\\,dx",
  "policy": "\\(t = \\sqrt{e^x + 1}\\)で置換",
  "answer": "2(\\sqrt{3} - \\sqrt{2}) + \\log\\left(\\frac{(\\sqrt{3} - 1)(\\sqrt{2} + 1)}{(\\sqrt{3} + 1)(\\sqrt{2} - 1)}\\right)",
  "explanation":
    "\\(\\sqrt{e^x + 1} = t\\)とすると、\\(t^2 = e^x + 1\\)、\\(2t \\cdot \\dfrac{dt}{dx} = e^x = t^2 - 1\\)なので、"
    + "\\(\\dfrac{dx}{dt} = \\dfrac{2t}{t^2 - 1}\\)であり、\\(x: 0 \\to \\log 2\\)のとき、\\(t: \\sqrt{2} \\to \\sqrt{3}\\)だから、"
    + "\\[\\int_0^{\\log 2} \\sqrt{e^x + 1}\\,dx = \\int_{\\sqrt{2}}^{\\sqrt{3}} t \\cdot \\frac{2t}{t^2 - 1}\\,dt = 2 \\int_{\\sqrt{2}}^{\\sqrt{3}} \\frac{t^2}{t^2 - 1}\\,dt\\]"
    + "\\[= 2 \\int_{\\sqrt{2}}^{\\sqrt{3}} \\left(1 + \\frac{1}{t^2 - 1}\\right)\\,dt = 2\\left[t\\right]_{\\sqrt{2}}^{\\sqrt{3}} + \\int_{\\sqrt{2}}^{\\sqrt{3}} \\left(\\frac{1}{t - 1} - \\frac{1}{t + 1}\\right)\\,dt\\]"
    + "\\[= 2(\\sqrt{3} - \\sqrt{2}) + \\left[\\log|t - 1| - \\log|t + 1|\\right]_{\\sqrt{2}}^{\\sqrt{3}}\\]"
    + "\\[= 2(\\sqrt{3} - \\sqrt{2}) + \\log(\\sqrt{3} - 1) - \\log(\\sqrt{3} + 1) - \\log(\\sqrt{2} - 1) + \\log(\\sqrt{2} + 1)\\]"
    + "\\[= 2(\\sqrt{3} - \\sqrt{2}) + \\log\\left(\\frac{(\\sqrt{3} - 1)(\\sqrt{2} + 1)}{(\\sqrt{3} + 1)(\\sqrt{2} - 1)}\\right)\\]"
    + "【解説】2段階の置換が必要。\\(e^x\\)が絡む積分は最終的に必ず\\(e^x = t\\)と置くことで\\(t\\)だけの積分にすることができるので、\\(e^x\\)が\\(x\\)のような感覚で積分していくとよい。"
    + "具体的には、\\(\\sqrt{e^x - 1}\\)は\\(e^x\\)の1次式なので、丸ごと置換してしまえばよいのである。"
    + "置換後が因数分解可能な2次式を分母にもつ分数関数となるので、部分分数分解で処理することとなる。"
    + "計算が面倒なので、丁寧に処理すること。",
  "check": true
},{
  "id": 78,
  "genre": "指数関数編",
  "problem": "\\int \\frac{1}{e^x + 1}\\,dx",
  "policy": "分母分子に \\(\\times e^x\\)⇒微分はみだし",
  "answer": "x - \\log(e^x + 1) + C",
  "explanation":
    "\\begin{align*} \\int \\frac{1}{e^x + 1}\\,dx &= \\int \\frac{e^x}{e^x(e^x + 1)}\\,dx \\\\ &= \\int \\left(\\frac{1}{e^x} - \\frac{1}{e^x + 1}\\right) \\boxed{e^x}\\,dx \\\\ &= \\log e^x - \\log(e^x + 1) + C \\\\ &= x - \\log(e^x + 1) + C \\end{align*}"
    + "<br>"
    + "【解説】指数関数の場合、\\(e^x\\)を掛ければ必ず微分はみだしを作ることができる。",
  "check":true
},{
  "id": 79,
  "genre": "指数関数編",
  "problem": "\\int \\frac{e^x}{e^x + 1}\\,dx",
  "policy": "微分はみだし",
  "answer": "\\log(e^x + 1) + C",
  "explanation":
    "\\[\\int \\frac{\\boxed{e^x}}{e^x + 1}\\,dx = \\log(e^x + 1) + C\\]"
    + "<br>"
    + "【解説】そもそも最初から分母の微分がくっついているので、必ず見抜くこと。指数関数はこんなのが多い。",
  "check": true
},{
  "id": 80,
  "genre": "指数関数編",
  "problem": "\\int \\sqrt{\\frac{e^x}{e^{-x} + 1}}\\,dx",
  "policy": "分母分子に \\(\\times \\sqrt{e^x}\\)⇒微分はみだし",
  "answer": "2\\sqrt{1 + e^x} + C",
  "explanation":
    "\\[\\int \\sqrt{\\frac{e^x}{e^{-x} + 1}}\\,dx = \\int \\frac{\\boxed{e^x}}{\\sqrt{1 + e^x}}\\,dx = 2\\sqrt{1 + e^x} + C\\]"
    + "<br>"
    + "【解説】分子が\\(e^x\\)になってくれればよいので、\\(\\sqrt{e^x}\\)を分母分子に掛ければよい。",
  "check": true
},{
  "id": 81,
  "genre": "指数関数編",
  "problem": "\\int x^3 e^{-x}\\,dx",
  "policy": "3回部分積分",
  "answer": "-e^{-x}(x^3 + 3x^2 + 6x + 6) + C",
  "explanation":
    "\\[\\int x^3 e^{-x}\\,dx = -x^3 e^{-x} - (-3x^2)(-e^{-x}) - (-6x)(-e^{-x}) - (-6)(-e^{-x}) + C\\]"
    + "<br>"
    + "\\[= -e^{-x}(x^3 + 3x^2 + 6x + 6) + C\\]"
    + "<br>"
    + "【解説】(多項式) \\(\\times\\) (指数関数) も部分積分で処理する。",
  "check": true
},{
  "id": 82,
  "genre": "指数関数編",
  "problem": "\\int (x + 1) 2^x\\,dx",
  "policy": "部分積分",
  "answer": "\\frac{2^x}{(\\log 2)^2}\\{(x + 1)\\log 2 - 1\\} + C",
  "explanation":
    "\\[\\int (x + 1) 2^x\\,dx = (x + 1)\\frac{1}{\\log 2} 2^x - \\int \\frac{1}{\\log 2} 2^x\\,dx = \\frac{2^x}{(\\log 2)^2}\\{(x + 1)\\log 2 - 1\\} + C\\]"
    + "<br>"
    + "【解説】\\(2^x\\)だろうが\\(e^x\\)だろうが基本的には変わらないので、騙されないように。\\(x + 1\\)を微分する部分積分。",
  "check": true
},{
  "id": 83,
  "genre": "指数関数編",
  "problem": "\\int_{-1}^{1} (e^x + e^{-x})^2\\,dx",
  "policy": "展開",
  "answer": "e^2 + 4 - \\frac{1}{e^2}",
  "explanation":
    "\\[\\int_{-1}^{1} (e^x + e^{-x})^2\\,dx = 2\\int_{0}^{1} (e^{2x} + 2 + e^{-2x})\\,dx\\]"
    + "<br>"
    + "\\[= 2\\left[\\frac{1}{2}e^{2x} + 2x - \\frac{1}{2}e^{-2x}\\right]_{0}^{1} = e^2 + 4 - \\frac{1}{e^2}\\]"
    + "<br>"
    + "【解説】展開して計算するだけだが、偶関数であることには気づいてほしい。",
  "check": true
},{
  "id": 84,
  "genre": "指数関数編",
  "problem": "\\int \\frac{1}{e^x - 1}\\,dx",
  "policy": "分母分子に \\(\\times e^x\\)⇒微分はみだし",
  "answer": "\\log|e^x - 1| - x + C",
  "explanation":
    "\\[\\int \\frac{1}{e^x - 1}\\,dx = \\int \\frac{e^x}{e^x(e^x - 1)}\\,dx = \\int \\left(\\frac{1}{e^x - 1} - \\frac{1}{e^x}\\right) \\boxed{e^x}\\,dx = \\log|e^x - 1| - x + C\\]"
    + "<br>"
    + "【解説】\\(e^x\\)を掛けると微分はみだしにできる形である。自分で分母分子に文字を掛けたので、必ず部分分数分解ができる。",
  "check": true
},{
  "id": 85,
  "genre": "指数関数編",
  "problem": "\\int \\frac{1}{e^x - e^{-x}}\\,dx",
  "policy": "分母分子に \\(\\times e^x\\)⇒微分はみだし",
  "answer": "\\frac{1}{2}\\log\\left|\\frac{e^x - 1}{e^x + 1}\\right| + C",
  "explanation":
    "\\[\\int \\frac{1}{e^x - e^{-x}}\\,dx = \\int \\frac{e^x}{(e^x)^2 - 1}\\,dx\\]"
    + "<br>"
    + "\\[= \\int \\frac{1}{2}\\left(\\frac{1}{e^x - 1} - \\frac{1}{e^x + 1}\\right) \\boxed{e^x}\\,dx = \\frac{1}{2}\\log\\left|\\frac{e^x - 1}{e^x + 1}\\right| + C\\]"
    + "<br>"
    + "【解説】\\(e^x\\)を掛けると微分はみだしにできる形である。自分で分母分子に文字を掛けたので、必ず部分分数分解ができる。",
  "check": true
},{
  "id": 86,
  "genre": "指数関数編",
  "problem": "\\int \\frac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx",
  "policy": "微分はみだし",
  "answer": "\\log(e^x + e^{-x}) + C",
  "explanation":
    "\\[\\int \\frac{\\boxed{e^x - e^{-x}}}{e^x + e^{-x}}\\,dx = \\log(e^x + e^{-x}) + C\\]"
    + "<br>"
    + "【解説】パッと見てはわかりづらいかもしれないが、よくある形なので微分はみだしであることには気づきたい。",
  "check": true
},{
  "id": 87,
  "genre": "指数関数編",
  "problem": "\\int \\frac{e^{2x}}{(e^x + 1)^2}\\,dx",
  "policy": "\\(t = e^x\\)と置換",
  "answer": "\\log(e^x + 1) + \\frac{1}{e^x + 1} + C",
  "explanation":
    "\\(e^x = t\\)とすると、\\(\\frac{dx}{dt} = \\frac{1}{t}\\)より、"
    + "<br>"
    + "\\[\\int \\frac{e^{2x}}{(e^x + 1)^2}\\,dx = \\int \\frac{t^2}{(t + 1)^2} \\cdot \\frac{1}{t}\\,dt = \\int \\frac{t}{(t + 1)^2}\\,dt\\]"
    + "<br>"
    + "\\[= \\int \\left\\{ \\frac{1}{t + 1} - \\frac{1}{(t + 1)^2} \\right\\}\\,dt = \\log|t + 1| + \\frac{1}{t + 1} + C\\]"
    + "<br>"
    + "\\[= \\log(e^x + 1) + \\frac{1}{e^x + 1} + C\\]"
    + "<br>"
    + "【解説】今回は最初から\\(e^{2x}\\)の形になっている。\\(e^x\\)で割ってもいいが分母の計算が面倒なので、置換してしまった方がよい。なお、今回の回答では部分分数分解を用いたので、2段階の置換せずに処理してしまったが、「展開したくないカッコは置換」の原則に従えば分母を更に置換する人もいるだろう。なので、最初から\\(e^x + 1 = t\\)と置いてしまっても良い。定数の違いは微分に影響しないので、こちらの方が楽に計算できる。"
    ,
  "check": true
},{
  "id": 88,
  "genre": "対数関数編",
  "problem": "\\int \\log(2x + 1)\\,dx",
  "policy": "部分積分⇒\\(2x + 1\\)を召喚",
  "answer": "\\frac{1}{2}(2x + 1)\\log(2x + 1) - x + C",
  "explanation":
    "\\[\\int \\log(2x + 1)\\,dx = \\frac{1}{2}\\int (2x + 1)'\\log(2x + 1)\\,dx\\]"
    + "<br>"
    + "\\[= \\frac{1}{2}(2x + 1)\\log(2x + 1) - \\int \\frac{1}{2}(2x + 1) \\cdot \\frac{1}{2x + 1}\\cdot 2\\,dx\\]"
    + "<br>"
    + "\\[= \\frac{1}{2}(2x + 1)\\log(2x + 1) - \\int 1\\,dx = \\frac{1}{2}(2x + 1)\\log(2x + 1) - x + C\\]"
    + "<br>"
    + "【解説】\\(\\log\\)の積分は、\\(1\\)を微分する形で部分積分が基本である。真数と同じものを出すように部分積分してくる。今回は\\((2x + 1)\\)を作るように\\(1\\)を積分する。",
  "check": true
},{
  "id": 89,
  "genre": "対数関数編",
  "problem": "\\int \\frac{(\\log x)^2}{x}\\,dx",
  "policy": "微分はみだし",
  "answer": "\\frac{1}{3}(\\log x)^3 + C",
  "explanation":
    "\\[\\int \\frac{(\\log x)^2}{x}\\,dx = \\int (\\log x)^2\\cdot \\boxed{\\frac{1}{x}}\\,dx = \\frac{1}{3}(\\log x)^3 + C\\]"
    + "<br>"
    + "【解説】\\(\\log\\)が\\(n\\)乗で出てきた場合は\\(\\frac{1}{x}\\)を微分はみだしとして使うことが多いので、念頭におこう。",
  "check": true
},{
  "id": 90,
  "genre": "対数関数編",
  "problem": "\\int x^2(\\log x + 1)\\,dx",
  "policy": "部分積分",
  "answer": "\\frac{1}{3}x^3 \\log x + \\frac{2}{9}x^3 + C",
  "explanation":
    "\\[\\int x^2(\\log x + 1)\\,dx = \\frac{1}{3}x^3(\\log x + 1) - \\int \\frac{1}{3}x^3 \\cdot \\frac{1}{x}\\,dx\\]"
    + "<br>"
    + "\\[= \\frac{1}{3}x^3(\\log x + 1) - \\frac{1}{9}x^3 + C\\]"
    + "<br>"
    + "\\[= \\frac{1}{3}x^3 \\log x + \\frac{2}{9}x^3 + C\\]"
    + "<br>"
    + "【解説】\\(\\log\\)を微分するように部分積分。展開してもいいが、展開しなくても\\(\\log x + 1\\)は丸ごと微分で\\(\\frac{1}{x}\\)となるので、ひと塊でやってしまった方が計算は楽。",
  "check": false
},{
  "id": 91,
  "genre": "対数関数編",
  "problem": "\\int \\log(x + \\sqrt{x^2 + 1})\\,dx",
  "policy": "部分積分<br>xを召喚",
  "answer": "x\\log(x + \\sqrt{x^2 + 1}) - \\sqrt{x^2 + 1} + C",
  "explanation":
    "\\[\\int \\log(x + \\sqrt{x^2 + 1})\\,dx = x\\log(x + \\sqrt{x^2 + 1}) - \\int x \\cdot \\dfrac{1}{x+\\sqrt{x^2 + 1}} \\cdot \\left(1+\\dfrac{1}{\\sqrt{x^2+1}}\\right) \\,dx\\]"
    + "<br>"
    + "\\[= x\\log(x + \\sqrt{x^2 + 1}) - \\int \\frac{\\boxed{x}}{\\sqrt{x^2 + 1}}\\,dx\\]"
    + "<br>"
    + "\\[= x\\log(x + \\sqrt{x^2 + 1}) - \\sqrt{x^2 + 1} + C\\]"
    + "<br>"
    + "【解説】とにかく訳の分からない\\(\\log\\)は微分したいので、策が何もなくてもとりあえず部分積分を実行してみることが大事。意外と何とかなることが多い。",
  "check": true
},{
  "id": 92,
  "genre": "対数関数編",
  "problem": "\\int_1^{\\sqrt{3}} \\log(x^2 + 1)\\,dx",
  "policy": "部分積分(\\(x\\)を召喚)",
  "answer": "(2\\sqrt{3} - 1)\\log 2 - 2(\\sqrt{3} - 1) + \\frac{\\pi}{6}",
  "explanation":
    "\\[\\int_1^{\\sqrt{3}} \\log(x^2 + 1)\\,dx = [x\\log(x^2 + 1)]_1^{\\sqrt{3}} - \\int_1^{\\sqrt{3}} x \\cdot \\frac{2x}{x^2 + 1}\\,dx\\]"
    + "<br>"
    + "\\[= 2\\sqrt{3}\\log 2 - \\log 2 - 2\\int_1^{\\sqrt{3}} \\left(1 - \\frac{1}{x^2 + 1}\\right)\\,dx\\]"
    + "<br>"
    + "\\[= (2\\sqrt{3} - 1)\\log 2 - 2(\\sqrt{3} - 1) + 2\\int_1^{\\sqrt{3}} \\frac{1}{x^2 + 1}\\,dx\\]"
    + "<br>"
    + "\\(x = \\tan \\theta\\)とすると、\\(\\dfrac{dx}{d\\theta} = \\dfrac{1}{\\cos^2 \\theta}\\)、\\(x: 1 \\to \\sqrt{3}\\)のとき、\\(\\theta: \\dfrac{\\pi}{4} \\to \\dfrac{\\pi}{3}\\)より、"
    + "<br>"
    + "\\[\\int_1^{\\sqrt{3}} \\frac{1}{x^2 + 1}\\,dx = \\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{3}} 1\\,d\\theta = \\dfrac{\\pi}{12}\\]"
    + "<br>"
    + "よって、\\(\\int_1^{\\sqrt{3}} \\log(x^2 + 1)\\,dx = (2\\sqrt{3} - 1)\\log 2 - 2(\\sqrt{3} - 1) + \\dfrac{\\pi}{6}\\)"
    + "<br>"
    + "【解説】対数関数なのでとりあえず部分積分をするが、部分積分した直後の式を見て「微分がはみでてる！」とか訳の分からないことを考えないように。微分したんだから当たり前である。先に積分したものと掛け算して処理をしなければならない。今回は(2次)/(2次)の分数式が出現したので、まず部分数化し、\\(\\tan \\theta\\)に置換している。",
  "check": false
},{
  "id": 93,
  "genre": "対数関数編",
  "problem": "\\int_2^3 \\log(x^2 - 1)\\,dx",
  "policy": "部分積分(\\(x\\)を召喚)",
  "answer": "10\\log 2 - 3\\log 3 - 2",
  "explanation":
    "\\[\\int_2^3 \\log(x^2 - 1)\\,dx = [x\\log(x^2 - 1)]_2^3 - \\int_2^3 x \\cdot \\frac{2x}{x^2 - 1}\\,dx = 9\\log 2 - 2\\log 3 - 2\\int_2^3 \\left(1 + \\frac{1}{x^2 - 1}\\right)\\,dx\\]"
    + "<br>"
    + "\\[= 9\\log 2 - 2\\log 3 - 2\\left[\\log\\left|\\frac{x - 1}{x + 1}\\right|\\right]_2^3 - 2\\int_2^3 1\\,dx = 10\\log 2 - 3\\log 3 - 2\\]"
    + "<br>"
    + "【解説】対数関数なのでとりあえず部分積分をするが、部分積分した直後の式を見て「微分がはみでてる！」とか訳の分からないことを考えないように。微分したんだから当たり前である。先に積分したものと掛け算して処理をしなければならない。今回は(2次)/(2次)の分数式が出現したので、まず部分分数分解ができる形になっている。",
  "check": true
},{
  "id": 94,
  "genre": "対数関数編",
  "problem": "\\int \\log_2 x\\,dx",
  "policy": "底の変換公式",
  "answer": "\\frac{1}{\\log 2}(x\\log x - x) + C",
  "explanation":
    "\\[\\int \\log_2 x\\,dx = \\frac{1}{\\log 2}\\int \\log x\\,dx = \\frac{1}{\\log 2}\\left(x\\log x - \\int x\\cdot \\frac{1}{x}\\,dx\\right) = \\frac{1}{\\log 2}(x\\log x - x) + C\\]"
    + "<br>"
    + "【解説】底が\\(e\\)でないものは、変換公式ですぐに\\(e\\)にしてしまうこと。",
  "check": true
},{
  "id": 95,
  "genre": "対数関数編",
  "problem": "\\int x\\log x\\,dx",
  "policy": "部分積分",
  "answer": "\\frac{1}{2}x^2 \\log x - \\frac{1}{4}x^2 + C",
  "explanation":
    "\\[\\int x\\log x\\,dx = \\frac{1}{2}x^2 \\log x - \\int \\frac{1}{2}x^2 \\cdot \\frac{1}{x}\\,dx = \\frac{1}{2}x^2 \\log x - \\frac{1}{4}x^2 + C\\]"
    + "<br>"
    + "【解説】\\(\\log\\)の積分は部分積分。(多項式)\\(\\times\\)(対数関数)の場合は、多項式が積分、対数関数が微分で\\(x\\)ある。他の部分積分とは逆なので注意。",
  "check": true
},{
  "id": 96,
  "genre": "対数関数編",
  "problem": "\\int x\\log x^2\\,dx",
  "policy": "微分はみだし",
  "answer": "\\frac{1}{2}(x^2 \\log x^2 - x^2) + C",
  "explanation":
    "\\[\\int x\\log x^2\\,dx = \\frac{1}{2}\\int \\boxed{2x}\\log x^2\\,dx = \\frac{1}{2}(x^2 \\log x^2 - x^2) + C\\]"
    + "<br>"
    + "【解説】部分積分しようと思わないように。微分がはみでている。ただ、\\(\\log\\)の積分の公式を知らなければ、部分積分することになる。",
  "check": true
},{
  "id": 97,
  "genre": "対数関数編",
  "problem": "\\int_1^{e} \\frac{\\log x}{x}\\,dx",
  "policy": "微分はみだし",
  "answer": "\\frac{1}{2}",
  "explanation":
    "\\[\\int_1^{e} \\frac{\\log x}{x}\\,dx = \\int_1^{e} \\log x\\cdot \\boxed{\\frac{1}{x}}\\,dx = \\left[\\frac{1}{2}(\\log x)^2\\right]_1^{e} = \\frac{1}{2}\\]"
    + "<br>"
    + "【解説】微分がはみでていることに注意。瞬殺したい。",
  "check": true
},{
  "id": 98,
  "genre": "対数関数編",
  "problem": "\\int \\frac{\\log x}{x^2}\\,dx",
  "policy": "部分積分(\\(x\\)を召喚)",
  "answer": "-\\frac{1 + \\log x}{x} + C",
  "explanation":
    "\\[\\int \\frac{\\log x}{x^2}\\,dx = x\\cdot \\frac{\\log x}{x^2} - \\int x \\cdot \\frac{\\frac{1}{x} \\cdot x^2 - 2x\\log x}{x^4}\\,dx = \\frac{\\log x}{x} - \\int \\frac{1}{x^2} dx + 2\\int \\frac{\\log x}{x^2}\\,dx\\]"
    + "<br>"
    + "\\[\\int \\dfrac{\\log x}{x^2}\\,dx = -\\dfrac{\\log x}{x} - \\dfrac{1}{x} + C = -\\dfrac{1 + \\log x}{x} + C\\]"
    + "<br>"
    + "【解説】分母が2乗なので、微分がはみ出ていたりしないので、諦めて部分積分をかける。"
    + "<br>"
    + "上の解答は\\(x\\)を召喚して部分積分した。このようにすると、同形が出現するので、係数をいじって解答が求まる。"
    + "<br>"
    + "【別解】\\(\\dfrac{1}{x^2}\\)は簡単に積分して\\(-\\dfrac{1}{x}\\)にできるので、ここを部分積分するのが最適。"
    + "\\[\\int \\frac{\\log x}{x^2}\\,dx = -\\frac{1}{x}\\log x + \\int \\frac{1}{x}\\cdot \\frac{1}{x}\\,dx = -\\frac{\\log x}{x} - \\frac{1}{x} + C = -\\frac{1 + \\log x}{x} + C\\]",
  "check": false
},{
  "id": 99,
  "genre": "対数関数編",
  "problem": "\\int \\frac{1}{x\\log x}\\,dx",
  "policy": "微分はみだし",
  "answer": "\\log|\\log x| + C",
  "explanation":
    "\\[\\int \\frac{1}{x\\log x}\\,dx = \\int \\frac{1}{\\log x}\\cdot \\boxed{\\frac{1}{x}}\\,dx = \\log|\\log x| + C\\]"
    + "<br>"
    + "【解説】分母に\\(x\\)と\\(\\log x\\)が両方並んでいるせいで極めて分かりづらいが、これもやはり微分がはみでている。",
  "check": true
},{
  "id": 100,
  "genre": "対数関数編",
  "problem": "\\int (\\log x)^3\\,dx",
  "policy": "部分積分3回(\\(x\\)を召喚)",
  "answer": "x(\\log x)^3 - 3x(\\log x)^2 + 6x\\log x - 6x + C",
  "explanation":
    "\\[\\int (\\log x)^3\\,dx = x(\\log x)^3 - 3\\int x\\cdot (\\log x)^2 \\cdot \\frac{1}{x}\\,dx\\]"
    + "<br>"
    + "\\[= x(\\log x)^3 - 3\\int (\\log x)^2\\,dx\\]"
    + "<br>"
    + "\\[= x(\\log x)^3 - 3x(\\log x)^2 + 6\\int x\\cdot \\log x \\cdot \\frac{1}{x}\\,dx\\]"
    + "<br>"
    + "\\[= x(\\log x)^3 - 3x(\\log x)^2 + 6\\int \\log x\\,dx\\]"
    + "<br>"
    + "\\[= x(\\log x)^3 - 3x(\\log x)^2 + 6x\\log x - 6x + C\\]"
    + "<br>"
    + "【解説】対数関数の積分は、対数の次数の分だけ部分積分するのが基本。対数を微分すれば\\(\\frac{1}{x}\\)が出るので、\\(1\\)を積分した分と約分できるから、1回部分積分するごとに\\(\\log\\)が1個消える、という考え方で計算すればよい。ただし、最後は\\(\\int \\log x\\,dx = x\\log x - x + C\\)くらいは公式として覚えておくべき。",
  "check": true
},

];
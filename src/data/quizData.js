//　クイズデータ

const quizData = [
  // JavaScript-related questions
  {
    question: "JavaScriptの変数宣言に使えるキーワードはどれですか？",
    options: ["var", "let", "const", "全部"],
    category: "JavaScript",
    correctAnswer: 3,
  },
  {
    question:
      "JSON文字列をオブジェクトに変換するために使用されるメソッドはどれですか？",
    options: [
      "JSON.object()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.parse()",
    ],
    category: "JavaScript",
    correctAnswer: 3,
  },
  {
    question: "`typeof NaN` の結果は何ですか？",
    options: ["NaN", "number", "object", "undefined"],
    category: "JavaScript",
    correctAnswer: 1,
  },
  {
    question: "厳密な等価比較を行うための演算子はどれですか？",
    options: ["==", "!==", "===", "="],
    category: "JavaScript",
    correctAnswer: 2,
  },
  {
    question: "`bind` メソッドの目的は何ですか？",
    options: [
      "イベントを処理する",
      "関数の `this` コンテキストを設定する",
      "配列を操作する",
      "新しい関数を作成する",
    ],
    category: "JavaScript",
    correctAnswer: 1,
  },
  {
    question:
      "ドキュメントが完全にロードされた後にコードを実行するために使用される関数はどれですか？",
    options: [
      "document.ready",
      "document.addEventListener('DOMContentLoaded', ...)",
      "window.onload",
      "document.onload",
    ],
    category: "JavaScript",
    correctAnswer: 1,
  },
  {
    question: "`event.preventDefault()` の役割は何ですか？",
    options: [
      "イベントをキャンセルする",
      "イベントのデフォルトの動作を停止する",
      "イベントを開始する",
      "イベントの実行を許可する",
    ],
    category: "JavaScript",
    correctAnswer: 1,
  },
  {
    question: "`async` キーワードの目的は何ですか？",
    options: [
      "変数を作成する",
      "非同期関数を定義する",
      "同期関数を定義する",
      "定数を定義する",
    ],
    category: "JavaScript",
    correctAnswer: 1,
  },
  {
    question: "配列の末尾から最後の要素を削除するメソッドはどれですか？",
    options: ["slice()", "shift()", "splice()", "pop()"],
    category: "JavaScript",
    correctAnswer: 3,
  },

  // React-related questions
  {
    question: "Reactで状態を管理するためのフックは何ですか？",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    category: "React",
    correctAnswer: 1,
  },
  {
    question: "`useState` の目的は何ですか？",
    options: [
      "副作用を処理する",
      "新しいコンポーネントを作成する",
      "関数コンポーネント内での状態管理",
      "ルーティングを扱う",
    ],
    category: "React",
    correctAnswer: 2,
  },
  {
    question: "JSXとは何の略ですか？",
    options: ["JavaScript XML", "JavaScript XSL", "Java XML", "JavaScript EX"],
    category: "React",
    correctAnswer: 0,
  },
  {
    question: "副作用を処理するために使用されるフックはどれですか？",
    options: ["useState", "useMemo", "useReducer", "useEffect"],
    category: "React",
    correctAnswer: 3,
  },
  {
    question: "`componentDidMount` メソッドのデフォルトの動作は何ですか？",
    options: [
      "コンポーネントがマウントされる前に実行される",
      "コンポーネントがマウントされた後に実行される",
      "コンポーネントが更新される前に実行される",
      "コンポーネントが更新された後に実行される",
    ],
    category: "React",
    correctAnswer: 1,
  },
  {
    question:
      "クラスコンポーネントで状態を更新するために使用されるメソッドはどれですか？",
    options: [
      "this.changeState()",
      "this.modifyState()",
      "this.setState()",
      "this.updateState()",
    ],
    category: "React",
    correctAnswer: 2,
  },
  {
    question: "`props` の役割は何ですか？",
    options: [
      "副作用の処理",
      "コンポーネント内での状態管理",
      "ルーティングの定義",
      "親コンポーネントから子コンポーネントへのデータの受け渡し",
    ],
    category: "React",
    correctAnswer: 3,
  },
  {
    question: "`key` プロップはReactに対して何を助けますか？",
    options: [
      "コンポーネント内でのイベントを処理する",
      "コンポーネントのスタイルを定義する",
      "アイテムの変更、追加、削除を識別する",
      "コンポーネントの状態を管理する",
    ],
    category: "React",
    correctAnswer: 2,
  },
  {
    question:
      "Reactでコンポーネントを条件付きでレンダリングする方法はどれですか？",
    options: [
      "三項演算子または論理 && 演算子を使用する",
      "直接 `if` 文を使用する",
      "`switch` 文を使用する",
      "`try...catch` ブロックを使用する",
    ],
    category: "React",
    correctAnswer: 0,
  },
  {
    question: "`React.StrictMode` の目的は何ですか？",
    options: [
      "パフォーマンスを最適化する",
      "状態管理を扱う",
      "追加のチェックと警告を有効にする",
      "ルーティングを定義する",
    ],
    category: "React",
    correctAnswer: 2,
  },
  {
    question: "`useEffect` と `useMemo` の違いは何ですか？",
    options: [
      "`useEffect` は副作用を処理し、`useMemo` は値をメモ化してパフォーマンスを最適化する",
      "`useEffect` は状態を処理し、`useMemo` は副作用を処理する",
      "`useEffect` はDOMを更新し、`useMemo` は状態を更新する",
      "`useEffect` はルーティングに使用し、`useMemo` はデータ取得に使用する",
    ],
    category: "React",
    correctAnswer: 0,
  },

  // Programming-related questions
  {
    question: "次のうち、プログラミングパラダイムの一つはどれですか？",
    options: [
      "データベース管理",
      "ファイルシステム",
      "コンピュータネットワーキング",
      "オブジェクト指向プログラミング",
    ],
    category: "Programming",
    correctAnswer: 3,
  },
  {
    question: "CPUの略称は何ですか？",
    options: [
      "中央周辺装置",
      "中央処理装置",
      "コンピュータ周辺装置",
      "コンピュータ処理装置",
    ],
    category: "Programming",
    correctAnswer: 1,
  },
  {
    question: "どの言語が低水準のプログラミング言語として知られていますか？",
    options: ["Python", "Ruby", "アセンブリ", "JavaScript"],
    category: "Programming",
    correctAnswer: 2,
  },
  {
    question: "アルゴリズムの目的は何ですか？",
    options: [
      "データを保存する",
      "問題を解決する",
      "デバイスを接続する",
      "データを表示する",
    ],
    category: "Programming",
    correctAnswer: 1,
  },
  {
    question: "LIFO（Last In, First Out）を使用するデータ構造はどれですか？",
    options: ["連結リスト", "配列", "キュー", "スタック"],
    category: "Programming",
    correctAnswer: 3,
  },
  {
    question: "プログラミングにおける再帰とは何ですか？",
    options: [
      "エラーを処理する関数",
      "配列を反復処理する関数",
      "自身を呼び出す関数",
      "データをソートする関数",
    ],
    category: "Programming",
    correctAnswer: 2,
  },
  {
    question: "平均時間計算量が O(n log n) のソートアルゴリズムはどれですか？",
    options: ["挿入ソート", "バブルソート", "選択ソート", "マージソート"],
    category: "Programming",
    correctAnswer: 3,
  },
  {
    question: "オブジェクト指向プログラミングにおけるカプセル化とは何ですか？",
    options: [
      "内部状態を隠蔽し、オブジェクトのメソッドを通じてのみやり取りを行うこと",
      "親クラスからプロパティとメソッドを継承すること",
      "インターフェースを実装すること",
      "新しいオブジェクトを作成すること",
    ],
    category: "Programming",
    correctAnswer: 0,
  },
  {
    question: "プログラミングにおけるポインタとは何ですか？",
    options: [
      "ループの一種",
      "データをソートする方法",
      "例外を処理する関数",
      "他の変数のメモリアドレスを格納する変数",
    ],
    category: "Programming",
    correctAnswer: 3,
  },
  {
    question: "次のうち、ループの一種ではないものはどれですか？",
    options: ["For", "Switch", "While", "Do-While"],
    category: "Programming",
    correctAnswer: 1,
  },
  {
    question: "次のうち、ハイレベルプログラミング言語の例はどれですか？",
    options: ["Python", "Fortran", "C", "アセンブリ"],
    category: "Programming",
    correctAnswer: 0,
  },
  {
    question: "データベースインデックスの目的は何ですか？",
    options: [
      "トランザクションを管理する",
      "データを保存する",
      "ユーザー認証を扱う",
      "データ取得操作を高速化する",
    ],
    category: "Programming",
    correctAnswer: 3,
  },
  {
    question: "次のうち、バージョン管理システムはどれですか？",
    options: ["Git", "Docker", "Jenkins", "Jira"],
    category: "Programming",
    correctAnswer: 0,
  },
  {
    question: "`finally` ブロックは例外処理において何をしますか？",
    options: [
      "変数を宣言する",
      "関数を定義する",
      "例外を処理する",
      "`try` と `catch` の後に実行されるコードを実行する",
    ],
    category: "Programming",
    correctAnswer: 3,
  },
  {
    question: "次のうち、NoSQLデータベースの種類はどれですか？",
    options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    category: "Programming",
    correctAnswer: 2,
  },
];

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function shuffleQuizData(quizData) {
//   return quizData.map((question) => {
//     const shuffledOptions = shuffleArray([...question.options]);
//     const newCorrectAnswer = shuffledOptions.indexOf(
//       question.options[question.correctAnswer]
//     );
//     return {
//       ...question,
//       options: shuffledOptions,
//       correctAnswer: newCorrectAnswer,
//     };
//   });
// }

// const shuffledQuizData = shuffleQuizData(quizData);
// console.log(shuffledQuizData);
export default quizData;

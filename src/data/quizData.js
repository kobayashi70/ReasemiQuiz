// クイズデータ
const quizData = [
  {
    // HTML/CSS

    question: "HTMLとは何ですか？",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Textual Markup Language",
    ],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "HTML文書の最初に書く宣言はどれですか？",
    options: ["<!DOCTYPE html>", "<html>", "<head>", "<body>"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "CSSの役割は何ですか？",
    options: [
      "Webページの構造を定義する",
      "Webページのスタイルを定義する",
      "Webページの動作を定義する",
      "Webページのデータを保存する",
    ],
    correctAnswer: 1,
    category: "html-css",
  },
  {
    question: "HTMLでリンクを作成するタグはどれですか？",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "CSSで文字色を赤にするプロパティはどれですか？",
    options: [
      "color: red;",
      "background-color: red;",
      "font-color: red;",
      "text-color: red;",
    ],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "HTMLで画像を表示するタグはどれですか？",
    options: ["<img>", "<picture>", "<image>", "<src>"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "CSSで要素の余白を設定するプロパティはどれですか？",
    options: ["margin", "padding", "border", "spacing"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "HTMLでリストを作成するタグはどれですか？",
    options: ["<ul>または<ol>", "<list>", "<li>", "<dl>"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "CSSでフォントサイズを設定するプロパティはどれですか？",
    options: ["font-size", "text-size", "font-style", "text-style"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "HTMLでフォームを作成するタグはどれですか？",
    options: ["<form>", "<input>", "<textarea>", "<button>"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "HTMLの目的は何ですか？",
    options: [
      "ウェブページの構造を定義する",
      "ウェブページのスタイルを定義する",
      "ウェブページの動作を定義する",
      "ウェブページのデータベース接続を定義する",
    ],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question:
      "次のタグのうち、HTML5で導入されたセクショニング要素はどれですか？",
    options: ["<section>", "<div>", "<span>", "<p>"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "HTMLでリンクを作成するには、どのタグを使用しますか？",
    options: ["<a>", "<link>", "<href>", "<nav>"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "CSSの役割は何ですか？",
    options: [
      "ウェブページのスタイルを定義する",
      "ウェブページの構造を定義する",
      "ウェブページのデータを送信する",
      "ウェブページの動作を定義する",
    ],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "CSSでの外部スタイルシートのリンクに使用される属性はどれですか？",
    options: ["rel", "href", "type", "src"],
    correctAnswer: 1,
    category: "html-css",
  },
  {
    question: "CSSのボックスモデルに含まれないものはどれですか？",
    options: ["border", "padding", "margin", "color"],
    correctAnswer: 3,
    category: "html-css",
  },
  {
    question: "CSSで文字の色を指定するプロパティはどれですか？",
    options: ["color", "text-color", "font-color", "background-color"],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "次のうち、CSSの疑似クラスはどれですか？",
    options: [":hover", ":link", "::before", ":focus"],
    correctAnswer: 3,
    category: "html-css",
  },
  {
    question: "HTMLでのコメントの書き方はどれですか？",
    options: [
      "<!-- コメント -->",
      "// コメント",
      "/* コメント */",
      "# コメント",
    ],
    correctAnswer: 0,
    category: "html-css",
  },
  {
    question: "CSSで要素を中央揃えにするプロパティはどれですか？",
    options: [
      "text-align: center;",
      "align-items: center;",
      "justify-content: center;",
      "all of the above",
    ],
    correctAnswer: 3,
    category: "html-css",
  },

  // JavaScript

  {
    question: "JavaScriptで変数を宣言するためのキーワードはどれですか？",
    options: ["var", "let", "const", "以上すべて"],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "JavaScriptで関数を定義する正しい方法はどれですか？",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "function: myFunction() {}",
      "func myFunction() {}",
    ],
    correctAnswer: 0,
    category: "javascript",
  },
  {
    question: "JavaScriptで配列の長さを取得する方法はどれですか？",
    options: ["array.size", "array.length", "array.count", "array.index"],
    correctAnswer: 1,
    category: "javascript",
  },
  {
    question:
      "JavaScriptでオブジェクトのプロパティにアクセスする方法はどれですか？",
    options: [
      "object.property",
      "object[property]",
      "以上の両方",
      "どれでもない",
    ],
    correctAnswer: 2,
    category: "javascript",
  },
  {
    question: "JavaScriptで非同期処理を行うための構文はどれですか？",
    options: ["async/await", "setTimeout", "Promise", "以上すべて"],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "JavaScriptで文字列を数値に変換する方法はどれですか？",
    options: ["parseInt()", "Number()", "parseFloat()", "以上すべて"],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "JavaScriptで配列の最後に要素を追加するメソッドはどれですか？",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0,
    category: "javascript",
  },
  {
    question: "JavaScriptで条件分岐を行うための構文はどれですか？",
    options: ["if...else", "switch", "三項演算子", "以上すべて"],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "JavaScriptでループを作成するための構文はどれですか？",
    options: ["for", "while", "do...while", "以上すべて"],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "JavaScriptでDOM要素を取得するメソッドはどれですか？",
    options: [
      "document.getElementById()",
      "document.querySelector()",
      "document.getElementsByClassName()",
      "以上すべて",
    ],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "JavaScriptとは何ですか？",
    options: [
      "ウェブページに動的な動作を追加するためのプログラミング言語",
      "ウェブページのスタイルを定義するための言語",
      "ウェブページの構造を定義するための言語",
      "ウェブページのデータベースを操作するための言語",
    ],
    correctAnswer: 0,
    category: "javascript",
  },
  {
    question: "JavaScriptで変数を宣言するにはどのキーワードを使用しますか？",
    options: ["var", "let", "const", "すべての選択肢"],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "JavaScriptのデータ型に含まれないものはどれですか？",
    options: ["string", "number", "boolean", "character"],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "次のJavaScriptのコードは何を返しますか？ `typeof null`",
    options: ["null", "object", "undefined", "boolean"],
    correctAnswer: 1,
    category: "javascript",
  },
  {
    question: "JavaScriptで関数を定義する正しい方法はどれですか？",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "func myFunction() {}",
      "function: myFunction() {}",
    ],
    correctAnswer: 0,
    category: "javascript",
  },
  {
    question: "JavaScriptで配列の最後の要素にアクセスする方法はどれですか？",
    options: [
      "arr[arr.length - 1]",
      "arr[-1]",
      "arr.last()",
      "arr[arr.length]",
    ],
    correctAnswer: 0,
    category: "javascript",
  },
  {
    question: "JavaScriptでforループの構文はどれですか？",
    options: [
      "for (let i = 0; i < 5; i++) {}",
      "for (i < 5; i++) {}",
      "for (let i = 0 to 5) {}",
      "for (i++ < 5) {}",
    ],
    correctAnswer: 0,
    category: "javascript",
  },
  {
    question:
      "JavaScriptでオブジェクトのプロパティにアクセスするにはどの記法を使いますか？",
    options: [
      "ドット記法 (object.property)",
      "ブラケット記法 (object['property'])",
      "どちらも可能",
      "どちらも不可能",
    ],
    correctAnswer: 2,
    category: "javascript",
  },
  {
    question: "JavaScriptで非同期処理を行うためのメソッドはどれですか？",
    options: ["setTimeout", "setInterval", "Promise", "すべての選択肢"],
    correctAnswer: 3,
    category: "javascript",
  },
  {
    question: "次のコードの出力は何ですか？ `console.log(1 + '1');`",
    options: ["2", "11", "NaN", "エラーが発生する"],
    correctAnswer: 1,
    category: "javascript",
  },

  // React

  {
    question: "Reactはどの会社によって開発されましたか？",
    options: ["Facebook", "Google", "Microsoft", "Amazon"],
    correctAnswer: 0,
    category: "react",
  },
  {
    question:
      "Reactでコンポーネントの状態を管理するために使用されるフックはどれですか？",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: 0,
    category: "react",
  },
  {
    question:
      "Reactでコンポーネントが初めてレンダリングされた後に実行されるフックはどれですか？",
    options: ["useState", "useEffect", "useMemo", "useCallback"],
    correctAnswer: 1,
    category: "react",
  },
  {
    question: "Reactでコンポーネントを作成するための基本的な方法はどれですか？",
    options: [
      "関数コンポーネント",
      "クラスコンポーネント",
      "以上の両方",
      "どれでもない",
    ],
    correctAnswer: 2,
    category: "react",
  },
  {
    question:
      "Reactで子コンポーネントにデータを渡すために使用されるのはどれですか？",
    options: ["props", "state", "context", "ref"],
    correctAnswer: 0,
    category: "react",
  },
  {
    question: "Reactで条件付きレンダリングを行うための方法はどれですか？",
    options: ["if文", "三項演算子", "論理AND演算子", "以上すべて"],
    correctAnswer: 3,
    category: "react",
  },
  {
    question: "Reactでリストをレンダリングする際に必要な属性はどれですか？",
    options: ["id", "key", "name", "value"],
    correctAnswer: 1,
    category: "react",
  },
  {
    question:
      "Reactでコンポーネントのライフサイクルメソッドを持つのはどれですか？",
    options: [
      "関数コンポーネント",
      "クラスコンポーネント",
      "以上の両方",
      "どれでもない",
    ],
    correctAnswer: 1,
    category: "react",
  },
  {
    question:
      "Reactでコンポーネントの再レンダリングを防ぐために使用されるフックはどれですか？",
    options: ["useMemo", "useEffect", "useState", "useRef"],
    correctAnswer: 0,
    category: "react",
  },
  {
    question:
      "Reactでコンポーネントのスタイルを動的に変更するために使用されるのはどれですか？",
    options: [
      "CSSクラス",
      "インラインスタイル",
      "styled-components",
      "以上すべて",
    ],
    correctAnswer: 3,
    category: "react",
  },
  {
    question: "Reactでコンポーネントを作成するための正しい方法はどれですか？",
    options: [
      "関数コンポーネント",
      "クラスコンポーネント",
      "どちらも可能",
      "コンポーネントは作成できない",
    ],
    correctAnswer: 2,
    category: "react",
  },
  {
    question: "Reactで状態管理に使用されるフックはどれですか？",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: 0,
    category: "react",
  },
  {
    question:
      "Reactコンポーネントのプロパティにアクセスするにはどのキーワードを使いますか？",
    options: ["this.props", "this.state", "this.context", "this.params"],
    correctAnswer: 0,
    category: "react",
  },
  {
    question: "Reactでイベントハンドラを設定する方法はどれですか？",
    options: [
      "onClick={handleClick}",
      "click={handleClick}",
      "onclick='handleClick'",
      "onClick=handleClick",
    ],
    correctAnswer: 0,
    category: "react",
  },
  {
    question: "Reactで非同期データを取得するために使うフックはどれですか？",
    options: ["useEffect", "useState", "useReducer", "useContext"],
    correctAnswer: 0,
    category: "react",
  },
  {
    question: "Reactのフラグメントはどのように宣言しますか？",
    options: ["<React.Fragment>", "<Fragment>", "<></>", "全て"],
    correctAnswer: 3,
    category: "react",
  },
  {
    question: "ReactのコンテキストAPIを使用する目的は何ですか？",
    options: [
      "コンポーネント間でデータを共有する",
      "UIをレンダリングする",
      "状態を初期化する",
      "デバッグを行う",
    ],
    correctAnswer: 0,
    category: "react",
  },
  {
    question: "Reactのリストレンダリングでkey属性を指定する理由は何ですか？",
    options: [
      "リストのパフォーマンスを向上させる",
      "リストの要素が一意であることを保証する",
      "レンダリングの順序を制御する",
      "全て",
    ],
    correctAnswer: 3,
    category: "react",
  },
  {
    question: "Reactでスタイルをインラインで指定するための構文はどれですか？",
    options: [
      "style={{ color: 'red' }}",
      "style='color: red'",
      "style=('color: red')",
      "style={'color: red'}",
    ],
    correctAnswer: 0,
    category: "react",
  },
  {
    question:
      "次のうち、React Routerを使用してページを遷移するためのコンポーネントはどれですか？",
    options: ["<Link>", "<Navigate>", "<Redirect>", "<Route>"],
    correctAnswer: 0,
    category: "react",
  },

  // TypeScript

  {
    question: "TypeScriptで型を定義するために使用するキーワードはどれですか？",
    options: ["type", "interface", "class", "enum"],
    correctAnswer: 1,
    category: "typescript",
  },
  {
    question:
      "次のうち、TypeScriptでの型注釈の例として正しいものはどれですか？",
    options: [
      "let x: number = 10;",
      "let x: string = 10;",
      "let x = 10;",
      "let x = '10';",
    ],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question:
      "TypeScriptのインターフェースを拡張するためのキーワードはどれですか？",
    options: ["extends", "implements", "inherits", "includes"],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question:
      "TypeScriptで、関数の戻り値の型を指定するためにはどのように記述しますか？",
    options: [
      "function foo(): string {}",
      "function foo() -> string {}",
      "function foo(): string {}",
      "function foo(): {string}",
    ],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question: "TypeScriptの型推論について正しい説明はどれですか？",
    options: [
      "型推論により、型注釈を省略できる",
      "型推論は型安全性を保証しない",
      "型推論はすべての型エラーを自動的に修正する",
      "型推論は型を強制する",
    ],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question:
      "TypeScriptでクラスを定義する際に使用するキーワードはどれですか？",
    options: ["class", "function", "struct", "object"],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question: "TypeScriptで型の合成を行うための機能はどれですか？",
    options: [
      "Union Types",
      "Intersection Types",
      "Literal Types",
      "Tuple Types",
    ],
    correctAnswer: 1,
    category: "typescript",
  },
  {
    question: "TypeScriptで`any`型を使用する目的は何ですか？",
    options: [
      "型安全性を確保する",
      "任意の型を指定する",
      "型推論を強制する",
      "型エラーを防ぐ",
    ],
    correctAnswer: 1,
    category: "typescript",
  },
  {
    question:
      "TypeScriptで、Optional Chainingを使うことで得られるメリットは何ですか？",
    options: [
      "プロパティが存在しない場合にエラーを防ぐ",
      "型推論を強制する",
      "型注釈を省略できる",
      "関数の型を定義する",
    ],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question:
      "TypeScriptの型で、特定の値のリテラル型を指定するために使用する構文はどれですか？",
    options: ["'value'", "value", "type value", "value[]"],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question: "TypeScriptはどの言語のスーパーセットですか？",
    options: ["JavaScript", "Python", "Java", "C#"],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question: "TypeScriptで変数の型を指定する正しい方法はどれですか？",
    options: [
      "let variable: string;",
      "let variable = string;",
      "let variable: String;",
      "let variable = 'string';",
    ],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question:
      "TypeScriptでインターフェースを定義するためのキーワードはどれですか？",
    options: ["interface", "type", "class", "struct"],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question: "TypeScriptで関数の戻り値の型を指定する正しい方法はどれですか？",
    options: [
      "function myFunc(): string {}",
      "function myFunc: string {}",
      "function myFunc() -> string {}",
      "function myFunc() : string {}",
    ],
    correctAnswer: 3,
    category: "typescript",
  },
  {
    question:
      "TypeScriptでオプショナルなプロパティを定義するためのシンボルはどれですか？",
    options: ["?", "!", "*", "&"],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question:
      "TypeScriptでジェネリック型を定義するためのシンボルはどれですか？",
    options: ["<>", "{}", "[]", "()"],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question: "TypeScriptで型アサーションを行うための構文はどれですか？",
    options: ["<type>value", "value as type", "type(value)", "value:type"],
    correctAnswer: 1,
    category: "typescript",
  },
  {
    question: "TypeScriptで非同期関数を定義するためのキーワードはどれですか？",
    options: ["async", "await", "promise", "defer"],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question: "TypeScriptでnever型はどのような場合に使用されますか？",
    options: [
      "関数が決して戻らない場合",
      "変数がnullの場合",
      "変数がundefinedの場合",
      "関数がvoidを返す場合",
    ],
    correctAnswer: 0,
    category: "typescript",
  },
  {
    question: "TypeScriptでユニオン型を定義するためのシンボルはどれですか？",
    options: ["|", "&", "/", "\\"],
    correctAnswer: 0,
    category: "typescript",
  },

  // MySQL

  {
    question:
      "MySQLのデータベースを作成するために使用するSQLコマンドはどれですか？",
    options: [
      "CREATE DATABASE",
      "CREATE TABLE",
      "ALTER DATABASE",
      "DROP DATABASE",
    ],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLで、テーブルに新しいカラムを追加するためのSQLコマンドはどれですか？",
    options: ["ALTER TABLE", "ADD COLUMN", "INSERT INTO", "UPDATE TABLE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLで、特定の条件に一致するレコードを選択するためのSQLコマンドはどれですか？",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLでデータを削除するSQLコマンドとして正しいものはどれですか？",
    options: ["DELETE FROM", "DROP TABLE", "TRUNCATE TABLE", "REMOVE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLで、テーブルのデータを完全に削除するが、テーブル自体は削除しないコマンドはどれですか？",
    options: ["TRUNCATE TABLE", "DROP TABLE", "DELETE FROM", "ALTER TABLE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLで、テーブルのスキーマを変更するためのSQLコマンドはどれですか？",
    options: ["ALTER TABLE", "UPDATE TABLE", "MODIFY TABLE", "CHANGE TABLE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLで、複数のテーブルを結合してデータを取得するためのSQLコマンドはどれですか？",
    options: ["JOIN", "UNION", "MERGE", "INTERSECT"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLのWHERE句を使用して、複数の条件をANDで結合する場合のSQLコマンドはどれですか？",
    options: [
      "SELECT * FROM table WHERE condition1 AND condition2",
      "SELECT * FROM table WHERE condition1 OR condition2",
      "SELECT * FROM table WHERE condition1, condition2",
      "SELECT * FROM table WHERE (condition1, condition2)",
    ],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLで、特定のカラムにインデックスを追加するためのSQLコマンドはどれですか？",
    options: ["CREATE INDEX", "ALTER INDEX", "ADD INDEX", "INDEX CREATE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLで、テーブルのすべてのデータと構造を削除するためのSQLコマンドはどれですか？",
    options: ["DROP TABLE", "TRUNCATE TABLE", "DELETE FROM", "REMOVE TABLE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLはどの種類のデータベース管理システムですか？",
    options: [
      "リレーショナルデータベース管理システム (RDBMS)",
      "オブジェクト指向データベース管理システム (OODBMS)",
      "ネットワークデータベース管理システム (NDBMS)",
      "階層型データベース管理システム (HDBMS)",
    ],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLでデータベースを作成するためのSQLコマンドはどれですか？",
    options: ["CREATE DATABASE", "CREATE TABLE", "CREATE SCHEMA", "CREATE DB"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLでデータを挿入するためのSQLコマンドはどれですか？",
    options: ["INSERT INTO", "ADD INTO", "INSERT TO", "ADD TO"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLでデータを更新するためのSQLコマンドはどれですか？",
    options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLでデータを削除するためのSQLコマンドはどれですか？",
    options: ["DELETE", "REMOVE", "DROP", "ERASE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLでテーブルを削除するためのSQLコマンドはどれですか？",
    options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLでデータベースを選択するためのSQLコマンドはどれですか？",
    options: ["USE", "SELECT", "CHOOSE", "SET"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question:
      "MySQLで全てのデータベースを表示するためのSQLコマンドはどれですか？",
    options: [
      "SHOW DATABASES",
      "LIST DATABASES",
      "DISPLAY DATABASES",
      "VIEW DATABASES",
    ],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLでテーブルの構造を表示するためのSQLコマンドはどれですか？",
    options: ["DESCRIBE", "SHOW TABLE", "DISPLAY TABLE", "VIEW TABLE"],
    correctAnswer: 0,
    category: "mysql",
  },
  {
    question: "MySQLでデータを検索するためのSQLコマンドはどれですか？",
    options: ["SELECT", "FIND", "SEARCH", "LOOKUP"],
    correctAnswer: 0,
    category: "mysql",
  },

  //NodeJS

  {
    question: "Node.jsとは何ですか？",
    options: [
      "サーバーサイドのJavaScript実行環境",
      "フロントエンドフレームワーク",
      "データベース",
      "テストツール",
    ],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsで非同期処理を扱うために使用される一般的な方法は何ですか？",
    options: ["コールバック", "同期処理", "同期関数", "オブジェクト"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsでHTTPサーバーを作成するために使用されるモジュールはどれですか？",
    options: ["http", "fs", "path", "url"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsで、npmを使ってパッケージをインストールするコマンドはどれですか？",
    options: ["npm install", "npm get", "npm add", "npm update"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question: "Node.jsで、非同期処理を簡潔に扱うための構文はどれですか？",
    options: ["async/await", "Promise.all", "setTimeout", "callback"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsでファイルを非同期的に読み込むためのメソッドはどれですか？",
    options: ["fs.readFile", "fs.readFileSync", "fs.open", "fs.read"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsの標準ライブラリで、パス操作を行うためのモジュールはどれですか？",
    options: ["path", "fs", "url", "os"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsでエラーハンドリングを行うために使用するオブジェクトはどれですか？",
    options: ["Error", "Exception", "Warning", "Fail"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsでイベント駆動型プログラミングを実現するために使用するクラスはどれですか？",
    options: ["EventEmitter", "EventHandler", "Event", "Emitter"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsのpackage.jsonファイルに記述されているスクリプトを実行するためのコマンドはどれですか？",
    options: ["npm run", "npm start", "npm execute", "npm script"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question: "Node.jsはどのプログラミング言語で書かれていますか？",
    options: ["JavaScript", "Python", "Ruby", "Java"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question: "Node.jsで非同期処理を行うために使用されるのはどれですか？",
    options: ["Callbacks", "Promises", "Async/Await", "以上すべて"],
    correctAnswer: 3,
    category: "nodejs",
  },
  {
    question: "Node.jsでモジュールをインポートするための構文はどれですか？",
    options: ["require()", "import()", "include()", "load()"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsでHTTPサーバーを作成するために使用されるモジュールはどれですか？",
    options: ["http", "fs", "url", "net"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsでファイルシステム操作を行うために使用されるモジュールはどれですか？",
    options: ["fs", "path", "os", "stream"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question: "Node.jsで環境変数にアクセスするためのオブジェクトはどれですか？",
    options: ["process.env", "global.env", "env", "system.env"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question: "Node.jsでストリームを使用する利点はどれですか？",
    options: [
      "メモリ効率が良い",
      "非同期処理が可能",
      "データの一部を逐次処理できる",
      "以上すべて",
    ],
    correctAnswer: 3,
    category: "nodejs",
  },
  {
    question: "Node.jsでパスを操作するために使用されるモジュールはどれですか？",
    options: ["path", "url", "querystring", "dns"],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question: "Node.jsでイベントを処理するために使用されるクラスはどれですか？",
    options: [
      "EventEmitter",
      "EventHandler",
      "EventDispatcher",
      "EventListener",
    ],
    correctAnswer: 0,
    category: "nodejs",
  },
  {
    question:
      "Node.jsでパッケージを管理するために使用されるツールはどれですか？",
    options: ["npm", "yarn", "bower", "以上すべて"],
    correctAnswer: 3,
    category: "nodejs",
  },

  // AWS

  {
    question: "AWSとは何の略ですか？",
    options: [
      "Amazon Web Services",
      "Amazon Web Solutions",
      "Advanced Web Services",
      "Amazon Wireless Services",
    ],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question: "AWSのサービスで、仮想サーバーを提供するものはどれですか？",
    options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon Lambda"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question:
      "AWSで、スケーラブルなデータベースサービスを提供するのはどれですか？",
    options: ["Amazon RDS", "Amazon S3", "Amazon DynamoDB", "Amazon EC2"],
    correctAnswer: 2,
    category: "aws",
  },
  {
    question: "AWSで、オブジェクトストレージを提供するサービスはどれですか？",
    options: ["Amazon S3", "Amazon EBS", "Amazon RDS", "Amazon EC2"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question:
      "AWSのサービスで、サーバーレスコンピューティングを実現するものはどれですか？",
    options: ["AWS Lambda", "Amazon EC2", "Amazon S3", "Amazon RDS"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question:
      "AWSで、クラウド内の仮想ネットワークを構築するためのサービスはどれですか？",
    options: ["Amazon VPC", "Amazon S3", "Amazon EC2", "Amazon RDS"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question:
      "AWSで、管理コンソールにログインしてサービスの管理を行うために使用するURLはどれですか？",
    options: [
      "aws.amazon.com",
      "console.aws.amazon.com",
      "manage.aws.amazon.com",
      "portal.aws.amazon.com",
    ],
    correctAnswer: 1,
    category: "aws",
  },
  {
    question:
      "AWSで、データのバックアップとリストアを管理するサービスはどれですか？",
    options: ["AWS Backup", "Amazon S3", "Amazon RDS", "AWS Lambda"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question: "AWSで、IAMを使用して何を管理しますか？",
    options: [
      "ユーザーとアクセス権限",
      "データベース",
      "ネットワーク",
      "仮想サーバー",
    ],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question: "AWSのコンテンツ配信ネットワークサービスはどれですか？",
    options: ["Amazon CloudFront", "Amazon S3", "Amazon RDS", "Amazon EC2"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question: "AWSのフルマネージドNoSQLデータベースサービスはどれですか？",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon Aurora",
    ],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question: "AWSで仮想サーバーを提供するサービスはどれですか？",
    options: ["Amazon EC2", "Amazon S3", "Amazon Lambda", "Amazon VPC"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question: "AWSでオブジェクトストレージを提供するサービスはどれですか？",
    options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon Glacier"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question:
      "AWSでサーバーレスコンピューティングを提供するサービスはどれですか？",
    options: ["AWS Lambda", "Amazon EC2", "Amazon ECS", "AWS Fargate"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question:
      "AWSでデータベースの自動スケーリングを提供するサービスはどれですか？",
    options: [
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
    ],
    correctAnswer: 2,
    category: "aws",
  },
  {
    question:
      "AWSでコンテンツ配信ネットワーク（CDN）を提供するサービスはどれですか？",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "Amazon S3",
      "Amazon VPC",
    ],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question:
      "AWSでインフラストラクチャをコードとして管理するサービスはどれですか？",
    options: [
      "AWS CloudFormation",
      "AWS CodeDeploy",
      "AWS CodePipeline",
      "AWS CodeBuild",
    ],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question: "AWSでデータウェアハウスを提供するサービスはどれですか？",
    options: [
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
    ],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question: "AWSでマネージドKubernetesサービスを提供するのはどれですか？",
    options: ["Amazon EKS", "Amazon ECS", "AWS Fargate", "AWS Lambda"],
    correctAnswer: 0,
    category: "aws",
  },
  {
    question:
      "AWSで機械学習モデルを簡単に構築、トレーニング、デプロイするためのサービスはどれですか？",
    options: [
      "Amazon SageMaker",
      "AWS DeepLens",
      "AWS Rekognition",
      "AWS Comprehend",
    ],
    correctAnswer: 0,
    category: "aws",
  },
];
export function getRandomQuestions(quizData, numQuestions) {
  const shuffled = [...quizData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
}

export default quizData;

// クイズページ
import Head from "next/head";
import { useEffect } from "react"; // データのfetchやDOM操作
import { useSelector, useDispatch } from "react-redux"; // storeから状態を取得, actionを実行
import { useRouter } from "next/router"; // Nextjsのルーター機能

import {
  setQuestions,
  setSelectedOption,
  incrementScore,
  incrementQuestionIndex,
} from "@/store/quizSlice"; // 問題を設定、回答を選択（正誤判定）、次の問題へ
import quizData, { getRandomQuestions } from "@/data/quizData"; // クイズデータ ランダム関数
import Question from "@/components/Question"; // 質問テキスト
import Options from "@/components/Options"; // 選択肢
import dynamic from "next/dynamic";

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}; // 配列をランダムにシャッフルするヘルパー関数

const shuffleQuizData = (quizData) => {
  return shuffleArray([...quizData]);
};

const DynamicClock = dynamic(() => import("../components/Clock"), {
  ssr: false, // サーバーサイドレンダリングを無効にする
});

const Quiz = () => {
  const dispatch = useDispatch(); // ディスパッチをするために使用
  const { questions, currentQuestionIndex, userAnswers, course } = useSelector(
    (state) => state.quiz
  ); //useSelectorで state.quizから問題、現在の問題のインデックス、スコア、ユーザーの回答を取得
  const router = useRouter(); // Nextjsのルーターで、ページ遷移を制御

  useEffect(() => {
    try {
      let filteredQuizData = quizData;

      if (course && course !== "full") {
        filteredQuizData = quizData.filter(
          (question) => question.category.toLowerCase() === course
        );
      }

      const randomQuestions = getRandomQuestions(filteredQuizData, 5);
      const shuffledQuestions = shuffleQuizData(randomQuestions);
      dispatch(setQuestions(shuffledQuestions));
      console.log(shuffledQuestions);
    } catch (error) {
      console.error(error.message);
    }
  }, [dispatch, course]); // クイズページが初めてレンダリングされた時に実行されます。

  // 選択肢をクリックしたとき
  const handleOptionClick = (index) => {
    if (questions.length === 0) return; // questionsが空であれば、何もせず関数を終了

    const currentQuestion = questions[currentQuestionIndex]; // 現在の問題を格納
    if (!currentQuestion) return;

    const isCorrect = index === currentQuestion.correctAnswer; // indexは選んだ選択肢、正解ならisCorrectはtrue,違えばfalse

    dispatch(
      setSelectedOption({
        questionIndex: currentQuestionIndex,
        selectedOption: index,
        isCorrect,
      })
    ); // 選択されたオプションを更新する
  };

  // 次の問題へ、解答へボタン押下時
  const handleNextClick = () => {
    if (questions.length === 0) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const userAnswer = userAnswers[currentQuestionIndex];

    // 選択肢を選んでいない場合、アラートを表示
    if (
      userAnswer?.selectedOption === null ||
      userAnswer?.selectedOption === undefined
    ) {
      alert("解答を選択してください。");
      return;
    }

    if (userAnswer.isCorrect) {
      dispatch(incrementScore());
    }

    // 最後の問題なら結果画面へ移動、それ以外なら次の問題へ
    if (currentQuestionIndex >= 4) {
      router.push("/result");
    } else {
      dispatch(incrementQuestionIndex());
    }
  };

  const getTitle = () => {
    switch (course) {
      case "full":
        return "りあゼミクイズ：ALL";
      case "html-css":
        return "りあゼミクイズ：HTML/CSS";
      case "javascript":
        return "りあゼミクイズ：JavaScript";
      case "react":
        return "りあゼミクイズ：React";
      case "typescript":
        return "りあゼミクイズ：TypeScript";
      case "mysql":
        return "りあゼミクイズ：MySQL";
      case "nodejs":
        return "りあゼミクイズ：Node.js";
      case "aws":
        return "りあゼミクイズ：AWS";
      default:
        return "りあゼミクイズ";
    }
  };

  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
        <meta
          name="description"
          content="選択肢を選んでボタンを押してください！全問正解を目指して頑張ろう！"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col pt-40 mb- sm:justify-normal sm:pt-8 items-center bg-animated-gradient">
        <DynamicClock />
        {/* 問題文表示 */}
        <div className="w-4/5">
          <Question
            questionText={questions[currentQuestionIndex]?.question || ""}
          />
          {/* 現在の問題の選択肢、選択肢がクリックされた際のハンドラー */}
          <Options
            options={questions[currentQuestionIndex]?.options || []}
            handleOptionClick={handleOptionClick}
            selectedOption={userAnswers[currentQuestionIndex]?.selectedOption}
          />
          {/* 最後の問題かどうかで内容を変化 */}
          <div className="mt-8 mr-6 flex justify-end">
            <button
              onClick={handleNextClick}
              className="text-white w-36 sm:w-24 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-lg sm:text-sm px-5 py-2.5 sm:p-2 text-center"
            >
              {currentQuestionIndex === questions.length - 1
                ? "解答へ"
                : "次の問題へ"}
            </button>
          </div>
          <div className="sm:mb-10">
            <p className="mt-12 p-1 text-center text-xl tb:text-base text-red-400 bg-indigo-50 bg-opacity-60 rounded-lg w-2/5 sm:w-auto">
              ※更新や戻る操作を行わないでください！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

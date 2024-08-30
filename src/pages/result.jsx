// 結果ページ
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { resetQuizRechallenge, resetQuizTop } from "@/store/quizSlice";
import dynamic from "next/dynamic"; //動的インポートを行うNextjsの関数

const DynamicClock = dynamic(() => import("../components/Clock"), {
  ssr: false, // サーバーサイドレンダリングを無効にする つけないと時計がバグる
});

const Result = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { score, userAnswers, questions } = useSelector((state) => state.quiz);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [activeTab, setActiveTab] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // スコアアニメーションの設定
    let animationFrame;
    let startTime;

    const animatedScore = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      //0~5の間でランダムスコアを設定
      if (elapsed < 2000) {
        setAnimatedScore(Math.floor(Math.random() * 6));
        animationFrame = requestAnimationFrame(animatedScore);
      } else {
        // 3s後にスコア表示
        setAnimatedScore(score);
        setShowMessage(true);
        cancelAnimationFrame(animationFrame);
      }
    };

    animationFrame = requestAnimationFrame(animatedScore);

    return () => cancelAnimationFrame(animationFrame);
  }, [score]);

  const handleRetry = () => {
    dispatch(resetQuizRechallenge());
    router.push("/quiz");
  };

  const handleGoToTop = () => {
    dispatch(resetQuizTop());
    router.push("/");
  };

  const getMessage = () => {
    if (score == 5) {
      return "完璧ですね！";
    } else if (score >= 3) {
      return "良い感じです！";
    } else {
      return "再チャレンジして頑張りましょう！";
    }
  };

  return (
    <>
      {" "}
      <Head>
        <title>りあゼミクイズ：結果</title>
        <meta
          name="description"
          content="結果画面です！何点でしたか？全問完璧目指していきましょう！"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex justify-center  bg-animated-gradient p-6">
        <DynamicClock />
        <div className="p-8 m-auto w-[760px] sm:p-3 bg-indigo-50 bg-opacity-80 rounded-lg sm:w-80">
          <h1 className="text-4xl font-bold mb-8 text-neutral-700">結果発表</h1>
          <div className="text-center mb-8 p-6 bg-indigo-50 bg-opacity-80 rounded-lg">
            <p className="text-2xl text-neutral-700 font-semibold mb-4">
              あなたのスコア: {animatedScore} / 5
            </p>
            <p
              className={`text-neutral-700 text-xl ${showMessage ? "fade-in" : "opacity-0"}`}
            >
              {getMessage()}
            </p>
          </div>
          <div className="w-full max-w-2xl mb-8">
            <ul>
              {questions.map((question, index) => (
                <li key={index} className="mb-4">
                  <div className="flex items-center font-semibold">
                    <span
                      className={`mr-2 text-2xl font-bold ${
                        userAnswers[index]?.isCorrect
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {userAnswers[index]?.isCorrect ? "○" : "×"}
                    </span>
                    <span className="text-neutral-700">
                      {index + 1}. {question.question}
                    </span>
                  </div>
                  {/* 選択肢の表示 */}
                  <ul className="ml-4 text-neutral-700">
                    {question.options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* タブと詳細 */}
          <div className="w-auto mx-auto max-w-2xl mb-8">
            {/* タブの部分 */}
            <ul className="flex border-b rounded-t-lg bg-white">
              {questions.map((_, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(index)} // クリック時にタブを切り替え
                  className={`cursor-pointer py-2 px-4 text-center flex-1 ${
                    activeTab === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  } hover:bg-blue-300 hover:text-white`}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
            {/* 各タブの詳細表示 */}
            <div className="p-4 w- rounded-b-lg bg-white shadow-lg h-20 overflow-auto">
              {activeTab !== null && (
                <>
                  <p>
                    <strong className="text-neutral-700">正しい答え：</strong>{" "}
                    {
                      questions[activeTab]?.options[
                        questions[activeTab]?.correctAnswer
                      ]
                    }
                  </p>
                  <p>
                    <strong className="text-neutral-700">選択した答え：</strong>{" "}
                    {
                      questions[activeTab]?.options[
                        userAnswers[activeTab]?.selectedOption
                      ]
                    }
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="flex space-x-6 justify-center">
            <button
              className="sm:text-xs text-white w-48 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-bold rounded-lg text-lg px-5 py-2.5 text-center"
              onClick={handleRetry}
            >
              再チャレンジする
            </button>
            <button
              className="sm:text-xs text-white w-48 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center"
              onClick={handleGoToTop}
            >
              トップへ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;

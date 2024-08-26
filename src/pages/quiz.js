// クイズページ

import React, { useEffect } from "react"; // データのfetchやDOM操作
import { useSelector, useDispatch } from "react-redux"; // storeから状態を取得, actionを実行
import { useRouter } from "next/router"; // Nextjsのルーター機能

import {
  setQuestions,
  setSelectedOption,
  incrementQuestionIndex,
  resetQuiz,
} from "@/store/quizSlice"; // 問題を設定、回答を選択（正誤判定）、次の問題へ
import quizData from "@/data/quizData"; // クイズデータ
import Question from "@/components/Question"; // 質問テキスト
import Options from "@/components/Options"; // 選択肢

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}; // 配列をランダムにシャッフルするヘルパー関数

const Quiz = () => {
  const dispatch = useDispatch(); // ディスパッチをするために使用
  const { questions, currentQuestionIndex, score, userAnswers } = useSelector(
    (state) => state.quiz
  ); //useSelectorで state.quizから問題、現在の問題のインデックス、スコア、ユーザーの回答を取得
  const router = useRouter(); // Nextjsのルーターで、ページ遷移を制御

  useEffect(() => {
    dispatch(resetQuiz());
    try {
      const shuffledQuestions = shuffleArray(quizData).slice(0, 5); // quizDataからランダムに5問を取得
      dispatch(setQuestions(shuffledQuestions));
      console.log(shuffledQuestions);
    } catch (error) {
      console.error(error.message);
    }
  }, [dispatch]); // クイズページが初めてレンダリングされた時に実行されます。

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

    const selectedOption = userAnswers[currentQuestionIndex]?.selectedOption;

    // 選択肢を選んでいない場合、アラートを表示
    if (selectedOption === null || selectedOption === undefined) {
      alert("解答を選択してください。");
      return;
    }

    // 最後の問題なら結果画面へ移動、それ以外なら次の問題へ
    if (currentQuestionIndex >= 4) {
      router.push("/result");
    } else {
      dispatch(incrementQuestionIndex());
    }
  };

  return (
    <div>
      {/* 問題文表示 */}
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
      <button onClick={handleNextClick}>
        {currentQuestionIndex === questions.length - 1
          ? "解答へ"
          : "次の問題へ"}
      </button>
    </div>
  );
};

export default Quiz;

// 結果ページ

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { resetQuizRechallenge, resetQuizTop } from "@/store/quizSlice";

const Result = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { score, userAnswers, questions } = useSelector((state) => state.quiz);

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
    <div>
      <h1>結果発表</h1>
      <p>あなたのスコア: {score} / 5</p>

      <ul>
        {questions.map((answer, index) => (
          <li key={index}>
            {userAnswers[index]?.isCorrect ? "○" : "✖"} {answer.question}{" "}
            <br />
            <strong>正しい答え:</strong> {answer.options[answer.correctAnswer]}
            <br />
            <strong>選択した答え:</strong>{" "}
            {answer.options[userAnswers[index]?.selectedOption]}
          </li>
        ))}
      </ul>

      <p>{getMessage()}</p>

      <button onClick={handleRetry}>再チャレンジする</button>
      <button onClick={handleGoToTop}>トップへ</button>
    </div>
  );
};

export default Result;

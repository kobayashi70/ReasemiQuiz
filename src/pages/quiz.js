// クイズページ

import React, { useState, useEffect } from "react";
import quizData from "../data/quizData";
import Question from "../components/Question";
import Options from "../components/Options";
import { useRouter } from "next/router";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // quizDataからランダムに5問を取得
    const shuffledQuestions = shuffleArray(quizData).slice(0, 5);
    setQuestions(shuffledQuestions);
  }, []);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    if (selectedOption === null) {
      alert("解答を選択してください。");
      return;
    }

    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null); // Reset the selected option for the next question
    } else {
      router.push(
        `/result?score=${score + (selectedOption === questions[currentQuestionIndex].correctAnswer ? 1 : 0)}`
      );
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Question questionText={questions[currentQuestionIndex].question} />
      <Options
        options={questions[currentQuestionIndex].options}
        handleOptionClick={handleOptionClick}
        selectedOption={selectedOption}
      />
      <button onClick={handleNextClick}>
        {currentQuestionIndex === questions.length - 1
          ? "解答へ"
          : "次の問題へ"}
      </button>
    </div>
  );
};

export default Quiz;

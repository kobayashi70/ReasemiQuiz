import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: null, // 選択されたコース
  questions: [], // フィルタされた問題を格納
  currentQuestionIndex: 0, // 現在の問題のindex
  score: 0, // スコア
  userAnswers: [], // ユーザーの解答
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },

    setQuestions: (state, action) => {
      state.questions = action.payload;
    },

    setSelectedOption: (state, action) => {
      const { questionIndex, selectedOption, isCorrect } = action.payload;
      state.userAnswers[questionIndex] = { selectedOption, isCorrect };
      if (isCorrect) {
        state.score += 1;
      }
    },

    incrementQuestionIndex: (state) => {
      state.currentQuestionIndex += 1;
    },

    resetQuizTop: (state) => {
      state.course = null;
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.userAnswers = [];
    },

    resetQuizRechallenge: (state) => {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.userAnswers = [];
    },
  },
});

export const {
  setCourse,
  setQuestions,
  setSelectedOption,
  incrementQuestionIndex,
  resetQuizTop,
  resetQuizRechallenge,
} = quizSlice.actions;

export default quizSlice.reducer;

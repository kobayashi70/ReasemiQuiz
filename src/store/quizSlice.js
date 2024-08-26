import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
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

    resetQuiz: (state) => {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.userAnswers = [];
    },
  },
});

export const {
  setQuestions,
  setSelectedOption,
  incrementQuestionIndex,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;

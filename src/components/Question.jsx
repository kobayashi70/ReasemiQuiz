// 問題文コンポーネント

const Question = ({ questionText }) => {
  return (
    <h2 className="text-2xl tb:text-xl  sm:font-normal sm:p-4 sm:w-80 font-bold p-10 text-center text-neutral-700 bg-indigo-50 bg-opacity-80 rounded-lg">
      {questionText}
    </h2>
  );
};

export default Question;

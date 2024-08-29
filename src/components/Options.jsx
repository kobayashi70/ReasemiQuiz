// 選択肢表示コンポーネント

const Options = ({ options, handleOptionClick, selectedOption }) => {
  return (
    <div className="mt-6 flex justify-between sm:flex-col">
      {options.map((option, index) => (
        <label key={index} className="w-56 h-96 sm:h-64 flex justify-start ">
          <input
            name="radio"
            type="radio"
            checked={selectedOption === index}
            onChange={() => handleOptionClick(index)}
            className="form-radio  text-blue-600 h-6 w-6"
          />
          <span className="ml-2 text-lg text-neutral-700">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Options;

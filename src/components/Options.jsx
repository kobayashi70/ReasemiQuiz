// 選択肢表示コンポーネント

const Options = ({ options, handleOptionClick, selectedOption }) => {
  return (
    <div style={{ display: "flex" }}>
      {options.map((option, index) => (
        <label key={index} style={{ display: "flex", marginRight: "24px" }}>
          <input
            type="checkbox"
            checked={selectedOption === index}
            onChange={() => handleOptionClick(index)}
            style={{ marginRight: "4px" }}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Options;

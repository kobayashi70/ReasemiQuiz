import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 1秒ごとに時刻を更新
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // コンポーネントがアンマウントされた時にタイマーをクリア
    return () => clearInterval(timerId);
  }, []);

  // 時刻をフォーマットする関数
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="tb:hidden fixed top-4 left-4 h-12 p-4 bg-gray-100 rounded-lg shadow-md flex justify-center items-center">
      <h2 className="text-2xl font-bold">{formatTime(time)}</h2>
    </div>
  );
};

export default Clock;

// 結果ページ

import { useRouter } from 'next/router';

const Result = () => {
    const router = useRouter();
    const { score } = router.query;

    const handleRetry = () => {
        router.push('/quiz');
    };

    const handleGoToTop = () => {
        router.push('/');
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
          <p>{getMessage()}</p>
          <button onClick={handleRetry}>再チャレンジする</button>
      <button onClick={handleGoToTop}>トップへ</button>
        </div>
      );
    };
    
    export default Result;
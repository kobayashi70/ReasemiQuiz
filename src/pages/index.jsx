//トップページ

import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCourse } from "@/store/quizSlice";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch(); // ディスパッチをするために使用

  const startQuiz = (course) => {
    dispatch(setCourse(course));
    router.push("/quiz");
  };

  return (
    <>
      <Head>
        <title>クイズアプリ</title>
        <meta name="description" content="NextJSを使ったクイズアプリ！！" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>クイズアプリ</h1>
        <button onClick={() => startQuiz("full")}>フルコース</button>
        <button onClick={() => startQuiz("html-css")}>HTML/CSSコース</button>
        <button onClick={() => startQuiz("javascript")}>
          JavaScriptコース
        </button>
        <button onClick={() => startQuiz("react")}>Reactコース</button>
        <button onClick={() => startQuiz("typescript")}>
          TypeScriptコース
        </button>
        <button onClick={() => startQuiz("mysql")}>MySQLコース</button>
        <button onClick={() => startQuiz("nodejs")}>Node.jsコース</button>
        <button onClick={() => startQuiz("aws")}>AWSコース</button>
      </div>
    </>
  );
};

export default Home;

//トップページ
import Head from "next/head";
import Image from "next/image";
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
        <title>りあゼミクイズ</title>
        <meta name="description" content="NextJSを使ったクイズアプリ！" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col justify-center sm:justify-normal sm:pt-8 items-center bg-animated-gradient">
        <div className="">
          <Image
            src="/titleimage.png"
            alt="タイトルロゴ"
            width={500}
            height={180}
            className="mb-40 pb-12 sm:-mb-10"
            priority
          />
        </div>
        <div className="flex flex-wrap sm:flex-col items-center space-x-5 justify-center max-w-[1080px] w-full sm:mt-16 sm:animate-none ">
          <button
            className="mt-3 rotate-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 animate-drop-in-wobble animate-delay-0 sm:animate-drop-in-wobble"
            onClick={() => startQuiz("full")}
          >
            <span className="relative w-28 h-12  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Image
                src="/ALL_b.svg"
                alt="ALL"
                fill
                className="transition-opacity duration-400 ease-in-out group-hover:opacity-0"
              />
              <Image
                src="/ALL_w.svg"
                alt="ALL"
                fill
                className="absolute inset-0 transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </span>
          </button>
          <button
            className="mt-3 -rotate-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 animate-drop-in-wobble animate-delay-1 "
            onClick={() => startQuiz("html-css")}
          >
            <span className="relative w-28 h-12  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Image
                src="/HTMLCSS_b.svg"
                alt="HTMLCSS"
                fill
                className="transition-opacity duration-400 ease-in-out group-hover:opacity-0"
              />
              <Image
                src="/HTMLCSS_w.svg"
                alt="HTMLCSS"
                fill
                className="absolute inset-0 transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </span>
          </button>
          <button
            className="mt-3 rotate-1 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 animate-drop-in-wobble animate-delay-2 "
            onClick={() => startQuiz("javascript")}
          >
            <span className="relative w-28 h-12  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Image
                src="/JavaScript_b.svg"
                alt="JavaScript"
                fill
                className="transition-opacity duration-400 ease-in-out group-hover:opacity-0"
              />
              <Image
                src="/JavaScript_w.svg"
                alt="JavaScript"
                fill
                className="absolute inset-0 transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </span>
          </button>
          <button
            className="mt-3 rotate-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 animate-drop-in-wobble animate-delay-3 
          "
            onClick={() => startQuiz("react")}
          >
            <span className="relative w-28 h-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Image
                src="/React_b.svg"
                alt="React"
                fill
                className="transition-opacity duration-400 ease-in-out group-hover:opacity-0"
              />
              <Image
                src="/React_w.svg"
                alt="React"
                fill
                className="absolute inset-0 transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </span>
          </button>
          <button
            className="mt-3 -rotate-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 animate-drop-in-wobble animate-delay-4 "
            onClick={() => startQuiz("typescript")}
          >
            <span className="relative w-28 h-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Image
                src="/TypeScript_b.svg"
                alt="TypeScript"
                fill
                className="transition-opacity duration-400 ease-in-out group-hover:opacity-0"
              />
              <Image
                src="/TypeScript_w.svg"
                alt="TypeScript"
                fill
                className="absolute inset-0 transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </span>
          </button>
          <button
            className="mt-3 rotate-1 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 animate-drop-in-wobble animate-delay-5"
            onClick={() => startQuiz("mysql")}
          >
            <span className="relative w-28 h-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Image
                src="/MySQL_b.svg"
                alt="MySQL"
                fill
                className="transition-opacity duration-400 ease-in-out group-hover:opacity-0"
              />
              <Image
                src="/MySQL_w.svg"
                alt="MySQL"
                fill
                className="absolute inset-0 transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </span>
          </button>
          <button
            className="mt-3 -rotate-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 animate-drop-in-wobble animate-delay-6 "
            onClick={() => startQuiz("nodejs")}
          >
            <span className="relative w-28 h-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Image
                src="/Nodejs_b.svg"
                alt="Nodejs"
                fill
                className="transition-opacity duration-400 ease-in-out group-hover:opacity-0"
              />
              <Image
                src="/Nodejs_w.svg"
                alt="Nodejs"
                fill
                className="absolute inset-0 transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </span>
          </button>
          <button
            className="mt-3 rotate-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 animate-drop-in-wobble animate-delay-7"
            onClick={() => startQuiz("aws")}
          >
            <span className="relative w-28 h-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Image
                src="/AWS_b.svg"
                alt="AWS"
                fill
                className="transition-opacity duration-400 ease-in-out group-hover:opacity-0"
              />
              <Image
                src="/AWS_w.svg"
                alt="AWS"
                fill
                className="absolute inset-0 transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

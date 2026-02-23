import { Generate } from "./components/Generate";
import { Quiz } from "./components/Quiz";
import { ResultQuiz } from "./components/ResultQuiz";
import { SummarizedArticle } from "./components/SummarizedArticle";
import { SummarizedContent } from "./components/SummarizedContent";

export default function Home() {
  return (
    <div className="w-screen flex py-10 justify-center">
      <Generate />
      {/* <Quiz /> */}
      {/* <ResultQuiz /> */}
      {/* <SummarizedContent /> */}
      {/* <SummarizedArticle /> */}
    </div>
  );
}

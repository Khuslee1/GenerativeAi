"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, ReactNode } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
};
type TitleIdType = {
  articles: { title: string; id: string }[];
};

type AppContextType = {
  mainObj: { title?: string; text?: string };
  setMainobj: React.Dispatch<
    React.SetStateAction<{ title?: string; text?: string }>
  >;
  result: string | null;
  setResult: (result: string | null) => void;
  question: Question[];
  setQuestion: (questions: Question[]) => void;
  loading: boolean;
  postFunction: () => Promise<void>;
  getFunction: () => Promise<void>;
  getOne: (id: string) => Promise<void>;
  handleSummarize: () => Promise<void>;
  titleId: TitleIdType | undefined;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [mainObj, setMainobj] = useState<{ title?: string; text?: string }>({
    title: "",
    text: "",
  });
  const [result, setResult] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [titleId, setTitleId] = useState<TitleIdType>();
  const router = useRouter();

  const postFunction = async () => {
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: mainObj.title,
          text: mainObj.text,
          summary: result,
          questions: question,
        }),
      });
      const data = await response.json();
      console.log(data);
      router.push("../summary");
    } catch (err) {
      console.error(err);
    }
  };

  const getFunction = async () => {
    try {
      const response = await fetch("/api/getAll", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
      setTitleId(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getOne = async (id: string) => {
    try {
      const response = await fetch(`/api/getOne/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSummarize = async () => {
    if (!mainObj.text) return;
    setLoading(true);

    try {
      const response = await fetch("/api/sum", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: mainObj.text }),
      });
      console.log("Status:", response.status);
      const data = await response.json();
      //   setResult(data.summary);
      setQuestion(data.questions);
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        mainObj,
        setMainobj,
        result,
        setResult,
        question,
        setQuestion,
        loading,
        postFunction,
        getFunction,
        getOne,
        handleSummarize,
        titleId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
}

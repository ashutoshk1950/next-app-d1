import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSerachbar from "@/components/shared/search/LocalSerachbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tags: [
      {
        _id: "1",
        name: "python",
      },
      {
        _id: "2",
        name: "database",
      },
    ],
    author: {
      _id: "101",
      name: "John Doe",
      picture: "https://example.com/john_doe.png",
    },
    upvotes: 10000000,
    views: 1000000,
    answers: [
      {
        content: "You can use getServerSideProps to fetch data for SSR.",
        author: "Jane Smith",
      },
    ],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      {
        _id: "1",
        name: "javascript",
      },
      {
        _id: "2",
        name: "database",
      },
    ],
    author: {
      _id: "102",
      name: "John Doe",
      picture: "https://example.com/john_doe.png",
    },
    upvotes: 10,
    views: 100,
    answers: [
      {
        content:
          "Make sure you are using the correct action creators in Redux.",
        author: "Jane Smith",
      },
    ],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "3",
    title: "How to center a Div?",
    tags: [
      {
        _id: "1",
        name: "next",
      },
      {
        _id: "2",
        name: "css",
      },
    ],
    author: {
      _id: "103",
      name: "John Doe",
      picture: "https://example.com/john_doe.png",
    },
    upvotes: 10,
    views: 100,
    answers: [
      {
        content: "You can use CSS Flexbox or Grid for centering a div.",
        author: "Jane Smith",
      },
    ],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "4",
    title: "How to check CSS in Next?",
    tags: [
      {
        _id: "1",
        name: "next",
      },
      {
        _id: "2",
        name: "css",
      },
    ],
    author: {
      _id: "104",
      name: "John Doe",
      picture: "https://example.com/john_doe.png",
    },
    upvotes: 10,
    views: 100,
    answers: [
      {
        content: "You can inspect elements using browser dev tools.",
        author: "Jane Smith",
      },
    ],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] rounded-xl px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSerachbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}

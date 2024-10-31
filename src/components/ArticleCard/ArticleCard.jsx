import { ChevronRight } from "lucide-react";

const ArticleCard = ({ articleList = [] }) => {
  return (
    <div className="article-card-container flex flex-col lg:w-[512px] py-8">
      <ul className="flex flex-col lg:p-8 gap-10">
        {articleList?.map((article, index) => (
          <li key={index}>
            <article data-testid={`articleCard${index}`} className="article-card">
              <div className="article-card-time relative flex flex-row gap-x-3">
                <span className="absolute bottom-1.5 left-0 w-[2px] h-[16px] rounded-full bg-zinc-200" />
                <time className="pl-3 font-roboto text-sm leading-7 text-zinc-400 gap-3">{article.date}</time>
              </div>
              <h2 className="pt-4 text-zinc-800 font-roboto font-semibold leading-7 dark:text-zinc-100 ">
                {article.title}
              </h2>
              <p className="font-roboto text-sm text-zinc-600 leading-6 dark:text-zinc-400">{article.content}</p>
              <a
                className="relative flex flex-row items-center content-end pt-4 gap-1 text-teal-500 font-bold hover:underline"
                href={article.link || "#"}
              >
                Read article
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleCard;

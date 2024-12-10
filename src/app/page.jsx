import Introduction from "@/components/Introduction/Introduction";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import { skills, work, socialLinks, articleList } from "@/components/Data";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  return (
    <div className="flex flex-col px-4 pt-6 pb-16 lg:px-36 gap-6">
      <Introduction
        className="introduction"
        title={"Dylan is A Software Engineer"}
        content={
          "Hi! I'm a software engineering student with a passion for solving complex problems and building meaningful digital experiences. As a member of the Church of Jesus Christ of Latter-day Saints, I’m dedicated to integrity, continuous learning, and collaboration. My portfolio highlights projects that blend technical skills with a user-centered approach, from full-stack web development to data-driven solutions. I’m excited to contribute my skills and values to create impactful software that makes a difference."
        }
        socialLinks={socialLinks}
      />
      <div className="flex lg:flex-row flex-col justify-between">
        <ArticleCard articleList={articleList} />
        <section className="widget-container flex flex-col gap-6">
          <SignupWidget
            title="Stay up to date"
            content="Get notified when I publish something new, and unsubscribe at any time."
          />
          <WorkWidget
            className="widget"
            title={"Work"}
            content={"Here are some of my experiences."}
            experiences={work}
          />
          <SkillsWidget
            className="widget"
            title={"Skills"}
            content={"These are some skills I have developed over the years."}
            skills={skills}
          />
        </section>
      </div>
    </div>
  );
}

import NavBar from "../components/NavBar";
import { profile, project } from "../utils/img";
import Skill from "../components/Skill";
import { mainSkill, projects, skills } from "../utils/skills";
import Button from "../components/Button";
import MainSkillCard from "../components/MainSkillCard";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Home = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Israel Resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };
  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="w-full h-screen bg-[linear-gradient(135deg,#12001a_71%,#4e0070_100%)] flex flex-col gap-6 "
      >
        {/* Text and Image */}
        <div className="flex justify-between items-center mt-24 px-24 max-md:flex-col max-md:text-center max-md:m-auto max-md:gap-6 max-lg:px-12 ">
          {/* Text */}
          <div>
            <h1 className="text-[var(--text-color)]   font-bold leading-tight text-[clamp(14px,5vw,60px)]">
              I'M {""}
              <span className="text-[var(--primary-color-shade-400)]">
                ISRAEL
              </span>
            </h1>
            <div className="bg-[var(--primary-color-shade-400)] text-[var(--text-color)] inline-block text-[clamp(12px,2vw,24px)]  font-bold mt-4">
              <h4 className="  p-4 font-bold  max-md:p-2">
                FULL STACK DEVELOPER
              </h4>
            </div>
            <p className="text-[var(--text-color)] mt-6 max-w-lg text-[clamp(8px,2vw,14px)]  max-sm:max-w-sm">
              - A passionate and dedicated junior full-stack web developer,
              driven by the ever-evolving world of technology and its limitless
              possibilities.
            </p>

            <div className="mt-8 max-md:mt-2">
              <Button name={"MORE ABOUT ME"} width={"230px"} />
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center ">
            <img
              src={profile}
              alt="profile"
              className="w-[90%] max-md:w-[60%] max-sm:w-[50%] "
            />
          </div>
        </div>
        {/* Navigation */}
        <div className="mt-16 m-auto w-96 max-md:hidden">
          <NavBar />
        </div>
      </section>
      {/* About me Section */}
      <section
        id="about"
        className="bg-[var(--primary-color-shade-800)] text-[var(--text-color)] w-full h-auto"
      >
        {/* About me Content */}
        <div className="flex flex-col gap-6 px-24 items-center justify-center max-md:text-center">
          {/* Image and Text */}
          <div className="grid grid-cols-2 mt-24 max-md:grid-cols-1 max-md:place-items-center">
            <h4 className="hidden max-md:block max-md: font-bold mb-6 text-[clamp(12px,5vw,24px)]">
              About me
            </h4>
            {/* Image */}
            <div className="flex items-center justify-center">
              <img src={profile} alt="profile" className="max-md:w-[70%]" />
            </div>
            {/* Text */}
            <div className="mt-4">
              <h4 className="font-bold mb-4 max-md:hidden">About me</h4>
              <h2 className="font-bold text-2xl mb-4 max-md:hidden">
                Who Am I
              </h2>
              <p className="text-[clamp(10px,5vw,14px)]">
                My name is Israel Ahunanya, and I am a software developer with a
                strong passion for building practical, scalable, and impactful
                digital solutions. I enjoy working across the full stack, with
                experience in web, mobile, backend systems, and blockchain
                development, allowing me to turn complex ideas into functional,
                real-world applications. I have worked with technologies such as
                JavaScript, React, Firebase, Node.js, and relational databases,
                and I also have hands-on experience in blockchain development on
                Cardano, using tools like Plutus and Helios to design and
                implement smart contracts and decentralized applications. Rather
                than focusing only on visuals, my strength lies in
                problem-solving, system design, and application logic—building
                solutions that are secure, efficient, and user-focused. I
                understand how frontend, backend, and data layers work together,
                and I enjoy creating systems that are both reliable and easy to
                use. I am a continuous learner who stays curious about emerging
                technologies, best practices, and new approaches to software
                development. I enjoy improving existing systems, optimizing
                workflows, and building products that solve real problems. My
                goal is to keep growing as a developer while contributing
                meaningful solutions to teams, businesses, and users.
              </p>
            </div>
          </div>
          {/* Sills */}
          <div className="grid grid-cols-3 gap-4 bg-[var(--primary-color-shade-700)] p-4 w-[40%] max-md:w-[80%] max-sm:w-[100%] max-sm:grid-cols-2 max-md:grid-cols-2">
            {skills.map((skill, index) => {
              return <Skill key={index} name={skill.name} icon={skill.icon} />;
            })}
          </div>

          {/* DOWNLOAD CV */}
          <div id="resume" className="mb-24">
            <Button name={"Download CV"} onClick={downloadCV} />
          </div>
        </div>
      </section>

      {/* What i can do  */}
      <section
        id="skills"
        className="bg-[linear-gradient(-140deg,#12001a_71%,#4e0070_100%)] w-full h-auto text-[var(--text-color)]"
      >
        {/* What can i do contene */}
        <div className="px-24 pt-6 pb-16 max-md:text-center">
          {/* Heading */}
          <div className="pt-16 pb-8">
            <h2 className="text-2xl font-bold">What I Can Do:</h2>
          </div>

          {/* WHat can i do Cards */}
          <div className="grid grid-cols-3 gap-4 items-stretch max-md:grid-cols-1 max-md:place-items-center">
            {mainSkill.map((main, index) => {
              return (
                <MainSkillCard
                  key={index}
                  image={main.image}
                  title={main.title}
                  description={main.description}
                  color={main.color}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* Projects  */}
      <section
        id="projects"
        className="w-full min-h-screen text-[var(--text-color)] max-md:text-center text-[min(10vw, 16px)] ]"
      >
        {/* Project Content */}
        <div className="px-24 pt-6 pb-16">
          {/* heading */}
          <div className="py-16 flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold max-md:text-xl ">
              Featured Projects:
            </h2>
            <p className="text-lg max-md:text-base">
              I have worked on many projects over the course of being a Web
              Developer, here are a few of my live, real-world, projects{" "}
            </p>
          </div>

          {/* Projects Card */}
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 items-stretch ">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  repo={project.repo}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section id="contact" className="text-[var(--text-color)] text-center">
        {/* Footer */}
        <Footer />
      </section>
    </main>
  );
};

export default Home;

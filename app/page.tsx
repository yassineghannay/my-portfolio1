import Header from './components/Header'; // Path should match your folder structure
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';



export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* About Me Section */}
      <Section title="About Me">
        <p className="text-lg text-gray-700">
          Hi! I'm Yassine Ghannay, a passionate web developer with experience in full-stack technologies.
          I enjoy creating clean, user-friendly websites and applications that solve real-world problems.
        </p>
      </Section>

      {/* Projects Section */}
      <Section title="Projects">
        <ProjectCard
          title="Project 1"
          description="A full-stack web application that helps users track their tasks."
          link="https://github.com/yassineghannay/project1"
        />
        <ProjectCard
          title="Project 2"
          description="A responsive e-commerce platform built with React."
          link="https://github.com/yassineghannay/project2"
        />
      </Section>

      {/* Contact Section */}
      <Section title="Contact">
        <p className="text-lg text-gray-700">Feel free to reach out for collaboration or inquiries!</p>
        <p>Email: yassineghannay13@gmail.com</p>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

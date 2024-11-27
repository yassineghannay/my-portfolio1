interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold text-blue-500">{title}</h3>
        <p className="text-lg text-gray-700">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          View on GitHub
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  
interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
      <section className="my-8">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div>{children}</div>
      </section>
    );
  };
  
  export default Section;
  
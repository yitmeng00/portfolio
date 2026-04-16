import { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <section className="section__wrapper">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
};

export default SectionWrapper;

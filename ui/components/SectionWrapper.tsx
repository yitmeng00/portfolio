import { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <section className="section__wrapper">
      <h4>{title}</h4>
      {children}
    </section>
  );
};

export default SectionWrapper;

import { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <section className="section__wrapper">
      <h5 className="section__title">{title}</h5>
      {children}
    </section>
  );
};

export default SectionWrapper;

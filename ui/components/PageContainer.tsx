import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className="page__container">{children}</div>;
};

export default PageContainer;

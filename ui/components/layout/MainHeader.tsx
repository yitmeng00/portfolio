interface MainHeaderProps {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <section className="main-header__container">
      <h1>{title}</h1>
    </section>
  );
};

export default MainHeader;

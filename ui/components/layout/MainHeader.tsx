interface MainHeaderProps {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <section className="main-header__container">
      <h2>{title}</h2>
    </section>
  );
};

export default MainHeader;

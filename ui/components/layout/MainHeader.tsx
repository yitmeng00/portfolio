interface MainHeaderProps {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <section className="main-header__container">
      <div className="main-header__wrapper">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default MainHeader;

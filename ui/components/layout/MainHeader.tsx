interface MainHeaderProps {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <section className="main-header__container">
      <h1 className="page-heading">{title}</h1>
      <hr />
    </section>
  );
};

export default MainHeader;

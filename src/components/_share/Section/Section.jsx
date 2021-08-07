import css from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children && children}
      </div>
    </section>
  );
};

export default Section;

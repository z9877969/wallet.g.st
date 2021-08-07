import BtnGoBack from "../_share/BtnGoBack/BtnGoBack";
import Button from "../_share/Button/Button";

const CategoriesTransactions = ({
  catList,
  handleUpdateCat,
}) => {
  return (
    <>
      <BtnGoBack title="GoBack" />
      <h1>Категории</h1>
      <ul>
        {catList.map(({ title }) => {
          const cbOnClick = () => handleUpdateCat(title);
          return (
            <li key={title}>
              <Button
                title={title}
                style={{ border: "none" }}
                cbOnClick={cbOnClick}
              />
              <Button title="..." />
            </li>
          );
        })}
      </ul>
      <form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Новая категория..."
          name="category"
          value=""
          onChange={() => {}}
        />
        <Button title="+" type="submit" />
      </form>
    </>
  );
};

export default CategoriesTransactions;

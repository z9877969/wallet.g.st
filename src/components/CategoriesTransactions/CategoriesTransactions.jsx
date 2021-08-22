import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCategory,
  removeCategory,
} from "../../redux/categories/categoriesOperations";
import BtnGoBack from "../_share/BtnGoBack/BtnGoBack";
import Button from "../_share/Button/Button";

const CategoriesTransactions = ({ catList, handleUpdateCat, transType }) => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleSubmit = (categoryTitle) => {
    const category = { title: categoryTitle };
    dispatch(addCategory({ category, transType }));
    setCategory("");
  };

  return (
    <>
      <BtnGoBack title="GoBack" />
      <h1>Категории</h1>
      <ul>
        {catList.map(({ title, id }) => {
          const cbOnClick = () => handleUpdateCat(title);
          const handleRemoveCat = () =>
            dispatch(removeCategory({ transType, id }));
          return (
            <li key={id}>
              <Button
                title={title}
                style={{ border: "none" }}
                cbOnClick={cbOnClick}
              />
              <Button title="..." cbOnClick={handleRemoveCat} />
            </li>
          );
        })}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(category);
        }}
      >
        <input
          type="text"
          placeholder="Новая категория..."
          name="category"
          value={category}
          onChange={handleChange}
        />
        <Button title="+" type="submit" />
      </form>
    </>
  );
};

export default CategoriesTransactions;

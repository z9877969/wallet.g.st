import { useHistory } from "react-router-dom";
import Section from "../_share/Section/Section";
import Button from "../_share/Button/Button";

const MainInfo = ({ title, data, transType, handleOpenTransactionForm }) => {
  // transeType = "costs" || "incomes"
  const history = useHistory();

  const handleOpenTransaction = () => {
    const { location } = history;
    const newLocation = {
      pathname: "/transaction/" + transType,
      state: {
        from: location,
        surp: "surprize",
      },
    };
    history.push(newLocation);
  };

  return (
    <Section>
      <h1>{title}</h1>
      <p>UAH</p>
      <ul>
        {data &&
          data.map(({ period, sum }) => (
            <li key={period}>
              <span>{period}</span>
              <span>{sum}</span>
            </li>
          ))}
      </ul>
      <Button title="Add" cbOnClick={handleOpenTransaction} />
    </Section>
  );
};

export default MainInfo;

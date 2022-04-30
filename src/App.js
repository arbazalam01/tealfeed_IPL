import { useContext } from "react";
import Matches from "./components/Matches/Matches";
import Navbar from "./components/Navbar/Navbar";
import IplTable from "./components/IplTable/IplTable";
import { ItemContext } from "./context/MainContext";

const App = () => {
  const { item } = useContext(ItemContext);
  return (
    <div>
      <Navbar />
      {item === 0 ? <Matches /> : <IplTable />}
    </div>
  );
};

export default App;

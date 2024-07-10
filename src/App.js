import { faRefresh, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import { useMausam } from "./contexts/Mausam";

function App() {
  const mausam = useMausam();

  useEffect(() => {
    mausam.fetchCurrentUserLocationData();
  }, []);
  return (
    <div className="App">
      <h1 className="heading">Mausam Samachar</h1>
      <Input />
      <Button value={faSearch} onClick={mausam.fetchMausamData} />
      <Card />
      <Button
        value={faRefresh}
        onClick={() => {
          mausam.setSearchRegion("");
          mausam.setData("");
          mausam.setBackground("");
        }}
      />
    </div>
  );
}

export default App;

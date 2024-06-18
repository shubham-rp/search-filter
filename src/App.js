import "./App.css";
import { useState } from "react";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filteredList, setFilteredList] = useState(list);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilteredList(list);
    }

    // this code filters those items who begin with entered input value
    // eg: entered input text: ap --> will filter only Apple

    const filteredValues = list.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0
    );

    /*

    This code with simple & slight modification filters items even if they contain the entered input text
    eg: entered input text: ap --> will filter Pineapple & Apple

    const filteredValues = list.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
 */

    setFilteredList(filteredValues);
  };

  return (
    <div className="App">
      <div className="header">Search for your favorite fruit</div>
      <div>
        Search:{" "}
        <input
          type="text"
          placeholder="Enter what you are looking for..."
          onChange={handleSearch}
        />
      </div>
      <div>
        {filteredList.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
 
import axios from "axios";
 
function App() {
  const [dataXML, setdata] = useState({});
 
  const getData = async () => {
    try {
      const response = await axios.get("http://api.nbp.pl/api/exchangerates/tables/a",
        {
          "Content-Type": "application/xml; charset=utf-8",
        }
      );
 
      setdata(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    getData();
  }, []);
 
  console.log(dataXML);
 
  return (
    <div>
      <h1>{dataXML.effectiveDate}</h1>
 
      <h2>{dataXML.no}</h2>
    </div>
  );
}
 
export default App;
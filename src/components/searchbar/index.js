import React,{useCallback,useState,useEffect}from "react";
import { getRemedyLeaflet } from "../../services/search";

const SearchBar = () => {
  const [remedy, setRemedy] = useState([]);
  const [nome] = useState("Rivotril");

  const c = console.log.bind(document)
  c(remedy.content)
  
  const getRemedy = useCallback(async() => {
    try {
      const { data } = await getRemedyLeaflet(nome);
      console.log("entrei")
      setRemedy(data);
    } catch (error) {
      console.error(error);
    }
  }, [nome]);

  useEffect(() => {
    getRemedy();
  }, [getRemedy]);

  if (!remedy) return null;


  return ( 
    <>Oi</>
  );
}
 
export default SearchBar;
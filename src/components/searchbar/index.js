import React,{ useCallback,useState,useEffect }from "react";
import { IconContext } from "react-icons";
import { GoSearch } from "react-icons/go"
import { getRemedyName } from "../../services/search";

import DrugModal from "../modal";

const SearchBar = () => {
  const [remedy, setRemedy] = useState("");
  const [nome, setNome] = useState("");
  const [number, setNumber] = useState("")
  const [filterSearch, setFilterSearch] = useState([])

  const c = console.log.bind(document)
  c("nome", nome)

  const getRemedy = useCallback(async() => {
    try {
      const { data } = await getRemedyName(nome);
      
      setRemedy(data);

    } catch (error) {
      console.error(error);
    }
  }, [nome]);

  useEffect(() => {
    getRemedy()
    // : setFilterSearch([])
    console.log("useEffect",nome)
  }, [getRemedy, nome]);

  const handleFilter = (event) => {
    setNome(event.target.value)
  let filterName = remedy?.content?.filter( value => {
    // c(value)
    return value.nomeProduto.toLowerCase().includes(nome.toLocaleLowerCase())
    })

    setFilterSearch(filterName)
    // c(filterSearch)
  }

  const handleClickAutoComplete  = (element) => {
    setNome(element.nomeProduto)
    setNumber(element.numProcesso)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      document.getElementById('modal').click()
    }
  }
  
  return ( 
    <div>
      <IconContext.Provider value={{ color:"#B8B8B3", size:"30px" }}>
        <input
          value={nome}
          type="text"
          placeholder="Pesquisar..."
          onKeyDown={handleKeyDown}
          onChange={handleFilter}
        />
        <GoSearch />
        <DrugModal number={number}></DrugModal>
        
      </IconContext.Provider>
        {filterSearch !== 0 && 
          <div>
            { filterSearch?.map(element =>
              <div key={element.idProduto} onClick={() => handleClickAutoComplete(element)}>
                <p> {element.nomeProduto} </p>
              </div>)
            }
          </div>
        }
        
      
     
    </div>
    
  );
}
 
export default SearchBar;
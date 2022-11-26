import React,{ useState,useEffect,useRef }from "react";

import { IconContext } from "react-icons";
import { getRemedyName } from "../../services/search";
import { SearchBox } from  "../UI/box"

import DrugModal from "../modal";
import { ResultBox, Item } from "../UI/resultSearch";

const SearchBar = () => {
  const [remedy, setRemedy] = useState("");
  const [nome, setNome] = useState("");
  const [number, setNumber] = useState("")
  const [filterSearch, setFilterSearch] = useState([])

  const ref = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();

    setNome("");
    setFilterSearch([])
  };

 useEffect(()=> {
  if(nome.length > 0) {
    console.log(nome.length > 0)
    const fetch = async() => {
      try {
        const { data } = await getRemedyName(nome);
        setRemedy(data);

      } catch (error) {
        console.error(error);
      }
    }
    fetch()
  }

  }, [nome]);

  
  const handleFilter = (event) => {
    let newName = event.target.value
    setNome(event.target.value)


    let filterName = remedy?.content?.filter( value => {
      return value.nomeProduto.toLowerCase().includes(newName.toLocaleLowerCase())
    })

    setFilterSearch(filterName)
  }
  

  const handleClickAutoComplete  = (element) => {
    setNome(element.nomeProduto)
    setNumber(element.numProcesso)
    document.getElementById('modal').click()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      document.getElementById('modal').click()
      if(!!filterSearch[0].numProcesso) {
        setNumber(filterSearch[0].numProcesso)
      }
    }
  }

  return ( 
    <div>
      
      <IconContext.Provider value={{ color:"#B8B8B3", size:"30px" }}>
        <div className="box">
          <SearchBox name="search">
            <input
              ref={ref}
              value={nome}
              type="text"
              placeholder="Pesquisar..."
              onKeyDown={handleKeyDown}
              onChange={handleFilter}      
            />
            <button type="reset" onClick={handleClick}> 
    
            </button>
          </SearchBox>
          <DrugModal number={number}></DrugModal>
        </div>
       
        
      </IconContext.Provider>
        {!!filterSearch && 
          <ResultBox>
            { filterSearch?.map(element =>
              <Item key={element.idProduto} onClick={() => handleClickAutoComplete(element)}>
                <p> {element.nomeProduto} </p>
              </Item>)
            }
          </ResultBox>
        }
    </div>
    
  );
}
 
export default SearchBar;
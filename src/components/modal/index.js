import React, { useState, useCallback, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

import { getRemedyLeaflet, getPDF } from '../../services/search';

export default function DrugModal({number}) {
  const [show, setShow] = useState(false);
  const [remedy, setRemedy] = useState("")
  const [id, setId] = useState("")
  const [download, setDownload] = useState("")
  
  const getRemedy = useCallback(async() => {
    try {
      const { data } = await getRemedyLeaflet(number);
      setRemedy(data);
      setId(remedy.codigoBulaPaciente)

    } catch (error) {
      console.error(error);
    }
  }, [number, remedy.codigoBulaPaciente]);

  const getLeafLetPDF = useCallback(async() => {
    try {
      const  {config}  = await getPDF(id);
      console.log(config.baseURL + config.url)
      setDownload(config.baseURL + config.url)
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    if(!!number) getRemedy();
    if(!!id) getLeafLetPDF();

  }, [getLeafLetPDF, getRemedy, id, number] );

  const handleClickChangeID = (e) => {
    e.preventDefault();
    window.open(download, "_blank")
  }

  const handleHide = () => {
    setShow(false)
    setRemedy('')
  }

  return (
    <>
      <Button variant="primary" id='modal' onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={handleHide}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {remedy.nomeComercial}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            {remedy ? 
            <div> 
              <p>
                Classes Terapeuticas:
                {remedy?.classesTerapeuticas}
                Princípio Ativo:
                {remedy?.principioAtivo}
                Medicamento de Referência:
                {remedy?.medicamentoReferencia}
                Categoria Regulatória:
                {remedy?.categoriaRegulatoria}
                Nome do Fabricante:
                {remedy?.empresa?.razaoSocial}
              </p>
              <Button onClick={handleClickChangeID}/>
            </div>
            : <p> Não encontramos o remedio em nossos dados, confira o nome do remedio desejado e tente novamente!</p>
            }
          

          
        </Modal.Body>
       
      </Modal>
    </>
  );
}


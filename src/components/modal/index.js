import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import { Image } from "../UI/loading";

import { getRemedyLeaflet, getPDF } from "../../services/search";
import { TextDescription, TitleText } from "../UI/modal";

export default function DrugModal({ number }) {
  const [show, setShow] = useState(false);
  const [remedy, setRemedy] = useState("");
  const [download, setDownload] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (number.length > 0) {
      const fetch = async () => {
        try {
          setLoading(true);
          const { data } = await getRemedyLeaflet(number);

          const { config } = await getPDF(remedy.codigoBulaPaciente);

          setRemedy(data);

          setDownload(`${config.baseURL}${config.url}`);

          setLoading(false);
        } catch (error) {
          setLoading(false);

          console.error(error);
        }
      };

      fetch();
    }
  }, [number, remedy.codigoBulaPaciente]);

  const handleClickChangeID = (e) => {
    e.preventDefault();

    if (download.length > 0) {
      window.open(download, "_blank");
    } else {
      window.alert("aguarde");
      setTimeout(() => window.open(download, "_blank"));
    }
  };

  const handleHide = () => {
    setShow(false);
    setRemedy("");
  };
  console.log(remedy);
  return (
    <>
      <Button
        style={{ display: "none" }}
        variant="primary"
        id="modal"
        onClick={() => setShow(true)}
      >
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
          {loading ? null : (
            <Modal.Title id="example-custom-modal-styling-title">
              {remedy.nomeComercial}
            </Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <Image src={"/loading.gif"} alt="loading..." />
          ) : (
            <div>
              {!!remedy ? (
                <div>
                  <div>
                    <TitleText>Classes Terapeuticas:</TitleText>
                    <TextDescription>{remedy?.classesTerapeuticas}</TextDescription>
                    <TitleText>Princípio Ativo:</TitleText>
                    <TextDescription>{remedy?.principioAtivo}</TextDescription>
                    <TitleText>Medicamento de Referência:</TitleText>
                    <TextDescription>{remedy?.medicamentoReferencia}</TextDescription>
                    <TitleText>Categoria Regulatória:</TitleText>
                    <TextDescription>{remedy?.categoriaRegulatoria}</TextDescription>
                    <TitleText>Nome do Fabricante:</TitleText>
                    <TextDescription>{remedy?.empresa?.razaoSocial}</TextDescription>
                  </div>
                  <Button onClick={handleClickChangeID} />
                </div>
              ) : (
                <p>
                  {" "}
                  Não encontramos o remedio em nossos dados, confira o nome do
                  remedio desejado e tente novamente!
                </p>
              )}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

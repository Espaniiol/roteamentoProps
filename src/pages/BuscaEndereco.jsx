import React, { useState } from "react";
import { UrlViaCep } from "../config/config";

const BuscaEnderecos = () => {

  const [endereco, setEndereco] = useState("");

  function BuscaCep() {
    console.log(e);
    const cep = e.target.value;

    setEndereco({
      cep,
    })

    if (cep && cep.length === 8) {

      try {
        UrlViaCep.get(`${cep}/json`).then(function (response) {
          const dados = response.data;
          if (!response.data.error){
              console.log(dados);
              setEndereco({
                  cep:cep,
                  rua: dados.logradouro,
                  bairro: dados.bairro,
                  cidade: dados.cidade,
                  estado: dados.uf,
              })
          }
        });
      } catch (error) {

      }

    }

  };

  return (
    <main>
      <input type="text" onChange={BuscaCep} maxLength={8} />
      <div></div>
      <section>
          
      </section>
    </main>
  );
};

export default BuscaEnderecos;
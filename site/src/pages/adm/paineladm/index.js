import Rodape from "../../components/rodape";
import React, { useState } from "react";
import "./index.scss";

export default function Painel() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cabecalhoPosition, setCabecalhoPosition] = useState("normal");

  const ve = () => {
    if (menuVisible) {
      setCabecalhoPosition("normal");
    } else {
      setCabecalhoPosition("direita");
    }
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="painel-adm">
      <div className={`cabecalho-painel ${cabecalhoPosition}`}
        style={{width: menuVisible && "calc(100% - 200px)"}}>
        <div className="menu-icon">
          <img
            className="menu1"
            onClick={ve}
            src="/assets/images/zabugaaa.png"
            alt=""
          />
          <p> PAINEL</p>
        </div>

        <div className="alerta">
          <img src="/assets/images/sino.png" alt="" />

          <div className="admin">
            <img src="/assets/images/adm.png" alt="" />
            <p>ADMIN</p>
          </div>
        </div>
      </div>
      {menuVisible && (
        <div className="menu-infos-container">
          <div className="menu-infos">
            <img
              className="atelie"
              src="/assets/images/atelieicon.png"
              alt=""
            />
            <div id="menu" className="menu">
              <h5>PAINEL</h5>
              <a href=""> CADASTRO DE PRODUTOS</a>
              <a href="">CONSULTA DE PRODUTOS</a>
              <a href="">PEDIDOS</a>
              <a href="">RELATÓRIOS</a>
            </div>
          </div>
        </div>
      )}

      <div className="painel">
        <div className="organiza">
          <div className="container">
            <div className="topo">
              <div className="claro">
                <h1>VISITAS</h1>
                <h2>350 mensais</h2>
              </div>
              <div className="escuro">
                <h1> PEDIDOS</h1>
                <h2>1,500 mensais</h2>
              </div>
              <div className="claro">
                <h1>VENDAS</h1>
                <h2>2,100 mensais</h2>
              </div>
              <div className="escuro">
                <h1> USUÁRIOS</h1>
                <h2>1,900 mensais</h2>
              </div>
            </div>
            <div className="container-painel">
              <div className="divide">
                <div className="grafico">
                  <img src="/assets/images/grafico.png" alt="" />
                </div>
                <div className="graficos">
                  <div className="redondo">
                    <img src="/assets/images/graficoredondo.png" alt="" />
                  </div>
                  <div className="circulo">
                    <img src="/assets/images/circulo.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

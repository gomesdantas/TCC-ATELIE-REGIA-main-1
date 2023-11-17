import "./index.scss";
import React, { useState, useEffect } from "react";
import CarrosselDeImagens from "../../../components/carrosel";
import axios from "axios";

export default function Produto() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [produtos, setProdutos] = useState([]);

  const carregarProdutosPorCategoria = async (categoriaId) => {
    try {
      const response = await (categoriaId);

      if (Array.isArray(response)) {
        console.log('Produtos filtrados por categoria:', response);
        setProdutos(response);
      } else {
        console.error('A resposta do servidor não contém um array de produtos:', response);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const images = [
    "/assets/images/image_43.png",
    "/assets/images/image_47.webp",
    "/assets/images/image_48.png"
  ];
  return (
    <div className="container-produtos">

        <CarrosselDeImagens imagens={images} />
      {/* ............................................................ */}

      <div className="secao-container-ordem">
        <div className="faixa-ordem">
          <p id="titulo-ordem">15 PRODUTOS</p>
          <div className="secao-ordem">
            <p id="titulo-ordem">ORDENAR POR </p>
            <div className="images">
              <img id="baixo" src="/assets/images/Arrow 1.png" alt="" />
              <img id="cima" src="/assets/images/Arrow 2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="secao-container-produtos">

          <div class="secao-container-filtros">
            <h6 id="filtra">
              <strong>FILTROS</strong>
            </h6>
            <div class="secoes" id="filtroSecoes">
              <h6 id='filtra'> 
                <strong>CATEGORIAS</strong>
              </h6>
              <div class="secoes-quadrado"onClick={() => carregarProdutosPorCategoria("Blusas")}>
                <div class="quadrado"></div>
                <a>Blusas</a>
              </div>
              <div class="secoes-quadrado" onClick={() => carregarProdutosPorCategoria("Calças")}>
                <div class="quadrado"></div> <a>Calças</a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>Shorts</a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div> <a>Vestidos</a>
              </div>
            </div>

            <div class="secoes" id="filtroSecoes">
              <h6>
                <strong> PREÇO</strong>
              </h6>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>Entre 50-100</a>
              </div>
            </div>
            <div class="secoes" id="filtroSecoes">
              <h6>
                <strong> TAMANHO</strong>
              </h6>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>P</a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>M</a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>G</a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>GG</a>
              </div>
            </div>
            <div class="secoes" id="filtroSecoes">
              <h6>
                <strong>TECIDO</strong>{" "}
              </h6>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>Algodão Orgânico</a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>

                <a>Tricô</a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>Seda</a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>Linho</a>
              </div>
            </div>

            <div class="secoes" id="filtroSecoes">
              <h6>
                <strong>COR</strong>
              </h6>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>
                
                  <a>Erva-mate</a>
                </a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>
           
                  <a>Madeira</a>
                </a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>
                 
                  <a>Off-white</a>
                </a>
              </div>
              <div class="secoes-quadrado">
                <div class="quadrado"></div>
                <a>
                  <a>cobre</a>
                </a>
              </div>
            </div>
          </div>

          <hr />

          <div id="secao-produto" className="secao-produto">
            <div id="produtos" className="produtos">
            <div class="produto-pair">
            {produtos.map((produto) => (
          <div key={produto.id} className="produto">
            <img src={produto.imagem} alt="" />
            <h3>COMPRAR</h3>
            <h1 className="nome-produto">{produto.nome}</h1>
            <p>{produto.descricao}</p>
            <p>POR <strong>R$ {produto.preco}</strong></p>
          </div>
        ))}
            <div class="produto">
                <img
                  id="imagem-produto"
                  src="/assets/images/image 49.png"
                  alt=""
                />
                <h3 id="fixado">COMPRAR</h3>
                <h1 id="nome-produto" className="nome-produto"> SHORT LINHO</h1>
               
                <p> Short de Linho Off-White</p>
                <p>
                
                  POR <strong> R$ 110,00</strong>
                </p>
              </div>
              <div class="produto">
                <img
                  id="imagem-produto"
                  src="/assets/images/image 49.png"
                  alt=""
                />
                <h3 id="fixado">COMPRAR</h3>
                <h1 id="nome-produto"> SHORT LINHO</h1>
                <p> Short de Linho Off-White</p>
                <p>
               
                  POR <strong> R$ 110,00</strong>
                </p>
              </div>

              <div class="produto">
                <img
                  id="imagem-produto"
                  src="/assets/images/image 49.png"
                  alt=""
                />
                <h3 id="fixado">COMPRAR</h3>
                <h1 id="nome-produto"> SHORT LINHO</h1>
                <p> Short de Linho Off-White</p>
                <p>
              
                  POR <strong> R$ 110,00</strong>
                </p>
              </div>
              <div class="produto">
                <img
                  id="imagem-produto"
                  src="/assets/images/image 49.png"
                  alt=""
                />
                <h3 id="fixado">COMPRAR</h3>
                <h1 id="nome-produto"> SHORT LINHO</h1>
                <p> Short de Linho Off-White</p>
                <p>
                 
                  POR <strong> R$ 110,00</strong>
                </p>
              </div>
            </div>
           
            </div>

            <div class="produto-pair-res">
            <div class="produto">
                <img
                  id="imagem-produto"
                  src="/assets/images/image 49.png"
                  alt=""
                />
                <h3 id="fixado">COMPRAR</h3>
                <h1 id="nome-produto" className="nome-produto"> SHORT LINHO</h1>
               
                <p> Short de Linho Off-White</p>
                <p>
                
                  POR <strong> R$ 110,00</strong>
                </p>
              </div>
              <div class="produto">
                <img
                  id="imagem-produto"
                  src="/assets/images/image 49.png"
                  alt=""
                />
                <h3 id="fixado">COMPRAR</h3>
                <h1 id="nome-produto"> SHORT LINHO</h1>
                <p> Short de Linho Off-White</p>
                <p>
               
                  POR <strong> R$ 110,00</strong>
                </p>
              </div>

              <div class="produto">
                <img
                  id="imagem-produto"
                  src="/assets/images/image 49.png"
                  alt=""
                />
                <h3 id="fixado">COMPRAR</h3>
                <h1 id="nome-produto"> SHORT LINHO</h1>
                <p> Short de Linho Off-White</p>
                <p>
              
                  POR <strong> R$ 110,00</strong>
                </p>
              </div>
              <div class="produto">
                <img
                  id="imagem-produto"
                  src="/assets/images/image 49.png"
                  alt=""
                />
                <h3 id="fixado">COMPRAR</h3>
                <h1 id="nome-produto"> SHORT LINHO</h1>
                <p> Short de Linho Off-White</p>
                <p>
                 
                  POR <strong> R$ 110,00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

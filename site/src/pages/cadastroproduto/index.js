
import React, { useState } from "react";
import axios from "axios";
import "./index.scss";

export default function Cadastroproduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [promocao, setPromocao] = useState(0);
  const [promocaoBt, setPromocaoBt] = useState(false);
  const [destaque, setDestaque] = useState(false);
  const [disponivel, setDisponivel] = useState(false);
  const [detalhes, setDetalhes] = useState("");
  const [estoque, setEstoque] = useState(0);
  const [designer, setDesigner] = useState(1);

  async function salvardados() {

    try{

    const r = await axios.post("http://localhost:5036/adm/cadastro/produto", {
      nome: nome,
      preco: preco,
      promocao: promocao,
      promocaoBt: promocaoBt,
      destaque: destaque,
      disponivel: disponivel,
      detalhes: detalhes,
      estoque: estoque,
      designer: designer
    });

    console.log('Resposta do servidor:', r.data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
}

  return (
    <div className="tudo-cadastroproduto">
      <div className="escrever">
        <a> ← VOLTAR PARA PAINEL</a>
        <h1> CADASTRO DE PRODUTOS</h1>
      </div>

      <div className="input-orisontal1">
        <div className="direita-cadastroproduto-quadrado">
          <div className="escrita-quadrado">
            <input className="input-css" placeholder="Adicionar imagem +" />
          </div>
        </div>

        <div className="inputs-adicionar">
          <div className="adicionar">
            <div className="input-nome">
              <label> NOME</label>
              <input
                className="input-nome1"
                type="text"
                placeholder="Nome da peça"
                value={nome}
                onChange={(e) => setNome(e.target.value)}/>
            </div>

            <div className="input-detalhes">
              <label>DETALHES</label>
              <input
                className="input-nome2"
                type="text"
                placeholder="Outras características"
                value={detalhes}
                onChange={(e) => setDetalhes(e.target.value)}
              />
            </div>
          </div>

          <div className="inputs2">
            <div className="input-designer">
              <label> DESIGNER</label>
              <select className="custom-select1" name="select-designer">
                <option value="valor1">Valor 1</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
              </select>
              <button className="button-designer" type="button">
                adicionar novo designer
              </button>
            </div>

            <div className="input-categoria">
              <label>CATEGORIA</label>
              <select className="custom-select2" name="select-categoria">
                <option value="valor1">Vestido 1</option>
                <option value="valor2">Vestido 2</option>
                <option value="valor3">Vestido 3</option>
              </select>
              <button className="button-designer" type="button">
                adicionar nova categoria
              </button>
            </div>

            <div className="input-estoque">
              <label>ESTOQUE</label>
              <input type="number" placeholder="0" />
            </div>
          </div>

          <div className="inputs3">
            <div className="cor">
              <label>COR</label>
              <select className="custom-select1">
                <option value="valor1">Verde</option>
                <option value="valor2">Preto</option>
                <option value="valor3">Amarelo</option>
                <option value="valor4">Vermelho</option>
              </select>
              <button className="button-designer" type="button">
                adicionar nova cor
              </button>
            </div>

            <div className="tecido">
              <label>TECIDO</label>
              <select className="custom-select5">
                <option value="valor1">tecido 4</option>
                <option value="valor2">tecido 3</option>
                <option value="valor3">tecido 2</option>
                <option value="valor4">tecido 1</option>
              </select>
              <button className="button-designer" type="button">
                adicionar novo tecido
              </button>
            </div>

            <div className="tamanho">
              <label>TAMANHO</label>
              <select className="custom-select6">
                <option value="valor1">tamanho 4</option>
                <option value="valor2">tamanho 3</option>
                <option value="valor3">tamanho 2</option>
                <option value="valor4">tamano 1</option>
              </select>
              <button className="button-designer" type="button">
                adicionar novo tamanho
              </button>
            </div>
          </div>

          <div className="inputs4">
            <div className="valor-produto">
              <label> VALOR </label>
              <input type="Number" placeholder="R$ 00,00" value={preco}  onChange={(e) => setPreco(e.target.value)} />
            </div>

            <div className="valor-promocional-produto">
              <label> VALOR PROMOCINAL </label>
              <input type="Number" placeholder="R$ 00,00"  value={promocao} onChange={(e) => setPromocao(e.target.value)}/>
            </div>
          </div>

          <div className="checkbox">
            <input type="checkbox" />
            <label> PROMOÇÃO</label>

            <input type="checkbox" />
            <label> DESTAQUE</label>

            <input type="checkbox" />
            <label> DISPONÍVEL</label>
          </div>
        </div>
      </div>

      <hr />

      <div className="botoes-produto">
        <button id="branco"> DELETAR </button>
        <button id="preto" onClick={salvardados}>
          SALVAR
        </button>
      </div>
    </div>
  )
};
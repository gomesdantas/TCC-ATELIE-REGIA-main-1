import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './pages/user/pagina-produto';
import Sacola from './pages/user/sacola';
import Loginadm from './pages/adm/admlogin';
import Cadastroproduto from './pages/adm/cadastroproduto';
import Cadastrocliente from './pages/user/cadastrocliente';
import LoginCliente from './pages/user/logincliente';
import Homepage from './pages/user/pagina-inicio';
import RelatoriosAdm from './pages/adm/relatoriosadm';
import ConsultaProdutos from './pages/adm/consultapedidos';
import Detalhespedido from './pages/user/detalhespedido';
import Painel from './pages/adm/paineladm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/produtos' element={<Produto/>}/>
        <Route path='/sacola' element={<Sacola/>}/>
        <Route path='/loginadm' element={<Loginadm/>}/>
        <Route path='/cadastro/produto' element={<Cadastroproduto/>}/>
        <Route path='/cadastro/cliente' element={<Cadastrocliente/>}/>
        <Route path='/login/cliente' element={<LoginCliente/>}/>
        <Route path='/relatorios' element={<RelatoriosAdm/>}/>
        <Route path='/adm/consulta/pedidos' element={<ConsultaProdutos/>}/>
        <Route path='/painel' element={<Painel/>}/>
        <Route path='/detalhes' element={<Detalhespedido/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


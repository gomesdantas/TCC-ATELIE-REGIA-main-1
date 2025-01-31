import { con } from './connection.js';



export async function inserircadastrousuario(cadastro) {

  const comando =

    `INSERT INTO tb_cadastrocliente(nm_cliente, ds_emailcliente, ds_senhacliente, bt_termos)
                            values( ?, ?, ?, ? ) `;

  const [resposta] = await con.query(comando, [cadastro.nome, cadastro.email, cadastro.senha, cadastro.termos]);
  cadastro.id = resposta.insertId;

  return cadastro;

}


export async function loginCliente(email, senha) {

  const comando = `
  
        select   id_cliente             id,
            ds_emailcliente             email,
            ds_senhacliente             senha

        from tb_cadastrocliente

        where ds_emailcliente = ?
        and ds_senhacliente = ?

  `

  const [linhas] = await con.query(comando, [email, senha]);
  return linhas;

}

export async function verificarEmailExistente(email) {
  try {
    const [linhas, campos] = await con.execute('SELECT * FROM tb_cadastrocliente WHERE  ds_emailcliente    = ?', [email]);

    return linhas.length > 0;
  } catch (err) {
    console.error('Erro ao verificar email existente:', err);
    return false;
  }
}

export async function CadastroInformacoesPessoais(infop) {

  const comando = ` 
  
    insert tb_cliente ( id_cadcliente, dt_nascimento, ds_cpf, id_genero, ds_num_celular )
                values( ?, ?, ?, ?, ? )

  `

  const [resposta] = await con.query(comando, [infop.idcadastro, infop.datanasc, infop.cpf, infop.idgenero, infop.numcel])

  infop.id = resposta.insertId;

  return infop;

}

//conversar vivi

export async function CadastroPedido(pedido) {

  const comando = `

  insert into tb_pedido ( id_cliente, nr_itens, vl_totalcompra, dt_pedido, ds_situacao, tp_pagamento, nm_cartao, nr_cartao, dt_validade, nr_cod_seg, nr_parcelas, ds_previsao_entrega )
      values( ?, ?, ?, NOW(), ?, ?, ?, ?, ?, ?, ?, ? );

  `

  const [resposta] = await con.query(comando, [pedido.idcliente, pedido.numeroitens, pedido.vltotal, pedido.situacao, pedido.tppagamento, pedido.nomecartao, pedido.nrcartao, pedido.dtvalidade, pedido.nrcodseguranca, pedido.parcelas, pedido.entrega]);

  pedido.id = resposta.insertId;

  return pedido;


}




export async function ConsultaPedido(id) {

  const comando = `
  
  select * from tb_pedido where id_cliente like ?;

  `

  const [resposta] = await con.query(comando, [id]);

  return resposta;

}



export async function ConsultaProduto() {

  const comando = `

      select * from tb_produto;

  `

  const [linhas] = await con.query(comando);
  return linhas;


}


export async function ConsultaPorNome(nome) {

  const comando = `  
  
  select * from tb_produto 
  
  where nm_produto like ?

  `

  const [linhas] = await con.query(comando, [`%${nome}%`]);

  return linhas;

}


export async function FiltroPorCategoria(id) {

  const comando = `  
  
  SELECT tb_produto.id_produto, tb_produto.nome_produto, tb_produto.vl_preco, tb_produto.ds_detalhes
  FROM tb_p_categorias
  INNER JOIN tb_produto ON tb_produto.id_produto = tb_p_categorias.id_produto
  WHERE tb_p_categorias.id_categorias LIKE ?;
  
  `

  const [linhas] = await con.query(comando, [id]);

  return linhas;

}


export async function FiltroPorTecido(id) {

  const comando = `  
  
  select * from tb_p_tecidos 
  inner join tb_produto on tb_produto.id_produto = tb_p_tecidos.id_produto
  where id_tecido like ?;

  `

  const [linhas] = await con.query(comando, [id]);

  return linhas;

}

export async function FiltroPorDesigner(id) {

  const comando = `  
  
  select * from tb_produto
  
  where id_designer like ?;

  `

  const [linhas] = await con.query(comando, [id]);

  return linhas;

}

export async function FiltroPorCor(id) {

  const comando = `  
  
  select * from tb_p_cores 
  inner join tb_produto on tb_produto.id_produto = tb_p_cores.id_produto
  where id_cores like ?;

  `

  const [linhas] = await con.query(comando, [id]);

  return linhas;

}

export async function FiltroPorTamanho(id) {

  const comando = `  
  
  select * from tb_p_tamanho 
  inner join tb_produto on tb_produto.id_produto = tb_p_tamanho.id_produto
  where id_tamanho like ?;

  `

  const [linhas] = await con.query(comando, [id]);

  return linhas;

}



// export async function FiltroPorValor( valornormal, valorpromocional ) {

//   const comando = `  

//     select * from tb_produto 

//     where vl_preco or vl_promocao between ? or ?;

//     `

//   const [linhas] = await con.query(comando, [ valornormal, valorpromocional ]);

//   return linhas[0];

// }



export async function FiltroPorPromocao(promocao) {

  const comando = `  
  
  select * from tb_produto 
  
  where bt_promocao like 1;

  `

  const [linhas] = await con.query(comando, [promocao]);

  return linhas;

}


export async function FiltroPorDestaque(destaque) {

  const comando = `  
  
  select * from tb_produto 
  
  where bt_destaque like 1;

  `

  const [linhas] = await con.query(comando, [destaque]);

  return linhas;

}


export async function FiltroPorDisponivel(disponivel) {

  const comando = `  
  
  select * from tb_produto 
  
  where bt_disponivel = 1;

  `

  const [linhas] = await con.query(comando, [disponivel]);

  return linhas;

}


export async function CadastroInfoEntrega(pedidoend) {

  const comando = `
  
      insert into tb_enderecos( ds_endereco, ds_cep, ds_complemento, nr_numero_res )
                        values( ?, ?, ?, ? )


  `

  const [linhas] = await con.query(comando, [pedidoend.endereco, pedidoend.cep, pedidoend.complemento, pedidoend.numres])

  pedidoend.id = linhas.insertId;

  return pedidoend;

}


export async function CadastroFinalCompra(id) {


  const comando = `
  
      insert into tb_pedido_item ( id_produto, id_pedido, id_cliente, id_endereco, id_entregas )
                            values( ?, ?, ?, ?, ? )
  
  `

  const [linhas] = await con.query(comando, [id.produto, id.pedido, id.cliente, id.endereco, id.entregas]);

  id.id = linhas.insertId;

  return id;

}

  export async function UpdateFinalCompraPedido(id, idF) {

    const comando = `

      update tb_pedido_item
      set id_pedido  = ?
      where id_item = ?

`

    const [linhas] = await con.query(comando, [idF.pedido, id]);

    linhas.affectedRows;

}


export async function UpdateFinalCompraProduto(id, idF) {

  const comando = `

    update tb_pedido_item
    set id_produto  = ?
    where id_item = ?

`

  const [linhas] = await con.query(comando, [idF.produto, id]);

  linhas.affectedRows;

}


export async function UpdateFinalCompraEntrega(id, idF) {

  const comando = `

    update tb_pedido_item
    set id_endereco  = ?,
        id_entregas = ?
    where id_item = ?

`

  const [linhas] = await con.query(comando, [idF.endereco, idF.entrega, id]);

  linhas.affectedRows;

}



export async function ItensPedido(id) {

  const comando = `

      select * from tb_pedido_item
      inner join tb_produto on tb_produto.id_produto = tb_pedido_item.id_produto
      where id_cliente like ?;

`

  const [linhas] = await con.query(comando, [id])

  return linhas;

}




export async function ConsultarEnderecos(id) {

  const comando = ` 

  select * from tb_pedido_item
  inner join tb_enderecos on tb_enderecos.id_endereco = tb_pedido_item.id_endereco
  where id_cliente like ?;

  `

  const [linhas] = await con.query(comando, [id])

  return linhas;

}

export async function CadastrarFavorito(favorito) {

  const comando = `
  
              insert into tb_favoritos( id_cliente, id_produto )
                                values( ?, ? )
  `

  const [linhas] = await con.query(comando, [favorito.idcliente, favorito.idproduto])

  favorito.id = linhas.insertId;

  return favorito;

}


export async function ConsultarFavoritos(id) {

  const comando = `
  
  select * from tb_favoritos
  inner join tb_cliente on tb_cliente.id_cliente = tb_favoritos.id_cliente;
  
  `


  const [linhas] = await con.query(comando, [id])

  return linhas;

}



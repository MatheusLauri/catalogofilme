import { Link } from 'react-router-dom';
import './index.scss';

import axios from 'axios';
import { useState } from 'react';


export default function Listar() {
  const [listaContatos, setListaContatos] = useState([]);

  async function listarTodos() {
    let url = 'http://localhost:5000/listarfilme';
    let resp = await axios.get(url);
    setListaContatos(resp.data);
  }


  return (
    <div className='pagina-listar'>
      <div className='container'>
        <h1> Consultar </h1>
        <div className='filtros'>
          <button onClick={listarTodos}> Buscar Todos</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Favorito</th>
              <th>Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {listaContatos.map(item =>
              <tr>
                <td>{item.id}</td>
                <td>{item.contato}</td>
                <td>{item.telefone}</td>
                <td>{item.email}</td>
                <td>{item.favorito == 1 ? 'Sim' : 'Não'}</td>
                <td>{item.dtCadastro.substring(0, 10)}</td>
              </tr>  
            )}
          </tbody>
        </table>

        <div className='voltar'>
          <hr />
          <Link to='/'> Voltar </Link>
        </div>

      </div>
    </div>
  )
}
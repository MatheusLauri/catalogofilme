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
              <th>Diretor</th>
              <th>Filme</th>
              <th>lancamento</th>
              <th>Disponivel</th>
              <th>Sinopse</th>
            </tr>
          </thead>
          <tbody>
            {listaContatos.map(item =>
              <tr>
                <td>{item.id_filme}</td>
                <td>{item.id_usuario}</td>
                <td>{item.nm_filme}</td>
                <td>{item.dt_lancamento}</td>
                <td>{item.bt_disponivel == 1 ? 'Sim' : 'Não'}</td>
                <td>{item.ds_sinopse}</td>
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
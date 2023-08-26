


import axios from 'axios';
import './index.scss'
import React, { useState } from 'react';


export default function Index() {
  const [nome, setNome] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [usuario, setUsuario] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [disponivel, setDisponivel] = useState(false);

    async function Salvarfilme() {

    let filme = {
      nome: nome,
      sinopse: sinopse,
      avaliacao: avaliacao,
      disponivel: disponivel,
      usuario: usuario,
      lancamento: lancamento
    }

    let url = 'http://localhost:5000/filme';
    let resp = await axios.post(url, filme);

    alert('Salvouu! :)');
  }



  return (
    <main className='page page-cadastrar'>

      <div className='container'>


        <div className='conteudo'>
          <section>
            <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo Filme</h1>

            <div className='form-colums'>
              <div>
                <div className='upload-capa'>
                  <img src="/assets/images/icon-upload.svg" alt="" />
                </div>
              </div>
              <div>
                <div className='form-row'>
                  <label>Nome Filme:</label>
                  <input type='text' placeholder='Nome do filme' value ={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div className='form-row'>
                  <label>Nome Autor:</label>
                  <input type='Number' placeholder='Nome do Autor' value={usuario} onChange={e => setUsuario(e.target.value)} />
                </div>
                <div className='form-row'>
                  <label>Avaliação:</label>
                  <input type='number' placeholder='0' value={avaliacao} onChange={e => setAvaliacao(e.target.value)} />
                </div>
                <div className='form-row'>
                  <label>Lançamento:</label>
                  <input type='date'  value={lancamento} onChange={e => setLancamento(e.target.value)} />
                </div>
                <br />
                <div className='form-row'>
                  <label></label>
                  <input type='checkbox' value={disponivel} onChange={e => setDisponivel(e.target.value)} /> &nbsp; Disponível
                </div>
              </div>
              <div>
                <div className='form-row' style={{ alignItems: 'flex-start' }}>
                  <label style={{ marginTop: '13px' }}>Sinopse:</label>
                  <textarea placeholder='Sinopse do filme' />
                </div>
                <br />
                <br />
                <div className='form-row'>
                  <label value={sinopse} onChange={e => setSinopse(e.target.value)}></label>
                  <div className='btnSalvar'>
                    <button onClick={Salvarfilme}>SALVAR</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
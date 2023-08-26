//import Menu from '../../components/menu'
//import Cabecalho from '../../components/cabecalho'
import axios from 'axios';
import './index.scss'
import React, { useState } from 'react';


export default function Index() {



   // export default function Inserir() {
 //     const [nome, setNome] = useState('');
   //   const [sinopse, setSinopse] = useState('');
//const [avaliacao, setAvaliacao] = useState('');
   //   const [usuario, setUsuario] = useState('');
     // const [lancamento, setLancamento] = useState('');
    //  const [disponivel, setDisponivel] = useState(false);


   //   async function salvarfilme() {

   //     let filme = {
    //      nome: nome,
     //     sinopse: sinopse,
     //     avaliacao: avaliacao,
      //    disponivel: disponivel,
      //    usuario: usuario,
       //   lancamento: lancamento
     //   }


    //    let url = 'http://localhost:5000/filme';
     //   let resp = await axios.post(url, contato);

   //     alert('Salvouu! :)');
    //  }

   // }


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
                  <label>Nome:</label>
                  <input type='text' placeholder='Nome do filme' />
                </div>
                <div className='form-row'>
                  <label>Avaliação:</label>
                  <input type='number' placeholder='0' />
                </div>
                <div className='form-row'>
                  <label>Lançamento:</label>
                  <input type='date' value='2022-01-01' />
                </div>
                <br />
                <div className='form-row'>
                  <label></label>
                  <input type='checkbox' /> &nbsp; Disponível
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
                  <label></label>
                  <div className='btnSalvar'>
                    <button>SALVAR</button>
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
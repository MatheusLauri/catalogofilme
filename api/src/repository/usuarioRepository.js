import { con } from './connection.js'



export async function login(avaliacao, senha) {
    const comando = 
        `select id_usuario 		id,
                nm_usuario		nome,
                ds_avaliacao		avaliacao
           from tb_usuario
          where ds_avaliacao 		= ?
            and ds_senha		= ? `
    
    const [linhas] = await con.query(comando, [avaliacao, senha])
    return linhas[0];
}
import { Conexao } from "./database/conexao"

async function testarConexao() {
  try {
    const pool = Conexao.obterPool();
    // Executa uma consulta simples para forçar o handshake de rede com o MySQL
    await pool.query('SELECT 1');
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (erro) {
    const e = erro as { code?: string; message?: string };
    console.error('Falha ao conectar com o banco de dados:');
    console.error('Código do erro:', e.code);
    console.error('Mensagem:', e.message);
  }
}

testarConexao();
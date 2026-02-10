import mysql from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } from '$env/static/private';

export const pool = mysql.createPool(
{
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    port: DB_PORT || 3306,
    connectionLimit: 5
});

pool.getConnection().then(connection => 
{
    console.log('✅ Conectado ao banco de dados com sucesso!');
    
    connection.release();
})
.catch(err =>
{
    console.error('❌ Erro ao criar conexão com o banco: ', err.message);
});
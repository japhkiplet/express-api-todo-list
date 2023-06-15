import sql from 'mssql';
import config from '../db/config.js';
import { request } from 'express';

//get todos
export const getTodos = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const results = await pool.request().query('select * from student');
        return res.json(results);
    } catch (error) {
        res.json(error);

    } finally {
        sql.close();
    }
}

//create todos
export const createTodo = async (req, res) => {
    try {
        const { id, name } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .query("insert into student (id,name) values(@id,@name)");
        res.status(200).json({ message: 'todo was created successfully' })
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close();
    }
}

//get a todo
export const getTodo = async (req, res) => {
    try {
        const { id ,name} = req.params;
        let pool = await sql.connect(config.sql)
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .query("select * from student where id =@id")
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close()
    }

}

// update todo
export const updateTodo = async (req, res) => {
    try {
        const { id, name } = req.params;
        let pool = await sql.connect(config.sql)
         await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .query("update student set name='jimie where id=@id")
        res.status(200).json({ message: 'todo was update successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}

//delete todo
export const deleteTodo = async (req, res) => {
    try {
        const { id, name } = req.params;
        let pool = await sql.connect(config.sql)
        await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .query("delete from student where name=@name")
        res.status(200).json({ message: 'todo was deleted successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}
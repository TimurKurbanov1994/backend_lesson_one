const { v4: uuidv4 } = require('uuid');

import { Request, Response } from "express";

let tasks: any[] = [];


export const getTasks = (req: Request, res: Response) => {
    console.log(`Tasks in the database: ${tasks}`);
    res.send(tasks);
}

export const createTask = (req: Request, res: Response) => {
    const task = req.body;

    tasks.push({...task, id: uuidv4()});
    res.send(`Task [${task.name}] added to the database.`);
};

export const getTask = (req: Request, res: Response) => {
    const {id} = req.params
    const foundTask = tasks.find((task) => task.id === id)
    res.send(foundTask)
};

export const deleteTask = (req: Request, res: Response) => {

    const {id} = req.params
    tasks = tasks.filter((task) => task.id !== id);
    console.log(`Task with id ${req.params.id} has been deleted`);
};

export const updateTask =  (req: Request, res: Response) => {
    const {id} = req.params
    const {name, description, data} = req.body
    const task = tasks.find((task) => task.id === id);

    if(name) task.name = name
    if(description) task.description = description
    if(data) task.data = data


    console.log(`Task has been updated to ${req.body.name}.age has been updated to ${req.body.age}`)
};


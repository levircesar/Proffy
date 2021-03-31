import {request, Request , Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem{
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController{
  async index(req: Request , res: Response){
    const filters = req.query;
    if(!filters.subject || !filters.week_day || !filters.time ){
      return res.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinutes(filters.time as string);

    console.log(timeInMinutes);

    return res.send();
  }

  async create(req : Request, res : Response){
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    }= req.body;
  
    //transAction: desfazer todas as operacoes se alguma insercao falhar
    const trx = await db.transaction();
  
    try{
      //.insert() adiciona varias coisas, podemos pegar ele como o primeiro valor
    const insertedUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });
  
    const user_id = insertedUsersIds[0];
  
    const insertedClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id,
    });
  
    const class_id = insertedClassesIds[0];
  
    const classSchedule = schedule.map((scheduleItem: ScheduleItem)=>{
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
      };
    });
  
    await trx('class_schedule').insert(classSchedule);
    
    await trx.commit();
    
    return res.status(201).send(); 
    }catch(err){
      await trx.rollback();
      return res.status(400).json({
        error:'Unexpected error while creating new class'
      })
    }
    
  }
}
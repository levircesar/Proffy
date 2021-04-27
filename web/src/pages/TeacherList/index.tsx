import React, { FormEvent, useEffect, useState } from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import api from '../../services/api';

import './styles.css';

function TeacherList(){

    const [teachers, setTeachers] = useState([]);
    const [all, setAll] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('08:00');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();
        setAll([]);
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        });
        console.log(response.data);
        setTeachers(response.data);
    }

    useEffect(()=>{
        api.get('list').then(res=>{
            const total = res.data;
            
            setAll(total);
            console.log(total);
        })
    } ,[]);
  
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e)=>{ setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Biologia', label: 'Biologia' },
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e)=>{ setWeekDay(e.target.value) }}
                        options={[
                            { value: '0',label: 'Domingo' },
                            { value: '1',label: 'Segunda-feira' },
                            { value: '2',label: 'Terça-feira' },
                            { value: '3',label: 'Quarta-feira' },
                            { value: '4',label: 'Quinta-feira' },
                            { value: '5',label: 'Sexta-feira' },
                            { value: '6',label: 'Sábado' },
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e)=>{ setTime(e.target.value) }}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form> 
            </PageHeader>
            <main>
                {
                    teachers.map((teacher:Teacher)=>{
                        return <TeacherItem key={teacher.id} teacher={teacher}/>
                    }) 
                } 
                {
                    all.map((teacher:Teacher)=>{
                        return <TeacherItem key={teacher.id} teacher={teacher}/>
                    }).slice(0, 10)
                }
                
                           
            </main>
           

        </div>
    )
}

export default TeacherList;
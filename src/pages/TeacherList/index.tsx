import React from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';

import logoImg from '../../assets/images/logo.svg';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList;
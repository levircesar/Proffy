
import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/42752810?v=4" alt="Levir Cesar"/>
                <div>
                    <strong>Levir Cesar</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/><br/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique magnam libero 
                ullam voluptatum maiores accusantium minus voluptas aperiam delect
                us error dolor ab, dolorum eligendi culpa. Quisquam rerum non soluta illum.
            </p>
        
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato. 
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
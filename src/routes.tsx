
import React from 'react';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact  path="/" component={Landing} /> 
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />  
                <Route component={Landing} />  
            </Switch>
        </BrowserRouter> 
    );  
}

export default Routes;
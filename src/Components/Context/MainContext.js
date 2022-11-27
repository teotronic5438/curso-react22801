import React from 'react';

// 1) Primero el valor pro defecto
const defaultState = {
    darkMode: false,
    current_language: 'en',
};

// 2) Funcion que permite crear el contexto, es decir busca la info dentro del localstorage
function getInitialState() {
    const currenState = localStorage.getItem('state');

    // Si la info esta en local storage la pasa, sino existe manda la configuracion por defecto
    return currenState ? JSON.parse(currenState) : defaultState;
}

// 3) Una vez creado el contexto lo envolvemos y lo hacemos disponible con el export y createContext
export const MainContext = React.createContext(getInitialState());

// terminar de armar el contexto para todo - video 43:46
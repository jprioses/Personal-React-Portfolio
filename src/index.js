import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/tablets.css';
import './styles/desktop.css';
import App from './App';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {order: ['cookie', 'htmlTag', 'localStorage','path', 'subdomain'],
                caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/content.json'
    },
    react: {useSuspense: false}

  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);



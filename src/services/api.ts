import { AppError } from '@utils/AppError';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.6:3333'
});

// api.interceptors.request.use(
//   Se sucesso, retorna a configuração da requisição;
//   (config) => {
//     console.log('Requisição: config', config );
//     return config;
//   },
//   (error) => {
//     console.log('Resposta: error', error);
//     return Promise.reject(error);
//   }
// );


// api.interceptors.response.use(
//   Se sucesso, retorna a resposta e faço alguma coisa com ela;
//   (response) => {
//     console.log('Resposta: response', response);
//     return response;
//   },
//   (error) => {
//     Se erro, retorna a resposta e faço alguma coisa com ela;
//     console.log('Resposta: error', error);
//     return Promise.reject(error);
//   }
// );

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Entender o padrão de Erros do backend,
// para depois tratar os erros usando Interceptors

api.interceptors.response.use(response => response, error => {
  // Se dentro tenho um response, e além do response, tenho um data;
  if (error.response && error.response.data) {
    // Passa a erro com o novo padrão de mensagem
    // uso a "classe AppError" para criar um novo erro
    return Promise.reject(new AppError(error.response.data.message));

  } else {
    // Se for um Erro generico
    return Promise.reject(new AppError('Erro no servidor, tente mais tarde.'));
  }
});


export { api };
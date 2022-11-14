import axios from 'axios';

const API= axios.create({baseURL:'http://localhost:3500'});

export const logIn = (formdata)=>API.post('/auth/login',formdata);
export const signUp = (formdata)=>API.post('/auth/register',formdata);


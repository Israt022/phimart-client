import axios from "axios";

export default axios.create({
    baseURL : 'https://phi-mart-django.vercel.app/api/v1',
})
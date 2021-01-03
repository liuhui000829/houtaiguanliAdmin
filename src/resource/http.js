import axios from 'axios';
import { message } from 'antd'

let instance = axios.create();
instance.defaults.timeout = 3000;
instance.defaults.baseURL = "https://www.fastmock.site/mock/f5cf4d5b449bc951d3252dfeba4ecdc2/show"

//添加请求拦截器
instance.interceptors.request.use((config) => {
    //在请求发送之前做什么
    // message.success("666");
   
    return config;
}, (err) => {
    //请求之后做什么
    return Promise.reject(err);
})

//添加请求拦截器
instance.interceptors.response.use((res) => {
    //对相应数据做点什么
    message.success("请求成功");
    return res;
}, (err) => {
    return err;
})

export default function gets(url, flag = false) {
    if (flag) {

    }
    return instance.get(url).then((response) => {
        return response.data
    }).catch((err) => {
        return err
    })
}



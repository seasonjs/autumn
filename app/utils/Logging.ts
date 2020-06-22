import { aspect } from 'egg-aop';
//日志函数
export function Logging(_type: string) {
    return aspect({
        // before method running
        before: (context) => { console.log(context) },
        // after method running
        after: (context) => { console.log(context) },
        // when method throw error
        error: (context) => { console.log(context) },
    })
}
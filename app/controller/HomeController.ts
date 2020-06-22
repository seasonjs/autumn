// import { Controller } from '../utils/Controller';
import { Logging } from '../utils/Logging';
import { Controller } from 'egg';

// @Controller
export default class HomeController extends Controller  {

  @Logging('index')
  public async index() {
    console.log(this.constructor)
    // const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
  }
  
}

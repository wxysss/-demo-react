const Koa = require('koa');
const router = require('koa-router');

// 1. 生成应用及路由器实例
const app = new Koa();
app.use(async (ctx,next)=>{
    console.log('有人请求服务器1了');
    // console.log('请求来自于',ctx.request.host);
    // console.log('请求的地址',ctx.request.url);
    await next();
})
// 核心代码
router.get('/students', async(ctx, next) => {
const students =[
     {id:1,name:'Lili',age:18},
     {id:2,name:'Jack',age:19},
     {id:3,name:'Tony',age:20}
]
  ctx.response.body =students ;
});

// 2. 使用路由器及路由
app.use(router.routes()) // 声明使用路由

// 3. 监听端口
app.listen('3000', (err) => {
    if(!err)  console.log('服务器地址： http://localhost:3000');
})

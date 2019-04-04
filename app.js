const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
// const mongoose = require('mongoose')


app.use(bodyParser());  // 解析request的body

const router = require('koa-router')()

// const db = mongoose.connect("mongodb://localhost/testDB")

// 账户的数据库模型
// var UserSchema = new mongoose.Schema({
//     username:String,
//     password:String,
//     email:String
// });
// var User = mongoose.model('User',UserSchema);

// // 新增数据
// var user = {
//   username: 'ydj',
//   password: '123123',
//   email: ''
// }
// var newUser = new User(user);
// newUser.save();

// router.get('/', async (ctx, next) => {
// 	let val = null
// 	const data = await User.findOne({username: 'ydj'})
// 	console.log('data', data)
// 	const result = {
// 		code:200,
// 		response: data,
// 		ts: 12345
// 	}
// 	ctx.response.body = result
// 	return result
// })

router.get('/getData', async (ctx,next) => {
    // 从上下文的request对象中获取
    let request = ctx.request;
    let req_query = request.query;  // 获取格式化参数
    let req_querystring = request.querystring;  // 获取字符串

    // 从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    let obj = {
        req_query:req_query,
        req_querystring:req_querystring,
        ctx_query:ctx_query,
        ctx_querystring:ctx_querystring
    };
    ctx.response.body = {status:200,msg:'这是get测试的返回数据',data:obj};
});


app.use(router.routes());
app.listen(9000);
console.log('app started at port 9000...1111')
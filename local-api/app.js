const express = require('express')
//크로스 오리진 api요청할때 동일 도메인 청책이 아닐경우에 사용할 미들웨어
const cors = require('cors')
const app = express();
const PORT = 8080;
const { posts } = require('./data.js')

app.use(cors());
app.get('/api/posts', (req,res)=>{
    res.json(posts)
})

app.listen(PORT, ()=> console.log(`server running on ${PORT}`))
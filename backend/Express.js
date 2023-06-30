const express=require('express')
const App=express()
const port=process.env.PORT||8000
const connect=require('./DB/Connection')
const cors=require('cors')
App.use(cors())
App.use(express.urlencoded({ extended: false }));
App.use(express.json());
App.get('/customer1',(req,res)=>{
  
    connect.query("SELECT * FROM customer1",(err,result)=>{
          if(err){
             res.send("error")
          }
          else{
             res.send(result)
          }
    })

 })
 App.get('/customer2',(req,res)=>{
  
    connect.query("SELECT * FROM customer2",(err,result)=>{
          if(err){
             res.send("error")
          }
          else{
             res.send(result)
          }
    })

 })

App.post('/Customer1',(req,res)=>{
   //   console.log(localStorage.getItem('userpassword'))
    const data=req.body
    console.log(data)
    connect.query('INSERT INTO customer1 SET?',data,(err,result)=>{

if(err){
   res.send('err')
}
else{
    res.send({result})
    console.log(data)
}
    })
        
     

})
App.post('/Customer2',(req,res)=>{
  
    const data=req.body
    console.log(data)
    connect.query('INSERT INTO customer2 SET?',data,(err,result)=>{

if(err){
   res.send('err')
}
else{
    res.send({result})
    console.log(data)
}
    })
        
     

})








App.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})




  // const data={ID:1,Date:'3/3/23',Company:'fashion',Owner:'vishal'
    // ,Item:2,Qty:6,Weight:3,Req:"send",TrackingID:22,c:33,BoxCount:88,Specification:
    // "bad",ChecklistQty:"No"}
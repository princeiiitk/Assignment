const mysql=require('mysql')
const connect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"customer"
});
connect.connect((err)=>{
    if(err){
        console.log("error");

    }
    else{
        console.log("connect")
    }
})
module.exports=connect
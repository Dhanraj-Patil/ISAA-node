const { config } = require('dotenv');
const {spawn} = require('child_process')

config()

module.exports=function(req,res){
    category = req.params.link
         
    var python=spawn('python',['./modules/dark_web_crawler/dark_web_crawler/spiders/DRL.py',link])

    python.stdout.on('data',(data)=>{
        var dataArray= new Array()
        data=data.toString()
        var a=''
        for(n in data){
            if(data[n] == '\r'){
                // console.log({'link': a})
                dataArray.push({'link': a})
            }else if(data[n] == '\n'){
                a=''
            }else{
                a=a+data[n]
            }
        }
        console.log(dataArray)
        res.status(200).json(dataArray)

    })

    python.stderr.on('data',(data)=>{
        console.error(data.toString())
    })

    python.on('close',(code)=>{
        console.warn(code)
    })
}


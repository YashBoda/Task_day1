const http=require('http')

const app=http.createServer((req,res)=>{

    if(req.url==='/'){

        res.write("Hello this is home page")
        res.end()
    }

    if(req.url==='/about'){

        res.write("Hello this is about page")
        res.end()
    }

    if(req.url==='/contact'){

        res.write("Contact Us : 123456789")
        res.end()
    }
})

app.listen(3000)
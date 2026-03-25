app.get("/",(req,res)=>{
    return res.json({
        message : "API Running Successfully"
    })
})
app.get("/user",(req,res)=>{
    return res.json({
        message : "Users Fetched  Successfully",
        users :[] 
    })
})


app.get("/data",(req,res)=>{
    const queries = req.query
    console.log(queries);
    res.json({
        message : "quires gathering",
        data : queries
    })
    
})
app.get("/:name",(req,res)=>{
    console.log(req.params);
    return res.json({
        message : "products fetched successfully",
        data : req.params
    })
    
})
app.post("/create-employee",(req,res)=>{
    console.log(req.body);
    return res.json({
        message : "employee data fetched successfully",
        data : req.body
    })
    
})
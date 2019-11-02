const City=require('./cityModel');


getCities= (req,res)=>(City.find({}).then((cities)=>{res.json(cities).status(204)}))
    
getCity= (req,res)=>(City.find({_id:req.params.id}).then((cities)=>{res.json(cities).status(204)}))

module.exports={
    getCities,
    getCity
}
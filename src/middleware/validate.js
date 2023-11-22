


export const validate = (schema)=>{
    return (req,res,next)=>{
        const {error}=schema.validate({...req.body,...req.params,...req.query},{abortEarly:false})
        let errors=[]
        if(error){
            error.details.forEach((elm)=>{
                errors.push({message:elm.message , field:elm.path[0] })
            })
            console.log(error.details)
            res.json(errors)
        }else{
            next()
        }
       
    }
}
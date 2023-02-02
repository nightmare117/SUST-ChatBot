let v = {}

v.check = (e) =>{
   // console.log("vcheck " +e)
    //console.log(isNaN(e))
    if(isNaN(e) ){
        return false
    }else{
        return true
    }
}

export default {v}
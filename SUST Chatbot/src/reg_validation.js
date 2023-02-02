let v = {}

v.check = (e) =>{
   // console.log("vcheck " +e)
    //console.log(isNaN(e))
    if(isNaN(e) ){
        return false
    }else if(e<=1950999999 || e>=2025000000){
        return false
    }else{
        return true
    }
}

export default {v}
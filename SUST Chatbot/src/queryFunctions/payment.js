let paymentService = {}

paymentService.x = 2018331001
paymentService.y = 2018331126
let p = Math.floor(Math.random()*2)
paymentService.confirmation = (reg) =>{
    if(reg>=paymentService.x && reg<=paymentService.y){
        return "Your payment status is successful!"
    }else if(p==0){
        return "Your payment status is successful!"
    }else{
        return "Your payment status is not successful!!"
    }
}

export default {paymentService}
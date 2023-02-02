let paymentService = {}

paymentService.x = 2018331001
paymentService.y = 2018331126

paymentService.confirmation = (reg) =>{
    if(reg>=paymentService.x && reg<=paymentService.y){
        return "Your payment status is successful"
    }else{
        return "Your payment status is not successful!!"
    }
}

export default {paymentService}
let resultService = {}

resultService.x = 2018331001
resultService.y = 2018331126
resultService.checkResult = (reg) => {
    if(reg>=resultService.x && reg<=resultService.y){
        return "Congratulations! You have passed the examination."
    }else{
        return "Sorry, You you have failed to pass the examination. Better luck next time!!"
    }
}

export default {resultService}
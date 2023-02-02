let examCenterSerVice = {}
let x = Math.floor(Math.random()*6)
let center = ["IICT Building","Academic Building A","Acamedic Building B","Academic Building C","Acamedic Building D","Academic Building E"]
examCenterSerVice.getExamCenter = (reg) =>{
    console.log(center[x])
    return center[x]
}

export default {examCenterSerVice}
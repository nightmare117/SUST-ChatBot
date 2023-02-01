<script setup>
    //import cleanData from '../clean-data.js'
    import { onMounted, ref, watch } from 'vue'
    import WatermelonJSON1 from '../assets/lottie/chatBoxAnim.json'
    import msgBox from '../components/MsgBox.vue'
    import axios from 'axios';

    
    const box2ref = ref(null)
    const id1 = ref(0)
    const listItem = ref([{message:'How can I help you!',num: '0'}])

    const dataMine = (reqData) =>{
        axios.get('http://localhost:3100/')
            .then(res => {
                console.log(res.data)
            })
            .catch(e =>{
                console.log(e)
            })
    }

   // console.log(cleanData.clean_data.asdf("who m i!!"))
    // listItem.value.push({
    //     message : 'Send me sust website link',
    //     num : '1',
    // })
    // setInterval(()=>{
    //     var targetDiv = document.querySelector('.box2')
    //     try{
    //         targetDiv.scrollTop = targetDiv.scrollHeight
    //     }catch(e){
    //         console.log(e)
    //     }
    // },1000)

    let anim = ref();
    const msgData = ref(null)
    const SendMsg = () => {
        console.log(msgData.value)
        console.log("wow")
        if( msgData.value != null){
            //console.log('not null value')
            let text = msgData.value
            // console.log(typeof(text))
            listItem.value.push({
                message: text ,
                num: '1',
            })
            //server test
            dataMine()
            msgData.value = null
            listItem.value.push({
                message: "Your query is received!",
                num: '0',
            })
            id1.value = id1.value + 1
            
        }
    }

    const box2Scroll = (e) => {
        console.log('ohhhhhh')
        var targetDiv = document.querySelector('.box2')
        try{
            targetDiv.scrollTop = targetDiv.scrollHeight
            msgData.value = null
        }catch(e){
            console.log(e)
        } 
    }

    watch(id1, () =>{
        console.log('opps')
        setTimeout(()=>{
        var targetDiv = document.querySelector('.box2')
        try{
            targetDiv.scrollTop = targetDiv.scrollHeight
            msgData.value=null
        }catch(e){
            console.log(e)
        }
    },100)
    })
    onMounted(() => {
    // the DOM element will be assigned to the ref after initial render
    anim.value.play()
    id1.value = 0
    })
</script>

<template>
    <div class="chatBoxBody">
        <div class="chatBoxContainer">
            <div class="chatBoxAnim">
                <lottie-animation
                style = "height: calc(100% - 150px); , width: calc(100% -150px) ;;"
                :animation-data="WatermelonJSON1"
                :auto-play="true"
                :loop="true"
                :speed="1"
                ref="anim"
                />
                <!-- <p style="letter-spacing: 5px;font-family: monospace;font-size: 16px;">@sust.edu</p> -->
            </div>
            
            <div class="chatBoxMsg">
                <div class="box1">

                </div>
                <div class="box2">
                    <!-- <li :v-for="item in list">{{item.msg}}</li> -->
                    <!-- <msgBox :msg="list[0].message"/> -->
                    <!-- <msgBox :v-for= "item in listItem"/> -->
                    <div class="msgSlot" v-for="item in listItem">
                        <msgBox :msg="item.message" :flag="item.num" @response="box2Scroll(e)"/>
                    </div>
                </div>
                <div class="box3">
                    <div class="box3container">
                        <input class="box3input" type="text" placeholder="Type Something to send..." v-model="msgData" @keyup.enter="SendMsg" />
                        <img src="../assets/message.png" @click="SendMsg" alt="send_msg"/>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<style>
.msgSlot{
    max-width: 70%;
    padding: 10px;
        margin-right: 3px;
}
.box3container{
    display: flex;
    justify-content: center;
    border-radius: 10px;
    border: none;
    width: 90%;
    margin-top: 6px;
    height: 40px;
    padding: 8px;
    background: white;
    align-items: center;
    /* background: black; */
}
/* .box1{
    width: 100%;
    height: 15%;
   
} */

.box2::-webkit-scrollbar { /* WebKit */
    /* width: 0;
    height: 0; */
    width: 10px;
    height: 10px !important;
    border-radius: 1500px;
}
.box2::-webkit-scrollbar-thumb {
  background: rgba(75, 77, 73, 0.252);
  border-radius: 1500px;
}
.box2{
    /* overflow-y: auto !important; */
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;
    /* max-height: 250px; */
    width: 100%;
    margin-top: 4%;
    height: 78%;
    /* height: 67%; */
    /* height: 250px; */
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    align-items: flex-end;
    /* flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end; */
}
.box3 img:hover{
    margin: 10px;
    height: 35px;
    width: 35px;
    cursor: pointer;
}
.box3 img{
    margin: 10px;
    height: 30px;
    width: 30px;
}
.box3input{
    width: 90%;
    letter-spacing: 1px;
    height: 30px;
    font-family: Arial, Helvetica, sans-serif;
    /* background: red; */
    outline: none;
    resize: none;
    border: none;
    /* margin-bottom: 10px; */
}
.box3{
    width: 100%;
    height: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: white; */
    /* margin: 10px; */
}
.chatBoxAnim{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    /* background: blue; */
}
.chatBoxMsg{
    /* overflow: auto; */
    height: 100%;
    width: 50%;
    /* background: rgba(0, 21, 255, 0.073); */
    background: rgba(113, 14, 14, 0.193);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    /* background: red; */
}
.chatBoxContainer{
    display: flex;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 450px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    background: white;
}
.chatBoxBody{
    min-width: 500px;
    min-height: 450px;
    width: 60%;
    height: calc(100% - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: white; */
    /* box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px; */
}
</style>
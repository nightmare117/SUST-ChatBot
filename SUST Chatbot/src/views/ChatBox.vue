<script setup>
    import { onMounted, ref } from 'vue'
    import WatermelonJSON1 from '../assets/lottie/chatBoxAnim.json'
    import msgBox from '../components/MsgBox.vue'

    let anim = ref();

    onMounted(() => {
    // the DOM element will be assigned to the ref after initial render
    anim.value.play()
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
                    <msgBox/>
                </div>
                <div class="box3">
                    <div class="box3container">
                        <input class="box3input" type="text" placeholder="Type Something to send..."  />
                        <img src="../assets/message.png" alt="send_msg"/>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<style>
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

.box2{
    overflow-y: auto !important;
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
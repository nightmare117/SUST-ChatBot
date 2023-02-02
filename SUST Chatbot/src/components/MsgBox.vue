<script setup>
import { onMounted, ref, watch } from 'vue'
import WatermelonJSON2 from '../assets/lottie/loading.json'
// import {ref} from 'vue'
    const props = defineProps({
        msg: String,
        flag: String,
    })
    const emit = defineEmits(['response'])

    
    const styleM = ref('')
    let anim = ref();
    const animLoading = ref(true)


    const userStyle = {
        background : 'white',
        color: 'black',
        width:'auto',
        marginRight: '35px',
        borderBottomRightRadius: '0px',
        paddingRight: '10px',
        paddingLeft: '13px',
       // width: 'calc(100% - 60px)',
    }

    const style = {
        background : 'white',
        width:'40px',
        // marginRight: '35px',
        // borderBottomRightRadius: '0px',
        // paddingRight: '10px',
        // paddingLeft: '13px',
        // padding:'15px'
    }

    if(props.flag == '1'){
        styleM.value = userStyle 
    }else{

    }
    emit('response', 'hello from child')
    onMounted(() => {
    // the DOM element will be assigned to the ref after initial render
    if(props.flag == '1'){
        animLoading.value = false
    }else{
        styleM.value = style
    }
    anim.value.play()

    setTimeout(()=>{
        animLoading.value = false
        if(props.flag=='0')
        styleM.value= null
    },1100)
    })
</script>

<template>
    <div class="msgbox">
        <div class="msgText" :style="styleM">
            <!-- <p>{{ props.msg }}</p> -->
            <div v-if="animLoading">
                <lottie-animation
                style = "height: 30px; , width: 20px ;"
                :animation-data="WatermelonJSON2"
                :auto-play="true"
                :loop="true"
                :speed="1"
                ref="anim"
                />
            </div>
            <p v-else>{{ props.msg }}</p>
        </div>
        <div v-if="props.flag =='0'" class="msgImg">
            <img src="../assets/robot.png"/>
        </div>
    </div>
</template>

<style>
.msgImg img:hover{
        animation: shake 7.5s;
        animation-iteration-count: infinite;
        cursor: pointer;
    }
    .msgImg{
        width: 60px;
    }
    .msgImg img{
        height: 40px;
        width: 40px;
        margin-left: 12px;
        background: rgb(255, 255, 255);
        /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        border-radius: 1000px;
    }
    .msgText{
        letter-spacing: 1px;
        font-size: 12px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 10px;
        /* font-family: Arial, Helvetica, sans-serif; */
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: right;
        display: flex;
        padding-right: 10px;
        padding-left: 10px;
        width: calc(100% - 60px);
        background: rgba(13, 13, 105, 0.851);
        justify-content: flex-end;
        /* border-bottom-right-radius: 0px; */
    }
    .msgbox{
        /* max-width: 70%; */
        width:100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
        /* background: blue; */
        color: white;
    }
    @keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
<script setup>
import { onMounted, ref } from 'vue'
import WatermelonJSON from '../assets/lottie/navHeader.json'

const sustPageRedirect = () => {
    window.location.href = "https://www.sust.edu/"
}

let anim = ref();

onMounted(() => {
  // the DOM element will be assigned to the ref after initial render
  anim.value.play()
})
</script>

<template>
    <div class="navBody">
        <div class="navAnim">
            <lottie-animation
            style = "height: 90px; , width: 90px;"
            :animation-data="WatermelonJSON"
            :auto-play="true"
            :loop="true"
            :speed="1"
            ref="anim"
            />
        </div>
        <div class="navTitle">
            <h4>
                <span style="color:red">SUST</span>
                <span style="color:rgba(0,0,0,.8);margin-left: 20px;">CHATBOT</span>
            </h4>
        </div>
        <div class="navLogo" @click="sustPageRedirect">
            <img src="../assets/sustLogo.png" alt="sustLogo"/>
        </div>
    </div>
</template>

<style>
.navLogo img:hover{
    height: 73px;
    width: 73px;
}
.navLogo img{
    height: 70px;
    width: 70px;
}
.navLogo{
    padding-right:30px ;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    width: calc(100% - 50% - 120px);
    height: 100%;
    cursor:pointer;
}
.navTitle h4{
    min-width: 400px;
    margin-left: 20px;
    /* font-family: Arial, Helvetica, sans-serif; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 28px;
    letter-spacing: 8px;
    /* font-weight: bold; */
}
.navTitle{
    width: 50%;
}
.navAnim{
    /* margin-left: 15px; */
    width: 110px;
}
.navBody{
    flex: wrap;
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px; */
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
}

@media only screen and (max-width: 600px) {
  .navAnim{
    display: none;
  }
  .navLogo{
    padding-right:10px ;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    width: calc(100% - 50%);
    height: 100%;
    }
}
</style>
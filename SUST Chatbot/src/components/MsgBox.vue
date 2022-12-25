<script setup>
    
</script>

<template>
    <div class="msgbox">
        <div class="msgText">
            <p>how can I help you!!</p>
        </div>
        <div class="msgImg">
            <img src="../assets/robot.png"/>
        </div>
    </div>
</template>

<style>
    .msgImg{
        width: 60px;
    }
    .msgImg img{
        height: 40px;
        width: 40px;
        margin-left: 12px;
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
    }
    .msgbox{
        max-width: 70%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
        margin-right: 12px;
        /* background: blue; */
        color: white;
    }
</style>
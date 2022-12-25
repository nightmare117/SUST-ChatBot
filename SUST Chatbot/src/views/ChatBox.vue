<script setup>

</script>

<template>
    <div class="chatBoxBody">
        <div class="chatBoxContainer">
            <div class="chatBoxAnim">

            </div>
            <div class="chatBoxMsg">

            </div>
        </div>
    </div>
</template>

<style>
.chatBoxAnim{
    height: 100%;
    width: 50%;
    /* background: blue; */
}
.chatBoxMsg{
    height: 100%;
    width: 50%;
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
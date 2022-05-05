<template>
 <section class="flex flex-wrap w-full">
     <div class="m-auto">
         <h1 class="text-2xl my-5">Re-useable Modal</h1>
    <ModalRe v-if="isModal1Open" @close="isModal1Open=false" >
     <template #title>
         Modal 1
     </template>
     <template #body>
         <p>This is the body slot for modal 1 .</p>
        
     </template>
     </ModalRe>
    <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal1Open = true">Modal 1</button>

     <ModalRe v-if="isModal2Open" @close="isModal2Open=false" >
         <template #title>
            Modal 2
        </template>
        <template #body>
         <p>This is the body slot for modal 2.</p>
        
        </template>
     </ModalRe>
    <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal2Open = true"> Modal 2</button>
    </div>
   
 </section>
</template>

<script>
import ModalRe from '../components/ModalRe';
import {ref} from "vue";
export default {
components: {ModalRe},
setup(){
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);
    return {isModal1Open,isModal2Open};
}
}
</script>

<style>

</style>
<template>
<button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">Add User</button>
  <teleport to="body">
      <ModalRe v-if="isModalOpen" @close="isModalOpen = false">
          <template #title>
              Add New User
          </template>
          <template #body>
            <form @submit.prevent="submit">
                <div class="p-2">
                    <label>Name</label>
                    <input v-model="state.form.name"
                    class="w-full p-2 rounded border" placeholder="User Name" />
                </div> 
                    <div  class="p-2">
                       <label>Email</label>
                    <input v-model="state.form.email"
                    class="w-full p-2 rounded border" placeholder="User Email" type="email"/>
                </div> 
                <div  class="p-2">
                         <label>Avatar</label>
                    <input v-model="state.form.avatar"
                    class="w-full p-2 rounded border" placeholder="Avatar Url" type="text"/>
                </div>
                <div  class="p-2">
                    <input class="w-full p-2 rounded border hover:bg-gray-300" 
                     type="submit" value="Create"/>
                </div> 
            </form>
        </template>
      </ModalRe>
  </teleport>
</template>

<script>
import { reactive,ref} from 'vue';
import ModalRe from '../ModalRe';
import axios from '../../plugins/axios';
export default {
    setup(_,{emit}){
     const isModalOpen =ref(false);
      const state = reactive({
         form:{
             name:"",
             email:"",
             avatar:"",
         },
     });
       
   async function submit(){
       const {data} = await axios.post("/users",state.form);
       emit('new-user-added',data);
      
       state.form.email='';
       state.form.name='';
       state.form.avatar='';
       isModalOpen.value = false;

    }

     return {isModalOpen,submit,state};
    },
    components:{ModalRe},
    }
</script>

<style>

</style>
<template>
  <HeaDer />
<h1>Welcome to Add Restaurant page</h1>

  <form action="" class="register">
    <input v-model="restaurant.name"  type="text" placeholder="Enter name" name="name">
    <input v-model="restaurant.address" type="text" placeholder="Enter address" name="address">
    <input v-model="restaurant.contact" type="text" placeholder="Enter contact" name="contact">
    <button type="button" v-on:click="add()">Add New Restaurant</button>
  </form>
</template>

<script>
import HeaDer from './Header.vue'
import axios from 'axios';

export default {
  name: "AddRestaurant",
  data(){
    return{
      restaurant:{
          name:'',
          address:'',
          contact:'',
      }
    }
  },
  methods:{
    async add(){
      const result =await axios.post('http://localhost:3000/restaurant',
      {
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact,
      });
      if(result.status==201){
        this.$router.push({name:"Home"})
      }
    }
  },  
  components:{
    HeaDer,
    
},
  mounted(){
    let user =  localStorage.getItem('user-info');
    if(!user){
      this.$router.push({name:'SignUp'})
    }

  }
}
</script>

<style>

</style>

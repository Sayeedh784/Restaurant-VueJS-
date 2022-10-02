<template>
  <HeaDer />
<h1>Welcome to Update Restaurant page</h1>

<form action="" class="register">
    <input v-model="restaurant.name"  type="text" placeholder="Enter name" name="name">
    <input v-model="restaurant.address" type="text" placeholder="Enter address" name="address">
    <input v-model="restaurant.contact" type="text" placeholder="Enter contact" name="contact">
    <button type="button" v-on:click="update()">Update Restaurant Details</button>
  </form>
</template>

<script>
import HeaDer from './Header.vue'
import axios from 'axios';

export default {
  name: "UpdateRestaurant",
  data(){
    return{
      restaurant:{
          name:'',
          address:'',
          contact:'',
      }
    }
  },
  components:{
    HeaDer,
    
},
methods:{
  async update(){
    const result =await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id,
      {
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact,
      });
      if(result.status==200){
        this.$router.push({name:"Home"})
      }
  }
},
  async mounted(){
    let user =  localStorage.getItem('user-info');
    if(!user){
      this.$router.push({name:'SignUp'})
    }
    const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
    console.warn(result)
    this.restaurant = result.data

  },
}
</script>

<style>

</style>

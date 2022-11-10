<template>
{{hum}} test
  </template>
  
  <script>
  //initialization
 import { getDatabase, ref, set,  onValue } from "firebase/database";
    const db = getDatabase();
    onValue(ref(db, 'hum'), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        const hum = data;
        return hum;
    });
    
    export default {

        };
  </script>
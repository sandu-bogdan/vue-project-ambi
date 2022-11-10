<template>
Umiditate: {{hum}}
</template>
  
  <script>
 import { getDatabase, ref, set,  onValue } from "firebase/database";
 export default {
    data () {
        return {
            hum: null,
        }
    },
    created (){
        const db = getDatabase();
        onValue(ref(db, 'hum'), (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            const hum = data;
            this.hum = hum;
        });
    }
};
</script>
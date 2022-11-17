<template>
<body>
    <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2"><img src="../assets/img/bg_1.jpg"></div>
        <div class="contents order-2 order-md-1">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-7">
                        <h3>Autenficare </h3>
                        <p class="mb-4">Autenficare in centrul de monitorizare ambientala.</p>
                        <p class="user">
                            <div class="form-group first">
                                <label for="username">Utilizator</label>
                                <input type="text" placeholder="Email" class="form-control" v-model="email"/>
                            </div>
                            <div class="form-group last mb-3">
                                <label for="password">Parola</label>
                                <input type="password" placeholder="Password" class="form-control" v-model="password"/>
                            </div>
                            <div class="alert alert-danger" role="alert" v-if="errMsg">{{errMsg}}</div>
                            <button class="btn btn-block btn-primary" @click="register">Submit</button>
                        </p>

                    </div>
                </div>
                </div>
        </div>
        </div>

</body>

    </template>
    
<style>
bg order-1 order-md-2 {
    background-image: url('~@/assets/img/bg_1.jpg');
}
</style>
    <script setup>
    import { ref } from "vue";
    import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
    import { useRouter } from 'vue-router'
    const router = useRouter();
    
    const email = ref("");
    const password = ref("");
    const errMsg = ref("");
    const register = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Login Success!");
            console.log(auth.currentUser);
            router.push('/dashboard')
        })
        .catch((error) => {
            console.log(error.code);
            switch(error.code){
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "User not found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Wrong password";
                    break;
            }
        })
    };
    const signInWithGoogle = () => {
      console.log('sign in with google');
    };
    </script>
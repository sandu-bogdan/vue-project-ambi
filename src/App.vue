<template>
    <body id="page-top" class="sidebar-toggled">
      <div id="wrapper">
        <ul :class="isOpen ? 'toggled' : ''" class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
            <div class="sidebar-brand-icon rotate-n-15">
              <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">AMBI <sup>PI NEW</sup></div>
          </a>
          <hr class="sidebar-divider my-0">
          <li class="nav-item active">
          <RouterLink class="nav-link" to="/"><i class="fas fa-fw fa-tachometer-alt"></i>
              Prima pagina</RouterLink>
            </li>
          <hr class="sidebar-divider">
          
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about"><i class="fas fa-history fa-fw"></i>
              About</RouterLink>
            </li>

            <li class="nav-item">
            <RouterLink class="nav-link" to="/dashboard"><i class="fas fa-history fa-fw"></i>
              Dashboard</RouterLink>
            </li>

            <li v-if="!isLoggedIn" class="nav-item">
            <RouterLink class="nav-link" to="/sign-in"><i class="fas fa-history fa-fw"></i>
              Auth</RouterLink>
            </li>

            <li v-if="isLoggedIn" class="nav-item">
            <a @click="handleSignOut" class="nav-link" to="/sign-in"><i class="fas fa-history fa-fw"></i>
              SignOut</a>
            </li>
          <hr class="sidebar-divider d-none d-md-block">
            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle" @click="openMenu"></button>
            </div>
        </ul>
        <!-- End of Sidebar -->


 <!-- Content Wrapper -->
 <div id="content-wrapper" class="d-flex flex-column">
   <!-- Main Content -->
   <div id="content">
            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <!-- Sidebar Toggle (Topbar) -->
                <button @click="openMenu" id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>
                <!-- Topbar Search -->
                <i class="fas fa-clock fa-fw" style="margin:1%;"></i>
                <div class="topbar-divider d-none d-sm-block"></div>
            <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">
                <!-- Nav Item - User Information -->
                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                        <img class="img-profile rounded-circle" src="~@/assets/img/undraw_profile.svg">
                    </a>
                    <!-- Dropdown - User Information -->
                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="logout.php">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                        <a class="dropdown-item" href="change-password.php">
                            <i class="fas fa-user-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Schimba parola 
                        </a>
                    </div>
                </li>
            </ul>
          </nav>
<!-- Begin Page Content -->

<RouterView/>
</div>
</div>
</div>

</body>



<RouterLink to="/sign-in">Autentificare</RouterLink>
</template>

<script setup>


import { onMounted, ref} from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from './router';
const isLoggedIn = ref(false);


let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
signOut(auth).then(() => {
  router.push("/");
  console.log('Sign out success');
}).catch((error) => {
  console.log(error);
});
};

let isOpen = ref(false)

const openMenu = () => {
  isOpen.value = !isOpen.value
  console.log(isOpen.value)
}

</script>
<style scoped>

</style>

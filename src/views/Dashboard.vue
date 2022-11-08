<template v-if="isLoggedIn">
<div class="container-fluid">
   <div class="card shadow mb-4">
    <div class="card-body">
        <span class="h3 mb-0 text-gray-800">
        Bine ai venit, Bogdan</span><br> 
        Ultima actualizare:&nbsp; | Locatie: 
    </div>
    <img src="~@/assets/img/home.svg" height="100%;" />
</div>

<div class="row">
    <div class="col-xl-3 col-md-6 mb-4">
     <div class="card border-left-danger shadow h-100 py-2">
      <div class="card-body">
       <div class="row no-gutters align-items-center">
        <div class="col mr-2">
         <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
          <span class="blink"></span> Temperatura
         </div>
         <div class="h5 mb-0 font-weight-bold text-gray-800">
            <span id="load_updates"></span>&#176;C
         </div>
         <span style="font-size:80%">Temperatura ambientala curenta</span>
        </div>
        <div class="col-auto">
         <i class="fas fa-temperature-high fa-2x text-gray-300"></i>
        </div>
       </div>
      </div>
     </div>
    </div>


    <div class="col-xl-3 col-md-6 mb-4">
     <div class="card border-left-danger shadow h-100 py-2">
      <div class="card-body">
       <div class="row no-gutters align-items-center">
        <div class="col mr-2">
         <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
          <span class="blink"></span> Temperatura exterioara
         </div>
         <div class="h5 mb-0 font-weight-bold text-gray-800">
            <span id="load_temp_ext"></span>&#176;C
         </div>
         <span style="font-size:80%">Temperatura exterioara curenta</span>
        </div>
        <div class="col-auto">
         <i class="fas fa-temperature-high fa-2x text-gray-300"></i>
        </div>
       </div>
      </div>
     </div>
    </div>

    <div class="col-xl-3 col-md-6 mb-4">
     <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
       <div class="row no-gutters align-items-center">
        <div class="col mr-2">
         <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
          <span class="blink"></span> Umiditate
         </div>
         <div class="h5 mb-0 font-weight-bold text-gray-800">
         <span id="load_hum"></span>%
         </div>
         <span style="font-size:80%">Detectie umiditate ambientala curenta</span>
        </div>
        <div class="col-auto">
         <i class="fa fa-circle fa-2x text-gray-300"></i>
        </div>
       </div>
      </div>
     </div>
    </div>

    <div class="col-xl-3 col-md-6 mb-4">
     <div class="card border-left-info shadow h-100 py-2">
      <div class="card-body">
       <div class="row no-gutters align-items-center">
        <div class="col mr-2">
         <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
          <span class="blink"></span> Detectie lumina
         </div>
         <div class="row no-gutters align-items-center">
          <div class="col-auto">
           <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
           <span id="load_light"></span>
           </div>
           <span style="font-size:80%">Detectie lumina ambientala curenta</span>
          </div>
         </div>
        </div>
        <div class="col-auto">
         <i class="fas fa-lightbulb fa-2x text-gray-300"></i>
       </div>
      </div>
     </div>
    </div>
    </div>


</div>
</div>

    
</template>
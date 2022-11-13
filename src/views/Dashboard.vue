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
            <span>{{temp}}</span>&#176;C
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
            <span>{{tempExt}}</span>&#176;C
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
         <span>{{hum}}</span>%
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

    <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
    
</div>
</div>

</template>

<script>

import { getDatabase, ref, set,  onValue, limitToLast, get, query} from "firebase/database";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

let testTemp = [];
let timeValue = [];
let promise = new Promise(function (resolve, reject){
  setTimeout(function (){
    resolve('Promise resolved')}, 2000);
  });
  
  async function viTemp(){
    const db = getDatabase();
    let limitEntries = 50;
    get(query(ref(db, '/sensor/Temperature'), limitToLast(limitEntries))).then((snapshot)=> {
      if(snapshot){
        let data = snapshot.val();
        for (var [, array] of Object.entries(data)) {
          for(let [type, value] of Object.entries(array)){
            if(type=="temp"){
              testTemp.push(value);
            }
            if(type=="time"){
              timeValue.push(value);
            }
          }
        }
      }
    })
    let result = await promise; 
    console.log(result);
    return {timeValue, testTemp};
  };


 export default {
    name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 1000
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
},
    data () {
        return {
            hum: null,
            viewTemp: [1],
            temp: null,
            tempExt: null,
            historyTemp: null,
            //chartData:{ labels: [ 'January', 'February', 'March', "2"], datasets: [ { data: viTemp().then(result=>{this.chartData.datasets[0].data = result.testTemp; console.log(result.testTemp);}) } ] },
            //chartData:{ labels: [viTemp().then(result=>{this.chartData.labels = result.timeValue; console.log(result.timeValue)})], datasets: [ { data: viTemp().then(result=>{this.chartData.datasets[0].data = result.testTemp; console.log(result.testTemp);}) } ] },
            chartData:{ labels: [viTemp().then(result=>{this.chartData.labels = result.timeValue; this.chartData.datasets[0].data = result.testTemp; console.log(result.timeValue); console.log(result.testTemp)})], datasets: [ { } ] },

            //chartData:{ labels: viTemp().then(time=>{this.labels= time.timeValue}), datasets: [ { data: viTemp().then(dataTemp=>{this.chartData.datasets[0].data = dataTemp.testTemp; console.log(dataTemp.testTemp);}) } ] },


            //chartData: viTemp().then(dataTemp=>{this.chartData.datasets[0].labels = dataTemp.timeValue; this.chartData.datasets[0].data = dataTemp.testTemp, console.log(dataTemp);}),
            chartOptions: {
              responsive: true
            },
          }
        },
        
        created (){
      
      const db = getDatabase();
        onValue(ref(db, 'hum'), (snapshot) => {
            const data = snapshot.val();
            console.log(Number(data).toFixed(2));
            const hum = data;
            this.hum = Number(hum).toFixed(2);
        });

        onValue(ref(db, 'temp'), (snapshot) => {
            const data = snapshot.val();
            console.log(Number(data).toFixed(2));
            const temp = data;
            this.temp = Number(temp).toFixed(2);
        });

        onValue(ref(db, 'temp-ext'), (snapshot) => {
            const data = snapshot.val();
            console.log(Number(data).toFixed(2));
            const tempExt = data;
            this.tempExt = Number(tempExt).toFixed(2);
        });

        onValue(query(ref(db, '/sensor/Temperature'), limitToLast(5)), (snapshot) => {
            const data = snapshot.val();
            for (const [, array] of Object.entries(data)) {
                for(const [type, value] of Object.entries(array)){
                    if(type=="temp"){
                    //console.log(value);
                }
                    if(type=="time"){
                    //console.log(value);
                }
                }
            }
            //console.log(data);
        });

        get(query(ref(db, '/sensor/Temperature'), limitToLast(1))).then((snapshot)=> {
            const data = snapshot.val();
            //console.log(data);
        });

    }
};</script>
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
  </div>
    <div class="row">
    <div class="col-lg-6 mb-4">
     <div class="card shadow mb-4">
      <div class="card-header py-3">
       <h6 class="m-0 font-weight-bold text-primary">
        Grafic temperatura
       </h6>
      </div>
      <div class="card-body">
       <div id="chart-container">
        <p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
        <Bar
    :chart-options="chartOptionsTemp"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"/>
       </div>
      </div>
     </div>
    </div>

    <div class="col-lg-6 mb-4">
     <div class="card shadow mb-4">
      <div class="card-header py-3">
       <h6 class="m-0 font-weight-bold text-primary">
        Grafic temperatura exterioara
       </h6>
      </div>
      <div class="card-body">
       <div id="chart-container-hum">
        
     
        <Bar
    :chart-options="chartOptions"
    :chart-data="chartDataTempExt"
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
     </div>
    </div>
 
  

    <div class="col-lg-6 mb-4">
     <div class="card shadow mb-4">
      <div class="card-header py-3">
       <h6 class="m-0 font-weight-bold text-primary">
        Grafic umiditate
       </h6>
      </div>
      <div class="card-body">
       <div id="chart-container-light">
        <Bar
    :chart-options="chartOptions"
    :chart-data="chartDataTempHum"
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
     </div>
    </div>

  


    <div class="col-lg-6 mb-4">
     <div class="card shadow mb-4">
      <div class="card-header py-3">
       <h6 class="m-0 font-weight-bold text-primary">
        Grafic umiditate
       </h6>
      </div>
      <div class="card-body">
       <div id="chart-container-light">
        <Bar
    :chart-options="chartOptions"
    :chart-data="chartDataTest"
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
     </div>
    </div>

  
    



</div>
</div>

<TestChart />


</template>

<script>

import { getDatabase, ref, set,  onValue, limitToLast, get, query} from "firebase/database";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


let testTemp = [];
let timeValue = [];
var load = false;
var timer;
let timeTemp = [];
let valueTemp = [];
let timeTempExt = [];
let valueTempExt = [];
let timeHum = [];
let valueHum = [];

let timeTest = [];
let valueTest = [];

clearTimeout();


let promises = new Promise(resolve => {
    if (document.readyState !== 'loading') {
      setTimeout(function (){
        console.log('resolved');
        resolve('Promise resolved');
        return;}, 2000)
    }
    
    window.addEventListener('click', () => clearTimeout(timer));
    document.addEventListener("DOMContentLoaded", () => clearTimeout(timer));
});

let promise = new Promise(function (resolve, reject){
  setTimeout(function (){
    resolve('Promise resolved')}, 2000);
  });
  


    async function returnChartTemp(limitEntries){
      const db = getDatabase();
      if(load != true){
        get(query(ref(db,'/sensor/Temperature'), limitToLast(limitEntries))).then((snapshot)=>{
          if(snapshot){
            load = true;
            let data = snapshot.val();
            for(var[, array] of Object.entries(data)){
              for(var [type, value] of Object.entries(array)){
                if(type=='temp'){
                  valueTemp.push(value);
                }
                if(type=='time'){
                  timeTemp.push(value);
                }
              }
            }
          }
        })}
        await promises;
        return {timeTemp, valueTemp};
      }


  async function returnChartTempExt(limitEntries){
      const db = getDatabase();
      if(load != true){
        get(query(ref(db,'/sensor/Temperature-Ext'), limitToLast(limitEntries))).then((snapshot)=>{
          if(snapshot){
            load = true;
            let data = snapshot.val();
            for(var[, array] of Object.entries(data)){
              for(var [type, value] of Object.entries(array)){
                if(type=='temp'){
                  valueTempExt.push(value);
                }
                if(type=='time'){
                  timeTempExt.push(value);
                }
              }
            }
          }
        })}
        await promises;
        return {timeTempExt, valueTempExt};
      }



  async function returnChartHum(limitEntries){
      const db = getDatabase();
      if(load != true){
        get(query(ref(db,'/sensor/Humidity'), limitToLast(limitEntries))).then((snapshot)=>{
          if(snapshot){
            load = true;
            let data = snapshot.val();
            for(var[, array] of Object.entries(data)){
              for(var [type, value] of Object.entries(array)){
                if(type=='hum'){
                  valueHum.push(value);
                }
                if(type=='time'){
                  timeHum.push(value);
                }
              }
            }
          }
        })}
        await promises;
        return {timeHum, valueHum};
      }


      async function returnChartTest(limitEntries){
      const db = getDatabase();
     
        get(query(ref(db,'/sensor/Humidity'), limitToLast(limitEntries))).then((snapshot)=>{
          if(snapshot){
           
            let data = snapshot.val();
            for(var[, array] of Object.entries(data)){
              for(var [type, value] of Object.entries(array)){
                if(type=='hum'){
                  valueTest.push(value);
                }
                if(type=='time'){
                  timeTest.push(value);
                }
              }
            }
          }
        })
        await promises;
        return {timeTest, valueTest};
      }

      let labelss = [1];
      let datas = [1];
      
      returnChartTest(10).then(result=>{labelss = result.timeTest; datas = result.valueTest; console.log(result.timeTest); console.log(result.valueTest)})
      

  async function returnChartData(limitEntries, path, typeSensor){
    const db = getDatabase();
    if(load != true){
    get(query(ref(db,path), limitToLast(limitEntries))).then((snapshot)=>{
      if(snapshot){
        load = true;
        let data = snapshot.val();
        for(var[, array] of Object.entries(data)){
          for(var [type, value] of Object.entries(array)){
            if(type==typeSensor){
              valueSensor.push(value);
            }
            if(type=='time'){
              timeSensor.push(value);
            }
          }
        }
      }
    })}
    await promises;
    return {timeSensor, valueSensor};
  }

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}



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
          message: '10',
            hum: null,
            viewTemp: [1],
            temp: null,
            tempExt: null,
            historyTemp: null,
            chartData:{ 
              labels: [returnChartTemp(10).then( result =>{this.chartData.labels = result.timeTemp; this.chartData.datasets[0].data = result.valueTemp; console.log(result.timeTemp); console.log(result.valueTemp)})], 
              datasets: [ {
                label: 'Temperature',
                strokeColor : "#ff6c23",
                    pointColor : "#fff",
                    pointStrokeColor : "#ff6c23",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#ff6c23",
            
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(250,51,50,1)');   
              gradient.addColorStop(1, 'rgba(250,51,50,0)');

              return gradient;
            },
          },] },
            chartDataTempExt:{ labels: [returnChartTempExt(10).then(result=>{this.chartDataTempExt.labels = result.timeTempExt; this.chartDataTempExt.datasets[0].data = result.valueTempExt; console.log(result.timeTempExt); console.log(result.valueTempExt)})], datasets: [ { } ] },
            chartDataTempHum:{ labels: [returnChartHum(10).then(result=>{this.chartDataTempHum.labels = result.timeHum; this.chartDataTempHum.datasets[0].data = result.valueHum; console.log(result.timeHum); console.log(result.valueHum)})], datasets: [ { } ] },
            chartDataTest:{ labels: labelss,
            
            datasets:[{data: datas,
              
              strokeColor : "#ff6c23",
                    pointColor : "#fff",
                    pointStrokeColor : "#ff6c23",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#ff6c23",
            
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(250,174,50,1)');   
              gradient.addColorStop(1, 'rgba(250,174,50,0)');

              return gradient;
            },
          
          }]},
           
            chartOptionsTemp: {
              scaleLabel : "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>",
              animations:{
                        animation: false
                    },
              responsive: true,
              scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      min: -50,
                      max: 100
                    }
                  }]
                }
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
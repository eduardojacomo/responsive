<template>
    <div>
         <canvas id="myChart1"></canvas>  
         
    </div> 
 </template>
 
 <script>
 import Chart from 'chart.js/auto';
 
 export default {
     name: "GraficoBarra",
     // data(){
     //     return{
     //         idademin:null,
     //         idademax: null,
             
     //     }
     // },
     mounted(){
         //const labels = ['18 - 25', '26 - 30', '30-35', '36 -40', '41-50', '51-60', 'Acima de 60' ]
         const data = {
            labels: [
            '18 a 25 anos', 
            '26 a 30 anos', 
            '30 a 35 anos', 
            '36 a 40 anos', 
            '41 a 50 anos', 
            '51 a 60 anos', 
            'Acima de 60'
            ],//labels,
            datasets: [{
                label: 'Pacientes por faixa de idade',
                data: [1, 2, 5, 4, 2, 1, 0],
              
                borderWidth: 1
            }]
         };
         
         
         const config ={
            type: 'bar',
            data: data,
            // options: {
            //     scales: {
            //     y: {
            //         beginAtZero: true
            //     }
            //     }
            // },
            options: {
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 10,
                stacked: true
            }
        }
    },
         }
 
         const ctx = document.getElementById('myChart1');
         new Chart(ctx, config);
         myChart1;
 }}
 </script>
 
 <style scoped>
    
 </style>
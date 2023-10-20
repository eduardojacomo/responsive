<template>
    <div>
         <canvas id="myChart2"></canvas>  
         
    </div> 
 </template>
 
 <script>
 import Chart from 'chart.js/auto';
 
 export default {
     name: "GraficoDoughnut",
     // data(){
     //     return{
     //         idademin:null,
     //         idademax: null,
             
     //     }
     // },
     mounted(){
        
         const data = {
             //backgroundColor:['#FF0000','#0000FF','#FFFF00', '#008000', '#A020F0','#FFA500' ], 
             labels: [
                 'Ansiedade',
                 'Depressão',
                 'Auto Estima',
                 'Panico',
                 'Bornout'//,
                 // 'Yellow'
             ],
             datasets: [
             {
                 label: 'Demanda',
                 data: [6,1,3,2,3],
                 
                 backgroundColor: [
                     'rgba(255, 99, 132,1)',
                     'rgb(54, 162, 235.1)',
                     'rgb(255, 205, 86,1)',
                     'rgb(255, 159, 64)',
                     'rgb(153, 102, 255)',
                 ],
                 hoverOffset: 4
             }
             ]
         
         };
         
         
         const config ={
             type: 'doughnut',
             data: data,
             options: {
                 responsive: true,
                 plugins: {
                 legend: {
                     position: 'top',
                 },
                 title: {
                     display: true,
                     text: 'Demandas'
                 }
                 }
             },
             
         }
 
         
         const ctx = document.getElementById('myChart2');
         new Chart(ctx, config);
         myChart2;
 }}
 </script>
 
 <style scoped>
 
 </style>
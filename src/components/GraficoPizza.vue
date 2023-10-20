<template>
   <div>
        <canvas id="myChart"></canvas>  
        
   </div> 
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    name: "GraficoPizza",
    // data(){
    //     return{
    //         idademin:null,
    //         idademax: null,
            
    //     }
    // },
    mounted(){
        const DATA_COUNT = 5;
        const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
        const data = {
            //backgroundColor:['#FF0000','#0000FF','#FFFF00', '#008000', '#A020F0','#FFA500' ], 
            labels: [
                'Feminino',
                'Masculino'//,
                // 'Yellow'
            ],
            datasets: [
            {
                label: 'Sexo Pacientes',
                data: [9,6],
                
                backgroundColor: [
                    'rgba(255, 99, 132,1)',
                    'rgb(54, 162, 235.1)'//,
                    // 'rgb(255, 205, 86,1)'
                ]
                
            }
            ]
        
        };
        
        
        const config ={
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Perfil dos Pacientes'
                }
                }
            },
            
        }

        
        const ctx = document.getElementById('myChart');
        new Chart(ctx, config);
        myChart;
}}
</script>

<style scoped>

</style>
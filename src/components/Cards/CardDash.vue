<template>
    <div class="card__texto">
        <h3 class="titulo__card"> {{indice}}</h3>
        <h4> {{ texto }}</h4>
    </div>
    <div class="card__icone">
        <font-awesome-icon :icon="icone"/>
        <!-- {{ icone }} -->
    </div>
</template>

<script>
export default { 
    props:{
      indice: Number,
      texto: String,
      icone:String
    }
    
}
</script>

<style scoped>
    .card__texto{
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
    }

    .card__icone{
      font-size: 42px;
    }

    .titulo__card{
      font-size: 28px;
      font-weight: 700;
    }
</style>
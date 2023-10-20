<template>
    <div class="card__texto">
        <h3 class="titulo__card"> 8</h3>
        <p> dnhikhdfifdh</p>
    </div>
    <div class="card__icone">
        <font-awesome-icon icon="fa-solid fa-inbox"/>
    </div>
</template>

<script>
export default {
    // props:'indice', 'texto':string, 'icone':string,
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
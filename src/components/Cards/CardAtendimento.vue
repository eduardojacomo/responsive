<template>
     <div class="card__atendimento">
            <div class="icone__card-atendimento"><font-awesome-icon icon="fa-solid fa-circle-check"/></div>
            <div class="text__card-atendimento"><strong class="nome-paciente__card-atendimento">Paciente Rafael</strong> Quarta-Feira - 05/10/2023 15:00</div>
          </div>
</template>

<script>
export default {
    name:"CardAtendimento"
}
</script>

<style scoped>
    .card__atendimento{
      background-color: var(--color-background-mute);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      flex-basis: 100px 90px;
    }

    .icone__card-atendimento{
      display: flex;
      text-align: center;
      align-items: center;
      /* margin: 1rem; */
      background-color: var(--color-detail2-blue);
      color: var(--color-background-mute);
      
      padding: 1px 10px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      font-size: 32px;
    }

    .text__card-atendimento{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0 1rem;
      padding: 3px 1px;
    }

    .nome-paciente__card-atendimento{
      font-size: 18px;
      font-weight: 500;
    }

</style>
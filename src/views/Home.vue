<script>
import GraficoPizza from '../components/GraficoPizza.vue';
import GraficoBarra from '../components/GraficoBarra.vue';
import GraficoDoughnut from '../components/GraficoDoughnut.vue';
import CardAtendimento from '../components/Cards/CardAtendimento.vue';
import CardDash from '../components/Cards/CardDash.vue';
export default {

  name:"Home",
  components:{
    GraficoPizza,
    GraficoBarra,
    GraficoDoughnut,
    CardAtendimento,
    CardDash
  }
}
</script>

<template>
  <div class="main__container">
    <div class="dash__container">

        <div class="titulo__container">
          <h2>Olá, Renata</h2>
          <p class="texto__boas-vindas">Que bom te ver por aqui! Temos bastante trabalho hoje!!</p>
        </div>

      <div class="cards__container">
        <div class="cards__container-items">
           <CardDash :indice="3" :texto="'Pacientes em atraso'" :icone="'fa-solid fa-coins'" /> 
        </div>

        <div class="cards__container-items">
          <CardDash :indice="2" :texto="'Atendimentos confirmados'" :icone="'fa-solid fa-comments'" />             
        </div>

        <div class="cards__container-items">
          <CardDash :indice="2" :texto="'Tarefas a serem realizadas'" :icone="'fa-solid fa-list-check'" />
        </div>

        <div class="cards__container-items">
            <CardDash :indice="10" :texto="'Novo nome a ser declarado'" :icone="'fa-solid fa-inbox'" />
        </div>

      </div>
      <div class="atendimentos__container">
        <div class="atendimento__atual">
          
          <div class="texto__atendimento-atual">
            <h2>Próximo Atendimento</h2>
            <div class="proximo-atendimento__paciente">
              <img src="../assets/paciente1.png" class="avatar__paciente">
              <ul class="dados__paciente">
                <li>
                  <h3 class="nome-paciente__atendimento-atual"> Maria Silva</h3>
                </li>
                <li>
                  <h3>35 anos</h3>
                </li>
              </ul>
            </div>
           <div class="atendimento__dados">
              <div class="horario-atendimento">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <h3> 12:00</h3>
              </div>
              <h3>Presencial</h3>

            </div>


          </div>
          <div class="inf__atendimento">
             <h4>Tarefa de casa:</h4>
             <ul>
               <li><h4 class="tarefa__atendimento">Anotar os pensamentos sabotantes.</h4></li>
               <li><h4 class="tarefa__atendimento">Levantar as evidencias sobre sua produtividade. Organizar agenda para melhorar a produtividade</h4></li>
             </ul>
           </div>
        </div>
        <div class="atendimentos__proximo">
          
          <CardAtendimento class="cardatendimento" />
      
          <CardAtendimento class="cardatendimento"/>
          
          <CardAtendimento class="cardatendimento" />
        

        </div>
      </div>
      <div class="grafico__pac">
        <div class="grafico_item">
          <GraficoPizza class="grafico_1"/>
          <GraficoDoughnut class="grafico_1" />
        </div>
        <div class="grafico_item1"><GraficoBarra class="grafico_2"/></div>
      </div>
    </div>

  </div>

</template>

<style scoped>
   .main__container{
        display: flex;
        width: auto;
        justify-content:space-between;
        padding: 35px 1rem 1rem 155px ;
        height:100%;
    }

    .titulo__container{
    padding: 2px 3rem;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    }

    .texto__boas-vindas{
      font-size: 14px;
      font-weight: 400;
      display: flex;
      flex-wrap: wrap;
    }

    .dash__container{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }

    .cards__container{
      display: flex;
      justify-content:space-between;
      flex-wrap: wrap;
      padding: 1rem 0rem .5rem 3rem;
      gap:.5rem;
    }

    .cards__container-items{
     
      padding: 0 1rem;
      background-color: var(--color-background-soft);
      border-radius: 8px;
      border: 1px solid var(--color-border);
      justify-content:center;
      display: flex;
      flex-direction: row;
       flex-grow: 1;
      flex-basis: 140px;

    }
    .grafico__pac{
      display:flex;
      padding: 2px 0rem 0 3rem;
      width: 100%;
      flex-wrap: wrap;
      flex-grow: 1;
      gap: 1rem;
      
    }

    .grafico_1{
      display: flex;
      width: 100%;
      height: 80%;
      flex-basis: 350px;
      flex-grow: 1;
      border-radius: 8px;
      background-color: var(--color-background-soft);
      border: 1px solid var(--color-border);
      padding: 0 .5rem 0 0 ;
    }
    .grafico_2{
      display: flex;
      width: 96%;
      height: 50%;
      flex-basis: 380px;
      flex-grow: 1;
      border-radius: 8px;
      background-color: var(--color-background-soft);
      border: 1px solid var(--color-border);
    }
    .card__texto{
      display: flex;
      flex-direction: column;
      margin-right: 1rem;

    }
    .inf__atendimento{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 200px;
      justify-content: center;
      padding: 1rem;
    }
    .atendimentos__container{
      display: flex;
      flex-direction: row;
      padding: 0.5rem 0rem 1rem 3rem;
      align-content: space-between;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;

    }

    .atendimento__atual{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      flex-grow: 10;
      flex-basis: 430px;
      width: 100%;
      max-width: 650px;
      background-color: var(--color-background-soft);
      /* border: 1px solid var(--tema1-white-soft); */
      border-radius: 8px;
      border: 1px solid var(--color-border);
      margin: 1rem 0;
    }
    .atendimento__dados{
      display: flex;
      flex-wrap: wrap;
      margin: 0 0.5rem 2rem 0.5rem;
      text-align: center;
      gap: 1rem;
      background-color: var(--color-background-mute);
    }

    .horario-atendimento{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 0 2.5rem;
      align-items: center;
      border-right: 1px solid var(--tema1-white-soft);
    }
    .texto__atendimento-atual{
      display: flex;
      flex-direction: column;
      padding: 1rem 1rem;
      flex-wrap: wrap;
      flex-grow: 1;
      flex-basis: 250px;
    }

    .tarefa__atendimento{
      display: flex;
      flex-wrap: wrap;
    }
    .dados__paciente{
      list-style-type: none;

    }
    .proximo-atendimento__paciente{
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap:wrap;
    }
    .avatar__paciente{
        margin: 0.5rem 1rem 0.5rem 0;
        vertical-align: middle;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        text-align: center;
    }

    .atendimentos__proximo{
      display:flex;
      flex-wrap: wrap;
      align-items: center;
      flex-flow: 1 0 350;
      flex-direction: column;
      
    }

    .nome-paciente__atendimento-atual{
      font-size: 18px;
      font-weight: 500;
    }
    .grafico_item{
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      flex-basis: 350px;
      gap: .5rem;
      
    }
    .grafico_item1{
      border-radius: 8px;
      display: flex;
      flex-grow: 1;
      flex-basis: 400px;
     
    }
    .nome-paciente__card-atendimento{
      font-size: 18px;
      font-weight: 500;
    }

    @media screen and (max-width: 450px){
      .main__container{
        padding: 35px 1rem 0 1rem;
        max-width: 450px;
      }

      .titulo__container, .cards__container, .atendimentos__container, .grafico__pac{
        padding: 0 0 0 0rem ;
        margin: 0;
      }

      .cards__container-items, .atendimento__atual{
	      margin: 1rem 0.5rem 0 0rem;
      }
      .atendimentos__proximo{
        margin: 0;
        padding: 0 0 0 0;
      }

      .dash__container{
        max-width: 450px;
      }

      .grafico_item, .grafico_item1{
        max-width: 410px;
      }
      .cards__container{
        margin: 0;
      }
      .grafico__pac{
        margin: 2rem 0.5rem 0 0;
        flex-direction: column; 
      }
    }
    .cardatendimento{
      margin:.5rem 0.5rem 0 0;
      padding: 0 1px 0 0;
    }

</style>
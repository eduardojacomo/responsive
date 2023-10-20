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
            <div class="card__texto">
              <h3 class="titulo__card"> 3</h3>
              <p> Pacientes em atraso</p>
            </div>
            <div class="card__icone">
              <font-awesome-icon icon="fa-solid fa-coins" />
            </div>
        </div>

        <div class="cards__container-items">

            <div class="card__texto">
              <h3 class="titulo__card"> 5</h3>
              <p> Atendimentos confirmados</p>
            </div>
            <div class="card__icone">
              <font-awesome-icon icon="fa-solid fa-comments" />
            </div>

        </div>

        <div class="cards__container-items">

            <div class="card__texto">
              <h3 class="titulo__card"> 2</h3>
              <p> Tarefas a serem realizadas</p>
            </div>
            <div class="card__icone">
              <font-awesome-icon icon="fa-solid fa-list-check" />
            </div>

        </div>

        <div class="cards__container-items">

            <!-- <div class="card__texto">
              <h3 class="titulo__card"> 10</h3>
              <p> Mensagens te aguardando</p>
            </div>
            <div class="card__icone">
              <font-awesome-icon icon="fa-solid fa-inbox"/>
            </div> -->
            <CardDash />
        </div>

      </div>
      <div class="atendimentos__container">
        <div class="atendimento__atual">
          <!-- <div class="img__atendimento-atual"><img src="../assets/atend1.png" class="img-atendimento"></div> -->
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
          <!-- <div class="card__atendimento">
            <div class="icone__card-atendimento"><font-awesome-icon icon="fa-solid fa-circle-check"/></div>
            <div class="text__card-atendimento"><strong class="nome-paciente__card-atendimento">Paciente Rafael</strong> Quarta-Feira - 05/10/2023 15:00</div>
          </div> -->
          <CardAtendimento />
          <!-- <div class="card__atendimento">
            <div class="icone__card-atendimento"><font-awesome-icon icon="fa-solid fa-circle-check"/></div>
            <div class="text__card-atendimento"><strong class="nome-paciente__card-atendimento">Paciente Joana</strong> Quarta-Feira - 05/10/2023 16:00</div>
          </div> -->
          <CardAtendimento />
          <!-- <div class="card__atendimento">
            <div class="icone__card-atendimento"><font-awesome-icon icon="fa-solid fa-circle-check"/></div>
            <div class="text__card-atendimento"><strong class="nome-paciente__card-atendimento">Paciente Maria</strong> Quarta-Feira - 05/10/2023 17:00</div>
          </div> -->
          <CardAtendimento />
          <!-- <div class="card__atendimento">
            <div class="icone__card-atendimento1"><font-awesome-icon icon="fa-solid fa-circle-check"/></div>
            <div class="text__card-atendimento"><strong class="nome-paciente__card-atendimento">Disponível</strong> Quarta-Feira - 05/10/2023 18:00</div>
          </div> -->

        </div>
      </div>
      <div class="grafico__pac">
        <div class="grafico_item"><GraficoPizza class="grafico_1"/></div>
        <div class="grafico_item"><GraficoDoughnut class="grafico_1" /></div>
        <div class="grafico_item"><GraficoBarra class="grafico_1" style="height: 200px;"/></div>
      </div>
    </div>

  </div>

</template>

<style scoped>
   .main__container{
        display: flex;
        width: auto;
        justify-content:space-between;
        padding: 35px 2px 5px 155px  ;
        /* position: absolute;
        align-content: center;
        text-align: center; */
        height:100%;
        /* background-color: white ; */
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
    .titulo__card{
      font-size: 28px;
      font-weight: 700;
    }

    .dash__container{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .cards__container{
      display: flex;
      
      justify-content:space-between;
      flex-wrap: wrap;
      padding: 1rem 0.5rem .5rem 3rem;
      gap:.5rem;
    }

    .cards__container-items{
      /* border: 1px solid var(--tema2-text-dark-1); */
      /* margin: 0.5rem 1rem 0.5rem 0; */
      padding: 0 1rem;
      background-color: var(--color-background-soft);
      border-radius: 8px;
      height: 100px;
      width: 200px;
      border: 1px solid var(--color-border);
      justify-content:center;
      display: flex;
      flex-direction: row;
      /* flex-grow: 1;
      flex-basis: 200px; */
      /* box-shadow: 0 0 20px rgba(93, 93, 93, 0.2); */
    }
    .grafico__pac{
      display:flex;
      padding: 2px 0 0 3rem;
      width: 100%;
      justify-content: space-between;
      align-items:stretch;
      flex-wrap: wrap;
      flex-grow: 1;
      gap: 1rem;
      
    }

    .grafico_1{
      display: flex;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      border: 1px solid var(--color-border);
    }
    .card__texto{
      display: flex;
      flex-direction: column;
      margin-right: 1rem;

    }

    .card__icone{
      font-size: 42px;
    }

    .img__atendimento-atual{
      display: block;
      flex-grow: 1;
      flex-basis: 320px;
      min-width: 300px;
      max-width: 400px;
      align-items: center;
      justify-content: center;
      /* flex-wrap: wrap; */
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
      padding: 0.5rem 1rem 1rem 3rem;
      align-content: space-between;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      /* margin: 0 0 1rem 0; */
    }

    .atendimento__atual{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      max-width: 650px;
      background-color: var(--color-background-soft);
      /* border: 1px solid var(--tema1-white-soft); */
      border-radius: 8px;
      border: 1px solid var(--color-border);
      margin: 1rem 0;
    }
    .img-atendimento{
      max-height: 269px;
      max-width: 420px;
      width: 100%;
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
      /* flex-basis: 120px 90px; */
      width: 350px;
      flex-direction: column;
      
    }

    .nome-paciente__atendimento-atual{
      font-size: 18px;
      font-weight: 500;
    }
    .card__atendimento{
      background-color: var(--color-background-soft);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      margin: 01rem 0 0rem 1rem;
      display: flex;
      /* align-content: flex-end; */
      flex-direction: row;
      flex-grow: 1;
      flex-basis: 100px 90px;

    }

    .icone__card-atendimento{
      display: flex;
      text-align: center;
      align-items: center;
      /* margin: 1rem; */
      background-color: var(--tema2-blue2-dark);
      padding: 1px 10px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      font-size: 32px;
    }

    /* temporario */
    .icone__card-atendimento1{
      display: flex;
      text-align: center;
      align-items: center;
      /* margin: 1rem; */
      background-color: var(--tema2-green1-dark);
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

    .grafico_item{
      background-color: var(--color-background-soft);
      border-radius: 8px;
      display: flex;
    }
    .nome-paciente__card-atendimento{
      font-size: 18px;
      font-weight: 500;
    }

    @media screen and (max-width: 450px){
      .main__container{
        padding: 35px 0 0 0;
        max-width: 450px;
      }

      .titulo__container, .cards__container, .atendimentos__container, .grafico__pac{
        padding: 0 0 0 1rem ;
        margin: 0;
      }

      .cards__container-items, .atendimento__atual, .atendimentos__proximo{
	      margin: 1rem 0.5rem 0 0.5rem;
      }

      .dash__container{
        max-width: 450px;
      }

      .cards__container{
        margin: 0;
      }
      .grafico__pac{
        margin: 2rem 0;
      }
    }

</style>
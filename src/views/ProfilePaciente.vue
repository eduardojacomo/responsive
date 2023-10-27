<template>
    <div class="main">
        <!-- <h2 class="titulo_pagina">Perfil do Paciente</h2> -->
        <div class="column">
            <div class="row">
                <div class="dadospaciente">
                    <div class="avatar">
                        <img src="../assets/p12.png" class="avatar__profile">
                    </div>
                    <div class="dadosprincipais">
                        <h2>{{pacientes.nome}}</h2>
                        <h3 >{{ getAge }} / {{ pacientes.dataNascimento }}</h3>
                        <input type="text" v-model="dtnasc">
                        <h3>{{pacientes.cidade}}/{{ pacientes.uf }}</h3>
                        <h3>{{pacientes.profissao}}</h3>
                    </div>
                </div>

                <br/>
                <div class="metas_terapia">
                    <h2>Metas da Terapia</h2>
                    <h5>Ansiedade</h5>
                    <progress value="0" max="100" style="--value: 0; --max: 100;"></progress>
                    <h5>Consentração</h5>
                    <progress value="25" max="100" style="--value: 25; --max: 100;"></progress>
                    <h5>Foco</h5>
                    <progress value="50" max="100" style="--value: 50; --max: 100;"></progress>
                    <h5>Organização</h5>
                    <progress value="75" max="100" style="--value: 75; --max: 100;"></progress>
                    <h5>Meta</h5>
                    <progress value="100" max="100" style="--value: 100; --max: 100;"></progress>
                </div>
            </div>

            <div class="row1">
                
                <div class="tabs">
                    <TabWrapper>
                        <Tab title="Financeiro"> 
                            <div class="profile__financeiro">
                                <form>
                                    <div>
                                        <label>Valor da Terapia</label>
                                        <input type="text" class="valor-terapia" v-model="pacientes.valorTerapia" >
                                    </div>
                                    <div>
                                        <label>Dia de Vencimento</label>
                                        <input type="text" class="dia-vencimento" v-model="pacientes.vencimento">
                                    </div>
                                    <div class="tipo__cobranca">
                                        <p>Tipo de cobrança</p>
                                        <div>
                                            <input type="radio" id="radio-one" name="switch-one" value="Mensal" checked/>
		                                    <label for="radio-one">Mensal</label>
                                            <input type="radio" id="radio-two" name="switch-one" value="Semanal" />
                                            <label for="radio-two">Semanal</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Tab>
                        <Tab title="Terapia"> 
                            <div class="profile_terapia">
                                {{ pacientes }}

                            </div>
                        </Tab>
                        <Tab title="Dados"> 
                            <div class="dados__content">
                                <h3>Dia terapia: {{pacientes.diaTerapia}}</h3>
                                <h3>Hora: {{pacientes.horaTerapia}}</h3>
                                <h3>Frequencia das sessões: Semanal</h3>
                                <br/>
                                <h3>Próximas Sessões</h3>
                                <p>23/10/23</p>
                                <p>30/10/23</p>
                                <p>06/11/23</p>
                            
                            </div>
                        </Tab>
                    </TabWrapper>
                </div>
                   
            </div>

            <div class="row1">
                
                <div class="timeline">
                    <h2>Histórico</h2>
                    <ul>
                        <li>
                            <div class="bullet"></div>
                            <div class="dados_timeline">
                                <div class="time">05/09/23 - Terça-Feira<p>15:00h</p></div>
                            <div class="desc">
                                <h3> Maria relata que está se sentindo mais triste e ansioso do que antes. Ele também está tendo dificuldade de dormir.</h3>
                            </div>
                        </div>
                        </li>
                        <li>
                            <div class="bullet_tag"></div>
                            <div class="dados_timeline">
                                <div class="time">07/09/23- Quinta-Feira</div>
                                <div class="desc">
                                    <h4> Maria teve insonia e foi dormir as 04:00h</h4>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="bullet"></div>
                            <div class="dados_timeline">
                                <div class="time">12/09/23 - Terça-Feira<p>15h</p></div>
                                <div class="desc">
                                    <h3> Maria relata que está começando a se sentir um pouco melhor. Ela está conseguindo dormir melhor e está mais concentrado no trabalho</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="bullet"></div>
                            <div class="dados_timeline">
                                <div class="time">19/09/23 - Terça-Feira<p>15h</p></div>
                                <div class="desc">
                                <h3> Maria não compareceu a sessão.</h3>
                            </div>
                            
                            </div>
                        </li>
                    </ul>
                </div> 
            </div>
            

        </div>
    </div>    
</template>

<script setup>
import Tab from '../components/Tab.vue';
import TabWrapper from '../components/TabWrapper.vue';
import {onMounted, computed, ref, watch} from 'vue';
import api from '../services/api';

name:"ProfilePaciente"
        
// function getAge(dateString) {
//     const today = new Date();
//     const birthDate = new Date(dateString);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const m = today.getMonth() - birthDate.getMonth();

//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age;
// }

const props = defineProps({
            id: Number,
            required: true
        })


const pacientes = ref ([]);

const fetchPacientes = async () => await api.get("/Paciente/PacientesCompleto"+props.id).then((response)=>
    (pacientes.value = response.data)
    );

    onMounted(
    fetchPacientes  
    );
    const dtnasc = ref('');
    watch(pacientes.dataNascimento, async (dtnasc)=>{
        dtnasc=pacientes.dataNascimento;
    })     
    const getAge = computed( () => { 
    let currentDate = new Date(); 
    
    let birthDate = new Date(dtnasc); 
    let difference = currentDate.getFullYear() - birthDate.getFullYear(); 
    let year1 = currentDate.getFullYear();
    let year2 = birthDate.getFullYear();
    let age = birthDate; 
    console.log(year2);
    return pacientes.dataNascimento; 
});
</script>

<style scoped>

    .main{
        padding: 50px 1rem 0 180px;
    }
    .column{
        display: flex;
        flex-direction: row;
        flex-flow: 1 1 250px;
        gap: 1rem;
    }

    .titulo_pagina{
        font-size: 28px;
        font-weight: 600;
        text-align: center;
    }
    .row, .row1{
        display: flex;
        flex-flow: 1 1 200px;
        flex-direction: column;
        justify-content: flex-start;
        
    }

    .row{
        background-color: var(--color-background-mute);
        border-radius: 8px;
        border: 1px solid var(--color-border);
        height: auto;
        padding: .5rem 1rem ;
    }
   
    .row p{
        display: flex;
        flex-wrap: wrap;
        width: 150px
    }
    .avatar__profile{
        width: 150px;
        border-radius: 50%;
        border: 2px solid var(--color-detail2-blue);
    }

    .metas_terapia{
        display: flex;
        flex-direction: column;
    }

    .dadospaciente{
        display:flex;
        flex-direction: column;
    }
    .avatar{
        display:flex;
        height: auto;
        width: auto;
    }

    .dadosprincipais{
        display: flex;
        flex-direction: column;
    }

    .dadospaciente h2{
        font-size: 20px;
        font-weight: 500;
    }

    .dadospaciente h3 {
        font-size: 14px;
        font-weight: 400;
    }

    .dadospaciente p {
        font-size: 12px;
        font-weight: 300;
        color: var(--color-text1);
    }

    .timeline{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        /* flex-flow: 1 1 150px; */
        max-width: 250px;
        min-width: 210px;
    }

    .timeline ul {
    padding: .3em 0 0 1em;
    margin: 0;
    list-style: none;
    position: relative;

    }

    .timeline ul::before {
      content: ' ';
      height: 100%;
      width: 1px;
      background-color: var(--color-text);
      position: absolute;
      top: 0;
      left: 1.5em;
      z-index: -1;
    } 

    .timeline li div{
    display: inline-block;
    margin: .5em 0;
    vertical-align: top;
    }

    .timeline .bullet ,
    .timeline .bullet_tag {
    width: 1em;
    height: 1em;
    box-sizing: border-box;
    border-radius: 50%;
    
    z-index: 1;
    margin-right: 1em;
    }
    
    .timeline .bullet{
        background: var(--color-detail2-green);
        border: 2px solid var(--color-detail2-green);
    }

    .timeline .bullet_tag{
        background: var(--color-detail1-red);
        border: 2px solid var(--color-detail1-red);
    }

    .dados_timeline{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 85%;
        padding: .3rem;
        border-radius: 8px;
        border: 1px solid var(--color-border);
    }
  .time {
    width: 100%;
    font-size: 0.75em;
    /* padding-top: 0.25em; */
  }
  
  .desc {
    max-width: 100%;
  }
  
  .timeline h3 {
    font-size: 0.9em;
    font-weight: 400;
    margin: 0;
    max-width: 300px;
  }
  
  .timeline h4 {
    margin: 0;
    font-size: 0.7em;
    font-weight: 400;
    color: var(--color-text);
  }
  .tabs{
    height: auto;
    width: 650px;
  }

  .profile_terapia{
    display: flex;
    max-width: 650px;
  }
  .column_tab{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 33%;
    padding: .5rem;
    
  }

  .column_tab ul{
    list-style: none;
    padding-left: 10px;
  }

  .tipo__cobranca{
    display: flex;
	margin-bottom: 36px;
	overflow: hidden;
    gap: 10px;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .tipo__cobranca input{
    position: absolute !important;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	width: 1px;
	border: 0;
	overflow: hidden;
  }

  .tipo__cobranca label {
    background-color: var(--color-background-mute);
	color: var(--color-text);
	font-size: 14px;
	line-height: 1;
	text-align: center;
	padding: 8px 16px;
	margin-right: -1px;
	border: 1px solid var(--color-border);
	/* box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1); */
	transition: all 0.1s ease-in-out;
    cursor:pointer;
  }

    .tipo__cobranca label:hover {
        border-color: var(--color-detail2-blue);
    }
    .tipo__cobranca input:checked + label {
		background-color: var(--color-detail2-blue) ; 
		color: var(--color-text1);
		border-color: var(--tema-border);
		z-index: 1;
	}

    .profile__financeiro{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .profile__financeiro  input {
        font-size:14px;
        border:1px solid var(--tema-border);
        border-radius: 8px;
        padding:10px;
        background: var(--color-background);
        color: var(--color-text);
        width: 100px;
        height: 37px;
        display: flex;
        flex-flow: 1 1 250px;
  }
  
  
  @media screen and (max-width: 450px){
    .main{
        padding: 50px .5rem 0 .5rem;
    }
    .titulo_pagina{
        font-size: 32px;
    }
    .column{
        flex-direction: column;
    }
    .row{
        width: 95vw;
        height: auto;
    }
    .dadospaciente{
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
    .dadospaciente h2{
        font-size: 20px;
        font-weight: 500;
    }

.metas_terapia progress{
    width: 100%;
}

    .timeline{
        width: 98vw;
        max-width: 450px;
    }
    .dados_timeline{
        background-color: var(--color-background-mute);
        width: 90%;
    }
    .cards{
        width: 95vw;
    }
    .cards_items{
        flex-basis: 180px;
    }
    .tabs{
        width: 95vw;
    }
  }



</style>
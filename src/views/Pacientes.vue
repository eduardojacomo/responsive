<template>
    <div class="main__container">
      <Modal @close="toogleModal" :modalActive="modalActive">
        <div class="modal-content">
          <!-- <CadastroPaciente/> -->
        </div>
      7
      </Modal>
      <div class="rows__content">
    
        <div class="row">
          <div class="busca_row">
            <div class="busca__paciente">
            
              <form>
                <input type="text" class="filtro" v-model="localizapaciente" placeholder="Localizar.." name="search">
                <button type="submit"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></button>
                
              </form>
            </div>
          <div class="filtro_paciente">
            <button class="filter-buton">
              <font-awesome-icon icon="fa-solid fa-filter" />
            </button>
            <div class="content-filter">
              <collapsible :content="myContent">Teste1</collapsible>
            </div>
          </div>

          </div>
          
          <div class="btn__acoes">
            <router-link :to="{name: 'CadastroPaciente', params: { id: 0 } }">
              <button type="button">
              <font-awesome-icon icon="fa-solid fa-user-plus" class="icon__buton" />
              Novo Paciente
            </button>
            </router-link>
          </div>

      </div>
      
      <div>
        <div class="exibicao__pacientes">
            <button>
               <font-awesome-icon icon="fa-solid fa-table" />
               <span class="tooltiptext">Exibição em Tabela</span>
            </button>
            <button> 
              <font-awesome-icon icon="fa-solid fa-list" />
              <span class="tooltiptext">Exibição em lista</span>
            </button>
            <button> 
              <font-awesome-icon icon="fa-solid fa-address-card" />
              <span class="tooltiptext">Exibição em Cards</span>
            </button>
          </div>
      </div>

      <div class="row">
        
          <table id="pacientes" class="table__pacientes">
            <tr class="titulo_tabela">
              <th></th>
              <th>Nome</th>
              <th>Celular</th>
              <th>Cidade/UF</th>
              <th>Dia/Hora Sessão</th>
              <th>Status</th>
              <th> </th>
            </tr>
            <tr v-for="paciente in filteredPacientes" :key="paciente.id">
              <td><img class="avatar" src="../assets/p12.png"></td>
              <td>{{paciente.nome}}</td>
              <td>{{paciente.celular}}</td>
              <td>{{ paciente.cidade }}/{{ paciente.uf }}</td>
              <td>{{ paciente.diaTerapia }} - {{ paciente.horaTerapia }}</td>
              <td>{{ paciente.status }}</td>
              <td>
                <!-- <router-link to="/" class="side__link"><font-awesome-icon icon="fa-solid fa-house" /> Home</router-link> -->
                <router-link :to="{name: 'CadastroPaciente', params: { id: paciente.id } }" class="btn-table-pac"><font-awesome-icon icon="fa-solid fa-user-pen" /></router-link>
                <router-link :to="{name: 'ProfilePaciente', params: { id: paciente.id } }" class="btn-table-pac"><font-awesome-icon icon="fa-solid fa-id-badge" /></router-link>
              </td>
            </tr>
        
           
          </table>
        </div>

    </div>
  
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import api from '../services/api';
import Modal from '../components/Modal.vue';
import CadastroPaciente from '../views/CadastroPaciente.vue';
      
    const localizapaciente = ref('');
    const pacientes = ref ([]);

    const modalActive = ref(false);

    const toogleModal = () => {
      modalActive.value = !modalActive.value;
    }
    
    const fetchItems = async () => {
        const response = await api.get('/Paciente/PacientesCompleto');
        pacientes.value = await response.data;
    };   
    fetchItems();

     const filteredPacientes = computed(() => {
       return pacientes.value.filter((paciente) => paciente.nome.toLowerCase().includes(localizapaciente.value.toLowerCase()));
     });

    
</script>

<style>

.main__container{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 50px 1rem 1rem 205px  ;
    align-items: center;
    /* position: absolute;
    align-content: center;
    text-align: center; */
    height:100%;
    /* background-color: white ; */
}

.rows__content{
  display:flex;
  flex-direction: column;
}
  
.row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;;
}

.busca_row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.btn__acoes{
  display: flex;
  align-items: center;
  justify-content:flex-end;
  gap: 1rem;
  flex-wrap: wrap;
  /* margin: 0 1rem 0 0; */
  
}

/* .btn__acoes router-link{

} */

.btn__acoes button {
  
  
  padding: 10px;
  background: var(--color-detail2-green);
  color: var(color-text);
  font-size: 14px;
  border: 1px solid var(--color-border2);
  border-radius: 8px;
  cursor: pointer;
}

.icon__buton{
  font-size: 17px;
}

.busca__paciente{
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

  .busca__paciente input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid var(--color-border2);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  float: left;
  width: 80%;
  color: var(--color-text);
  background: var(--color-background-soft);
  }

  .busca__paciente button {
  float: left;
  width: 20%;
  padding: 10px;
  background: var(--color-detail2-blue);
  color: var(color-text);
  font-size: 17px;
  border: 1px solid var(--color-border2);
  border-left: none; /* Prevent double borders */
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
}

  .busca__paciente button:hover {
    background: var(--color-detail1-blue);
  }

  .filtro_paciente{
    display:flex;
    padding: 1rem;
    flex-direction: row;
    /* gap: 0.2rem; */

  }

  .filter-buton {
  width: 40px;
  height: 40px;
  padding: 5px;
  background: transparent;
  color: var(--color-text);
  font-size: 19px;
  border: none;
  /* border: 1px solid var(--color-border); */
  
  cursor: pointer;
  }

  .filter-buton:hover, .exibicao__pacientes button:hover{
    /* background-color: var(--color-detail1-blue); */
    color: var(--color-detail1-blue);
  }

  .exibicao__pacientes{
    display:flex;
    
    flex-direction: row;
    justify-content: flex-end;
    /* gap: 0.2rem; */

  }

  .exibicao__pacientes button {
  width: 40px;
  height: 40px;
  padding: 5px;
  background: transparent;
  color: var(--color-text);
  font-size: 19px;
  border: none;
  
  /* border: 1px solid var(--color-border); */
  position: relative;
  display: inline-block;
  cursor: pointer;
  }

  .tooltiptext {
  visibility: hidden;
  width: 100px;
  bottom: 100%;
  left: 50%;
  margin-left: -80px;
  font-size:14px;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.exibicao__pacientes button:hover .tooltiptext {
  visibility: visible;
}

  .content-filter{
    display: none;
    /* display: flex;
    position: relative; */
    overflow: hidden;
    background-color: var(--color-background-soft);
    padding: 0 1rem;
    
  }

  .modal-content{
    /* width: 80vw;
    height: 80vh; */
    display: flex;
    /* position: absolute; */
    padding: 2rem;
    overflow-y: auto;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
    z-index: 8;
  }




  #pacientes{
    border-collapse: collapse;
    width: 80vw;
    padding: 1rem;
    
  }

  #pacientes td, #pacientes th {
  /* border: 1px solid var(--color-border); */
  padding: 4px 8px;
  display: felx;
  flex-wrap: wrap;
}

#pacientes tr:nth-child(even){background-color: var(--color-background-mute);}

/* #pacientes tr:hover {background-color: var(--color-detail2-blue);} */

#pacientes th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: var(--color-detail1-blue);
  color: var(--color-text);
  
}
#pacientes th:first-child {
   border-top-left-radius: 8px;
  /*border-top-right-radius: 8px; */
  
}
#pacientes th:last-child {
   
  border-top-right-radius: 8px;
  
}
.btn-table-pac{
  background-color: transparent;
  border: none;
  color: var(--color-text);
  font-size: 16px;
  cursor: pointer;
  margin: 0 5px;
}
.btn-table-pac:hover{
  
  color: var(--color-detail2-green);
}

.avatar{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* border: 5px solid var(--color-detais2-blue); */
}

  @media screen and (max-width: 450px) {
    .main__container{
      padding: 50px 1rem 1rem 1rem;

    }
    table th:nth-child(4), table td:nth-child(4) {
    display: none;
  }
  


  }
</style>
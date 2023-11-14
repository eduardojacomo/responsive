<template>

    <div class="formulario">
    
    <div class="main_avatar">
       <div class="avatar">
           <img src="../../assets/p5.png" alt="" class="avatar__profile">
       </div> 
       <div class="botao_select_avatar">
           <button class="select_picture"> <font-awesome-icon icon="fa-regular fa-file-image" class="icon_button-picture" /> Editar</button>
       </div>
    </div>
   <div class="campos">

       <div class="dados__gerais-paciente">
           <div class="row">
               <label>
                   <input name="nomePaciente" v-model="pacienteData.nome" class="input" id="nomePaciente" type="text" placeholder="" required >
                   <span>Nome</span>
               </label>
           </div>

           <div class="row">
               <div class="checkbox">
                   <div class="custom-select">
                   <select class="personalizado" id="estcivil_pac" v-model="pacienteData.estadocivil">
                           <option value="0" selected disabled>Estado Cívil</option>
                           <option value="Solteiro(a)">Solteiro(a)</option>
                           <option value="Casado(a)">Casado(a)</option>
                           <option value="Divorciado(a)">Divorciado(a)</option>
                           <option value="Viuvo(a)">Viuvo(a)</option>  
                   </select>
               </div>
                   <div class="select_arrow">
                   </div>
               </div>
               <div class="checkbox">
                   <div class="custom-select">
                       <select class="personalizado" id="sexo_pac" v-model="pacienteData.sexo">
                           <option value="0" selected disabled>Sexo</option>
                           <option value="Masculino">Masculino</option>
                           <option value="Feminino">Feminino</option>
                           <option value="Outro">Outro</option>
                       </select>
                       
                   </div>
                   <div class="select_arrow">
                   </div>
               </div>
           </div>

           <div class="row">
               <label>
                   <input name="profissaoPaciente" id="profissao_pac" v-model="pacienteData.profissao" class="input" type="text" placeholder="" required >
                   <span>Profissão</span>
               </label>
               <label>
                   <input name="cpfPaciente" id="cpf_pac" type="text" v-maska data-maska="###.###.###-##" class="input" v-model="pacienteData.cpf" maxlenght="11" placeholder="" required >
                   <span>CPF</span>
               </label>
           </div>

           <div class="row">
               <label>
                   <input type="date" name="dataNasc" id="dataNasc" v-model="pacienteData.dataNascimento" maxlenght="10" class="input" placeholder="" required>
                   <span>Data de Nascimento</span>
               </label>
           </div>

           <div class="row">
               <label>
                   <input name="celPaciente" id="cel_pac" v-model="pacienteData.celular" v-maska data-maska="(##)#####-####" type="text" class="input" placeholder="" required >
                   <span>Celular</span>
               </label>
               <label>
                   <input name="emailPaciente" id="email_pac" v-model="pacienteData.email" type="text" class="input" placeholder="" required >
                   <span>E-mail</span>
               </label>
           </div>
           <div class="row">
               <label>
                   <input name="celContato" id="cel_contato_pac" v-model="pacienteData.contatoEmergencia"  v-maska data-maska="(##)#####-####" type="text" class="input" placeholder="" required >
                   <span>Contato de emergência</span>
               </label>
               <label>
                   <input name="nomeContato" id="nomeconto_pac" v-model="pacienteData.nomeContato" type="text" class="input" placeholder="" required >
                   <span>Nome do contato</span>
               </label>
           </div>
       </div>
       
       <div class="endereco-paciente">
           <div class="row">
           <label>
               <input name="cepPaciente" v-model="pacienteData.cep" @keyup="getCep()"  v-maska data-maska="##.###-###" type="text" class="input" placeholder="" required >
               <span>CEP</span>
           </label>
           <div class="checkbox">
               <div class="custom-select" id="uf_pac"> 
               <select v-model="pacienteData.uf">
                   <option value="0" selected disabled>UF</option>
                   <option value="RJ">RJ</option>
                   <option value="SP">SP</option>
               </select>
               </div>
               <div class="select_arrow">
               </div>
           </div>
       </div>

       <div class="row">
           <label>
               <input name="endPaciente" id="rua_pac" type="text" v-model=pacienteData.endereco class="input" placeholder="" required >
               <span>Endereço</span>
           </label>
       </div>

       <div class="row">
               <label>
                   <input name="numPaciente" id="numend_pac" ref="numero" v-model="pacienteData.numero" type="text" class="input" placeholder="" required >
                   <span>Número</span>
               </label> 
               <label>
                   <input type="text" class="input" v-model="pacienteData.complemento" placeholder="" required >
                   <span>Complemento</span>
               </label> 
       
       </div>

       <div class="row">
           <label>
               <input name="bairroPaciente" id="bairro_pac" v-model="pacienteData.bairro" type="text" class="input" placeholder="" required >
               <span>Bairro</span>
           </label>
           <label>
               <input name="cidadePaciente" id="cidade_pac" v-model="pacienteData.cidade" type="text" class="input" placeholder="" required >
               <span>Cidade</span>
           </label>
         
           
           
       </div> 
       </div>
       <!--<p class="col-xs-12">
           <form action="upload.php" method="post" enctype="multipart/form-data">
               Upload your personal photo:
               <input type="file" name="fileToUpload" id="fileToUpload">
               <input type="submit" value="Upload Image" name="submit" required>
           </form>
       </p>
       </div> -->
       <br/>
       <div class="botoes">
           <div class="btnconfirmar">
               <button @click="salvarPaciente" class="btncad_pac">Confirmar</button>
           </div>
       </div>
   </div>
   </div>
</template>

<script setup>
import {onMounted, ref, reactive, nextTick} from 'vue';
import api from '../../services/api';
import {pacienteData} from '../../services/pacienteData'
import axios from 'axios';
import { useCep } from '../../store/modules/pacienteStore';
import { vMaska } from "maska"

const cep = useCep();
const props = defineProps({
            idpac: Number,
            required: true
        })
const id = props.idpac;
const cepGet = reactive([]);

// const setFocus = () => {
//       nextTick(() => {
//         numend_pac.value.focus();
//       });
//     };

async function salvarPaciente(){
    if (id==0){
        insertData();
    } else{
        updateData();
    }
}

async function insertData (){
    await api.post('/paciente/', pacienteData.value)
   
  .then((response) => {
          console.log(response)
  })
  .catch((error) => {
    console.error(error);
  });
}

async function updateData (){
    // await api.post('/Paciente/', postData )
    api.put('/paciente/'+id, pacienteData.value)
  .then((response) => {
          console.log(response)
  })
  .catch((error) => {
    console.error(error);
  });
}

// watch( 
//     ()=> pacienteData.cep, 
//     () =>{
//         if (pacienteData.cep.lenght ==8){
//             console.log(pacienteData.cep);
//         }
//     })

 async function getPacientes() {
    let pacientes = reactive ([]);
    if (props.id != 0) {
         await api.get("/paciente/"+id)
        .then((response) => {
            pacienteData.value = response.data;
            console.log(props.idpac)
            //pacientesData.value =pacientes.value.nome;
        })
        .catch((error) => {
        console.error(error);
      });
        
    }    
}

 async function getCep(){
    
      const cepInput = document.querySelector("input[name=cepPaciente]");
      const value = cepInput.value.replace(/[^0-9]+/g, '');
      console.log(value);
      if (value.length==8){
          await axios.get(`https://viacep.com.br/ws/${ value }/json/`)
          .then(async (response) => {
              cepGet.value=response.data;
            
              pacienteData.endereco = await cepGet.value.logradouro;
              
              pacienteData.complemento = await cepGet.value.complemento;
              pacienteData.bairro = await cepGet.value.bairro;
              pacienteData.cidade = await cepGet.value.localidade;
              pacienteData.uf = await cepGet.value.uf;
              this.$refs.numero.focus();
            //   setFocus();
          })
          .catch((error) => {
              console.error(error);
          });

      }
    // const cepInput = document.querySelector("input[name=cepPaciente]");
    // const value = cepInput.value.replace(/[^0-9]+/, '');
    
    // if (value.length==8){
    //     await cep.getCep();
    //     console.log(cep.cep)
    // }
 }

onMounted(async() => {
    getPacientes();
}  
    );

</script>

<style scoped>
.row{
        gap: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

.formulario{
    display: flex;
    flex-direction: row;
    padding: 2rem;
   
  }

  /* .formulario label {
  position: relative;
  }

  .formulario label .input {

    font-size:16px;
    border:1px solid var(--tema-border);
    border-radius: 8px;
    padding:15px 5px 5px 10px;
    background: var(--color-background);
    color: var(--color-text);
    width: 25vw;
    height: 40px;
    display: flex;
    flex-flow: 1 0 250px;
  outline: 0;
}

.formulario label .input + span {
  color: var(--color-text);
  position: absolute;
  left: 15px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.formulario label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 1em;
}

.formulario label .input:focus + span,
.formulario label .input:valid + span {
  color: var(--color-label-blue);
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
} */
  
  .formulario input[type='checkbox']{
    height: auto;
  }

  .campos{
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 0 3rem;
  }

  .avatar{
        display:flex;
        height: auto;
        width: auto;
        padding: 1rem 0;
    }

    .avatar__profile{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 2px solid var(--color-detail2-blue);
    }
    .botao_select_avatar{
        display: flex;
        
        margin: -40px 10px 0 0;
        justify-content: flex-end;
    }

    .select_picture{
        background-color: var(--color-background);
        color: var(--color-text);
        height: 30px;
        border: solid 1px var(--color-border);
        border-radius: 8px;
        cursor: pointer;
        align-content: center;
    }

    .icon_button-picture{
        
        width: 15px;
        height: auto;
        
    }

  .botoes{
    display: flex;
    flex-direction: column; 
  }
 
  #nomePaciente, #rua_pac{
    
    width: 51.3vw;
  }

  .checkbox{
    display:flex;
    margin: 0 12px 0 0;
  }

  .custom-select {
    position: relative;
    display: inline-block;
    /* margin-bottom: 15px; */
    width: 25vw;
}   

 .custom-select select {
        
        display: inline-block;
        width: 100%;
        cursor: pointer;
        padding: 10px 15px;
        outline: 0;
        border: 1px solid var(--tema-border);
        border-radius: 8px;
        background:var(--color-background);
        color: var(--color-text);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
        .custom-select select::-ms-expand {
            display: none;
        }
        .custom-select select:hover,
        .custom-select select:focus {
            color: var(--color-text);
            background: var(--color-background);
        }
        .custom-select select:disabled {
            opacity: 0;
            pointer-events: none;
        }
.select_arrow {
    /* position: absolute; */
    margin: 15px 0 0 -20px;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0px 5px;
    border-color: var(--tema-border) transparent transparent transparent;
    z-index:6;
}
.custom-select select:hover ~ .select_arrow,
.custom-select select:focus ~ .select_arrow {
    border-top-color: #000000;
}
.custom-select select:disabled ~ .select_arrow {
    border-top-color: #cccccc;
}

.btncad_pac{
    padding: 10px;
    background: var(--color-detail2-blue);
    color: var(color-text);
    font-size: 14px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    width: 150px;
    cursor: pointer;
}

.btnconfirmar{
    display: flex;
    justify-content: flex-end;
    /* margin-right: 40px; */
}

.btncad_pac:hover{
    background-color: var(--color-detail1-blue);
}
</style>
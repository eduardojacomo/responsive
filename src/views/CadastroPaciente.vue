<template>
    <div class="main">
        <h2>Cadastro de Clientes</h2>
          <div class="formulario">

				<!-- <div class="avatar">
                    <img src="../assets/p1.png" alt="" class="avatar__profile">
                </div> -->
				<div class="campos">

                    <div class="dados__gerais-paciente">
                        <div class="row">
                            <label>
                                <input name="nomePaciente" v-model="nome" class="input" id="nomePaciente" type="text" placeholder="" required >
                                <span>Nome</span>
                            </label>
                        </div>

                        <div class="row">
                            <div class="checkbox">
                                <div class="custom-select">
                                <select class="personalizado" id="estcivil_pac" v-model="estadocivil">
                                        <option value="0" selected disabled>Estado Cívil</option>
                                        <option value="1">Solteiro(a)</option>
                                        <option value="2">Casado(a)</option>
                                        <option value="3">Divorciado(a)</option>
                                        <option value="4">Viuvo(a)</option>  
                                </select>
                            </div>
                                <div class="select_arrow">
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="custom-select">
                                    <select class="personalizado" id="sexo_pac" v-model="sexo">
                                        <option value="0" selected disabled>Sexo</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Feminino</option>
                                        <option value="3">Outro</option>
                                    </select>
                                    
                                </div>
                                <div class="select_arrow">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <label>
                                <input name="profissaoPaciente" id="profissao_pac" v-model="profissao" class="input" type="text" placeholder="" required >
                                <span>Profissão</span>
                            </label>
                            <label>
                                <input name="cpfPaciente" id="cpf_pac" type="text" class="input" v-model="cpf" maxlenght="11" placeholder="" required >
                                <span>CPF</span>
                            </label>
                        </div>

                        <div class="row">
                            <label>
                                <input type="date" name="dataNasc" id="dataNasc" v-model="dataNascimento" maxlenght="10" class="input" placeholder="" required>
                                <span>Data de Nascimento</span>
                            </label>
                        </div>

                        <div class="row">
                            <label>
                                <input name="celPaciente" id="cel_pac" v-model="celular" type="text" class="input" placeholder="" required >
                                <span>Celular</span>
                            </label>
                            <label>
                                <input name="emailPaciente" id="email_pac" v-model="email" type="text" class="input" placeholder="" required >
                                <span>E-mail</span>
                            </label>
                        </div>
                        <div class="row">
                            <label>
                                <input name="celContato" id="cel_contato_pac" v-model="contatoEmergencia" type="text" class="input" placeholder="" required >
                                <span>Contato de emergência</span>
                            </label>
                            <label>
                                <input name="nomeContato" id="nomeconto_pac" v-model="nomeContato" type="text" class="input" placeholder="" required >
                                <span>Nome do contato</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="endereco-paciente">
                        <div class="row">
                        <label>
                            <input name="cepPaciente" v-model="cep" type="text" class="input" placeholder="" required>
                            <span>CEP</span>
                        </label>
                        <div class="checkbox">
                            <div class="custom-select" id="uf_pac"> 
                            <select v-model="uf">
                                <option value="0" selected disabled>UF</option>
                                <option value="1">RJ</option>
                                <option value="2">SP</option>
                            </select>
                            </div>
                            <div class="select_arrow">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <label>
                            <input name="endPaciente" id="rua_pac" type="text" v-model="endereco" class="input" placeholder="" required >
                            <span>Endereço</span>
                        </label>
                    </div>

                    <div class="row">
                            <label>
                                <input name="numPaciente" id="numend_pac" v-model="numero" type="text" class="input" placeholder="" required >
                                <span>Número</span>
                            </label> 
                            <label>
                                <input type="text" class="input" v-model="complemento" placeholder="" required >
                                <span>Complemento</span>
                            </label> 
                    
                    </div>

                    <div class="row">
                        <label>
                            <input name="bairroPaciente" id="bairro_pac" v-model="bairro" type="text" class="input" placeholder="" required >
                            <span>Bairro</span>
                        </label>
                        <label>
                            <input name="cidadePaciente" id="cidade_pac" v-model="cidade" type="text" class="input" placeholder="" required >
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
                            <button @click="pacientesData" class="btncad_pac">Confirmar</button>
                        </div>
                    </div>
                </div>
				

        </div>
    </div>
</template>

<script setup>
import Tab from '../components/Tab.vue';
import TabWrapper from '../components/TabWrapper.vue';
import {onMounted, computed, ref} from 'vue';
import api from '../services/api';

name:"CadastroPaciente"
const props = defineProps({
            id: Number,
            required: true
        })

const pacientes = ref ([]);
const nome=ref('');
const cidade=ref('');
const uf=ref('');
const celular=ref('');
const sexo=ref('');
const dataNascimento=ref('');
const endereco=ref('');
const numero=ref('');
const complemento=ref('');
const bairro=ref('');
const cpf=ref('');
const cep=ref('');
const email=ref('');
const dataCadastro= ref('2023-10-27');
const dataAlteracao= ref ('2023-10-27');
const codigo= ref('0');
const contatoEmergencia=ref('');
const nomeContato=ref('');
const profissao=ref('');
const estadocivil=ref('');

const postData = {
    nome: "Tony Stark",
    cidade: "Rio de Janeiro",
    uf: "RJ",
    celular: "24992990000",
    sexo: "Masculino",
    dataNascimento: "1989-10-01T00:00:00",
    endereco: "Rua A",
    numero: "100",
    complemento: "apt1",
    bairro: "Jardim Amalia1",
    cpf: "11111111111",
    cep: "27000000",
    email: "Email",
    dataCadastro: "2023-08-11T00:00:00",
    dataAlteracao: "2023-08-11T00:00:00",
    codigo: 1,
    contatoEmergencia: "55",
    nomeContato: "Contato",
    profissao: "Fotografo(a)",
    estadoCivil: "Solteiro(a)"
    }

async function pacientesData (postData){
    // await api.post('/Paciente/', postData )
    console.log(postData);
}

const fetchPacientes = async () => await api.get("/Paciente/PacientesCompleto"+props.id).then((response)=>
    (pacientes.value = response.data)
    );
onMounted(
    fetchPacientes  
    );

</script>

<style scoped>

.main{
    padding: 50px 1rem 0 180px;
}

form{
    display: flex;
    flex-wrap: wrap;

}

.formulario{
    display: flex;
    flex-direction: column;
    padding: 2rem;
   
  }

  .formulario label {
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
}
  
  .formulario input[type='checkbox']{
    height: auto;
  }

  .campos{
    display: flex;
    flex-direction: column;
    
    padding: 1rem 2rem;
    
  }

  .avatar{
        display:flex;
        height: auto;
        width: auto;
    }

    .avatar__profile{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid var(--color-detail2-blue);
    }

  .botoes{
    display: flex;
    flex-direction: column; 
  }


  /* .row{
    display: flex;
    flex-direction: row;

  } */
  
  #nomePaciente, #rua_pac{
    /* min-width: 320px; */
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

@media screen and (max-width: 450px) {
    form{
        flex-direction: column;
    }
    .formulario{
        padding: 0.5rem;
    }
   

    .campos{
        width: 100%;
        margin-top: 1rem;
    }
    .row{
        gap: 0.5rem;
    }

    #nomePaciente, #rua_pac{
        width: 100vw;
    }
    .formulario input {
        width: 100vw;
    }

  .custom-select {
    width: 72vw;
  }

  .btnconfirmar{
    margin-right: 4px;
}

}

</style>
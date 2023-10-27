<template>
    <div class="main">
        <h2>Cadastro de Clientes</h2>
          <div class="formulario">
            <form action="#non" method="post" class="form_register-paciente">
				<div class="foto">
                    <img src="../assets/p1.png" alt="">
                </div>
				<div class="campos">
                    <div class="dados__gerais-paciente">
                        <div class="row">
                            <input name="nomePaciente" id="nomePaciente" type="text" placeholder="Nome do paciente .." required >
                        </div>

                        <div class="row">
                            <div class="checkbox">
                                <div class="custom-select">
                                <select class="personalizado" id="estcivil_pac">
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
                                    <select class="personalizado" id="sexo_pac">
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
                            <input name="profissaoPaciente" id="profissao_pac" type="text" placeholder="Profissão .." required >
                            <input name="cpfPaciente" id="cpf_pac" type="text" maxlenght="11" placeholder="CPF .." required >
                        </div>

                        <div class="row">
                            <input type="text" name="dataNasc" id="dataNasc" maxlenght="10" placeholder="Data de Nascimento" required>
                        </div>

                        <div class="row">
                            <input name="celPaciente" id="cel_pac" type="text" placeholder="Celular .." required >
                            <input name="emailPaciente" id="email_pac" type="text" placeholder="Email .." required >
                        </div>
                        <div class="row">
                            <input name="celContato" id="cel_contato_pac" type="text" placeholder="Contato de emergência .." required >
                            <input name="nomeContato" id="nomeconto_pac" type="text" placeholder="Nome do Contato .." required >
                        </div>
                    </div>
                    
                    <div class="endereco-paciente">
                        <div class="row">
                        <input name="cepPaciente" type="text" placeholder="Digite o CEP .." required v-mask="'##.###-###'">
                        <div class="checkbox">
                            <div class="custom-select" id="uf_pac"> 
                            <select>
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
                        <input name="endPaciente" id="rua_pac" type="text" placeholder="Rua/Avenida .." required >
                        
                    </div>

                    <div class="row">
                                            
                            <input name="numPaciente" id="numend_pac" type="text" placeholder="Nº .." required >
                            <input name="compPaciente" id="compend_pac" type="text" placeholder="Complemento ..">
                    </div>

                    <div class="row">

                        <input name="bairroPaciente" id="bairro_pac" type="text" placeholder="Bairro .." required >
                        <input name="cidadePaciente" id="cidade_pac" type="text" placeholder="Cidade .." required >
                        
                        
                        
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
                        <button type="submit" class="btncad_pac">Confirmar</button>
                    </div>
                   

                </div>
                </div>
				
			</form>

        </div>
    </div>
</template>

<script setup>
import {onMounted, computed, ref} from 'vue';
import api from '../services/api';

name:"CadastroPaciente"
const props = defineProps({
            id: Number,
            required: true
        })
</script>

<style scoped>
form{
    display: flex;
    flex-wrap: wrap;

}

/* .formulario{
    display: flex;
    flex-direction: column;
    padding: 2rem;
    
  } */
  .formulario input {
    font-size:16px;
    border:1px solid var(--tema-border);
    border-radius: 8px;
    padding:10px;
    background: var(--color-background);
    color: var(--color-text);
    width: 25vw;
    height: 37px;
    display: flex;
    flex-flow: 1 0 250px;
  }

  .formulario input[type='checkbox']{
    height: auto;
  }

  .campos{
    display: flex;
    flex-direction: column;
    width: 75%;
  }

  .foto{
    display: flex;
    width: 25%;
    height: 200px;
  }

  .foto img{
    width: 90%;
    height: 90%;
  }
  .botoes{
    display: flex;
    flex-direction: column; 
  }

  .dados__gerais-paciente{
    display: flex;
    flex-direction: column;
    
    /* flex-flow: 1 1 420px; */
  }

  .endereco-paciente{
    display: flex;
    flex-direction: column;
  }
  .row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap:1rem;
    flex-grow: 1;

  }
  
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
    margin-right: 40px;
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

    .foto{
        width: 100%;
        
    }

    .foto img{
        width: 100%;
        height: 100%;
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
import { ref } from 'vue';

const pacienteData = ref({
    nome:ref(''),
    cidade:ref(''),
    uf:ref(''),
    celular:ref(''),
    sexo:ref(''),
    dataNascimento:ref(''),
    endereco:ref(''),
    numero:ref(''),
    complemento:ref(''),
    bairro:ref(''),
    cpf:ref(''),
    cep:ref(''),
    email:ref(''),
    dataCadastro: ref('2023-10-27'),
    dataAlteracao: ref ('2023-10-27'),
    codigo: ref('0'),
    contatoEmergencia:ref(''),
    nomeContato:ref(''),
    profissao:ref(''),
    estadocivil:ref('')
});

export { pacienteData };
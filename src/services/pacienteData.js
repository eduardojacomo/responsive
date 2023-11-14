import { ref, reactive } from 'vue';

let pacienteData = reactive({
    nome:ref(''),
    cidade:ref(''),
    uf:ref('0'),
    celular:ref(''),
    sexo:ref('0'),
    dataNascimento:ref('1990-01-01'),
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
    estadocivil:ref('0')
});

export { pacienteData };
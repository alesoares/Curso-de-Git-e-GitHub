


/*######################################################################################################################*/
/**     AS PRESENTES FUNÇÕES, MÉTODOS E QUALQUER SIMBOLOGIA AQUI DESCRITAS NAS LINHAS ABAIXO; FORAM TIRADAS DE SITES DE 
 *  ESTUDO OU MESMO SITES E BLOGS DA INTERNET COM ALGUNS LINKS QUE ESTÃO SENDO DISPONIBILIZADOS LOGO ABAIXO; NÃO SENDO 
 * IMPOSTAS AS SANÇÕES DE DIREITOS AUTORAIS POIS SÃO DE DOMINIOS PUBLICOS E NÃO FORAM CRIADAS PELO DESENVOLVEDOR 
 * PRESENTE NESTE SISTEMA; CLARO QUE POR SEREM DE CONHECIMENTO PUBLICOS E DIRETO FORAM AQUI ADAPTADAS AS NECESSIDADES 
 * DESTE PROJETO TORNANDO-SE PARTE DO DESENVOLVIMENTO DELE; NO DEMAIS NOS RESERVAMOS O DIRETO DE TAMBÉM TORNAR PUBLICOS 
 * AS PARTES DESENVOLVIDAS AQUI, A FIM DE QUE OUTROS POSSAM FAZER USO E ADPATAÇÕES COM CONVIER NO FUTURO. E AS CLASSES 
 * QUE ESTÃO DESENVOLVIDAS NESTE PROJETO DE NOSSA AUTORIA TAMBÉM FICAM A DISPOSIÇÃO PARA SEREM AUTERADAS CONFORME 
 * MELHOR SE ADAPTAR AO SEU PROJETO FUTURO.
 * 
 *                                      GRATOS PELA COMPREENSSÃO. :)
 * 
 * https://github.com/fernandoleonid/consumo-api-js/tree/main/01-viacep
 * https://www.sansoaresdeveloper.com.br
 * https://www.sansoaresdeveloper.com
/*######################################################################################################################*/

/*######################################################################################################################*/
/** PARA CONFIGURAR DO CAMPO CEP DA PÁGINA DE CADASTRO DE CLIENTES NO SISTEMA/SITE; E PARA AJUSTES COMO MOSTRADO ABAIXO */
/*######################################################################################################################*/
'use strict';

const limparFormulario = (endereco) =>{
    document.getElementById('address-register').value = '';
    document.getElementById('neighborhood-register').value = '';
    document.getElementById('city-register').value = '';
    document.getElementById('state-register').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('address-register').value = endereco.logradouro;
    document.getElementById('neighborhood-register').value = endereco.bairro;
    document.getElementById('city-register').value = endereco.localidade;
    document.getElementById('state-register').value = endereco.uf;
    desabilitar();
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep-register').value.replace("-","");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('cep-register').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('cep-register').value = 'CEP incorreto!';
    }
    
}

function desabilitar() {
    //document.getElementById('address-register').disabled = true;
    document.getElementById('address-register').readonly = false;

    
}
document.getElementById('cep-register').addEventListener('focusout', pesquisarCep);
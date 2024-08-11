


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

const zipcode = ( event ) => {
  let input = event.target;
  input.value = zipcodemask( input.value );
}
const zipcodemask = ( value ) => {
  if( !value ) return "";
  value = value.replace(/\D/g, '');               //Remove tudo o que não é dígito
  value = value.replace(/(\d{5})(\d)/, "$1-$2");  //Coloca hífen entre o quarto e o quinto dígitos 
  return value;
}
document.getElementById('cep-register').addEventListener('focusout', zipcodemask);
/*######################################################################################################################*/
/*######################################################################################################################*/



/*######################################################################################################################*/
/** PARA CONFIGURAR DO CAMPO Nº CELULAR DA PÁGINA DE CADASTRO DE CLIENTES NO SISTEMA/SITE; E PARA AJUSTES COMO MOSTRADO ABAIXO */
/*######################################################################################################################*/
const phone = ( event ) => {  
  let inputphone = event.target;
  inputphone.value = cellphone( inputphone.value );
}
const cellphone = ( value ) => {
  if( !value ) return "";
  value = value.replace(/\D/g, '');                //Remove tudo o que não é dígito
  value = value.replace(/^(\d\d)(\d)/g, "($1)$2"); //Coloca parênteses em volta dos dois primeiros dígitos
  value = value.replace(/(\d{5})(\d)/, "$1-$2");   //Coloca hífen entre o quarto e o quinto dígitos
  return value;
}
document.getElementById('phone-register').addEventListener('focusout', cellphone);
/*######################################################################################################################*/
/*######################################################################################################################*/



/*######################################################################################################################*/
/** PARA CONFIGURAR DO CAMPO CPF/CNPJ DA PÁGINA DE CADASTRO DE CLIENTES NO SISTEMA/SITE; E PARA AJUSTES COMO MOSTRADO ABAIXO */
/*######################################################################################################################*/
const cpfcnpj = ( event ) => {
  let inputcpfcnpj = event.target;
  inputcpfcnpj.value = cpfcnpjregister( inputcpfcnpj.value );
}
const cpfcnpjregister = ( value ) => {
  if( !value ) return "";
  value = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
  if( value.length === 14 ) {
    value = value.replace(/^(\d\d)(\d)/g, "$1.$2"); //Coloca ponto após os dois primeiros dígitos
    value = value.replace(/(\d{3})(\d)/, "$1.$2");  //Coloca ponto após os quinto dígito inserido
    value = value.replace(/(\d{3})(\d)/, "$1/$2");  //Coloca um barra após o oitavo dígito
    value = value.replace(/(\d{4})(\d)/, "$1-$2");  //Coloca hífen após o decimo segundo dígito
    return value;
  } else  
        if( value.length === 11 ) {
          value = value.replace(/(\d{3})(\d)/, "$1.$2");  //Coloca ponto após terceiro dígito
          value = value.replace(/(\d{3})(\d)/, "$1.$2");  //Coloca ponto após o sexto dígito
          value = value.replace(/(\d{3})(\d)/, "$1-$2");  //Coloca hífen após o nono dígito
          return value;
        }
  return value;
}
document.getElementById('cpf-cnpj-register').addEventListener('focusout', cpfcnpjregister);
/*######################################################################################################################*/
/*######################################################################################################################*/






/*######################################################################################################################*/
/*######################################################################################################################*/



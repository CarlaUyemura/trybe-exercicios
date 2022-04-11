//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:


let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: "Sim",
  };

  info.personagem = 'Margarida e Tio Patinhas';
  info.origem = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178";
  info.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas';
  info.recorrente = "Ambos recorrentes";

  console.log(info);

// teste de recebimento de uma array de clientes
const clients = [
  "carlos henrique gomes amaro                       carloshenrique@gmail.com                                                        1992091103321038110",
  "maria fernanda souza                              maria.fernanda@gmail.com                                                        1991021803321038110",
  "thaynara caixeta                                  thaynara.caixeta@gmail.com                                                      1992072803321038110",
];

for (let i = 0; i < clients.length; i++) {
  var objdados = clients[i];
  var nome = clients[i].substring(0, 50);
  var email = clients[i].substring(50, 130);
  var birth = clients[i].substring(130, 138);
  var cpf = clients[i].substring(138, 149);

  const objetoCliente = Object.assign({
    nome: nome.trim(),
    email: email.trim(),
    birth: birth.trim(),
    cpf: cpf.trim(),
  });
  console.log(objetoCliente);
}

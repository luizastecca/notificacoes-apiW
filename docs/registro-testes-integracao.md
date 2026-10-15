# Registro de Testes de Integração

Aluno: Luiza Gonçalves Stecca
Grupo:6
Data: 15/10/2026

## Banco de teste

Nome do banco de teste: notificacoes_test
Por que ele é separado do banco da API (uma frase): Porque os testes de integração apagam todos os dados antes de cada testes, assim se usasse o original poderia apagar as outras informações.

## Testes escritos

| #   | Arquivo | O que o teste verifica | Verde ou vermelho? |
| --- | ------- | ---------------------- | ------------------ |
| 1   | tests/integration/evento.integration.test.js| Grava um evento| Verde |
| 2   | tests/integration/participante.integration.test.js|E-mail inválido não é gravado| Verde |
| 3   | participante.integration.test.js | Atualização correta do nome do participante no banco (Desafio)| Vermelho|

## Resultado

Linha "Tests:" da saída do npm run test:integration:

* Tests:       2 failed, 4 passed, 6 total*

## Defeito encontrado

Teste: Participante.Service.atualizar (integração) > grava o nome novo no banco
Esperado: "Ana Maria"
Obtido: "Ana"
O que o usuário da API veria (a rota responde 200, mas...): O usuário veria uma mensagem de sucesso co o código status 200, dando a falsa impressão de que o nome foi alterado, mas, ao consultar novamente, veria que o nome continuou o antigo no banco de dados.
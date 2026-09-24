# Registro de Testes Unitários

Aluno: Luiza Gonçalves Stecca
Grupo: 6
Data: 24/09/2026

## Testes escritos

| # | Arquivo | O que o teste verifica | Tipo (sucesso / falha / borda) |
|---|---|---|---|
| 1 | tests/unit/validators.test.js | Não retorna erro para um e-mail válido | sucesso |
| 2 | tests/unit/validators.test.js | Retorna mensagem de erro para e-mail sem @ | falha |
| 3 | tests/unit/validators.test.js | Aceita um nome com exatamente 3 letras quando o mínimo é 3 | borda |
| 4 | tests/unit/parseId.test.js | Lança ValidationError quando o id contém letras e números ("12abc") | falha |

## Resultado

Passaram: 5
Falharam: 1

## Defeito encontrado

Teste: `parseId` com a string `"12abc"` (Parte 2.4)
Esperado: A função deveria lançar um `ValidationError` por conter caracteres alfabéticos no ID.
Obtido: A função converteu `"12abc"` para o número `12` em vez de lançar o erro, fazendo o teste falhar (ficar vermelho).

## Cobertura

% Lines da linha "helpers": [Copia o valor da coluna % Lines da linha helpers que aparece mais acima no teu terminal]
Em uma frase, o que esse número significa: Este número indica a percentagem de linhas do código-fonte na pasta `helpers` que foram efetivamente executadas durante os testes.
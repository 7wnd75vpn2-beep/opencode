# Operação PC-PE

> Cada treino revela seu próximo passo.

Central de preparação para **Agente da Polícia Civil de Pernambuco**. O aluno responde,
indica a própria confiança e recebe uma revisão personalizada, montada a partir das
respostas reais. Funciona sem backend, sem cadastro e sem chave de IA.

**Questões autorais de estudo. Material independente, sem vínculo com a PC-PE ou a banca.**

## Executar

```bash
cd operacao-pc-pe
npm install
npm run dev        # desenvolvimento em http://localhost:5173
npm run build      # build estático em dist/ (pode ser hospedado em qualquer servidor de arquivos)
npm test           # testes de domínio (banco, gabarito, sessão, confiança, revisão, persistência)
npm run typecheck
```

## O que existe

- **Página inicial** com números reais do banco, explicação do método e do formato da prova (sem resultados inventados).
- **Simulado PC-PE**: 60 questões (20 de Noções de Direito + 40 de Conhecimentos Específicos), relógio real que não pausa, entrega automática ao fim do tempo, ritmo por questão e relatório por bloco. Formato segundo resumos do edital publicados por sites de concursos — o PDF oficial não pôde ser consultado.
- **Diagnóstico** (uma questão de cada matéria), **treino dirigido** (matéria, tema e dificuldade, com correção imediata), **simulado livre** e **revisão do dia**.
- **Confiança opcional** (certeza / dúvida / chute) gera quatro grupos; nada é suposto sem resposta.
- **Revisão espaçada**: erro ou branco volta no mesmo dia; acerto com dúvida, em 1 dia; acerto com certeza sobe de caixa (3, 7, 15, 30 dias). Questões repetidas são sempre identificadas como tais.
- **Na questão**: riscar alternativas, ajustar o tamanho do texto, marcar para revisar, mapa de questões por bloco, tempo gasto em cada questão.
- **Relatório progressivo** em 5 etapas, com resultado por bloco, por matéria e por dificuldade, análise de confiança, prioridades com motivo e as questões em que o aluno gastou mais tempo.
- **Painel**: revisões para hoje e próximos dias, meta semanal, evolução (inéditas × repetidas), desempenho por matéria, mapa de temas e histórico.
- **Gabarito comentado** em todas as alternativas, sinalização de problema exportável, persistência local, exportação e importação em JSON validado.

## Banco de questões

286 questões autorais em 10 matérias, no estilo de múltipla escolha da Cebraspe: 97 situações hipotéticas, 17 no formato “assinale a INCORRETA”, 100 médias, 135 difíceis e 51 de nível desafio.

Travas automáticas (`npm test`) bloqueiam questões que deixariam a prova “adivinhável”:
- a alternativa correta não pode ser muito mais longa que as demais (hoje ela é a mais longa em 16% das questões, abaixo dos 20% do acaso);
- toda alternativa precisa de justificativa, e só a correta pode começar com “Correta”;
- alternativas não podem citar letras (a ordem é embaralhada a cada sessão);
- cada matéria precisa de questões nos três níveis de dificuldade.

Para ver os tamanhos das alternativas de um arquivo: `npx tsx scripts/tamanhos.ts src/data/banco/penal.ts`.

## Estrutura

```
src/data/questions.ts   junta os arquivos de src/data/banco/ (um por matéria + incorretas.ts)
src/domain/             tipos, validação do banco, sessão, análise, missão, armazenamento (+ testes)
src/ui/                 telas e componentes React
src/styles/app.css      identidade visual
```

Para adicionar questões, siga o tipo `Question` em `src/domain/types.ts`. Questões que
falham na validação (id duplicado, alternativa sem justificativa, alternativas repetidas,
status `rascunho` etc.) ficam fora das sessões; `npm run validate:bank` confere o banco.

## Pendências de conteúdo

- As matérias seguem resumos do edital de 2026 publicados por sites de concursos; o **PDF oficial não pôde ser consultado** daqui, e os tópicos de cada matéria precisam ser conferidos nele. Não há notas de corte ou pesos estimados no app.
- As 286 questões têm status `revisao-interna`: precisam de revisão por professor de cada disciplina antes de serem marcadas como `revisada`.
- Legislação estadual de Pernambuco (Constituição Estadual, arts. 101 a 105-B; Leis 6.425/1972 e 6.123/1968; LCs 137/2008 e 317/2015) não está coberta, por falta de acesso ao texto oficial.
- Pontos de legislação recente a conferir com cuidado: feminicídio autônomo (Lei 14.994/2024), Tema 506 do STF (maconha), injúria racial na Lei 7.716 (Lei 14.532/2023), perda da nacionalidade (EC 131/2023), improbidade (Lei 14.230/2021).

## Limitações antes de comercializar

- Banco ainda modesto (20 a 35 questões por matéria): quem treina muito logo passa a rever itens já vistos.
- Dados apenas no navegador: sem sincronização, sem backup automático, sem conta.
- Sem revisão jurídica/pedagógica externa; sem termos de uso e política de privacidade.
- Sem pagamento, controle de acesso ou canal real para receber as sinalizações de erro.
- Testado em Chromium (desktop e viewport de celular); validar Safari/iOS e leitores de tela reais (NVDA, VoiceOver).

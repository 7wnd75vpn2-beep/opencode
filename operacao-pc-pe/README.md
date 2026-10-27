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

- **Primeira visita**: introdução curta com duas opções — diagnóstico inicial (mostra nº de questões e duração estimada antes de começar) ou montar o próprio treino.
- **Modos**: Diagnóstico (12 questões equilibradas entre disciplinas, gabarito no fim), Treino dirigido (matéria, tema e quantidade; correção ao confirmar, resposta bloqueada depois), Simulado (cronômetro, navegação livre, marcação, gabarito só ao finalizar, confirmação com nº de questões em branco) e Revisão dos pontos fracos (erros, acertos inseguros e marcadas, identificadas como repetidas).
- **Confiança opcional** (certeza / dúvida / chute) gera quatro grupos; sem confiança informada, nada é suposto.
- **Fila de revisão** pela tentativa mais recente de cada questão: erro com certeza > erro com dúvida/chute > em branco > acerto no chute > acerto com dúvida > apenas marcada. Acerto com certeza sai da fila.
- **Relatório progressivo** em 5 etapas: resultado geral, por matéria, análise de confiança, prioridades (com o motivo de cada uma) e próxima missão.
- **Gabarito comentado**: "Sua resposta" e "Resposta correta" primeiro; depois por que a correta está certa, por que a escolhida está errada, o que lembrar, justificativa de todas as alternativas e referência. Sinalização de problema salva localmente e exportável.
- **Painel**: continuar sessão interrompida, próxima revisão recomendada, meta semanal, evolução (inéditas × repetidas), desempenho por matéria, pendências e histórico. Sem dados de exemplo.
- **Persistência local** com tratamento de armazenamento bloqueado/corrompido, exportação e importação em JSON validado.
- Alternativas embaralhadas por sessão preservando gabarito e justificativas (os textos não citam letras).
- Pontuação de estudo transparente: 1 por acerto, 0 por erro ou branco. Nenhuma regra oficial é aplicada.

## Estrutura

```
src/data/questions.ts   banco autoral: 30 questões de fundamentos + src/data/banco/ (30 por disciplina) = 210
src/domain/             tipos, validação do banco, sessão, análise, missão, armazenamento (+ testes)
src/ui/                 telas e componentes React
src/styles/app.css      identidade visual
```

Para adicionar questões, siga o tipo `Question` em `src/domain/types.ts`. Questões que
falham na validação (id duplicado, alternativa sem justificativa, alternativas repetidas,
status `rascunho` etc.) ficam fora das sessões; `npm run validate:bank` confere o banco.

## Pendências de conteúdo

- As disciplinas são fundamentos usuais em provas policiais e **não foram conferidas contra o conteúdo programático do edital vigente**. Não há datas, pesos, notas de corte ou regras oficiais no app.
- As 210 questões têm status `revisao-interna`: precisam de revisão por professor de cada disciplina antes de serem marcadas como `revisada`.
- Legislação estadual de Pernambuco (Constituição Estadual, estatutos) não está coberta, por falta de verificação no texto oficial.

## Limitações antes de comercializar

- Banco ainda modesto (35 questões por disciplina): quem treina muito logo passa a rever itens já vistos.
- Dados apenas no navegador: sem sincronização, sem backup automático, sem conta.
- Sem revisão jurídica/pedagógica externa; sem termos de uso e política de privacidade.
- Sem pagamento, controle de acesso ou canal real para receber as sinalizações de erro.
- Testado em Chromium (desktop e viewport de celular); validar Safari/iOS e leitores de tela reais (NVDA, VoiceOver).

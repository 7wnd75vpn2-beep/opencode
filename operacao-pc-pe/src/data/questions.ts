import type { Question } from "../domain/types"

/**
 * Banco demonstrativo: questões autorais de fundamentos.
 * Não foram conferidas contra o conteúdo programático do edital vigente.
 * Os textos das alternativas não citam letras, porque a ordem é embaralhada por sessão.
 */
export const BANK_NOTICE =
  "Questões autorais de estudo. Material independente, sem vínculo com a PC-PE ou a banca."

const base = { cargo: "Agente de Polícia", origem: "autoral", status: "revisao-interna" } as const

export const QUESTIONS: Question[] = [
  // ───────────── Língua Portuguesa ─────────────
  {
    ...base,
    id: "lp-crase-01",
    disciplina: "Língua Portuguesa",
    tema: "Crase",
    enunciado: "Assinale a frase em que o acento indicativo de crase está empregado de acordo com a norma-padrão.",
    alternativas: {
      A: {
        text: "O agente foi à delegacia logo pela manhã.",
        why: "Correta. O verbo “ir” exige a preposição “a”, e “delegacia” é palavra feminina que admite o artigo “a”: a + a = à.",
      },
      B: {
        text: "A equipe começou à trabalhar antes do horário.",
        why: "Errada. Não há crase antes de verbo, porque verbo não recebe artigo feminino.",
      },
      C: {
        text: "O escrivão entregou o relatório à ele.",
        why: "Errada. Pronomes pessoais como “ele” não admitem artigo, então não há crase.",
      },
      D: {
        text: "Os policiais fizeram o percurso à pé.",
        why: "Errada. “Pé” é palavra masculina; antes dela não ocorre crase.",
      },
      E: {
        text: "O investigador ficou frente à frente com o suspeito.",
        why: "Errada. Em expressões formadas por palavras repetidas (frente a frente, cara a cara), o “a” é só preposição.",
      },
    },
    correta: "A",
    explicacao: "A crase é a fusão da preposição “a” com o artigo feminino “a”. Ela só acontece quando o termo regente pede a preposição e o termo seguinte aceita o artigo.",
    conceito: "Crase = preposição “a” + artigo “a”.",
    lembrar: "Troque a palavra feminina por uma masculina: se virar “ao”, há crase (fui ao distrito → fui à delegacia).",
    referencia: "Norma-padrão da língua portuguesa — regras de emprego do acento grave.",
  },
  {
    ...base,
    id: "lp-concordancia-01",
    disciplina: "Língua Portuguesa",
    tema: "Concordância verbal",
    enunciado: "Assinale a frase correta quanto à concordância verbal, segundo a norma-padrão.",
    alternativas: {
      A: {
        text: "Fazem dois anos que ele ingressou na carreira.",
        why: "Errada. “Fazer” indicando tempo decorrido é impessoal e fica no singular: “Faz dois anos”.",
      },
      B: {
        text: "Houveram muitas ocorrências no fim de semana.",
        why: "Errada. “Haver” no sentido de existir é impessoal e fica no singular: “Houve muitas ocorrências”.",
      },
      C: {
        text: "Existe muitas dúvidas sobre o caso.",
        why: "Errada. “Existir” é verbo pessoal e concorda com o sujeito “muitas dúvidas”: “Existem”.",
      },
      D: {
        text: "Haviam testemunhas no local do fato.",
        why: "Errada. “Haver” com sentido de existir é impessoal: “Havia testemunhas”.",
      },
      E: {
        text: "Devem existir outras provas nos autos.",
        why: "Correta. “Existir” é pessoal; em locução verbal, o auxiliar “dever” concorda com o sujeito “outras provas”.",
      },
    },
    correta: "E",
    explicacao: "“Haver” (no sentido de existir) e “fazer” (indicando tempo) são impessoais e ficam no singular, inclusive quando acompanhados de auxiliar. Já “existir” concorda normalmente com o sujeito.",
    conceito: "Verbos impessoais não têm sujeito e ficam na 3ª pessoa do singular.",
    lembrar: "Troque “haver” por “existir”: se a frase pedir plural com “existir”, com “haver” ela continua no singular.",
    referencia: "Norma-padrão — concordância dos verbos haver, fazer e existir.",
  },
  {
    ...base,
    id: "lp-regencia-01",
    disciplina: "Língua Portuguesa",
    tema: "Regência verbal",
    enunciado: "Assinale a frase que está de acordo com a norma-padrão quanto à regência verbal.",
    alternativas: {
      A: {
        text: "Prefiro mais estudar de manhã do que à noite.",
        why: "Errada. “Preferir” rege a preposição “a” e dispensa “mais” e “do que”: “Prefiro estudar de manhã a estudar à noite”.",
      },
      B: {
        text: "O investigador assistiu ao depoimento da testemunha.",
        why: "Correta. No sentido de ver ou presenciar, “assistir” é transitivo indireto e exige a preposição “a”.",
      },
      C: {
        text: "O servidor nem sempre obedece o regulamento.",
        why: "Errada. “Obedecer” é transitivo indireto: “obedece ao regulamento”.",
      },
      D: {
        text: "Os candidatos aspiram o cargo de agente.",
        why: "Errada. No sentido de desejar, “aspirar” exige a preposição “a”: “aspiram ao cargo”.",
      },
      E: {
        text: "A equipe esqueceu do prazo do relatório.",
        why: "Errada. Sem pronome, “esquecer” é transitivo direto (“esqueceu o prazo”); com pronome, pede “de” (“esqueceu-se do prazo”).",
      },
    },
    correta: "B",
    explicacao: "Regência verbal é a relação entre o verbo e seus complementos. Alguns verbos mudam de regência conforme o sentido, como “assistir” (ver = assistir a; ajudar = assistir alguém).",
    conceito: "O sentido do verbo determina se o complemento leva ou não preposição.",
    lembrar: "Assistir a, obedecer a, aspirar a (desejar), preferir uma coisa a outra.",
    referencia: "Norma-padrão — regência dos verbos assistir, obedecer, aspirar, preferir e esquecer.",
  },
  {
    ...base,
    id: "lp-pontuacao-01",
    disciplina: "Língua Portuguesa",
    tema: "Pontuação",
    enunciado: "Assinale a frase pontuada de acordo com a norma-padrão.",
    alternativas: {
      A: {
        text: "Os agentes, chegaram ao local às 8h.",
        why: "Errada. Não se separa o sujeito (“Os agentes”) do verbo (“chegaram”) por vírgula.",
      },
      B: {
        text: "A testemunha disse, que viu o carro.",
        why: "Errada. A vírgula separa indevidamente o verbo “disse” de seu complemento “que viu o carro”.",
      },
      C: {
        text: "Ontem à noite, a equipe concluiu o relatório.",
        why: "Correta. O adjunto adverbial deslocado para o início da frase pode ser isolado por vírgula.",
      },
      D: {
        text: "Quem chegou primeiro, assinou o livro de ocorrências.",
        why: "Errada. “Quem chegou primeiro” é o sujeito de “assinou”; não se separa sujeito e verbo por vírgula.",
      },
      E: {
        text: "O delegado, ouviu a vítima e a testemunha.",
        why: "Errada. Mais uma vez, a vírgula separa sujeito e verbo.",
      },
    },
    correta: "C",
    explicacao: "A regra mais cobrada: não se separa por vírgula o sujeito do verbo, nem o verbo de seus complementos. Termos deslocados, como adjuntos adverbiais antecipados, podem ser isolados.",
    conceito: "Vírgula não separa termos essenciais ligados diretamente (sujeito–verbo–complemento).",
    lembrar: "Leia a frase na ordem direta: se a vírgula “corta” sujeito e verbo, está errada.",
    referencia: "Norma-padrão — emprego da vírgula.",
  },
  {
    ...base,
    id: "lp-conectivos-01",
    disciplina: "Língua Portuguesa",
    tema: "Conectivos e sentido",
    enunciado: "No período “O suspeito negou o crime; contudo, as provas indicavam o contrário.”, o conectivo “contudo” estabelece relação de:",
    alternativas: {
      A: {
        text: "conclusão.",
        why: "Errada. Conclusão seria expressa por “portanto”, “logo”, “por isso”. O trecho não tira consequência da negação.",
      },
      B: {
        text: "causa.",
        why: "Errada. Causa seria introduzida por “porque”, “já que”. As provas não são a causa da negação.",
      },
      C: {
        text: "oposição.",
        why: "Correta. “Contudo” é conjunção adversativa: a segunda ideia contraria a expectativa criada pela primeira.",
      },
      D: {
        text: "explicação.",
        why: "Errada. Explicação usaria “pois” (antes do verbo) ou “porque”, justificando a primeira oração.",
      },
      E: {
        text: "condição.",
        why: "Errada. Condição seria expressa por “se”, “caso”, “desde que”.",
      },
    },
    correta: "C",
    explicacao: "“Contudo”, “mas”, “porém”, “todavia” e “entretanto” são conjunções adversativas. Elas ligam ideias que se opõem.",
    conceito: "Conjunções adversativas expressam oposição ou contraste.",
    lembrar: "Teste trocar por “mas”: se o sentido se mantém, a relação é de oposição.",
    referencia: "Norma-padrão — conjunções coordenativas adversativas.",
  },

  // ───────────── Direito Constitucional ─────────────
  {
    ...base,
    id: "dc-domicilio-01",
    disciplina: "Direito Constitucional",
    tema: "Inviolabilidade do domicílio",
    enunciado: "Sobre a inviolabilidade do domicílio prevista na Constituição Federal, assinale a alternativa correta.",
    alternativas: {
      A: {
        text: "Por determinação judicial, a entrada na casa pode ocorrer a qualquer hora do dia ou da noite.",
        why: "Errada. A entrada por determinação judicial só é autorizada durante o dia.",
      },
      B: {
        text: "Em caso de flagrante delito, é possível ingressar na casa sem consentimento do morador, a qualquer hora.",
        why: "Correta. Flagrante delito, desastre e prestação de socorro autorizam a entrada sem consentimento, de dia ou de noite.",
      },
      C: {
        text: "A autoridade policial pode determinar o ingresso durante o dia, independentemente de ordem judicial.",
        why: "Errada. Fora das hipóteses de flagrante, desastre ou socorro, a entrada sem consentimento depende de ordem judicial.",
      },
      D: {
        text: "O consentimento do morador não basta para autorizar a entrada; é sempre necessária ordem judicial.",
        why: "Errada. Com consentimento do morador, a entrada é lícita sem ordem judicial.",
      },
      E: {
        text: "Para prestar socorro, a entrada sem consentimento só é permitida durante o dia.",
        why: "Errada. A prestação de socorro autoriza a entrada a qualquer hora.",
      },
    },
    correta: "B",
    explicacao: "A casa é asilo inviolável. Sem consentimento do morador, só se entra em flagrante delito, desastre ou para prestar socorro (a qualquer hora) ou, durante o dia, por determinação judicial.",
    conceito: "Exceções à inviolabilidade do domicílio e a restrição de horário da ordem judicial.",
    lembrar: "Ordem judicial = só de dia. Flagrante, desastre e socorro = qualquer hora.",
    referencia: "CF/1988, art. 5º, XI.",
  },
  {
    ...base,
    id: "dc-prisao-01",
    disciplina: "Direito Constitucional",
    tema: "Direitos do preso",
    enunciado: "De acordo com a Constituição Federal, assinale a alternativa correta sobre a prisão e os direitos do preso.",
    alternativas: {
      A: {
        text: "A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada.",
        why: "Correta. É a redação do direito à comunicação imediata da prisão.",
      },
      B: {
        text: "A prisão deve ser comunicada em até 72 horas ao Ministério Público, que avisará a família.",
        why: "Errada. A comunicação é imediata e dirigida ao juiz competente e à família ou pessoa indicada.",
      },
      C: {
        text: "O preso pode permanecer calado, mas o silêncio poderá ser interpretado em prejuízo da defesa.",
        why: "Errada. O silêncio é um direito; o CPP afirma expressamente que ele não pode ser interpretado em prejuízo da defesa.",
      },
      D: {
        text: "Fora do flagrante, a prisão pode decorrer de ordem verbal do delegado, desde que registrada depois.",
        why: "Errada. Fora do flagrante (e das exceções militares), a prisão exige ordem escrita e fundamentada de autoridade judiciária competente.",
      },
      E: {
        text: "O preso não tem direito de saber quem foram os responsáveis por sua prisão.",
        why: "Errada. O preso tem direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial.",
      },
    },
    correta: "A",
    explicacao: "A Constituição garante ao preso: comunicação imediata da prisão ao juiz e à família, informação sobre seus direitos (inclusive permanecer calado), assistência da família e de advogado e identificação dos responsáveis pela prisão.",
    conceito: "Garantias constitucionais do preso.",
    lembrar: "Comunicação da prisão: imediata, ao juiz e à família (ou pessoa indicada).",
    referencia: "CF/1988, art. 5º, LXI a LXIV; CPP, art. 186, parágrafo único.",
  },
  {
    ...base,
    id: "dc-seguranca-01",
    disciplina: "Direito Constitucional",
    tema: "Segurança pública",
    enunciado: "Segundo a Constituição Federal, às polícias civis incumbem:",
    alternativas: {
      A: {
        text: "o policiamento ostensivo e a preservação da ordem pública.",
        why: "Errada. Essas funções cabem às polícias militares.",
      },
      B: {
        text: "a apuração de infrações penais militares, sob direção de oficiais de carreira.",
        why: "Errada. As infrações militares estão expressamente excluídas, e as polícias civis são dirigidas por delegados de carreira.",
      },
      C: {
        text: "exercer com exclusividade as funções de polícia judiciária da União.",
        why: "Errada. Essa atribuição é da Polícia Federal.",
      },
      D: {
        text: "ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.",
        why: "Correta. É a atribuição constitucional das polícias civis, dirigidas por delegados de polícia de carreira.",
      },
      E: {
        text: "o patrulhamento ostensivo das rodovias federais.",
        why: "Errada. Essa função é da Polícia Rodoviária Federal.",
      },
    },
    correta: "D",
    explicacao: "O art. 144 distribui as funções de segurança pública. Polícias civis: polícia judiciária e apuração de infrações penais (exceto militares), ressalvada a competência da União.",
    conceito: "Repartição constitucional de atribuições entre os órgãos de segurança pública.",
    lembrar: "Civil investiga (polícia judiciária). Militar faz policiamento ostensivo.",
    referencia: "CF/1988, art. 144, § 4º.",
  },
  {
    ...base,
    id: "dc-remedios-01",
    disciplina: "Direito Constitucional",
    tema: "Remédios constitucionais",
    enunciado: "Qual ação constitucional assegura o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público?",
    alternativas: {
      A: {
        text: "Habeas corpus.",
        why: "Errada. O habeas corpus protege a liberdade de locomoção.",
      },
      B: {
        text: "Mandado de segurança.",
        why: "Errada. O mandado de segurança protege direito líquido e certo não amparado por habeas corpus ou habeas data.",
      },
      C: {
        text: "Habeas data.",
        why: "Correta. O habeas data serve para conhecer e retificar informações pessoais em registros públicos ou de caráter público.",
      },
      D: {
        text: "Mandado de injunção.",
        why: "Errada. O mandado de injunção combate a falta de norma regulamentadora que inviabilize um direito.",
      },
      E: {
        text: "Ação popular.",
        why: "Errada. A ação popular busca anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente ou ao patrimônio histórico e cultural.",
      },
    },
    correta: "C",
    explicacao: "Cada remédio constitucional protege um bem específico. Informações sobre a própria pessoa em bancos de dados públicos: habeas data.",
    conceito: "Objeto de cada remédio constitucional.",
    lembrar: "Habeas data = dados sobre mim. Habeas corpus = meu corpo (liberdade de ir e vir).",
    referencia: "CF/1988, art. 5º, LXVIII a LXXIII.",
  },
  {
    ...base,
    id: "dc-racismo-01",
    disciplina: "Direito Constitucional",
    tema: "Direitos fundamentais",
    enunciado: "Conforme a Constituição Federal, a prática do racismo constitui crime:",
    alternativas: {
      A: {
        text: "afiançável e imprescritível.",
        why: "Errada. O racismo é inafiançável.",
      },
      B: {
        text: "inafiançável e imprescritível, sujeito à pena de reclusão.",
        why: "Correta. É exatamente o tratamento dado pela Constituição ao racismo.",
      },
      C: {
        text: "inafiançável e insuscetível de graça ou anistia, mas prescritível.",
        why: "Errada. Esse tratamento é o da tortura, do tráfico, do terrorismo e dos crimes hediondos, não o do racismo.",
      },
      D: {
        text: "prescritível, sujeito à pena de detenção.",
        why: "Errada. O racismo é imprescritível e sujeito à reclusão.",
      },
      E: {
        text: "afiançável, desde que o réu seja primário.",
        why: "Errada. A Constituição não faz essa ressalva; o crime é inafiançável.",
      },
    },
    correta: "B",
    explicacao: "Apenas dois crimes são imprescritíveis na Constituição: racismo e ação de grupos armados contra a ordem constitucional e o Estado Democrático. O racismo também é inafiançável e sujeito a reclusão.",
    conceito: "Mandados constitucionais de criminalização.",
    lembrar: "Imprescritíveis: racismo e ação de grupos armados (RAÇA e AÇÃO).",
    referencia: "CF/1988, art. 5º, XLII a XLIV.",
  },

  // ───────────── Direito Administrativo ─────────────
  {
    ...base,
    id: "da-principios-01",
    disciplina: "Direito Administrativo",
    tema: "Princípios da Administração",
    enunciado: "Qual das alternativas NÃO apresenta princípio expresso no caput do art. 37 da Constituição Federal?",
    alternativas: {
      A: {
        text: "Legalidade.",
        why: "Errada como resposta: a legalidade está expressa no caput do art. 37.",
      },
      B: {
        text: "Impessoalidade.",
        why: "Errada como resposta: a impessoalidade está expressa no caput do art. 37.",
      },
      C: {
        text: "Razoabilidade.",
        why: "Correta. A razoabilidade é princípio reconhecido pela doutrina e pela Lei 9.784/1999, mas não consta do caput do art. 37.",
      },
      D: {
        text: "Publicidade.",
        why: "Errada como resposta: a publicidade está expressa no caput do art. 37.",
      },
      E: {
        text: "Eficiência.",
        why: "Errada como resposta: a eficiência foi incluída no caput do art. 37 pela EC 19/1998.",
      },
    },
    correta: "C",
    explicacao: "O caput do art. 37 lista cinco princípios: legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE). Outros, como razoabilidade e proporcionalidade, são implícitos na Constituição.",
    conceito: "Princípios expressos × princípios implícitos.",
    lembrar: "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.",
    referencia: "CF/1988, art. 37, caput; Lei 9.784/1999, art. 2º.",
  },
  {
    ...base,
    id: "da-atributos-01",
    disciplina: "Direito Administrativo",
    tema: "Atributos do ato administrativo",
    enunciado: "O atributo que permite à Administração executar suas próprias decisões diretamente, sem necessidade de prévia autorização judicial, é a:",
    alternativas: {
      A: {
        text: "imperatividade.",
        why: "Errada. Imperatividade é impor obrigações a terceiros independentemente de concordância; não trata da execução direta.",
      },
      B: {
        text: "presunção de legitimidade.",
        why: "Errada. A presunção de legitimidade faz o ato ser tido como válido até prova em contrário.",
      },
      C: {
        text: "tipicidade.",
        why: "Errada. Tipicidade significa que o ato deve corresponder a uma figura prevista em lei.",
      },
      D: {
        text: "motivação.",
        why: "Errada. Motivação é a exposição dos fundamentos do ato, não um atributo de execução.",
      },
      E: {
        text: "autoexecutoriedade.",
        why: "Correta. A autoexecutoriedade permite executar a decisão por meios próprios, sem recorrer previamente ao Judiciário.",
      },
    },
    correta: "E",
    explicacao: "Os atributos clássicos do ato administrativo são presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade. A execução direta, sem ordem judicial prévia, é a autoexecutoriedade.",
    conceito: "Atributos do ato administrativo.",
    lembrar: "Auto-executar = a própria Administração executa.",
    referencia: "Doutrina de Direito Administrativo — atributos do ato administrativo.",
  },
  {
    ...base,
    id: "da-anulacao-01",
    disciplina: "Direito Administrativo",
    tema: "Anulação e revogação",
    enunciado: "Sobre o desfazimento dos atos administrativos, assinale a alternativa correta.",
    alternativas: {
      A: {
        text: "A revogação é o desfazimento de ato ilegal.",
        why: "Errada. Ato ilegal é anulado; a revogação recai sobre ato válido.",
      },
      B: {
        text: "A revogação incide sobre atos válidos, por razões de conveniência e oportunidade.",
        why: "Correta. Revogar é retirar ato legal que deixou de ser conveniente ou oportuno, respeitados os direitos adquiridos.",
      },
      C: {
        text: "A anulação de atos administrativos só pode ser feita pelo Poder Judiciário.",
        why: "Errada. A própria Administração pode anular seus atos ilegais (autotutela).",
      },
      D: {
        text: "O Poder Judiciário pode revogar atos do Poder Executivo por discordar de sua conveniência.",
        why: "Errada. O Judiciário controla a legalidade dos atos de outro Poder; não revoga por mérito administrativo.",
      },
      E: {
        text: "A revogação produz efeitos retroativos (ex tunc).",
        why: "Errada. A revogação produz efeitos a partir de sua edição (ex nunc).",
      },
    },
    correta: "B",
    explicacao: "Anulação: por ilegalidade, pela Administração ou pelo Judiciário. Revogação: por conveniência e oportunidade, apenas pela Administração que praticou o ato, sem retroagir.",
    conceito: "Autotutela administrativa: anular o ilegal, revogar o inconveniente.",
    lembrar: "Ilegal → anula. Inconveniente → revoga (e só daqui para frente).",
    referencia: "Súmula 473 do STF; Lei 9.784/1999, art. 53.",
  },
  {
    ...base,
    id: "da-poderes-01",
    disciplina: "Direito Administrativo",
    tema: "Poderes administrativos",
    enunciado: "Ao condicionar e restringir o exercício de atividades e direitos individuais em benefício do interesse público, a Administração exerce o poder:",
    alternativas: {
      A: {
        text: "hierárquico.",
        why: "Errada. O poder hierárquico organiza a relação de subordinação interna entre órgãos e agentes.",
      },
      B: {
        text: "disciplinar.",
        why: "Errada. O poder disciplinar pune infrações de servidores e de quem tem vínculo especial com a Administração.",
      },
      C: {
        text: "de polícia.",
        why: "Correta. O poder de polícia limita a liberdade e a propriedade em favor do interesse público.",
      },
      D: {
        text: "regulamentar.",
        why: "Errada. O poder regulamentar serve para editar normas que permitem a fiel execução das leis.",
      },
      E: {
        text: "vinculado.",
        why: "Errada. “Vinculado” descreve a atuação sem margem de escolha, não a restrição a direitos individuais.",
      },
    },
    correta: "C",
    explicacao: "Poder de polícia é a atividade que limita direitos individuais em prol do interesse coletivo — por exemplo, fiscalização sanitária ou de trânsito. Não se confunde com a polícia judiciária, que investiga infrações penais.",
    conceito: "Poder de polícia administrativa × polícia judiciária.",
    lembrar: "Poder de polícia restringe atividades particulares; polícia judiciária apura crimes.",
    referencia: "Código Tributário Nacional, art. 78.",
  },
  {
    ...base,
    id: "da-responsabilidade-01",
    disciplina: "Direito Administrativo",
    tema: "Responsabilidade civil do Estado",
    enunciado: "Conforme a Constituição Federal, assinale a alternativa correta sobre a responsabilidade civil do Estado.",
    alternativas: {
      A: {
        text: "A responsabilidade do Estado por atos de seus agentes depende da comprovação de culpa do agente.",
        why: "Errada. Na regra constitucional, a responsabilidade do Estado é objetiva: independe de culpa.",
      },
      B: {
        text: "O direito de regresso contra o agente independe de dolo ou culpa.",
        why: "Errada. O regresso contra o agente exige dolo ou culpa.",
      },
      C: {
        text: "As pessoas jurídicas de direito público respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o regresso contra o responsável nos casos de dolo ou culpa.",
        why: "Correta. É a regra da responsabilidade objetiva do Estado, com regresso subjetivo contra o agente.",
      },
      D: {
        text: "Pessoas jurídicas de direito privado prestadoras de serviço público nunca respondem objetivamente.",
        why: "Errada. A Constituição as inclui expressamente na responsabilidade objetiva.",
      },
      E: {
        text: "A vítima deve acionar primeiro o agente público e, só depois, o Estado.",
        why: "Errada. A ação é proposta contra o Estado; o agente responde depois, em regresso.",
      },
    },
    correta: "C",
    explicacao: "O Estado responde objetivamente: a vítima prova o dano e o nexo com a atuação do agente, sem precisar demonstrar culpa. O Estado, depois, pode cobrar do agente que agiu com dolo ou culpa.",
    conceito: "Responsabilidade objetiva do Estado e regresso subjetivo.",
    lembrar: "Vítima × Estado: objetiva. Estado × agente: precisa de dolo ou culpa.",
    referencia: "CF/1988, art. 37, § 6º.",
  },

  // ───────────── Direito Penal ─────────────
  {
    ...base,
    id: "dp-legitima-01",
    disciplina: "Direito Penal",
    tema: "Excludentes de ilicitude",
    enunciado: "Segundo o Código Penal, age em legítima defesa quem:",
    alternativas: {
      A: {
        text: "pratica o fato para salvar de perigo atual, que não provocou por sua vontade, direito próprio ou alheio.",
        why: "Errada. Essa é a definição de estado de necessidade, não de legítima defesa.",
      },
      B: {
        text: "repele agressão futura e certa, usando qualquer meio disponível.",
        why: "Errada. A agressão deve ser atual ou iminente, e os meios devem ser necessários e usados com moderação.",
      },
      C: {
        text: "repele injusta agressão, atual ou iminente, apenas a direito próprio.",
        why: "Errada. A legítima defesa também protege direito de terceiros.",
      },
      D: {
        text: "usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.",
        why: "Correta. É a definição legal de legítima defesa.",
      },
      E: {
        text: "reage a qualquer agressão, justa ou injusta, desde que atual.",
        why: "Errada. Só cabe legítima defesa contra agressão injusta.",
      },
    },
    correta: "D",
    explicacao: "Legítima defesa exige: agressão injusta, atual ou iminente, a direito próprio ou alheio, repelida com meios necessários usados moderadamente.",
    conceito: "Requisitos da legítima defesa × estado de necessidade.",
    lembrar: "Legítima defesa reage a AGRESSÃO. Estado de necessidade reage a PERIGO.",
    referencia: "Código Penal, arts. 24 e 25.",
  },
  {
    ...base,
    id: "dp-tentativa-01",
    disciplina: "Direito Penal",
    tema: "Tentativa",
    enunciado: "Segundo o Código Penal, diz-se o crime tentado quando:",
    alternativas: {
      A: {
        text: "iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente.",
        why: "Correta. É a definição legal de tentativa.",
      },
      B: {
        text: "o agente, voluntariamente, desiste de prosseguir na execução.",
        why: "Errada. Isso é desistência voluntária: o agente responde apenas pelos atos já praticados.",
      },
      C: {
        text: "o agente pratica apenas atos preparatórios.",
        why: "Errada. A tentativa exige início da execução; atos preparatórios, em regra, não são puníveis.",
      },
      D: {
        text: "por ineficácia absoluta do meio, é impossível consumar o crime.",
        why: "Errada. Esse é o crime impossível, que não é punível.",
      },
      E: {
        text: "o agente recebe, em regra, a mesma pena do crime consumado, sem redução.",
        why: "Errada. Salvo disposição em contrário, a tentativa é punida com a pena do crime consumado reduzida de um a dois terços.",
      },
    },
    correta: "A",
    explicacao: "Na tentativa, a execução começa, mas o resultado não ocorre por algo que escapa à vontade do agente. Se é o próprio agente que interrompe, fala-se em desistência voluntária ou arrependimento eficaz.",
    conceito: "Tentativa × desistência voluntária × crime impossível.",
    lembrar: "Tentativa: “quero, mas não consigo”. Desistência: “posso, mas não quero”.",
    referencia: "Código Penal, arts. 14, II e parágrafo único; 15; 17.",
  },
  {
    ...base,
    id: "dp-roubo-01",
    disciplina: "Direito Penal",
    tema: "Crimes contra o patrimônio",
    enunciado: "Fulano aponta uma faca para Beltrano e retira dele o celular, fugindo em seguida. Em tese, a conduta de Fulano configura:",
    alternativas: {
      A: {
        text: "furto.",
        why: "Errada. O furto é a subtração sem violência ou grave ameaça à pessoa.",
      },
      B: {
        text: "estelionato.",
        why: "Errada. No estelionato, a vítima é enganada (fraude) e entrega a vantagem; aqui houve ameaça.",
      },
      C: {
        text: "apropriação indébita.",
        why: "Errada. Na apropriação indébita, o agente já tinha a posse legítima da coisa e passa a agir como dono.",
      },
      D: {
        text: "roubo.",
        why: "Correta. Subtrair coisa alheia móvel mediante grave ameaça ou violência à pessoa caracteriza roubo.",
      },
      E: {
        text: "dano.",
        why: "Errada. O crime de dano consiste em destruir, inutilizar ou deteriorar coisa alheia, não em subtraí-la.",
      },
    },
    correta: "D",
    explicacao: "A diferença central entre furto e roubo é o meio: no roubo há grave ameaça ou violência contra a pessoa (ou redução de sua capacidade de resistência).",
    conceito: "Furto × roubo.",
    lembrar: "Subtraiu com ameaça ou violência à pessoa → roubo. Sem isso → furto.",
    referencia: "Código Penal, arts. 155 e 157.",
  },
  {
    ...base,
    id: "dp-concussao-01",
    disciplina: "Direito Penal",
    tema: "Crimes contra a Administração Pública",
    enunciado: "O funcionário público que EXIGE, para si, vantagem indevida em razão da função comete, em tese, o crime de:",
    alternativas: {
      A: {
        text: "corrupção passiva.",
        why: "Errada. Na corrupção passiva, o funcionário solicita, recebe ou aceita promessa de vantagem; não exige.",
      },
      B: {
        text: "concussão.",
        why: "Correta. O verbo “exigir” caracteriza a concussão.",
      },
      C: {
        text: "peculato.",
        why: "Errada. No peculato, o funcionário se apropria ou desvia bem de que tem a posse em razão do cargo.",
      },
      D: {
        text: "prevaricação.",
        why: "Errada. Na prevaricação, o funcionário retarda, deixa de praticar ou pratica ato de ofício para satisfazer interesse ou sentimento pessoal.",
      },
      E: {
        text: "corrupção ativa.",
        why: "Errada. A corrupção ativa é praticada pelo particular que oferece ou promete vantagem ao funcionário.",
      },
    },
    correta: "B",
    explicacao: "Os crimes funcionais se distinguem pelo verbo. Exigir = concussão. Solicitar, receber ou aceitar promessa = corrupção passiva. Oferecer ou prometer (particular) = corrupção ativa.",
    conceito: "Verbos nucleares dos crimes contra a Administração Pública.",
    lembrar: "Exigiu → concussão. Pediu → corrupção passiva.",
    referencia: "Código Penal, arts. 312, 316, 317, 319 e 333.",
  },
  {
    ...base,
    id: "dp-tempo-01",
    disciplina: "Direito Penal",
    tema: "Lei penal no tempo",
    enunciado: "Sobre a aplicação da lei penal no tempo, assinale a alternativa correta segundo o Código Penal.",
    alternativas: {
      A: {
        text: "A lei posterior que de qualquer modo favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.",
        why: "Correta. A lei mais benéfica retroage, mesmo após o trânsito em julgado.",
      },
      B: {
        text: "A lei posterior mais benéfica não se aplica a fatos já decididos por sentença transitada em julgado.",
        why: "Errada. O Código Penal prevê a retroatividade benéfica mesmo após o trânsito em julgado.",
      },
      C: {
        text: "A lei penal mais grave retroage para alcançar fatos anteriores ainda não julgados.",
        why: "Errada. A lei penal mais grave não retroage.",
      },
      D: {
        text: "Na abolitio criminis, cessa a execução da pena, mas permanecem todos os efeitos penais da condenação.",
        why: "Errada. Com a abolitio criminis, cessam a execução e os efeitos penais da sentença condenatória.",
      },
      E: {
        text: "Considera-se praticado o crime no momento em que se produz o resultado.",
        why: "Errada. Quanto ao tempo do crime, o Código Penal adota a teoria da atividade: o momento da ação ou omissão.",
      },
    },
    correta: "A",
    explicacao: "A lei penal não retroage, salvo para beneficiar o réu. Se a nova lei deixa de considerar o fato crime (abolitio criminis), cessam a execução e os efeitos penais da condenação.",
    conceito: "Irretroatividade da lei mais grave e retroatividade da lei benéfica.",
    lembrar: "Lei melhor volta no tempo, até depois do trânsito em julgado. Lei pior, nunca.",
    referencia: "CF/1988, art. 5º, XL; Código Penal, arts. 2º e 4º.",
  },

  // ───────────── Direito Processual Penal ─────────────
  {
    ...base,
    id: "dpp-inquerito-01",
    disciplina: "Direito Processual Penal",
    tema: "Inquérito policial",
    enunciado: "Sobre o inquérito policial, assinale a alternativa correta segundo o Código de Processo Penal.",
    alternativas: {
      A: {
        text: "O inquérito é indispensável para o oferecimento da denúncia.",
        why: "Errada. O inquérito é dispensável quando o titular da ação já dispõe de elementos suficientes.",
      },
      B: {
        text: "Nos crimes de ação penal pública incondicionada, o inquérito só pode ser instaurado a requerimento do ofendido.",
        why: "Errada. Nesses crimes, o inquérito pode ser instaurado de ofício pela autoridade policial.",
      },
      C: {
        text: "A autoridade policial não poderá mandar arquivar autos de inquérito.",
        why: "Correta. O CPP proíbe expressamente que a autoridade policial arquive o inquérito.",
      },
      D: {
        text: "O inquérito policial está sujeito, obrigatoriamente, ao contraditório pleno.",
        why: "Errada. O inquérito é procedimento investigativo, de natureza inquisitiva; o contraditório pleno é próprio do processo.",
      },
      E: {
        text: "Pela regra geral do CPP, o inquérito com indiciado preso deve terminar em 30 dias.",
        why: "Errada. Pela regra geral do CPP, o prazo é de 10 dias com indiciado preso e de 30 dias com indiciado solto.",
      },
    },
    correta: "C",
    explicacao: "O inquérito é procedimento administrativo, inquisitivo e dispensável, presidido pela autoridade policial. Uma vez instaurado, a autoridade policial não pode arquivá-lo por conta própria.",
    conceito: "Características do inquérito policial.",
    lembrar: "Delegado instaura, mas não arquiva.",
    referencia: "Código de Processo Penal, arts. 5º, 10 e 17.",
  },
  {
    ...base,
    id: "dpp-flagrante-01",
    disciplina: "Direito Processual Penal",
    tema: "Prisão em flagrante",
    enunciado: "Considera-se em flagrante delito quem é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração. A doutrina chama essa hipótese de flagrante:",
    alternativas: {
      A: {
        text: "próprio.",
        why: "Errada. Flagrante próprio é quando o agente está cometendo a infração ou acaba de cometê-la.",
      },
      B: {
        text: "impróprio.",
        why: "Errada. Flagrante impróprio (quase-flagrante) é quando o agente é perseguido logo após o fato.",
      },
      C: {
        text: "preparado.",
        why: "Errada. Flagrante preparado é quando alguém induz o agente a cometer o crime e impede a consumação; é tratado como crime impossível (Súmula 145 do STF).",
      },
      D: {
        text: "diferido.",
        why: "Errada. Flagrante diferido (ação controlada) é o retardamento da intervenção policial autorizado em lei.",
      },
      E: {
        text: "presumido.",
        why: "Correta. Ser encontrado logo depois com objetos que façam presumir a autoria é o flagrante presumido (ou ficto).",
      },
    },
    correta: "E",
    explicacao: "O art. 302 do CPP traz quatro situações: está cometendo e acaba de cometer (próprio), é perseguido logo após (impróprio) e é encontrado logo depois com objetos (presumido).",
    conceito: "Espécies de flagrante.",
    lembrar: "Cometendo → próprio. Perseguido → impróprio. Encontrado com objetos → presumido.",
    referencia: "Código de Processo Penal, art. 302; Súmula 145 do STF.",
  },
  {
    ...base,
    id: "dpp-flagrante-02",
    disciplina: "Direito Processual Penal",
    tema: "Prisão em flagrante",
    enunciado: "Segundo o Código de Processo Penal, quanto a prender quem seja encontrado em flagrante delito:",
    alternativas: {
      A: {
        text: "qualquer do povo deverá prender, sob pena de responsabilidade.",
        why: "Errada. Para qualquer do povo, a prisão em flagrante é uma faculdade (“poderá”).",
      },
      B: {
        text: "somente as autoridades policiais poderão prender, vedada a prisão por particulares.",
        why: "Errada. Qualquer do povo pode prender em flagrante.",
      },
      C: {
        text: "qualquer do povo poderá, e as autoridades policiais e seus agentes deverão prender.",
        why: "Correta. Para o particular é faculdade; para a autoridade policial e seus agentes, é dever.",
      },
      D: {
        text: "os agentes de polícia poderão prender, a seu critério.",
        why: "Errada. Para a autoridade policial e seus agentes, a prisão em flagrante é obrigatória.",
      },
      E: {
        text: "a prisão depende de mandado judicial expedido em até 24 horas.",
        why: "Errada. A prisão em flagrante dispensa mandado judicial.",
      },
    },
    correta: "C",
    explicacao: "O flagrante facultativo é o do particular; o obrigatório é o da autoridade policial e de seus agentes.",
    conceito: "Flagrante facultativo × flagrante obrigatório.",
    lembrar: "Povo PODE. Polícia DEVE.",
    referencia: "Código de Processo Penal, art. 301.",
  },
  {
    ...base,
    id: "dpp-acao-01",
    disciplina: "Direito Processual Penal",
    tema: "Ação penal e início do inquérito",
    enunciado: "Assinale a alternativa correta segundo o Código de Processo Penal.",
    alternativas: {
      A: {
        text: "Nos crimes de ação penal pública condicionada à representação, o inquérito não poderá ser iniciado sem ela.",
        why: "Correta. Sem a representação do ofendido, a autoridade não pode instaurar o inquérito nesses crimes.",
      },
      B: {
        text: "Nos crimes de ação penal privada, a autoridade policial instaura o inquérito de ofício.",
        why: "Errada. Na ação privada, o inquérito depende de requerimento de quem tenha qualidade para intentá-la.",
      },
      C: {
        text: "A representação é retratável a qualquer tempo, mesmo depois de oferecida a denúncia.",
        why: "Errada. A representação é irretratável depois de oferecida a denúncia.",
      },
      D: {
        text: "O Ministério Público pode desistir da ação penal pública já proposta.",
        why: "Errada. O CPP veda a desistência da ação penal pelo Ministério Público.",
      },
      E: {
        text: "Nos crimes de ação pública incondicionada, a instauração do inquérito depende de requisição do juiz.",
        why: "Errada. Nesses crimes, o inquérito pode ser instaurado de ofício pela autoridade policial.",
      },
    },
    correta: "A",
    explicacao: "O modo de iniciar o inquérito acompanha o tipo de ação penal: de ofício na pública incondicionada; com representação na condicionada; com requerimento do ofendido na privada.",
    conceito: "Condições para instaurar o inquérito conforme a ação penal.",
    lembrar: "Condicionada sem representação = inquérito não começa.",
    referencia: "Código de Processo Penal, arts. 5º, 25 e 42.",
  },
  {
    ...base,
    id: "dpp-custodia-01",
    disciplina: "Direito Processual Penal",
    tema: "Provas",
    enunciado: "O conjunto de procedimentos usados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes, para rastrear sua posse e manuseio desde o reconhecimento até o descarte, é denominado:",
    alternativas: {
      A: {
        text: "exame de corpo de delito.",
        why: "Errada. O exame de corpo de delito é a perícia sobre os vestígios materiais da infração.",
      },
      B: {
        text: "busca e apreensão.",
        why: "Errada. Busca e apreensão é o meio de procurar e recolher coisas ou pessoas.",
      },
      C: {
        text: "acareação.",
        why: "Errada. Acareação é o confronto entre pessoas com declarações divergentes.",
      },
      D: {
        text: "cadeia de custódia.",
        why: "Correta. É a definição legal de cadeia de custódia.",
      },
      E: {
        text: "reconhecimento de coisas.",
        why: "Errada. O reconhecimento é o procedimento para identificar uma pessoa ou coisa.",
      },
    },
    correta: "D",
    explicacao: "A cadeia de custódia garante a rastreabilidade do vestígio, do reconhecimento ao descarte, preservando sua idoneidade como prova.",
    conceito: "Cadeia de custódia da prova.",
    lembrar: "Custódia = guarda: quem tocou no vestígio, quando e como.",
    referencia: "Código de Processo Penal, arts. 158-A a 158-F.",
  },

  // ───────────── Raciocínio Lógico ─────────────
  {
    ...base,
    id: "rl-negacao-01",
    disciplina: "Raciocínio Lógico",
    tema: "Negação de proposições",
    enunciado: "A negação lógica de “Todos os agentes são pontuais” é:",
    alternativas: {
      A: {
        text: "Nenhum agente é pontual.",
        why: "Errada. Essa é a contrária, não a negação. Basta um agente impontual para negar a frase original.",
      },
      B: {
        text: "Algum agente é pontual.",
        why: "Errada. Essa frase é compatível com a original; não a nega.",
      },
      C: {
        text: "Algum agente não é pontual.",
        why: "Correta. Para negar “todos são”, basta que pelo menos um não seja.",
      },
      D: {
        text: "Nenhum pontual é agente.",
        why: "Errada. Equivale a “nenhum agente é pontual”, que é a contrária, não a negação.",
      },
      E: {
        text: "Os pontuais são todos agentes.",
        why: "Errada. É uma inversão de termos, sem relação de negação com a frase original.",
      },
    },
    correta: "C",
    explicacao: "A negação de uma universal afirmativa (“todo A é B”) é uma particular negativa (“algum A não é B”).",
    conceito: "Negação de quantificadores.",
    lembrar: "Negar “todos” = mostrar que existe pelo menos um que não.",
    referencia: "Lógica proposicional — quantificadores.",
  },
  {
    ...base,
    id: "rl-condicional-01",
    disciplina: "Raciocínio Lógico",
    tema: "Negação do condicional",
    enunciado: "A negação de “Se chove, então a rua fica molhada” é:",
    alternativas: {
      A: {
        text: "Se não chove, então a rua não fica molhada.",
        why: "Errada. Essa é a inversa do condicional, que não equivale à sua negação.",
      },
      B: {
        text: "Chove e a rua não fica molhada.",
        why: "Correta. O condicional “se p, então q” só é falso quando p é verdadeiro e q é falso: p e não q.",
      },
      C: {
        text: "Não chove e a rua fica molhada.",
        why: "Errada. Esse cenário não torna o condicional falso.",
      },
      D: {
        text: "Chove ou a rua não fica molhada.",
        why: "Errada. A negação usa o conectivo “e”, não “ou”.",
      },
      E: {
        text: "Se a rua não fica molhada, então não chove.",
        why: "Errada. Essa é a contrapositiva, equivalente à frase original, não sua negação.",
      },
    },
    correta: "B",
    explicacao: "~(p → q) ≡ p ∧ ~q. Mantém-se o antecedente, nega-se o consequente e troca-se “se… então” por “e”.",
    conceito: "Negação do condicional.",
    lembrar: "Negar “se p, então q”: “p E não q” (mantém a primeira, nega a segunda).",
    referencia: "Lógica proposicional — equivalências e negações.",
  },
  {
    ...base,
    id: "rl-equivalencia-01",
    disciplina: "Raciocínio Lógico",
    tema: "Equivalências lógicas",
    enunciado: "Uma proposição logicamente equivalente a “Se estudo, então passo” é:",
    alternativas: {
      A: {
        text: "Se passo, então estudo.",
        why: "Errada. Essa é a recíproca, que não é equivalente.",
      },
      B: {
        text: "Se não estudo, então não passo.",
        why: "Errada. Essa é a inversa, que não é equivalente.",
      },
      C: {
        text: "Estudo e não passo.",
        why: "Errada. Essa é a negação da proposição original.",
      },
      D: {
        text: "Não estudo ou passo.",
        why: "Correta. p → q equivale a ~p ∨ q.",
      },
      E: {
        text: "Estudo ou passo.",
        why: "Errada. “p ou q” não equivale a “p → q”: com p falso e q falso, o condicional é verdadeiro e a disjunção é falsa.",
      },
    },
    correta: "D",
    explicacao: "O condicional p → q tem duas equivalências clássicas: a contrapositiva (~q → ~p) e a disjunção (~p ∨ q).",
    conceito: "Equivalências do condicional.",
    lembrar: "“Se p, então q” = “não p ou q” = “se não q, então não p”.",
    referencia: "Lógica proposicional — equivalências.",
  },
  {
    ...base,
    id: "rl-porcentagem-01",
    disciplina: "Raciocínio Lógico",
    tema: "Porcentagem",
    enunciado: "Uma equipe tinha 40 agentes. 25% deles foram transferidos e, em seguida, a equipe recebeu 6 novos agentes. Quantos agentes a equipe tem agora?",
    alternativas: {
      A: {
        text: "30",
        why: "Errada. 30 é o número após a transferência; faltou somar os 6 novos agentes.",
      },
      B: {
        text: "34",
        why: "Errada. Resultado de cálculo incorreto da transferência.",
      },
      C: {
        text: "36",
        why: "Correta. 25% de 40 = 10. 40 − 10 = 30. 30 + 6 = 36.",
      },
      D: {
        text: "40",
        why: "Errada. A equipe perdeu 10 e recebeu 6; o total não volta a 40.",
      },
      E: {
        text: "46",
        why: "Errada. Esse valor ignora a transferência e apenas soma os 6 novos agentes.",
      },
    },
    correta: "C",
    explicacao: "Calcule a porcentagem sobre o total inicial e aplique as mudanças na ordem em que acontecem.",
    conceito: "Porcentagem de um valor e operações sucessivas.",
    lembrar: "25% = 1/4. Quarta parte de 40 = 10.",
    referencia: "Matemática básica — porcentagem.",
  },
  {
    ...base,
    id: "rl-combinacao-01",
    disciplina: "Raciocínio Lógico",
    tema: "Análise combinatória",
    enunciado: "De um grupo de 6 agentes, 3 serão escolhidos para uma diligência, sem distinção de função entre eles. Quantas equipes diferentes podem ser formadas?",
    alternativas: {
      A: {
        text: "18",
        why: "Errada. Multiplicar 6 por 3 não conta as combinações possíveis.",
      },
      B: {
        text: "20",
        why: "Correta. Como a ordem não importa: C(6,3) = 6! / (3! · 3!) = 20.",
      },
      C: {
        text: "60",
        why: "Errada. Não corresponde a nenhuma contagem correta para esse problema.",
      },
      D: {
        text: "120",
        why: "Errada. 120 = 6 × 5 × 4 é o arranjo, que considera a ordem. Aqui a ordem não importa.",
      },
      E: {
        text: "216",
        why: "Errada. 216 = 6³ permitiria repetir o mesmo agente, o que não faz sentido.",
      },
    },
    correta: "B",
    explicacao: "Quando a ordem dos escolhidos não importa (não há funções diferentes), usa-se combinação. Se houvesse funções distintas, seria arranjo.",
    conceito: "Combinação × arranjo.",
    lembrar: "A ordem importa? Arranjo. Não importa? Combinação (divide pelas repetições de ordem).",
    referencia: "Matemática básica — análise combinatória.",
  },
]

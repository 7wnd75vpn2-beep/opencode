import { make } from "./make"

const q = make("Direito Administrativo")

export const ADMINISTRATIVO = [
  q({
    id: "da-delegacao-recurso",
    tema: "Delegação e avocação",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Para reduzir o volume de trabalho, o chefe de Polícia editou portaria delegando ao diretor de uma regional a competência para decidir os recursos administrativos interpostos contra atos dos delegados daquela região. Considerando essa situação hipotética e a Lei 9.784/1999, assinale a opção correta.",
    alternativas: [
      [
        "A delegação é válida, pois a lei permite delegar competência a órgão não subordinado, desde que haja conveniência.",
        "Errada. Ainda que a delegação a órgão não subordinado seja possível em tese, a decisão de recursos é indelegável.",
      ],
      [
        "A delegação é inválida, porque a decisão de recursos administrativos não pode ser objeto de delegação.",
        "Correta. A lei veda delegar atos normativos, decisão de recursos e matérias de competência exclusiva (art. 13).",
      ],
      [
        "A delegação é válida, mas as decisões tomadas pelo delegado serão consideradas editadas pelo chefe de Polícia.",
        "Errada. Na delegação válida, as decisões se consideram editadas pelo delegado (art. 14, § 3º); além disso, esta delegação é vedada.",
      ],
      [
        "A delegação é inválida apenas porque não foi publicada em diário oficial com antecedência de trinta dias.",
        "Errada. O vício central é a matéria indelegável; não existe esse prazo de antecedência.",
      ],
      [
        "A delegação é válida se for por prazo indeterminado, pois a competência delegada passa a pertencer ao delegado.",
        "Errada. A competência continua do delegante, e a delegação é revogável a qualquer tempo.",
      ],
    ],
    correta: "B",
    explicacao:
      "Não podem ser delegados: a edição de atos de caráter normativo, a decisão de recursos administrativos e as matérias de competência exclusiva. A delegação é revogável e os atos praticados por delegação consideram-se editados pelo delegado.",
    conceito: "Limites à delegação de competência.",
    lembrar: "Indelegáveis: NOR-RE-EX (normativos, recursos, exclusivos).",
    referencia: "Lei 9.784/1999, arts. 12 a 14.",
  }),
  q({
    id: "da-indireta-assertivas",
    tema: "Organização administrativa",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca da organização da administração pública, assinale a opção correta.",
    alternativas: [
      [
        "A empresa pública pode adotar qualquer forma societária, admitida a participação majoritária de capital privado.",
        "Errada. O capital da empresa pública é integralmente público.",
      ],
      [
        "A autarquia é criada por decreto do chefe do Executivo, após autorização legislativa genérica.",
        "Errada. A autarquia é criada diretamente por lei específica (CF, art. 37, XIX).",
      ],
      [
        "A sociedade de economia mista adota a forma de sociedade anônima, com maioria do capital votante pública.",
        "Correta. É o que prevê a Lei 13.303/2016, art. 4º.",
      ],
      [
        "As fundações públicas de direito privado são criadas diretamente por lei, dispensado o registro de seus atos.",
        "Errada. Nas de direito privado, a lei autoriza a instituição, que se completa com o registro.",
      ],
      [
        "Os órgãos da administração direta, como as secretarias de estado, têm personalidade jurídica própria.",
        "Errada. Órgãos não têm personalidade jurídica; integram a pessoa política.",
      ],
    ],
    correta: "C",
    explicacao:
      "Autarquia: criada por lei. Empresa pública: capital 100% público, qualquer forma societária. Sociedade de economia mista: S.A., controle (maioria do capital votante) do ente público. Órgãos: sem personalidade jurídica.",
    conceito: "Entidades da administração indireta.",
    lembrar: "Economia mista é sempre S.A.; empresa pública tem capital 100% público.",
    referencia: "CF/1988, art. 37, XIX; Lei 13.303/2016, arts. 3º e 4º.",
  }),
  q({
    id: "da-multa-autoexecutoriedade",
    tema: "Poder de polícia",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "A vigilância sanitária constatou irregularidades graves em um restaurante, interditou o estabelecimento e aplicou multa. O proprietário não pagou a multa no prazo. Considerando essa situação hipotética, assinale a opção correta quanto aos atributos do poder de polícia.",
    alternativas: [
      [
        "Tanto a interdição quanto a cobrança forçada da multa podem ser executadas diretamente pela Administração.",
        "Errada. A multa pode ser imposta, mas sua cobrança forçada exige execução judicial.",
      ],
      [
        "A interdição depende de prévia ordem judicial, por restringir o direito de propriedade do particular.",
        "Errada. A interdição é medida autoexecutória do poder de polícia.",
      ],
      [
        "A interdição pode ser executada diretamente, mas a cobrança forçada da multa exige execução judicial.",
        "Correta. A multa não é autoexecutória: se não paga, inscreve-se em dívida ativa e cobra-se judicialmente.",
      ],
      [
        "A aplicação da multa é nula, pois o poder de polícia não admite sanções pecuniárias sem lei específica estadual.",
        "Errada. O poder de polícia pode aplicar multas previstas em lei; a premissa é falsa.",
      ],
      [
        "A Administração pode reter bens do proprietário até que a multa seja paga, por força da coercibilidade.",
        "Errada. Reter bens para forçar o pagamento de multa é meio coercitivo indireto ilegítimo.",
      ],
    ],
    correta: "C",
    explicacao:
      "Autoexecutoriedade é a possibilidade de executar a decisão por meios próprios. A interdição admite execução direta; a multa, embora imposta unilateralmente, só é cobrada à força pela via judicial (execução fiscal).",
    conceito: "Autoexecutoriedade e multas.",
    lembrar: "Interdita na hora; multa não paga vai para a execução fiscal.",
    referencia: "Doutrina de Direito Administrativo; Lei 6.830/1980.",
  }),
  q({
    id: "da-imperatividade",
    tema: "Atributos do ato administrativo",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "O atributo pelo qual o ato administrativo se impõe a terceiros, independentemente de sua concordância, denomina-se",
    alternativas: [
      ["imperatividade.", "Correta. É a definição de imperatividade (poder extroverso)."],
      ["autoexecutoriedade.", "Errada. Autoexecutoriedade é executar a decisão sem prévia ordem judicial."],
      ["presunção de legitimidade.", "Errada. É a presunção de que o ato foi editado conforme a lei e é verdadeiro."],
      ["tipicidade.", "Errada. Tipicidade é a correspondência do ato a figura prevista em lei."],
      ["exigibilidade indireta.", "Errada. Exigibilidade é usar meios indiretos de coerção, como multas."],
    ],
    correta: "A",
    explicacao:
      "Imperatividade: impor obrigações sem concordância. Exigibilidade: coagir indiretamente. Autoexecutoriedade (executoriedade): coagir diretamente. Presunção de legitimidade e veracidade: o ato é tido como válido até prova em contrário.",
    conceito: "Atributos do ato administrativo.",
    lembrar: "Imperatividade = impõe. Exigibilidade = pressiona. Executoriedade = executa.",
    referencia: "Doutrina de Direito Administrativo — atributos do ato.",
  }),
  q({
    id: "da-elementos-convalidacao",
    tema: "Elementos do ato administrativo",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca dos elementos do ato administrativo e de seus vícios, assinale a opção correta.",
    alternativas: [
      [
        "O vício de finalidade pode ser convalidado pela autoridade superior, desde que não haja prejuízo a terceiros.",
        "Errada. Desvio de finalidade é vício insanável.",
      ],
      [
        "O motivo é sempre elemento vinculado, pois a lei descreve em todos os casos a situação de fato que autoriza o ato.",
        "Errada. O motivo pode ser vinculado ou discricionário.",
      ],
      [
        "O vício de competência admite convalidação, salvo quando se tratar de competência exclusiva.",
        "Correta. Competência não exclusiva admite ratificação pela autoridade competente.",
      ],
      [
        "A forma é elemento sempre discricionário, podendo o agente escolher livremente como exteriorizar o ato.",
        "Errada. A forma é, em regra, vinculada; quando essencial, seu vício é insanável.",
      ],
      [
        "O ato com objeto ilícito pode ser convalidado por ratificação, desde que haja interesse público relevante.",
        "Errada. Vício de objeto ilícito não admite convalidação.",
      ],
    ],
    correta: "C",
    explicacao:
      "São, em regra, sanáveis os vícios de competência (não exclusiva) e de forma (não essencial). Finalidade, motivo e objeto viciados não se convalidam.",
    conceito: "Vícios sanáveis e insanáveis.",
    lembrar: "Convalida: FOCO — FOrma e COmpetência. O resto, não.",
    referencia: "Lei 9.784/1999, art. 55; doutrina.",
  }),
  q({
    id: "da-motivos-exoneracao",
    tema: "Teoria dos motivos determinantes",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Um servidor ocupante de cargo em comissão foi exonerado, constando do ato que a exoneração decorria de “contenção de despesas e extinção da necessidade do cargo”. Dez dias depois, outra pessoa foi nomeada para o mesmo cargo, com a mesma remuneração. Considerando essa situação hipotética, assinale a opção correta.",
    alternativas: [
      [
        "O ato é válido, pois a exoneração de cargo em comissão é livre e dispensa qualquer motivação.",
        "Errada. Embora dispense motivação, se a Administração declarar o motivo, fica vinculada a ele.",
      ],
      [
        "O ato é nulo, pois o motivo declarado vincula a Administração e se mostrou falso.",
        "Correta. Pela teoria dos motivos determinantes, motivo falso ou inexistente invalida o ato.",
      ],
      [
        "O ato é válido, porque o Judiciário não pode examinar atos discricionários, como a exoneração ad nutum.",
        "Errada. O Judiciário examina a legalidade dos atos discricionários, inclusive a veracidade dos motivos.",
      ],
      [
        "O ato é anulável apenas se o servidor provar que a nova nomeação foi feita por motivo de perseguição pessoal.",
        "Errada. Basta a falsidade do motivo declarado; não se exige prova de perseguição.",
      ],
      [
        "O ato é válido, pois a nova nomeação é ato distinto e não interfere na validade da exoneração anterior.",
        "Errada. A nova nomeação demonstra que o motivo declarado não existia.",
      ],
    ],
    correta: "B",
    explicacao:
      "A exoneração ad nutum não exige motivação, mas, motivada, sua validade depende da existência e veracidade do motivo. A nomeação imediata de outra pessoa evidencia que a extinção da necessidade do cargo era falsa.",
    conceito: "Teoria dos motivos determinantes.",
    lembrar: "Não precisava motivar, mas motivou? O motivo tem de ser verdadeiro.",
    referencia: "Doutrina e jurisprudência do STJ sobre motivos determinantes.",
  }),
  q({
    id: "da-revogacao-efeitos",
    tema: "Anulação e revogação",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Sobre a anulação e a revogação dos atos administrativos, assinale a opção correta.",
    alternativas: [
      [
        "A revogação produz efeitos retroativos, desfazendo o ato desde a sua origem.",
        "Errada. A revogação produz efeitos para o futuro (ex nunc).",
      ],
      [
        "O Poder Judiciário, no exercício da função jurisdicional, pode revogar atos do Executivo por inconveniência.",
        "Errada. No controle externo, o Judiciário anula atos ilegais; não revoga por mérito.",
      ],
      [
        "A anulação de ato ilegal é privativa do Judiciário, sendo vedada à própria Administração.",
        "Errada. A Administração anula seus atos ilegais pela autotutela (Súmula 473 do STF).",
      ],
      [
        "A revogação alcança atos válidos, por conveniência e oportunidade, respeitados os direitos adquiridos.",
        "Correta. Súmula 473 do STF.",
      ],
      [
        "Atos vinculados podem ser revogados a qualquer tempo, pois neles não há direito adquirido do particular.",
        "Errada. Atos vinculados, em regra, não são revogáveis.",
      ],
    ],
    correta: "D",
    explicacao:
      "Anulação: por ilegalidade, pela Administração ou pelo Judiciário, com efeitos em regra retroativos. Revogação: por conveniência e oportunidade, só pela Administração, efeitos ex nunc, respeitados os direitos adquiridos. Atos vinculados e que já exauriram efeitos não se revogam.",
    conceito: "Anulação × revogação.",
    lembrar: "Ilegal → anula (volta no tempo). Inconveniente → revoga (daqui para frente).",
    referencia: "Súmula 473 do STF; Lei 9.784/1999, art. 53.",
  }),
  q({
    id: "da-decadencia-gratificacao",
    tema: "Autotutela",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Em 2018, por erro de interpretação da lei, a Administração passou a pagar a um servidor gratificação que não lhe era devida. Não houve qualquer participação ou má-fé do servidor. Em 2025, a Administração identificou a ilegalidade. Considerando essa situação hipotética e a Lei 9.784/1999, assinale a opção correta.",
    alternativas: [
      [
        "A Administração deve anular o ato e cobrar todos os valores pagos, pois ato nulo não gera efeitos.",
        "Errada. Passado o prazo decadencial sem má-fé, o ato não pode mais ser anulado.",
      ],
      [
        "O direito de anular decaiu, pois se passaram mais de cinco anos e não há má-fé comprovada.",
        "Correta. Art. 54: o direito de anular atos favoráveis decai em cinco anos, salvo má-fé.",
      ],
      [
        "A Administração pode anular o ato a qualquer tempo, pois o prazo decadencial não se aplica a pagamentos.",
        "Errada. Nos efeitos patrimoniais contínuos, o prazo conta do primeiro pagamento (art. 54, § 1º).",
      ],
      [
        "O ato só pode ser anulado pelo Judiciário, pois a Administração não pode rever atos após dois anos.",
        "Errada. O prazo da autotutela anulatória é de cinco anos, e a Administração é que o exerce.",
      ],
      [
        "A Administração deve revogar o ato, por conveniência, sem efeitos sobre os valores já recebidos.",
        "Errada. Ato ilegal não se revoga; e, no caso, o direito de anular já decaiu.",
      ],
    ],
    correta: "B",
    explicacao:
      "O direito da Administração de anular atos de que decorram efeitos favoráveis aos destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé. Nos efeitos patrimoniais contínuos, conta-se da percepção do primeiro pagamento.",
    conceito: "Decadência administrativa.",
    lembrar: "Ato favorável + boa-fé + 5 anos = não anula mais.",
    referencia: "Lei 9.784/1999, art. 54.",
  }),
  q({
    id: "da-recurso-efeito",
    tema: "Processo administrativo",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "De acordo com a Lei 9.784/1999, assinale a opção correta acerca do recurso administrativo.",
    alternativas: [
      [
        "Salvo disposição legal específica, o prazo para interposição do recurso é de quinze dias.",
        "Errada. O prazo é de dez dias (art. 59).",
      ],
      [
        "O recurso é dirigido diretamente à autoridade superior, sem possibilidade de reconsideração.",
        "Errada. É dirigido a quem decidiu, que pode reconsiderar em cinco dias (art. 56, § 1º).",
      ],
      [
        "Salvo disposição legal em contrário, o recurso não tem efeito suspensivo.",
        "Correta. Art. 61, que admite efeito suspensivo havendo justo receio de prejuízo de difícil reparação.",
      ],
      [
        "O recurso administrativo tramitará por, no máximo, duas instâncias administrativas.",
        "Errada. São no máximo três instâncias (art. 57).",
      ],
      [
        "Na revisão do processo, admite-se o agravamento da sanção, desde que ouvido o interessado.",
        "Errada. Da revisão não pode resultar agravamento (art. 65, parágrafo único).",
      ],
    ],
    correta: "C",
    explicacao:
      "Recurso: 10 dias, dirigido a quem decidiu (reconsideração em 5 dias), até 3 instâncias, sem efeito suspensivo em regra. Agravamento é possível no recurso, com ciência prévia, mas nunca na revisão.",
    conceito: "Regras do recurso administrativo.",
    lembrar: "Recurso: 10 dias, 3 instâncias, sem efeito suspensivo (regra).",
    referencia: "Lei 9.784/1999, arts. 56 a 65.",
  }),
  q({
    id: "da-viatura-tema940",
    tema: "Responsabilidade civil do Estado",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Durante perseguição a suspeitos, uma viatura da Polícia Civil avançou o sinal vermelho e colidiu com o carro de Paulo, que trafegava regularmente. Paulo pretende ser indenizado. Considerando essa situação hipotética, a CF e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "Paulo pode acionar diretamente o policial motorista, em ação de responsabilidade objetiva.",
        "Errada. Pelo Tema 940 do STF, a ação deve ser proposta contra o Estado, não contra o agente.",
      ],
      [
        "O Estado responde objetivamente, com direito de regresso contra o policial se houver dolo ou culpa.",
        "Correta. Art. 37, § 6º, da CF.",
      ],
      [
        "O Estado só responde se Paulo comprovar que o policial agiu com imprudência na condução da viatura.",
        "Errada. A responsabilidade do Estado é objetiva; não depende de prova de culpa do agente.",
      ],
      [
        "A responsabilidade é afastada porque a viatura estava em serviço legítimo de perseguição policial.",
        "Errada. O exercício regular da atividade não afasta, por si, o dever de indenizar terceiros.",
      ],
      [
        "Estado e policial respondem solidariamente, cabendo a Paulo escolher contra quem propor a ação.",
        "Errada. O STF afastou a possibilidade de ação direta contra o agente (Tema 940).",
      ],
    ],
    correta: "B",
    explicacao:
      "As pessoas jurídicas de direito público respondem objetivamente pelos danos que seus agentes, nessa qualidade, causarem a terceiros. A vítima aciona o Estado; o Estado, em regresso, cobra do agente que agiu com dolo ou culpa.",
    conceito: "Responsabilidade objetiva e Tema 940 do STF.",
    lembrar: "Vítima × Estado (objetiva). Estado × agente (regresso com dolo ou culpa).",
    referencia: "CF/1988, art. 37, § 6º; STF, RE 1.027.633 (Tema 940).",
  }),
  q({
    id: "da-preso-morte",
    tema: "Responsabilidade civil do Estado",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Um preso provisório foi morto por outro detento dentro de uma unidade prisional estadual. Sua família ajuizou ação de indenização contra o estado. Considerando essa situação hipotética e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "O estado não responde, pois a morte foi causada por terceiro, o que rompe o nexo de causalidade.",
        "Errada. O ato de outro detento não rompe o nexo quando o Estado descumpre seu dever de proteção.",
      ],
      [
        "O estado responde apenas se a família demonstrar culpa específica dos agentes penitenciários.",
        "Errada. O STF reconhece a responsabilidade objetiva nesse caso.",
      ],
      [
        "O estado responde objetivamente, por descumprir o dever específico de proteger a pessoa sob sua custódia.",
        "Correta. Tese do Tema 592: o Estado responde pela morte de detento, nos termos do art. 37, § 6º.",
      ],
      [
        "A família deve acionar o detento que praticou o homicídio, ficando o estado responsável só subsidiariamente.",
        "Errada. A responsabilidade do Estado é direta e objetiva.",
      ],
      [
        "O estado responde somente se o preso já tivesse condenação definitiva, pois o provisório não está sob custódia.",
        "Errada. O preso provisório também está sob custódia do Estado.",
      ],
    ],
    correta: "C",
    explicacao:
      "Para o STF, em caso de inobservância do seu dever específico de proteção (art. 5º, XLIX), o Estado é responsável pela morte de detento. A responsabilidade só é afastada se o Estado provar que a morte não podia ser evitada.",
    conceito: "Responsabilidade do Estado por pessoas sob custódia.",
    lembrar: "Preso sob custódia: o Estado responde pela sua integridade.",
    referencia: "CF/1988, arts. 5º, XLIX, e 37, § 6º; STF, RE 841.526 (Tema 592).",
  }),
  q({
    id: "da-improbidade-assertivas",
    tema: "Improbidade administrativa",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Considerando a Lei 8.429/1992, com as alterações da Lei 14.230/2021, assinale a opção correta.",
    alternativas: [
      [
        "A mera divergência na interpretação da lei, baseada em jurisprudência ainda não pacificada, configura improbidade.",
        "Errada. A lei afasta expressamente a improbidade nesse caso.",
      ],
      [
        "Admite-se a modalidade culposa nos atos de improbidade que causem prejuízo ao erário.",
        "Errada. A Lei 14.230/2021 eliminou a modalidade culposa.",
      ],
      [
        "A perda da função pública pode ser aplicada por decisão administrativa do chefe do órgão.",
        "Errada. As sanções da lei de improbidade são aplicadas pelo Judiciário.",
      ],
      [
        "A configuração de qualquer ato de improbidade exige conduta dolosa do agente.",
        "Correta. Art. 1º, §§ 1º a 3º.",
      ],
      [
        "A ação de improbidade é imprescritível, em qualquer hipótese, por proteger o patrimônio público.",
        "Errada. A ação prescreve em oito anos; imprescritível é apenas o ressarcimento por ato doloso (Tema 897 do STF).",
      ],
    ],
    correta: "D",
    explicacao:
      "Após a Lei 14.230/2021, só há improbidade com dolo, e a divergência interpretativa não a configura. As sanções são aplicadas judicialmente, e a ação prescreve em oito anos.",
    conceito: "Improbidade após a Lei 14.230/2021.",
    lembrar: "Improbidade: só dolosa. Ação prescreve em 8 anos.",
    referencia: "Lei 8.429/1992, arts. 1º e 23; STF, Tema 897.",
  }),
  q({
    id: "da-improbidade-prescricao",
    tema: "Improbidade administrativa",
    dificuldade: "desafio",
    tipo: "direta",
    enunciado: "Na redação atual da Lei 8.429/1992, a ação para aplicação das sanções por improbidade administrativa prescreve em",
    alternativas: [
      [
        "cinco anos após o término do exercício de mandato, cargo em comissão ou função de confiança.",
        "Errada. Era a regra anterior à Lei 14.230/2021.",
      ],
      ["oito anos, contados a partir da ocorrência do fato.", "Correta. Art. 23, caput, com a redação da Lei 14.230/2021."],
      ["dez anos, contados da ciência do fato pelo Ministério Público ou pelo ente lesado.", "Errada. O prazo é de oito anos, contado do fato."],
      ["três anos, contados da instauração do inquérito civil sobre o fato investigado.", "Errada. Não é o prazo previsto."],
      ["nunca, pois todas as pretensões relativas à improbidade administrativa são imprescritíveis.", "Errada. Só o ressarcimento por ato doloso é imprescritível."],
    ],
    correta: "B",
    explicacao:
      "A ação prescreve em oito anos, contados da ocorrência do fato ou, nas infrações permanentes, do dia em que cessou a permanência. A lei também prevê prescrição intercorrente.",
    conceito: "Prescrição na improbidade.",
    lembrar: "Improbidade: 8 anos a partir do fato.",
    referencia: "Lei 8.429/1992, art. 23.",
  }),
  q({
    id: "da-pregao-comum",
    tema: "Licitações",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo a Lei 14.133/2021, a modalidade obrigatória para a aquisição de bens e serviços comuns é",
    alternativas: [
      ["o pregão.", "Correta. Art. 6º, XLI, e art. 29."],
      ["o leilão.", "Errada. O leilão serve para alienar bens."],
      ["a tomada de preços.", "Errada. A modalidade foi extinta pela nova lei."],
      ["o concurso.", "Errada. O concurso escolhe trabalho técnico, científico ou artístico."],
      ["o diálogo competitivo.", "Errada. É reservado a contratações inovadoras ou complexas."],
    ],
    correta: "A",
    explicacao:
      "O pregão é a modalidade obrigatória para bens e serviços comuns, com critério de julgamento de menor preço ou maior desconto. Não se aplica a serviços técnicos especializados de natureza intelectual nem a obras (salvo serviços comuns de engenharia).",
    conceito: "Pregão.",
    lembrar: "Comum → pregão.",
    referencia: "Lei 14.133/2021, arts. 6º, XLI, e 29.",
  }),
  q({
    id: "da-inexigibilidade",
    tema: "Contratação direta",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca da contratação direta na Lei 14.133/2021, assinale a opção correta.",
    alternativas: [
      [
        "É dispensável a licitação para aquisição de bem que só possa ser fornecido por produtor exclusivo.",
        "Errada. Fornecedor exclusivo gera inexigibilidade, por inviabilidade de competição.",
      ],
      [
        "É inexigível a licitação nos casos de guerra, estado de defesa ou grave perturbação da ordem.",
        "Errada. Essas são hipóteses de dispensa (art. 75, VII).",
      ],
      [
        "É inexigível a licitação para contratar artista consagrado pela crítica especializada ou pela opinião pública.",
        "Correta. Art. 74, II.",
      ],
      [
        "Na dispensa de licitação, a competição é inviável por natureza, motivo pelo qual não há licitação.",
        "Errada. A inviabilidade de competição caracteriza a inexigibilidade, não a dispensa.",
      ],
      [
        "A ausência de interessados na licitação anterior torna inexigível a nova contratação, mantidas as condições.",
        "Errada. A licitação deserta, mantidas as condições, permite a dispensa (art. 75, III).",
      ],
    ],
    correta: "C",
    explicacao:
      "Inexigibilidade (art. 74): competição inviável — fornecedor exclusivo, artista consagrado, serviço técnico especializado com notória especialização, credenciamento. Dispensa (art. 75): competição possível, mas a lei autoriza não licitar (valor, emergência, guerra, licitação deserta etc.).",
    conceito: "Dispensa × inexigibilidade.",
    lembrar: "Inexigível = impossível competir. Dispensável = a lei libera.",
    referencia: "Lei 14.133/2021, arts. 74 e 75.",
  }),
  q({
    id: "da-leilao-apreendidos",
    tema: "Licitações",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "A Polícia Civil pretende alienar veículos legalmente apreendidos e já inservíveis, cuja destinação foi autorizada na forma da lei, buscando obter o maior valor possível. Considerando essa situação hipotética e a Lei 14.133/2021, a modalidade adequada é",
    alternativas: [
      ["o pregão, com critério de julgamento pelo maior desconto.", "Errada. O pregão serve para a Administração comprar bens e serviços comuns."],
      ["a concorrência, com critério de julgamento pela melhor técnica.", "Errada. A alienação de bens apreendidos e inservíveis segue o leilão."],
      ["o leilão, vencendo quem oferecer o maior lance.", "Correta. Art. 6º, XL."],
      ["o concurso, com prêmio ao vencedor fixado no edital.", "Errada. O concurso escolhe trabalho técnico, científico ou artístico."],
      ["o diálogo competitivo, com fase prévia de diálogos com os licitantes.", "Errada. É para contratações complexas, não para alienar bens."],
    ],
    correta: "C",
    explicacao: "Leilão é a modalidade para alienação de imóveis ou de móveis inservíveis ou legalmente apreendidos a quem oferecer o maior lance.",
    conceito: "Leilão.",
    lembrar: "A Administração VENDE: leilão.",
    referencia: "Lei 14.133/2021, art. 6º, XL.",
  }),
  q({
    id: "da-estabilidade-assertivas",
    tema: "Servidores públicos",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca da estabilidade do servidor público prevista na Constituição Federal, assinale a opção correta.",
    alternativas: [
      [
        "São estáveis, após dois anos de efetivo exercício, os servidores nomeados para cargo de provimento efetivo.",
        "Errada. O prazo é de três anos.",
      ],
      [
        "O servidor ocupante exclusivamente de cargo em comissão adquire estabilidade após três anos de exercício.",
        "Errada. Cargo em comissão não gera estabilidade.",
      ],
      [
        "Como condição para a estabilidade, é obrigatória a avaliação especial de desempenho por comissão.",
        "Correta. Art. 41, § 4º.",
      ],
      [
        "O servidor estável só perde o cargo em virtude de sentença judicial transitada em julgado.",
        "Errada. Também perde por processo administrativo, avaliação periódica de desempenho e excesso de despesa.",
      ],
      [
        "Extinto o cargo, o servidor estável é exonerado, sem direito a remuneração proporcional.",
        "Errada. Fica em disponibilidade, com remuneração proporcional ao tempo de serviço (art. 41, § 3º).",
      ],
    ],
    correta: "C",
    explicacao:
      "Estabilidade: cargo efetivo, concurso, três anos de efetivo exercício e avaliação especial de desempenho. Perda do cargo: sentença transitada, PAD, avaliação periódica (lei complementar) e excesso de despesa (art. 169).",
    conceito: "Estabilidade do servidor.",
    lembrar: "Estável: 3 anos + avaliação especial. Cargo extinto: disponibilidade.",
    referencia: "CF/1988, arts. 41 e 169, § 4º.",
  }),
  q({
    id: "da-acumulacao-medica",
    tema: "Servidores públicos",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Uma médica, servidora de hospital estadual, foi aprovada em concurso para o cargo de médica em hospital municipal. Os horários são compatíveis, e a soma das duas remunerações ultrapassa o teto constitucional, embora cada uma, isoladamente, fique abaixo dele. Considerando essa situação hipotética e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "A acumulação é vedada, pois os cargos pertencem a entes federativos diferentes.",
        "Errada. A CF não exige que os cargos sejam do mesmo ente.",
      ],
      [
        "A acumulação é permitida, mas a soma das remunerações deve ser reduzida até o limite do teto.",
        "Errada. Nas acumulações lícitas, o STF considera o teto em relação a cada vínculo, isoladamente.",
      ],
      [
        "A acumulação é permitida, e o teto incide sobre cada vínculo, isoladamente considerado.",
        "Correta. Cargos privativos de profissionais de saúde com profissão regulamentada; teto por vínculo (Temas 377 e 384 do STF).",
      ],
      [
        "A acumulação é vedada porque a CF só a permite para cargos de professor, técnicos e científicos.",
        "Errada. A CF também permite dois cargos ou empregos privativos de profissionais de saúde.",
      ],
      [
        "A acumulação depende de autorização do Tribunal de Contas e da renúncia a uma das remunerações.",
        "Errada. Não há essa exigência.",
      ],
    ],
    correta: "C",
    explicacao:
      "A CF permite acumular dois cargos privativos de profissionais de saúde com profissão regulamentada, havendo compatibilidade de horários. O STF fixou que, nesses casos, o teto remuneratório incide sobre cada vínculo isoladamente.",
    conceito: "Acumulação lícita e teto remuneratório.",
    lembrar: "Acumulação permitida: teto por vínculo, não pela soma.",
    referencia: "CF/1988, art. 37, XI e XVI, “c”; STF, Temas 377 e 384.",
  }),
  q({
    id: "da-avocacao",
    tema: "Poderes administrativos",
    dificuldade: "media",
    tipo: "direta",
    enunciado:
      "O delegado titular de uma delegacia, em caráter excepcional e por motivo relevante devidamente justificado, chamou para si uma atribuição que normalmente cabia a um delegado subordinado. Esse ato é manifestação do poder",
    alternativas: [
      ["disciplinar, por envolver controle da conduta funcional do subordinado.", "Errada. Não houve apuração de infração nem aplicação de sanção."],
      ["hierárquico, na forma de avocação de competência.", "Correta. Avocar é chamar para si competência de órgão hierarquicamente inferior (art. 15 da Lei 9.784/1999)."],
      ["regulamentar, pois redistribui competências entre os órgãos.", "Errada. O poder regulamentar edita normas para a fiel execução das leis."],
      ["de polícia, por limitar a atuação de outro agente público.", "Errada. O poder de polícia atinge particulares, não a relação interna."],
      ["vinculado, pois a avocação é obrigatória quando houver motivo relevante.", "Errada. A avocação é excepcional e temporária, não um dever vinculado."],
    ],
    correta: "B",
    explicacao: "O poder hierárquico permite dar ordens, fiscalizar, rever atos, delegar e avocar atribuições. A avocação é excepcional, temporária e motivada.",
    conceito: "Poder hierárquico: delegação e avocação.",
    lembrar: "Avocar = trazer para si a competência do subordinado.",
    referencia: "Lei 9.784/1999, art. 15.",
  }),
  q({
    id: "da-poder-regulamentar",
    tema: "Poderes administrativos",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "No que se refere ao poder regulamentar, assinale a opção correta.",
    alternativas: [
      [
        "O decreto regulamentar pode criar obrigações não previstas em lei, se necessárias à execução do serviço.",
        "Errada. O regulamento não pode inovar criando obrigações sem base legal.",
      ],
      [
        "O decreto autônomo pode extinguir cargos públicos ocupados, desde que haja redução de despesas.",
        "Errada. O decreto autônomo só extingue funções ou cargos públicos quando vagos (CF, art. 84, VI, “b”).",
      ],
      [
        "Compete ao Congresso Nacional sustar os atos normativos do Executivo que exorbitem do poder regulamentar.",
        "Correta. CF, art. 49, V.",
      ],
      [
        "O poder regulamentar do Presidente pode ser delegado a qualquer autoridade da administração indireta.",
        "Errada. A delegação é limitada às hipóteses e autoridades do art. 84, parágrafo único.",
      ],
      [
        "Os regulamentos dispensam publicação oficial quando se dirigem apenas aos servidores do órgão.",
        "Errada. Atos normativos exigem publicação para produzir efeitos.",
      ],
    ],
    correta: "C",
    explicacao:
      "O poder regulamentar explicita a lei para sua fiel execução, sem inovar. O decreto autônomo é admitido só para organização administrativa sem aumento de despesa e para extinguir cargos vagos. O Congresso pode sustar atos que exorbitem.",
    conceito: "Limites do poder regulamentar.",
    lembrar: "Regulamento explica a lei, não cria obrigação nova.",
    referencia: "CF/1988, arts. 49, V, e 84, IV e VI.",
  }),
  q({
    id: "da-desvio-remocao",
    tema: "Abuso de poder",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Após um agente de polícia criticar publicamente as condições de trabalho, seu superior determinou sua remoção para uma unidade distante, alegando “necessidade do serviço”. Ficou demonstrado que não havia carência de pessoal no destino e que o objetivo era punir o agente. Considerando essa situação hipotética, assinale a opção correta.",
    alternativas: [
      [
        "Há excesso de poder, pois a autoridade não tinha competência para determinar remoções.",
        "Errada. O enunciado não indica falta de competência; o vício está na finalidade.",
      ],
      [
        "Não há vício, pois a remoção de ofício é ato discricionário imune ao controle judicial.",
        "Errada. A discricionariedade não afasta o controle de legalidade, inclusive da finalidade.",
      ],
      [
        "Há desvio de finalidade, pois a remoção foi usada como punição, fim diverso do previsto em lei.",
        "Correta. Remoção não é sanção; usá-la para punir é desvio de finalidade.",
      ],
      [
        "Há vício de forma, que pode ser convalidado com a publicação de nova motivação pela autoridade.",
        "Errada. O vício é de finalidade, que é insanável.",
      ],
      [
        "Não há vício, desde que o agente receba ajuda de custo pelas despesas da mudança de sede.",
        "Errada. Indenizar a mudança não corrige o desvio de finalidade.",
      ],
    ],
    correta: "C",
    explicacao:
      "Abuso de poder: excesso (vai além da competência) ou desvio de finalidade (usa a competência para fim diverso do previsto). Remoção com objetivo punitivo é o exemplo clássico de desvio.",
    conceito: "Desvio de finalidade.",
    lembrar: "Competente, mas com fim errado = desvio de finalidade.",
    referencia: "Lei 4.717/1965, art. 2º, “e”.",
  }),
  q({
    id: "da-suspeicao",
    tema: "Processo administrativo",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "De acordo com a Lei 9.784/1999, constitui hipótese de SUSPEIÇÃO, e não de impedimento, da autoridade ou do servidor",
    alternativas: [
      ["ter interesse direto ou indireto na matéria.", "Errada. É hipótese de impedimento (art. 18, I)."],
      ["ter participado do processo como perito ou testemunha.", "Errada. É hipótese de impedimento (art. 18, II)."],
      ["estar litigando judicialmente com o interessado.", "Errada. É hipótese de impedimento (art. 18, III)."],
      ["ter amizade íntima com algum dos interessados.", "Correta. Amizade íntima ou inimizade notória geram suspeição (art. 20)."],
      ["ter cônjuge que atuou no processo como representante.", "Errada. É hipótese de impedimento (art. 18, II)."],
    ],
    correta: "D",
    explicacao:
      "Impedimento (art. 18): interesse na matéria, participação como perito, testemunha ou representante (próprio ou de cônjuge ou parente até 3º grau), litígio com o interessado. Suspeição (art. 20): amizade íntima ou inimizade notória.",
    conceito: "Impedimento × suspeição.",
    lembrar: "Suspeição = sentimentos (amizade íntima, inimizade notória).",
    referencia: "Lei 9.784/1999, arts. 18 a 21.",
  }),
  q({
    id: "da-principios-assertivas",
    tema: "Princípios da Administração",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca dos princípios da administração pública, assinale a opção correta.",
    alternativas: [
      [
        "A razoabilidade está expressamente prevista no caput do art. 37 da Constituição Federal.",
        "Errada. É princípio implícito na CF, expresso na Lei 9.784/1999.",
      ],
      [
        "Pela autotutela, o Judiciário pode revogar atos administrativos inconvenientes de outro Poder.",
        "Errada. Autotutela é o poder da própria Administração de rever seus atos.",
      ],
      [
        "A eficiência foi inserida expressamente no caput do art. 37 pela Emenda Constitucional 19/1998.",
        "Correta. A EC 19/1998 (reforma administrativa) incluiu a eficiência.",
      ],
      [
        "A impessoalidade impede a divulgação, em meios oficiais, dos atos praticados pelos servidores.",
        "Errada. A impessoalidade veda promoção pessoal, não a publicidade dos atos.",
      ],
      [
        "A moralidade administrativa não pode ser defendida por meio de ação popular proposta por cidadão.",
        "Errada. A ação popular pode anular ato lesivo à moralidade administrativa.",
      ],
    ],
    correta: "C",
    explicacao:
      "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência (esta incluída pela EC 19/1998). Razoabilidade, proporcionalidade, autotutela e supremacia do interesse público são princípios implícitos ou legais.",
    conceito: "Princípios expressos e implícitos.",
    lembrar: "Eficiência chegou em 1998 (EC 19).",
    referencia: "CF/1988, art. 37, caput; Lei 9.784/1999, art. 2º.",
  }),
  q({
    id: "da-convalidacao-competencia",
    tema: "Convalidação",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Um servidor sem competência para o ato concedeu licença a um particular. A competência para concedê-la não é exclusiva de nenhuma autoridade, e todos os demais requisitos legais foram atendidos, sem prejuízo a terceiros ou ao interesse público. Considerando essa situação hipotética e a Lei 9.784/1999, assinale a opção correta.",
    alternativas: [
      [
        "O ato é inexistente e não pode ser aproveitado, devendo o particular formular novo pedido.",
        "Errada. Trata-se de vício sanável, que admite convalidação.",
      ],
      [
        "O ato pode ser convalidado pela autoridade competente, por se tratar de defeito sanável.",
        "Correta. Vício de competência não exclusiva, sem lesão ao interesse público nem prejuízo a terceiros.",
      ],
      [
        "O ato deve ser revogado, pois a convalidação só é admitida para vícios de finalidade.",
        "Errada. Vício de finalidade é insanável; e ato ilegal não se revoga.",
      ],
      [
        "O ato é válido independentemente de convalidação, pois a licença é ato vinculado.",
        "Errada. Mesmo sendo vinculado, o ato tem vício de competência, que precisa ser sanado.",
      ],
      [
        "O ato só pode ser convalidado pelo Poder Judiciário, mediante provocação do particular interessado.",
        "Errada. A convalidação é feita pela própria Administração.",
      ],
    ],
    correta: "B",
    explicacao:
      "Atos com defeitos sanáveis podem ser convalidados pela Administração, em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros. Vício de competência não exclusiva é sanável.",
    conceito: "Convalidação por ratificação.",
    lembrar: "Incompetente, mas competência não exclusiva? Ratifica.",
    referencia: "Lei 9.784/1999, art. 55.",
  }),
  q({
    id: "da-particulares-colaboracao",
    tema: "Agentes públicos",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "O jurado do tribunal do júri e o mesário convocado para as eleições são classificados pela doutrina como",
    alternativas: [
      ["agentes políticos de investidura temporária.", "Errada. Agentes políticos ocupam os altos escalões do Estado, como chefes do Executivo e parlamentares."],
      ["servidores públicos estatutários temporários.", "Errada. Não ocupam cargo público efetivo ou em comissão."],
      ["empregados públicos sob regime celetista.", "Errada. Não há vínculo celetista com a Administração."],
      ["particulares em colaboração com o Estado.", "Correta. Exercem função pública sem perder a condição de particulares."],
      ["militares convocados para serviço eventual.", "Errada. Não há vínculo militar."],
    ],
    correta: "D",
    explicacao: "Particulares em colaboração prestam serviço ao Estado sem vínculo empregatício, por requisição, nomeação ou delegação: jurados, mesários, conscritos, tabeliães, entre outros.",
    conceito: "Classificação dos agentes públicos.",
    lembrar: "Jurado e mesário: particulares em colaboração.",
    referencia: "Doutrina de Direito Administrativo — agentes públicos.",
  }),
  q({
    id: "da-servicos-concessao",
    tema: "Serviços públicos",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca dos serviços públicos e de sua concessão, conforme a Lei 8.987/1995, assinale a opção correta.",
    alternativas: [
      [
        "A concessão de serviço público pode ser feita a pessoa física que demonstre capacidade para seu desempenho.",
        "Errada. A concessão é feita a pessoa jurídica ou consórcio; a permissão é que admite pessoa física.",
      ],
      [
        "A tarifa do serviço concedido deve ser idêntica para todos os usuários, sendo vedada qualquer diferenciação.",
        "Errada. A lei admite tarifas diferenciadas em função de características técnicas e custos (art. 13).",
      ],
      [
        "Não caracteriza descontinuidade a interrupção por inadimplemento do usuário, após prévio aviso.",
        "Correta. Art. 6º, § 3º, II, considerado o interesse da coletividade.",
      ],
      [
        "A encampação é a extinção da concessão por iniciativa da concessionária, sem necessidade de lei.",
        "Errada. Encampação é a retomada pelo poder concedente, por interesse público, com lei autorizativa e indenização prévia.",
      ],
      [
        "A permissão é formalizada por contrato de prazo indeterminado, insuscetível de revogação unilateral.",
        "Errada. A permissão é contrato de adesão, precário e revogável unilateralmente.",
      ],
    ],
    correta: "C",
    explicacao:
      "Serviço adequado é contínuo, mas não há descontinuidade na interrupção em emergência ou, após aviso prévio, por razões técnicas ou de segurança e por inadimplemento do usuário. Concessão: PJ ou consórcio. Permissão: admite PF, é precária.",
    conceito: "Continuidade e delegação de serviços públicos.",
    lembrar: "Inadimplência + aviso prévio = pode cortar.",
    referencia: "Lei 8.987/1995, arts. 2º, 6º, 13, 37 e 40.",
  }),
  q({
    id: "da-controle-judicial",
    tema: "Controle da Administração",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Um servidor questiona judicialmente ato discricionário que fixou a escala de plantões de sua unidade, alegando que a distribuição é manifestamente desproporcional e não guarda relação com a demanda da unidade. Considerando essa situação hipotética, assinale a opção correta quanto ao controle judicial.",
    alternativas: [
      [
        "O Judiciário não pode examinar o ato, por se tratar de juízo exclusivo de conveniência e oportunidade.",
        "Errada. Atos discricionários estão sujeitos ao controle de legalidade.",
      ],
      [
        "O Judiciário pode examinar legalidade, razoabilidade e proporcionalidade, sem substituir a escolha válida.",
        "Correta. O controle alcança os limites da discricionariedade, não o mérito legítimo.",
      ],
      [
        "O Judiciário pode refazer a escala, escolhendo a distribuição que lhe parecer mais conveniente ao serviço.",
        "Errada. O juiz não substitui o administrador no juízo de mérito.",
      ],
      [
        "O Judiciário só pode intervir se o servidor esgotar previamente todas as instâncias administrativas.",
        "Errada. Em regra, não se exige esgotamento da via administrativa (CF, art. 5º, XXXV).",
      ],
      [
        "O Judiciário pode revogar a escala por inconveniência, já que a revogação é meio de controle externo.",
        "Errada. Revogação é exclusiva da Administração que praticou o ato.",
      ],
    ],
    correta: "B",
    explicacao:
      "O controle judicial alcança a legalidade em sentido amplo, incluindo razoabilidade, proporcionalidade e motivos. O Judiciário anula o ato ilegal, mas não escolhe por conveniência no lugar da Administração.",
    conceito: "Controle judicial dos atos discricionários.",
    lembrar: "Juiz controla limites; não escolhe no lugar do administrador.",
    referencia: "CF/1988, art. 5º, XXXV; doutrina.",
  }),
  q({
    id: "da-bens-publicos",
    tema: "Bens públicos",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Segundo a Constituição Federal e a jurisprudência, os bens públicos",
    alternativas: [
      [
        "dominicais podem ser penhorados para garantir dívidas judiciais do ente público.",
        "Errada. Bens públicos são impenhoráveis; as dívidas são pagas por precatórios.",
      ],
      [
        "de uso especial, como prédios de delegacias, podem ser alienados livremente.",
        "Errada. Enquanto afetados, são inalienáveis.",
      ],
      ["não estão sujeitos à usucapião, inclusive os dominicais.", "Correta. CF, arts. 183, § 3º, e 191, parágrafo único; Súmula 340 do STF."],
      [
        "imóveis rurais podem ser usucapidos após quinze anos de posse mansa e pacífica.",
        "Errada. Imóveis públicos não são adquiridos por usucapião.",
      ],
      [
        "de empresa pública exploradora de atividade econômica são sempre impenhoráveis.",
        "Errada. Bens de estatais exploradoras de atividade econômica seguem, em regra, o regime privado.",
      ],
    ],
    correta: "C",
    explicacao:
      "Bens públicos são impenhoráveis, imprescritíveis (não usucapíveis) e, enquanto afetados, inalienáveis. Os dominicais (desafetados) podem ser alienados, observadas as exigências legais, mas continuam impenhoráveis e não usucapíveis.",
    conceito: "Regime jurídico dos bens públicos.",
    lembrar: "Bem público: não se penhora, não se usucape.",
    referencia: "CF/1988, arts. 100, 183, § 3º, e 191; Súmula 340 do STF.",
  }),
  q({
    id: "da-independencia-instancias",
    tema: "Responsabilidade dos servidores",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca das responsabilidades civil, penal e administrativa do servidor público, assinale a opção correta.",
    alternativas: [
      [
        "A absolvição criminal por falta de provas afasta a responsabilidade administrativa pelo mesmo fato.",
        "Errada. Só a absolvição por inexistência do fato ou negativa de autoria repercute na esfera administrativa.",
      ],
      [
        "A responsabilidade administrativa depende de prévia condenação criminal transitada em julgado.",
        "Errada. As instâncias são independentes.",
      ],
      [
        "A absolvição criminal que negue a autoria do fato não repercute na esfera administrativa.",
        "Errada. A negativa de autoria afasta a responsabilidade administrativa.",
      ],
      [
        "As sanções civis, penais e administrativas podem cumular-se, sendo independentes entre si.",
        "Correta. Regra da independência das instâncias.",
      ],
      [
        "As sanções não podem cumular-se, pois isso configuraria punição dupla pelo mesmo fato.",
        "Errada. A cumulação é admitida; as esferas protegem bens jurídicos distintos.",
      ],
    ],
    correta: "D",
    explicacao:
      "As instâncias civil, penal e administrativa são independentes. A absolvição penal só vincula a esfera administrativa quando reconhece a inexistência do fato ou nega a autoria.",
    conceito: "Independência das instâncias.",
    lembrar: "Absolvição por falta de provas não livra no administrativo.",
    referencia: "Doutrina; legislação estatutária (ex.: Lei 8.112/1990, arts. 125 e 126).",
  }),
  q({
    id: "da-temporaria",
    tema: "Contratação temporária",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Durante anos, um estado contratou, sem concurso, “agentes temporários” para executar atividades rotineiras e permanentes de atendimento em delegacias, renovando sucessivamente os contratos. Considerando essa situação hipotética e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "As contratações são válidas, pois a CF autoriza a contratação temporária sempre que houver carência de servidores.",
        "Errada. A carência permanente deve ser suprida por concurso, não por contratos temporários.",
      ],
      [
        "As contratações são válidas se houver lei estadual genérica autorizando contratações para qualquer atividade.",
        "Errada. O STF exige casos especificados em lei e necessidade temporária de excepcional interesse público.",
      ],
      [
        "As contratações são inconstitucionais, pois não atendem a necessidade temporária de excepcional interesse público.",
        "Correta. Tema 612: não se admite contratação temporária para serviços ordinários permanentes do Estado.",
      ],
      [
        "Os contratados adquirem estabilidade após três anos de renovações sucessivas dos contratos.",
        "Errada. Contratado temporário não ocupa cargo efetivo e não adquire estabilidade.",
      ],
      [
        "As contratações são válidas, mas os contratados devem ser efetivados sem concurso ao fim de cinco anos.",
        "Errada. A efetivação sem concurso é inconstitucional.",
      ],
    ],
    correta: "C",
    explicacao:
      "Para o STF, a contratação temporária exige: casos previstos em lei, prazo predeterminado, necessidade temporária, interesse público excepcional e vedação para serviços ordinários permanentes que não tenham caráter excepcional.",
    conceito: "Contratação temporária (art. 37, IX).",
    lembrar: "Temporário é para o excepcional; o permanente exige concurso.",
    referencia: "CF/1988, art. 37, IX; STF, RE 658.026 (Tema 612).",
  }),
  q({
    id: "da-desconcentracao",
    tema: "Organização administrativa",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Um estado criou, dentro da estrutura da sua Polícia Civil, uma nova delegacia especializada em crimes cibernéticos, subordinada à diretoria de investigações. Considerando essa situação hipotética, a criação da delegacia é exemplo de",
    alternativas: [
      ["descentralização por outorga, pois cria nova entidade com personalidade jurídica.", "Errada. A delegacia não tem personalidade jurídica."],
      ["descentralização por delegação, pois transfere o serviço a um particular.", "Errada. Não há transferência a particular."],
      ["desconcentração, pois distribui competências dentro da mesma pessoa jurídica.", "Correta. Cria-se um órgão, subordinado hierarquicamente, sem nova pessoa jurídica."],
      ["concentração, pois reúne em um só órgão competências antes dispersas.", "Errada. A criação de novo órgão especializado é desconcentração."],
      ["privatização, pois transfere a atividade investigativa a outra esfera.", "Errada. A atividade continua estatal e na mesma pessoa jurídica."],
    ],
    correta: "C",
    explicacao: "Desconcentração cria órgãos dentro da mesma pessoa, com hierarquia. Descentralização transfere a atividade a outra pessoa, por outorga (lei, entidade da indireta) ou delegação (contrato ou ato, particular).",
    conceito: "Desconcentração × descentralização.",
    lembrar: "DesconCentração: dentro da mesma Casa.",
    referencia: "Doutrina de Direito Administrativo — organização administrativa.",
  }),
]

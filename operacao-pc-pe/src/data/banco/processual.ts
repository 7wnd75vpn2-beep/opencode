import { make } from "./make"

const q = make("Direito Processual Penal")

export const PROCESSUAL = [
  q({
    id: "pp-flagrante-improprio",
    tema: "Prisão em flagrante",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Logo após um roubo, policiais avistaram o autor fugindo e passaram a persegui-lo sem interrupção, a pé e de viatura, por seis horas, até alcançá-lo em outro bairro. Considerando essa situação hipotética e o CPP, assinale a opção correta.",
    alternativas: [
      [
        "Não há flagrante, pois a prisão ocorreu horas depois do crime e em local diverso do fato.",
        "Errada. O que importa é a perseguição iniciada logo após e mantida sem interrupção.",
      ],
      [
        "Há flagrante impróprio, pois a perseguição começou logo após o fato e não foi interrompida.",
        "Correta. Art. 302, III, do CPP; a duração da perseguição não afasta o flagrante.",
      ],
      [
        "Há flagrante presumido, pois o autor foi encontrado com objetos que fazem presumir a autoria.",
        "Errada. O enunciado descreve perseguição, e não encontro posterior com objetos.",
      ],
      [
        "Há flagrante próprio, pois o autor foi visto pelos policiais enquanto cometia a infração.",
        "Errada. O autor foi visto fugindo, após o crime, e não cometendo a infração.",
      ],
      [
        "A prisão só seria válida com mandado, pois o flagrante cessa vinte e quatro horas após o crime.",
        "Errada. Não existe prazo de 24 horas para o flagrante; a perseguição ininterrupta o mantém.",
      ],
    ],
    correta: "B",
    explicacao:
      "Flagrante impróprio (quase flagrante): o agente é perseguido logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser o autor. A perseguição pode durar horas, desde que ininterrupta.",
    conceito: "Espécies de flagrante.",
    lembrar: "Perseguição sem interrupção mantém o flagrante, mesmo que dure horas.",
    referencia: "CPP, arts. 290 e 302.",
  }),
  q({
    id: "pp-inquerito-caracteristicas",
    tema: "Inquérito policial",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca das características do inquérito policial, assinale a opção correta.",
    alternativas: [
      [
        "A autoridade policial pode arquivar o inquérito quando concluir pela inexistência de crime.",
        "Errada. A autoridade policial não pode mandar arquivar autos de inquérito (art. 17).",
      ],
      [
        "Eventual vício no inquérito contamina, em regra, a ação penal dele decorrente, que deve ser anulada.",
        "Errada. Em regra, vícios do inquérito não anulam a ação penal, por ser peça informativa.",
      ],
      [
        "O inquérito é dispensável quando o titular da ação já dispõe de elementos suficientes.",
        "Correta. A denúncia pode basear-se em outras peças de informação (arts. 12, 27 e 39, § 5º).",
      ],
      [
        "O inquérito é procedimento obrigatório, sujeito ao contraditório e à ampla defesa plenos.",
        "Errada. É dispensável e inquisitivo; o contraditório pleno é próprio do processo.",
      ],
      [
        "O delegado pode recusar, por conveniência, requisição de instauração feita pelo Ministério Público.",
        "Errada. A requisição do MP deve ser atendida, salvo se manifestamente ilegal.",
      ],
    ],
    correta: "C",
    explicacao:
      "O inquérito é procedimento administrativo, escrito, sigiloso, inquisitivo, dispensável, indisponível para a autoridade policial e oficial. Seus vícios, em regra, não contaminam a ação penal.",
    conceito: "Características do inquérito policial.",
    lembrar: "Inquérito: dispensável, inquisitivo, e o delegado não arquiva.",
    referencia: "CPP, arts. 4º a 23.",
  }),
  q({
    id: "pp-prazos-inquerito",
    tema: "Inquérito policial",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo a regra geral do CPP, o inquérito policial deverá terminar no prazo de",
    alternativas: [
      ["5 dias, se o indiciado estiver preso, e 15 dias, se estiver solto.", "Errada. Esses são os prazos para o oferecimento da denúncia."],
      ["10 dias, se o indiciado estiver preso, e 30 dias, se estiver solto.", "Correta. Art. 10 do CPP."],
      ["15 dias, se o indiciado estiver preso, e 30 dias, se estiver solto.", "Errada. Quinze dias é prazo da Justiça Federal (Lei 5.010/1966)."],
      ["30 dias, se o indiciado estiver preso, e 90 dias, se estiver solto.", "Errada. Esses são os prazos da Lei de Drogas."],
      ["60 dias em qualquer caso, prorrogáveis pelo juiz.", "Errada. O CPP fixa prazos distintos para preso e solto."],
    ],
    correta: "B",
    explicacao:
      "CPP: 10 dias (preso, improrrogável em regra) e 30 dias (solto, prorrogável pelo juiz quando o fato for de difícil elucidação). Leis especiais têm prazos próprios.",
    conceito: "Prazo de conclusão do inquérito.",
    lembrar: "CPP 10/30 · Federal 15/30 · Drogas 30/90.",
    referencia: "CPP, art. 10; Lei 5.010/1966, art. 66; Lei 11.343/2006, art. 51.",
  }),
  q({
    id: "pp-temporaria-requisitos",
    tema: "Prisão temporária",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca da prisão temporária, considerando a Lei 7.960/1989 e o entendimento do STF, assinale a opção correta.",
    alternativas: [
      [
        "Basta que o indiciado não tenha residência fixa para que a prisão temporária possa ser decretada.",
        "Errada. O STF afastou a decretação baseada apenas nessa hipótese isolada.",
      ],
      [
        "Pode ser decretada durante a ação penal, para garantir a regular instrução do processo.",
        "Errada. A temporária é restrita à fase de investigação.",
      ],
      [
        "Exige imprescindibilidade à investigação somada a fundadas razões de autoria em crime do rol.",
        "Correta. É a interpretação firmada pelo STF nas ADIs 3.360 e 4.109, que também exige fatos contemporâneos e insuficiência de outras cautelares.",
      ],
      [
        "Pode ser decretada de ofício pelo juiz quando houver risco concreto à investigação.",
        "Errada. Depende de representação da autoridade policial ou requerimento do MP.",
      ],
      [
        "Tem prazo de trinta dias para qualquer crime, prorrogável por igual período, se necessário.",
        "Errada. Trinta dias é o prazo para hediondos e equiparados; a regra é de cinco dias.",
      ],
    ],
    correta: "C",
    explicacao:
      "O STF condicionou a temporária a: imprescindibilidade para as investigações, fundadas razões de autoria ou participação em crime do rol, justificativa em fatos novos ou contemporâneos, adequação à gravidade e insuficiência de outras medidas cautelares.",
    conceito: "Requisitos da prisão temporária segundo o STF.",
    lembrar: "Temporária: investigação + crime do rol + imprescindível (juntos).",
    referencia: "Lei 7.960/1989, arts. 1º e 2º; STF, ADIs 3.360 e 4.109.",
  }),
  q({
    id: "pp-preventiva-assertivas",
    tema: "Prisão preventiva",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca da prisão preventiva, considerando o CPP após a Lei 13.964/2019, assinale a opção correta.",
    alternativas: [
      [
        "Na fase processual, o juiz pode decretar a preventiva de ofício, para garantir a ordem pública.",
        "Errada. A preventiva não pode ser decretada de ofício em nenhuma fase (art. 311).",
      ],
      [
        "Cabe preventiva em crimes culposos punidos com pena máxima superior a quatro anos.",
        "Errada. O art. 313, I, exige crime doloso.",
      ],
      [
        "Decretada a preventiva, dispensa-se revisão periódica até a sentença de primeiro grau.",
        "Errada. A necessidade deve ser revista a cada 90 dias (art. 316, parágrafo único).",
      ],
      [
        "Não se admite a preventiva para antecipar pena ou como decorrência imediata da denúncia.",
        "Correta. Art. 313, § 2º.",
      ],
      [
        "A recusa do investigado a prestar depoimento justifica a preventiva por conveniência da instrução.",
        "Errada. O silêncio é direito e não pode fundamentar a prisão.",
      ],
    ],
    correta: "D",
    explicacao:
      "A preventiva exige requerimento ou representação, prova do crime, indício suficiente de autoria, perigo da liberdade, fundamentos do art. 312 e hipóteses do art. 313. Não se presta a antecipar pena e deve ser revisada a cada 90 dias.",
    conceito: "Limites da prisão preventiva.",
    lembrar: "Preventiva: nunca de ofício, nunca como pena antecipada, revisão a cada 90 dias.",
    referencia: "CPP, arts. 311 a 316.",
  }),
  q({
    id: "pp-preventiva-furto",
    tema: "Prisão preventiva",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Pedro, primário, com residência fixa e identidade comprovada, foi preso em flagrante por furto simples (pena de 1 a 4 anos). O crime não envolveu violência doméstica. O MP requereu a conversão do flagrante em preventiva, alegando a gravidade do crime. Considerando essa situação hipotética e o CPP, assinale a opção correta.",
    alternativas: [
      [
        "A preventiva é cabível, pois todo crime doloso punido com reclusão admite a medida.",
        "Errada. O art. 313, I, exige pena máxima SUPERIOR a quatro anos.",
      ],
      [
        "A preventiva é cabível, desde que o juiz a fundamente na gravidade abstrata do furto.",
        "Errada. A gravidade abstrata não fundamenta a preventiva, e falta a hipótese de admissibilidade.",
      ],
      [
        "A preventiva não é admissível, pois a pena máxima não supera quatro anos e Pedro é primário.",
        "Correta. Não se configura nenhuma hipótese do art. 313.",
      ],
      [
        "A preventiva é obrigatória, por se tratar de prisão em flagrante convertida na audiência.",
        "Errada. A conversão nunca é obrigatória; depende dos requisitos legais.",
      ],
      [
        "A preventiva é cabível por até noventa dias, sem necessidade de hipótese do art. 313.",
        "Errada. As hipóteses de admissibilidade são indispensáveis.",
      ],
    ],
    correta: "C",
    explicacao:
      "A preventiva é admitida em: crimes dolosos com pena máxima superior a 4 anos; reincidência em crime doloso; violência doméstica para garantir medidas protetivas; dúvida sobre a identidade civil. Furto simples de réu primário não se enquadra.",
    conceito: "Hipóteses de admissibilidade da preventiva.",
    lembrar: "Preventiva: pena máxima > 4 anos (ou reincidência, violência doméstica, identidade).",
    referencia: "CPP, arts. 312 e 313.",
  }),
  q({
    id: "pp-cautelares-diversas",
    tema: "Medidas cautelares",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "NÃO constitui medida cautelar diversa da prisão admitida pelo ordenamento jurídico atual",
    alternativas: [
      ["a monitoração eletrônica.", "Errada como resposta: está no art. 319, IX."],
      ["o recolhimento domiciliar no período noturno.", "Errada como resposta: está no art. 319, V."],
      ["a suspensão do exercício de função pública.", "Errada como resposta: está no art. 319, VI."],
      ["a condução coercitiva para interrogatório.", "Correta. O STF declarou incompatível com a CF a condução coercitiva de investigado ou réu para interrogatório (ADPFs 395 e 444)."],
      ["a proibição de ausentar-se da comarca.", "Errada como resposta: está no art. 319, IV."],
    ],
    correta: "D",
    explicacao:
      "O art. 319 lista cautelares como comparecimento periódico, proibição de acesso a lugares, proibição de contato, proibição de ausentar-se da comarca, recolhimento noturno, suspensão de função, internação provisória, fiança e monitoração eletrônica. A condução coercitiva para interrogatório foi afastada pelo STF.",
    conceito: "Cautelares diversas da prisão.",
    lembrar: "Condução coercitiva para interrogatório: proibida pelo STF.",
    referencia: "CPP, art. 319; STF, ADPFs 395 e 444.",
  }),
  q({
    id: "pp-flagrante-defensoria",
    tema: "Prisão em flagrante",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Lavrado o auto de prisão em flagrante, o preso informou não ter advogado e não indicou nenhum defensor. Considerando essa situação hipotética e o CPP, assinale a opção correta.",
    alternativas: [
      [
        "O auto será encaminhado ao juiz em até 72 horas, e o preso aguardará a nomeação de defensor dativo.",
        "Errada. O prazo é de 24 horas, e a cópia vai à Defensoria Pública.",
      ],
      [
        "Em até 24 horas, o auto será encaminhado ao juiz e cópia integral será remetida à Defensoria Pública.",
        "Correta. Art. 306, § 1º.",
      ],
      [
        "A prisão é nula, pois o auto não pode ser lavrado sem a presença de advogado constituído.",
        "Errada. A ausência de advogado na lavratura do auto não o anula.",
      ],
      [
        "O delegado deve nomear advogado dativo, que acompanhará o preso até a audiência de custódia.",
        "Errada. A lei prevê a remessa à Defensoria Pública, não nomeação pelo delegado.",
      ],
      [
        "A comunicação à Defensoria só é necessária se o preso for comprovadamente pobre.",
        "Errada. A remessa ocorre sempre que o preso não informar o nome de seu advogado.",
      ],
    ],
    correta: "B",
    explicacao:
      "A prisão e o local são comunicados imediatamente ao juiz, ao MP e à família. Em até 24 horas, o auto vai ao juiz e, se o preso não indicar advogado, cópia integral vai à Defensoria. Também em 24 horas entrega-se a nota de culpa.",
    conceito: "Providências após o auto de prisão em flagrante.",
    lembrar: "Sem advogado: cópia à Defensoria em 24 horas.",
    referencia: "CPP, art. 306.",
  }),
  q({
    id: "pp-busca-assertivas",
    tema: "Busca e apreensão",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca da busca e apreensão, considerando o CPP e a jurisprudência do STJ, assinale a opção correta.",
    alternativas: [
      [
        "O nervosismo do abordado ao avistar a viatura justifica, por si só, a busca pessoal sem mandado.",
        "Errada. Para o STJ, impressões subjetivas isoladas não configuram fundada suspeita.",
      ],
      [
        "O mandado de busca domiciliar pode ser genérico, indicando apenas o bairro a ser vasculhado.",
        "Errada. O mandado deve indicar, o mais precisamente possível, a casa e o morador (art. 243).",
      ],
      [
        "A busca pessoal independe de mandado quando houver fundada suspeita de posse de arma proibida.",
        "Correta. Art. 244 do CPP.",
      ],
      [
        "Com mandado judicial, a busca domiciliar pode ser cumprida à noite, mesmo contra a vontade do morador.",
        "Errada. Sem consentimento, a busca com mandado é feita durante o dia.",
      ],
      [
        "A busca em escritório de advocacia dispensa a presença de representante da OAB, se houver mandado.",
        "Errada. O Estatuto da Advocacia exige mandado específico e a presença de representante da OAB.",
      ],
    ],
    correta: "C",
    explicacao:
      "A busca pessoal sem mandado exige fundada suspeita baseada em elementos objetivos e concretos. O mandado de busca domiciliar deve ser específico e cumprido de dia, salvo consentimento.",
    conceito: "Requisitos da busca pessoal e domiciliar.",
    lembrar: "Fundada suspeita = elementos concretos, não “atitude suspeita”.",
    referencia: "CPP, arts. 240 a 250; Lei 8.906/1994, art. 7º, § 6º.",
  }),
  q({
    id: "pp-busca-nervosismo",
    tema: "Busca e apreensão",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Em patrulhamento, policiais revistaram um jovem somente porque ele aparentou nervosismo e mudou de calçada ao ver a viatura. Não havia denúncia, informação prévia ou outro elemento concreto. Na revista, encontraram drogas. Considerando essa situação hipotética e a jurisprudência do STJ, assinale a opção correta.",
    alternativas: [
      [
        "A prova é lícita, pois o encontro da droga confirma, depois, que havia fundada suspeita.",
        "Errada. A fundada suspeita deve existir antes da busca; o resultado não a legitima.",
      ],
      [
        "A prova é lícita, pois a busca pessoal é ato discricionário do policial em patrulhamento.",
        "Errada. A busca pessoal sem mandado é vinculada à existência de fundada suspeita.",
      ],
      [
        "A busca é ilícita, pois o nervosismo, isolado, não configura fundada suspeita.",
        "Correta. Para o STJ, a busca baseada só em impressões subjetivas é ilícita, assim como as provas dela derivadas.",
      ],
      [
        "A busca é lícita, desde que o jovem tenha sido conduzido à delegacia logo depois.",
        "Errada. A condução posterior não corrige a ilicitude da busca.",
      ],
      [
        "A busca é ilícita apenas se o jovem for absolvido do crime de tráfico ao final.",
        "Errada. A licitude se avalia pelo modo de obtenção da prova.",
      ],
    ],
    correta: "C",
    explicacao:
      "O STJ exige, para a busca pessoal sem mandado, fundada suspeita descrita com objetividade e justificada por indícios concretos. Nervosismo, “atitude suspeita” ou mudança de trajeto, isoladamente, não bastam.",
    conceito: "Fundada suspeita na busca pessoal.",
    lembrar: "Primeiro o elemento concreto; o que se encontra depois não justifica a revista.",
    referencia: "CPP, art. 244; STJ, RHC 158.580.",
  }),
  q({
    id: "pp-custodia-fixacao",
    tema: "Cadeia de custódia",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado:
      "A etapa da cadeia de custódia que consiste na descrição detalhada do vestígio conforme se encontra no local, podendo ser ilustrada por fotografias, filmagens ou croqui, denomina-se",
    alternativas: [
      ["isolamento.", "Errada. Isolamento é evitar que se altere o estado das coisas, preservando o local."],
      ["fixação.", "Correta. Art. 158-B, III, do CPP."],
      ["coleta.", "Errada. Coleta é o recolhimento do vestígio para análise."],
      ["acondicionamento.", "Errada. Acondicionamento é embalar cada vestígio de forma individualizada."],
      ["reconhecimento.", "Errada. Reconhecimento é distinguir um elemento como de potencial interesse."],
    ],
    correta: "B",
    explicacao:
      "Etapas: reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.",
    conceito: "Etapas da cadeia de custódia.",
    lembrar: "Fixar = registrar como está (foto, vídeo, croqui).",
    referencia: "CPP, art. 158-B.",
  }),
  q({
    id: "pp-pericia-assertivas",
    tema: "Prova pericial",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca da prova pericial no CPP, assinale a opção correta.",
    alternativas: [
      [
        "Na falta de perito oficial, o exame pode ser feito por uma única pessoa idônea, sem diploma.",
        "Errada. Exigem-se duas pessoas idôneas, com diploma de curso superior.",
      ],
      [
        "O juiz fica vinculado às conclusões do laudo, não podendo rejeitá-lo no todo ou em parte.",
        "Errada. O juiz não ficará adstrito ao laudo (art. 182).",
      ],
      [
        "O exame de corpo de delito só pode ser realizado em dias úteis e no horário de expediente.",
        "Errada. Pode ser feito em qualquer dia e hora (art. 161).",
      ],
      [
        "Se a infração deixar vestígios, a confissão do acusado não supre o exame de corpo de delito.",
        "Correta. Art. 158.",
      ],
      [
        "O assistente técnico atua desde o início do inquérito, acompanhando a coleta dos vestígios.",
        "Errada. Atua após admitido pelo juiz e depois da conclusão dos exames pelos peritos oficiais.",
      ],
    ],
    correta: "D",
    explicacao:
      "Perícia: um perito oficial ou dois nomeados com curso superior. O juiz não fica vinculado ao laudo. O corpo de delito, direto ou indireto, é indispensável quando há vestígios; a confissão não o supre.",
    conceito: "Regras da prova pericial.",
    lembrar: "Vestígio: corpo de delito obrigatório; confissão não substitui.",
    referencia: "CPP, arts. 158 a 184.",
  }),
  q({
    id: "pp-prioridade-exame",
    tema: "Prova pericial",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Segundo o CPP, dar-se-á prioridade à realização do exame de corpo de delito quando se tratar de crime que envolva violência",
    alternativas: [
      ["contra servidor público no exercício da função.", "Errada. Não está entre as hipóteses de prioridade."],
      ["praticada com emprego de arma de fogo.", "Errada. Não está entre as hipóteses de prioridade."],
      ["contra idoso.", "Correta. Art. 158, parágrafo único, II."],
      ["contra o patrimônio público.", "Errada. Não está entre as hipóteses de prioridade."],
      ["praticada em via pública durante a noite.", "Errada. Não está entre as hipóteses de prioridade."],
    ],
    correta: "C",
    explicacao: "Há prioridade no exame de corpo de delito quando o crime envolver violência doméstica e familiar contra a mulher ou violência contra criança, adolescente, idoso ou pessoa com deficiência.",
    conceito: "Prioridade no exame de corpo de delito.",
    lembrar: "Prioridade: mulher (violência doméstica), criança, adolescente, idoso, pessoa com deficiência.",
    referencia: "CPP, art. 158, parágrafo único.",
  }),
  q({
    id: "pp-interrogatorio",
    tema: "Interrogatório",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca do interrogatório do acusado, assinale a opção correta.",
    alternativas: [
      [
        "O acusado que permanecer em silêncio terá essa postura considerada como indício de culpa.",
        "Errada. O silêncio não importa confissão nem pode ser interpretado em prejuízo da defesa.",
      ],
      [
        "Antes do interrogatório, o acusado será informado do direito de permanecer calado.",
        "Correta. Art. 186, caput.",
      ],
      [
        "O interrogatório judicial dispensa a presença do defensor, se o acusado confessar o crime.",
        "Errada. O interrogatório judicial exige a presença de defensor (art. 185).",
      ],
      [
        "O acusado pode ser conduzido coercitivamente para ser interrogado, se não comparecer.",
        "Errada. O STF considerou incompatível com a CF a condução coercitiva para interrogatório.",
      ],
      [
        "O acusado deve prestar compromisso de dizer a verdade, sob pena de falso testemunho.",
        "Errada. O acusado não presta compromisso e não comete falso testemunho.",
      ],
    ],
    correta: "B",
    explicacao:
      "O interrogatório é meio de defesa. O acusado é informado do direito ao silêncio, que não importa confissão. No interrogatório judicial, a presença do defensor é obrigatória.",
    conceito: "Interrogatório como meio de defesa.",
    lembrar: "Réu não presta compromisso; silêncio não prejudica.",
    referencia: "CPP, arts. 185 e 186; STF, ADPFs 395 e 444.",
  }),
  q({
    id: "pp-irmao-testemunha",
    tema: "Prova testemunhal",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "O irmão de um investigado por homicídio foi intimado a depor como testemunha e disse que não queria falar sobre o caso. Há outras testemunhas e provas sobre o fato. Considerando essa situação hipotética e o CPP, assinale a opção correta.",
    alternativas: [
      [
        "Ele é obrigado a depor, sob compromisso, como qualquer testemunha, sob pena de falso testemunho.",
        "Errada. O irmão está entre os que podem recusar-se a depor.",
      ],
      [
        "Ele pode recusar-se a depor, pois há outros meios de obter a prova.",
        "Correta. Art. 206: a recusa é possível, salvo quando não houver outro modo de obter a prova.",
      ],
      [
        "Ele está proibido de depor, por ter interesse no resultado da investigação.",
        "Errada. A proibição do art. 207 é para quem deve guardar segredo profissional.",
      ],
      [
        "Ele deve depor obrigatoriamente, mas apenas por escrito e sem a presença do investigado.",
        "Errada. Não há essa previsão.",
      ],
      [
        "Ele pode recusar-se, mas, se quiser depor, prestará compromisso de dizer a verdade.",
        "Errada. Os parentes do art. 206 que depõem não prestam compromisso (art. 208).",
      ],
    ],
    correta: "B",
    explicacao:
      "Ascendente, descendente, afim em linha reta, cônjuge (ainda que separado), irmão, pai, mãe ou filho adotivo podem recusar-se a depor, salvo se não houver outro modo de obter a prova. Quando depõem, não prestam compromisso.",
    conceito: "Recusa de parentes a depor.",
    lembrar: "Parente próximo: pode recusar; se depõe, é sem compromisso.",
    referencia: "CPP, arts. 206 a 208.",
  }),
  q({
    id: "pp-denuncia-prazo",
    tema: "Ação penal",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo o CPP, o prazo para o Ministério Público oferecer denúncia, recebidos os autos do inquérito, é de",
    alternativas: [
      ["10 dias, estando o réu preso, e 30 dias, se solto.", "Errada. Esses são os prazos do inquérito."],
      ["5 dias, estando o réu preso, e 15 dias, se solto ou afiançado.", "Correta. Art. 46 do CPP."],
      ["15 dias, estando o réu preso, e 30 dias, se solto.", "Errada. Não corresponde ao art. 46."],
      ["3 dias, estando o réu preso, e 10 dias, se solto.", "Errada. Não corresponde ao art. 46."],
      ["30 dias em qualquer hipótese, prorrogáveis por igual prazo.", "Errada. O CPP distingue preso e solto."],
    ],
    correta: "B",
    explicacao: "Esgotado o prazo sem denúncia, sem pedido de diligências e sem manifestação de arquivamento, cabe ação penal privada subsidiária da pública.",
    conceito: "Prazo para denúncia.",
    lembrar: "Denúncia: 5 (preso) e 15 (solto).",
    referencia: "CPP, arts. 29 e 46.",
  }),
  q({
    id: "pp-acao-privada",
    tema: "Ação penal privada",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca da ação penal privada, assinale a opção correta.",
    alternativas: [
      [
        "A renúncia ao direito de queixa em relação a um dos autores não se estende aos demais.",
        "Errada. A renúncia em relação a um se estende a todos (art. 49).",
      ],
      [
        "Há perempção quando o querelante deixa de promover o andamento do processo por quinze dias.",
        "Errada. O prazo é de trinta dias seguidos (art. 60, I).",
      ],
      [
        "O perdão concedido a um dos querelados aproveita a todos, sem efeito quanto a quem o recusar.",
        "Correta. Art. 51 do CPP.",
      ],
      [
        "Na ação privada subsidiária, o Ministério Público não pode retomar a ação como parte principal.",
        "Errada. O MP pode retomar a ação no caso de negligência do querelante (art. 29).",
      ],
      [
        "A queixa pode ser oferecida pelo próprio ofendido, sem advogado, se ele for maior de idade.",
        "Errada. Exige-se procurador com poderes especiais (art. 44), salvo se o ofendido for advogado.",
      ],
    ],
    correta: "C",
    explicacao:
      "Na ação privada vigora a indivisibilidade: renúncia e perdão se estendem a todos os autores. O perdão é bilateral (depende de aceitação); a renúncia é unilateral.",
    conceito: "Renúncia, perdão e perempção.",
    lembrar: "Renúncia: unilateral, estende a todos. Perdão: bilateral, quem recusa não se beneficia.",
    referencia: "CPP, arts. 29, 44, 49, 51 e 60.",
  }),
  q({
    id: "pp-decadencia-injuria",
    tema: "Ação penal privada",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Marta foi vítima de injúria (crime de ação penal privada) e descobriu quem era o autor em 10 de janeiro. Ela só ofereceu queixa-crime em 20 de agosto do mesmo ano. Não houve qualquer causa especial. Considerando essa situação hipotética e o CPP, assinale a opção correta.",
    alternativas: [
      [
        "A queixa é tempestiva, pois o prazo de decadência é de um ano a partir do conhecimento da autoria.",
        "Errada. O prazo é de seis meses.",
      ],
      [
        "Operou-se a decadência, pois o prazo de seis meses conta do dia em que Marta soube quem era o autor.",
        "Correta. Art. 38 do CPP: o prazo venceu antes de 20 de agosto.",
      ],
      [
        "A queixa é tempestiva, pois o prazo de seis meses conta da data do oferecimento do boletim de ocorrência.",
        "Errada. O termo inicial é o conhecimento da autoria.",
      ],
      [
        "A queixa é tempestiva, pois o prazo de decadência se suspende durante as férias forenses.",
        "Errada. O prazo decadencial não se suspende nem se interrompe.",
      ],
      [
        "Houve perempção, pois Marta deixou de promover o andamento do processo por mais de trinta dias.",
        "Errada. Perempção ocorre durante a ação já proposta; aqui o problema é a decadência.",
      ],
    ],
    correta: "B",
    explicacao:
      "O ofendido decai do direito de queixa ou de representação se não o exercer em seis meses, contados do dia em que vier a saber quem é o autor do crime. O prazo é decadencial: não se suspende nem se interrompe.",
    conceito: "Decadência do direito de queixa.",
    lembrar: "Queixa: 6 meses a partir de quando soube quem foi.",
    referencia: "CPP, art. 38; Código Penal, art. 103.",
  }),
  q({
    id: "pp-competencia-tentativa",
    tema: "Competência",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo o CPP, no caso de tentativa, a competência será determinada pelo lugar",
    alternativas: [
      ["em que o crime deveria ter se consumado, segundo o plano do agente.", "Errada. Na tentativa, considera-se o último ato de execução."],
      ["do último ato de execução.", "Correta. Art. 70, caput."],
      ["do domicílio da vítima da infração.", "Errada. Não é a regra geral do CPP."],
      ["em que o agente for preso em flagrante.", "Errada. O local da prisão não define a competência."],
      ["da residência do autor da infração penal.", "Errada. O domicílio do réu é critério subsidiário."],
    ],
    correta: "B",
    explicacao: "Regra: lugar da consumação. Na tentativa: lugar do último ato de execução. Não conhecido o lugar da infração: domicílio ou residência do réu.",
    conceito: "Competência pelo lugar da infração.",
    lembrar: "Consumado: onde consumou. Tentado: onde parou a execução.",
    referencia: "CPP, arts. 70 e 72.",
  }),
  q({
    id: "pp-estelionato-pix",
    tema: "Competência",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Morador de Recife, Lucas foi enganado por golpistas que estavam em São Paulo e transferiu, via PIX, R$ 3.000,00 para uma conta aberta em agência de Curitiba. Considerando essa situação hipotética e o CPP, a competência para processar o estelionato é, em regra, do foro",
    alternativas: [
      ["de São Paulo, onde estavam os autores no momento da fraude.", "Errada. A lei fixa regra especial para o estelionato por transferência."],
      ["de Curitiba, onde estava a agência da conta que recebeu os valores.", "Errada. Era o critério antigo; a Lei 14.155/2021 mudou a regra."],
      ["de Recife, domicílio da vítima.", "Correta. Art. 70, § 4º, do CPP."],
      ["de qualquer desses locais, à escolha do Ministério Público.", "Errada. A competência é definida em lei."],
      ["da Justiça Federal, por envolver o sistema financeiro nacional.", "Errada. O golpe contra particular não desloca a competência para a Justiça Federal."],
    ],
    correta: "C",
    explicacao:
      "Nos crimes de estelionato praticados mediante depósito, cheque sem fundos ou com pagamento frustrado, ou transferência de valores, a competência é definida pelo domicílio da vítima; havendo várias vítimas, pela prevenção.",
    conceito: "Competência no estelionato por transferência.",
    lembrar: "Golpe por PIX ou depósito: foro do domicílio da vítima.",
    referencia: "CPP, art. 70, § 4º (Lei 14.155/2021).",
  }),
  q({
    id: "pp-provas-ilicitas",
    tema: "Provas ilícitas",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca das provas ilícitas no CPP, assinale a opção correta.",
    alternativas: [
      [
        "A prova ilícita deve permanecer nos autos, para que o juiz avalie seu valor ao proferir a sentença.",
        "Errada. Deve ser desentranhada e, preclusa a decisão, inutilizada.",
      ],
      [
        "As provas derivadas das ilícitas são sempre admissíveis, pois não foram obtidas diretamente.",
        "Errada. Em regra, são inadmissíveis, salvo ausência de nexo ou fonte independente.",
      ],
      [
        "A prova ilícita pode fundamentar a condenação, se for a única disponível sobre o fato.",
        "Errada. A prova ilícita é inadmissível, sem essa exceção.",
      ],
      [
        "Fonte independente é a que, pelos trâmites típicos da investigação, levaria por si só ao fato.",
        "Correta. Art. 157, § 2º.",
      ],
      [
        "A inutilização da prova ilícita fica a critério da autoridade policial que a apreendeu.",
        "Errada. A inutilização é determinada por decisão judicial.",
      ],
    ],
    correta: "D",
    explicacao:
      "Provas ilícitas e derivadas são inadmissíveis e devem ser desentranhadas. Exceções às derivadas: ausência de nexo causal e fonte independente (aquela que, por si só, seguindo os trâmites típicos da investigação, seria capaz de conduzir ao fato).",
    conceito: "Provas ilícitas e derivadas.",
    lembrar: "Fonte independente salva a prova derivada.",
    referencia: "CPP, art. 157.",
  }),
  q({
    id: "pp-anpp-furto",
    tema: "Acordo de não persecução penal",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Rui, primário e sem acordos anteriores, praticou furto qualificado por rompimento de obstáculo (pena de 2 a 8 anos) e confessou formal e circunstanciadamente o crime. Não é caso de arquivamento. Considerando essa situação hipotética e o CPP, assinale a opção correta.",
    alternativas: [
      [
        "O ANPP é incabível, pois o furto qualificado tem pena máxima superior a quatro anos.",
        "Errada. O critério do ANPP é a pena MÍNIMA inferior a quatro anos.",
      ],
      [
        "O ANPP é cabível: não houve violência ou grave ameaça, e a pena mínima é inferior a 4 anos.",
        "Correta. Requisitos do art. 28-A, presentes no caso.",
      ],
      [
        "O ANPP é incabível, pois o rompimento de obstáculo equivale a violência contra a pessoa.",
        "Errada. Violência contra coisa não impede o ANPP.",
      ],
      [
        "O ANPP depende de prévia condenação, para que o Ministério Público possa ofertar o acordo.",
        "Errada. O acordo ocorre antes da denúncia, justamente para evitar o processo.",
      ],
      [
        "O ANPP é proposto pelo delegado de polícia e apenas homologado pelo Ministério Público.",
        "Errada. Quem propõe é o MP; o juiz homologa.",
      ],
    ],
    correta: "B",
    explicacao:
      "O ANPP exige: não ser caso de arquivamento, confissão formal e circunstanciada, infração sem violência ou grave ameaça, pena mínima inferior a 4 anos e ser necessário e suficiente. É proposto pelo MP e homologado pelo juiz.",
    conceito: "Requisitos do ANPP.",
    lembrar: "ANPP: pena MÍNIMA < 4 anos, sem violência à pessoa, com confissão.",
    referencia: "CPP, art. 28-A.",
  }),
  q({
    id: "pp-lei-delegado",
    tema: "Investigação criminal",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Segundo a Lei 12.830/2013, o inquérito policial em curso somente poderá ser avocado ou redistribuído por superior hierárquico",
    alternativas: [
      ["a pedido do investigado, com a concordância expressa do Ministério Público.", "Errada. Não é a hipótese legal."],
      ["por simples conveniência administrativa, independentemente de motivação.", "Errada. Exige-se despacho fundamentado."],
      ["mediante despacho fundamentado, por interesse público ou descumprimento de procedimentos.", "Correta. Art. 2º, § 4º."],
      ["após autorização judicial, ouvidos a defesa do investigado e o Ministério Público.", "Errada. A lei não exige autorização judicial."],
      ["somente quando houver pedido expresso e fundamentado da vítima ou de seus familiares.", "Errada. Não é a hipótese legal."],
    ],
    correta: "C",
    explicacao:
      "A Lei 12.830/2013 protege a condução da investigação: avocação ou redistribuição só por despacho fundamentado, por interesse público ou inobservância de procedimentos que prejudique a eficácia da investigação.",
    conceito: "Garantias da investigação conduzida pelo delegado.",
    lembrar: "Tirar o inquérito do delegado: só com despacho fundamentado.",
    referencia: "Lei 12.830/2013, art. 2º.",
  }),
  q({
    id: "pp-denuncia-anonima",
    tema: "Investigação criminal",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "A delegacia recebeu, por telefone, denúncia anônima afirmando que um servidor público estaria recebendo propina. Não havia qualquer outro elemento. Considerando essa situação hipotética e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "O delegado deve instaurar inquérito imediatamente e representar pela quebra de sigilo bancário.",
        "Errada. A denúncia anônima, isolada, não autoriza medidas invasivas nem a instauração imediata.",
      ],
      [
        "A denúncia anônima deve ser descartada, pois é inválida como notícia de crime.",
        "Errada. Ela pode motivar diligências preliminares.",
      ],
      [
        "O delegado deve realizar diligências preliminares para verificar a procedência das informações.",
        "Correta. O STF admite a denúncia anônima como ponto de partida para verificação preliminar.",
      ],
      [
        "O delegado deve identificar o autor da denúncia antes de qualquer providência.",
        "Errada. Não se exige identificar o denunciante.",
      ],
      [
        "O delegado deve encaminhar a denúncia ao juiz, que decidirá sobre a instauração do inquérito.",
        "Errada. A verificação inicial cabe à autoridade policial.",
      ],
    ],
    correta: "C",
    explicacao:
      "Para o STF, a denúncia anônima não autoriza, por si só, a instauração de inquérito ou medidas invasivas, mas permite que a autoridade realize diligências preliminares para apurar a verossimilhança dos fatos.",
    conceito: "Denúncia anônima e verificação preliminar.",
    lembrar: "Denúncia anônima: verifica primeiro, depois instaura.",
    referencia: "CPP, art. 5º, § 3º; STF, HC 84.827 e Inq 1.957.",
  }),
  q({
    id: "pp-domiciliar",
    tema: "Prisão domiciliar",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca da substituição da prisão preventiva pela domiciliar (art. 318 do CPP), assinale a opção correta.",
    alternativas: [
      [
        "É possível a substituição quando o agente for maior de setenta anos de idade.",
        "Errada. A idade prevista é maior de oitenta anos.",
      ],
      [
        "É possível a substituição quando o agente for maior de oitenta anos de idade.",
        "Correta. Art. 318, I.",
      ],
      [
        "Aplica-se à mulher com filho de até dezesseis anos de idade incompletos.",
        "Errada. O limite é filho de até doze anos incompletos.",
      ],
      [
        "Aplica-se apenas à gestante a partir do sétimo mês de gravidez.",
        "Errada. Hoje basta ser gestante.",
      ],
      [
        "Permite ao preso sair livremente durante o dia, recolhendo-se à noite.",
        "Errada. Na domiciliar, o agente só se ausenta com autorização judicial.",
      ],
    ],
    correta: "B",
    explicacao:
      "A preventiva pode ser substituída pela domiciliar quando o agente for maior de 80 anos, extremamente debilitado por doença grave, imprescindível aos cuidados de menor de 6 anos ou pessoa com deficiência, gestante, mulher com filho de até 12 anos incompletos ou homem único responsável por filho nessa idade.",
    conceito: "Hipóteses de prisão domiciliar substitutiva.",
    lembrar: "Domiciliar: 80+, doença grave, gestante, filho até 12.",
    referencia: "CPP, arts. 317 e 318.",
  }),
  q({
    id: "pp-fianca-delegado",
    tema: "Fiança",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Ana foi presa em flagrante por receptação dolosa simples (pena de 1 a 4 anos). Não se trata de crime inafiançável, e não há impedimento legal à concessão de fiança. Considerando essa situação hipotética e o CPP, assinale a opção correta.",
    alternativas: [
      [
        "Somente o juiz pode conceder fiança, pois o crime é punido com reclusão.",
        "Errada. O critério é a pena máxima, e não a espécie de pena.",
      ],
      [
        "O delegado pode arbitrar fiança, fixando-a entre 1 e 100 salários mínimos.",
        "Correta. Pena máxima até 4 anos: fiança pela autoridade policial, no valor do art. 325, I.",
      ],
      [
        "O delegado pode arbitrar fiança, mas o valor máximo é de 10 salários mínimos.",
        "Errada. Para pena máxima até 4 anos, o limite é de 100 salários mínimos.",
      ],
      [
        "A fiança é vedada, pois receptação é crime contra o patrimônio.",
        "Errada. Não há essa vedação.",
      ],
      [
        "O delegado só pode conceder fiança se o Ministério Público concordar previamente.",
        "Errada. Não se exige manifestação prévia do MP.",
      ],
    ],
    correta: "B",
    explicacao:
      "A autoridade policial concede fiança se a pena máxima não superar 4 anos. Nesse caso, o valor vai de 1 a 100 salários mínimos, podendo ser reduzido até 2/3, dispensado ou aumentado até mil vezes, conforme a situação econômica do preso.",
    conceito: "Fiança arbitrada pelo delegado.",
    lembrar: "Delegado: pena máxima até 4 anos, de 1 a 100 salários mínimos.",
    referencia: "CPP, arts. 322 e 325.",
  }),
  q({
    id: "pp-gravacao",
    tema: "Interceptação e gravação",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca da Lei 9.296/1996 e de temas correlatos, assinale a opção correta.",
    alternativas: [
      [
        "A lei não se aplica à interceptação do fluxo de comunicações em sistemas de informática.",
        "Errada. Aplica-se também a esse fluxo (art. 1º, parágrafo único).",
      ],
      [
        "Em regra, é lícita a gravação de conversa por um dos interlocutores sem que o outro saiba.",
        "Correta. Entendimento do STF (Tema 237).",
      ],
      [
        "O pedido de interceptação deve ser sempre formulado por escrito, sem qualquer exceção.",
        "Errada. Excepcionalmente, admite-se pedido verbal, reduzido a termo (art. 4º, § 1º).",
      ],
      [
        "A interceptação pode ser autorizada por trinta dias, prorrogáveis uma única vez.",
        "Errada. O prazo é de quinze dias, renovável por igual tempo.",
      ],
      [
        "O conteúdo interceptado pode ser divulgado pela autoridade policial para informar a sociedade.",
        "Errada. As diligências são sigilosas, e quebrar o segredo é crime.",
      ],
    ],
    correta: "B",
    explicacao:
      "Interceptação (terceiro capta sem conhecimento dos interlocutores) depende de ordem judicial. Gravação feita por um dos interlocutores, em regra, é lícita, ressalvadas causas legais de sigilo.",
    conceito: "Interceptação × gravação clandestina.",
    lembrar: "Um dos interlocutores gravou? Em regra, prova lícita.",
    referencia: "Lei 9.296/1996, arts. 1º, 4º, 5º e 10; STF, RE 583.937 (Tema 237).",
  }),
  q({
    id: "pp-reconhecimento-foto",
    tema: "Reconhecimento de pessoas",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Na delegacia, mostraram à vítima de roubo apenas uma foto do suspeito, perguntando se era ele o autor. A vítima confirmou. Não houve descrição prévia nem alinhamento com outras pessoas, e não há outras provas de autoria. Considerando essa situação hipotética e a jurisprudência do STJ, assinale a opção correta.",
    alternativas: [
      [
        "O reconhecimento é válido e suficiente para a condenação, pois a vítima foi categórica.",
        "Errada. Para o STJ, o reconhecimento que desrespeita o art. 226 não basta para condenar.",
      ],
      [
        "Feito sem as formalidades do art. 226, o reconhecimento não basta, sozinho, para condenar.",
        "Correta. O STJ considera o procedimento do art. 226 garantia mínima, não mera recomendação.",
      ],
      [
        "A irregularidade é sanada se a vítima repetir o reconhecimento em juízo, da mesma forma.",
        "Errada. Repetir um reconhecimento viciado não corrige o vício.",
      ],
      [
        "O art. 226 é mera recomendação, e sua inobservância não tem consequência processual.",
        "Errada. O STJ superou esse entendimento.",
      ],
      [
        "O reconhecimento fotográfico é proibido em qualquer hipótese, inclusive como etapa investigativa.",
        "Errada. Pode ser usado com cautela, observado o procedimento, e corroborado por outras provas.",
      ],
    ],
    correta: "B",
    explicacao:
      "O STJ entende que o procedimento do art. 226 do CPP é garantia mínima: descrição prévia, alinhamento com pessoas semelhantes e auto. O reconhecimento que não o observa não pode, sozinho, fundamentar a condenação.",
    conceito: "Reconhecimento de pessoas segundo o STJ.",
    lembrar: "Uma foto só, sem procedimento, não condena ninguém.",
    referencia: "CPP, art. 226; STJ, HC 598.886.",
  }),
  q({
    id: "pp-indisponibilidade",
    tema: "Ação penal",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo o CPP, uma vez proposta a ação penal pública, o Ministério Público",
    alternativas: [
      ["poderá desistir dela, se surgirem dúvidas sobre a autoria.", "Errada. O MP não pode desistir da ação penal."],
      ["não poderá desistir da ação penal.", "Correta. Art. 42 (princípio da indisponibilidade)."],
      ["poderá desistir, com concordância do acusado.", "Errada. A concordância do réu não autoriza desistência."],
      ["poderá transferi-la ao ofendido, que passa a ser o autor.", "Errada. Não há essa previsão."],
      ["poderá desistir até o interrogatório do réu.", "Errada. Não há prazo para desistência; ela é vedada."],
    ],
    correta: "B",
    explicacao:
      "Na ação penal pública vigora a indisponibilidade: o MP não pode desistir da ação nem do recurso interposto. Ele pode, porém, pedir a absolvição ao final, se entender cabível.",
    conceito: "Princípio da indisponibilidade.",
    lembrar: "MP não desiste da ação (pode pedir absolvição).",
    referencia: "CPP, arts. 42 e 576.",
  }),
  q({
    id: "pp-acesso-defensor",
    tema: "Inquérito policial",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "O advogado de um investigado pediu acesso integral aos autos de inquérito que tramita sob sigilo. Parte das provas já está documentada nos autos, mas há uma interceptação telefônica em andamento, ainda não concluída. Considerando essa situação hipotética e a Súmula Vinculante 14, assinale a opção correta.",
    alternativas: [
      [
        "O acesso deve ser negado integralmente, pois o sigilo do inquérito alcança também o defensor.",
        "Errada. O sigilo não pode ser oposto ao defensor quanto ao que já está documentado.",
      ],
      [
        "O advogado tem acesso aos elementos já documentados, mas não às diligências em andamento.",
        "Correta. É o alcance da Súmula Vinculante 14.",
      ],
      [
        "O advogado tem acesso a tudo, inclusive à interceptação em curso, por força da ampla defesa.",
        "Errada. Diligências em andamento podem permanecer sigilosas para não frustrar a investigação.",
      ],
      [
        "O acesso depende de autorização prévia do Ministério Público, titular da ação penal.",
        "Errada. O acesso é direito do defensor e não depende de autorização do MP.",
      ],
      [
        "O acesso só será permitido após o relatório final, quando o inquérito estiver concluído.",
        "Errada. O direito existe durante a investigação, quanto ao já documentado.",
      ],
    ],
    correta: "B",
    explicacao:
      "É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório, digam respeito ao exercício do direito de defesa. Diligências em curso podem ser preservadas.",
    conceito: "Súmula Vinculante 14.",
    lembrar: "Documentado: o advogado vê. Em andamento: pode ficar em sigilo.",
    referencia: "Súmula Vinculante 14; CPP, art. 20; Lei 8.906/1994, art. 7º, XIV.",
  }),
]

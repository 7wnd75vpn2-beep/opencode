import { make } from "./make"

const q = make("Legislação Penal Especial")

export const ESPECIAL = [
  q({
    id: "le-trafico-privilegiado",
    tema: "Lei de Drogas",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "João, primário e de bons antecedentes, foi preso em flagrante vendendo pequena quantidade de cocaína. Não há indícios de que se dedique a atividades criminosas ou integre organização criminosa. Considerando essa situação hipotética, a Lei 11.343/2006 e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "João pode ter a pena reduzida de 1/6 a 2/3, e o tráfico privilegiado não é equiparado a hediondo.",
        "Correta. Art. 33, § 4º, da Lei 11.343/2006; o STF afastou o caráter hediondo do tráfico privilegiado (hoje também no art. 112, § 5º, da LEP).",
      ],
      [
        "João responde por porte para consumo pessoal, pois a quantidade de droga apreendida era pequena.",
        "Errada. A venda caracteriza tráfico; a quantidade, sozinha, não define o usuário.",
      ],
      [
        "A redução de pena é vedada, pois o tráfico de drogas é crime equiparado a hediondo em todas as suas formas.",
        "Errada. O tráfico privilegiado admite redução e não é equiparado a hediondo.",
      ],
      [
        "João tem direito à redução de pena de metade, aplicada obrigatoriamente pelo delegado no auto de prisão.",
        "Errada. A redução é de 1/6 a 2/3, aplicada pelo juiz na sentença.",
      ],
      [
        "A redução só é possível se João colaborar com a investigação, indicando os demais integrantes do grupo.",
        "Errada. A colaboração não é requisito do tráfico privilegiado.",
      ],
    ],
    correta: "A",
    explicacao:
      "O § 4º do art. 33 permite reduzir a pena de 1/6 a 2/3 se o agente for primário, de bons antecedentes, não se dedicar às atividades criminosas nem integrar organização criminosa. O STF decidiu que o tráfico privilegiado não é equiparado a hediondo.",
    conceito: "Tráfico privilegiado.",
    lembrar: "Primário + bons antecedentes + sem organização = reduz de 1/6 a 2/3, sem natureza hedionda.",
    referencia: "Lei 11.343/2006, art. 33, § 4º; LEP, art. 112, § 5º; STF, HC 118.533.",
  }),
  q({
    id: "le-drogas-assertivas",
    tema: "Lei de Drogas",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca da Lei 11.343/2006, assinale a opção correta.",
    alternativas: [
      [
        "O porte de droga para consumo pessoal é punido com detenção de seis meses a dois anos, e multa.",
        "Errada. O art. 28 prevê advertência, prestação de serviços e medida educativa; não há pena de prisão.",
      ],
      [
        "Com indiciado preso, o inquérito por tráfico deve ser concluído em dez dias, prorrogáveis por igual prazo.",
        "Errada. O prazo é de 30 dias (preso) e 90 dias (solto), que podem ser duplicados pelo juiz.",
      ],
      [
        "O tráfico de drogas é crime hediondo, previsto no rol do art. 1º da Lei 8.072/1990.",
        "Errada. O tráfico é equiparado a hediondo (CF, art. 5º, XLIII), não consta do rol de hediondos.",
      ],
      [
        "Oferecer droga eventualmente, sem lucro, a pessoa próxima para juntos consumirem tem pena menor que a do tráfico.",
        "Correta. Art. 33, § 3º: detenção de 6 meses a 1 ano, e multa, sem prejuízo das penas do art. 28.",
      ],
      [
        "A quantidade apreendida é o único critério legal para distinguir o usuário do traficante.",
        "Errada. O juiz considera natureza e quantidade, local, condições da ação, circunstâncias sociais e pessoais, conduta e antecedentes.",
      ],
    ],
    correta: "D",
    explicacao:
      "A Lei de Drogas diferencia o usuário (sem prisão) do traficante. O uso compartilhado eventual, sem lucro, tem pena própria e bem menor. Para definir o destino da droga, a lei manda considerar vários critérios, não só a quantidade.",
    conceito: "Usuário × traficante × uso compartilhado.",
    lembrar: "Inquérito na Lei de Drogas: 30 (preso) e 90 (solto), duplicáveis.",
    referencia: "Lei 11.343/2006, arts. 28, 33, § 3º, e 51.",
  }),
  q({
    id: "le-drogas-inquerito",
    tema: "Lei de Drogas",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Nos crimes da Lei 11.343/2006, o inquérito policial será concluído no prazo de",
    alternativas: [
      ["10 dias, se o indiciado estiver preso, e 30 dias, se solto, prorrogáveis por igual período.", "Errada. Esses são os prazos gerais do CPP."],
      ["15 dias, se o indiciado estiver preso, e 60 dias, se solto, improrrogáveis.", "Errada. Não correspondem à lei especial."],
      ["30 dias, se o indiciado estiver preso, e 90 dias, se solto, podendo ser duplicados pelo juiz.", "Correta. Art. 51 da Lei 11.343/2006."],
      ["5 dias, se o indiciado estiver preso, e 15 dias, se solto, como na denúncia.", "Errada. Esses são prazos de denúncia no CPP."],
      ["90 dias em qualquer caso, prorrogáveis por mais 90 dias a pedido do delegado.", "Errada. Há prazos distintos para preso e solto."],
    ],
    correta: "C",
    explicacao: "Na Lei de Drogas, o inquérito tem prazo de 30 dias (preso) e 90 dias (solto). Os prazos podem ser duplicados pelo juiz, ouvido o MP, mediante pedido justificado da autoridade policial.",
    conceito: "Prazos do inquérito na Lei de Drogas.",
    lembrar: "Drogas: 30/90, duplicáveis.",
    referencia: "Lei 11.343/2006, art. 51.",
  }),
  q({
    id: "le-maconha-stf",
    tema: "Lei de Drogas",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Durante abordagem, policiais encontraram com Paulo 20 g de maconha. Não havia balança, anotações, dinheiro fracionado ou qualquer outro indício de comércio. Considerando essa situação hipotética e o entendimento firmado pelo STF em 2024, assinale a opção correta.",
    alternativas: [
      [
        "Paulo deve ser preso em flagrante por tráfico, pois qualquer porte de maconha é crime equiparado a hediondo.",
        "Errada. Sem indícios de comércio e abaixo do parâmetro fixado, presume-se o uso pessoal.",
      ],
      [
        "A conduta é crime do art. 28, punido com pena de prestação de serviços e lavratura de termo circunstanciado.",
        "Errada. Para a maconha, o STF afastou a natureza penal do porte para consumo pessoal.",
      ],
      [
        "Presume-se usuário quem porta até 40 g, e o porte de maconha para uso próprio não é infração penal.",
        "Correta. Tese do STF no RE 635.659 (Tema 506): presunção relativa de usuário até 40 g ou seis plantas fêmeas.",
      ],
      [
        "A conduta deixou de ser ilícita em qualquer esfera, de modo que a droga deve ser devolvida a Paulo.",
        "Errada. A conduta continua ilícita na esfera administrativa, e a droga é apreendida.",
      ],
      [
        "A presunção de usuário é absoluta até 40 g, impedindo a prisão por tráfico mesmo com prova de venda.",
        "Errada. A presunção é relativa: provas de comércio permitem enquadrar como tráfico.",
      ],
    ],
    correta: "C",
    explicacao:
      "Em 2024, o STF fixou que não comete infração penal quem adquire, guarda ou transporta maconha para consumo pessoal; a conduta continua ilícita, com sanções administrativas. Presume-se usuário quem porta até 40 g ou seis plantas fêmeas, presunção que admite prova em contrário.",
    conceito: "Porte de maconha para uso pessoal após o Tema 506.",
    lembrar: "Maconha para uso: ilícito administrativo; até 40 g presume usuário (relativo).",
    referencia: "STF, RE 635.659 (Tema 506); Lei 11.343/2006, art. 28.",
  }),
  q({
    id: "le-penha-acao",
    tema: "Lei Maria da Penha",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Ana registrou ocorrência porque o companheiro lhe causou lesão corporal leve em casa. Dias depois, voltou à delegacia dizendo que haviam se reconciliado e que não queria mais que o caso seguisse. Considerando essa situação hipotética e a jurisprudência do STJ, assinale a opção correta.",
    alternativas: [
      [
        "Como a lesão é leve, a ação depende de representação, e a retratação de Ana extingue o procedimento.",
        "Errada. Na violência doméstica, a lesão corporal leve é de ação pública incondicionada (Súmula 542 do STJ).",
      ],
      [
        "A ação é pública incondicionada, e a vontade manifestada por Ana não impede o prosseguimento.",
        "Correta. Súmula 542 do STJ.",
      ],
      [
        "Ana pode renunciar à representação na própria delegacia, desde que o faça por escrito.",
        "Errada. Não há representação a renunciar; e, quando cabível, a renúncia só ocorre perante o juiz, em audiência.",
      ],
      [
        "O caso deve ser encaminhado ao Juizado Especial Criminal para tentativa de transação penal.",
        "Errada. A Lei 9.099/1995 não se aplica aos casos de violência doméstica contra a mulher (art. 41).",
      ],
      [
        "O fato é insignificante, pois a reconciliação demonstra a ausência de lesão relevante ao bem jurídico.",
        "Errada. O STJ não admite a insignificância nos crimes e contravenções contra a mulher no âmbito doméstico (Súmula 589).",
      ],
    ],
    correta: "B",
    explicacao:
      "A lesão corporal resultante de violência doméstica contra a mulher é de ação penal pública incondicionada. A Lei 9.099/1995 não se aplica, e não cabe o princípio da insignificância.",
    conceito: "Ação penal na violência doméstica.",
    lembrar: "Lesão leve doméstica contra mulher: incondicionada (Súmula 542).",
    referencia: "Lei 11.340/2006, art. 41; Súmulas 542 e 589 do STJ.",
  }),
  q({
    id: "le-penha-assertivas",
    tema: "Lei Maria da Penha",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca da Lei 11.340/2006 e da jurisprudência do STJ, assinale a opção correta.",
    alternativas: [
      [
        "O princípio da insignificância aplica-se às contravenções penais praticadas contra a mulher no âmbito doméstico.",
        "Errada. Súmula 589 do STJ: é inaplicável o princípio da insignificância nesses casos.",
      ],
      [
        "A configuração da violência doméstica exige que agressor e vítima morem juntos.",
        "Errada. Súmula 600 do STJ: não se exige coabitação.",
      ],
      [
        "Nos crimes com violência doméstica contra a mulher, não se aplica a Lei 9.099/1995, qualquer que seja a pena.",
        "Correta. Art. 41 da Lei 11.340/2006.",
      ],
      [
        "A renúncia à representação pode ser feita na delegacia a qualquer tempo, antes do relatório final.",
        "Errada. Só perante o juiz, em audiência designada para isso, antes do recebimento da denúncia (art. 16).",
      ],
      [
        "A pena privativa de liberdade pode ser substituída por restritiva de direitos mesmo com violência à mulher.",
        "Errada. Súmula 588 do STJ veda a substituição nos crimes ou contravenções com violência ou grave ameaça.",
      ],
    ],
    correta: "C",
    explicacao:
      "A Lei Maria da Penha afasta os institutos despenalizadores da Lei 9.099/1995. O STJ veda a insignificância e a substituição por penas restritivas quando há violência ou grave ameaça e dispensa a coabitação.",
    conceito: "Regime jurídico da violência doméstica.",
    lembrar: "Maria da Penha: sem JECRIM, sem insignificância, sem coabitação obrigatória.",
    referencia: "Lei 11.340/2006, arts. 5º, 16 e 41; Súmulas 588, 589 e 600 do STJ.",
  }),
  q({
    id: "le-penha-afastamento",
    tema: "Lei Maria da Penha",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Em um município que não é sede de comarca, uma mulher procura a delegacia relatando risco atual à sua vida, causado pelo companheiro, com quem mora. O delegado de polícia está presente na unidade. Considerando essa situação hipotética e a Lei 11.340/2006, assinale a opção correta.",
    alternativas: [
      [
        "O delegado deve apenas registrar a ocorrência e aguardar a decisão judicial, pois medidas protetivas são exclusivas do juiz.",
        "Errada. A lei permite ao delegado afastar o agressor do lar quando o município não for sede de comarca.",
      ],
      [
        "O delegado pode afastar imediatamente o agressor do lar, comunicando o juiz em até 24 horas.",
        "Correta. Art. 12-C, II, e § 1º.",
      ],
      [
        "Qualquer policial pode determinar o afastamento, mesmo com o delegado presente na unidade.",
        "Errada. O policial só pode agir quando o município não for sede de comarca e não houver delegado disponível.",
      ],
      [
        "O delegado pode decretar a prisão preventiva do agressor, por se tratar de violência doméstica.",
        "Errada. A prisão preventiva é decretada pelo juiz.",
      ],
      [
        "O afastamento depende de prévia manifestação do Ministério Público, a ser colhida em 48 horas.",
        "Errada. O afastamento é imediato; o juiz é comunicado em 24 horas e decide em igual prazo, dando ciência ao MP.",
      ],
    ],
    correta: "B",
    explicacao:
      "Havendo risco atual ou iminente à vida ou à integridade da mulher, o agressor será imediatamente afastado do lar: pelo juiz; pelo delegado, se o município não for sede de comarca; ou pelo policial, se além disso não houver delegado disponível. O juiz é comunicado em 24 horas.",
    conceito: "Afastamento do agressor pela autoridade policial.",
    lembrar: "Sem comarca: delegado afasta. Sem comarca e sem delegado: o policial afasta.",
    referencia: "Lei 11.340/2006, art. 12-C.",
  }),
  q({
    id: "le-penha-descumprimento",
    tema: "Lei Maria da Penha",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Em caso de prisão em flagrante pelo crime de descumprimento de medida protetiva de urgência (art. 24-A da Lei 11.340/2006),",
    alternativas: [
      ["o delegado pode conceder fiança, se a pena máxima não superar quatro anos.", "Errada. A lei reserva a fiança, nesse crime, à autoridade judicial."],
      ["apenas a autoridade judicial poderá conceder fiança.", "Correta. Art. 24-A, § 2º."],
      ["a fiança é vedada em qualquer hipótese, por se tratar de crime hediondo.", "Errada. O crime não é hediondo; a fiança pode ser concedida pelo juiz."],
      ["o autor deve ser liberado após assinar termo de compromisso de comparecimento.", "Errada. A Lei 9.099/1995 não se aplica à violência doméstica."],
      ["a prisão só é possível se a medida tiver sido decretada pelo juiz criminal.", "Errada. O crime independe da competência civil ou criminal do juiz que deferiu a medida (§ 1º)."],
    ],
    correta: "B",
    explicacao:
      "O descumprimento de decisão judicial que defere medida protetiva é crime. A configuração independe da competência civil ou criminal do juiz que deferiu a medida, e, no flagrante, só o juiz pode conceder fiança.",
    conceito: "Crime de descumprimento de medida protetiva.",
    lembrar: "Descumpriu medida protetiva: fiança só com o juiz.",
    referencia: "Lei 11.340/2006, art. 24-A.",
  }),
  q({
    id: "le-abuso-divergencia",
    tema: "Abuso de autoridade",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Um delegado de polícia lavrou auto de prisão em flagrante adotando interpretação razoável da lei, sustentada por parte da doutrina. Na audiência de custódia, o juiz relaxou a prisão por entender que a interpretação correta era outra. Não havia intenção de prejudicar o preso. Considerando essa situação hipotética e a Lei 13.869/2019, assinale a opção correta.",
    alternativas: [
      [
        "O delegado cometeu abuso de autoridade, pois toda prisão relaxada pelo juiz configura o crime.",
        "Errada. O relaxamento, por si, não caracteriza abuso.",
      ],
      [
        "Não há abuso de autoridade, pois a divergência na interpretação da lei não configura o crime.",
        "Correta. Art. 1º, § 2º, da Lei 13.869/2019.",
      ],
      [
        "O delegado responde por abuso de autoridade na forma culposa, por ter adotado interpretação minoritária.",
        "Errada. A lei não prevê modalidade culposa.",
      ],
      [
        "Há abuso de autoridade, mas a ação penal depende de representação do preso no prazo de seis meses.",
        "Errada. A ação é pública incondicionada, e o caso não configura crime.",
      ],
      [
        "Não há crime, pois a Lei de Abuso de Autoridade não se aplica a delegados de polícia.",
        "Errada. Aplica-se a qualquer agente público, inclusive delegados.",
      ],
    ],
    correta: "B",
    explicacao:
      "Os crimes de abuso de autoridade exigem dolo com finalidade específica (prejudicar outrem, beneficiar a si ou a terceiro, mero capricho ou satisfação pessoal). A divergência na interpretação da lei ou na avaliação de fatos e provas não configura abuso.",
    conceito: "Elemento subjetivo do abuso de autoridade.",
    lembrar: "Interpretação divergente não é abuso.",
    referencia: "Lei 13.869/2019, art. 1º, §§ 1º e 2º.",
  }),
  q({
    id: "le-abuso-assertivas",
    tema: "Abuso de autoridade",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca da Lei 13.869/2019 (Lei de Abuso de Autoridade), assinale a opção correta.",
    alternativas: [
      [
        "Os crimes previstos na lei são de ação penal privada, cabendo ao ofendido oferecer queixa.",
        "Errada. São de ação penal pública incondicionada, admitida a privada subsidiária.",
      ],
      [
        "A perda do cargo é efeito automático de toda condenação por abuso de autoridade.",
        "Errada. Depende de reincidência e deve ser declarada motivadamente na sentença.",
      ],
      [
        "A lei admite modalidade culposa para os crimes praticados por agentes de segurança pública.",
        "Errada. Não há modalidade culposa.",
      ],
      [
        "Somente servidores ocupantes de cargo efetivo podem ser sujeitos ativos desses crimes.",
        "Errada. Agente público, para a lei, inclui quem exerce função transitoriamente ou sem remuneração.",
      ],
      [
        "Os crimes exigem finalidade de prejudicar alguém, beneficiar a si ou a terceiro, ou mero capricho.",
        "Correta. Art. 1º, § 1º.",
      ],
    ],
    correta: "E",
    explicacao:
      "Abuso de autoridade: dolo específico, ação penal pública incondicionada, sujeito ativo amplo (qualquer agente público), e perda do cargo condicionada à reincidência e à declaração motivada na sentença.",
    conceito: "Regras gerais da Lei de Abuso de Autoridade.",
    lembrar: "Abuso: dolo específico, ação incondicionada, perda do cargo só com reincidência.",
    referencia: "Lei 13.869/2019, arts. 1º a 4º.",
  }),
  q({
    id: "le-abuso-exibicao",
    tema: "Abuso de autoridade",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Após prenderem um suspeito, policiais o obrigaram, sob ameaça, a posar algemado para fotos e vídeos de jornalistas na porta da delegacia, com o objetivo de expô-lo. Considerando essa situação hipotética e a Lei 13.869/2019, a conduta configura, em tese,",
    alternativas: [
      ["fato atípico, pois a divulgação de prisões atende ao interesse público na informação.", "Errada. Constranger o preso a exibir-se à curiosidade pública é crime."],
      ["abuso de autoridade, por constranger o preso a exibir-se à curiosidade pública.", "Correta. Art. 13, I, da Lei 13.869/2019."],
      ["mera infração disciplinar, sem repercussão penal para os policiais envolvidos.", "Errada. A lei tipifica a conduta como crime."],
      ["tortura-castigo, pois houve sofrimento mental imposto como forma de punição.", "Errada. A conduta se ajusta ao tipo específico de abuso de autoridade."],
      ["crime de constrangimento ilegal, previsto apenas no Código Penal.", "Errada. Há tipo específico na lei especial."],
    ],
    correta: "B",
    explicacao:
      "É crime constranger o preso, mediante violência, grave ameaça ou redução de sua capacidade de resistência, a exibir-se ou ter seu corpo exibido à curiosidade pública ou a submeter-se a situação vexatória.",
    conceito: "Exposição vexatória do preso.",
    lembrar: "Forçar o preso a “posar” para a imprensa: abuso de autoridade (art. 13).",
    referencia: "Lei 13.869/2019, art. 13.",
  }),
  q({
    id: "le-tortura-castigo",
    tema: "Lei de Tortura",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "O carcereiro de uma delegacia, irritado porque um preso sob sua guarda o xingou, levou-o para uma sala isolada e o espancou durante horas, causando intenso sofrimento físico, como forma de castigá-lo. Considerando essa situação hipotética e a Lei 9.455/1997, a conduta configura, em tese,",
    alternativas: [
      ["lesão corporal leve, pois não houve finalidade de obter informação ou confissão.", "Errada. A tortura-castigo dispensa a finalidade de obter informação."],
      ["abuso de autoridade, por ser o carcereiro agente público no exercício da função.", "Errada. A conduta se ajusta à tortura, tipo mais grave e específico."],
      ["tortura, por impor intenso sofrimento, como castigo, a pessoa sob sua guarda.", "Correta. Art. 1º, II, da Lei 9.455/1997, com aumento por ser agente público."],
      ["maus-tratos, previsto no Código Penal, por excesso nos meios de correção.", "Errada. O sofrimento intenso como castigo a pessoa sob guarda caracteriza tortura."],
      ["exercício arbitrário das próprias razões, pois o carcereiro reagiu à ofensa.", "Errada. Não se trata de satisfazer pretensão legítima."],
    ],
    correta: "C",
    explicacao:
      "A Lei 9.455/1997 tipifica a tortura-prova (obter informação), a tortura-crime (provocar ação criminosa), a tortura-discriminação e a tortura-castigo: submeter alguém sob sua guarda, poder ou autoridade a intenso sofrimento como castigo ou medida preventiva. Ser agente público aumenta a pena.",
    conceito: "Espécies de tortura.",
    lembrar: "Castigo com intenso sofrimento a quem está sob guarda = tortura.",
    referencia: "Lei 9.455/1997, art. 1º, II e § 4º, I.",
  }),
  q({
    id: "le-tortura-assertivas",
    tema: "Lei de Tortura",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca da Lei 9.455/1997, assinale a opção correta.",
    alternativas: [
      [
        "Quem se omite diante da tortura, tendo o dever de evitá-la, recebe a mesma pena do torturador.",
        "Errada. A omissão tem pena menor: detenção de 1 a 4 anos (§ 2º).",
      ],
      [
        "O crime de tortura é imprescritível, tal como o racismo, por expressa previsão constitucional.",
        "Errada. A tortura é inafiançável e insuscetível de graça ou anistia, mas prescreve.",
      ],
      [
        "A condenação acarreta a perda do cargo e a interdição para seu exercício pelo dobro do prazo da pena.",
        "Correta. Art. 1º, § 5º; o efeito é automático.",
      ],
      [
        "A lei só se aplica a crimes de tortura cometidos em território nacional, sem exceções.",
        "Errada. Aplica-se também se a vítima for brasileira ou o agente estiver em local sob jurisdição brasileira (art. 2º).",
      ],
      [
        "A tortura é crime próprio, que só pode ser cometido por agente público no exercício da função.",
        "Errada. Em regra, é crime comum; ser agente público é causa de aumento de pena.",
      ],
    ],
    correta: "C",
    explicacao:
      "Na Lei de Tortura, a perda do cargo é efeito automático da condenação. A tortura é, em regra, crime comum, com aumento se cometida por agente público. A omissão de quem devia evitar ou apurar é punida com pena menor.",
    conceito: "Efeitos da condenação e alcance da Lei de Tortura.",
    lembrar: "Tortura: perda do cargo automática + interdição pelo dobro da pena.",
    referencia: "Lei 9.455/1997, arts. 1º e 2º.",
  }),
  q({
    id: "le-hediondos-rol",
    tema: "Crimes hediondos",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Assinale a opção que apresenta crime que NÃO consta do rol de crimes hediondos da Lei 8.072/1990, embora receba tratamento constitucional equiparado.",
    alternativas: [
      ["Latrocínio.", "Errada como resposta: é hediondo (art. 1º, II, “c”)."],
      ["Estupro de vulnerável.", "Errada como resposta: é hediondo (art. 1º, VI)."],
      ["Extorsão mediante sequestro.", "Errada como resposta: é hediondo (art. 1º, IV)."],
      ["Tráfico ilícito de drogas.", "Correta. É equiparado a hediondo pela CF, mas não integra o rol do art. 1º."],
      ["Homicídio qualificado.", "Errada como resposta: é hediondo (art. 1º, I)."],
    ],
    correta: "D",
    explicacao:
      "Tráfico de drogas, tortura e terrorismo (TTT) são equiparados a hediondos pela CF e recebem o mesmo tratamento rigoroso, mas não constam do rol taxativo do art. 1º da Lei 8.072/1990.",
    conceito: "Hediondos × equiparados.",
    lembrar: "TTT (tráfico, tortura, terrorismo): equiparados, não hediondos.",
    referencia: "CF/1988, art. 5º, XLIII; Lei 8.072/1990, arts. 1º e 2º.",
  }),
  q({
    id: "le-hediondos-assertivas",
    tema: "Crimes hediondos",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca da Lei 8.072/1990, assinale a opção correta.",
    alternativas: [
      [
        "A pena por crime hediondo deve ser cumprida integralmente em regime fechado, sem progressão.",
        "Errada. A progressão é admitida, com os percentuais do art. 112 da LEP.",
      ],
      [
        "A prisão temporária, nesses crimes, tem prazo de cinco dias, prorrogável por igual período.",
        "Errada. Nos hediondos e equiparados, o prazo é de 30 dias, prorrogável por igual período.",
      ],
      [
        "Os crimes hediondos são insuscetíveis de anistia, graça, indulto e fiança.",
        "Correta. Art. 2º, I e II.",
      ],
      [
        "O rol de crimes hediondos é exemplificativo, podendo o juiz reconhecer outros crimes graves.",
        "Errada. O rol é taxativo; só a lei define crime hediondo.",
      ],
      [
        "A liberdade provisória é vedada em qualquer hipótese aos acusados de crimes hediondos.",
        "Errada. A vedação foi retirada da lei e o STF considera inconstitucional a proibição abstrata.",
      ],
    ],
    correta: "C",
    explicacao:
      "Hediondos e equiparados: sem anistia, graça, indulto e fiança; prisão temporária de 30 + 30 dias; progressão de regime com percentuais mais altos. A liberdade provisória sem fiança é possível.",
    conceito: "Restrições aos crimes hediondos.",
    lembrar: "Hediondo: sem anistia, graça, indulto e fiança. Temporária 30 + 30.",
    referencia: "Lei 8.072/1990, art. 2º; LEP, art. 112.",
  }),
  q({
    id: "le-posse-arma",
    tema: "Estatuto do Desarmamento",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Em cumprimento de mandado de busca, policiais encontraram, dentro da casa de Lúcio, um revólver de uso permitido, municiado, sem registro. Lúcio é o proprietário do imóvel. Considerando essa situação hipotética e a Lei 10.826/2003, Lúcio responde, em tese, por",
    alternativas: [
      ["porte ilegal de arma de fogo de uso permitido.", "Errada. Manter a arma no interior da própria residência caracteriza posse, não porte."],
      ["posse irregular de arma de fogo de uso permitido.", "Correta. Art. 12: possuir ou manter sob sua guarda, no interior de sua residência."],
      ["posse ou porte ilegal de arma de fogo de uso restrito.", "Errada. O revólver descrito é de uso permitido."],
      ["fato atípico, pois a arma estava em sua própria residência.", "Errada. A posse sem registro é crime."],
      ["disparo de arma de fogo, por estar a arma municiada.", "Errada. Não houve disparo."],
    ],
    correta: "B",
    explicacao:
      "Posse (art. 12): manter arma de uso permitido em desacordo com a lei no interior da residência ou no local de trabalho, sendo o titular ou responsável. Porte (art. 14): fora dessas situações. Arma de uso restrito ou proibido: art. 16.",
    conceito: "Posse × porte de arma de fogo.",
    lembrar: "Dentro de casa: posse (art. 12). Na rua: porte (art. 14).",
    referencia: "Lei 10.826/2003, arts. 12, 14 e 16.",
  }),
  q({
    id: "le-arma-desmuniciada",
    tema: "Estatuto do Desarmamento",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Em abordagem de trânsito, policiais encontraram no porta-luvas do carro de Jorge uma pistola de uso permitido, desmuniciada e sem munição no veículo. Jorge não tinha autorização para portar arma. Considerando essa situação hipotética e a jurisprudência dos tribunais superiores, assinale a opção correta.",
    alternativas: [
      [
        "O fato é atípico, pois arma desmuniciada não tem potencial lesivo imediato.",
        "Errada. Para STF e STJ, o porte de arma desmuniciada é crime de perigo abstrato.",
      ],
      [
        "Jorge responde por posse irregular, pois a arma estava dentro de seu veículo particular.",
        "Errada. O veículo não é residência nem local de trabalho; trata-se de porte.",
      ],
      [
        "Jorge responde por porte ilegal de arma de uso permitido, crime de perigo abstrato.",
        "Correta. Art. 14 da Lei 10.826/2003.",
      ],
      [
        "Jorge só responderia por crime se houvesse prova pericial de que a arma estava apta a disparar e municiada.",
        "Errada. A ausência de munição não afasta o crime; a aptidão da arma é aferida por perícia, mas munição não é exigida.",
      ],
      [
        "O crime é inafiançável, por expressa previsão do Estatuto do Desarmamento.",
        "Errada. O STF declarou inconstitucional a inafiançabilidade do porte de uso permitido (ADI 3.112).",
      ],
    ],
    correta: "C",
    explicacao:
      "O porte ilegal de arma de fogo é crime de perigo abstrato: basta portar sem autorização. A arma desmuniciada não descaracteriza o crime. A vedação de fiança do art. 14 foi declarada inconstitucional.",
    conceito: "Porte de arma desmuniciada.",
    lembrar: "Arma desmuniciada no carro, sem autorização: porte ilegal.",
    referencia: "Lei 10.826/2003, art. 14; STF, ADI 3.112.",
  }),
  q({
    id: "le-armas-assertivas",
    tema: "Estatuto do Desarmamento",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca dos crimes previstos na Lei 10.826/2003, assinale a opção correta.",
    alternativas: [
      [
        "O empregado que mantém arma irregular no local de trabalho comete posse irregular de arma de fogo.",
        "Errada. A posse do art. 12 no local de trabalho exige que o agente seja o titular ou responsável pela empresa.",
      ],
      [
        "Disparar arma de fogo em via pública é crime, desde que a conduta não tenha como finalidade outro crime.",
        "Correta. Art. 15 da Lei 10.826/2003.",
      ],
      [
        "A posse de arma de uso proibido tem a mesma pena da posse de arma de uso permitido.",
        "Errada. Arma de uso proibido tem pena de 4 a 12 anos (art. 16, § 2º).",
      ],
      [
        "O porte ilegal de arma de uso permitido é inafiançável, segundo a jurisprudência do STF.",
        "Errada. O STF declarou inconstitucional essa inafiançabilidade.",
      ],
      [
        "Portar apenas munição, sem a arma, é conduta sempre atípica, por ausência de perigo.",
        "Errada. Em regra, é crime de perigo abstrato; a insignificância só é admitida em casos excepcionais.",
      ],
    ],
    correta: "B",
    explicacao:
      "O disparo de arma de fogo em lugar habitado, via pública ou em sua direção é crime autônomo, salvo quando a conduta tiver como finalidade a prática de outro crime (subsidiariedade expressa).",
    conceito: "Crimes do Estatuto do Desarmamento.",
    lembrar: "Disparo é crime, se não for meio para outro crime.",
    referencia: "Lei 10.826/2003, arts. 12, 14, 15 e 16.",
  }),
  q({
    id: "le-jecrim-flagrante",
    tema: "Juizados Especiais Criminais",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Durante uma discussão de trânsito, sem qualquer relação doméstica, Carlos agrediu Pedro, causando-lhe lesão corporal leve. Levado à delegacia, Carlos assumiu o compromisso de comparecer ao Juizado Especial Criminal. Considerando essa situação hipotética e a Lei 9.099/1995, assinale a opção correta.",
    alternativas: [
      ["O delegado deve lavrar auto de prisão em flagrante e arbitrar fiança, por se tratar de crime doloso.", "Errada. Assumido o compromisso, não se impõe flagrante nem se exige fiança."],
      ["Lavra-se termo circunstanciado, e não se impõe prisão em flagrante nem se exige fiança.", "Correta. Art. 69, parágrafo único, da Lei 9.099/1995."],
      ["O delegado deve instaurar inquérito policial e representar pela prisão preventiva de Carlos.", "Errada. Nas infrações de menor potencial, lavra-se termo circunstanciado."],
      ["Carlos deve ser liberado sem qualquer registro, pois a lesão leve é fato atípico.", "Errada. A lesão corporal leve é crime."],
      ["A ação penal é pública incondicionada e independe de qualquer manifestação de Pedro.", "Errada. A lesão corporal leve, fora da violência doméstica, depende de representação (Lei 9.099, art. 88)."],
    ],
    correta: "B",
    explicacao:
      "Nas infrações de menor potencial ofensivo, a autoridade policial lavra termo circunstanciado. Ao autor que for imediatamente encaminhado ao juizado ou assumir o compromisso de comparecer, não se imporá prisão em flagrante nem se exigirá fiança.",
    conceito: "Termo circunstanciado e flagrante no JECRIM.",
    lembrar: "Menor potencial + compromisso de comparecer = sem flagrante e sem fiança.",
    referencia: "Lei 9.099/1995, arts. 61, 69 e 88.",
  }),
  q({
    id: "le-menor-potencial",
    tema: "Juizados Especiais Criminais",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Segundo a Lei 9.099/1995, consideram-se infrações penais de menor potencial ofensivo",
    alternativas: [
      ["os crimes com pena mínima não superior a um ano, cumulada ou não com multa.", "Errada. Esse é o critério da suspensão condicional do processo (art. 89)."],
      ["as contravenções penais e os crimes com pena máxima não superior a quatro anos.", "Errada. O limite é de dois anos."],
      ["as contravenções e os crimes com pena máxima não superior a dois anos.", "Correta. Art. 61."],
      ["apenas os crimes punidos exclusivamente com pena de multa, sem prisão.", "Errada. O conceito é mais amplo."],
      ["os crimes culposos em geral, independentemente da pena máxima cominada.", "Errada. O critério é a pena máxima."],
    ],
    correta: "C",
    explicacao: "Menor potencial ofensivo: contravenções e crimes com pena máxima até dois anos. Suspensão condicional do processo: crimes com pena mínima igual ou inferior a um ano.",
    conceito: "Infração de menor potencial ofensivo.",
    lembrar: "JECRIM: máxima até 2 anos. Sursis processual: mínima até 1 ano.",
    referencia: "Lei 9.099/1995, arts. 61 e 89.",
  }),
  q({
    id: "le-orcrim-conceito",
    tema: "Organizações criminosas",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Segundo a Lei 12.850/2013, considera-se organização criminosa a associação de",
    alternativas: [
      [
        "três ou mais pessoas, para o fim específico de cometer crimes de qualquer natureza e gravidade.",
        "Errada. Esse é o conceito de associação criminosa (CP, art. 288).",
      ],
      [
        "quatro ou mais pessoas, ordenada, com divisão de tarefas, para infrações de pena máxima acima de quatro anos.",
        "Correta. Art. 1º, § 1º.",
      ],
      [
        "duas ou mais pessoas, com estabilidade, para a prática reiterada dos crimes previstos na Lei de Drogas.",
        "Errada. Esse é o conceito de associação para o tráfico (Lei 11.343, art. 35).",
      ],
      [
        "quatro ou mais pessoas, ainda que sem divisão de tarefas, para cometer qualquer contravenção penal.",
        "Errada. Exige estrutura ordenada, divisão de tarefas e infrações de pena máxima superior a quatro anos.",
      ],
      [
        "cinco ou mais pessoas armadas, com o objetivo de praticar crimes contra o patrimônio público ou privado.",
        "Errada. Não corresponde ao conceito legal.",
      ],
    ],
    correta: "B",
    explicacao:
      "Organização criminosa: 4 ou mais pessoas, estruturalmente ordenada, com divisão de tarefas, ainda que informal, para obter vantagem mediante infrações com pena máxima superior a 4 anos ou de caráter transnacional.",
    conceito: "Organização × associação criminosa.",
    lembrar: "OrCrim: 4+ pessoas, pena máxima > 4 anos. Associação: 3+ pessoas.",
    referencia: "Lei 12.850/2013, art. 1º, § 1º; CP, art. 288.",
  }),
  q({
    id: "le-colaboracao",
    tema: "Organizações criminosas",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca da colaboração premiada e dos meios de obtenção de prova da Lei 12.850/2013, assinale a opção correta.",
    alternativas: [
      [
        "O juiz participa das negociações do acordo de colaboração, para garantir a voluntariedade do colaborador.",
        "Errada. O juiz não participa das negociações (art. 4º, § 6º); ele homologa o acordo.",
      ],
      [
        "A infiltração de agentes pode ser determinada pelo delegado, comunicando-se o juiz em 24 horas.",
        "Errada. A infiltração depende de prévia autorização judicial.",
      ],
      [
        "A ação controlada dispensa qualquer comunicação ao juiz, por se tratar de técnica policial.",
        "Errada. O retardamento da intervenção será previamente comunicado ao juiz.",
      ],
      [
        "Nenhuma sentença condenatória pode ser fundamentada apenas nas declarações do colaborador.",
        "Correta. Art. 4º, § 16, III.",
      ],
      [
        "Nos depoimentos que prestar, o colaborador mantém o direito ao silêncio sobre os fatos do acordo.",
        "Errada. O colaborador renuncia ao direito ao silêncio e fica sujeito ao compromisso de dizer a verdade.",
      ],
    ],
    correta: "D",
    explicacao:
      "A colaboração premiada é negociada entre as partes e homologada pelo juiz. As declarações do colaborador precisam ser corroboradas por outras provas para fundamentar medidas cautelares, recebimento de denúncia ou condenação.",
    conceito: "Colaboração premiada.",
    lembrar: "Palavra do colaborador sozinha não condena.",
    referencia: "Lei 12.850/2013, arts. 4º, 8º e 10.",
  }),
  q({
    id: "le-acao-controlada",
    tema: "Organizações criminosas",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Investigando organização criminosa, policiais identificaram o transporte de um carregamento de armas e decidiram retardar a intervenção para acompanhar a carga até o depósito dos líderes, a fim de prendê-los em momento mais eficaz para a produção de provas. Considerando essa situação hipotética e a Lei 12.850/2013, assinale a opção correta.",
    alternativas: [
      [
        "Trata-se de flagrante preparado, que torna impossível a consumação e anula a prova.",
        "Errada. Não houve induzimento ao crime; houve retardamento da intervenção.",
      ],
      [
        "Trata-se de ação controlada, previamente comunicada ao juiz, que estabelecerá seus limites.",
        "Correta. Art. 8º, § 1º, da Lei 12.850/2013.",
      ],
      [
        "Os policiais cometem prevaricação, pois tinham o dever de prender em flagrante imediatamente.",
        "Errada. A ação controlada é hipótese legal de flagrante diferido.",
      ],
      [
        "Trata-se de infiltração de agentes, que dispensa autorização judicial quando houver urgência.",
        "Errada. Não houve infiltração; e a infiltração exige autorização judicial prévia.",
      ],
      [
        "A medida só é válida se autorizada previamente pelo Ministério Público, sem participação do juiz.",
        "Errada. A comunicação prévia é dirigida ao juiz, que comunica o MP.",
      ],
    ],
    correta: "B",
    explicacao:
      "A ação controlada consiste em retardar a intervenção policial sobre ação praticada por organização criminosa, mantida sob observação, para que a medida se concretize no momento mais eficaz. É previamente comunicada ao juiz, que, se for o caso, estabelece seus limites.",
    conceito: "Ação controlada (flagrante diferido).",
    lembrar: "Ação controlada: retarda a prisão, comunica o juiz antes.",
    referencia: "Lei 12.850/2013, art. 8º.",
  }),
  q({
    id: "le-racismo-injuria",
    tema: "Crimes de racismo",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca dos crimes resultantes de preconceito de raça ou de cor, considerando a legislação e a jurisprudência atuais, assinale a opção correta.",
    alternativas: [
      [
        "A homotransfobia não pode ser enquadrada na Lei 7.716/1989, por ausência de previsão expressa.",
        "Errada. O STF (ADO 26) enquadrou a homotransfobia nos crimes da Lei 7.716/1989 até que sobrevenha lei específica.",
      ],
      [
        "A injúria racial é crime de ação penal privada, previsto exclusivamente no Código Penal.",
        "Errada. A Lei 14.532/2023 a transferiu para a Lei 7.716/1989 (art. 2º-A), com ação pública incondicionada.",
      ],
      [
        "A injúria racial, hoje prevista na Lei 7.716/1989, é crime inafiançável e imprescritível.",
        "Correta. Tipificada no art. 2º-A, é espécie de racismo, como já reconhecia o STF.",
      ],
      [
        "O racismo prescreve em vinte anos, como os demais crimes com pena elevada.",
        "Errada. O racismo é imprescritível (CF, art. 5º, XLII).",
      ],
      [
        "Recusar atendimento em estabelecimento comercial por motivo de raça é mera infração administrativa.",
        "Errada. A conduta é crime previsto na Lei 7.716/1989.",
      ],
    ],
    correta: "C",
    explicacao:
      "O STF reconheceu a injúria racial como espécie de racismo, imprescritível. A Lei 14.532/2023 deslocou a injúria racial para a Lei 7.716/1989. A homotransfobia foi enquadrada nos crimes de racismo pelo STF.",
    conceito: "Racismo e injúria racial.",
    lembrar: "Injúria racial hoje = racismo: inafiançável e imprescritível.",
    referencia: "Lei 7.716/1989, art. 2º-A; Lei 14.532/2023; STF, ADO 26 e HC 154.248.",
  }),
  q({
    id: "le-eca-apreensao",
    tema: "Estatuto da Criança e do Adolescente",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Um adolescente de 16 anos foi apreendido em flagrante de ato infracional análogo a roubo e conduzido à delegacia. Considerando essa situação hipotética e o ECA, assinale a opção correta.",
    alternativas: [
      [
        "O adolescente pode aguardar em cela com presos adultos, desde que separado por idade dentro dela.",
        "Errada. É vedado manter o adolescente em cela com adultos.",
      ],
      [
        "A apreensão e o local onde ele está devem ser comunicados de imediato ao juiz e à família.",
        "Correta. Art. 107 do ECA.",
      ],
      [
        "A internação provisória pode ser determinada pelo prazo máximo de noventa dias antes da sentença.",
        "Errada. O prazo máximo é de 45 dias (art. 108).",
      ],
      [
        "O adolescente pode ser transportado no compartimento fechado da viatura, se houver risco de fuga.",
        "Errada. O ECA proíbe o transporte em compartimento fechado em condições atentatórias à sua dignidade (art. 178).",
      ],
      [
        "Por ser maior de 16 anos, o adolescente responde pelo crime de roubo previsto no Código Penal.",
        "Errada. O adolescente é inimputável e responde por ato infracional, segundo o ECA.",
      ],
    ],
    correta: "B",
    explicacao:
      "A apreensão de adolescente deve ser comunicada incontinenti à autoridade judiciária e à família ou pessoa indicada. A internação provisória dura no máximo 45 dias, e o adolescente não pode ficar com adultos nem ser transportado de forma atentatória à dignidade.",
    conceito: "Garantias do adolescente apreendido.",
    lembrar: "Adolescente apreendido: comunica juiz e família na hora; provisória máx. 45 dias.",
    referencia: "ECA, arts. 106 a 108, 175 e 178.",
  }),
  q({
    id: "le-eca-internacao",
    tema: "Estatuto da Criança e do Adolescente",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca das medidas socioeducativas previstas no ECA, assinale a opção correta.",
    alternativas: [
      [
        "As medidas socioeducativas aplicam-se a crianças e adolescentes autores de ato infracional.",
        "Errada. À criança aplicam-se apenas medidas de proteção.",
      ],
      [
        "A internação é aplicada por prazo determinado, fixado na sentença conforme a gravidade do ato.",
        "Errada. Não comporta prazo determinado; é reavaliada, no máximo, a cada seis meses.",
      ],
      [
        "A internação não excederá três anos, e a liberação será compulsória aos vinte e um anos.",
        "Correta. Art. 121, §§ 3º e 5º.",
      ],
      [
        "A remissão concedida pelo Ministério Público implica reconhecimento da responsabilidade do adolescente.",
        "Errada. A remissão não implica reconhecimento nem comprovação de responsabilidade (art. 127).",
      ],
      [
        "Para fins do ECA, adolescente é a pessoa entre doze e vinte e um anos de idade.",
        "Errada. Adolescente é quem tem entre 12 e 18 anos; excepcionalmente, o ECA se aplica até os 21.",
      ],
    ],
    correta: "C",
    explicacao:
      "A internação é medida excepcional, sem prazo determinado, reavaliada a cada seis meses, com limite de três anos e liberação compulsória aos 21 anos.",
    conceito: "Medida de internação.",
    lembrar: "Internação: máx. 3 anos, reavalia a cada 6 meses, sai aos 21.",
    referencia: "ECA, arts. 2º, 105, 121 e 127.",
  }),
  q({
    id: "le-ctb-socorro",
    tema: "Crimes de trânsito",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Ao fazer uma conversão, Marina atropelou culposamente um ciclista. Ela parou imediatamente, chamou o socorro, prestou os primeiros cuidados e permaneceu no local até a chegada da polícia. Considerando essa situação hipotética e o Código de Trânsito Brasileiro, assinale a opção correta.",
    alternativas: [
      [
        "Marina deve ser presa em flagrante por lesão corporal culposa, podendo o delegado arbitrar fiança.",
        "Errada. Ao condutor que presta pronto e integral socorro não se impõe flagrante nem se exige fiança.",
      ],
      [
        "Não se imporá prisão em flagrante nem se exigirá fiança, pois Marina prestou pronto e integral socorro.",
        "Correta. Art. 301 do CTB.",
      ],
      [
        "O socorro prestado extingue a punibilidade de Marina pela lesão corporal culposa.",
        "Errada. O socorro afasta o flagrante e a fiança, mas não extingue a punibilidade.",
      ],
      [
        "Marina deve ser presa, pois a lesão culposa no trânsito é crime de ação pública incondicionada.",
        "Errada. A natureza da ação penal não define a prisão em flagrante, e o art. 301 a afasta.",
      ],
      [
        "Marina só ficaria livre do flagrante se a vítima declarasse não ter interesse em representar.",
        "Errada. O art. 301 não depende de manifestação da vítima.",
      ],
    ],
    correta: "B",
    explicacao:
      "Nos casos de acidente de trânsito de que resulte vítima, não se imporá a prisão em flagrante nem se exigirá fiança do condutor que prestar pronto e integral socorro àquela.",
    conceito: "Socorro à vítima e flagrante no trânsito.",
    lembrar: "Socorreu na hora: sem flagrante e sem fiança.",
    referencia: "Código de Trânsito Brasileiro, art. 301.",
  }),
  q({
    id: "le-ctb-embriaguez",
    tema: "Crimes de trânsito",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca do crime de embriaguez ao volante (art. 306 do CTB), assinale a opção correta.",
    alternativas: [
      [
        "A alteração pode ser constatada por concentração de 0,3 mg ou mais de álcool por litro de ar alveolar.",
        "Correta. Art. 306, § 1º, I; também por sinais de alteração da capacidade psicomotora, entre outros meios de prova.",
      ],
      [
        "O crime só se configura se o condutor causar acidente ou expuser alguém a perigo concreto de dano.",
        "Errada. O crime é de perigo abstrato.",
      ],
      [
        "A constatação depende exclusivamente de exame de sangue realizado em laboratório oficial.",
        "Errada. Admite-se etilômetro, exame clínico, perícia, vídeo, prova testemunhal e outros meios.",
      ],
      [
        "A recusa ao etilômetro gera presunção absoluta da prática do crime de embriaguez ao volante.",
        "Errada. A recusa gera infração administrativa; para o crime, é preciso prova da alteração.",
      ],
      [
        "Basta qualquer concentração de álcool no ar expirado, ainda que mínima, para configurar o crime.",
        "Errada. Para o crime, exige-se concentração mínima legal ou sinais de alteração; a tolerância zero é administrativa.",
      ],
    ],
    correta: "A",
    explicacao:
      "O crime do art. 306 é de perigo abstrato. A alteração da capacidade psicomotora pode ser constatada por concentração igual ou superior a 6 dg/L de sangue ou 0,3 mg/L de ar alveolar, ou por sinais, admitidos diversos meios de prova.",
    conceito: "Embriaguez ao volante.",
    lembrar: "Crime: ≥ 0,3 mg/L no bafômetro (ou sinais). Infração administrativa: qualquer quantidade.",
    referencia: "Código de Trânsito Brasileiro, arts. 165, 165-A e 306.",
  }),
  q({
    id: "le-juventude",
    tema: "Estatuto da Juventude",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Para os efeitos do Estatuto da Juventude (Lei 12.852/2013), são consideradas jovens as pessoas com idade entre",
    alternativas: [
      ["12 e 18 anos.", "Errada. Essa faixa corresponde ao adolescente, no ECA."],
      ["15 e 29 anos.", "Correta. Art. 1º, § 1º."],
      ["18 e 29 anos.", "Errada. O estatuto começa aos 15 anos."],
      ["16 e 24 anos.", "Errada. Não corresponde à faixa legal."],
      ["14 e 30 anos.", "Errada. Não corresponde à faixa legal."],
    ],
    correta: "B",
    explicacao:
      "O Estatuto da Juventude considera jovens as pessoas de 15 a 29 anos. Aos adolescentes de 15 a 18 anos aplica-se o ECA e, excepcionalmente, o Estatuto da Juventude, quando não conflitar com as normas de proteção integral.",
    conceito: "Faixa etária do Estatuto da Juventude.",
    lembrar: "Jovem: 15 a 29 anos.",
    referencia: "Lei 12.852/2013, art. 1º.",
  }),
  q({
    id: "le-lavagem",
    tema: "Lavagem de dinheiro",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca da Lei 9.613/1998 (lavagem de dinheiro), assinale a opção correta.",
    alternativas: [
      [
        "Somente os crimes de um rol taxativo, como tráfico e terrorismo, podem ser antecedentes da lavagem.",
        "Errada. O rol foi extinto pela Lei 12.683/2012.",
      ],
      [
        "Para processar a lavagem, é necessária prévia condenação definitiva pela infração antecedente.",
        "Errada. O processo independe do processo e julgamento da infração antecedente (art. 2º, II).",
      ],
      [
        "Qualquer infração penal pode ser antecedente da lavagem, inclusive contravenção penal.",
        "Correta. Desde a Lei 12.683/2012, basta bens provenientes de infração penal.",
      ],
      [
        "O autor da infração antecedente não pode responder também pela lavagem do produto dela.",
        "Errada. A autolavagem é admitida.",
      ],
      [
        "A lavagem só se configura quando os valores ilícitos são remetidos ao exterior.",
        "Errada. Ocultar ou dissimular a origem é suficiente, sem necessidade de remessa ao exterior.",
      ],
    ],
    correta: "C",
    explicacao:
      "Lavagem é ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens provenientes, direta ou indiretamente, de infração penal. É crime autônomo, e o processo independe do da infração antecedente.",
    conceito: "Lavagem de dinheiro de terceira geração.",
    lembrar: "Lavagem: qualquer infração penal antecedente; processo autônomo.",
    referencia: "Lei 9.613/1998, arts. 1º e 2º, com redação da Lei 12.683/2012.",
  }),
]

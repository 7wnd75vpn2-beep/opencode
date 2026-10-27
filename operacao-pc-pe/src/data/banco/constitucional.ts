import { make } from "./make"

const q = make("Direito Constitucional")

export const CONSTITUCIONAL = [
  q({
    id: "dc-domicilio-noite",
    tema: "Inviolabilidade do domicílio",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Às 23 h, agentes da Polícia Civil recebem denúncia anônima de que há drogas armazenadas em determinada residência. Sem realizar qualquer diligência prévia, ingressam no imóvel contra a vontade do morador e encontram entorpecentes. Considerando essa situação hipotética, a Constituição Federal e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "Por ser período noturno, o ingresso só seria válido com mandado judicial, ainda que houvesse flagrante no interior da casa.",
        "Errada. O flagrante delito autoriza o ingresso a qualquer hora; a restrição ao período diurno vale para a ordem judicial.",
      ],
      [
        "Sendo o tráfico crime permanente, o estado de flagrância dispensa qualquer justificativa para o ingresso forçado.",
        "Errada. O STF exige fundadas razões, justificadas posteriormente, mesmo nos crimes permanentes.",
      ],
      [
        "O ingresso forçado exige fundadas razões, justificadas depois, de que há flagrante na casa; a denúncia anônima isolada não basta.",
        "Correta. É a tese do STF (Tema 280): sem fundadas razões concretas, o ingresso é ilícito, e a jurisprudência não aceita a denúncia anônima isolada como fundamento.",
      ],
      [
        "A eventual ilicitude do ingresso fica sanada porque, ao final, os entorpecentes foram efetivamente encontrados no imóvel.",
        "Errada. O resultado da busca não legitima, depois, um ingresso feito sem fundadas razões.",
      ],
      [
        "Bastaria a autorização verbal do delegado de plantão, registrada no boletim de ocorrência, para legitimar o ingresso.",
        "Errada. A autoridade policial não pode suprir a ordem judicial; fora do flagrante, desastre ou socorro, só o juiz autoriza, e de dia.",
      ],
    ],
    correta: "C",
    explicacao:
      "Pelo Tema 280 do STF, a entrada forçada em domicílio sem mandado só é lícita, mesmo à noite, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem flagrante no interior da casa. Encontrar a droga depois não convalida o ingresso.",
    conceito: "Fundadas razões para ingresso domiciliar sem mandado.",
    lembrar: "Primeiro as fundadas razões, depois a entrada. O que se acha lá dentro não justifica a entrada.",
    referencia: "CF/1988, art. 5º, XI; STF, RE 603.616 (Tema 280).",
  }),
  q({
    id: "dc-remedios-assertivas",
    tema: "Remédios constitucionais",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca dos remédios constitucionais, assinale a opção correta.",
    alternativas: [
      [
        "O mandado de segurança coletivo pode ser impetrado por partido político, ainda que sem representação no Congresso Nacional.",
        "Errada. A CF exige que o partido tenha representação no Congresso Nacional (art. 5º, LXX, “a”).",
      ],
      [
        "A ação popular pode ser proposta por pessoa jurídica que demonstre lesão ao patrimônio público de seu interesse.",
        "Errada. Pessoa jurídica não tem legitimidade para propor ação popular (Súmula 365 do STF); a legitimidade é do cidadão.",
      ],
      [
        "O habeas corpus somente pode ser impetrado por advogado regularmente inscrito na Ordem dos Advogados do Brasil.",
        "Errada. Qualquer pessoa pode impetrar habeas corpus, em favor próprio ou de terceiro, sem advogado.",
      ],
      [
        "O habeas data serve também para retificar dados pessoais, quando não se prefira fazê-lo por processo sigiloso.",
        "Correta. É a hipótese do art. 5º, LXXII, “b”: retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo.",
      ],
      [
        "O mandado de injunção só é cabível quando a falta de norma regulamentadora atingir direitos de natureza coletiva.",
        "Errada. O mandado de injunção pode ser individual ou coletivo (Lei 13.300/2016).",
      ],
    ],
    correta: "D",
    explicacao:
      "Cada remédio tem legitimados próprios: HC, qualquer pessoa; ação popular, o cidadão; MS coletivo, partido com representação no Congresso, entidade de classe, sindicato ou associação. O habeas data permite conhecer e também retificar dados pessoais.",
    conceito: "Legitimidade e objeto dos remédios constitucionais.",
    lembrar: "Habeas data: conhecer E retificar. Ação popular: só o cidadão (PJ não).",
    referencia: "CF/1988, art. 5º, LXVIII a LXXIII; Súmula 365 do STF.",
  }),
  q({
    id: "dc-preso-silencio",
    tema: "Direitos do preso",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "José foi preso em flagrante e, conduzido à delegacia, declarou que não responderia a nenhuma pergunta. Considerando essa situação hipotética e as garantias constitucionais do preso, assinale a opção correta.",
    alternativas: [
      [
        "O silêncio de José pode ser registrado no relatório final como indício de autoria a ser considerado pelo Ministério Público.",
        "Errada. O silêncio é exercício de direito e não pode ser interpretado em prejuízo da defesa.",
      ],
      [
        "José deve ser informado de seu direito de permanecer calado, e o exercício desse direito não pode ser usado contra ele.",
        "Correta. A CF assegura ao preso a informação sobre seus direitos, entre eles o de permanecer calado (art. 5º, LXIII).",
      ],
      [
        "A comunicação da prisão à família de José pode ser adiada até a conclusão de seu interrogatório na delegacia.",
        "Errada. A prisão e o local onde se encontre o preso devem ser comunicados imediatamente ao juiz e à família ou pessoa indicada.",
      ],
      [
        "Por razões de segurança, José não tem direito de conhecer a identidade dos policiais responsáveis por sua prisão.",
        "Errada. O preso tem direito à identificação dos responsáveis por sua prisão ou interrogatório (art. 5º, LXIV).",
      ],
      [
        "A prisão deve ser comunicada de imediato ao Ministério Público, a quem cabe decidir sobre sua manutenção ou relaxamento.",
        "Errada. Quem relaxa a prisão ilegal é a autoridade judiciária; a comunicação imediata é dirigida ao juiz competente.",
      ],
    ],
    correta: "B",
    explicacao:
      "Garantias do preso: comunicação imediata da prisão ao juiz e à família, informação de seus direitos (inclusive o de calar), assistência da família e de advogado, identificação dos responsáveis pela prisão e relaxamento judicial da prisão ilegal.",
    conceito: "Direitos constitucionais do preso.",
    lembrar: "Silêncio é direito, não indício. Quem relaxa prisão ilegal é o juiz.",
    referencia: "CF/1988, art. 5º, LXII a LXV; CPP, art. 186, parágrafo único.",
  }),
  q({
    id: "dc-natos-cargos",
    tema: "Nacionalidade",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo a Constituição Federal, é privativo de brasileiro nato o cargo de",
    alternativas: [
      ["ministro do Superior Tribunal de Justiça.", "Errada. Privativo de nato é o cargo de ministro do STF, não do STJ."],
      ["senador da República.", "Errada. Privativo é o cargo de Presidente do Senado, não o de senador."],
      ["governador de estado.", "Errada. Não consta do rol do art. 12, § 3º."],
      ["ministro de Estado da Justiça.", "Errada. Entre os ministros de Estado, só o da Defesa é privativo de nato."],
      ["oficial das Forças Armadas.", "Correta. Consta expressamente do art. 12, § 3º, VI."],
    ],
    correta: "E",
    explicacao:
      "Privativos de nato: Presidente e Vice-Presidente da República; Presidente da Câmara; Presidente do Senado; ministro do STF; carreira diplomática; oficial das Forças Armadas; ministro de Estado da Defesa.",
    conceito: "Cargos privativos de brasileiro nato.",
    lembrar: "Linha sucessória da Presidência, STF, diplomata, oficial das FA e ministro da Defesa.",
    referencia: "CF/1988, art. 12, § 3º.",
  }),
  q({
    id: "dc-seguranca-orgaos",
    tema: "Segurança pública",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Com base no art. 144 da Constituição Federal, assinale a opção correta.",
    alternativas: [
      [
        "A Polícia Federal exerce, com exclusividade, as funções de polícia judiciária da União e dos estados.",
        "Errada. A exclusividade da PF é quanto à polícia judiciária da União; nos estados, a função é das polícias civis.",
      ],
      [
        "As polícias civis, dirigidas por delegados de carreira, também apuram as infrações penais militares.",
        "Errada. O art. 144, § 4º, exclui expressamente as infrações penais militares.",
      ],
      [
        "Os corpos de bombeiros militares subordinam-se diretamente ao Ministério da Justiça e Segurança Pública.",
        "Errada. Subordinam-se, com as polícias militares e civis e as polícias penais estaduais, aos governadores (§ 6º).",
      ],
      [
        "As polícias penais, vinculadas ao órgão administrador do sistema penal, cuidam da segurança dos presídios.",
        "Correta. É a redação do § 5º-A, incluído pela EC 104/2019.",
      ],
      [
        "Os estados podem constituir guardas estaduais destinadas à proteção de seus bens, serviços e instalações.",
        "Errada. A CF prevê guardas municipais, constituídas pelos municípios (§ 8º).",
      ],
    ],
    correta: "D",
    explicacao:
      "Polícias civis: polícia judiciária e apuração de infrações penais, exceto militares, ressalvada a competência da União. Polícias penais: segurança dos estabelecimentos penais. PMs, bombeiros, polícias civis e penais estaduais subordinam-se aos governadores.",
    conceito: "Atribuições dos órgãos de segurança pública.",
    lembrar: "PF: exclusividade só na polícia judiciária DA UNIÃO.",
    referencia: "CF/1988, art. 144.",
  }),
  q({
    id: "dc-interceptacao-furto",
    tema: "Sigilo das comunicações",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "No curso de inquérito que apura furto simples, o delegado constata que a interceptação das comunicações telefônicas do investigado é o único meio de prova disponível e que há indícios razoáveis de autoria. Considerando essa situação hipotética, a CF e a Lei 9.296/1996, assinale a opção correta.",
    alternativas: [
      [
        "A medida é vedada, pois a interceptação só é admitida na apuração de crimes hediondos ou equiparados.",
        "Errada. A lei não restringe a crimes hediondos; veda apenas para infrações punidas, no máximo, com detenção.",
      ],
      [
        "A medida é possível, mediante ordem judicial, já que o furto é punido com reclusão e não há outro meio de prova.",
        "Correta. Presentes indícios razoáveis de autoria, impossibilidade de prova por outros meios e crime punido com reclusão, cabe a interceptação por ordem do juiz.",
      ],
      [
        "O próprio delegado pode determiná-la por até quinze dias, comunicando a medida ao juiz em vinte e quatro horas.",
        "Errada. A interceptação depende de ordem do juiz; o delegado apenas representa pela medida.",
      ],
      [
        "A interceptação pode ser autorizada por quinze dias, sendo vedada qualquer renovação desse prazo inicial.",
        "Errada. O prazo de quinze dias é renovável por igual tempo, uma vez comprovada a indispensabilidade da prova.",
      ],
      [
        "Em caso de urgência, basta o requerimento do Ministério Público, dispensando-se a decisão judicial prévia.",
        "Errada. Há reserva de jurisdição: sem decisão judicial, a interceptação é ilícita.",
      ],
    ],
    correta: "B",
    explicacao:
      "A Lei 9.296/1996 não admite a interceptação quando não houver indícios razoáveis de autoria, quando a prova puder ser feita por outros meios ou quando o fato for punido, no máximo, com detenção. O furto simples é punido com reclusão.",
    conceito: "Requisitos da interceptação telefônica.",
    lembrar: "Interceptação: juiz + indícios + único meio + crime com RECLUSÃO. Prazo 15 dias renováveis.",
    referencia: "CF/1988, art. 5º, XII; Lei 9.296/1996, arts. 2º, 3º e 5º; CP, art. 155.",
  }),
  q({
    id: "dc-imprescritiveis",
    tema: "Mandados de criminalização",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "De acordo com a Constituição Federal, constituem crimes imprescritíveis",
    alternativas: [
      ["a tortura e o terrorismo.", "Errada. São inafiançáveis e insuscetíveis de graça ou anistia, mas prescrevem."],
      ["o tráfico de drogas e os crimes hediondos.", "Errada. Também são inafiançáveis e insuscetíveis de graça ou anistia, mas prescrevem."],
      ["o racismo e a tortura.", "Errada. O racismo é imprescritível; a tortura, não."],
      [
        "o racismo e a ação de grupos armados.",
        "Correta. São os dois únicos crimes imprescritíveis na CF (art. 5º, XLII e XLIV).",
      ],
      ["o terrorismo e a ação de grupos armados.", "Errada. A ação de grupos armados é imprescritível; o terrorismo, não."],
    ],
    correta: "D",
    explicacao:
      "Racismo e ação de grupos armados contra a ordem constitucional e o Estado Democrático: inafiançáveis e imprescritíveis. Tortura, tráfico, terrorismo e hediondos: inafiançáveis e insuscetíveis de graça ou anistia.",
    conceito: "Imprescritibilidade × insuscetibilidade de graça e anistia.",
    lembrar: "Imprescritíveis: RAÇÃO — RAcismo e AÇÃO de grupos armados.",
    referencia: "CF/1988, art. 5º, XLII a XLIV.",
  }),
  q({
    id: "dc-direitos-politicos",
    tema: "Direitos políticos",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca dos direitos políticos, assinale a opção correta.",
    alternativas: [
      [
        "O militar alistável é inelegível enquanto permanecer no serviço ativo das Forças Armadas.",
        "Errada. O militar alistável é elegível, com regras de afastamento ou agregação (art. 14, § 8º).",
      ],
      ["A idade mínima para concorrer ao cargo de governador de estado é de trinta e cinco anos.", "Errada. Para governador, a idade mínima é de trinta anos."],
      ["O alistamento e o voto são facultativos para os maiores de sessenta e cinco anos de idade.", "Errada. São facultativos para os maiores de setenta anos."],
      [
        "Os conscritos podem alistar-se durante o serviço militar obrigatório, mas não podem votar.",
        "Errada. Durante o serviço militar obrigatório, os conscritos não podem alistar-se como eleitores.",
      ],
      ["O analfabeto pode alistar-se e votar facultativamente, mas não pode ser eleito.", "Correta. O voto é facultativo para o analfabeto, que é inelegível (art. 14, §§ 1º e 4º)."],
    ],
    correta: "E",
    explicacao:
      "Idades mínimas: 35 (Presidente, Vice e senador), 30 (governador e vice), 21 (deputados, prefeito, vice e juiz de paz), 18 (vereador). Voto facultativo: analfabetos, maiores de 70 e jovens de 16 e 17. Inalistáveis: estrangeiros e conscritos.",
    conceito: "Alistamento, voto e elegibilidade.",
    lembrar: "Analfabeto vota, mas não é votado.",
    referencia: "CF/1988, art. 14.",
  }),
  q({
    id: "dc-reuniao-aviso",
    tema: "Direito de reunião",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Servidores organizam manifestação pacífica, sem armas, em praça pública e comunicam a realização à autoridade competente com antecedência. Não havia outra reunião convocada para o local. Ainda assim, a autoridade proíbe o ato, alegando que não o autorizou. Considerando essa situação hipotética, assinale a opção correta.",
    alternativas: [
      [
        "A proibição é válida, pois reuniões em locais abertos ao público dependem de autorização expressa da autoridade.",
        "Errada. A CF dispensa autorização; exige apenas prévio aviso.",
      ],
      [
        "A proibição é ilegítima, pois a reunião independe de autorização, bastando o prévio aviso à autoridade competente.",
        "Correta. Atendidos os requisitos (pacífica, sem armas, local aberto, sem frustrar reunião anterior, com aviso), o direito é exercido sem autorização.",
      ],
      [
        "O aviso deveria ter sido dirigido ao Poder Judiciário, a quem cabe compatibilizar o uso dos espaços públicos.",
        "Errada. O aviso é dado à autoridade competente, não ao Judiciário.",
      ],
      [
        "Por envolver servidores públicos, o ato dependeria de autorização do chefe do Poder Executivo local.",
        "Errada. A condição de servidor não cria exigência de autorização para o exercício do direito de reunião.",
      ],
      [
        "A reunião só seria admitida em local fechado, pois locais abertos exigem licença prévia do município.",
        "Errada. A CF trata justamente de reuniões em locais abertos ao público, sem licença.",
      ],
    ],
    correta: "B",
    explicacao:
      "Requisitos do art. 5º, XVI: reunião pacífica, sem armas, em local aberto ao público, sem frustrar outra anteriormente convocada para o mesmo local e com prévio aviso. Não há necessidade de autorização.",
    conceito: "Aviso prévio × autorização.",
    lembrar: "Reunião: AVISA, não pede AUTORIZAÇÃO.",
    referencia: "CF/1988, art. 5º, XVI.",
  }),
  q({
    id: "dc-hc-militar",
    tema: "Habeas corpus",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado:
      "Em relação às punições disciplinares militares, segundo a Constituição Federal e a jurisprudência do STF, o habeas corpus",
    alternativas: [
      [
        "é sempre cabível, como em qualquer restrição à liberdade de locomoção, inclusive para rever o mérito da punição.",
        "Errada. A CF afasta o HC quanto ao mérito das punições disciplinares militares.",
      ],
      [
        "é vedado em qualquer hipótese, inclusive para discutir a competência da autoridade que aplicou a punição.",
        "Errada. O STF admite o HC para examinar pressupostos de legalidade, como competência e hierarquia.",
      ],
      [
        "não cabe para discutir o mérito da punição, mas é admitido para examinar os pressupostos de sua legalidade.",
        "Correta. A vedação do art. 142, § 2º, alcança o mérito; a legalidade da punição pode ser examinada.",
      ],
      [
        "só pode ser impetrado pelo Ministério Público Militar, em defesa do militar que sofreu a punição.",
        "Errada. Qualquer pessoa pode impetrar habeas corpus.",
      ],
      [
        "é substituído pelo mandado de segurança, que é o único remédio admitido contra punições disciplinares.",
        "Errada. Não há essa substituição; o HC continua cabível quanto à legalidade.",
      ],
    ],
    correta: "C",
    explicacao:
      "O art. 142, § 2º, diz que não cabe habeas corpus em relação a punições disciplinares militares. O STF interpreta a vedação como restrita ao mérito, admitindo o exame da legalidade (hierarquia, poder disciplinar, ligação com a função e pena cabível).",
    conceito: "Habeas corpus e punições disciplinares militares.",
    lembrar: "Mérito da punição militar: não. Legalidade: sim.",
    referencia: "CF/1988, art. 142, § 2º.",
  }),
  q({
    id: "dc-fundamentos-objetivos",
    tema: "Princípios fundamentais",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "No que se refere aos princípios fundamentais da Constituição Federal, assinale a opção correta.",
    alternativas: [
      [
        "Erradicar a pobreza é fundamento da República, e a independência nacional rege suas relações internacionais.",
        "Errada. Erradicar a pobreza é objetivo fundamental (art. 3º, III), não fundamento.",
      ],
      [
        "A soberania é objetivo fundamental da República, e a não intervenção rege suas relações internacionais.",
        "Errada. A soberania é fundamento (art. 1º, I).",
      ],
      [
        "O pluralismo político rege as relações internacionais, e a cidadania é objetivo fundamental da República.",
        "Errada. Pluralismo político e cidadania são fundamentos (art. 1º, II e V).",
      ],
      [
        "A dignidade da pessoa humana é fundamento, e a prevalência dos direitos humanos rege as relações internacionais.",
        "Correta. Arts. 1º, III, e 4º, II.",
      ],
      [
        "A independência nacional é fundamento da República, e construir sociedade solidária é seu objetivo.",
        "Errada. A independência nacional é princípio das relações internacionais (art. 4º, I).",
      ],
    ],
    correta: "D",
    explicacao:
      "Fundamentos (art. 1º): soberania, cidadania, dignidade, valores sociais do trabalho e da livre iniciativa, pluralismo político. Objetivos (art. 3º): verbos de ação. Relações internacionais (art. 4º): independência nacional, direitos humanos, autodeterminação, não intervenção etc.",
    conceito: "Fundamentos, objetivos e princípios das relações internacionais.",
    lembrar: "Fundamentos: SO-CI-DI-VA-PLU. Objetivos começam com verbo.",
    referencia: "CF/1988, arts. 1º, 3º e 4º.",
  }),
  q({
    id: "dc-prova-derivada",
    tema: "Provas ilícitas",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Mediante tortura, policiais obtêm de um suspeito a confissão de um homicídio e a indicação do local onde a arma do crime estava enterrada. A arma é apreendida e periciada. Não havia qualquer outra linha de investigação que levasse a ela. Considerando essa situação hipotética, assinale a opção correta.",
    alternativas: [
      [
        "A arma é prova lícita, pois apenas a confissão foi obtida mediante tortura, e não a apreensão do objeto.",
        "Errada. A arma foi descoberta exclusivamente a partir da prova ilícita; é prova ilícita por derivação.",
      ],
      [
        "A ilicitude da confissão fica sanada pelo laudo pericial que confirmou ser aquela a arma usada no crime.",
        "Errada. A confirmação posterior não apaga a origem ilícita da prova.",
      ],
      [
        "A arma é prova ilícita por derivação, pois só foi descoberta a partir da confissão obtida sob tortura.",
        "Correta. Sem fonte independente ou descoberta inevitável, as provas derivadas das ilícitas também são inadmissíveis.",
      ],
      [
        "Provas ilícitas são admitidas quando favorecem a acusação em crimes hediondos, como o homicídio qualificado.",
        "Errada. A inadmissibilidade das provas ilícitas não tem essa exceção.",
      ],
      [
        "A ilicitude gera apenas responsabilização disciplinar dos policiais, sem reflexo sobre a validade da prova.",
        "Errada. Além das responsabilidades dos agentes, a prova é inadmissível no processo.",
      ],
    ],
    correta: "C",
    explicacao:
      "A CF declara inadmissíveis as provas obtidas por meios ilícitos. O CPP estende a vedação às derivadas, salvo quando não evidenciado o nexo de causalidade ou quando puderem ser obtidas por fonte independente.",
    conceito: "Teoria dos frutos da árvore envenenada.",
    lembrar: "Prova que nasce da ilícita é ilícita, salvo fonte independente.",
    referencia: "CF/1988, art. 5º, LVI; CPP, art. 157, §§ 1º e 2º.",
  }),
  q({
    id: "dc-extradicao-naturalizado",
    tema: "Extradição",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Nos termos da Constituição Federal, o brasileiro naturalizado poderá ser extraditado",
    alternativas: [
      [
        "por qualquer crime comum, desde que praticado depois da naturalização e previsto em tratado.",
        "Errada. O crime comum que autoriza a extradição é o praticado ANTES da naturalização.",
      ],
      [
        "somente por crime político, quando houver tratado de reciprocidade entre os dois países.",
        "Errada. A CF veda a extradição por crime político ou de opinião.",
      ],
      [
        "por crime comum anterior à naturalização ou por envolvimento comprovado em tráfico de drogas.",
        "Correta. São as duas hipóteses do art. 5º, LI.",
      ],
      [
        "por crime de opinião praticado antes da naturalização, se houver condenação definitiva no exterior.",
        "Errada. Crime de opinião não autoriza extradição.",
      ],
      [
        "nunca, pois a Constituição equipara totalmente o naturalizado ao nato em matéria de extradição.",
        "Errada. Somente o brasileiro nato é absolutamente protegido contra a extradição.",
      ],
    ],
    correta: "C",
    explicacao:
      "Nato: nunca é extraditado. Naturalizado: crime comum anterior à naturalização ou comprovado envolvimento em tráfico ilícito de entorpecentes (a qualquer tempo). Estrangeiro: pode, salvo crime político ou de opinião.",
    conceito: "Hipóteses constitucionais de extradição.",
    lembrar: "Naturalizado: crime ANTES ou tráfico (a qualquer tempo).",
    referencia: "CF/1988, art. 5º, LI e LII.",
  }),
  q({
    id: "dc-concurso-sumulas",
    tema: "Administração Pública na Constituição",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Considerando a Constituição Federal e a jurisprudência do STF sobre o acesso a cargos públicos, assinale a opção correta.",
    alternativas: [
      [
        "O prazo de validade do concurso público é de até quatro anos, prorrogável uma única vez por igual período.",
        "Errada. O prazo é de até dois anos, prorrogável uma vez por igual período.",
      ],
      [
        "É válida a nomeação de parente da autoridade nomeante para cargo em comissão, desde que haja qualificação técnica.",
        "Errada. A Súmula Vinculante 13 veda o nepotismo, independentemente da qualificação técnica.",
      ],
      [
        "Durante o prazo de validade, aprovados em concurso posterior podem ser convocados antes dos anteriores, por conveniência.",
        "Errada. Os aprovados no concurso anterior têm prioridade durante o prazo de validade (art. 37, IV).",
      ],
      [
        "O candidato aprovado fora do número de vagas tem direito subjetivo à nomeação durante a validade do concurso.",
        "Errada. Em regra, o direito subjetivo é do aprovado dentro do número de vagas previsto no edital.",
      ],
      [
        "É inconstitucional prover servidor, sem concurso, em cargo que não integra a carreira na qual foi anteriormente investido.",
        "Correta. É o teor da Súmula Vinculante 43.",
      ],
    ],
    correta: "E",
    explicacao:
      "O STF combate formas de burlar o concurso: provimento derivado em outra carreira (SV 43) e nepotismo (SV 13). O aprovado dentro das vagas tem direito à nomeação durante a validade (RE 598.099).",
    conceito: "Concurso público e provimento derivado.",
    lembrar: "Mudou de carreira sem concurso? Inconstitucional (SV 43).",
    referencia: "CF/1988, art. 37, II a IV; Súmulas Vinculantes 13 e 43; STF, RE 598.099.",
  }),
  q({
    id: "dc-greve-policial",
    tema: "Segurança pública",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "O sindicato dos policiais civis de determinado estado anuncia greve por reajuste salarial, comprometendo-se a manter 70% do efetivo em serviço. Considerando essa situação hipotética e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "A greve é lícita, pois a manutenção de mais de 30% do efetivo atende à continuidade do serviço público.",
        "Errada. Para policiais civis, o STF veda a greve, sem possibilidade de compensação por percentual.",
      ],
      [
        "A greve depende apenas de prévia comunicação ao governador com antecedência mínima de setenta e duas horas.",
        "Errada. A vedação não se afasta por comunicação prévia.",
      ],
      [
        "A greve é vedada aos policiais civis, como aos demais servidores que atuam diretamente na segurança pública.",
        "Correta. Tese do Tema 541 do STF.",
      ],
      [
        "A greve é lícita, mas os dias não trabalhados não podem ser descontados enquanto durar o movimento.",
        "Errada. A greve de policiais civis é vedada; a premissa de licitude está incorreta.",
      ],
      [
        "A greve é permitida aos agentes e escrivães, sendo vedada apenas aos delegados de polícia de carreira.",
        "Errada. A vedação alcança os policiais civis em geral.",
      ],
    ],
    correta: "C",
    explicacao:
      "O STF fixou que o exercício do direito de greve, sob qualquer forma ou modalidade, é vedado aos policiais civis e a todos os servidores que atuem diretamente na área de segurança pública, assegurando a mediação para a negociação.",
    conceito: "Vedação da greve na segurança pública.",
    lembrar: "Policial civil: greve vedada, em qualquer modalidade.",
    referencia: "STF, ARE 654.432 (Tema 541).",
  }),
  q({
    id: "dc-associacoes",
    tema: "Direito de associação",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca da liberdade de associação, assinale a opção correta.",
    alternativas: [
      [
        "As associações podem ter suas atividades suspensas por decisão administrativa devidamente fundamentada.",
        "Errada. A suspensão exige decisão judicial.",
      ],
      [
        "A dissolução compulsória de associação exige decisão judicial, dispensado o trânsito em julgado.",
        "Errada. Para a dissolução, exige-se o trânsito em julgado.",
      ],
      [
        "A criação de associações independe de autorização, vedada a interferência estatal em seu funcionamento.",
        "Correta. É o art. 5º, XVIII.",
      ],
      [
        "As entidades associativas representam seus filiados em juízo, mesmo sem autorização expressa deles.",
        "Errada. A CF exige que sejam expressamente autorizadas (art. 5º, XXI).",
      ],
      [
        "É permitida a associação de caráter paramilitar, desde que seus membros não portem armas de fogo.",
        "Errada. A associação de caráter paramilitar é vedada (art. 5º, XVII).",
      ],
    ],
    correta: "C",
    explicacao:
      "Associação: livre para fins lícitos, sem autorização, sem interferência estatal. Suspensão: decisão judicial. Dissolução: decisão judicial transitada em julgado. Ninguém é obrigado a associar-se ou a permanecer associado.",
    conceito: "Garantias da liberdade de associação.",
    lembrar: "Suspender: juiz. Dissolver: juiz + trânsito em julgado.",
    referencia: "CF/1988, art. 5º, XVII a XXI.",
  }),
  q({
    id: "dc-juri-competencia",
    tema: "Tribunal do júri",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Considerando a Constituição Federal e a jurisprudência do STF, compete ao tribunal do júri julgar",
    alternativas: [
      ["o latrocínio consumado.", "Errada. Pela Súmula 603 do STF, o latrocínio é julgado pelo juiz singular, por ser crime contra o patrimônio."],
      ["o homicídio culposo na direção de veículo.", "Errada. O júri julga crimes dolosos contra a vida."],
      ["a tentativa de homicídio doloso.", "Correta. Crimes dolosos contra a vida, tentados ou consumados, são da competência do júri."],
      ["a lesão corporal seguida de morte.", "Errada. É crime preterdoloso, sem dolo quanto à morte; não vai a júri."],
      ["o roubo com resultado lesão grave.", "Errada. É crime contra o patrimônio, julgado pelo juiz singular."],
    ],
    correta: "C",
    explicacao:
      "O júri julga os crimes dolosos contra a vida (homicídio doloso, feminicídio, induzimento ao suicídio, infanticídio e aborto), tentados ou consumados, e os conexos. Latrocínio e lesão seguida de morte ficam com o juiz singular.",
    conceito: "Competência mínima do tribunal do júri.",
    lembrar: "Júri: DOLO + VIDA. Latrocínio não (Súmula 603).",
    referencia: "CF/1988, art. 5º, XXXVIII, “d”; Súmula 603 do STF.",
  }),
  q({
    id: "dc-identificacao-rotina",
    tema: "Identificação criminal",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Ao ser indiciada por estelionato, Maria apresentou carteira de identidade em perfeito estado, sem rasuras e compatível com seus demais documentos. Mesmo assim, o delegado determinou sua identificação datiloscópica e fotográfica, por considerá-la procedimento de rotina. Considerando essa situação hipotética, assinale a opção correta.",
    alternativas: [
      [
        "A determinação é legal, pois todo indiciado deve ser submetido à identificação criminal no inquérito.",
        "Errada. A regra constitucional é a dispensa para o civilmente identificado.",
      ],
      [
        "A determinação é legal, porque o estelionato envolve fraude documental, o que autoriza, por si, a identificação criminal.",
        "Errada. A natureza do crime não está entre as hipóteses legais.",
      ],
      [
        "A determinação é ilegal, pois a identificação criminal só é permitida após condenação transitada em julgado.",
        "Errada. A lei admite a identificação criminal antes da condenação, nas hipóteses que prevê.",
      ],
      [
        "A determinação é ilegal, pois o civilmente identificado só é identificado criminalmente nas hipóteses da lei.",
        "Correta. Art. 5º, LVIII, da CF; as hipóteses estão na Lei 12.037/2009 e não incluem a “rotina”.",
      ],
      [
        "A determinação é legal se Maria assinar termo de concordância com a coleta de suas impressões digitais.",
        "Errada. A lei não prevê o consentimento como hipótese autorizadora.",
      ],
    ],
    correta: "D",
    explicacao:
      "O civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses da Lei 12.037/2009 (documento rasurado ou com indício de falsificação, insuficiente, conflitante, essencial às investigações por decisão judicial etc.).",
    conceito: "Identificação criminal como exceção.",
    lembrar: "Documento bom e sem conflito: sem identificação criminal.",
    referencia: "CF/1988, art. 5º, LVIII; Lei 12.037/2009, art. 3º.",
  }),
  q({
    id: "dc-presuncao-execucao",
    tema: "Presunção de inocência",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Sobre a presunção de inocência, considerando a CF e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "O indiciamento no inquérito policial afasta a presunção de inocência, permitindo o registro de antecedentes.",
        "Errada. O indiciamento não declara culpa e não afasta a presunção de inocência.",
      ],
      [
        "Em regra, o cumprimento da pena exige o trânsito em julgado, sem prejuízo da decretação de prisões cautelares.",
        "Correta. Entendimento firmado pelo STF nas ADCs 43, 44 e 54.",
      ],
      [
        "A confirmação da condenação em segunda instância autoriza, sempre, o início do cumprimento definitivo da pena.",
        "Errada. O STF afastou a execução provisória automática após a segunda instância.",
      ],
      [
        "A presunção de inocência impede a decretação de prisão preventiva antes da sentença condenatória.",
        "Errada. A prisão cautelar, fundamentada, é compatível com a presunção de inocência.",
      ],
      [
        "A presunção de inocência só se aplica aos crimes de menor potencial ofensivo, segundo a jurisprudência.",
        "Errada. É garantia geral, aplicável a qualquer acusado.",
      ],
    ],
    correta: "B",
    explicacao:
      "Ninguém será considerado culpado até o trânsito em julgado. Prisões cautelares continuam possíveis, desde que fundamentadas em sua necessidade. Há discussão específica para as condenações do júri, por isso a regra é enunciada como “em regra”.",
    conceito: "Presunção de inocência e prisão.",
    lembrar: "Pena: depois do trânsito. Cautelar: possível antes, se fundamentada.",
    referencia: "CF/1988, art. 5º, LVII; STF, ADCs 43, 44 e 54.",
  }),
  q({
    id: "dc-celular-whatsapp",
    tema: "Sigilo de dados",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Após prender um suspeito em flagrante por roubo, policiais apreenderam seu celular e, sem autorização judicial nem consentimento do preso, acessaram as conversas armazenadas em aplicativo de mensagens, encontrando diálogos sobre o crime. Considerando essa situação hipotética e a jurisprudência do STJ, assinale a opção correta.",
    alternativas: [
      [
        "A prova é lícita, pois a prisão em flagrante autoriza, por si só, a devassa do conteúdo do aparelho apreendido.",
        "Errada. Para o STJ, a apreensão do aparelho não autoriza, por si, o acesso às mensagens.",
      ],
      [
        "A prova é ilícita, pois o acesso às mensagens armazenadas exigia autorização judicial ou consentimento.",
        "Correta. O STJ considera ilícita a prova obtida pelo acesso direto a mensagens sem autorização judicial.",
      ],
      [
        "A prova é lícita, desde que o acesso às mensagens tenha sido realizado por perito oficial da polícia.",
        "Errada. Quem acessa não muda a necessidade de autorização judicial.",
      ],
      [
        "A prova só será ilícita se o suspeito for absolvido ao final do processo pelo crime de roubo.",
        "Errada. A licitude da prova é aferida pelo modo de obtenção, não pelo resultado do processo.",
      ],
      [
        "A prova é lícita porque, sendo o roubo crime grave, dispensa-se a ordem judicial para acesso a dados.",
        "Errada. A gravidade do crime não afasta a exigência de autorização judicial.",
      ],
    ],
    correta: "B",
    explicacao:
      "O STJ entende que o acesso a dados e conversas armazenados no celular apreendido depende de prévia autorização judicial (ou de consentimento válido), sob pena de ilicitude da prova e das dela derivadas.",
    conceito: "Proteção de dados armazenados em celular.",
    lembrar: "Apreender o celular pode; abrir as conversas, só com ordem judicial (ou consentimento).",
    referencia: "CF/1988, art. 5º, X e XII; STJ, RHC 51.531.",
  }),
  q({
    id: "dc-reserva-vagas",
    tema: "Administração Pública na Constituição",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo a Constituição Federal, a lei reservará percentual dos cargos e empregos públicos para",
    alternativas: [
      ["as pessoas idosas.", "Errada. A CF não prevê essa reserva no art. 37."],
      ["os egressos do sistema prisional.", "Errada. Não há essa previsão constitucional."],
      ["as pessoas com deficiência.", "Correta. É o art. 37, VIII."],
      ["os estudantes de universidades públicas.", "Errada. Não há essa previsão."],
      ["os servidores temporários do mesmo órgão.", "Errada. Não há essa reserva; contratados temporários não têm acesso facilitado a cargo efetivo."],
    ],
    correta: "C",
    explicacao: "O art. 37, VIII, determina que a lei reserve percentual dos cargos e empregos públicos para pessoas com deficiência e defina os critérios de admissão.",
    conceito: "Reserva de vagas na Constituição.",
    lembrar: "A CF fala expressamente em reserva para pessoas com deficiência.",
    referencia: "CF/1988, art. 37, VIII.",
  }),
  q({
    id: "dc-estado-defesa",
    tema: "Estado de defesa e de sítio",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "No que diz respeito ao estado de defesa, assinale a opção correta.",
    alternativas: [
      [
        "É decretado pelo Presidente da República depois de prévia autorização do Congresso Nacional.",
        "Errada. O Presidente decreta e submete o ato ao Congresso em 24 horas; a autorização prévia é exigida para o estado de sítio.",
      ],
      [
        "A prisão por crime contra o Estado poderá durar até trinta dias sem apreciação do Poder Judiciário.",
        "Errada. A prisão não pode ser superior a dez dias, salvo quando autorizada pelo Judiciário.",
      ],
      [
        "A prisão por crime contra o Estado será comunicada de imediato ao juiz, que a relaxará se não for legal.",
        "Correta. Art. 136, § 3º, I.",
      ],
      [
        "Durante sua vigência, admite-se a incomunicabilidade do preso, se necessária à segurança nacional.",
        "Errada. É vedada a incomunicabilidade do preso (art. 136, § 3º, IV).",
      ],
      [
        "Pode ser decretado por prazo indeterminado, enquanto perdurar a situação de instabilidade institucional.",
        "Errada. O prazo não será superior a trinta dias, prorrogável uma vez por igual período.",
      ],
    ],
    correta: "C",
    explicacao:
      "No estado de defesa, a prisão por crime contra o Estado é comunicada imediatamente ao juiz; o preso pode requerer exame de corpo de delito; a prisão não passa de dez dias sem autorização judicial; e a incomunicabilidade do preso é vedada.",
    conceito: "Garantias do preso no estado de defesa.",
    lembrar: "Estado de defesa: decreta e depois submete; prisão máx. 10 dias; nunca incomunicável.",
    referencia: "CF/1988, art. 136.",
  }),
  q({
    id: "dc-mandado-noite",
    tema: "Inviolabilidade do domicílio",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Agentes de polícia, munidos de mandado judicial de busca e apreensão, chegam à residência do investigado às 21 h. O morador recusa a entrada. Não há situação de flagrante, desastre ou necessidade de socorro. Considerando essa situação hipotética, assinale a opção correta.",
    alternativas: [
      [
        "Os agentes podem ingressar imediatamente, pois o mandado judicial autoriza o cumprimento a qualquer hora.",
        "Errada. Sem consentimento, a ordem judicial só autoriza o ingresso durante o dia.",
      ],
      [
        "Os agentes devem aguardar o dia, pois, sem consentimento, a ordem judicial só autoriza o ingresso diurno.",
        "Correta. Art. 5º, XI, da CF e art. 245 do CPP.",
      ],
      [
        "Os agentes podem ingressar se o delegado de polícia comparecer ao local e assumir pessoalmente a diligência.",
        "Errada. A presença do delegado não amplia o alcance da ordem judicial.",
      ],
      [
        "Os agentes devem obter um segundo mandado, específico para cumprimento em período noturno.",
        "Errada. Não existe mandado para cumprimento noturno contra a vontade do morador.",
      ],
      [
        "Os agentes podem ingressar se houver urgência para a investigação, registrada no auto de busca.",
        "Errada. A urgência da investigação não está entre as exceções constitucionais.",
      ],
    ],
    correta: "B",
    explicacao:
      "Sem consentimento do morador, só se entra na casa em flagrante, desastre, para prestar socorro (a qualquer hora) ou por determinação judicial durante o dia.",
    conceito: "Limite temporal da ordem judicial de busca.",
    lembrar: "Mandado: de dia. À noite, só com consentimento, flagrante, desastre ou socorro.",
    referencia: "CF/1988, art. 5º, XI; CPP, art. 245.",
  }),
  q({
    id: "dc-perda-nacionalidade",
    tema: "Nacionalidade",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca da perda da nacionalidade brasileira, considerando a redação atual da Constituição Federal, assinale a opção correta.",
    alternativas: [
      [
        "O brasileiro nato perde automaticamente a nacionalidade ao adquirir outra por naturalização voluntária.",
        "Errada. Essa hipótese foi suprimida pela EC 131/2023.",
      ],
      [
        "O brasileiro pode perder a nacionalidade por pedido expresso, ressalvadas situações que gerem apatridia.",
        "Correta. É a hipótese do art. 12, § 4º, II, com a redação da EC 131/2023.",
      ],
      [
        "O naturalizado perde a nacionalidade por decisão administrativa do Ministério da Justiça, sem processo judicial.",
        "Errada. O cancelamento da naturalização exige sentença judicial.",
      ],
      [
        "A perda da nacionalidade do nato pode decorrer de condenação por qualquer crime doloso no exterior.",
        "Errada. Não há essa hipótese na CF.",
      ],
      [
        "Quem perdeu a nacionalidade a pedido nunca poderá readquiri-la, segundo a Constituição Federal.",
        "Errada. A CF prevê a possibilidade de reaquisição, na forma da lei (art. 12, § 5º).",
      ],
    ],
    correta: "B",
    explicacao:
      "Após a EC 131/2023, perde a nacionalidade quem tiver cancelada a naturalização por sentença judicial (fraude no processo ou atentado contra a ordem constitucional) ou quem fizer pedido expresso, ressalvadas situações que gerem apatridia.",
    conceito: "Perda da nacionalidade após a EC 131/2023.",
    lembrar: "Hoje: perde por sentença (naturalizado) ou por pedido expresso — sem gerar apátrida.",
    referencia: "CF/1988, art. 12, §§ 4º e 5º; EC 131/2023.",
  }),
  q({
    id: "dc-indenizacao-erro",
    tema: "Garantias fundamentais",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "A Constituição Federal assegura expressamente que o Estado indenizará",
    alternativas: [
      [
        "quem for absolvido por falta de provas depois de ter respondido ao processo em liberdade.",
        "Errada. A absolvição, por si, não gera direito automático à indenização.",
      ],
      [
        "o investigado cujo inquérito policial for arquivado por ausência de indícios de autoria.",
        "Errada. O arquivamento do inquérito não gera indenização automática.",
      ],
      ["o condenado por erro judiciário e quem ficar preso além do tempo fixado na sentença.", "Correta. É o art. 5º, LXXV."],
      ["o réu cuja denúncia for rejeitada pelo juiz por falta de justa causa para a ação penal.", "Errada. Não há essa previsão constitucional."],
      ["toda pessoa indiciada que, ao final, não venha a ser denunciada pelo Ministério Público.", "Errada. Não há essa previsão constitucional."],
    ],
    correta: "C",
    explicacao: "O Estado indenizará o condenado por erro judiciário, assim como o que ficar preso além do tempo fixado na sentença.",
    conceito: "Responsabilidade do Estado por erro judiciário.",
    lembrar: "Erro judiciário e prisão além da pena: indenização garantida na CF.",
    referencia: "CF/1988, art. 5º, LXXV.",
  }),
  q({
    id: "dc-testemunha-autoincriminacao",
    tema: "Garantias fundamentais",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Carlos foi intimado a depor como testemunha em inquérito policial. Durante o depoimento, percebeu que responder a determinadas perguntas poderia revelar sua própria participação no crime investigado. Considerando essa situação hipotética e a jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      [
        "Carlos deve responder a todas as perguntas, pois o direito ao silêncio é exclusivo do investigado formalmente indiciado.",
        "Errada. O STF reconhece o privilégio contra a autoincriminação também a quem depõe como testemunha.",
      ],
      [
        "Carlos pode deixar de comparecer ao depoimento, pois ninguém é obrigado a produzir prova contra si.",
        "Errada. O privilégio permite calar sobre o que incrimina, mas não dispensa o comparecimento.",
      ],
      [
        "Carlos pode calar-se quanto às perguntas cujas respostas possam incriminá-lo, sem cometer crime por isso.",
        "Correta. O privilégio contra a autoincriminação alcança qualquer pessoa, inclusive a ouvida como testemunha.",
      ],
      [
        "Carlos pode mentir livremente sobre qualquer fato, pois a testemunha não presta compromisso no inquérito.",
        "Errada. O privilégio autoriza o silêncio sobre fatos autoincriminadores, não a mentira sobre fatos alheios.",
      ],
      [
        "Carlos só poderá calar-se se estiver acompanhado de advogado constituído durante todo o depoimento.",
        "Errada. O direito não depende da presença de advogado.",
      ],
    ],
    correta: "C",
    explicacao:
      "O STF entende que o privilégio contra a autoincriminação (nemo tenetur se detegere) protege qualquer pessoa — investigado ou testemunha — quanto a perguntas cujas respostas possam incriminá-la.",
    conceito: "Privilégio contra a autoincriminação.",
    lembrar: "Testemunha comparece, mas pode calar sobre o que a incrimina.",
    referencia: "CF/1988, art. 5º, LXIII; jurisprudência do STF sobre o nemo tenetur.",
  }),
  q({
    id: "dc-adm-publica-assertivas",
    tema: "Administração Pública na Constituição",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Com base no art. 37 da Constituição Federal e em dispositivos correlatos, assinale a opção correta.",
    alternativas: [
      [
        "A publicidade de programas dos órgãos públicos pode conter o nome da autoridade responsável, se não houver custo adicional.",
        "Errada. É vedada a inclusão de nomes, símbolos ou imagens que caracterizem promoção pessoal (§ 1º).",
      ],
      [
        "Os atos de improbidade administrativa importarão a perda definitiva dos direitos políticos do agente.",
        "Errada. A CF prevê suspensão dos direitos políticos, não perda (§ 4º).",
      ],
      [
        "A publicidade dos atos e campanhas dos órgãos públicos deve ter caráter educativo, informativo ou de orientação social.",
        "Correta. É a redação do art. 37, § 1º.",
      ],
      [
        "A investidura em cargo em comissão depende de aprovação prévia em concurso de provas ou de provas e títulos.",
        "Errada. Cargo em comissão é de livre nomeação e exoneração.",
      ],
      [
        "Aos militares é garantido o direito de greve, a ser exercido nos termos e limites de lei específica.",
        "Errada. A CF proíbe a sindicalização e a greve dos militares (art. 142, § 3º, IV).",
      ],
    ],
    correta: "C",
    explicacao:
      "A publicidade oficial deve ser educativa, informativa ou de orientação social, sem promoção pessoal. Improbidade gera suspensão dos direitos políticos, perda da função, indisponibilidade de bens e ressarcimento.",
    conceito: "Publicidade e improbidade na Constituição.",
    lembrar: "Improbidade: SUSPENSÃO (não perda) dos direitos políticos.",
    referencia: "CF/1988, arts. 37, §§ 1º e 4º, e 142, § 3º, IV.",
  }),
  q({
    id: "dc-competencia-legislativa",
    tema: "Competências legislativas",
    dificuldade: "desafio",
    tipo: "direta",
    enunciado: "Compete PRIVATIVAMENTE à União legislar sobre",
    alternativas: [
      ["procedimentos em matéria processual.", "Errada. É competência concorrente (art. 24, XI)."],
      ["organização, garantias, direitos e deveres das polícias civis.", "Errada. É competência concorrente (art. 24, XVI)."],
      ["direito penitenciário.", "Errada. É competência concorrente (art. 24, I)."],
      ["proteção à infância e à juventude.", "Errada. É competência concorrente (art. 24, XV)."],
      ["direito penal e direito processual.", "Correta. Art. 22, I."],
    ],
    correta: "E",
    explicacao:
      "Direito penal e processual são privativos da União (art. 22, I). Já procedimentos processuais, direito penitenciário, proteção da infância e organização das polícias civis são de competência concorrente (art. 24).",
    conceito: "Competência privativa × concorrente.",
    lembrar: "Processo: União. Procedimento: concorrente.",
    referencia: "CF/1988, arts. 22, I, e 24, I, XI, XV e XVI.",
  }),
  q({
    id: "dc-acao-popular-caso",
    tema: "Remédios constitucionais",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Ana, eleitora em situação regular, descobre que o município firmou contrato superfaturado, lesivo ao patrimônio público, e quer buscar sua anulação em juízo, sem depender de outros órgãos. Considerando essa situação hipotética, o instrumento constitucional adequado é",
    alternativas: [
      [
        "o habeas data, pois Ana pretende obter informações sobre o contrato constante de registros públicos.",
        "Errada. O habeas data protege informações relativas à pessoa do impetrante.",
      ],
      [
        "o mandado de injunção, pois falta norma que regulamente o controle dos contratos municipais.",
        "Errada. Não há omissão normativa no caso.",
      ],
      [
        "a ação popular, ficando Ana isenta de custas e do ônus da sucumbência, salvo comprovada má-fé.",
        "Correta. Qualquer cidadão pode propor ação popular para anular ato lesivo ao patrimônio público (art. 5º, LXXIII).",
      ],
      [
        "o mandado de segurança coletivo, por envolver interesse de toda a coletividade do município.",
        "Errada. Ana não está entre os legitimados ao MS coletivo.",
      ],
      [
        "o habeas corpus, por ser o único remédio que dispensa advogado e pode ser usado por qualquer pessoa.",
        "Errada. O habeas corpus protege a liberdade de locomoção.",
      ],
    ],
    correta: "C",
    explicacao: "A ação popular permite ao cidadão anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.",
    conceito: "Ação popular.",
    lembrar: "Cidadão contra ato lesivo ao patrimônio público: ação popular.",
    referencia: "CF/1988, art. 5º, LXXIII; Lei 4.717/1965.",
  }),
  q({
    id: "dc-penas-principios",
    tema: "Princípios penais na Constituição",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca dos princípios constitucionais relativos às penas, assinale a opção correta.",
    alternativas: [
      [
        "Pela intranscendência da pena, a obrigação de reparar o dano nunca alcança os sucessores do condenado.",
        "Errada. A reparação do dano e a perda de bens podem ser estendidas aos sucessores até o limite do patrimônio transferido.",
      ],
      [
        "A pena de banimento é admitida em relação a estrangeiros condenados por terrorismo praticado em território nacional.",
        "Errada. O banimento é vedado sem exceções.",
      ],
      [
        "A lei regulará a individualização da pena, podendo adotar, entre outras, a privação da liberdade e a perda de bens.",
        "Correta. Art. 5º, XLVI, “a” e “b”.",
      ],
      [
        "A pena de caráter perpétuo é admitida quando o crime for hediondo e praticado contra criança ou adolescente.",
        "Errada. Penas de caráter perpétuo são vedadas.",
      ],
      [
        "A lei penal mais grave retroage para alcançar fatos anteriores nos crimes hediondos e equiparados.",
        "Errada. A lei penal só retroage para beneficiar o réu.",
      ],
    ],
    correta: "C",
    explicacao:
      "Nenhuma pena passará da pessoa do condenado, mas a reparação do dano e o perdimento de bens podem atingir os sucessores até o limite do patrimônio transferido. A lei individualiza a pena (privação ou restrição da liberdade, perda de bens, multa, prestação social alternativa, suspensão ou interdição de direitos).",
    conceito: "Intranscendência e individualização da pena.",
    lembrar: "A pena não passa; a reparação do dano passa até o limite da herança.",
    referencia: "CF/1988, art. 5º, XLV a XLVII.",
  }),
]

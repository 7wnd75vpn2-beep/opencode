import { make } from "./make"

const q = make("Direito Penal")

export const PENAL = [
  q({
    id: "dp-putativa",
    tema: "Descriminantes putativas",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Durante a madrugada, João viu um homem pular o muro de sua casa segurando um objeto escuro. Supondo tratar-se de assaltante armado prestes a atacá-lo, disparou e feriu o homem, que era seu vizinho trazendo um celular que havia caído no quintal. Considerando essa situação hipotética e o Código Penal, assinale a opção correta.",
    alternativas: [
      [
        "João agiu em legítima defesa real, pois a agressão parecia atual e iminente no momento do disparo.",
        "Errada. Não havia agressão real; a situação existiu apenas na percepção de João (putativa).",
      ],
      [
        "João responde por lesão corporal dolosa, pois o erro sobre a situação de fato é irrelevante para o CP.",
        "Errada. O CP trata expressamente do erro sobre situação de fato que, se existisse, tornaria a ação legítima.",
      ],
      [
        "Se o erro foi plenamente justificado, João é isento de pena; se evitável, responde por crime culposo.",
        "Correta. É a descriminante putativa por erro de tipo permissivo (art. 20, § 1º).",
      ],
      [
        "João é isento de pena em qualquer caso, pois agiu acreditando estar amparado por excludente de ilicitude.",
        "Errada. Se o erro derivar de culpa, há punição por crime culposo, se previsto em lei.",
      ],
      [
        "João responde por tentativa de homicídio, com redução de pena pelo erro sobre a pessoa da vítima.",
        "Errada. Não se trata de erro sobre a pessoa (art. 20, § 3º), e não há dado de dolo de matar.",
      ],
    ],
    correta: "C",
    explicacao:
      "É isento de pena quem, por erro plenamente justificado pelas circunstâncias, supõe situação de fato que, se existisse, tornaria a ação legítima. Não há isenção quando o erro deriva de culpa e o fato é punível como crime culposo.",
    conceito: "Descriminante putativa (erro de tipo permissivo).",
    lembrar: "Erro justificável: isento. Erro evitável: responde por culpa.",
    referencia: "Código Penal, art. 20, § 1º.",
  }),
  q({
    id: "dp-excludentes-assertivas",
    tema: "Excludentes de ilicitude",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca das causas excludentes de ilicitude previstas no Código Penal, assinale a opção correta.",
    alternativas: [
      [
        "A legítima defesa exige agressão atual, não abrangendo a reação contra agressão apenas iminente.",
        "Errada. O art. 25 abrange a agressão atual ou iminente.",
      ],
      [
        "O excesso na legítima defesa só é punível quando doloso, sendo irrelevante o excesso culposo.",
        "Errada. O agente responde pelo excesso doloso ou culposo (art. 23, parágrafo único).",
      ],
      [
        "Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo.",
        "Correta. Art. 24, § 1º.",
      ],
      [
        "O estrito cumprimento do dever legal exclui a culpabilidade do agente, mas não a ilicitude.",
        "Errada. É causa de exclusão da ilicitude (art. 23, III).",
      ],
      [
        "O estado de necessidade exige que o perigo tenha sido provocado pela vontade do próprio agente.",
        "Errada. Exige perigo que o agente NÃO provocou por sua vontade.",
      ],
    ],
    correta: "C",
    explicacao:
      "Excluem a ilicitude: estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito. Em todas, o excesso doloso ou culposo é punível. Quem tem o dever legal de enfrentar o perigo (bombeiro, policial) não alega estado de necessidade.",
    conceito: "Requisitos das excludentes de ilicitude.",
    lembrar: "Bombeiro não alega estado de necessidade para fugir do incêndio.",
    referencia: "Código Penal, arts. 23 a 25.",
  }),
  q({
    id: "dp-lei-temporaria",
    tema: "Lei penal no tempo",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo o Código Penal, a lei excepcional ou temporária",
    alternativas: [
      [
        "deixa de alcançar os fatos praticados durante sua vigência, assim que decorrido seu prazo de duração.",
        "Errada. Ela continua aplicável aos fatos praticados durante sua vigência (ultratividade).",
      ],
      [
        "aplica-se ao fato praticado durante sua vigência, ainda que decorrido o período de sua duração.",
        "Correta. Art. 3º do CP.",
      ],
      [
        "só pode ser aplicada se o fato for julgado antes de cessadas as circunstâncias que a determinaram.",
        "Errada. O julgamento pode ocorrer depois; a lei continua aplicável ao fato da época.",
      ],
      [
        "retroage para alcançar fatos anteriores à sua vigência, por ter sido editada em situação de emergência.",
        "Errada. Lei penal mais gravosa não retroage.",
      ],
      [
        "é inconstitucional, pois o princípio da retroatividade benéfica impede sua aplicação após a revogação.",
        "Errada. A ultratividade da lei temporária ou excepcional é compatível com o sistema.",
      ],
    ],
    correta: "B",
    explicacao:
      "Leis temporárias (com prazo) e excepcionais (para situações de emergência) são ultrativas: continuam regendo os fatos praticados durante sua vigência, mesmo após deixarem de vigorar. Sem isso, perderiam a força intimidatória.",
    conceito: "Ultratividade das leis temporárias e excepcionais.",
    lembrar: "Lei temporária: o fato da época continua regido por ela.",
    referencia: "Código Penal, art. 3º.",
  }),
  q({
    id: "dp-desistencia-disparo",
    tema: "Desistência voluntária",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Com intenção de matar, João disparou uma vez contra Pedro e errou. Embora ainda tivesse munição e nada o impedisse de continuar, decidiu, por vontade própria, guardar a arma e ir embora. Pedro saiu ileso. Considerando essa situação hipotética, assinale a opção correta.",
    alternativas: [
      [
        "João responde por tentativa de homicídio, pois a execução foi iniciada e o resultado não ocorreu.",
        "Errada. O resultado não ocorreu por vontade do próprio agente, e não por circunstâncias alheias.",
      ],
      [
        "Há arrependimento eficaz, pois João esgotou os atos de execução e depois impediu o resultado.",
        "Errada. João não esgotou a execução: tinha munição e podia continuar. Ele desistiu de prosseguir.",
      ],
      [
        "Há crime impossível, pois o primeiro disparo não atingiu Pedro, demonstrando a ineficácia do meio.",
        "Errada. A arma era meio eficaz; errar o alvo não torna o meio absolutamente ineficaz.",
      ],
      [
        "Há desistência voluntária, e João responde apenas pelos atos já praticados, e não pela tentativa.",
        "Correta. Art. 15 do CP: quem desiste de prosseguir na execução só responde pelos atos já praticados.",
      ],
      [
        "Há arrependimento posterior, com redução de pena de um a dois terços pela desistência voluntária.",
        "Errada. Arrependimento posterior pressupõe crime consumado sem violência e reparação do dano.",
      ],
    ],
    correta: "D",
    explicacao:
      "Na desistência voluntária, o agente, podendo prosseguir, desiste. Afasta-se a tentativa, e ele responde pelos atos já praticados (no caso, por exemplo, o disparo de arma de fogo, se configurado).",
    conceito: "Desistência voluntária (fórmula de Frank).",
    lembrar: "“Posso, mas não quero” = desistência. “Quero, mas não posso” = tentativa.",
    referencia: "Código Penal, arts. 14, II, e 15.",
  }),
  q({
    id: "dp-tentativa-assertivas",
    tema: "Consumação e tentativa",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca da consumação e da tentativa, assinale a opção correta.",
    alternativas: [
      [
        "Os atos preparatórios são, em regra, punidos como tentativa, com redução de pena de um a dois terços.",
        "Errada. Em regra, atos preparatórios não são puníveis; a tentativa exige início da execução.",
      ],
      [
        "Salvo disposição em contrário, a tentativa é punida com a pena do consumado reduzida de um sexto a um terço.",
        "Errada. A redução é de um a dois terços.",
      ],
      [
        "Os crimes culposos admitem tentativa, desde que o resultado não ocorra por circunstâncias alheias.",
        "Errada. Crime culposo não admite tentativa, pois não há vontade dirigida ao resultado.",
      ],
      [
        "Diz-se consumado o crime quando nele se reúnem todos os elementos de sua definição legal.",
        "Correta. Art. 14, I.",
      ],
      [
        "A tentativa de contravenção penal é punida com a pena da contravenção consumada, sem redução.",
        "Errada. Não é punível a tentativa de contravenção (LCP, art. 4º).",
      ],
    ],
    correta: "D",
    explicacao:
      "Consumação: todos os elementos do tipo. Tentativa: início da execução sem consumação por circunstâncias alheias, com redução de 1/3 a 2/3. Não admitem tentativa: culposos, preterdolosos, contravenções, omissivos próprios, entre outros.",
    conceito: "Iter criminis.",
    lembrar: "Tentativa: reduz de 1 a 2/3. Contravenção tentada: não se pune.",
    referencia: "Código Penal, art. 14; Decreto-Lei 3.688/1941, art. 4º.",
  }),
  q({
    id: "dp-furto-vigilancia",
    tema: "Crime impossível",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Ana escondeu produtos na bolsa dentro de um supermercado. Toda a ação foi acompanhada pelas câmeras e por seguranças, que a abordaram logo após a passagem pelo caixa, recuperando os produtos. Considerando essa situação hipotética e a jurisprudência do STJ, assinale a opção correta.",
    alternativas: [
      [
        "Há crime impossível, pois a vigilância eletrônica tornava absolutamente inviável a consumação.",
        "Errada. A Súmula 567 do STJ afasta o crime impossível nessa hipótese.",
      ],
      [
        "Há furto consumado, pois a consumação ocorre no momento em que o bem é escondido na bolsa.",
        "Errada. O STJ adota a teoria da inversão da posse (amotio), que exige a posse do bem, ainda que breve; o caso indica tentativa.",
      ],
      [
        "Há tentativa de furto, pois a vigilância, por si só, não torna impossível a configuração do crime.",
        "Correta. Súmula 567 do STJ; a abordagem imediata impediu a consumação.",
      ],
      [
        "O fato é atípico, pois os produtos foram recuperados e não houve prejuízo ao estabelecimento.",
        "Errada. A recuperação do bem não torna o fato atípico.",
      ],
      [
        "Há estelionato tentado, pois Ana tentou enganar o caixa ao ocultar os produtos na bolsa.",
        "Errada. Não houve fraude para obter a entrega do bem; houve tentativa de subtração.",
      ],
    ],
    correta: "C",
    explicacao:
      "Sistema de vigilância ou presença de seguranças não tornam, por si sós, impossível o furto (Súmula 567). O STJ adota a teoria da amotio: consuma-se o furto com a inversão da posse, ainda que por breve tempo e sem posse mansa e pacífica (Súmula 582, para o roubo).",
    conceito: "Furto sob vigilância e crime impossível.",
    lembrar: "Câmera e segurança não tornam o furto impossível.",
    referencia: "Súmulas 567 e 582 do STJ; CP, arts. 14, II, e 17.",
  }),
  q({
    id: "dp-erro-proibicao",
    tema: "Erro de proibição",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo o Código Penal, o erro sobre a ilicitude do fato, se inevitável,",
    alternativas: [
      ["exclui o dolo, permitindo a punição por crime culposo, se previsto em lei.", "Errada. Esse é o efeito do erro de tipo (art. 20)."],
      ["permite ao juiz diminuir a pena de um sexto a um terço.", "Errada. Essa é a consequência do erro de proibição evitável."],
      ["isenta de pena.", "Correta. Art. 21, caput."],
      ["exclui a ilicitude do fato, como causa de justificação.", "Errada. O erro de proibição atua na culpabilidade, não na ilicitude."],
      ["não produz efeito, pois o desconhecimento da lei é inescusável.", "Errada. Desconhecer a lei não é o mesmo que errar sobre a ilicitude do fato."],
    ],
    correta: "C",
    explicacao:
      "O desconhecimento da lei é inescusável, mas o erro sobre a ilicitude do fato (achar que a conduta é permitida) isenta de pena se inevitável e reduz de 1/6 a 1/3 se evitável.",
    conceito: "Erro de proibição.",
    lembrar: "Erro de proibição: inevitável isenta; evitável diminui (1/6 a 1/3).",
    referencia: "Código Penal, art. 21.",
  }),
  q({
    id: "dp-imputabilidade",
    tema: "Imputabilidade",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "No que se refere à imputabilidade penal, assinale a opção correta.",
    alternativas: [
      [
        "O semi-imputável, por perturbação da saúde mental, é isento de pena, aplicando-se medida de segurança.",
        "Errada. O semi-imputável tem a pena reduzida de um a dois terços, podendo ser substituída por medida de segurança.",
      ],
      [
        "A embriaguez completa voluntária isenta de pena quando retira toda a capacidade de entendimento.",
        "Errada. Só a embriaguez completa por caso fortuito ou força maior isenta de pena.",
      ],
      [
        "A emoção intensa exclui a imputabilidade quando retira momentaneamente a capacidade de autocontrole.",
        "Errada. Emoção e paixão não excluem a imputabilidade.",
      ],
      [
        "É isento de pena quem, por doença mental, era inteiramente incapaz de entender o caráter ilícito do fato.",
        "Correta. Art. 26, caput.",
      ],
      [
        "O menor de dezoito anos responde penalmente se ficar provado que entendia o caráter ilícito do fato.",
        "Errada. O critério da menoridade é biológico: o menor de 18 é sempre inimputável.",
      ],
    ],
    correta: "D",
    explicacao:
      "Inimputáveis: doentes mentais inteiramente incapazes (critério biopsicológico), menores de 18 (critério biológico) e embriaguez completa acidental. Semi-imputáveis: pena reduzida de 1/3 a 2/3.",
    conceito: "Causas de inimputabilidade.",
    lembrar: "Inteiramente incapaz: isento. Parcialmente: pena reduzida.",
    referencia: "Código Penal, arts. 26 a 28.",
  }),
  q({
    id: "dp-cooperacao-distinta",
    tema: "Concurso de pessoas",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "A e B combinaram furtar um depósito durante a noite, sem uso de violência. Enquanto B recolhia as mercadorias, A, sem o conhecimento de B, encontrou o vigia e o matou. Considerando essa situação hipotética e o Código Penal, assinale a opção correta quanto à responsabilidade de B.",
    alternativas: [
      [
        "B responde por latrocínio, pois quem concorre para o crime responde por todos os resultados produzidos.",
        "Errada. O CP prevê a cooperação dolosamente distinta: B quis participar de crime menos grave.",
      ],
      [
        "B responde pelo furto, com pena aumentada até metade se o resultado mais grave era previsível.",
        "Correta. Art. 29, § 2º, do CP.",
      ],
      [
        "B não responde por crime algum, pois a ação de A rompeu o vínculo entre os dois agentes.",
        "Errada. B responde pelo crime de que quis participar.",
      ],
      [
        "B responde por homicídio culposo em concurso com o furto, pois deveria ter previsto a conduta de A.",
        "Errada. A previsibilidade apenas aumenta a pena do crime de que B quis participar.",
      ],
      [
        "B responde por participação de menor importância no latrocínio, com redução de um sexto a um terço.",
        "Errada. B não participou do latrocínio; aplica-se o § 2º, não o § 1º do art. 29.",
      ],
    ],
    correta: "B",
    explicacao:
      "Se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade se o resultado mais grave era previsível.",
    conceito: "Cooperação dolosamente distinta.",
    lembrar: "Quis o furto? Responde pelo furto (+ até metade se o resultado era previsível).",
    referencia: "Código Penal, art. 29, § 2º.",
  }),
  q({
    id: "dp-homicidio-privilegiado",
    tema: "Homicídio",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado:
      "Se o agente comete homicídio sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, o Código Penal estabelece que o juiz",
    alternativas: [
      ["deverá absolvê-lo, por ausência de culpabilidade em razão da emoção.", "Errada. A emoção não exclui a imputabilidade."],
      ["pode reduzir a pena de um sexto a um terço.", "Correta. É o homicídio privilegiado (art. 121, § 1º)."],
      ["pode reduzir a pena de um a dois terços, como na tentativa.", "Errada. A fração é de um sexto a um terço."],
      ["deverá aplicar a pena do homicídio culposo, pela ausência de dolo.", "Errada. O crime continua doloso."],
      ["pode conceder perdão judicial, extinguindo a punibilidade do agente.", "Errada. O perdão judicial é previsto para o homicídio culposo (§ 5º)."],
    ],
    correta: "B",
    explicacao:
      "O homicídio é privilegiado quando cometido por relevante valor social ou moral, ou sob domínio de violenta emoção logo em seguida a injusta provocação da vítima. A pena é reduzida de 1/6 a 1/3.",
    conceito: "Homicídio privilegiado.",
    lembrar: "Privilégio: reduz de 1/6 a 1/3.",
    referencia: "Código Penal, art. 121, § 1º.",
  }),
  q({
    id: "dp-feminicidio-caso",
    tema: "Feminicídio",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Inconformado com o fim do relacionamento, Marcos matou a ex-companheira, com quem havia convivido por cinco anos, após persegui-la por semanas. Considerando essa situação hipotética e a legislação penal em vigor, assinale a opção correta.",
    alternativas: [
      [
        "Marcos responde por homicídio simples, com a agravante genérica de crime contra a mulher.",
        "Errada. A conduta se amolda ao feminicídio, crime autônomo.",
      ],
      [
        "Marcos responde por feminicídio, previsto como crime autônomo no art. 121-A do Código Penal.",
        "Correta. Morte de mulher por razões da condição do sexo feminino, inclusive em contexto de violência doméstica e familiar.",
      ],
      [
        "Marcos responde por homicídio privilegiado, pois agiu dominado por violenta emoção após o término.",
        "Errada. O fim do relacionamento não é injusta provocação da vítima.",
      ],
      [
        "Marcos responde por homicídio qualificado pelo motivo fútil, já que o feminicídio deixou de ser crime.",
        "Errada. O feminicídio não deixou de ser crime; tornou-se tipo autônomo.",
      ],
      [
        "Marcos responde por feminicídio apenas se o casal tivesse sido formalmente casado no civil.",
        "Errada. Não se exige casamento; basta a razão da condição de sexo feminino.",
      ],
    ],
    correta: "B",
    explicacao:
      "A Lei 14.994/2024 transformou o feminicídio em crime autônomo (art. 121-A), com pena de 20 a 40 anos. Considera-se que há razões da condição do sexo feminino quando o crime envolve violência doméstica e familiar ou menosprezo ou discriminação à condição de mulher.",
    conceito: "Feminicídio como tipo autônomo.",
    lembrar: "Feminicídio: art. 121-A, pena de 20 a 40 anos.",
    referencia: "Código Penal, art. 121-A; Lei 14.994/2024.",
  }),
  q({
    id: "dp-lesao-gravissima",
    tema: "Lesão corporal",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo o Código Penal, é lesão corporal de natureza GRAVÍSSIMA aquela que resulta em",
    alternativas: [
      ["incapacidade para as ocupações habituais por mais de trinta dias.", "Errada. É lesão grave (§ 1º, I)."],
      ["perigo de vida para a vítima.", "Errada. É lesão grave (§ 1º, II)."],
      ["debilidade permanente de membro, sentido ou função.", "Errada. É lesão grave (§ 1º, III)."],
      ["deformidade permanente.", "Correta. É lesão gravíssima (§ 2º, IV)."],
      ["aceleração de parto.", "Errada. É lesão grave (§ 1º, IV); o aborto é que gera lesão gravíssima."],
    ],
    correta: "D",
    explicacao:
      "Grave: incapacidade por mais de 30 dias, perigo de vida, DEBILIDADE permanente, aceleração de parto. Gravíssima: incapacidade PERMANENTE para o trabalho, enfermidade incurável, PERDA ou inutilização de membro, deformidade permanente, aborto.",
    conceito: "Lesão grave × gravíssima.",
    lembrar: "Debilidade = grave. Perda = gravíssima. Acelerou o parto = grave; aborto = gravíssima.",
    referencia: "Código Penal, art. 129, §§ 1º e 2º.",
  }),
  q({
    id: "dp-roubo-improprio",
    tema: "Roubo",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Pedro subtraiu, sem violência, um celular deixado sobre a mesa de um bar. Ao ser surpreendido pelo dono do aparelho na saída, empurrou-o violentamente para conseguir fugir com o celular. Considerando essa situação hipotética e o Código Penal, Pedro responde, em tese, por",
    alternativas: [
      ["furto consumado em concurso material com lesão corporal leve.", "Errada. A violência empregada após a subtração para assegurar a coisa caracteriza roubo."],
      ["roubo impróprio.", "Correta. Art. 157, § 1º: violência logo depois da subtração para assegurar a detenção da coisa."],
      ["furto qualificado pelo emprego de destreza.", "Errada. Destreza é habilidade para subtrair sem ser percebido, não violência."],
      ["extorsão, pois obrigou a vítima a tolerar a fuga.", "Errada. Na extorsão, a vítima é constrangida a fazer, tolerar ou deixar de fazer algo para dar a vantagem."],
      ["roubo próprio, pois houve violência antes da subtração.", "Errada. A violência veio depois da subtração; por isso o roubo é impróprio."],
    ],
    correta: "B",
    explicacao:
      "Roubo próprio: violência ou grave ameaça antes ou durante a subtração. Roubo impróprio: violência ou grave ameaça logo depois de subtraída a coisa, para assegurar a impunidade do crime ou a detenção da coisa.",
    conceito: "Roubo próprio × impróprio.",
    lembrar: "Violência DEPOIS para garantir a coisa ou a fuga = roubo impróprio.",
    referencia: "Código Penal, art. 157, § 1º.",
  }),
  q({
    id: "dp-roubo-majorantes",
    tema: "Roubo",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca do crime de roubo, considerando a redação atual do Código Penal, assinale a opção correta.",
    alternativas: [
      [
        "O emprego de arma branca não aumenta a pena do roubo, por ausência de previsão legal.",
        "Errada. A Lei 13.964/2019 reincluiu a arma branca como causa de aumento (§ 2º, VII).",
      ],
      [
        "Se a violência ou grave ameaça é exercida com emprego de arma de fogo, a pena aumenta de dois terços.",
        "Correta. Art. 157, § 2º-A, I.",
      ],
      [
        "O concurso de duas ou mais pessoas qualifica o roubo e faz a pena ser aplicada em dobro.",
        "Errada. O concurso de pessoas é causa de aumento de 1/3 até metade (§ 2º, II).",
      ],
      [
        "O roubo seguido de morte (latrocínio) é crime doloso contra a vida, julgado pelo tribunal do júri.",
        "Errada. O latrocínio é julgado pelo juiz singular (Súmula 603 do STF).",
      ],
      [
        "A restrição da liberdade da vítima durante o roubo não altera a pena, por ser inerente ao crime.",
        "Errada. Manter a vítima em seu poder, restringindo sua liberdade, aumenta a pena (§ 2º, V).",
      ],
    ],
    correta: "B",
    explicacao:
      "Roubo: aumento de 1/3 até metade (concurso de pessoas, restrição de liberdade, arma branca etc.); de 2/3 com arma de fogo ou destruição de obstáculo com explosivo; em dobro com arma de fogo de uso restrito ou proibido.",
    conceito: "Majorantes do roubo.",
    lembrar: "Arma branca: 1/3 a 1/2. Arma de fogo: 2/3. Uso restrito: dobro.",
    referencia: "Código Penal, art. 157, §§ 2º, 2º-A e 2º-B; Súmula 603 do STF.",
  }),
  q({
    id: "dp-sequestro-relampago",
    tema: "Extorsão",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Dois homens abordaram Lúcia em um estacionamento, obrigaram-na a entrar no carro e circularam com ela por duas horas, forçando-a a sacar dinheiro em caixas eletrônicos com seu cartão e sua senha. Depois a libertaram. Considerando essa situação hipotética e o Código Penal, a conduta configura, em tese,",
    alternativas: [
      ["extorsão mediante sequestro.", "Errada. Esse crime exige a privação da liberdade como meio de obter vantagem como condição ou preço do resgate."],
      ["extorsão com restrição da liberdade da vítima (sequestro relâmpago).", "Correta. Art. 158, § 3º: a restrição da liberdade é condição necessária para obter a vantagem."],
      ["furto mediante fraude, pois o dinheiro foi retirado das contas da vítima.", "Errada. Houve grave ameaça e restrição da liberdade, não fraude."],
      ["sequestro e cárcere privado, absorvendo o crime patrimonial.", "Errada. A finalidade econômica caracteriza crime contra o patrimônio."],
      ["estelionato, pois os saques foram feitos com o cartão e a senha da vítima.", "Errada. A vítima não foi enganada; foi coagida."],
    ],
    correta: "B",
    explicacao:
      "O “sequestro relâmpago” foi tipificado no art. 158, § 3º: extorsão cometida mediante restrição da liberdade da vítima, quando essa condição é necessária para a obtenção da vantagem econômica.",
    conceito: "Sequestro relâmpago.",
    lembrar: "Restringe a liberdade para a vítima sacar: extorsão do art. 158, § 3º.",
    referencia: "Código Penal, arts. 158, § 3º, e 159.",
  }),
  q({
    id: "dp-furto-assertivas",
    tema: "Furto",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca do crime de furto, assinale a opção correta.",
    alternativas: [
      [
        "A subtração de energia elétrica não configura furto, por não se tratar de coisa móvel corpórea.",
        "Errada. O CP equipara à coisa móvel a energia elétrica ou qualquer outra com valor econômico (§ 3º).",
      ],
      [
        "No furto qualificado pelo concurso de pessoas, a pena do furto simples é aumentada de metade.",
        "Errada. É qualificadora, com pena própria de 2 a 8 anos (§ 4º), e não causa de aumento.",
      ],
      [
        "O furto de veículo levado a outro estado é causa de aumento de um terço da pena do furto simples.",
        "Errada. É qualificadora, com pena de 3 a 8 anos (§ 5º).",
      ],
      [
        "O furto de coisa de pequeno valor por agente primário extingue obrigatoriamente a punibilidade.",
        "Errada. O furto privilegiado permite substituir a reclusão por detenção, diminuir a pena ou aplicar só multa.",
      ],
      [
        "A pena aumenta de um terço se o furto é praticado durante o repouso noturno.",
        "Correta. Art. 155, § 1º.",
      ],
    ],
    correta: "E",
    explicacao:
      "Repouso noturno: aumento de 1/3. Pequeno valor + primário: privilégio. Qualificadoras: rompimento de obstáculo, abuso de confiança, fraude, escalada, destreza, chave falsa, concurso de pessoas (§ 4º), veículo levado a outro estado ou exterior (§ 5º), entre outras.",
    conceito: "Furto majorado, privilegiado e qualificado.",
    lembrar: "Repouso noturno aumenta; concurso de pessoas qualifica.",
    referencia: "Código Penal, art. 155.",
  }),
  q({
    id: "dp-receptacao-culposa",
    tema: "Receptação",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Rafael comprou de um desconhecido, na rua, um notebook novo, sem nota fiscal, por cerca de 10% do valor de mercado. Não sabia que o aparelho era produto de roubo, mas o preço e as circunstâncias indicavam a origem ilícita. Considerando essa situação hipotética, Rafael responde, em tese, por",
    alternativas: [
      ["receptação dolosa, pois deveria saber da origem criminosa do bem.", "Errada. A receptação dolosa do caput exige que o agente saiba da origem ilícita."],
      ["roubo, como partícipe, por ter adquirido o produto do crime.", "Errada. Rafael não concorreu para o roubo."],
      ["favorecimento real, por ter ajudado a tornar seguro o proveito do crime.", "Errada. O favorecimento real exige a intenção de auxiliar o autor do crime."],
      ["nenhum crime, pois não sabia que o notebook era produto de roubo.", "Errada. A lei prevê a modalidade culposa justamente para esse caso."],
      ["receptação culposa, pela desproporção do preço e pelas circunstâncias.", "Correta. Art. 180, § 3º."],
    ],
    correta: "E",
    explicacao:
      "Há receptação culposa quando o agente adquire ou recebe coisa que, por sua natureza, pela desproporção entre o valor e o preço ou pela condição de quem a oferece, deve presumir-se obtida por meio criminoso.",
    conceito: "Receptação culposa.",
    lembrar: "Preço absurdo + sem nota + desconhecido na rua = deveria presumir.",
    referencia: "Código Penal, art. 180, § 3º.",
  }),
  q({
    id: "dp-estelionato-acao",
    tema: "Estelionato",
    dificuldade: "dificil",
    tipo: "direta",
    enunciado: "Após a Lei 13.964/2019, em regra, a ação penal no crime de estelionato é",
    alternativas: [
      ["pública incondicionada.", "Errada. Passou a ser condicionada à representação, salvo exceções legais."],
      ["privada, mediante queixa da vítima.", "Errada. A ação é pública, mas depende de representação."],
      ["pública condicionada à representação.", "Correta. Art. 171, § 5º, com exceções (Administração Pública, criança, adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz)."],
      ["pública condicionada à requisição do Ministro da Justiça.", "Errada. Não há essa exigência."],
      ["privada subsidiária da pública, em qualquer caso.", "Errada. A ação privada subsidiária só cabe diante da inércia do MP."],
    ],
    correta: "C",
    explicacao:
      "O pacote anticrime tornou o estelionato crime de ação pública condicionada à representação, exceto quando a vítima for a Administração Pública, criança ou adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz.",
    conceito: "Ação penal no estelionato.",
    lembrar: "Estelionato: em regra, precisa de representação.",
    referencia: "Código Penal, art. 171, § 5º.",
  }),
  q({
    id: "dp-peculato-fianca",
    tema: "Crimes contra a Administração Pública",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Um escrivão de polícia, responsável pela guarda dos valores de fiança recolhidos na delegacia, utilizou parte do dinheiro para quitar dívidas pessoais, pretendendo devolvê-lo no mês seguinte. Considerando essa situação hipotética, a conduta configura, em tese,",
    alternativas: [
      ["apropriação indébita, pois o escrivão tinha a posse lícita do dinheiro.", "Errada. Sendo funcionário público e tendo a posse em razão do cargo, o crime é peculato."],
      ["peculato, por se apropriar de valor de que tinha a posse em razão do cargo.", "Correta. Art. 312 do CP; a intenção de devolver não afasta o crime."],
      ["concussão, por ter obtido vantagem indevida em razão da função.", "Errada. Concussão exige que o funcionário EXIJA vantagem de alguém."],
      ["prevaricação, por ter deixado de cumprir dever de ofício.", "Errada. O núcleo da conduta é a apropriação de dinheiro público."],
      ["fato atípico, pois a intenção de devolver afasta o dolo de apropriação.", "Errada. O peculato-uso de dinheiro é punível; a devolução posterior não afasta o crime."],
    ],
    correta: "B",
    explicacao:
      "Peculato: apropriar-se o funcionário de dinheiro, valor ou bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo em proveito próprio ou alheio. O uso de dinheiro (bem fungível) caracteriza o crime.",
    conceito: "Peculato-apropriação.",
    lembrar: "Funcionário + posse em razão do cargo + apropriação = peculato.",
    referencia: "Código Penal, art. 312.",
  }),
  q({
    id: "dp-concussao-policial",
    tema: "Crimes contra a Administração Pública",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Um agente de polícia disse ao dono de um bar que só deixaria de autuá-lo em flagrante pela venda de bebida adulterada se recebesse R$ 5.000,00, sem fazer qualquer ameaça de violência. O comerciante pagou. Considerando essa situação hipotética e o Código Penal, o agente responde, em tese, por",
    alternativas: [
      ["corrupção passiva, pois recebeu a vantagem indevida.", "Errada. Houve exigência, e não mera solicitação ou recebimento; o núcleo é o da concussão."],
      ["concussão, pois exigiu vantagem indevida em razão da função.", "Correta. Art. 316 do CP: exigir, em razão da função, vantagem indevida."],
      ["extorsão, pois constrangeu a vítima a entregar dinheiro.", "Errada. Sem violência ou grave ameaça, a exigência com base no temor da autoridade caracteriza concussão."],
      ["prevaricação, pois deixou de praticar ato de ofício.", "Errada. A prevaricação pressupõe interesse ou sentimento pessoal, não exigência de vantagem."],
      ["corrupção ativa, praticada em coautoria com o comerciante.", "Errada. A corrupção ativa é crime do particular que oferece ou promete vantagem."],
    ],
    correta: "B",
    explicacao:
      "Concussão: exigir vantagem indevida em razão da função; a vítima cede por temor da autoridade. Se houver violência ou grave ameaça, a jurisprudência pode reconhecer extorsão. Solicitar ou receber, sem exigir, é corrupção passiva.",
    conceito: "Concussão × corrupção passiva × extorsão.",
    lembrar: "Exigiu: concussão. Pediu: corrupção passiva. Ameaçou com violência: extorsão.",
    referencia: "Código Penal, arts. 158, 316 e 317.",
  }),
  q({
    id: "dp-adm-publica-assertivas",
    tema: "Crimes contra a Administração Pública",
    dificuldade: "media",
    tipo: "assertivas",
    enunciado: "Acerca dos crimes contra a Administração Pública, assinale a opção correta.",
    alternativas: [
      [
        "A corrupção passiva só se consuma quando o funcionário efetivamente pratica o ato de ofício.",
        "Errada. É crime formal; a prática do ato apenas aumenta a pena (§ 1º).",
      ],
      [
        "Comete corrupção ativa quem oferece vantagem indevida a funcionário, ainda que este a recuse.",
        "Correta. A corrupção ativa é crime formal, consumado com a oferta ou promessa.",
      ],
      [
        "A prevaricação exige que o funcionário receba vantagem econômica para retardar o ato de ofício.",
        "Errada. Na prevaricação, o móvel é interesse ou sentimento pessoal.",
      ],
      [
        "Para fins penais, considera-se funcionário público apenas o ocupante de cargo efetivo.",
        "Errada. O art. 327 abrange quem exerce cargo, emprego ou função pública, ainda que transitoriamente.",
      ],
      [
        "No peculato culposo, a reparação do dano após a sentença irrecorrível extingue a punibilidade.",
        "Errada. Após a sentença irrecorrível, a reparação reduz a pena pela metade.",
      ],
    ],
    correta: "B",
    explicacao:
      "Corrupção ativa e passiva são crimes formais: consumam-se com a oferta, solicitação ou aceitação, independentemente da prática do ato. A prática do ato, em violação de dever, aumenta a pena.",
    conceito: "Crimes formais contra a Administração.",
    lembrar: "Ofereceu? Já é corrupção ativa, mesmo que recusem.",
    referencia: "Código Penal, arts. 312, 317, 319, 327 e 333.",
  }),
  q({
    id: "dp-funcionario-publico",
    tema: "Crimes contra a Administração Pública",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Para os efeitos penais, segundo o Código Penal, considera-se funcionário público",
    alternativas: [
      ["somente quem ocupa cargo de provimento efetivo, após aprovação em concurso público.", "Errada. O conceito penal é amplo."],
      ["quem exerce cargo, emprego ou função pública, ainda que transitoriamente ou sem remuneração.", "Correta. Art. 327, caput."],
      ["apenas os agentes que recebem remuneração paga diretamente pelos cofres públicos.", "Errada. A remuneração não é requisito."],
      ["somente quem exerce funções de chefia, direção ou assessoramento na Administração.", "Errada. Não se exige função de chefia."],
      ["quem trabalha em empresa privada que recebe incentivos fiscais ou subsídios do governo.", "Errada. A equiparação do § 1º alcança empresa contratada para atividade típica da Administração."],
    ],
    correta: "B",
    explicacao:
      "O conceito penal de funcionário público é amplo. Equipara-se quem exerce cargo, emprego ou função em entidade paraestatal e quem trabalha para empresa contratada ou conveniada para a execução de atividade típica da Administração.",
    conceito: "Funcionário público para fins penais.",
    lembrar: "Penal: basta exercer função pública, mesmo transitória e sem salário.",
    referencia: "Código Penal, art. 327.",
  }),
  q({
    id: "dp-desobediencia-parada",
    tema: "Crimes contra a Administração Pública",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Durante operação de policiamento para prevenção de crimes, policiais deram ordem legal de parada a um motorista, que acelerou e fugiu, sem empregar violência ou ameaça. Foi alcançado quilômetros depois. Considerando essa situação hipotética e a jurisprudência do STJ, a conduta do motorista configura, em tese,",
    alternativas: [
      ["resistência, pois se opôs à execução de ato legal.", "Errada. A resistência exige violência ou ameaça ao funcionário."],
      ["mera infração administrativa de trânsito, sem relevância penal.", "Errada. O STJ fixou que a conduta é penalmente típica nesse contexto."],
      ["desobediência, prevista no art. 330 do Código Penal.", "Correta. Tese do STJ no Tema 1.060 dos recursos repetitivos."],
      ["desacato, pois desprestigiou a autoridade dos policiais.", "Errada. Não houve ofensa ou humilhação aos funcionários."],
      ["fato atípico, pois ninguém é obrigado a produzir prova contra si mesmo.", "Errada. O direito de não se autoincriminar não autoriza a fuga à ordem legal de parada."],
    ],
    correta: "C",
    explicacao:
      "O STJ firmou que a desobediência à ordem legal de parada, emanada por agentes públicos em contexto de policiamento ostensivo para prevenção e repressão de crimes, constitui o crime do art. 330 do CP.",
    conceito: "Desobediência à ordem de parada.",
    lembrar: "Fugiu da ordem de parada sem violência: desobediência (STJ, Tema 1.060).",
    referencia: "Código Penal, art. 330; STJ, Tema 1.060.",
  }),
  q({
    id: "dp-justica-assertivas",
    tema: "Crimes contra a administração da justiça",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca dos crimes contra a administração da justiça, assinale a opção correta.",
    alternativas: [
      [
        "A comunicação falsa de crime exige que o agente atribua a infração a pessoa determinada.",
        "Errada. Imputar a pessoa determinada caracteriza denunciação caluniosa, não comunicação falsa.",
      ],
      [
        "No falso testemunho, a retratação do agente é irrelevante, pois o crime já se consumou.",
        "Errada. A retratação antes da sentença no processo em que ocorreu o ilícito torna o fato não punível.",
      ],
      [
        "Comete autoacusação falsa quem se acusa, perante a autoridade, de crime inexistente ou praticado por outrem.",
        "Correta. Art. 341 do CP.",
      ],
      [
        "A denunciação caluniosa só se configura se for instaurado processo judicial contra a vítima.",
        "Errada. Basta dar causa a inquérito policial, PIC, processo administrativo, ação de improbidade etc.",
      ],
      [
        "O favorecimento pessoal ocorre quando se auxilia o autor de crime a tornar seguro o proveito do delito.",
        "Errada. Essa é a definição de favorecimento real; o pessoal é auxiliar a subtrair-se à ação da autoridade.",
      ],
    ],
    correta: "C",
    explicacao:
      "Denunciação caluniosa: imputa crime a quem sabe inocente, dando causa a investigação ou processo. Comunicação falsa: comunica crime inexistente, sem acusar alguém determinado. Autoacusação falsa: acusa a si mesmo. Favorecimento pessoal: ajuda o autor a escapar; real: ajuda a garantir o proveito.",
    conceito: "Crimes contra a administração da justiça.",
    lembrar: "Favorecimento PESSOAL = a pessoa foge. REAL = a coisa (proveito) fica segura.",
    referencia: "Código Penal, arts. 339 a 349.",
  }),
  q({
    id: "dp-prescricao-reducao",
    tema: "Prescrição",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo o Código Penal, os prazos de prescrição são reduzidos de metade quando o criminoso era, ao tempo do crime,",
    alternativas: [
      ["menor de dezoito anos.", "Errada. O menor de 18 é inimputável; não se fala em prescrição penal."],
      ["menor de vinte e um anos.", "Correta. Art. 115 (ou maior de 70 anos na data da sentença)."],
      ["primário e de bons antecedentes.", "Errada. Primariedade não reduz o prazo prescricional."],
      ["maior de sessenta anos.", "Errada. A idade relevante é maior de 70 anos, na data da sentença."],
      ["confesso perante a autoridade.", "Errada. A confissão é atenuante, não reduz a prescrição."],
    ],
    correta: "B",
    explicacao:
      "São reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de 21 anos, ou, na data da sentença, maior de 70 anos.",
    conceito: "Redução dos prazos prescricionais pela idade.",
    lembrar: "Menos de 21 no crime ou mais de 70 na sentença: prescrição pela metade.",
    referencia: "Código Penal, art. 115.",
  }),
  q({
    id: "dp-prescricao-calculo",
    tema: "Prescrição",
    dificuldade: "desafio",
    tipo: "situacao",
    enunciado:
      "Carlos, com 19 anos na data do fato, praticou furto simples (pena de reclusão de 1 a 4 anos, e multa). Não houve causas suspensivas ou interruptivas. Considerando essa situação hipotética e o Código Penal, o prazo da prescrição da pretensão punitiva, calculado pela pena máxima em abstrato, é de",
    alternativas: [
      ["2 anos.", "Errada. Não corresponde ao cálculo: 8 anos reduzidos pela metade."],
      ["3 anos.", "Errada. Três anos é o prazo mínimo do art. 109, VI, para penas inferiores a 1 ano."],
      ["4 anos.", "Correta. Pena máxima de 4 anos prescreve em 8 (art. 109, IV); reduzido pela metade (art. 115): 4 anos."],
      ["8 anos.", "Errada. Esqueceu a redução pela metade por ser menor de 21 anos."],
      ["12 anos.", "Errada. Doze anos é o prazo para pena máxima superior a 4 e até 8 anos."],
    ],
    correta: "C",
    explicacao:
      "Tabela do art. 109: até 1 ano → 3; de 1 a 2 → 4; de 2 a 4 → 8; de 4 a 8 → 12; de 8 a 12 → 16; mais de 12 → 20. Pena máxima de 4 anos → 8 anos; como Carlos tinha menos de 21 anos, reduz-se à metade.",
    conceito: "Cálculo da prescrição em abstrato.",
    lembrar: "Pena máxima 4 → 8 anos. Menor de 21: metade.",
    referencia: "Código Penal, arts. 109 e 115.",
  }),
  q({
    id: "dp-penas-assertivas",
    tema: "Penas",
    dificuldade: "dificil",
    tipo: "assertivas",
    enunciado: "Acerca das penas no Código Penal, assinale a opção correta.",
    alternativas: [
      [
        "A pena de multa é calculada em dias-multa, sendo, no mínimo, de dez e, no máximo, de trezentos e sessenta.",
        "Correta. Art. 49.",
      ],
      [
        "O condenado não reincidente a pena superior a oito anos pode iniciar o cumprimento no regime semiaberto.",
        "Errada. Pena superior a oito anos começa no regime fechado (art. 33, § 2º, “a”).",
      ],
      [
        "As penas restritivas de direitos substituem a privativa em crimes cometidos com grave ameaça à pessoa.",
        "Errada. A substituição exige crime sem violência ou grave ameaça, entre outros requisitos (art. 44, I).",
      ],
      [
        "A pena de detenção admite o início do cumprimento em regime fechado, a critério do juiz.",
        "Errada. Detenção começa no semiaberto ou aberto, salvo necessidade de transferência ao fechado.",
      ],
      [
        "O tempo de cumprimento das penas privativas de liberdade não pode ser superior a trinta anos.",
        "Errada. Desde a Lei 13.964/2019, o limite é de quarenta anos (art. 75).",
      ],
    ],
    correta: "A",
    explicacao:
      "Regimes iniciais (não reincidente): mais de 8 anos, fechado; mais de 4 até 8, semiaberto; até 4, aberto. Detenção não começa no fechado. Limite de cumprimento: 40 anos. Multa: de 10 a 360 dias-multa.",
    conceito: "Regimes, substituição e multa.",
    lembrar: "Limite de cumprimento hoje: 40 anos.",
    referencia: "Código Penal, arts. 33, 44, 49 e 75.",
  }),
  q({
    id: "dp-crime-continuado",
    tema: "Concurso de crimes",
    dificuldade: "media",
    tipo: "situacao",
    enunciado:
      "Durante quatro semanas, uma operadora de caixa subtraiu pequenas quantias da gaveta da loja onde trabalhava, sempre no mesmo horário, no mesmo local e da mesma forma, sem violência. Considerando essa situação hipotética, o instituto aplicável à pluralidade de furtos é",
    alternativas: [
      ["o concurso material, com a soma das penas de todos os furtos praticados.", "Errada. As condições de tempo, lugar e modo semelhantes caracterizam continuidade delitiva."],
      ["o concurso formal próprio, com uma só ação e vários resultados.", "Errada. Houve várias ações, não uma só."],
      ["o crime continuado, com uma só pena aumentada de um sexto a dois terços.", "Correta. Art. 71 do CP."],
      ["o crime habitual, que só se configura pela reiteração de atos da mesma natureza.", "Errada. O furto não é crime habitual."],
      ["o crime permanente, cuja consumação se prolonga no tempo.", "Errada. Cada furto se consumou em um momento; não há permanência."],
    ],
    correta: "C",
    explicacao:
      "Crime continuado: mais de uma ação, crimes da mesma espécie, mesmas condições de tempo, lugar e maneira de execução. Aplica-se a pena de um só crime, aumentada de 1/6 a 2/3 (até o triplo nos dolosos com violência contra vítimas diferentes).",
    conceito: "Crime continuado.",
    lembrar: "Mesma espécie + mesmo tempo, lugar e modo = continuidade.",
    referencia: "Código Penal, art. 71.",
  }),
  q({
    id: "dp-concursos-assertivas",
    tema: "Concurso de crimes",
    dificuldade: "desafio",
    tipo: "assertivas",
    enunciado: "Acerca do concurso de crimes, assinale a opção correta.",
    alternativas: [
      [
        "No concurso formal próprio, aplicam-se cumulativamente as penas de todos os crimes praticados.",
        "Errada. No formal próprio, aplica-se a mais grave (ou uma delas) aumentada de 1/6 até metade.",
      ],
      [
        "O crime continuado exige crimes de espécies diferentes, praticados em condições semelhantes.",
        "Errada. Exige crimes da mesma espécie.",
      ],
      [
        "No concurso material, aplica-se a pena mais grave, aumentada de um sexto até a metade.",
        "Errada. No concurso material, as penas são somadas.",
      ],
      [
        "No concurso formal impróprio, com desígnios autônomos, as penas são aplicadas cumulativamente.",
        "Correta. Art. 70, caput, segunda parte.",
      ],
      [
        "No crime continuado, as penas de multa são unificadas em uma só, aumentada de um sexto a dois terços.",
        "Errada. No concurso de crimes, as multas são aplicadas distinta e integralmente (art. 72).",
      ],
    ],
    correta: "D",
    explicacao:
      "Concurso material (várias ações, vários crimes): soma. Formal próprio (uma ação, vários crimes, sem desígnios autônomos): exasperação de 1/6 a 1/2. Formal impróprio (desígnios autônomos): soma. Multas: sempre aplicadas integralmente.",
    conceito: "Sistemas de aplicação de pena no concurso de crimes.",
    lembrar: "Desígnios autônomos = soma, mesmo com uma só ação.",
    referencia: "Código Penal, arts. 69 a 72.",
  }),
  q({
    id: "dp-perdao-judicial",
    tema: "Extinção da punibilidade",
    dificuldade: "dificil",
    tipo: "situacao",
    enunciado:
      "Ao dar ré na garagem, um pai atropelou culposamente o próprio filho, que morreu. O pai ficou profundamente abalado. Considerando essa situação hipotética e o Código Penal, assinale a opção correta.",
    alternativas: [
      [
        "O juiz pode deixar de aplicar a pena, se as consequências do fato atingiram o agente de forma grave.",
        "Correta. Perdão judicial no homicídio culposo (art. 121, § 5º), causa de extinção da punibilidade.",
      ],
      [
        "O fato é atípico, pois não há crime quando a vítima é descendente do agente.",
        "Errada. O homicídio culposo é típico, qualquer que seja a vítima.",
      ],
      [
        "O pai responde por homicídio doloso, pois assumiu o risco ao manobrar o carro sem olhar para trás.",
        "Errada. Não há elementos de dolo eventual; a conduta descrita é culposa.",
      ],
      [
        "O perdão judicial é obrigatório nesse caso e depende de aceitação do pai para produzir efeitos.",
        "Errada. O perdão judicial é concedido pelo juiz e não depende de aceitação.",
      ],
      [
        "A sentença que concede o perdão judicial gera reincidência, se o pai cometer novo crime.",
        "Errada. A sentença de perdão judicial não é considerada para efeitos de reincidência (art. 120).",
      ],
    ],
    correta: "A",
    explicacao:
      "No homicídio culposo, o juiz poderá deixar de aplicar a pena se as consequências da infração atingirem o próprio agente de forma tão grave que a sanção penal se torne desnecessária. A sentença é declaratória da extinção da punibilidade (Súmula 18 do STJ) e não gera reincidência.",
    conceito: "Perdão judicial.",
    lembrar: "Perdão judicial: concedido pelo juiz, não precisa de aceitação, não gera reincidência.",
    referencia: "Código Penal, arts. 107, IX, 120 e 121, § 5º; Súmula 18 do STJ.",
  }),
  q({
    id: "dp-limite-pena",
    tema: "Penas",
    dificuldade: "media",
    tipo: "direta",
    enunciado: "Segundo o Código Penal, com a redação dada pela Lei 13.964/2019, o tempo de cumprimento das penas privativas de liberdade não pode ser superior a",
    alternativas: [
      ["20 anos.", "Errada. O limite é de 40 anos."],
      ["30 anos.", "Errada. Era o limite anterior à Lei 13.964/2019."],
      ["35 anos.", "Errada. O limite é de 40 anos."],
      ["40 anos.", "Correta. Art. 75, caput."],
      ["50 anos.", "Errada. O limite é de 40 anos."],
    ],
    correta: "D",
    explicacao:
      "Quando o agente for condenado a penas cuja soma seja superior a 40 anos, elas devem ser unificadas para atender ao limite. Benefícios da execução, porém, são calculados sobre a pena total (Súmula 715 do STF).",
    conceito: "Limite de cumprimento de pena.",
    lembrar: "Pacote anticrime: limite de 30 passou para 40 anos.",
    referencia: "Código Penal, art. 75; Súmula 715 do STF.",
  }),
]

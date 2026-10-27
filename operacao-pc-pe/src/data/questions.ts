import type { Question } from "../domain/types"
import { ADMINISTRATIVO } from "./banco/administrativo"
import { CONSTITUCIONAL } from "./banco/constitucional"
import { CONTABILIDADE } from "./banco/contabilidade"
import { ESPECIAL } from "./banco/especial"
import { ESTATISTICA } from "./banco/estatistica"
import { INCORRETAS } from "./banco/incorretas"
import { INFORMATICA } from "./banco/informatica"
import { LOGICA } from "./banco/logica"
import { PENAL } from "./banco/penal"
import { PORTUGUES } from "./banco/portugues"
import { PROCESSUAL } from "./banco/processual"

/**
 * Banco autoral no estilo de múltipla escolha da Cebraspe (cinco opções, uma correta).
 * Os textos das alternativas não citam letras, porque a ordem é embaralhada por sessão.
 */
export const BANK_NOTICE =
  "Questões autorais de estudo. Material independente, sem vínculo com a PC-PE ou a banca."

export const QUESTIONS: Question[] = [
  ...CONSTITUCIONAL,
  ...ADMINISTRATIVO,
  ...PENAL,
  ...ESPECIAL,
  ...PROCESSUAL,
  ...PORTUGUES,
  ...INFORMATICA,
  ...LOGICA,
  ...ESTATISTICA,
  ...CONTABILIDADE,
  ...INCORRETAS,
]

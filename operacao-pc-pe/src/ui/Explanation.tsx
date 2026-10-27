import { BookOpen, Lightbulb } from "lucide-react"
import { displayLetter } from "../domain/session"
import type { Question, SessionItem } from "../domain/types"

/** Gabarito comentado: primeiro as respostas, depois os porquês. */
export function Explanation(props: { question: Question; item: SessionItem; headingLevel?: 2 | 3 }) {
  const question = props.question
  const answer = props.item.answer
  const correct = answer === question.correta
  const Heading = props.headingLevel === 2 ? "h2" : "h3"
  return (
    <section className="explanation" aria-label="Gabarito comentado">
      <div className="answer-pair">
        <div className={`answer-box ${!answer ? "is-blank" : correct ? "is-correct" : "is-wrong"}`}>
          <span className="answer-box-label">Sua resposta</span>
          {answer ? (
            <>
              <span className="answer-box-letter">{displayLetter(props.item, answer)}</span>
              <span className="answer-box-text">{question.alternativas[answer].text}</span>
            </>
          ) : (
            <span className="answer-box-text">Em branco</span>
          )}
        </div>
        <div className="answer-box is-key">
          <span className="answer-box-label">Resposta correta</span>
          <span className="answer-box-letter">{displayLetter(props.item, question.correta)}</span>
          <span className="answer-box-text">{question.alternativas[question.correta].text}</span>
        </div>
      </div>

      <div className="why-block">
        <Heading className="why-title">Por que a correta está certa</Heading>
        <p>{question.alternativas[question.correta].why}</p>
        <p className="muted-strong">{question.explicacao}</p>
      </div>

      {answer && !correct && (
        <div className="why-block why-wrong">
          <Heading className="why-title">Por que a alternativa {displayLetter(props.item, answer)} está errada</Heading>
          <p>{question.alternativas[answer].why}</p>
        </div>
      )}

      <div className="remember">
        <Lightbulb size={18} aria-hidden="true" />
        <div>
          <Heading className="why-title">O que lembrar na próxima vez</Heading>
          <p>{question.lembrar}</p>
          <p className="concept">
            <span>Conceito principal:</span> {question.conceito}
          </p>
        </div>
      </div>

      <details className="all-alternatives">
        <summary>Ver a justificativa de todas as alternativas</summary>
        <ul>
          {props.item.order.map((original, index) => (
            <li key={original} className={original === question.correta ? "is-key" : ""}>
              <span className="alt-letter">{"ABCDE"[index]}</span>
              <div>
                <p className="alt-text">{question.alternativas[original].text}</p>
                <p className="alt-why">{question.alternativas[original].why}</p>
              </div>
            </li>
          ))}
        </ul>
      </details>

      {question.referencia && (
        <p className="reference">
          <BookOpen size={14} aria-hidden="true" /> Referência: {question.referencia}
        </p>
      )}
    </section>
  )
}

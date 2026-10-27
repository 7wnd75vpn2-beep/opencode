import { useId } from "react"
import { GROUP_INFO, type ConfidenceGroup } from "../domain/analysis"
import { formatDate, percent } from "./components"

type Tally = { total: number; correct: number; wrong: number; blank: number; rate: number }

export function ScoreRing(props: { tally: Tally; size?: number }) {
  const size = props.size ?? 168
  const stroke = 14
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const total = props.tally.total || 1
  const segments = [
    { key: "correct", value: props.tally.correct, className: "seg-correct" },
    { key: "wrong", value: props.tally.wrong, className: "seg-wrong" },
    { key: "blank", value: props.tally.blank, className: "seg-blank" },
  ]
  const offsets = segments.map((_, index) => segments.slice(0, index).reduce((sum, segment) => sum + segment.value, 0))
  return (
    <figure className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} className="ring-track" strokeWidth={stroke} fill="none" />
        {segments.map((segment, index) =>
          segment.value === 0 ? null : (
            <circle
              key={segment.key}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={stroke}
              className={`ring-seg ${segment.className}`}
              strokeDasharray={`${(segment.value / total) * circumference - 3} ${circumference}`}
              strokeDashoffset={-((offsets[index] ?? 0) / total) * circumference}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          ),
        )}
      </svg>
      <figcaption className="ring-center">
        <span className="ring-value">
          {props.tally.correct}
          <span className="ring-of">/{props.tally.total}</span>
        </span>
        <span className="ring-label">acertos</span>
      </figcaption>
    </figure>
  )
}

export function Legend(props: { items: { label: string; className: string; value?: string }[] }) {
  return (
    <ul className="legend">
      {props.items.map((item) => (
        <li key={item.label}>
          <span className={`swatch ${item.className}`} aria-hidden="true" />
          <span>{item.label}</span>
          {item.value !== undefined && <strong>{item.value}</strong>}
        </li>
      ))}
    </ul>
  )
}

export function StackedBar(props: { tally: Tally; label: string }) {
  const total = props.tally.total || 1
  return (
    <div
      className="stacked"
      role="img"
      aria-label={`${props.label}: ${props.tally.correct} acertos, ${props.tally.wrong} erros, ${props.tally.blank} em branco`}
    >
      <span className="stacked-part seg-correct" style={{ flexGrow: props.tally.correct / total }} />
      <span className="stacked-part seg-wrong" style={{ flexGrow: props.tally.wrong / total }} />
      <span className="stacked-part seg-blank" style={{ flexGrow: props.tally.blank / total }} />
    </div>
  )
}

export function DisciplineRows(props: { rows: (Tally & { disciplina: string; small: boolean })[] }) {
  return (
    <ul className="discipline-rows">
      {props.rows.map((row) => (
        <li key={row.disciplina} className="discipline-row">
          <div className="discipline-head">
            <span className="discipline-name">{row.disciplina}</span>
            <span className="discipline-num">
              {row.correct} de {row.total} <span className="muted">· {percent(row.rate)}</span>
            </span>
          </div>
          <StackedBar tally={row} label={row.disciplina} />
          {row.small && <span className="tag">amostra pequena</span>}
        </li>
      ))}
    </ul>
  )
}

const MATRIX: { group: ConfidenceGroup; tone: string }[] = [
  { group: "firme", tone: "tone-firm" },
  { group: "confirmar", tone: "tone-confirm" },
  { group: "prioritario", tone: "tone-priority" },
  { group: "reforcar", tone: "tone-reinforce" },
]

export function ConfidenceMatrix(props: { counts: Record<ConfidenceGroup, number> }) {
  return (
    <div className="matrix">
      <div className="matrix-axis matrix-axis-top" aria-hidden="true">
        <span>Com certeza</span>
        <span>Com dúvida ou chute</span>
      </div>
      <div className="matrix-axis matrix-axis-side" aria-hidden="true">
        <span>Acertou</span>
        <span>Errou</span>
      </div>
      <ul className="matrix-grid">
        {MATRIX.map((cell) => (
          <li key={cell.group} className={`matrix-cell ${cell.tone} ${props.counts[cell.group] === 0 ? "is-empty" : ""}`}>
            <span className="matrix-count">{props.counts[cell.group]}</span>
            <span className="matrix-title">{GROUP_INFO[cell.group].title}</span>
            <span className="matrix-plain">{GROUP_INFO[cell.group].plain}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

type Point = { id: string; at: number; fresh: Tally; repeated: Tally; all: Tally }

/** Evolução do aproveitamento, com inéditas e repetidas em linhas separadas. */
export function EvolutionChart(props: { points: Point[] }) {
  const titleId = useId()
  const width = 640
  const height = 220
  const pad = { left: 40, right: 16, top: 16, bottom: 28 }
  const innerW = width - pad.left - pad.right
  const innerH = height - pad.top - pad.bottom
  const x = (index: number) => pad.left + (props.points.length < 2 ? innerW / 2 : (index / (props.points.length - 1)) * innerW)
  const y = (rate: number) => pad.top + (1 - rate) * innerH
  const series = [
    { key: "fresh" as const, label: "Questões inéditas", className: "line-fresh" },
    { key: "repeated" as const, label: "Questões repetidas", className: "line-repeat" },
  ]
  return (
    <figure className="evolution">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby={titleId} preserveAspectRatio="xMidYMid meet">
        <title id={titleId}>Aproveitamento por sessão, separando questões inéditas e repetidas</title>
        {[0, 0.5, 1].map((tick) => (
          <g key={tick}>
            <line x1={pad.left} x2={width - pad.right} y1={y(tick)} y2={y(tick)} className="grid-line" />
            <text x={pad.left - 8} y={y(tick) + 4} className="axis-label" textAnchor="end">
              {tick * 100}%
            </text>
          </g>
        ))}
        {series.map((serie) => {
          const valid = props.points.flatMap((point, index) => (point[serie.key].total > 0 ? [{ index, rate: point[serie.key].rate }] : []))
          return (
            <g key={serie.key} className={serie.className}>
              {valid.length > 1 && (
                <polyline fill="none" points={valid.map((point) => `${x(point.index)},${y(point.rate)}`).join(" ")} className="line" />
              )}
              {valid.map((point) => (
                <circle key={point.index} cx={x(point.index)} cy={y(point.rate)} r={4.5} className="dot" />
              ))}
            </g>
          )
        })}
        {props.points.map((point, index) => (
          <text key={point.id} x={x(index)} y={height - 8} className="axis-label" textAnchor="middle">
            {index + 1}
          </text>
        ))}
      </svg>
      <Legend items={series.map((serie) => ({ label: serie.label, className: serie.className }))} />
      <table className="sr-only">
        <caption>Aproveitamento por sessão</caption>
        <thead>
          <tr>
            <th>Sessão</th>
            <th>Data</th>
            <th>Inéditas</th>
            <th>Repetidas</th>
          </tr>
        </thead>
        <tbody>
          {props.points.map((point, index) => (
            <tr key={point.id}>
              <td>{index + 1}</td>
              <td>{formatDate(point.at)}</td>
              <td>{point.fresh.total ? `${point.fresh.correct} de ${point.fresh.total}` : "—"}</td>
              <td>{point.repeated.total ? `${point.repeated.correct} de ${point.repeated.total}` : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

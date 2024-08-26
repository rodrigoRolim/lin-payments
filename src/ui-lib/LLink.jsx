export default function LLink({ text, href}) {
  return (
    <a href={href} className="l-link">
      {text}
    </a>
  )
}

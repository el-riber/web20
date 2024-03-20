import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  padding: "5%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: "2rem",
}
const paragraphStyles = {
  marginBottom: "1.5rem",
}
const listStyles = {
  marginBottom: "3rem",
  paddingLeft: 0,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Mona Lisa</title>
      <h1 style={headingStyles}>Mona Lisa by Leonardo da Vinci</h1>
      <StaticImage
        src="../images/801px-Da_Vinci's_Mona_Lisa_with_original_colors_approximation.jpg"
        
        alt="Mona Lisa"
        placeholder="blurred"
      />
      <p style={paragraphStyles}>
        The Mona Lisa, also known as La Gioconda, is a portrait painting by the Italian Renaissance artist Leonardo da Vinci. Housed in the Louvre Museum in Paris, this masterpiece is acclaimed for its detailed representation, the enigmatic expression of its subject, and its mastery of sfumato, a technique developed by da Vinci to create a soft blend of colors.
      </p>
      <h2>Background</h2>
      <p style={paragraphStyles}>
        Leonardo da Vinci began painting the Mona Lisa in 1503 or 1504 in Florence, Italy. While the true identity of the subject is still debated, it is commonly believed to be Lisa Gherardini, a Florentine merchant's wife. The painting was acquired by King Francis I of France and has been a part of France's royal collection since the 16th century.
      </p>
      <h2>Technique</h2>
      <p style={paragraphStyles}>
        The Mona Lisa is renowned for its use of sfumato, a technique that allows tones and colors to shade gradually into one another, producing softened outlines or hazy forms. This technique gives the Mona Lisa its characteristic dreamlike quality and the famously enigmatic expression that seems to change when viewed from different angles.
      </p>
      <h2>Legacy</h2>
      <p style={paragraphStyles}>
        The Mona Lisa is perhaps the most recognized piece of art in the world, visited by millions each year. It has inspired countless artists and has been analyzed and debated by art historians and enthusiasts alike. The painting's subtle details, such as the slight smile of the subject and the unadorned landscape that stretches behind her, continue to fascinate and inspire discussion and interpretation.
      </p>
      <h2>The Mystery</h2>
      <p style={paragraphStyles}>
        Part of the Mona Lisa's allure is the mystery surrounding the painting. From the identity of the woman depicted to speculation about da Vinci's intentions and the techniques he used, the Mona Lisa continues to be a source of intrigue. The painting was even stolen from the Louvre in 1911, an event that only added to its legend and fame.
      </p>
      <p style={paragraphStyles}>
        The Mona Lisa transcends its status as a portrait, embodying the Renaissance spirit of inquiry and the eternal fascination with beauty and mystery.
      </p>
    </main>
  )
}

export default IndexPage


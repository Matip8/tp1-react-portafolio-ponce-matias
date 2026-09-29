const columnas = [
  "010101", "10110", "001011", "110010",
  "10101", "011001", "100101", "00110",
  "110101", "010011", "101100", "011010",
  "100110", "001101", "110011", "010110"
]

function MatrixBackground() {
  return (
    <div className="matrix-background">
      {columnas.map((codigo, index) => (
        <span
          key={index}
          className="matrix-column"
          style={{
            left: `${index * 6.5}%`,
            animationDelay: `${(index % 5) * -1.2}s`,
            animationDuration: `${5 + (index % 4)}s`
          }}
        >
          {codigo}
        </span>
      ))}
    </div>
  )
}

export default MatrixBackground
import "dotenv/config";
import cors from 'cors';
import express from "express";

console.log("Olá, Turma!!");
console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.PYTHON_ROOT);

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.get("/", (req, res) => {
  res.send("Bem-vindo ao Express de Elynne");
});

app.get("/example", (req, res) => {
  res.send("Bem-vindo ao Express de: URL de example");
});

app.get("/random", (req, res) => {
  const numberRandom = Math.floor(Math.random() * (100-1) + 1);
  res.send({number: numberRandom})
});

app.get("/inspiration", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 17);
  const frases = [
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Acredite em si mesmo e todo o resto virá naturalmente.",
    "Não espere por oportunidades, crie-as.",
    "O impossível é apenas uma opinião.",
    "O futuro pertence àqueles que acreditam na beleza dos seus sonhos.",
    "Dificuldades preparam pessoas comuns para destinos extraordinários.",
    "O único limite para o seu sucesso é a sua determinação.",
    "Quem não arrisca, não petisca.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "O fracasso é apenas o caminho para o sucesso.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "Cada dia é uma nova chance para mudar a sua vida.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Se você pode sonhar, você pode realizar.",
    "A jornada de mil milhas começa com o primeiro passo.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Não espere por uma crise para descobrir o que é importante em sua vida."
  ]

  res.send({
    quote: frases[randomNumber]
  })
  
  
});

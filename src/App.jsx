import './App.css'
import Card from './components/Card/Card'

function App() {
  //Carregamento de dados direto via código
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    tag1: 'Status: Vivo',
    tag2: 'Espécie: Humana',
    tag3: 'Origem: Terra C-137'

  }

  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    tag1: 'Status: Vivo',
    tag2: 'Espécie: Humana',
    tag3: 'Origem: Terra C-137'
  }

  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    tag1: 'Status: Vivo',
    tag2: 'Espécie: Humana',
    tag3: 'Origem: Terra C-137'
  }

  const item4 = {
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    tag1: 'Status: Vivo',
    tag2: 'Espécie: Humana',
    tag3: 'Origem: Terra C-137'
  }

  const itens = [item1, item2, item3, item4]

//Carregamento de dados via API (backend)
async function carregarDadosApi(){
  //Declarar a URL da API
   const apiUrl = 'https://rickandmortyapi.com/api/character/'

  //preparar e Executar a Requisição
  const response = await fetch(apiUrl)

  //console.log(response)

  const body = await response.json()

  console.log(body)

  //Extrair a propriedade results do body
  // Essa propriedade contém a lista de itens
  const results = body.results;

  }

  // Chamando a função que carrega dados da API
  carregarDadosApi()


  return (
    <>
    <div className="cards">
    {itens.map((item, i) => <Card item={item} key={i} />)}
    </div>
    </>
  )
}

export default App

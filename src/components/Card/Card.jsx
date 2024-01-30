function Card() {
    return (
        <>
          <div className="card">
            <h2>Rick Sanchez</h2>

            <div className="tags">
            <p className="tag">Status: Vivo</p>
            <p className="tag">Espécie: Humana</p>
            <p className="tag">Origem: Terra C-137</p>
            </div>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
         </div>
        </>
       
      )
    
}

export default Card
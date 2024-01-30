function Card(props) {
  //console.log(props)

  const item = props.item

  //console.log(item)

    return (
        <>
          <div className="card">
            <h2>{item.name}</h2>

            <div className="tags">
               <p className="tag">Status: Vivo</p>
               <p className="tag">Espécie: Humana</p>
               <p className="tag">Origem: Terra C-137</p>
            </div>

            <img src={item.image}/>
         </div>
        </>
       
      )
    
}

export default Card
function Card(props) {
  //console.log(props)

  const item = props.item

  //console.log(item)

    return (
        <>
          <div className="card">
            <h2>{item.name}</h2>

            <div className="tags">
               <div className="tag">{item.tag1}</div>
               <div className="tag">{item.tag2}</div>
               <div className="tag">{item.tag3}</div>
            </div>

            <img src={item.image}/>
         </div>
        </>
       
      )
    
}

export default Card
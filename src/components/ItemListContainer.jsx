import './ItemListContainer.css'

// Se le importa el estilo desde ItemListContainer.css.
// ItemListContainer recibe una prop desde App para poder ser usada dentro de su return.
// Es importado para poder usarse en App.
const ItemListContainer = ({ title , list }) => {
  return (
    <div> 
    <p>{title}</p>
    {list.map((nameMovie,index)=>{ 
     const uniqueKey = nameMovie+index
     return(

          <p id={index} key={index} >{nameMovie} </p>
     )

      })}
       </div>
)

}

export default ItemListContainer;
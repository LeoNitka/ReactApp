export const ItemDetail = ({ id, title, image, description, price }) => {
    return (
      <div key={id} >
          <img src={image} alt={title} className='movieImage' />
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{price}</p>
      </div>
    )
  }
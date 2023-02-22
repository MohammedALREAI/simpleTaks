import Image from "next/image"

export const ProductItem = (props) => {
  return (
    <div className="itemCard">
     <Image
     src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
     alt="Picture of the author"
     width={500}
     height={500}
     layout="responsive"
     objectFit="cover"
     quality={100}
     />
     <div className="innerCard">
     <p className="price">{props.price}</p>
     <p className="oldPrice">{props.oldPrice}</p>
     <p className="title">{props.title}</p>

     </div>
    </div>
  )
}

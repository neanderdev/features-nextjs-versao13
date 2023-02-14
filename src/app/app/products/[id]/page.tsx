interface ProductsProps {
  params: {
    id: string
  }
}

export default function Product({ params: { id } }: ProductsProps) {
  return <h1>Product: {id}</h1>
}

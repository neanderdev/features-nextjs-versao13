interface ProductsProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }) {
  return {
    title: `Produto ${params.id}`,
  }
}

export default function Product({ params: { id } }: ProductsProps) {
  return <h1>Product: {id}</h1>
}

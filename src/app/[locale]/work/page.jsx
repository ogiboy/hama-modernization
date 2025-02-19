'use client'

import PageHeader from '@/app/components/PageHeader'
import Products from '@/app/components/Products'
import WorkButtons from '@/app/components/WorkButtons'

import { revalidatePath } from 'next/cache'
import { useState, useEffect } from 'react'

const Work = () => {
  const [selectedCategory, setCategory] = useState('Pişiriciler')
  const [products, setProducts] = useState({})

  const loadProducts = async () => {
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

      const url = `${baseUrl}/api/list-products`
      const res = await fetch(url)

      if (!res.ok) throw new Error('fetch error')

      const data = await res.json()

      return data
    } catch (error) {
      console.log(error)
    }
  }

  const handleBtnClick = async (category) => {
    setCategory(category)
    const data = await loadProducts()

    setProducts(data)
  }

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div className="border-2 border-red-500">
      <PageHeader heading="Ürünlerimiz" paragraph="" />

      <main className="my-[120px]">
        <WorkButtons
          handleBtnClick={handleBtnClick}
          selectedCategory={selectedCategory}
        />

        <Products products={products} selectedCategory={selectedCategory} />
      </main>
    </div>
  )
}
export default Work

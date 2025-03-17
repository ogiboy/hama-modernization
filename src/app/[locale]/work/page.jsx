'use client'

import PageHeader from '@/app/components/PageHeader'
import ProductDetails from '@/app/components/ProductDetails'
import Products from '@/app/components/Products'
import WorkButtons from '@/app/components/WorkButtons'

// import { revalidatePath } from 'next/cache'
import { useState, useEffect } from 'react'

const Work = () => {
  const [selectedCategory, setCategory] = useState('Pişiriciler')
  const [products, setProducts] = useState({})
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    item: {},
  })

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
    // console.log(products)
  }

  const normalizeString = (str) => {
    const turkishMap = {
      ı: 'i',
      İ: 'i',
      ç: 'c',
      Ç: 'c',
      ğ: 'g',
      Ğ: 'g',
      ş: 's',
      Ş: 's',
      ö: 'o',
      Ö: 'o',
      ü: 'u',
      Ü: 'u',
    }

    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[ıİçÇğĞşŞöÖüÜ]/g, (char) => turkishMap[char])
  }

  const dbFriendly = normalizeString(selectedCategory)

  useEffect(() => {
    setIsModalOpen(false)
    const fetchInitialData = async () => {
      const data = await loadProducts()
      setProducts(data)
      // console.log(data)
    }
    fetchInitialData()
  }, [])

  return (
    <>
      <div className="relative">
        <PageHeader heading="Ürünlerimiz" paragraph="" />

        <main className="my-[120px]">
          <WorkButtons
            handleBtnClick={handleBtnClick}
            selectedCategory={selectedCategory}
          />

          <Products
            products={products}
            dbFriendly={dbFriendly}
            setIsModalOpen={setIsModalOpen}
          />
        </main>
      </div>
      {isModalOpen.isOpen && (
        <article className="bg-[#5a5757]/80 absolute top-0 left-0 w-full h-full overflow-visible z-[999]">
          <ProductDetails
            item={isModalOpen.item}
            setIsModalOpen={setIsModalOpen}
          />
        </article>
      )}
    </>
  )
}
export default Work

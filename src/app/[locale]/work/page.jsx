'use client'

import PageHeader from '@/app/components/PageHeader'
import ProductDetails from '@/app/components/ProductDetails'
import Products from '@/app/components/Products'
import WorkButtons from '@/app/components/WorkButtons'

// import { revalidatePath } from 'next/cache'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

const Work = () => {
  const t = useTranslations('work')
  const [selectedCategory, setCategory] = useState('pisiriciler')
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
  }

  useEffect(() => {
    setIsModalOpen((p) => ({ ...p, isOpen: false }))
    const fetchInitialData = async () => {
      const data = await loadProducts()
      setProducts(data)
    }
    fetchInitialData()
  }, [])

  return (
    <>
      <div className="relative">
        <PageHeader heading={t('heading')} paragraph="" />

        <main className="custom-container my-[120px] flex flex-col justify-between items-center">
          <WorkButtons
            handleBtnClick={handleBtnClick}
            selectedCategory={selectedCategory}
            t={t}
          />

          <Products
            products={products}
            selectedCategory={selectedCategory}
            setIsModalOpen={setIsModalOpen}
          />
        </main>
      </div>
      {isModalOpen.isOpen && (
        <article
          onClick={() => setIsModalOpen((p) => ({ ...p, isOpen: false }))}
          className="bg-[#5a5757]/80 fixed top-0 left-0 w-full h-full overflow-visible z-[999] flex justify-center"
        >
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

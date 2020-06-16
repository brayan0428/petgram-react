import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Loader } from '../Loader'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-brayan-ex7ilvi6o.vercel.app/categories')
      .then(data => data.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    function scroll () {
      const fixedNew = window.scrollY > 200
      fixedNew !== fixed && setFixed(fixedNew)
    }
    document.addEventListener('scroll', scroll)
    return () => document.removeEventListener('scroll', scroll)
  }, [fixed])

  function renderList (fixed) {
    return (
      <List fixed={fixed}>
        {
          categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        }
      </List>
    )
  }

  if (loading) {
    return <Loader />
  }
  return (
    <>
      {renderList()}
      {fixed && renderList(true)}
    </>
  )
}

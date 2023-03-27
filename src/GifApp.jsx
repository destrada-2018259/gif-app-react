
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {
  const [categorias, setCategorias] = useState(['Pokemon', 'Spy x Family', 'Gotoubun no Hanayome', 'Bocchi the rock']);
  
  const onAddCategory = ( newCategoryAdded) =>{
    setCategorias([ newCategoryAdded, ...categorias])
  }
  return (
    <>
    {/* Titulo */}
      <h1>GifApp</h1>

      <AddCategory  newCategory = {(value) => onAddCategory(value)} />

      <ol>
        {categorias.map(categoria =>{
          return <li key={categoria}> {categoria} </li>
        } )} 
      </ol>
    {/* Input */}

    {/* Listado de Gifs */}
      {/* Gif item */}
    </>
  )
}
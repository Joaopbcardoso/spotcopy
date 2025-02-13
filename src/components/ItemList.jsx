import React from 'react'
import { SingleItem } from './SingleItem'
import { Link, useLocation} from 'react-router-dom'

export const ItemList = ({ title, items, itemsArray, path, idPath }) => {

    const { pathname } = useLocation();
    const isHome = pathname === "/"
    const finalItems = isHome ? items : Infinity;


    
    return (
        <>

            <div className='item-list'> 
                <div className='item-list__header'>
                    <h2>{title} Populares</h2>
                    {isHome ? (<Link className='item-list__link' to={path}>Mostrar tudo</Link>) : <></>}    
                </div>
                <div className='item-list__container'>
                    { itemsArray 
                    .filter((currentValue, index) => index < finalItems)
                    .map((curObj, index) => 
                    <SingleItem 
                    idPath = {idPath}
                    {...curObj}
                    key={`${title}-${index}`}
                    />)}
                </div>
            </div>
        </>
    )
}

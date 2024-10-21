import React from 'react'
import { useState } from 'react'

export const HeaderMenuItem = ({text,age,activePage,onSetActivePage}) => {


    const onClicked = () => {
        onSetActivePage(text)
    }

//    let clicked = false

    return (
        <li><a
            onClick={ onClicked }
          className={`headeranchor ${activePage === text ? 'active' : ''}`} href="#">{ text }</a></li>
      )    
}
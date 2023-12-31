import React from 'react'
import { Slot } from 'expo-router'
import MainProvider from '../../../../contexts/MainProvider'

const _layout = () => {
  return (
    <MainProvider langBtn={false}>
        <Slot />
    </MainProvider>
  )
}

export default _layout

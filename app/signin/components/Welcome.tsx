import React from 'react'
import { View } from 'native-base'
import Translator from '../../../components/hoc/Translator'
import { strings } from '../../../utils/strings'
import { getOrientation } from '../../../utils/utilityFunctions'
import { TextObject } from '../../../types'

const Welcome = ({text=strings.welcomeBack}:{text?:TextObject}) => {
  return (
    <View marginY={10}   alignSelf={getOrientation()==="ARABIC"?"center":"center"}>
      <Translator fontWeight={"black"} fontSize={32} text={text}></Translator>
    </View>
  )
}

export default Welcome

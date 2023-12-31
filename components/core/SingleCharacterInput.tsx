import React, { MutableRefObject } from "react";
import PopupComponent from "../animations/PopupComponent";
import { IInputProps, Input } from "native-base";

export interface SingleCharacterInputProps{
    rest:IInputProps,
    value:string,
    setValue:(val:string)=>void,
    
}
const SingleCharacterInput:React.FC<SingleCharacterInputProps> = (props) => {
    const {value,setValue,...rest} = props
  return (
      <Input
        value={props.value}
        borderColor={"muted.100"}
        bgColor={"muted.100"}
        _focus={{ bgColor: "white" }}
        onChangeText={props.setValue}
        {...props.rest}
        colorScheme={"black"}
        rounded={"md"}
        focusOutlineColor={"muted.900"}
      />
  );
};

export default SingleCharacterInput;

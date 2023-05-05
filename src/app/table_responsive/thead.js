import React from "react"
import { Thead as ChakraThead } from "@chakra-ui/react"

export const Thead = props => {
  const { children, ...rest } = props

  return (
    <ChakraThead {...rest} style={{border:"0px !important"}}>
      {React.isValidElement(children) &&
        React.cloneElement(children, { inHeader: true })}
    </ChakraThead>
  )
}

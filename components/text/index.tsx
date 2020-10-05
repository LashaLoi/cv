import styled from "styled-components"
import { display, verticalAlign } from "styled-system"

import { BoxProps } from "components/box"

import { textDecoration, textTransform, whiteSpace } from "theme/custom-system-types"

export type TextProps = {
  children?: React.ReactNode
  as?: any
  htmlFor?: string
  strikethrough?: boolean
  bold?: boolean
  italic?: boolean
  upperCase?: boolean
  dangerouslySetInnerHTML?: {
    __html: string
  }
} & BoxProps

export const Text = styled.p<TextProps>`
  ${display}
  ${textTransform}
  ${textDecoration}
  ${verticalAlign}
  ${whiteSpace}

  ${props => props.bold && "font-weight: bold"}
  ${props => props.italic && "font-style: italic"}
  ${props => (props.strikethrough ? "text-decoration: line-through;" : "")}
  ${props => (props.upperCase ? "text-transform: uppercase;" : "")}
`

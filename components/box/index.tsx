import styled from "styled-components";
import {
  SpaceProps,
  OverflowProps,
  TextAlignProps,
  WidthProps,
  HeightProps,
  MinHeightProps,
  MaxWidthProps,
  VerticalAlignProps,
  BordersProps,
  BorderTopProps,
  BorderWidthProps,
  ColorProps,
  DisplayProps,
  LeftProps,
  BottomProps,
  RightProps,
  TopProps,
  BoxShadowProps,
  PositionProps,
  AlignSelfProps,
  MinWidthProps,
  ZIndexProps,
  alignSelf,
  border,
  borderColor,
  borderStyle,
  borderTop,
  borderWidth,
  bottom,
  boxShadow,
  color,
  display,
  height,
  left,
  maxWidth,
  minHeight,
  minWidth,
  order,
  overflow,
  position,
  right,
  size,
  space,
  textAlign,
  verticalAlign,
  width,
  zIndex,
  top,
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps
} from "styled-system";

type BoxProps = SpaceProps &
  OverflowProps &
  TextAlignProps &
  WidthProps &
  HeightProps &
  MinHeightProps &
  MaxWidthProps &
  VerticalAlignProps &
  BordersProps &
  BorderTopProps &
  BorderWidthProps &
  ColorProps &
  DisplayProps &
  LeftProps &
  BottomProps &
  RightProps &
  TopProps &
  BoxShadowProps &
  PositionProps &
  AlignSelfProps &
  MinWidthProps &
  ZIndexProps;

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${space}
  ${position}
  ${overflow}
  ${size}
  ${height}
  ${minHeight}
  ${left}
  ${right}
  ${top}
  ${bottom}
  ${textAlign}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${verticalAlign}
  ${border}
  ${borderTop}
  ${borderStyle}
  ${borderWidth}
  ${borderColor}
  ${color}
  ${display}
  ${boxShadow}
  ${alignSelf}
  ${zIndex}
  ${order}
`;

type FlexContainerProps = BoxProps &
  AlignItemsProps &
  FlexDirectionProps &
  JustifyContentProps &
  FlexWrapProps &
  AlignSelfProps;

export const Flex = styled(Box)<FlexContainerProps>`
  display: flex;
  ${justifyContent}
  ${alignItems}
  ${flexDirection}
  ${flexWrap}
  ${alignSelf}
`;

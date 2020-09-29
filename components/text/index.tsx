import styled from "styled-components";
import { BoxProps } from "components/box";
import {
  FontConfigurations,
  textDecoration,
  textTransform,
  typography,
  TypographyProps,
  whiteSpace
} from "theme";
import { display, verticalAlign } from "styled-system";

type TextProps = {
  children?: React.ReactNode;
  as?: any;
  htmlFor?: string;
  strikethrough?: boolean;
  bold?: boolean;
  italic?: boolean;
  upperCase?: boolean;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
} & BoxProps &
  TypographyProps;

export const Text = styled.p<TextProps>`
  ${typography}
  ${display}
  ${textTransform}
  ${textDecoration}
  ${verticalAlign}
  ${whiteSpace}

  ${props => props.bold && "font-weight: bold"}
  ${props => props.italic && "font-style: italic"}
  ${props => (props.strikethrough ? "text-decoration: line-through;" : "")}
  ${props => (props.upperCase ? "text-transform: uppercase;" : "")}
`;

export const Paragraph: React.FunctionComponent<TextProps> = ({
  children,
  ...props
}) => (
  <Text {...FontConfigurations.p} {...props}>
    {children}
  </Text>
);

export const ParagraphLarge: React.FunctionComponent<TextProps> = ({
  children,
  ...props
}) => (
  <Text {...FontConfigurations.pLg} {...props}>
    {children}
  </Text>
);

export const ParagraphSmall: React.FunctionComponent<TextProps> = ({
  children,
  ...props
}) => (
  <Text {...FontConfigurations.pSm} {...props}>
    {children}
  </Text>
);

export const Eyebrow: React.FunctionComponent<TextProps> = ({
  children,
  as = "label",
  ...props
}) => (
  <Text as={as} {...FontConfigurations.eyebrow} {...props}>
    {children}
  </Text>
);

export const EyebrowSmall: React.FunctionComponent<TextProps> = ({
  children,
  as = "label",
  ...props
}) => (
  <Text as={as} {...FontConfigurations.eyebrowSm} {...props}>
    {children}
  </Text>
);

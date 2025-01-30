import React, { FC } from 'react';
import { Platform, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import Color  from '../../core-ui/color';

export enum TextType {
  Legal = 'LEGAL',
  Button = 'BUTTON',
  BodyXs = 'BODY_XS',
  BodySm = 'BODY_SM',
  Body = 'BODY',
  BodyLg = 'BODY_LG',
  TitleXs = 'TITLE_XS',
  TitleSm = 'TITLE_SM',
  Title = 'TITLE',
  TitleLg = 'TITLE_LG',
  TitleXl = 'TITLE_XL',
}

const iosStyles: Record<TextType, TextStyle> = {
  [TextType.Legal]: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
  },
  [TextType.BodyXs]: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  [TextType.BodySm]: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
  },
  [TextType.Body]: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  [TextType.BodyLg]: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
  },
  [TextType.Button]: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  [TextType.TitleXs]: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  [TextType.TitleSm]: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  [TextType.Title]: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
  },
  [TextType.TitleLg]: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 30,
  },
  [TextType.TitleXl]: {
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 38,
  },
};

const androidStyles: Record<TextType, TextStyle> = {
  [TextType.Legal]: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
  },
  [TextType.BodyXs]: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  [TextType.BodySm]: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  [TextType.Body]: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  [TextType.BodyLg]: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
  },
  [TextType.Button]: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  [TextType.TitleXs]: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  [TextType.TitleSm]: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  [TextType.Title]: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
  },
  [TextType.TitleLg]: {
    fontFamily: 'ChronicleDisplay-Semi',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 30,
  },
  [TextType.TitleXl]: {
    fontFamily: 'ChronicleDisplay-Semi',
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 38,
  },
};

const styles = StyleSheet.create({
  ...Platform.select<Record<TextType, TextStyle>>({
    ios: iosStyles,
    android: androidStyles,
    default: iosStyles,
  }),
  defaultStyle: {
    color: Color.Black,
  },
  bold: {
    fontWeight: '700',
  },
  italicize: {
    fontStyle: 'italic',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  system: {
    fontFamily: 'System',
  },
});

export const getNWTextStyle = (type: TextType): TextStyle => {
  if (typeof type !== 'string') {
    throw new Error('TextType must be a string');
  }
  return styles[type];
};

export interface NWTextProps extends TextProps {
  type: TextType;
  color?: Color;
  bold?: boolean;
  italicize?: boolean;
  strikethrough?: boolean;
  // Primarily used as an override
  chronicle?: boolean;
}

const NWText: FC<NWTextProps> = ({
  type,
  style,
  color,
  bold = false,
  italicize = false,
  strikethrough = false,
  ...text
}) => (
  <Text
    style={[
      styles.defaultStyle,
      style,
      type && getNWTextStyle(type),
      color && {
        color,
      },
      bold && styles.bold,
      italicize && styles.italicize,
      strikethrough && styles.strikethrough,
      styles.system,
    ]}
    {...text}
  />
);

export default NWText;

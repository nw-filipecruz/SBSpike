import React from 'react';
import { Meta, StoryObj} from '@storybook/react';
import NWText, {TextType} from './NWText';
import Color from '../../core-ui/color';

const meta: Meta<typeof NWText> = {
  title: 'Component/NWText',
  component: NWText,
};

export default meta;

type Story = StoryObj<typeof NWText>;

export const BoldText: Story = {
    name: 'Bold Text',
    render: () => (
        <NWText type={TextType.Body} bold>
            Bold Text Example
        </NWText>
    ),
};

export const ItalicText: Story = {
    name: 'Italic Text',
    render: () => (
        <NWText type={TextType.Body} italicize>
            Italic Text Example
        </NWText>
    ),
};

export const StrikethroughText: Story = {
    name: 'Strikethrough Text',
    render: () => (
        <NWText type={TextType.Body} strikethrough>
            Strikethrough Text Example
        </NWText>
    ),
};
export const CustomColorText: Story = {
    name: 'Custom Color Text',
    render: () => (
        <NWText type={TextType.Body} color={Color.Blue200}>
            Custom Color Text Example
        </NWText>
    ),
};
export const DifferentTypes = () => (
  <>
    <NWText type={TextType.TitleXs}>Title XS</NWText>
    <NWText type={TextType.TitleSm}>Title SM</NWText>
    <NWText type={TextType.Title}>Title</NWText>
    <NWText type={TextType.TitleLg}>Title LG</NWText>
    <NWText type={TextType.TitleXl}>Title XL</NWText>
  </>
);

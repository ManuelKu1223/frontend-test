import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LayerCard } from '../components/LayerCard/layerCard';

export default {
  title: 'Test/LayerCard',
  component: LayerCard,
} as ComponentMeta<typeof LayerCard>;

const Template: ComponentStory<typeof LayerCard> = (args) => <LayerCard {...args} />;
export const LayerCardDefault = Template.bind({});
LayerCardDefault.args = {
  label: 'Test label',
}

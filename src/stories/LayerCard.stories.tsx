import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LayerCard } from '../components/LayerCard/layerCard';
import LayerCardDocPage from './LayerCard.mdx';

export default {
  title: 'Test/LayerCard',
  component: LayerCard,
  parameters: {
    docs: {
      page: LayerCardDocPage,
    },
  },
} as ComponentMeta<typeof LayerCard>;

const Template: ComponentStory<typeof LayerCard> = (args) => <LayerCard {...args} />;
export const LayerCardDefault = Template.bind({});
LayerCardDefault.args = {
  label: 'Flood zone 3',
}

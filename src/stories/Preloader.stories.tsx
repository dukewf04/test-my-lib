import type { Meta, StoryObj } from '@storybook/react';
import { Preloader } from '../components/Preloader';

const meta: Meta<typeof Preloader> = {
  title: 'Components/Preloader',
  component: Preloader,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Preloader>;

export const Default: Story = {
  name: 'Прелоадер',
};

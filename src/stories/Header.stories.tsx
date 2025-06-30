import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../templates/Header';

const meta: Meta<typeof Header> = {
  title: 'Templates/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: 'Шапка сайта',
};

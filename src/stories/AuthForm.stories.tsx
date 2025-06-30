import type { Meta, StoryObj } from '@storybook/react';
import { AuthForm } from '../templates/AuthForm';

const meta: Meta<typeof AuthForm> = {
  title: 'Templates/AuthForm',
  component: AuthForm,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Default: Story = {
  name: 'Форма авторизации',
};

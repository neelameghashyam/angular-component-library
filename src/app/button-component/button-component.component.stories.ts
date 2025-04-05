import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button-component.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }, // logs clicks in Storybook actions panel
    backgroundColor: { control: 'color' }, // enables color picker
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    primary: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    primary: true,
    label: 'Large Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    primary: true,
    label: 'Small Button',
    size: 'small',
  },
};

export const WithCustomBackground: Story = {
  args: {
    label: 'Custom BG',
    backgroundColor: '#14b8a6', // Tailwind teal-500
    size: 'medium',
    primary: false,
  },
};

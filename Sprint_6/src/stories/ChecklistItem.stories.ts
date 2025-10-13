import type { Meta, StoryObj } from '@storybook/sveltekit';
import ChecklistItem from './ChecklistItem.story.svelte';

const meta = {
  title: 'Components/ChecklistItem',
  component: ChecklistItem,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'number' },
    label: { control: 'text' },
    done: { control: 'boolean' }
  }
} satisfies Meta<typeof ChecklistItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    label: 'Sample checklist item',
    done: false
  }
};

export const Checked: Story = {
  args: {
    id: 2,
    label: 'Completed item',
    done: true
  }
};

export const Unchecked: Story = {
  args: {
    id: 3,
    label: 'Incomplete item',
    done: false
  }
};
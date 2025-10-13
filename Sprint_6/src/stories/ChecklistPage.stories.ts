import type { Meta, StoryObj } from '@storybook/svelte';
import ChecklistPage from './ChecklistPage.story.svelte';

const meta = {
  title: 'Pages/ChecklistPage',
  component: ChecklistPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ChecklistPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing the checklist
export const Default: Story = {};
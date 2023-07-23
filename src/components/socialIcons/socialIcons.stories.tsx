import type { Meta, StoryObj } from '@storybook/react';

import { SocialIcons } from './socialIcons';

const meta: Meta<typeof SocialIcons> = {
    component: SocialIcons,
};

export default meta;
type Story = StoryObj<typeof SocialIcons>;

export const Primary: Story = {
    render: () => <SocialIcons />,
};
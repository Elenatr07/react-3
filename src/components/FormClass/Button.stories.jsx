import React from 'react';

import { Button } from './Button';

export default {
    title: 'MyApp/Button',
    component: Button,
};


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

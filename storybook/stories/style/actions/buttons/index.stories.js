const ButtonComponent = (args) => {
    return <button className={args.classList}>Button</button>
}

export default {
    title: "style/actions/buttons",
    component: ButtonComponent,
    argTypes: {},
    parameters: { controls: { sort: "requiredFirst" } },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
    classList: "primary-button"
};

export const Primary = Template.bind({});

Primary.args = {
    classList: "primary-button"
};

export const Secondary = Template.bind({});

Secondary.args = {
    classList: "secondary-button"
};

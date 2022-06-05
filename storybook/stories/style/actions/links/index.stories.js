const LinkComponent = (args) => {
    return <a href="/" className={args.classList}>Button</a>
}

export default {
    title: "style/actions/links",
    component: LinkComponent,
    argTypes: {},
    parameters: { controls: { sort: "requiredFirst" } },
};

const Template = (args) => <LinkComponent {...args} />;

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

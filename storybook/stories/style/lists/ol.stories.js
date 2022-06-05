const ListComponent = (_args) => {
    return <ol>
        <li>List Item</li>
        <li>List Item</li>
    </ol>
}

export default {
    title: "style/lists/ol",
    component: ListComponent,
    argTypes: {},
    parameters: { controls: { sort: "requiredFirst" } },
};

const Template = (args) => <ListComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
};

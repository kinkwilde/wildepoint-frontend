const ListComponent = (_args) => {
    return <ul>
        <li>List Item</li>
        <li>List Item</li>
    </ul>
}

export default {
    title: "style/lists/ul",
    component: ListComponent,
    argTypes: {},
    parameters: { controls: { sort: "requiredFirst" } },
};

const Template = (args) => <ListComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
};

import { TabController } from "../components/TabController";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Example/TabController',
    component: TabController,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
};

const Template: ComponentStory<typeof TabController> = (args) => <TabController {...args} />;

export const Dois = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dois.args = {
  props: [{
    statemet:'ola',
    btn_text: 'bt1'
  },
  {
    statemet:'ola 2',
    btn_text: 'bt2'
  },]
};
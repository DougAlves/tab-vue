import TabController from'../components/TabController';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'TabController',
  component: TabController,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { TabController },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<TabController v-bind="args" />',
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { 
  props: [{
      statement: 'Texto 1',
      btn_text: 'Button',
    },
    {
      statement: 'Texto 2',
      btn_text: 'outro',
    }
  ]
};
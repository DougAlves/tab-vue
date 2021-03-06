import TabController from'../components/TabController';
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'TabController',
  component: TabController,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => ({
  components: { TabController },
  setup() {
    //π The args will now be passed down to the template
    return { args };
  },
  template: '<TabController v-bind="args" />',
});


//π Each story then reuses that template
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
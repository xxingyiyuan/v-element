
import PureCollapse from '@/components/Collapse/PureCollapse.vue'

export default {

  argTypes: {
    accordion: {
      control: 'boolean'
    }
  },
  render: (args) => ({
    components: { PureCollapse },
    setup() {
      return { args }
    },
    template: `<PureCollapse v-bind="args"></PureCollapse>`,
  }),
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const PureCollapseDemo = {
  args: {
    collapseData: [{
      title: 'title A',
      content: 'content A',
      name: 'A',
    }, {
      title: 'title B',
      content: 'content B',
      name: 'B',
    }, {
      title: 'title C',
      content: 'content C',
      name: 'C',
      disabled: true
    }]
  }
};
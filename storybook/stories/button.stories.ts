import Button from '@/components/Button/Button.vue'

export default {
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    }
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const ButtonDemo = {

};
export const ButtonPrimary = {
  args: {
    type: 'primary'
  }
};
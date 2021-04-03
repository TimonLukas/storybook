import SlotProps from './SlotProps.vue';

export default {
  title: 'Example/SlotProps',
  component: SlotProps,
  argTypes: {
    default: { control: 'text' },
    slotDefault: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { SlotProps },
  setup() {
    return { args };
  },
  template: '<slot-props v-bind="args">{{ args.slotDefault }}</slot-props>',
});

export const Default = Template.bind({});
Default.args = {
  default: 'prop arg',
  slotDefault: 'slot arg',
};

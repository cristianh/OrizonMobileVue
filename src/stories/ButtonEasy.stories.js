import BotonEasy from "./ButtonEasy.vue"

export default {
    title: 'ButtonPrimary',
    component: BotonEasy
};

const Template = (args) => ({
    components: { BotonEasy },
    setup() {
        return { args };
      },
    template: '<boton-easy v-bind="args"/>'
});

export const FirstStory = Template.bind({});

FirstStory.args = {
    label: 'Botton4'
};

import HeroBanner from '../components/Hero'

export default {
    title:'HeroBanner/Hero',
    components: HeroBanner,
    argTypes: {
        ImagenHero: {
          control: { type: 'file' },
          description:'Imagen de fondo del banner',
          defaultValue:'https://via.placeholder.com/150'
        },
        ColorBoton:{ 
            control:{ type:'color' },
            defaultValue:'#91aa9d'
        },
        AlineacionTexto: {
            control: { type: "select", options: ["center", "left", "right"] },
            defaultValue:'left'
        },
        onClick: {}
    }, 
    parameters: {
        backgrounds: {
          values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
          ],
        },
      }
};

const Template = (args) => ({
    components: { HeroBanner },
    setup() {
        return { 
            args 
        };
      },
    template: '<hero-banner  v-bind="args"/>'
});

export const Textos = Template.bind({});
export const TextosSinBoton = Template.bind({});
export const ImagenFondo = Template.bind({});
export const ImagenFondoPorDefecto = Template.bind({});


Textos.args = { TextoTitulo: 'Hola mundo', TextoSubTitulo: 'Hola mundo',TextoBoton:'Mas informacion',ColorBoton: '#91aa9d',MostrarBoton:true};
TextosSinBoton.args = { TextoTitulo: 'Hola mundo', TextoSubTitulo: 'Hola mundo',TextoBoton:'Mas informacion',MostrarBoton:false};
ImagenFondoPorDefecto.arg = {MostrarBoton:false};
ImagenFondo.args = {TextoTitulo: 'Hola mundo', TextoSubTitulo: 'Hola mundo',TextoBoton:'Mas informacion',MostrarBoton:false,ImagenHero: 'https://cdn.pixabay.com/photo/2021/06/04/15/51/coast-6310250_960_720.jpg'};

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import Productos from "./components/Productos.vue";
import Celulares from "./components/Celulares.vue";

const app = createApp(App);
app.use(router);
app.component("Footer", Footer);
app.component("Nav", Nav);
app.component("Hero", Hero);
app.component("Productos", Productos);
app.component("Celulares", Celulares);
app.mount("#app");

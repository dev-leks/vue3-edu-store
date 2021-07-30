import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductsList from "./components/ProductsList";

const app = createApp({});

app.component("products-list", ProductsList);

app.mount("#app");

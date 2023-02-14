import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router/router"
import "@/assets/main.css"
import components from "@/components/UI"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})
library.add(faMagnifyingGlass)

app
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount("#app")

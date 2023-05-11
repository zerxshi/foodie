import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router/router"
import "@/assets/main.css"
import components from "@/ts/exports"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faMagnifyingGlass,
  faEnvelope,
  faAngleDown,
  faChevronDown,
  faBars,
  faXmark,
  faBowlFood,
  faBowlRice,
  faTemperatureLow,
  faStopwatch,
  faLocationDot,
  faMobileScreenButton,
  faArrowsRotate,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faSquareInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faHeart } from "@fortawesome/free-regular-svg-icons"
import VueAwesomePaginate from "vue-awesome-paginate"
import "vue-awesome-paginate/dist/style.css"

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

library.add(
  faMagnifyingGlass,
  faSquareInstagram,
  faTwitter,
  faFacebookF,
  faPinterest,
  faYoutube,
  faEnvelope,
  faAngleDown,
  faChevronDown,
  faBars,
  faXmark,
  faStopwatch,
  faBowlFood,
  faBowlRice,
  faTemperatureLow,
  faLocationDot,
  faMobileScreenButton,
  faEnvelopeOpen,
  faArrowsRotate,
  faHeart,
  faHeart,
  solidHeart,
  faInstagram
)

app
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .use(VueAwesomePaginate)
  .mount("#app")

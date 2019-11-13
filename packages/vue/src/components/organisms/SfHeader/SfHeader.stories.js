import { storiesOf } from "@storybook/vue";
import { withKnobs, text, array } from "@storybook/addon-knobs";

import SfHeader from "./SfHeader.vue";

storiesOf("Organisms/Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      navigations: {
        default: array("(prop) navigations", [
          {
            text: "WOMEN",
            href: ""
          },
          {
            text: "MEN",
            href: ""
          }
        ])
      },
      cartIcon: {
        default: text("(prop) cartIcon", "empty_cart")
      },
      wishlistIcon: {
        default: text("(prop) wishlistIcon", "heart")
      },
      accountIcon: {
        default: text("(prop) accountIcon", "profile")
      }
    },
    template: `<SfHeader 
      :logo="logo"
      :navigations="navigations" 
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon" />`
  }))
  .add("[slot] mobile", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      }
    },
    template: `<SfHeader 
      :logo="logo" />`
  }));

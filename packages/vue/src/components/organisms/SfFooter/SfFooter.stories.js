import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfFooter from "./SfFooter.vue";
import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

storiesOf("Organisms|Footer", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfFooter, SfList, SfMenuItem },
    data() {
      return {
        aboutUs: ["Who we are", "Quality in the details", "Customer Reviews"],
        departments: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        help: ["Customer service", "Size guide", "Contact us"],
        paymentsDelivery: ["Purchase terms", "Guarantee"],
        isMobile: false,
        desktopMin: 1024
      };
    },
    computed: {
      style() {
        return this.isMobile ? { padding: "1.25rem 2.5rem" } : { padding: "6px 0" };
      }
    },
    template: `<div style="margin: -20px;">
      <SfFooter style="max-width: 64rem; margin-left: auto; margin-right: auto" :column="4">  
        <SfFooterColumn title="About us">
          <SfList>
            <SfListItem v-for="item in aboutUs" :key="item">
              <SfMenuItem :style="style" :label="item"/>
            </SfListItem>
          </SfList>
        </SfFooterColumn>
        <SfFooterColumn title="Departments">
          <SfList>
            <SfListItem v-for="item in departments" :key="item">
              <SfMenuItem :style="style" :label="item"/>
            </SfListItem>
          </SfList>
        </SfFooterColumn>
        <SfFooterColumn title="Help">
          <SfList>
            <SfListItem v-for="item in help" :key="item">
              <SfMenuItem :style="style" :label="item"/>
            </SfListItem>
          </SfList>
        </SfFooterColumn>
        <SfFooterColumn title="Payment & delivery">
          <SfList>
            <SfListItem v-for="item in paymentsDelivery" :key="item">
              <SfMenuItem :style="style" :label="item"/>
            </SfListItem>
          </SfList>
        </SfFooterColumn>
        <SfFooterColumn title="Social" style="margin-left: auto">
          <div :style="style">
            Social
          </div>
        </SfFooterColumn>
      </SfFooter>
    </div>`,
    methods: {
      isMobileHandler(e) {
        this.isMobile = e.matches;
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        this.desktopMin;
      window
        .matchMedia("(max-width: 1024px)")
        .addListener(this.isMobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.isMobileHandler);
    }
  }));
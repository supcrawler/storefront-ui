// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfSection from "./SfSection.vue";

const StoriesPlaceholder = {
  template: `<div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
    [#default slot content]
  </div>`
};

storiesOf("Molecules|Section", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    components: { SfSection, StoriesPlaceholder },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-section--no-underline": "sf-section--no-underline"
          },
          "sf-section--no-underline",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      titleHeading: {
        default: text("title-heading", "Share your look", "Props")
      },
      subtitleHeading: {
        default: text("subtitle-heading", "#YOURLOOK", "Props")
      },
      levelHeading: {
        default: number("level-heading", 2, {}, "Props")
      }
    },
    template: `<SfSection
      :title-heading="titleHeading"
      :subtitle-heading="subtitleHeading"
      :level-heading="levelHeading">
      <StoriesPlaceholder />
    </SfSection>`
  }))
  .add("[slot] heading", () => ({
    components: { SfSection, StoriesPlaceholder },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-section--no-underline": "sf-section--no-underline"
          },
          "sf-section--no-underline",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      titleHeading: {
        default: text("title-heading", "Share your look", "Props")
      },
      subtitleHeading: {
        default: text("subtitle-heading", "#YOURLOOK", "Props")
      },
      levelHeading: {
        default: number("level-heading", 2, {}, "Props")
      }
    },
    template: `<SfSection
      :title-heading="titleHeading"
      :subtitle-heading="subtitleHeading"
      :level-heading="levelHeading">
      <template #heading="{levelHeading, titleHeading, subtitleHeading}">
        CUSTOM HEADING
      </template>
      <StoriesPlaceholder/>
    </SfSection>`
  }));

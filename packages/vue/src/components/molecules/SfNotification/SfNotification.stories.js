// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfNotification from "./SfNotification.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [["$component-size", "1.438rem", "size of checkmark"]]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["input", "event emited when option is selected"]]
};

// storiesOf("Molecules|Notification", module)
//   .addDecorator(withKnobs)
//   .add(
//     "[slot] default",
//     () => ({
//       props: {
//         editableProp: {
//           default: text("(prop) propname")
//         },
//         customClass: {
//           default: select(
//             "CSS Modifier",
//             ["null", "sf-notification--modifier"],
//             "null",
//             "CSS-Modifiers"
//           )
//         }
//       },
//       components: { SfNotification },
//       template: `<SfNotification
//         :class="customClass"
//       >
//       </SfNotification>`
//     }),
//     {
//       info: {
//         summary: `<p>Component description.</p>
//        <h2>Usage</h2>
//        <pre><code>import { SfNotification } from "@storefront-ui/vue"</code></pre>
//        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
//        ${generateStorybookTable(eventsTableConfig, "Events")}`
//       }
//     }
//   );

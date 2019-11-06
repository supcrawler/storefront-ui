import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfModal",
  props: {
    /**
     * Cross closing modal button
     */
    cross: {
      type: Boolean,
      default: true
    },
    /**
     * Visibility of the modal
     */
    visible: {
      type: Boolean,
      default: () => false
    },
    /**
     * Whether to show the overlay
     */
    overlay: {
      type: Boolean,
      default: true
    },
    /**
     * If true clicking outside will not dismiss the modal
     */
    persistent: {
      type: Boolean,
      default: false
    },
    /**
     * overlay transition effect
     */
    transitionOverlay: {
      type: String,
      default: "fade"
    },
    /**
     * overlay transition effect
     */
    transitionModal: {
      type: String,
      default: "fade"
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    checkPersistence() {
      if (!this.persistent) {
        this.close();
      }
    }
  },
  created() {
    const escapeHandler = e => {
      if (e.key === "Escape" && this.visible) {
        this.close();
      }
    };
    document.addEventListener("keydown", escapeHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
    });
  },
  components: {
    SfOverlay,
    SfIcon
  }
};

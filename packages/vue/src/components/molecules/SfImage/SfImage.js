import lozad from "lozad";

export default {
  name: "SfImage",

  props: {
    /**
     * Image url or pictures object (`{ small: { url, alt }, normal: { url, alt } }`)
     */
    src: [String, Object],
    /**
     * Alt attribute value
     */
    alt: {
      type: String,
      default: ""
    },
    /**
     * Overlay transition type
     */
    transition: {
      type: String,
      default: "fade"
    },
    /**
     * Lazyload
     */
    lazy: {
      type: Boolean,
      default: true
    },
    /**
     * Src image placeholder
     */
    placeholder: {
      type: String,
      default: "/assets/placeholder.png"
    },
    /**
     * Screen width breakpoint for picture tag media query
     */
    pictureBreakpoint: {
      type: Number,
      default: 576
    }
  },

  data() {
    return {
      loaded: false,
      overlay: false,
      maxWidth: "unset"
    };
  },

  computed: {
    hasOverlay() {
      return this.$slots.hasOwnProperty("default") && this.overlay;
    }
  },

  methods: {
    hoverHandler(state) {
      this.overlay = state;
    }
  },

  mounted() {
    if (this.lazy !== false) {
      const vm = this;
      const observer = lozad(".sf-image-lozad", {
        loaded: function() {
          vm.loaded = true;
        }
      });
      observer.observe();
    } else {
      this.loaded = true;
    }
  }
};

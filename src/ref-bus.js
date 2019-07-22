import Vue from 'vue';
let bpLoadingEl;
export const refBus = new Vue({
  data() {
    return {
      pLoadingEl: undefined
    }
  },
  methods: {
    setPLoading(pLoadingEl) {
      bpLoadingEl = pLoadingEl;
      console.log(bpLoadingEl);
    },
    pLoading(isOn = true) {

      
      
      bpLoadingEl.style.display = isOn ? 'block' : 'none';
    }

  }
});
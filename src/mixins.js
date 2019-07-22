export const appMethod = {
  data() {
    return {
      isOn: true
    }
  },
  methods: {
    pLoading(isOn = true) {
      this.isOn = isOn;
    }
  }
}
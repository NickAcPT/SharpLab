import Vue from 'vue';

export default Vue.component('app-select', {
    props: {
        value: null as unknown as () => unknown
    },

    data() {
        return { innerValue: this.value };
    },

    watch: {
        value() {
            this.innerValue = this.value;
        },

        innerValue() {
            this.$emit('input', this.innerValue);
        }
    },

    inheritAttrs: false,

    template: `<div class="select-wrapper">
      <select v-model="innerValue" v-bind="$attrs">
        <slot></slot>
      </select>
    </div>`.replace(/[\r\n]+\s*/g, '').replace(/\s{2,}/g, ' ')
});
<template>
  <div>
    <b-modal class="row" :id="modalId" centered :title="modalTitle">
      <slot></slot>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['modalTitle','modalId'],
  data () {
    return {
    }
  }
}
</script>

<style>

</style>

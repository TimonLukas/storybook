<template>
  <div class="slot-arg">
    <div class="slot">Slot: <slot /></div>
    <div class="arg">Arg: {{ default }}</div>
  </div>
</template>

<script>
export default {
  props: {
    default: {
      type: String,
      required: true
    }
  }
}
</script>

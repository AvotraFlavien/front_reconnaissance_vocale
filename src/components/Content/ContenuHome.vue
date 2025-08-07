<template>
  <div class="main-panel contenu">
    <div class="content-wrapper">
      <p>lorem80000000</p>
      <p v-if="employe">{{ employe }}</p>
      <ConnexionViewVue></ConnexionViewVue>
    </div>
  </div>
</template>
<script>
import ConnexionViewVue from "@/views/ConnexionView.vue";
export default {
  components: { ConnexionViewVue },
  props: {
    employe:{
      type: Object
    }
  },
};
</script>
<style scoped>
.contenu {
  position: absolute;
  top: 60px;
  left: 272px;
}
</style>

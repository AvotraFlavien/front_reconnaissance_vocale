<template>
  <div class="card mb-3 cardo" style="width: 450px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="photo"
          alt="Photos"
          class="img-fluid rounded-start images_employe"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ titre }}</h5>
          <p class="card-text">{{ contenu }}</p>
          <footer>
            <p class="card-text">
              <small class="text-muted">{{ footer }}</small>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photo: { type: String, default: null },
    titre: { type: String, default: null },
    contenu: { type: String, default: null },
    footer: { type: String, default: null },
  },
};
</script>
<style scoped>
.cardo {
  margin-right: 30px;
  min-height: 100px;
  max-height: 150px;
}

.images_employe {
  padding-top: 3px;
  padding-left: 4px;
}

.card-body {
  padding-top: 15px;
}

.cardo:hover {
  /* background-color: rgb(241, 245, 241); */
  cursor: pointer;
  transform: scale(1, 1.04);
}
</style>

<template>
  <!-- <div>fdsfdf</div> -->
  <Navbar :employe="getEmploye"></Navbar>
  <NavVerticalContent></NavVerticalContent>
  <!-- <ContenuHome :employe="getEmploye"></ContenuHome> -->
  <div class="main-panel contenu">
    <div class="content-wrapper">
      <p class="boutton-ajout">
        <button class="btn btn-block btn-lg btn-gradient-primary mb-4">
          + Nouveau employé
        </button>
      </p>

      <p>lorem80000000</p>
      <!-- titre : {type: String, default: null},
    contenu : {type: String, default: null},
    footer : {type: String, default: null} -->
      <p v-if="getEmploye">{{ getEmploye }}</p>
      <div class="flexs-containers">
        <card
          v-for="donnees in donnees"
          :key="donnees.id"
          :photo="donnees.photo"
          :titre="donnees.nom + ' ' + donnees.prenom"
          :contenu="donnees.poste"
          :footer="'Téléphone: 0' + donnees.telephone"
        ></card>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/Navbar";
import NavVerticalContent from "@/components/Navbar/NavVerticalContent.vue";
import ContenuHome from "@/components/Content/ContenuHome";
import card from "@/components/Card/card";
import axios from "axios";
import { useStore } from "vuex";
import { onMounted, ref, computed } from "vue";

export default {
  components: {
    Navbar,
    NavVerticalContent,
    ContenuHome,
    card,
  },
  setup() {
    const store = useStore();
    const getEmploye = ref(null);

    onMounted(() => {
      axios
        .get("http://127.0.0.1:8000/api/user/get_employe", {
          headers: { Authorization: "Bearer " + store.state.user.token },
        })
        .then((response) => {
          store.commit("AjoutStateEmploye", response.data.data_employe);
          getEmploye.value = store.state.employe;
          console.log(response.data);
          console.log("employe");
          console.log(getEmploye.value);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get("http://127.0.0.1:8000/api/user/employe/liste", {
          headers: { Authorization: "Bearer " + store.state.user.token },
        })
        .then((response) => {
          console.log(response.data);
          donnees.value = response.data.liste.data;
          console.log("DONNEES");
          return donnees.value;
        })
        .catch((error) => {
          console.log(error);
        });
    });

    const donnees = ref(null);

    console.log("data");
    console.log(donnees.value);

    return {
      getEmploye,
      donnees,
    };
  },
};
</script>
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.contenu {
  position: absolute;
  top: 60px;
  left: 272px;
}

.boutton-ajout {
  /* position: absolute; */
  margin-left: 120vh;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.flexs-containers {
  display: flex;
  flex-wrap: wrap;
}
</style>

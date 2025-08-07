<template>
  <div><NavbarVue></NavbarVue></div>
  <br /><br /><br /><br /><br /><br />
  <div>
    <NavbarVue></NavbarVue>
    <div class="filtrer">
      <div @click="fetchData">
        <img
          src="image/filter.jpg"
          alt=""
          style="width: 20px; height: 20px"
          srcset=""
        />Tous
      </div>
      <div @click="filterData(2)">
        <img
          src="image/a.jpg"
          alt=""
          style="width: 30px; height: 20px"
          srcset=""
        />Anglais
      </div>
      <div @click="filterData(1)">
        <img
          src="image/fr.jpg"
          alt=""
          style="width: 30px; height: 20px"
          srcset=""
        />Français
      </div>
    </div>
  </div>

  <div class="card-container">
    <div class="card" v-for="(data, id) in prediction" :key="id">
      <div class="card-body">
        <h5 class="card-title" v-if="data.langue == 2">
          Prédiction en Langue: &nbsp;&nbsp;&nbsp;
          <img
            src="image/a.jpg"
            alt=""
            style="width: 30px; height: 20px"
            srcset=""
          />
        </h5>
        <h5 class="card-title" v-if="data.langue == 1">
          Prédiction en Langue: &nbsp;&nbsp;&nbsp;

          <img
            src="image/fr.jpg"
            alt=""
            style="width: 30px; height: 20px"
            srcset=""
          />
        </h5>
        <div class="c-body">
          <p class="card-text">
            {{ getFirstNineWords(data.prediction) }}............
          </p>
        </div>
        <div class="card-foot filtrer">
          <div @click="openModal(data)">
            <img
              src="image/filter.jpg"
              alt=""
              style="width: 20px; height: 20px"
              srcset=""
            />Voir Plus
          </div>
        </div>
        <!-- Affichez d'autres propriétés de données ici selon la structure de votre API -->
      </div>
    </div>
  </div>

  <div class="back" v-if="selectedPrediction"></div>
  <div class="new-card" v-if="selectedPrediction">
    <div><p class="fermer" @click="closeModal">x</p></div>
    <br /><br /><br />
    <div class="filtrer">
      <div @click="exportToPDF">
        <img
          src="image/history-icon-front-side-white-background (1).jpg"
          alt=""
          style="width: 20px; height: 20px"
          srcset=""
        />Exporter
      </div>
      <div>
        <img
          src="image/2606110_5590.jpg"
          alt=""
          style="width: 30px; height: 20px"
          srcset=""
        />Modifier
      </div>
      <div>
        <img
          src="image/2606118_5598.jpg"
          alt=""
          style="width: 30px; height: 20px"
          srcset=""
        />Supprimer
      </div>
    </div>
    <br />
    <div class="contenu">
      <textarea class="textare" style="text-align:justify;" :value="selectedPrediction.prediction" />
    </div>
  </div>
</template>
<script>
import NavbarVue from "@/components/Navbar/Navbar.vue";
import axios from "axios";
import { Store, useStore, mapGetters, Vuex } from "vuex";
import jsPDF from "jspdf";

export default {
  components: {
    NavbarVue,
  },
  data() {
    return {
      prediction: [],
      selectedPrediction: null,
      store: useStore(),
      predictionText:
        "Votre prédiction pour aujourd'hui : Vous rencontrerez de nouvelles opportunités passionnantes!",
    };
  },
  methods: {
    exportToPDF() {
      const doc = new jsPDF();
      const text =  this.selectedPrediction.prediction; // Le texte multiligne que vous souhaitez exporter

      // Divisez le texte en lignes avec une largeur maximale de 200 points
      const textLines = doc.splitTextToSize(text, 200);

      // Ajoutez chaque ligne au PDF
      let yPosition = 10; // Position verticale initiale
      textLines.forEach((line) => {
        doc.text(line, 10, yPosition);
        yPosition += 10; // Augmentez la position verticale pour la prochaine ligne
      });

      doc.save("exported-paragraphe.pdf");
    },
    openModal(p) {
      this.selectedPrediction = p;
    },
    closeModal() {
      this.selectedPrediction = null;
    },
    showAllData() {
      // Réinitialisez la liste de prédiction pour afficher tous les éléments
      this.prediction = this.prediction;
    },
    getFirstNineWords(sentence) {
      const words = sentence.split(" "); // Divisez la phrase en un tableau de mots
      const firstNineWords = words.slice(0, 9).join(" "); // Prenez les 9 premiers mots et rejoignez-les en une phrase
      return firstNineWords;
    },
    async fetchData() {
      const token = this.store.state.user.token;
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/Historique/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data.message);
        this.prediction = response.data.message;
        // Mettez à jour vos données locales ici avec response.data
      } catch (error) {
        console.error("Il y a une erreur:", error);
      }
    },
    filterData(langue) {
      // Filtrer les données en fonction de la langue
      this.prediction = this.prediction.filter(
        (data) => data.langue === langue
      );
    },
  },
  mounted() {
    // Appeler fetchData() immédiatement après le chargement du composant
    this.fetchData();

    // Appeler fetchData() toutes les 5 secondes
    // setInterval(() => {
    //   this.fetchData();
    // }, 5000); // 5000 millisecondes = 5 secondes
  },
};
</script>
<style scoped>
.contenu {
  padding: 3Opx;
  overflow: auto;
  width: 450px;
  height: 200px;
  padding: 2px;
  z-index: 1;
  margin-left: 40px;
  /* padding-right: 500px; */
  /* margin-right: 500px;  */
  background-color: white;
  /* border-radius: 15px; */
  /* box-shadow: 1px 3px 5px gray; */
  position: relative;

  margin-left: 4vh;
  width: 700px; /* Ajustez la largeur selon vos besoins */
}

.new-card {
  width: 800px;
  height: 400px;
  border: solid 1px;
  background-color: white;
  position: absolute;
  margin-top: -65vh;
  margin-left: 43vh;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
  /* justify-content: space-around; */
}

.card {
  width: 300px;
  margin: 10px; /* Espace entre les cartes */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.filtrer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa; /* Couleur de fond du conteneur */
  padding: 10px;
  border-radius: 5px;
}

/* CSS pour le bouton de filtrage */
.filtrer div {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #ddd; /* Couleur de fond du bouton */
  border-radius: 3px;
  margin-right: 10px; /* Marge à droite entre les boutons */
}

/* CSS pour l'image à l'intérieur du bouton */
.filtrer div img {
  margin-right: 5px; /* Marge à droite entre l'image et le texte */
}

/* CSS pour le texte à l'intérieur du bouton */
.filtrer div span {
  font-weight: bold;
  font-size: 14px;
}

.card-title {
  padding-left: 50px;
  padding-bottom: 10px;
  border-bottom: solid 0.5px #e6e7e3;
  box-shadow: 0 3px 0 rgb(247, 245, 245);
}

.card-text {
  font-size: 11pt;
  line-height: 30px;
  text-align: justify;
}

.c-body {
  padding-left: 20px;
  padding-right: 20px;
}

.back {
  position: fixed;
  width: 204vh;
  height: 98vh;
  border: solid 1px black;
  margin: 0;
  padding: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0.6;
  position: absolute;
  margin-top: -90vh;
}

.fermer {
  font-size: 40px;
  float: right;
  margin-top: -1vh;
  margin-right: 10px;
  cursor: pointer;
}

.fermer:hover {
  font-size: 37px;
  float: right;
  margin-top: -1vh;
  margin-right: 10px;
  cursor: pointer;
}

.custom-input {
  /* position: relative; */
  margin-left: 4vh;
  width: 700px; /* Ajustez la largeur selon vos besoins */
}

.contenu .textare {
  overflow: auto;
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 30px;
}

.contenu .textare::-webkit-scrollbar {
  width: 12px;
}

.custom-input input::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.custom-input input::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
</style>

<template>
  <!-- <div> -->
  <div style="position: absolute">
    <img src="image/16.jpg" style="width: 100%" alt="" />
  </div>
  <NavbarVue></NavbarVue>

  <div class="container">
    <div class="contenu" id="interne">
      <div class="titre-contain" style="margin-top: 30%">
        <div>
          <h1 style="font-size: 40pt">Bienvenue sur<span></span></h1>
        </div>
        <h1>AIDERVOICE<span></span></h1>
        <br />
      </div>

      <div class="lettre-contain">
        <h6>Vous avez de multiple choix <span></span></h6>
        <h6>Pour avoir des réponses à vos questions: <span></span></h6>
        <br />
      </div>
      <div class="cont" style="position: absolute; line-height: 30px">
        <h5 class="lettre">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I. Enregistrement Vocal
          <span></span>
        </h5>
        <h5 class="lettre">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II. Importations des fichiers
          audio <span></span>
          <!-- <button @click="handleLogout">Déconnexion</button> -->
        </h5>
      </div>
      <div class="logo" style="position: absolute">
        <img src="image/fb-icon.png" alt="" />&nbsp;
        <img src="image/in-icon.png" alt="" />&nbsp;
        <img src="image/instagram-icon.png" alt="" /><br /><br />
      </div>
      <div class="btn" style="position: absolute; top: 85vh">
        <a
          @click="toggleVisibility"
          class="button"
          style="cursor: pointer"
          id="button"
          >PARCOURIR</a
        >
      </div>
      <div style="position: absolute; left: -4%; top: 15%">
        <img src="image/imgs.jpg" style="width: 800px; height: 500px" alt="" />
      </div>
    </div>
  </div>

  <!-- Modal Section -->
  <div :class="{ 'bg-modal': true, visible: isVisible }">
    <div class="model-content">
      <div class="entete">
        <img src="image/dadam.jpeg" alt="" />
      </div>
      <div class="close" @click="toggleVisibility">+</div>
      <div class="choice">
         <!-- href="#" 
 href="#"  -->
        <a id="ouvert1" @click="toggleVisibility2"
          ><img src="image/Group.svg" alt="" class="number1"
        /></a>
        <a id="ouvert2" @click="toggleVisibility3"
          ><img src="image/Group 8.svg" alt="" class="number2"
        /></a>
      </div>
    </div>

    <div style="margin-left: 30%; margin-top: -3%">
      <div :class="{ register: true, visible: isVisible2 }">
        <div class="close" id="close" @click="toggleVisibility2">+</div>
        <div class="phone" style="margin-top: 14%">
          <!-- <div class="langue"></div><br> -->
          <br /><br />
          <div
            style="
              margin-left: 10px;
              margin-right: 10px;
              padding: 20px 20px 1px 20px;
              border-bottom: solid 0.5px #e6e7e3;
              box-shadow: 0 3px 0 rgb(247, 245, 245);
            "
          >
            <h3>
              Transcrire un nouveau vocal /<a @click="historique"
                >Historiques</a
              >
            </h3>
          </div>
          <br /><br />
          <div style="text-align: center">
            <select id="langueSelect" v-model="selectedLangue">
              <option value="fr">Français</option>
              <option value="en">Anglais</option>
            </select>
          </div>

          <!-- Start -->
          <img
            src="image/unnamed.png"
            @click="startRecording"
            v-if="!isRecording"
            alt=""
            id="magnetophone"
            style="
              margin-top: 3vh;
              width: 100px;
              height: 100px;
              cursor: pointer;
            "
          />
          <!-- Stop -->
          <img
            src="image/1241220.png"
            @click="stopRecording"
            v-if="isRecording"
            alt=""
            id="magnetophone"
            style="
              margin-top: 3vh;
              width: 100px;
              height: 100px;
              cursor: pointer;
            "
          />
          <div class="btns" style="margin-top: 4vh">
            <div>
              <button
                @click="playAudio"
                v-if="audioBlob"
                class="button-9"
                role="button"
                style="width: 80px"
              >
                Lire
              </button>
              &nbsp;&nbsp;
            </div>
            <div>
              <button
                @click="downloadAudio"
                v-if="audioBlob"
                class="button-37"
                role="button"
              >
                Télécharger
              </button>
            </div>
            &nbsp;&nbsp;
            <button @click="uploadAudio" v-if="audioBlob" class="button-37">
              Traiter
            </button>
            &nbsp;&nbsp;
            <button @click="exportToPDF" class="button-9" v-if="prediction">
              Exporter PDF
            </button>
          </div>
          <br />
          <div class="import-content" style="margin-left: 4vh">
            <span
              class="loader"
              v-if="isLoading"
              style="padding-top: 80px; padding-left: 400px"
            ></span>

            <p v-if="prediction" style="padding: 4px">
              {{ prediction[0] }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="import" :class="{ import: true, visible: isVisible3 }">
      <div class="fichier">
        <div class="close" id="fermer" @click="toggleVisibility3">+</div>
        <br /><br />
        <div
          style="
            margin-left: 10px;
            margin-right: 10px;
            padding: 20px 20px 1px 20px;
            border-bottom: solid 0.5px #e6e7e3;
            box-shadow: 0 3px 0 rgb(247, 245, 245);
          "
        >
          <h3>Importer un fichier: mp3, wav, mp4</h3>
        </div>
        <br />
        <div style="text-align: center">
          <select id="langueSelect" v-model="selectedLangue">
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
          </select>
        </div>

        <br />
        <div class="int">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label
            for="interieur"
            class="custom-file-upload"
            style="margin-top: 12px"
          >
            <input
              type="file"
              name="file"
              id="interieur"
              @change="handleFileChange"
            />
            Choisir un fichier
          </label>
          <p>{{ fileName }}</p>

          <button @click="uploadAudio" v-if="selectedFile" class="button-37">
            Traiter
          </button>
          <button @click="exportToPDF" class="button-9" v-if="prediction">
            Exporter en PDF
          </button>
          <!-- -->
        </div>
        <br />
        <div class="import-content">
          <span
            class="loader"
            v-if="isLoading"
            style="padding-top: 80px; padding-left: 400px"
          ></span>

          <p v-if="prediction" style="padding: 4px">
            {{ prediction[0] }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <label for="langueSelect">Choisir la langue :</label>

  <input type="file" @change="handleFileChange" />

  <button @click="startRecording" v-if="!isRecording">
    Commencer l'enregistrement
  </button>
  <button @click="stopRecording" v-if="isRecording">
    Arrêter l'enregistrement
  </button>
  <button @click="playAudio" v-if="audioBlob">Lire l'audio</button>
  <button @click="downloadAudio" v-if="audioBlob">Télécharger l'audio</button>
  <button @click="uploadAudio" v-if="audioBlob">Envoyer l'audio à l'API</button>
  <button @click="uploadAudio" v-if="selectedFile">
    Envoyer l'audio à l'API
  </button>

  <p v-if="prediction">{{ prediction[0] }}</p>

  <br />

  <button @click="toggleVisibility">Cliquez pour basculer la visibilité</button>
  <!-- <div :class="{ 'bg-modal': true, 'visible': isVisible }">Contenu à cacher/mostrar</div> -->
  <!-- </div> -->
</template>

<script>
import RecordRTC from "recordrtc";
import axios from "axios";
import NavbarVue from "@/components/Navbar/Navbar.vue";
import jsPDF from "jspdf";
import { useRouter } from "vue-router";
import { Store, useStore, mapGetters,Vuex } from "vuex";

export default {
  components: {
    NavbarVue,
  },
  data() {
    return {
      isRecording: false,
      audioBlob: null,
      recorder: null,
      selectedLangue: "en",
      selectedFile: null,
      prediction: null,
      isVisible: false,
      isVisible2: false,
      isVisible3: false,
      fileName: "",
      isLoading: false,
      router: useRouter(),
      store: useStore()
    };
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("déconnexionAction");
      this.$router.push({ name: "connexion" });
    },
    historique() {
      this.router.push({ name: "historique" });
    },
    exportToPDF() {
      const doc = new jsPDF();
      const text = this.prediction[0]; // Le texte multiligne que vous souhaitez exporter

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
    updateFileName(event) {
      const input = event.target;
      if (input.files.length > 0) {
        this.fileName = input.files[0].name;
      } else {
        this.fileName = ""; // Réinitialiser le nom du fichier s'il est supprimé
      }
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible; // Inverse la visibilité lors du clic sur le bouton
      this.prediction = null;
      this.selectedFile = null;
      this.audioBlob = null;
    },
    toggleVisibility2() {
      this.isVisible = true;
      this.isVisible2 = !this.isVisible2;
      this.prediction = null;
      this.selectedFile = null;
      this.audioBlob = null;
      // Inverse la visibilité lors du clic sur le bouton
    },
    toggleVisibility3() {
      this.isVisible3 = !this.isVisible3;
      this.prediction = null;
      this.selectedFile = null;
      this.audioBlob = null;
      // Inverse la visibilité lors du clic sur le bouton
    },
    handleFileChange(event) {
      // Récupérer le fichier sélectionné par l'utilisateur
      const selectedFile = event.target.files[0];
      this.selectedFile = selectedFile;
    },
    startRecording() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        this.recorder = new RecordRTC(stream, {
          type: "audio",
          mimeType: "audio/wav",
          recorderType: RecordRTC.StereoAudioRecorder,
          numberOfAudioChannels: 1,
          sampleRate: 44100,
          desiredSampRate: 16000,
        });
        this.recorder.startRecording();
        this.isRecording = true;
      });
    },
    stopRecording() {
      this.recorder.stopRecording(() => {
        this.audioBlob = this.recorder.getBlob();
        this.isRecording = false;
      });
    },
    playAudio() {
      const audioUrl = URL.createObjectURL(this.audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    },
    downloadAudio() {
      const audioUrl = URL.createObjectURL(this.audioBlob);
      const a = document.createElement("a");
      a.href = audioUrl;
      a.download = "enregistrement_audio.wav";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(audioUrl);
    },
    async uploadAudio() {
      this.prediction = null;
      const formData = new FormData();

      if (this.selectedFile) {
        formData.append("audio", this.selectedFile, this.selectedFile.name);
      } else {
        formData.append("audio", this.audioBlob, "enregistrement_audio.wav");
      }

      // formData.append('audio', this.audioBlob, 'enregistrement_audio.wav');
      const langue = this.selectedLangue;
      console.log(langue);
      this.isLoading = true;

      try {
        const token = this.store.state.user.token
        const response = await axios.post(
          `http://127.0.0.1:5000/upload/${langue}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              'Authorization': `Bearer ${token}`
            },
          }
        );
        this.prediction = response.data.prediction;
        console.log("Fichier audio envoyé avec succès !", response.data);
        // Faites quelque chose avec la réponse de l'API si nécessaire
      } catch (error) {
        console.error("Erreur lors de l'envoi du fichier audio :", error);
        // Gérez les erreurs ici
      } finally {
        this.isLoading = false; // Masquer le loader après réception de la réponse ou en cas d'erreur
      }
    },
  },
};
</script>
<style scoped>
.lettre-contain {
  position: absolute;
  color: rgb(216, 213, 213);
  top: 60vh;
  line-height: 20px;
}
.bg-modal {
  display: none; /* Contenu invisible par défaut */
}
.bg-modal.visible {
  display: block; /* Si isVisible est true, affiche le contenu */
}

.register {
  display: none; /* Contenu invisible par défaut */
}
.register.visible {
  display: block; /* Si isVisible est true, affiche le contenu */
}

.import {
  display: none; /* Contenu invisible par défaut */
}

.import.visible {
  display: block; /* Si isVisible est true, affiche le contenu */
}

.lettre {
  color: #aaa;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
/* body {
    background: url('../image/86817285-résumé-intelligence-artificielle-arrière-plan-web-de-technologie-concept-virtuel.jpg');
} */
/* header {
    display: flex;
    font-size: 15px;
    border-bottom: solid 1px black;
    max-width: 100%;
    box-shadow: 1px 3px 5px rgb(87, 86, 86);
    /* padding-top: 2%; */
/* padding-bottom: 2%;
} */
header nav {
  margin-left: 20%;
  word-spacing: 40px;
  margin-top: 2%;
}

header nav a {
  text-decoration: none;
  color: grey;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
}

header nav a:hover {
  border-bottom: solid 3px rgb(85, 148, 241);
  /* border-radius: 2px; */
  color: rgb(31, 30, 30);
}

header h1 {
  margin-top: 1%;
  margin-left: 5%;
  font-size: 50px;
  color: rgb(66, 166, 233);
  font-family: Arial, Helvetica, sans-serif;
}

.cont {
  top: 66vh;
}
.logo {
  top: 78vh;
}

.container {
  min-height: 80vh;
  max-width: 80%;
  margin-top: 1%;
  margin-left: 10%;
  align-items: center;
  justify-content: center;
  display: flex;
  /* border: solid 1px black; */
}

.container .contenu {
  /* border: solid 1px black; */
  min-height: 80vh;
  font-size: 20px;
  margin-left: 50%;
  padding-left: 11%;
  padding-top: 10%;
  width: 50%;
}

.titre-contain h1:nth-child(2) {
  color: rgb(66, 166, 233);
}

#interne .titre-contain h1 {
  display: block;
  width: fit-content;
  position: relative;
  color: transparent;
  animation: text-box 0.5s ease forwards;
  animation-delay: 1.5s;
}

#interne .titre-contain h1:nth-child(1) {
  animation-delay: 1s;
}
#interne .titre-contain h1:nth-child(2) {
  animation: text-name 0.5s ease forwards;
  animation-delay: 2s;
}

#interne .titre-contain h1 span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: rgb(66, 166, 233);
  animation: text-move 1s ease;
  animation-delay: 0.3s;
}
#interne .titre-contain h1:nth-child(1) span {
  animation-delay: 0.5s;
}
#interne .titre-contain h1:nth-child(2) span {
  animation-delay: 1.5s;
}

.container .btn .button {
  text-decoration: none;
  margin-left: 10%;
  display: inline-block;
  padding: 10px 30px;
  color: rgb(66, 166, 233);
  background-color: transparent;
  border: 2px solid rgb(66, 166, 233);
  font-size: 2rem;
  letter-spacing: 0.1rem;
  transition: 0.3s ease;
  transition-property: background-color, color;
}
.container .btn .button:hover {
  color: white;
  background-color: rgb(66, 166, 233);
  border-radius: 20px;
}
.bg-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  /* margin-left: -%; */
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
.model-content {
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 4px;
  position: absolute;

  margin: 10%;
  margin-left: 30%;
  margin-top: 15%;
  /* display: none; */
}

.close {
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 42px;
  transform: rotate(45deg);
  cursor: pointer;
}

.close:hover {
  color: lightslategray;
}

.choice a img {
  max-width: 100px;
  align-items: center;
  padding-top: 50%;
  justify-content: center;
}
.choice a .number1 {
  border: solid 3px rgb(182, 175, 175);
  /* max-height: .5vh; */
  width: 75px;
  padding-top: 0;
  border-radius: 45px;
  margin-top: 5%;
  margin-left: 25%;
  /* box-shadow: 1px 3px 5px rgb(182, 175, 175); */
}

.choice a .number1:hover {
  border-color: rgb(66, 166, 233);
  box-shadow: 0px 0px 0px;
}
.choice a .number2:hover {
  border-color: rgb(182, 175, 175);
}

.choice a .number2 {
  border: solid 3px rgb(66, 166, 233);
  /* max-height: .5vh; */
  width: 70px;
  padding-top: 0;
  border-radius: 45px;
  margin-left: 22%;
}

.entete img {
  max-width: 150px;
  margin-left: 35%;
  margin-top: 5%;
}

.register {
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 4px;
  position: relative;
  display: none;
}

/* .phone{
  padding: 1px;
} */

.phone #magnetophone {
  width: 100px;
  margin-top: 100px;
  margin-left: 200px;
}

.phone .langue {
  margin-left: 170px;
  margin-top: 15%;
  font-size: 15px;
  width: 150px;
  padding-top: 2%;
  padding-left: 10%;
  padding-bottom: 2%;
  border-radius: 10px;
  /* padding-right: 4%; */
  border: solid black 1px;
  background-color: black;
  color: white;
}

.phone .slider {
  width: 100px;
  height: 2px;
  border: solid 1px black;
  margin-left: 195px;
}

.phone .btns {
  margin-top: 10%;
  /* margin-left: 20%; */
  display: flex;
  /* font-size: 25px; */
}

.import {
  /* width: 500px;
    height: 600px;
    background-color: white;
    border-radius: 4px;
    position: relative;
    align-items: center;
    justify-content: center;
    display: none;
    background-image: linear-gradient(60deg, #bcc1c7 0%, #bcc1c7 100%);
    opacity: 2; */
}

.fichier {
  justify-content: center;
  margin-left: 100%;
  margin-top: -10%;
}
#interieur {
  margin-top: 0%;
  border-color: blue;
  /* padding-top: 0;  */
  /* margin-bottom: 80%; */
  /* margin-left: 100%; */
}
.import-content {
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
  border-radius: 15px;
  box-shadow: 1px 3px 5px gray;
  position: relative;
}

.fichier {
  text-align: center;
  width: 600px;
  margin-left: 2%;
  background-color: white;
  margin-top: 5%;
  top: 10%;
  left: 28%;
  background-color: white;
  line-height: 1.5;
  position: absolute;
  width: 40%;
  height: 500px;
  text-align: justify;
  border: solid 1px rgb(224, 221, 221);
  border-radius: 20px 20px 20px 20px;
}

.fichier .langue {
  margin-left: 100px;
  margin-top: 0%;
  font-size: 20px;
  width: 150px;
  padding-top: 0%;
  padding-left: 4.5%;
  padding-bottom: 0%;
  border-radius: 10px;
  /* padding-right: 4%; */
  border: solid black 1px;
  background-color: black;
  color: white;
}

.fichier .slider {
  width: 100px;
  height: 2px;
  border: solid 1px black;
  margin-left: 130px;
}

.int {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Style pour le label personnalisé */
.custom-file-upload {
  margin-left: 10px;
  cursor: pointer;
  background-color: #227dc7;
  color: white;
  border: none;
  padding: 10px 5px 4px 6px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  height: 44px;
}

/* Style pour le label personnalisé au survol */
.custom-file-upload:hover {
  background-color: #0c74ca;
}

/* Cacher l'input de type fichier par défaut */
.custom-file-upload input[type="file"] {
  display: none;
}

.tele img {
  width: 80px;
  border: 2px solid white;
  background-color: rgb(66, 166, 233);
  padding-top: 1%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 1%;
  border-radius: 10px;
  margin-left: 17%;
}
.tele img:hover {
  border-color: rgb(66, 166, 233);
  background-color: white;
}

@keyframes text-move {
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes text-box {
  100% {
    color: black;
  }
}

@keyframes text-name {
  100% {
    color: rgb(66, 166, 233);
    font-weight: 500;
  }
}

.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  max-width: 200px;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
    rgba(50, 151, 211, 0.3) 0 0 0 4px;
}

.button-37 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #21923d;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  /* overflow: hidden; */
  padding: 0 25px;
  /* position: relative; */
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  max-width: 200px;
}

.button-37:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .button-37 {
    padding: 10px 30px;
  }
}

/* Textarea */
.textarea-container {
  width: 400px;
  height: 200px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.custom-textarea {
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  font-size: 16px;
  resize: none; /* empêche le redimensionnement du textarea par l'utilisateur */
  outline: none;
  background-color: #f0f0f0;
  border-radius: 10px;
}

.custom-textarea::placeholder {
  color: #aaa;
}

/* Style pour le conteneur */
div[style="text-align:center"] {
  text-align: center;
  margin: 20px 0;
}

/* Style pour le select */
#langueSelect {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  outline: none;
  cursor: pointer;
  width: 200px;
}

/* Style pour les options */
#langueSelect option {
  font-size: 16px;
  background-color: #fff;
  color: #333;
}

/* Style pour le select lorsqu'il est survolé */
#langueSelect:hover {
  border-color: #555;
}

/* Style pour le select lorsqu'il est focus */
#langueSelect:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Loader */
.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid;
  border-color: #ff3d00 transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
    <div style="position:absolute;position: absolute;
top: 1px;width:100%; ">
        <header class="head-menu">
        <nav class="nav-menu">
            <li>
                <div class="mère">
                    <div class="txt"><a href="" class="a_ndao">AiderVoice</a></div>
                    <div class="text-menu">
                        <a class="a_menu" @click="RouterAccueil">Accueil</a>
                        <a class="a_menu"  @click="RouterHistorique">Historiques</a>
                        <a class="a_menu">Contribuer</a>
                        <a class="a_menu">Paramètres</a>
                        <a class="a_menu" @click="handleLogout">Se déconnecter</a>
                        <!-- <a href="" v-if="nom_user">{{ nom_user }} <img src="http://127.0.0.1:5000\profile2.jpg" alt="" srcset=""></a> -->
                    </div>
                </div>
            </li>
        </nav>
        
    </header>
    </div>
 
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    user: {
      type: Object,
      default: {},
    },
    search: {
      type: String,
      default: "",
    },
    imageUser: {
      type: String,
      default: "",
    },
    nom_user: {
      type: String,
      default: "",
    },
    listeNotification: {
      type: Object,
      default: {},
    },
  },
  data(){
    return {router: useRouter()}
  },
  methods: {
    RouterAccueil(){
        this.router.push({"name": "home"})
    },
    RouterHistorique(){
        this.router.push({"name": "historique"})
    },
    getPhotoUrl(photo) {
      if (photo) {
        return `/storage/${photo}`;
      }
      // Retourner une URL par défaut si la photo est vide ou nulle
      return "/default-photo.jpg";
    },
    handleLogout() {
      this.$store.dispatch("déconnexionAction");
      this.$router.push({ name: "connexion" });
    }
  },
};
</script>
<style scoped>

.nav-menu{
    padding: 25px;
    margin-bottom: 8px;
    /* background: rgb(253, 252, 252); */
    box-shadow: 0 2px 4px rgb(236, 230, 230);
}

li{
    list-style-type: none;
}

.mère{
    display: flex;
    flex-direction: row;
}

.mère .txt{
    padding: 0 200px 0 30px;
}

.nav-menu .a_ndao{
    text-decoration: none;
    font-family: 'Segoe UI', 'Frutiger', 'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 16pt;
    color: #208ac7;
    text-transform: uppercase;
    
}

.nav-menu .a_menu{
    /* background: rgb(15, 191, 250); */
    cursor: pointer;
    text-decoration: none;
    font-size: 14pt;
    font-family: 'Segoe UI', 'Frutiger', 'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;
    text-transform: capitalize;
    color: #aca9a9;
    padding: 0 20px;
    /* text-shadow: 0 2px 3px rgb(151, 148, 148); */
}

.nav-menu .a_menu:hover{
    color: #208ac7;
    padding: 0px 20px 8px 20px;
    text-align: center;
    border-bottom: #208ac7 4px solid;
    /* transform:  translateY(100);
    transition: border-bottom 40s; */
}

.imag{
    z-index: 3;
    width: 100%;
    height: 515px;
    /* padding-top: 8px; */
}

.div-text{
    z-index: 4;
    margin: 0;
    position: absolute;
    top: 230px;
    width: 480px;
    left: 56%;
}

.text-attirant{
    margin: 0;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 2px;
    font-weight: lighter;
}

/* .head-menu .imag{
    width: 100%;
    height: auto;
} */

.Cmere{
    background: rgb(253, 255, 255);
    padding: 15px 20px 20px 20px;
    display: flex;
}

.Cmere .bienvenue{
    margin: 0;
    
}

.Cmere .title-rest{
    margin: 0;
    font-family: 'Segoe UI', Tahoma, 'Geneva', Verdana, sans-serif;
    font-weight: initial;
    text-align: center;
}

.title-rest ~ p{
    color: rgb(57, 57, 58);
}

em{
    color: #a0c720;
    font-weight: unset;
}

.text-desc{
    margin-left: 7%;
    width: 40%;
    height: auto;
    padding: 95px 20px 0 20px;
    /* border: solid 1px rgb(228, 228, 228);
    border-radius: 20px;
    box-shadow: 6px 6px 5px rgb(248, 244, 244); */
    resize: vertical;
}

.Img-imagePresentation{
    border-radius: 50%;
}

.parag{
    text-align: justify;
    line-height: 25px;
    font-family: 'Segoe UI', 'Frutiger', 'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 15px;
    text-indent: 20px;
    line-height: 30px;
}

.div-imagePresentation{
    width: 40%;
    padding-left: 5%;
}

input[type="email"]:disabled{
    background-color: rgb(216, 213, 210);
}

input[type= "email"],
input[type= "password"]{
    width: 150px;
    display: block;
}

input[type= "button"]:hover{
    width: 80px;
    box-shadow: rgb(216, 214, 214) 2px 1px;
    cursor: pointer;
    color: rgb(192, 11, 11);
}

h1:nth-of-type(2){
    font-size: 25pt;
    font-weight: initial;
}

.div-presentation{
    display: flex;
    margin: 0;
    padding: 0;
    background-color: rgb(53, 53, 53);
}

.div-image1{
    width: 33.5%;
    margin: 0;
    padding: 0;
    
}

.div-image2{
    width: 33.5%;
    margin: 0;
    padding: 0;
}

.div-image3{
    width: 33.5%;
    margin: 0;
    padding: 0;
}

.image-interprete{
    width: 100%;
    height: 400px;
}

.div-sous{
    position:relative;
    margin: 0;
    padding: 0;

}

.div-textFlottant{
    margin-top: 190px;
    z-index: 5;
    background-color: #a0c720;
    /* border: solid 1px #a0c720; */
    position: absolute;
    width: 450px;
    height: 160px;
    padding: 50px 0 0 0; 
    opacity: 0.7;
}

.text-textFlottant{
    text-align: center;
    opacity: 1;
    font-family: 'Segoe UI', Tahoma, 'Geneva', Verdana, sans-serif;
    color: rgb(32, 32, 32);
    /* font-family: 'Segoe UI', Tahoma, 'Geneva', Verdana, sans-serif; */
    font-weight: 500;
    border: solid 3px black;
    width: 200px;
    border-radius: 20px 20px;
    height: 25px;
    margin-left: 24%;
}

 

 

 
 

 
</style>

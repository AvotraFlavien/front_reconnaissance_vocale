<template>

  <div>
    <!-- <label class="form-label" for="form1Example23">{{ label }}</label> -->
    <!-- <input type="text" name="id" id="id" placeholder="IDENTIFIANT"><br><br> -->
    <input
      class="form-control"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder + '....'"
      @input="$emit('update:modelValue', $event.target.value)"
      name="id" id="id"
      style="width: 200px;"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  methods: {},
};
</script>
<style scoped>
/* body{
    background-color: rgb(16, 10, 39);
} */
.cont{
    padding-top: 30px;
    padding-bottom: 30px;
    border: solid 1px rgb(228, 228, 228);
    width: 900px;
    /* height: 374px; */
    background-color: white;
    position: absolute;
    margin-top: -100vh;
    margin-left: 30vh;
    display: flex;
    padding-left: 10px;
}

.container1{
    width: 100%;
}

.contenu-im{
    margin-left: 100px;
}

.soratra{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* .container2{
    position: absolute;
    margin-top: -96vh;
    margin-left: 20vh;
} */


 .welcome {
    margin-left: 20%;
    margin-top: 20%;
}
.hero p:nth-child(1) {
    font-size: 15px;
    margin-left: 25%;
    font-family:Arial, Helvetica, sans-serif;
}

.hero p:nth-child(2) {
    font-size: 15px;
    margin-left: 10%;
}

 #id{
    border-width: .5px;
    margin-left: 20%;
    padding-top: 2%;
    padding-left: 2%;
    padding-bottom: 1.5%;
    padding-right: 10%;
    border-color: rgb(0, 89, 255);
    border-radius: 0;
    /* border-left: 0px; */
}

 #password {
    border-width: .5px;
    margin-left: 20%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 10%;
    padding-bottom: 1.5%;
    border-color: rgb(0, 89, 255);
}

 .forgot {
    text-decoration: none;
    font-size: 13px;
    margin-left: 30%;
    color: rgb(0, 89, 255);
    font-family: Arial, Helvetica, sans-serif;
}

 .connect {
    margin-left: 20%;
    border-width: .5px;
    margin-left: 20%;
    padding-top: 2%;
    padding-left: 12%;
    padding-right: 15%;
    border-radius: 5px;
    padding-bottom: 1.5%;
    border-color: rgb(66, 166, 233);
    color: white;
    background-color: rgb(66, 166, 233);
    width: 53%;
    cursor: pointer;
}

 .connect2 {
    /* border: solid .5px black;
    color: white;
    background-color: black;
    text-decoration: none;
    margin-left: 20%;
    border-width: .5px;
    margin-left: 20%;
    padding-top: 2%;
    padding-left: 12%;
    padding-right: 15%;
    border-radius: 5px;
    padding-bottom: 1.5%;
    font-size: 10.8px; */
    margin-left: 20%;
    border-width: .5px;
    margin-left: 20%;
    padding-top: 2%;
    padding-left: 12%;
    padding-right: 15%;
    border-radius: 5px;
    padding-bottom: 1.5%;
    border-color: rgb(0, 0, 0);
    color: white;
    background-color: rgb(0, 0, 0);
    width: 53%;
    cursor: pointer;
}
</style>


<template>
  <div id="signature">

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container" header-top container-expanded d-flex justify-content-between align-items-center>
          <div class="th-logo ">
              <img src="https://cdn.veredaeducacao.com.br/images/logos/logo_expanded_default_x1.png" alt="" width="200" />
          </div>
        <h1 class="sub-text title has-text-centered">
            <p>Gerador de Assinaturas Vereda</p>
        </h1>
        </div>
      </div>
    </section>
<!----------------- Header Ends ---------------->

    <div class="container main">
      <div>
        <div class="columns">
<!----------------- Input Information ---------------->
          <div class="column" id="input-info">
              <h3 class="subtitle">Insira seus Dados</h3>
            <inputInformation :fullName.sync="fullName" :title.sync="title" :phone.sync="phone" :email.sync="email" />

<!----------------- Button ---------------->
            <button @click="toggleShow, $modal.show('output')" class="button is-success" type="submit" :disabled="!isValid">
                Gerar Assinatura
            </button>
            <button @click.prevent="reset" class="button is-success" type="submit" :disabled="!isReset">
                Reset
            </button>


          </div>
<!----------------- Output Signature ---------------->
          <div class="column">
              <h3 class="subtitle">Preview</h3>
            <outputSignature :fullName.sync="fullName" :title.sync="title" :phone.sync="phone" :email.sync="email" />
          </div>
        </div>
      </div>
 <!----------------- Modal ---------------->

        <modal name="output" :height="415">

          <div class="sign-box level-item has-text-centered">
              <div class="output-btn">
                  <p class="field">
                      <a class="button is-small" @click="$modal.hide('output')">
                        <span class="icon is-small">
                          <i class="fa fa-times"></i>
                        </span>
                      </a>
                    </p>
                </div>
            <outputSignature :fullName.sync="fullName" :title.sync="title" :phone.sync="phone" :email.sync="email"/>

          </div>
              <div class="web"></div>
              <div class="desktop"></div>
          <div class="gif-box level-item has-text-centered">
        </div>
        <div class="button-sig">
              <v-btn  class="web" color="primary">
                  WEB
                </v-btn>
                <v-btn class="desktop" color="primary">
                  DESKTOP
                </v-btn>
        </div>
          </modal>

    </div>
        <div class="" id="button-about">
     <v-btn
        class="mx-2"
        fab
        blue
        color="blue"
       
     >
        <v-icon class="fas fa-question">
          mdi-plus
        </v-icon>
      </v-btn>
    </div>

<!----------------- Footer ---------------->
    <footer class="" id="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    &copy;2020 Vereda Educação S.A
                </p>
            </div>
        </div>
    </footer>


  </div>

</template>

<!-------------------------- Scripts ---------------------------->
<script>

export default {
  name: 'app',
  data: function () {
    return {
      fullName: 'Nome',
      title: 'Area',
      phone: 'Celular',
      email: 'Unidade',
      isShowing: false
    }
  },
  computed: {
    isValid: function () {
      return this.fullName !== 'Nome' && this.title !== 'Area' && this.email !== 'Unidade'
    },
    isReset: function () {
      return this.fullName !== 'Nome' || this.title !== 'Area' || this.phone !== 'Celular' || this.email !== 'Unidade'
    }
  },
  methods: {
    toggleShow () {
      this.isShowing = !this.isShowing
    },
    show () {
      this.$modal.show('output')
    },
    hide () {
      this.$modal.hide('output')
    },
    reset () {
      this.fullName = 'Nome'
      this.title = 'Area'
      this.phone = 'Celular'
      this.email = 'Unidade'
    }
  }
}
</script>

<!-------------------------- Styles ---------------------------->
<style scoped>


li {
  padding-left: 15px;
  text-indent: -15px;
}

.output-btn {
    right: 0;
    position: absolute;
    top: 0;
    margin-right: 5px;
}
.sign-box {
    margin-top: 30px;
    margin-left: 60px;
}
.gif-box {
  margin-top: 30px;
  margin-left: 1px;
  background-color: #efefef;
  padding: 20px;
  border-top: 1px dashed #1336d3;
}
.gif-box ul {
    text-align:left;
    font-size: 14px;
}
.gif-box p {
   text-align: left;
   padding-right: 20px;
   font-size: 14px;
}
.gif-box img {
   width:250px;
}
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
input:disabled {
    background: #dddddd;
}
.container.main {
  margin-top: 40px;
}
#footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 40px;
    width: 100%;
    background-color: #efefef;
    padding-top: 0px;
}
#input-info {
  margin-right: 100px;
}
.hero.is-primary {
  background-color: #ffff;
}
.button {
  margin-top: 10px;
}
.button.is-success, .button.is-success[disabled] {
  background-color: #1336d3;
  border-color: transparent;
  color: #fff;
}
.button.is-success.is-hovered,
.button.is-success:hover {
  background-color: #1336d3;
  border-color: transparent;
  color: #fff;
}
.input:focus {
  border-color: #1336d3;
  box-shadow: 0 0 0 0.125em #1336d3;
}
.sub-text {
  margin-left: 10px;
  margin-top: 20px;
}
.sub-text p {
  color: #473f3d;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 100;
  font-size: 20;
}
.hero-body {
  padding: 1.5rem 1.5rem;
}
.input:focus {
  border-color: #1336d3;
  box-shadow: 0 0 0 0.125em #1336d3;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.button-sig web {
  background-color: #1336d3;
  border-color: transparent;
  color: #fff;
}
.button-about {
  color:#1336d3;
  background-color: #1336d3;
}
</style>

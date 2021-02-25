
<script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>

<template>
  <div>

    <section>
      <form @submit.prevent="validateBeforeSubmit">
        <div class="field">

          <div class="control has-icons-left has-icons-right">
            <input class="input" onblur="if (this.value == '') {this.value = 'Nome';}" onfocus="if (this.value == 'Nome') {this.value = '';}"
                :value="fullName" @input="$emit('update:fullName', $event.target.value)" type="text">
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
          </div>
         </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <select class="input" onblur="if (this.value == '') {this.value = 'Area';}" onfocus="if (this.value == 'Area') {this.value = '';}" :value="title" @input="$emit('update:title', $event.target.value)" type="text">
                    <option disabled>Area</option>
                        <option>Acadêmico e Pedagógico</option>
                        <option>Administrativo</option>
                        <option>Comunicação</option>
                        <option>Contraturno</option>
                        <option>Editorial e Projetos</option>
                        <option>Ensino e Desempenho Acadêmico</option>
                        <option>Expansão</option>
                        <option>Financeiro</option>
                        <option>Financeiro e Administrativo</option>
                        <option>Infraestrutura e Service Desk</option>
                        <option>Jurídico e Compliance</option>
                        <option>Marketing</option>
                        <option>Núcleo de Apoio ao Estudante</option>
                        <option>Operações</option>
                        <option>Operações Academicas</option>
                        <option>Operações e Tecnologia</option>
                        <option>Operações Escolares</option>
                        <option>Pedagógico</option>
                        <option>Pessoas</option>
                        <option>Pessoas e Marketing</option>
                        <option>Presidencia</option>
                        <option>Relacionamento</option>
                        <option>Tecnologia Aplicada</option>
            </select>
                    <span class="icon is-small is-left">
                      <i class="fa fa-id-badge"></i>
                    </span>
          </div>
        </div>
                <div class="field">
          <div class="control has-icons-left has-icons-right">
            <select class="input" onblur="if (this.value == '') {this.value = 'Unidade';}" onfocus="if (this.value == 'Unidade') {this.value = '';}" :value="email" @input="$emit('update:email', $event.target.value)" type="text">
                        <option disabled>Unidade</option>
                        <option value="Av. das Nações Unidas, 10989 - Itaim Bibi - SP, 04578-000 - 8º Andar">CAE</option>
                        <option value="R. Clélia, 161 - Vila Pires, Santo André, SP, 09130-010">STA</option>
                        <option value="R. Dr. João Batista de Lacerda, 444-468, Quarta Parada, São Paulo - SP, 03177-010">MOC</option>
                        <option value="R. Odeon, 150 - Vila Alcantara, São Bernardo do Campo - SP, 09720-290"> SBC</option>
                      </select>

                    <span class="icon is-small is-left">
                      <i class="fa fa-building-o"></i>

                    </span>
          </div>

        </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input" placeholder="+55(11) 98765-4321" maxlength="18" name="cellphone" onblur="if (this.value == '') {this.value = 'Celular';}" onfocus="if (this.value == 'Celular') {this.value = '';}" :value="'+55()'" @input="$emit('update:phone', $event.target.value)" type="text" @onclick="$hiddenPhone()" >
                    <span class="icon is-small is-left">
                      <i class="fa fa-phone"></i>
                    </span>
          </div>
        </div>
        <!-- <button id="submit-btn" class="button is-primary" type="submit">Submit</button> -->
        </form>
    </section>

  </div>
</template>
<script>
export default {
  name: 'inputInformation',
  props: {
    fullName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #1336d3;
}
</style>

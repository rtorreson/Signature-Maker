<template>
  <div>
      <section>
        <table cellpadding="0" cellspacing="0" border="0" style=
        "background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
        <tr>
            <td valign="top" style=
            "padding-top: 0; padding-bottom: 0; padding-left: 0; padding-right: 7px; border-top: 0; border-bottom: 0: border-left: 0; border-right: solid 2px #1336d3">
            <img width="100"
                    height="95" style="width: 115px; max-width: 110px !important; height: 60px; max-height: 30px !important;" id="preview-image-url" src=
            "https://cdn.veredaeducacao.com.br/images/logos/logo_expanded_default_x1.png"
              name="preview-image-url" />
            </td>
            <td style=
            "padding-top: 0; padding-bottom: 0; padding-left: 12px; padding-right: 0;">
            <table cellpadding="0" cellspacing="0" border="0" style=
            "background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
              <tr>
                  <td colspan="2" style=
                  "padding-bottom: 5px; color: #1336d3; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                  {{fullName}}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style=
                  "color: #333333; font-size: 12px; font-family: Arial, Helvetica, sans-serif;">
                  {{title}}
                  </td>
                </tr>
                <tr>
                  <td class="phone" valign="top" name="cellphone" style=
                  "vertical-align: top; color: #333333; font-size: 12px; font-family: Arial, Helvetica, sans-serif;">
                  {{phone}}
                  </td>
                </tr>
                <tr>
                    <td valign="top" style=
                    "vertical-align: top; color: #333333; font-size: 12px; font-family: Arial, Helvetica, sans-serif;">
                   {{email}}
                    </td>
                  </tr>

                <tr>
                  <td colspan="2" style="padding-top: 5px;">
                    <a href="https://escolavereda.com.br" target="_blank" style=
                    "border-width:0px; border:0px; text-decoration: none;"><img width="20"
                    height="20" style=
                    "border: none; width: 20px; max-width: 20px !important; height: 20px; max-height: 20px !important;"
                    src=
                    "https://cdn.veredaeducacao.com.br/images/icones/web-logo.png" /></a>
                    <a href="https://www.facebook.com/escolavereda/" target="_blank" style=
                    "border-width:0px; border:0px; text-decoration: none;"><img width="20"
                    height="20" style=
                    "border: none; width: 20px; max-width: 20px !important; height: 20px; max-height: 20px !important;"
                    src=
                    "https://cdn.veredaeducacao.com.br/images/icones/facebook-logo.png" /></a>&nbsp;<a href="https://www.linkedin.com/company/escola-vereda/?originalSubdomain=pt" target="_blank"
                    style=
                    "border-width:0px; border:0px; text-decoration: none;"><img width="20"
                    height="20" style=
                    "border: none; width: 20px; max-width: 20px !important; height: 20px; max-height: 20px !important;"
                    src=
                    "https://cdn.veredaeducacao.com.br/images/icones/linkedin-logo.png" /></a>&nbsp;<a href="https://www.instagram.com/escolavereda/?hl=pt-br" target="_blank"
                    style=
                    "border-width:0px; border:0px; text-decoration: none;"><img width="20"
                    height="20" style=
                    "border: none; width: 20px; max-width: 20px !important; height: 20px; max-height: 20px !important;"
                    src=
                    "https://cdn.veredaeducacao.com.br/images/icones/instagram-logo.png" /></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

    </section>
  </div>
</template>
<script type="text/javascript" src="js/jquery.mask.min.js"/></script>
<script>

// import {bus} from '../main'
export default {
  name: 'outputSignature',
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
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

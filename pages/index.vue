<template>
  <section class="container-section">
    <div>
      <br>
      <b-row>
          <b-col sm="8" offset-sm="2" lg="6" offset-lg="3">
            <b-embed type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/b5b8eoufcFE"
            allowfullscreen></b-embed>
          </b-col>
      </b-row>

      <app-logo/>

      <h3 class="subtitle">
        Clube de Paramotor<br>Jataí - Goiás
      </h3>
      <social-links/>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import SocialLinks from '~/components/SocialLinks.vue'

export default {
  components: {
    AppLogo,
    SocialLinks
  }
}
</script>

<style>
.container-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
}

.subtitle {
  color: #777;
  padding: 20px 5px;
}


</style>

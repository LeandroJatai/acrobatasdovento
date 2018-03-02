<template>
  <section class="container-section">
    <div>
      <social-links/>
      <app-logo/>
      
      <h3 class="subtitle">
        Clube de Paramotor<br>Jataí - Goiás
      </h3>
      <b-embed type="iframe"
                 aspect="16by9"
                 src="https://www.youtube.com/embed/b5b8eoufcFE"
                 allowfullscreen></b-embed>
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
  align-items: center;
  text-align: center;
}


.subtitle {
  color: #777;
  padding: 35px;
}


</style>

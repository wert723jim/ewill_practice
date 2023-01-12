<template>
  <div id="app">
    <Announcement />
    <!-- <div class="separateWave">
      <div class="separateWave__img">
        <img src="./assets/img/separateWave.png" alt="">
      </div>
    </div> -->
    <Form />
    <Lottery />
    <section class="lighthouse">
      <div class="lighthouse__container">
        <div class="lighthouse__content"></div>
        <div class="lighthouse__img"></div>
      </div>
    </section>
    <section class="store">
      <div class="store__container">
        <div class="store__header"></div>
        <div class="store__appearance">
          <div class="store__appearance__decor">
            <div class="store__appearance__decor__roof"></div>
            <div class="store__appearance__decor__glass">
              <div class="store__appearance__decor__glass__title"></div>
              <div class="store__appearance__decor__glass__list"></div>
              <div class="store__appearance__decor__glass__image"></div>
              <div class="store__appearance__decor__glass__slide"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Announcement from './components/Announcement.vue'
import Form from './components/Form.vue'
import Lottery from './components/lottery.vue'

export default {
  name: 'App',
  components: {
    Announcement,
    Form,
    Lottery
  }
}
</script>

<style scoped lang="scss">
  .separateWave__img {
    width: 100%;
    background: $primaryColor4;
  }
</style>



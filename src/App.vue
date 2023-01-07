<template>
  <div id="app">
    <Announcement />
    <div class="separateWave">
    </div>
    <section class="form">
      <div class="form__container">
        <div class="form__title"></div>
        <div class="form__content"></div>
        <div class="form__btn"></div>
      </div>
    </section>
    <section class="achievement">
      <div class="achievement__container">
        <div class="achievement__list">
          <div class="achievement__list__item">
            <div class="achievement__list__item__rank"></div>
            <div class="achievement__list__item__one"></div>
            <div class="achievement__list__item__name"></div>   
          </div>
        </div>
      </div>
    </section>
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
// import HelloWorld from './components/HelloWorld.vue'
import Announcement from './components/Announcement.vue'

export default {
  name: 'App',
  components: {
    Announcement,
  }
}
</script>



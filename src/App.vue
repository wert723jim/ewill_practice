<template>
  <div id="app">
    <Announcement />
    <div class="separateWave">
      <div class="separateWave__img">
        <img src="./assets/img/separateWave.svg" alt="">
      </div>
    </div>
    <Form />
    <Lottery />
    <Lighthouse />
    <div class="market">
      <div class="market__container">
        <div class="market__title">
          <p>Neque porro quisquam est qui dolorem!</p>
        </div>
        <div class="market__img">
          <img src="./assets/img/market.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Announcement from './components/Announcement.vue'
import Form from './components/Form.vue'
import Lottery from './components/lottery.vue'
import Lighthouse from './components/lighthouse.vue'

export default {
  name: 'App',
  components: {
    Announcement,
    Form,
    Lottery,
    Lighthouse
  }
}
</script>

<style scoped lang="scss">
  .separateWave__img {
    width: 100%;
    background: $primaryColor4;

    img {
      width: 100%;
    }
  }

  .market {
    background: $primaryColor4;

    &__container {
      background: $primaryColor1;
      padding: 40px 0;
      text-align: center;
      border-radius: 50px 50px 0 0;
    }

    &__title {
      width: 376px;
      margin: 0 auto;
      margin-bottom: 24px;
      
      p {
        font-size: 20px;
        font-weight: 700;
        color: #FFFFFF;
        line-height: 200%;
        letter-spacing: .2em;
      }
    }
  }
</style>



<template>
  <div>
    <section class="form">
      <div class="form__container">
        <form action="">
          <div class="form__title">
            <div class="form__title__name">
              FORM
              <img src="../assets/img/titleTurtleBig.png" alt="" class="form__title__name__decor">
            </div>
          </div>
          <div class="form__content">
            <div class="form__content__group">
              <label for="">store</label>
              <div class="form__content__group__selectWrapper">
                <select name="" id=""></select>
                <img src="../assets/img/dropDown.png" alt="" class="select__dropDown">
              </div>
            </div>
            <div class="form__content__group">
              <label for="">name</label>
              <input type="text">
            </div>
            <div class="form__content__group">
              <label for="">phone</label>
              <input type="text">
            </div>
            <div class="form__content__group">
              <label for="">
                Amount of consumption
              </label>
              <input type="text">
            </div>
            <div class="form__content__group">
              <label for="">payment</label>
              <div class="form__content__group__selectWrapper">
                <select name="" id=""></select>
                <img src="../assets/img/dropDown.png" alt="" class="select__dropDown">
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="form__btn">
        <button>
          submit
        </button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "../styles/form.scss";
</style>
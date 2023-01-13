<template>
  <div>
    <section class="form" id="form">
      <div class="form__container">
        <form 
          id="a-form"
          @submit.stop.prevent="handleSubmit"
        >
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
                <div class="form__content__group__selectWrapper__vselect">
                  <vSelect
                    :options="stores"
                    id="vselect__stores"
                    v-model="store"
                  >
                  </vSelect>
                </div>
                <img src="../assets/img/dropDown.png" alt="" class="select__dropDown">
              </div>
              <span :hidden="missing !== 'store'" class="form__content__group--warning">required</span>
            </div>

            <div class="form__content__group">
              <label for="">name</label>
              <input
                type="text"
                class="form__content__group__input"
                name="name"
                v-model="name"
              >
              <span :hidden="missing !== 'name'" class="form__content__group--warning">required</span>
              <span v-if="missing === 'symbol'" class="form__content__group--warning">請輸入中英文</span>
            </div>

            <div class="form__content__group">
              <label for="">phone</label>
              <input
                type="text"
                class="form__content__group__input"
                name="phone"
                v-model="phone"
              >
              <span :hidden="missing !== 'phone'" class="form__content__group--warning">required</span>
              <span :hidden="missing !== 'phoneLength'" class="form__content__group--warning">手機須為10碼</span>
              <span :hidden="missing !== 'phoneNumber'" class="form__content__group--warning">只能輸入數字</span>
            </div>

            <div class="form__content__group">
              <label for="">
                Amount of consumption
              </label>
              <input
                type="text"
                class="form__content__group__input"
                name="amount"
                v-model="amount"
              >
              <span :hidden="missing !== 'amount'" class="form__content__group--warning">required</span>
              <span :hidden="missing !== 'amountNumber'" class="form__content__group--warning">請輸入數字</span>
              <span :hidden="missing !== 'negative'" class="form__content__group--warning">請輸入正數</span>
            </div>

            <div class="form__content__group">
              <label for="">payment</label>
              <div class="form__content__group__selectWrapper">
                <select
                  class="form__content__group__input"
                  name="payment"
                  v-model="payment"
                >
                  <option
                    value=""
                    selected
                    disabled
                  >
                    --請選擇--
                  </option>
                  <option value="0">
                    digital payment
                  </option>
                  <option value="1">
                    ATM
                  </option>
                </select>
                <img src="../assets/img/dropDown.png" alt="" class="select__dropDown">
              </div>
              <span :hidden="missing !== 'payment'" class="form__content__group--warning">required</span>
            </div>

          </div>
        </form>
      </div>
      <div class="form__btn">
        <button 
          type="submit"
          form="a-form"
          :disabled="status==='loading'"
          :class="{success: status==='success', failure: status==='failure'}"
          class="success"
        >
        <div class="form__btn--success" v-if="status==='success'">
          <img src="../assets/img/success_btn.svg">
          <span class="success">success</span>
        </div>

        <div class="form__btn--failure" v-else-if="status==='failure'">
          <img src="../assets/img/fail_btn.png">
          <span class="failure">failure</span>
        </div>

          <span v-else>submit</span>
        </button>
        <p class="warning" v-if="status==='failure'">This person does not exist</p>
      </div>
    </section>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  data() {
    return {
      // v-select列表資料
      stores: [
        "store1",
        "store2"
      ],
      store: "",
      name: "",
      phone: "",
      amount: "",
      payment: "",
      // 錯誤旗標
      missing: "",
      // 按鈕狀態旗標
      status:""
    }
  },
  components: {
    vSelect
  },
  methods: {
    handleSubmit(e) {
      
      // 檢查是否有未填欄位
      if( !this.store ) {
        this.missing = "store"
        return
      }

      if( !this.name ) {
        this.missing = "name"
        return
      }

      if( !this.phone ) {
        this.missing = "phone"
        return
      }

      if( !this.amount ) {
        this.missing = "amount"
        return
      }

      if( !this.payment ) {
        this.missing = "payment"
        return
      }
      
      const name = this.name
      const phone = this.phone
      const amount = this.amount
      const patternCh = new RegExp("[\u4E00-\u9FA5]+")
      const patternEn = new RegExp("[A-Za-z]+")
      const patternNum = new RegExp("[0-9]+")
      
      // 檢查 name 欄位中英文
      for( let i = 0; i < name.length; i ++) {
        if (!patternCh.test(name[i]) && !patternEn.test(name[i])) {
          this.missing = 'symbol'
          return
        }
      }

      // 檢查 phone 欄位是否為10碼
      if (phone.length !== 10) {
        this.missing = 'phoneLength'
        return
      } 
      // 檢查 phone 欄位是否為數字
      for( let i = 0; i < phone.length; i ++) {
        if (!patternNum.test(phone[i])) {
          this.missing = 'phoneNumber'
          return
        }
      }

      // 檢查 amount 欄位
      // 是否為數字
      if ( isNaN(amount) ) {
        this.missing = 'amountNumber'
        return
      }
      // 是否為正數
      if (Number(amount) < 0) {
        this.missing = 'negative'
        return
      }


      // 驗證完後，清空 missing 旗標
      this.missing = ""

      // 點擊按鈕後，避免重複點擊，等待資料送出
      this.status = "loading"
      
      //處理 form 欄位資料
      const form = e.target
      const formData = new FormData(form)
      formData.append("store", this.store)

      for(let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }

      setTimeout(() => {
        // 
        this.status = "failure"
        // this.status = "success"
      }, 5000);
      
    }
  }
}
</script>

<style lang="scss" >
// vselect scss
  @import "vue-select/src/scss/vue-select.scss";
  @import "../styles/form.scss";
</style>
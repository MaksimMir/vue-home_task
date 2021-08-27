<template>
  <div class="calc">
      <div>
            <input type="number" name="op1" v-model.number="first_number">
            <button class="sum" @click="sum()">+</button>
            <button class="dev" @click="dev()">-</button>
            <button class="mul" @click="mul()">*</button>
            <button class="def" @click="def()">/</button>
            <button class="exp" @click="exp()">num<sup>*</sup></button>
            <input type="number" name="op2" v-model.number="second_number">
      </div>

      <span>{{ result }}</span>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
      return {
          first_number: 0,
          second_number: 0, 
          result: 0
      }
  },
  methods: {
      sum() {
          this.result = +this.first_number + +this.second_number;
      },
      dev() {
          this.result = this.first_number - this.second_number;
      },
      mul() {
          this.result = this.first_number * this.second_number;
      },
      def() {
          if (this.second_number == 0) {
              this.result = 'Делитель должен быть больше нуля'
          } else {
              this.result = this.first_number / this.second_number;
          }

      },
      exp() {
          this.result = 1;
          if (this.second_number >= 0) {
                for (let i = 0; i < this.second_number; i++) {
                  this.result *= this.first_number;
              }  
          } else {
              this.result = 'Некорректное значение';
          }
      }
  },  
}
</script>

<style>
    input {
        width: 30px;
        padding: 10px;
        font-size: 17px;
        border: none;
        outline: none;
        border-bottom: 1px solid #ff7777;
        margin: 0 10px;
    }

    button {
        padding: 5px 25px;
        font-size: 17px;
        background-color: blue;
        color: cornsilk;
        height: 60px;
        vertical-align: middle;
        margin: 0 5px;
        cursor: pointer;
    }

    span {
        display: block;
        font-size: 17px;
        color: crimson;
        font-weight: 700;
        margin-top: 70px;
    }
</style>
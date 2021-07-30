<template>
  <div class="calc">
        <div>
            <input type="number" v-model="first_number">
            <button v-for="item in options" :key="item" @click="calculate(item)">{{ item }}</button>
            <input type="number" v-model="second_number">
        </div>
        <p class="error" v-if="error">{{ error }}</p>
        <span>{{ result }}</span>
        <div class="keyboard">
            <input type="checkbox" id="check" @change='isShow = !isShow'>
            <label for="check">Отобразить экранную клавиатуру</label>
            <div class="keyboard-show" v-if="isShow">
                <div class="buttons">
                    <button @click="changeNumber(item)" v-for="item in 10" :key="item">{{ item - 1 }}</button>
                    <button @click="deleteNumber()">&#129044;</button>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="ops" value="first" v-model="value" checked>
                        First number
                    </label>
                    <label>
                        <input type="radio" name="ops" value="second" v-model="value">
                        Second number
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
      return {
          first_number: '',
          second_number: '', 
          result: 0,
          error: '',
          options: ['+', '-', '*', '/'],
          isShow: false,
          value: 'first'
      }
  },
  methods: {
    changeNumber(num) {
        if (this.value === 'first') {
            this.first_number += num - 1;
        } else {
            this.second_number += num - 1;
        }
    },
    deleteNumber() {
        if (this.value === 'first') {
            this.first_number = this.first_number.split('').slice(0, -1).join('');
        } else {
            this.second_number = this.second_number.split('').slice(0, -1).join('');
        }
    },
    calculate(ops) {
        this.error = '';
        switch (ops) {
            case '+':
                this.sum();
                break;
            case '-':
                this.dev();
                break;
            case '*':
                this.mul();
                break;
            case '/':
                this.dif();
                break;
        }
    },
    sum() {
        this.result = +this.first_number + +this.second_number;
    },
    dev() {
        this.result = this.first_number - this.second_number;
    },
    mul() {
        this.result = this.first_number * this.second_number;
    },
    dif() {
        if (this.second_number === 0) {
            this.error = 'На ноль делить нельзя';
        } else {
            this.result = this.first_number / this.second_number;
        }

    },
  },  
}
</script>

<style>
    input[type=number] {
        width: 200px;
        padding: 10px;
        font-size: 20px;
        border: none;
        outline: none;
        border-bottom: 1px solid #ff7777;
        margin: 0 10px;
    }

    button {
        padding: 0 15px;
        font-size: 17px;
        background-color: blue;
        color: cornsilk;
        height: 40px;
        vertical-align: middle;
        margin: 0 5px;
        cursor: pointer;
        border: 1px solid blue;
        outline: none;
        border-radius: 3px;
    }

    span {
        display: block;
        font-size: 27px;
        color: crimson;
        font-weight: 700;
        margin-top: 70px;
    }

    .error {
        color: brown;
        text-transform: uppercase;
    }

    .keyboard {
        margin-top: 30px;
    }

    .keyboard-show {
        margin-top: 30px;
    }

    .radio {
        margin-top: 15px;
    }
</style>
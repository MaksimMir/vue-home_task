<template>
  <div class="display">
      <div class="list">
          <table class="list-table">
              <tr class="list-row">
                  <td class="list-item-header">id</td>
                  <td class="list-item-header">date</td>
                  <td class="list-item-header">category</td>
                  <td class="list-item-header">value</td>
              </tr>
              <tr class="list-row" v-for="(item, id) in list" :key="id">
                  <td class="list-item">{{ id + 1}}</td>
                  <td class="list-item">{{ item.date }}</td>
                  <td class="list-item">{{ item.category }}</td>
                  <td class="list-item">{{ item.value }}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
      list: {
          type: Array,
          default: () => []
      }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
    .display {
        margin: 30px 0;
    }

    .list {
        font-size: 17px;
        &-table {
            border: none;
            border-collapse: collapse;
        }
        &-row {
            border-bottom: 1px solid #a1a1a1;
        }
        &-item {
            padding: 30px 0;
            width: 150px;
            text-align: center;
            &:first-child, &:nth-child(2) {
                text-align: left;
            }
            &-header {
                padding: 10px 0;
                text-transform: uppercase;
                font-weight: 700;
                width: 150px;
                text-align: center;
                &:first-child, &:nth-child(2) {
                    text-align: left;
            }
            }
        }
    }
</style>
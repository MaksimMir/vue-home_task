<template>
    <v-simple-table class="mt-10">
        <template>
            <thead>
                <tr class="text-left">
                    <th class="font-weight-black text-uppercase">#</th>
                    <th class="font-weight-black text-uppercase">date</th>
                    <th class="font-weight-black text-uppercase">category</th>
                    <th class="font-weight-black text-uppercase">value</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, id) in list" :key="id">
                    <td class="list-item">{{ item.id }}</td>
                    <td class="list-item">{{ item.date }}</td>
                    <td class="list-item">{{ item.category }}</td>
                    <td class="list-item">{{ item.value }}</td>
                    <td class="list-item" @click="onContextClick($event, item)">
                        <v-icon small>
                            mdi-pencil
                        </v-icon>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>


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
  },
  methods: {
      onContextClick(evt, item) {

        const elements = [
            {
                text: 'Редактировать',
                actions: () => {item}
            }, 
            {
                text: 'Удалить',
                actions: () => {item}
            }
        ];

        this.$context.show(elements, evt);         
      }
  },
}
</script>


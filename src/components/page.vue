<template>
    <div id="app-page">
      <p>page !! {{ $store.getters.double }}</p>
      <p>page !! {{ double }}</p>

      <input type="text" v-model="typed" @keyup.enter="onEnter">
      <button @click.stop.prevent="onEnter">활성화</button>

        <p>{{ uid }}</p>

        <router-link to="/page/12">가자</router-link>
      
      
        <div 
          v-for="(item, index) in arr" 
          :key="item.id"
          :class="['col-md-12 each', { copied: itemTarget != null && itemTarget.copied == item }]" 
          :draggable="true"
          
          @dragstart.stop="onDragStart(item, index)"
          @dragenter.stop="onDragEnter(item, index)"
          @dragend.stop="onDragEnd(item, index)"
          
        >
          <span>{{ item.name }}</span>
        </div>
      
      

      <component :is="'app-date-selector'">
        <div slot="nested">
            <p>slqqot</p>
        </div>
        
      </component>

      
      
    </div>

    
    
</template>

<script>
import { appMethod } from '../mixins';
import AppDateSelector from './date-selector.vue';
import draggable from 'vuedraggable';
import { uuid } from 'vue-uuid';
import { mapGetters } from 'vuex';
import { allGetters } from '../stores/store';


export default {
  name: "app-page",
  props: {
    uid: {
      type: Number,
      default: 5
    }
  },
  mixins: [ appMethod ],
  data() {
    return {
      typed: '',
      itemTarget: undefined,
      arr: [],
      link: {
        name: 'userEdit',
        params: {
          id: this.$route.params.id
        },
        query: {
          lang: 'en',
          q: 100
        },
        hash: '#data'
      }
    }
  },
  created() {

      // for(let id = 1; id <= 10; id ++) 
      //   this.arr.push({ id, name: id + '회' });
  },
  
  
  
  methods: {
    increment() {
      this.$store.store.counter++;
    }, decrease() {
      this.$store.store.counter--;
    },
    onDragStart(item, index) {
      item.copied = { ...item, isCopied: true, id: this.$uuid.v1() };
      let prev, next;
      this.arr.forEach(iitem => {
        if(item == iitem) return;
        if(next != null) return;
        next = iitem;
        if(item.id >= iitem.id) return;
        prev = iitem;
      })
      item.prev = prev;
      item.next = next;

      this.itemTarget = item;
    },
    onDragEnter(item, index) {
      if(item == this.itemTarget) return;
      if(item == this.itemTarget.copied) return;
      if(item == ( this.itemTarget.prev || this.itemTarget.next )) {
        this.deleteCopied()
        return;
      }

      const targetIdx = this.arr.findIndex((eitem) => eitem.id == this.itemTarget.copied.id);
      if(targetIdx > -1) this.arr.splice(targetIdx, 1);

      this.arr.splice(index, 0, this.itemTarget.copied);
      
      
    },
    onDragEnd(item, index) {
      
      const itemTarget = this.itemTarget;
      const copied = itemTarget.copied;
      const next = itemTarget.next;
      const prev = itemTarget.prev;

      this.itemTarget.copied = undefined;
      this.itemTarget.next = undefined;
      this.itemTarget.prev = undefined;
      this.itemTarget = undefined;

      


      
      
      const targetIdx = this.arr.findIndex(eitem => eitem.id == itemTarget.id);
      this.arr.splice(targetIdx, 1);

      const locIdx = this.deleteCopied();

      this.arr.splice(locIdx, item);

    },

    deleteCopied() {

      if(this.itemTarget == null) return;
      if(this.itemTarget.copeid == null) return;

      const copiedIdx = this.arr.findIndex(eitem => eitem.id == this.itemTarget.copeid.copiedid);
      if(copiedIdx > -1) this.arr.splice(copiedIdx, 1);

      return copiedIdx;
    }
  },
  computed: {
    computedDouble() {
      return this.$store.getters.double;
    },
    ...mapGetters([ 'double' ])
    
    
    
  },

  components: {
    draggable,
    AppDateSelector
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .each {
    padding: 12px;
  }
  
  .copied {
    outline: 1px dotted black;
  }

  .dragged {
    
  }


  

</style>
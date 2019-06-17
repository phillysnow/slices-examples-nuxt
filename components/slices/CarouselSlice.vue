<template>
  <div class='carousel'>
    <transition-group name='fade' tag='div'>
      <div v-for="number in [currentNumber]" :key='number'>
        <div 
          class='item'
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
          >
          <prismic-image class="slider-img" :field="currentItem.image"/>
          <a @click="prev" href='#' class="arrows prev"></a>
          <h4 class="slider-text"> {{ $prismic.richTextAsPlain(currentItem.text) }} </h4>
          <a @click="next" href='#' class="arrows next"></a>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'carousel-slice',
  data: function() {
    return {
      items: this.slice.items,
      currentNumber: 0,
      timer: null
    }
  },
  mounted: function () {
      this.startRotation();
  },
  methods: {
    startRotation: function() {
        this.timer = setInterval(this.next, 3000);
    },
    stopRotation: function() {
        clearTimeout(this.timer);
        this.timer = null;
    },
    next: function() {
        this.currentNumber += 1
    },
    prev: function() {
        this.currentNumber -= 1
    }
  },
  computed: {
    currentItem: function() {
      return this.items[Math.abs(this.currentNumber) % this.items.length];
    }
  }
}
</script>

<style>
.carousel {
  position: relative;
  margin-top: 100px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.8s ease;
  display: block;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  display: none;
}
.item {
  display: flex;
  align-items: center;
}
.arrows {
  color: #eee;
  position: absolute;
  text-shadow: 0.075em 0.08em 0.1em rgba(0, 0, 0, 1);

}
.arrows:hover {
  color: #d4af37;
}
.prev{
  right: 85%;
}
.prev::before {
  content: '\0000AB'
}
.next {
  left: 85%;
}
.next::after {
  content: '\0000BB'
}
.slider-text {
  text-align: center;
  line-height: 40px;
  font-weight: 900;
  font-size: 30px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0.075em 0.08em 0.1em rgba(0, 0, 0, 1);
}
@media screen and (min-width: 320px) {
  .slider-text {
    font-size: calc(30px + 6 * ((100vw - 320px) / 680));
  }
  .arrows {
    font-size: 4em;
  }
}
@media screen and (min-width: 700px) {
  .arrows {
    font-size: 8em;
  }
}
@media screen and (min-width: 1000px) {
  .slider-text {
    font-size: 40px;
  }
}
</style>

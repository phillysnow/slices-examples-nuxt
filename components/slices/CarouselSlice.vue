<template>
  <div class='carousel'>
    <transition-group name='fade' tag='div'>
      <div v-for="number in [currentNumber]" :key='number'>
        <div 
          class='item' 
          :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(' + currentItem.image.url + ')' }"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
          >
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
  margin: 25px 0 50px 0;
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
  width: 100%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  background-position: center center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  justify-content:space-between; 
}
.arrows {
  width: 48px;
  height: 48px;
}
.arrows:hover {
  border-color: #d4af37;
}
.prev{
  border-bottom: 6px solid;
  border-left: 6px solid;
  transform: rotate(45deg);
  margin-left: 25px;
}
.next {
  border-bottom: 6px solid;
  border-left: 6px solid;
  transform: rotate(-135deg);
  margin-right: 25px;
}
.slider-text {
  font-weight: 900;
  font-size: 2em;
  color: #fff;
}
</style>

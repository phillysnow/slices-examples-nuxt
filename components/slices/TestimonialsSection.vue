<template>
  <section class="canvas">
    <prismic-rich-text class="title" :field="slice.primary.title"/>
    <div class="card-carousel-wrapper">
      <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
            <div class="card-carousel--card" v-for="(item, index) in items" :key="'item-' + index">
              <div class="card-carousel--card--footer">
                <div class="box">
                <prismic-image class="slider-img" :alt="item.alt" :field="item.logo_image "/>
                <p class="slider-text"> {{ $prismic.richTextAsPlain(item.paragraph) }} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>
    <prismic-link class="cta" :field="slice.primary.link">
				{{ $prismic.richTextAsPlain(slice.primary.link_text) }}
			</prismic-link>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'testimonials-section',
  data() {
    return {
      items: this.slice.items,
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 442,
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
$vue-navy: #2c3e50;
$vue-navy-light: #3a5169;
$vue-teal: #42b883;
$vue-teal-light: #42b983;
$gray: #666a73;
$light-gray: #f8f8f8;

.canvas{
  height: 80vh;
  margin-top: 100px;
}

.title{
  display: flex;
  justify-content: center;
}

.cta{
  display: flex;
  justify-content: center;
  color: #007AFF;
  font-weight: 700;
}

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: $gray;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 82.1875em; /* 1315px */
  
  &--overflow-container {
    overflow: hidden;
  }
  
  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid $vue-teal;
    border-right: 2px solid $vue-teal;
    cursor: pointer;
    margin: 0 10px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }
  
  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }
  
  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  margin: 5px;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
 
  .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(136,136,136,0.24);
    -moz-box-shadow: 0px 2px 4px 0px rgba(136,136,136,0.24);
    box-shadow: 0px 2px 4px 0px rgba(136,136,136,0.24);
    border: 1px solid #F2F2F2;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;
    
    &:first-child {
      margin-left: 0;
    }
    
    &:last-child {
      margin-right: 0;
    }
    
    img {
      vertical-align: bottom;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      transition: opacity 150ms linear;
      user-select: none;
      padding: 20px 0;
    }
    
    &--footer {
      width: 24.375em; /* 390px */
      height: 326px;
      border-top: 0;
      padding: 7px 15px;

      &:hover {
        opacity: 0.5;
      }
      
      p {
        padding: 3px 0;
        margin: 0;
        margin-bottom: 2px;
        font-size: 19px;
        font-weight: 500;
        color: $vue-navy;
        user-select: none;
        
        &:nth-of-type(2) {
          font-size: 12px;
          font-weight: 300;
          padding: 6px;
          background: rgba(40,44,53,.06);
          display: inline-block;
          position: relative;
          margin-left: 4px;
          color: $gray;
          
          &:before {
            content:"";
            float:left;
            position:absolute;
            top:0;
            left: -12px;
            width:0;
            height:0;
            border-color:transparent rgba(40,44,53,.06) transparent transparent;
            border-style:solid;
            border-width:12px 12px 12px 0;
        }
        
          &:after {
            content:"";
            position:absolute;
            top:10px;
            left:-1px;
            float:left;
            width:4px;
            height:4px;
            border-radius: 2px;
            background: white;
            box-shadow:-0px -0px 0px #004977;
          }
        }
      }
    }
  }
}

.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 40px;
}

.slider-text{
  padding: 40px;
  text-align: center;
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: $vue-teal;
}
</style>

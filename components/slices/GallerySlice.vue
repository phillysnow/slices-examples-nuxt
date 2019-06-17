<template>
  <section id="core">
    <prismic-rich-text :field="slice.primary.gallery_title"/>
    <dl>
      <dt v-for="(item, index) in items" :key="'item-' + index">
        <a :href="'#item-' + index">
          <prismic-image :field="item.image.thumbnail"/>
        </a>
        <dd :id="'item-' + index">
          <a href="#core">
            <prismic-image :field="item.image"/>
            <prismic-rich-text class="caption" :field="item.caption"/>
          </a>
        </dd>
      </dt>
    </dl>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'gallery-slice',
  data: function() {
    return {
      items: ''
    }
  },
  created () {
    this.items = this.slice.items
  }
}
</script>

<style scoped>
@keyframes photopresent { 
	0% { width: 0;  height: 0; opacity: 0;  }
	30% { height: 0; opacity: 0;  }
	60% { height: 600px; opacity: 0; margin: 20px; }
	100% { height: 600px; opacity: 1; margin: 20px; }
}
#core{
  padding: 3% 0;
  margin: 0 auto;
}
dd a { 
  background: #fff; display: inline-block;
  transition: 4s box-shadow ease-in;
}
dl {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
dd { 
  position: absolute;
  left: 0;
  top: 0;
  width: 100%; height: 100%;
  z-index: 2;
  visibility: hidden; 
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: -webkit-fill-available;
}
dd:target {
  visibility: visible;
  background: rgba(0,0,0,0.6);
  transition: .35s background linear;
}
dd:target a { 
  box-shadow: 0 0 8px 8px rgba(0,0,0,0.3); 
}
dd:target a img { 
	animation: photopresent 3s forwards;
}
#core:target dl dd { 
  background: rgba(0,0,0,0); 
  transition: 1.5s background ease-out; 
}
.caption{
  text-align: center;
  margin: 0 50px 0 50px;
}
</style>

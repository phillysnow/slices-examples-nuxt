<template>
  <section class="canvas">
    <div class="intro">
      <h1 class="title"> {{ $prismic.richTextAsPlain(slice.primary.title) }} </h1>
      <p class="paragraph"> {{ $prismic.richTextAsPlain(slice.primary.paragraph) }} </p>
    </div>
    <div class="grid">  
    <div v-for="(item, index) in slice.items" :key="'item-' + index" class="grid-item">
      <prismic-image class="icon-img" :alt="item.alt" :field="item.icon_image "/>
      <h2 class="head"> {{ $prismic.richTextAsPlain(item.head) }} </h2>
      <p class="desc"> {{ $prismic.richTextAsPlain(item.desc) }} </p>
      <input 
        type="button" 
        :value="item.button_label" 
        :onclick="`window.location.href='${item.button_link.url}'`" 
      />
    </div>  
  </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'features-section',
}
</script>

<style lang="scss" scoped>
.canvas{
  height: auto;
  margin: 0 auto;
  width: 80%;
  text-align: center;
}

.intro{
  width: 50%;
  padding: 75px 50px 50px 50px;
  margin: 0 auto;
}

.grid{
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 100%;
  padding-bottom: 100px;
}

.grid-item{
  padding: 0 60px;
  border-right: 1px solid rgba(151, 151, 151, 0.2);
  &:last-child{
    border-right: 0;
  }
}

.head,.desc{
  padding: 5px 0;
  line-height: 24px;
}

.head {
  line-height: 36px;
}

.desc{
  line-height: 24px;
}

input[type=button] {
  background-color: #007AFF;
  color: white;
  text-decoration: none;
  width: 120px;
  height: 52px;
  border: 1px solid rgb(2, 89, 182);
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(136,136,136,0.24);
  -moz-box-shadow: 0px 2px 4px 0px rgba(136,136,136,0.24);
  box-shadow: 0px 2px 4px 0px rgba(136,136,136,0.24);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  &:hover{
    background-color: rgb(2, 89, 182);
    cursor: pointer;
  }
  &:active{
    box-shadow: none;
    top: 5px;
  }
}

@media (max-width: 1200px) {
  .intro{
    width: 70%;
    padding: 75px 0 0 0;
  }
}

@media (max-width: 899px) {
  .intro{
    width: 100%;
    padding: 75px 0 0 0;
  }
  .paragraph {
    margin: 0;
  }
  .grid{
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr 1fr;
    padding-bottom: 0;
  }
  .grid-item{
    padding: 60px 0;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    border-right: 0;
    &:last-child{
      border-bottom: 0;
    }
  }
  input[type=button]{
    width: 278px;
  }
}
</style>

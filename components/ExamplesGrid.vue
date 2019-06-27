<template>
  <section>
    <div class="filterbar">
      <ul>
        <li>
          <label>
            <input v-model="selected" :value="tags[0]" type="checkbox">
            ALL
          </label>
        </li>
        <li v-for="(tag, index) in tags" :key="'tag-' + index">
          <label>
            <input v-model="selected" :value="tag" type="checkbox">
            {{ tag }}
          </label>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="auto-grid">
        <div v-for="example in filteredExamples" :key="example.id">
          <router-link :to="linkResolver(example)">
            <div class="example">
              <div class="box" :style="{ backgroundColor: example.data.bgclr}">
                <prismic-image style="width:90%;" class="main-img" :field="example.data.bgimg"/>
              </div>
              <h3>{{ $prismic.richTextAsPlain(example.data.title) }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['examples'],
  name: 'examples-grid',
  data() {
    return {
      linkResolver: this.$prismic.linkResolver,
      tags: null,
      selected:[]
    }
  },
  created() {
    this.tags = this.getTags()
  },
  computed:{
    filteredExamples(){
      return this.examples.filter(example => {
        let valid = true
        this.selected.forEach(selected => {
          if (example.tags.indexOf(selected) === -1) {
            valid = false
          }
        })
        return valid
      })
    }
  },
  methods: {
    getTags() {
      const unique = this.examples.map(function (example) {
        return example.tags;
      });
      const merged = [].concat.apply([], unique);
      const tags = merged.filter(function(item, index){
        return merged.indexOf(item) >= index;
      });
      return(tags)
    }
  }
}
</script>

<style scoped>
.filterbar {
  width: 100vw;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
  background: #fff;
  font-size: 14px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  border: 1px rgba(0,0,0,0.07) solid;
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  margin-bottom: 50px;
  padding: 20px 30px;
}
.filterbar ul {
  text-align: center;
  margin: 0;
}
.filterbar li {
  display: inline-block;
  margin: 0 5px;
  padding: 0 5px;
  color: #757575;
  padding: 10px 12px;
  border-radius: 7px;
  line-height: 1;
  display: inline-block;
  -webkit-transition: all .1s ease-in-out;
  transition: all .1s ease-in-out;
}
.filterbar li:hover {
  background-color: #E3EEF5;
  color: #3A8BBB;
  cursor: pointer;
}
.filterbar li:active {
  background-color: #E3EEF5;
  color: #3A8BBB;
  font-weight: 500;
  cursor: pointer;
}
.auto-grid {
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
}
.example{
  background: #fff;
  border-radius: 2px;
  border: 1px rgba(0,0,0,0.07) solid;
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  padding: 10px;
}
.box {
  min-height: 250px;
  display: inline-grid;
  align-content: center;
  justify-items: center;
  background-position: center center;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}
.example:hover {
  -webkit-box-shadow: -2px 10px 15px rgba(78, 78, 78, 0.07);
  box-shadow: -2px 10px 15px rgba(78, 78, 78, 0.07);
}
</style>
<template>
  <section class="block">
    <button @click="doCopy">{{ btntext }}</button>
    <prism :language="slice.primary.lang">{{ $prismic.richTextAsPlain(slice.primary.code) }}</prism>
  </section>
</template>

<script>
import NuxtClipboard from 'nuxt-clipboard2'

export default {
  props: ['slice'],
  name: 'code-slice',
  data() {
    return {
      btntext: null
    }
  },
  created () {
    this.code = this.slice.primary.code
    this.btntext = 'Copy'
  },
  methods: {
    doCopy: function () {
      this.$copyText(this.code[0].text).then(function (e) {
        console.log('copied')
      }, 
      function (e) {
        this.btntext = 'Can not be Copied!';
      })
      this.btntext = 'Copied!'
      setTimeout(function () {
        console.log("test");
        this.btntext = "Copy";
      }.bind(this), 2000);
    }
  }
}
</script>

<style scoped>
.block {
  margin: 50px 0 50px 0;
}
button {
  position: relative;
  margin-bottom: 0;
  background-color: #2C2C2C;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  transition: all 200ms ease
}
button:hover {
  color: gray;
  transform: translate(0, -10%)
}
pre {
  margin-top: -10px;
  border-radius: 5px;
}
</style>
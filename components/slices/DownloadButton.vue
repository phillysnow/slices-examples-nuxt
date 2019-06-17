<template>
  <div class="content-section">
    <a :href="link.url" class="button" :download="slice.primary.file_name">
      {{ slice.primary.button_text }}
    </a>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'download-button',
  data: function() {
    return {
      link: ''
    }
  },
  created () {
    this.link = this.slice.primary.button_link
  }
}
</script>


<style scoped>
.button {
  background-color: #000;
  color: white;
  padding: 1em 1.5em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 350px;
  height: 30px;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
}

.button:hover {
  background-color: #757575;
  cursor: pointer;
}

.button:active {
  box-shadow: none;
  top: 5px;
}
</style>

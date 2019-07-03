<template>
  <div class="content-section container">
    <a @click="downloadComponent" class="button">
      {{ slice.primary.button_text }}
    </a>
  </div>
</template>  

<script>
import axios from "axios";

export default {
  props: ['slice'],
  name: 'download-button',
  data() {
    return {
      url: this.slice.primary.button_link.url
    }
  },
  methods: {

    forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', this.url.substring(this.url.lastIndexOf('/') + 1))
      document.body.appendChild(link);
      link.click();
    },

    downloadComponent(url) {
      axios({
        method: 'get',
        url: this.url,
        responseType: 'arraybuffer',
      })
      .then(response => {
        this.forceFileDownload(response)
      })
      .catch((error) => {
        console.error(error);
      })
    }
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
  width: 100%;
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

<template>
  <header class="site-header">
    <section class="wrapper">
      <nuxt-link to="/" class="logo">
        Examples
      </nuxt-link>
      <nav>
        <ul>
          <li v-for="menuLink in menuLinks" :key="menuLink.id">
            <prismic-link :field="menuLink.link">
              {{ $prismic.richTextAsPlain(menuLink.label) }}
            </prismic-link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  props: ['menuLinks'],
  name: 'header-prismic'
}
</script>

<style>
/* Site header */
.site-header {
  padding: 50px 0 50px;
  margin: 0 0 50px 0;
  background-color: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.site-header,
.site-header a {
  color: #484d52;
  font-weight: 700;
}
.site-header nav a:hover {
  color: #72767B;
}
.homepage .site-header nav a:hover {
  color: #c8c9cb;
}
.site-header .logo {
  display: inline-block;
  font-size: 22px;
  font-weight: 900;
}
.site-header nav {
  float: right;
}
.site-header nav ul {
  margin: 0;
}
.site-header nav li {
  display: inline-block;
  margin-left: 40px;
}

.wrapper {
  margin: 0 auto;
  width: 80%;
}

/* Media Queries */
@media (max-width: 1060px) {
  .site-header {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (max-width: 767px) {
  .site-header {
    height: auto;
    padding: 50px 0;
  }
  .homepage .site-header {
    position: absolute;
    left: 0;
    right: 0;
  }
  .site-header .logo {
    display: block;
    text-align: center;
  }
  .site-header nav {
    float: none;
    text-align: center;
  }
  .site-header nav ul {
    padding: 15px 0;
  }
  .site-header nav li {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>

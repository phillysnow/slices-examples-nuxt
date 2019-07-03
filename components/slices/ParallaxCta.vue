<template>
	<div class="parallax" :class="`${slice.primary.height}`" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${slice.primary.image_banner.url})`, textAlign: `${slice.primary.text_align}`}">
		<div class="container">
			<prismic-rich-text class="bnrtxt" :field="slice.primary.title_of_banner"/>
			<prismic-rich-text class="bnrdesc" :field="slice.primary.description"/>
			<prismic-link class="button" :field="slice.primary.button_link">
				{{ slice.primary.button_label }}
			</prismic-link>
		</div>
	</div>
</template>

<script>
export default {
	props: ['slice'],
	name: 'parallax-cta',
}
</script>

<style>
.parallax {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
	margin-bottom: 50px;
  position: relative;
}
.full {
	height: 100vh;
	padding: 100px 0;
	background-position: bottom;
}
.full::before {
  content: " ";
  display: inline-block;
  height: 25%;
  width: 1%;
  vertical-align: middle;
}
.small {
	height: 25vh;
	padding: 100px 0;
	background-position: center;
}
.bnrtxt {
	color: white;
  font-size: 32px;
  font-weight: 700;
	letter-spacing: 0.85px;
	margin-bottom: 1rem;
	line-height: 42px;
}
.bnrdesc {
	color: white;
}
.button {
  background-color: #5163BA;
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
  background-color: #6f7cbb;
  cursor: pointer;
}
.button:active {
  box-shadow: none;
  top: 5px;
}
@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>

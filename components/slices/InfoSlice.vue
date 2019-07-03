<template>
	<div class="container">
  	<prismic-rich-text class="modeling-more-info" :field="slice.primary.text"/>
	</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'info-slice'
}
</script>

<style>
.modeling-more-info {
    margin-bottom: 2em;
    margin-top: 1em;
    padding: 1em 1.2em 0.4em 1.2em;
    background: #EAF4FB;
    box-shadow: inset 4px 0 0 0 #B3DDFA;
}
.modeling-more-info h4 {
    margin: 0 !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    color: #3E4D57 !important;
}
.modeling-more-info p, .modeling-more-info pre {
    color: #3E4D57;
    font-size: 14px !important;
}
.modeling-more-info a {
    color: #4d92ce;
    text-decoration: none;
}
.modeling-more-info h4:first-of-type:before {
    content: '!';
    font-size: 14px;
    color: #3E4D57;
    text-align: center;
    background-color: #B3DDFA;
    border-radius: 50%;
    line-height: 20px;
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    top: 0px;
    margin-right: 10px;
}
</style>

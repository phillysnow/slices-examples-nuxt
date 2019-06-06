<template>
    <div class="table-of-contents">
    <h3>Table of Contents</h3>
    <ul>
        <il class="headingSection">
        <a href="#">
            {{ $prismic.richTextAsPlain(title) }}
        </a>
        </il>
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
        <template v-if="slice.slice_type === 'text_section'">
            <section v-for="(element, index) in slice.primary.rich_text" :key="'element-' + index">
            <template v-if="element.type === 'heading2'">
                <li class="headingSection">
                <a :href="'#' + element.text.replace(/\W+/g, '-').toLowerCase()">
                    {{ element.text }}
                </a>
                </li>
            </template>
            <template v-if="element.type === 'heading3'">
                <li class="headingParagraph">
                <a :href="'#' + element.text.replace(/\W+/g, '-').toLowerCase()">
                    {{ element.text }}
                </a>
                </li>
            </template>
            </section>
        </template>
        </section>
    </ul>
    </div>
</template>

<script>
export default {
    props: ['title', 'slices'],
    name: 'toc-slice',
    created: function () {

    }
}
</script>

<style>
.table-of-contents {
  position: sticky;
  top: 0;
  width: 25%;
  right: 5%;
  height: 100%;
  padding: 25px;
}
.table-of-contents ul li.headingParagraph {
  padding-left: 15px;
}
</style>
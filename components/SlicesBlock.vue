<template>
    <section>
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <!-- Slider slice component -->
            <template v-if="slice.slice_type === 'image_carousel'">
                <carousel-slice :slice="slice"/>
            </template>
            <!-- Quote slice component -->
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice"/>
            </template>
            <!-- Gallery slice component -->
            <template v-else-if="slice.slice_type === 'image_gallery'">
                <gallery-slice :slice="slice"/>
            </template>
            <!-- Text slice component -->
            <template v-else-if="slice.slice_type === 'text_section'">
                <text-slice :slice="slice"/>
            </template>
            <!-- Button slice component -->
            <template v-else-if="slice.slice_type === 'button'">
                <button-slice :slice="slice"/>
            </template>
            <!-- Download Button slice component -->
            <template v-else-if="slice.slice_type === 'download_button'">
                <download-button :slice="slice"/>
            </template>
            <!-- Code slice component -->
            <template v-else-if="slice.slice_type === 'code_snippet'">
                <code-slice :slice="slice"/>
            </template>
            <!-- Info slice component -->
            <template v-else-if="slice.slice_type === 'more_info'">
                <info-slice :slice="slice"/>
            </template>
            <!-- Embed slice component -->
            <template v-else-if="slice.slice_type === 'embed'">
                <embed-slice :slice="slice"/>
            </template>
        </section>
    </section>
</template>

<script>
// Imports for all slices
const CarouselSlice = () => import("../components/slices/CarouselSlice.vue");
const QuoteSlice = () => import("../components/slices/QuoteSlice.vue");
const GallerySlice = () => import("../components/slices/GallerySlice.vue");
const TextSlice = () => import("../components/slices/TextSlice.vue");
const ButtonSlice = () => import("../components/slices/ButtonSlice.vue");
const DownloadButton = () => import("../components/slices/DownloadButton.vue");
const CodeSlice = () => import("../components/slices/CodeSlice.vue");
const InfoSlice = () => import("../components/slices/InfoSlice.vue");
const EmbedSlice = () => import("../components/slices/EmbedSlice.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    CarouselSlice,
    QuoteSlice,
    GallerySlice,
    TextSlice,
    ButtonSlice,
    DownloadButton,
    CodeSlice,
    InfoSlice,
    EmbedSlice
  },
}
</script>
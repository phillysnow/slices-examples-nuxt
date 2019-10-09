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
            <!-- title slice component -->
            <template v-else-if="slice.slice_type === 'title'">
                <title-slice :slice="slice"/>
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
            <!-- Parallax slice component -->
            <template v-else-if="slice.slice_type === 'banner_with_caption'">
                <parallax-cta :slice="slice"/>
            </template>
            <!-- Testimonials slice component -->
            <template v-else-if="slice.slice_type === 'testimonials'">
                <testimonials-section :slice="slice"/>
            </template>
            <!-- Features section slice component -->
            <template v-else-if="slice.slice_type === 'features_section'">
                <features-section :slice="slice"/>
            </template>
            <!-- Hero section slice component -->
            <template v-else-if="slice.slice_type === 'hero_section'">
                <hero-section :slice="slice"/>
            </template>
            <!-- CTA section slice component -->
            <template v-else-if="slice.slice_type === 'call_to_action'">
                <call-to-action :slice="slice"/>
            </template>
            <!-- Graphic section slice component -->
            <template v-else-if="slice.slice_type === 'graphic_section'">
                <graphic-section :slice="slice"/>
            </template>
            <!-- Video section slice component -->
            <template v-else-if="slice.slice_type === 'video_carousel_section'">
                <video-carousel :slice="slice"/>
            </template>
        </section>
    </section>
</template>

<script>
// Imports for all slices
const CarouselSlice = () => import("../components/slices/CarouselSlice.vue");
const QuoteSlice = () => import("../components/slices/QuoteSlice.vue");
const GallerySlice = () => import("../components/slices/GallerySlice.vue");
const TitleSlice = () => import("../components/slices/TitleSlice.vue");
const TextSlice = () => import("../components/slices/TextSlice.vue");
const ButtonSlice = () => import("../components/slices/ButtonSlice.vue");
const DownloadButton = () => import("../components/slices/DownloadButton.vue");
const CodeSlice = () => import("../components/slices/CodeSlice.vue");
const InfoSlice = () => import("../components/slices/InfoSlice.vue");
const EmbedSlice = () => import("../components/slices/EmbedSlice.vue");
const ParallaxCta = () => import("../components/slices/ParallaxCta.vue");
const TestimonialsSection = () => import("../components/slices/TestimonialsSection.vue");
const FeaturesSection = () => import("../components/slices/FeaturesSection.vue");
const HeroSection = () => import("../components/slices/HeroSection.vue");
const CallToAction = () => import("../components/slices/CallToAction.vue");
const GraphicSection = () => import("../components/slices/GraphicSection.vue");
const VideoCarousel = () => import("../components/slices/VideoCarousel.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    CarouselSlice,
    QuoteSlice,
    GallerySlice,
    TitleSlice,
    TextSlice,
    ButtonSlice,
    DownloadButton,
    CodeSlice,
    InfoSlice,
    EmbedSlice,
    ParallaxCta,
    TestimonialsSection,
    FeaturesSection,
    HeroSection,
    CallToAction,
    GraphicSection,
    VideoCarousel
  },
}
</script>
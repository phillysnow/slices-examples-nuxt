<template>
    <section>
        <div class="zap-slideout" :class="{ isOpen: isOpen }">
            <div :class="icon" @click="toggle">{{openerText}}</div>
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
                    <!-- <template v-if="element.type === 'heading3'">
                        <li class="headingParagraph">
                        <a :href="'#' + element.text.replace(/\W+/g, '-').toLowerCase()">
                            {{ element.text }}
                        </a>
                        </li>
                    </template> -->
                    </section>
                </template>
                </section>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'slices'],
    name: 'toc-slice',
    data: () => ({
        openerText: '\u2630 Table of Contents',
        isOpen: false,
        icon: "zap-slideout-opener"
    }),
    methods: {
        open() {
        this.openerText = '\u00D7';
        this.isOpen = true;
        this.icon = "zap-slideout-closer";
        },
        close() {
        this.openerText = '\u2630 Table of Contents';
        this.isOpen = false;
        this.icon = "zap-slideout-opener";
        },
        toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
        }
    }
}
</script>

<style scoped>
h3 {
    color: #fff;
}

a {
    color: #fff;
}

ul {
    padding: 0;
}

li {
    list-style: none;
}

.zap-slideout {
  position: fixed;
  right: 0;
  width: 240px;
  height: 100vh;
  padding: 30px;
  background-color: rgba(48, 48, 48, 0.8);
  transform: translateX(100%);
  transition: transform 0.6s ease(out-cubic);
  z-index: 100;
  transition: 0.3s;
  color: #fff;
}

.zap-slideout.isOpen{
  transform: translateX(0);
  transition: 0.5s;
}

.zap-slideout-opener {
  position: absolute;
  top: 20px;
  right: 100%;
  margin-right: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  font-size: xx-large;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.zap-slideout-closer {
  position: absolute;
  top: 10px;
  right: 0;
  margin-right: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  font-size: xx-large;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.zap-slideout-opener:hover {
  text-decoration: underline;

}
</style>
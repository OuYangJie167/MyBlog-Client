<template>
    <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="carousel-img" ref="image" :style="imagePosition">
            <ImageLoad @load="showWords" :src="carousel.bigImg" :placeholder="carousel.midImg" :duration="1500" />
        </div> 
        <h3 class="title" ref="title">{{ carousel.title }}</h3>
        <p class="desc" ref="desc">{{ carousel.description }}</p>
    </div>
</template>

<script>
import ImageLoad from "@/components/ImageLoad/index.vue";
export default {
    props: ["carousel"],
    components: {
        ImageLoad,
    },
    data() {
        return {
            titleWidth: 0, // 标题宽度
            descWidth: 0, // 副标题宽度
            containerSize: null, // 外层容器的尺寸
            innerSize: null, // 里层图片的尺寸
            mouseY: 0, // 鼠标Y轴
            mouseX: 0 // 鼠标S粥
        }
    },
    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;

        this.setSize();
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        window.addEventListener("resize", this.setSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.setSize);
    },
    methods: {
        // 文字动画
        showWords() {
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            this.$refs.title.style.clientWidth;
            this.$refs.title.style.transition = '1s';
            this.$refs.title.style.width = this.titleWidth + "px";

            
            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            this.$refs.desc.style.clientWidth;
            this.$refs.desc.style.transition = '2s 1s';
            this.$refs.desc.style.width = this.descWidth + "px";
        },
        setSize() {
            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            }

            this.innerSize = {
                width: this.$refs.image.clientWidth,
                height: this.$refs.image.clientHeight,
            }
        },
        // 鼠标事件
        handleMouseMove(e) {
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseY = e.clientY - rect.top;
            this.mouseX = e.clientX - rect.left;
        },
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        },
    },
    computed: {
        imagePosition() {
            if(!this.innerSize || !this.containerSize) {
                return {};
            }
            const extraWidth = this.innerSize.width - this.containerSize.width; // 多出来的宽度
            const extraHeight = this.innerSize.height - this.containerSize.height; // 多出来的高度
            
            const left = (-extraWidth / this.containerSize.width) * this.mouseX;
            const top = (-extraHeight / this.containerSize.height) * this.mouseY;

            return {
                transform: `translate(${left}px, ${top}px)`
            }
        },
        center() {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2,
            }
        }
    }
}
</script>

<style scoped lang="less"> 
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.carousel-item-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .carousel-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 110%;
        height: 110%;
        transition: .3s;
    }

    .title,
    .desc {
        .self-center();
        left: 30px;
        transform: translateX(0);
        color: #fff;
        opacity: 0;
        text-shadow: 1px 0 0 rgb( 0, 0, 0, 0.5),
                    0px 1px 0 rgb( 0, 0, 0, 0.5),
                    -1px 0 0 rgb( 0, 0, 0, 0.5),
                    0 -1px 0 rgb( 0, 0, 0, 0.5);
        letter-spacing: 2px;
        white-space: nowrap;
        overflow: hidden;
    }

    .title {
        top: calc(50% - 40px);
        font-size: 2em;
        letter-spacing: 6px;
    }

    .desc {
        top: calc(50% + 20px);


        font-size: 1.2em;
    }
}
</style>
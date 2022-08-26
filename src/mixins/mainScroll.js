export default function(refValue) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleSelect);
        }, 
        beforeDestroy() {
            this.$bus.$emit("mainScroll", null);
            this.$refs[refValue].removeEventListener("scroll", this.handleSelect);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },
        methods: {
            handleSelect() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            handleSetMainScroll(scrollTop) {
              this.$refs[refValue].scrollTop = scrollTop;
            }
        }
    }
}
export default function (defautDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defautDataValue
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}
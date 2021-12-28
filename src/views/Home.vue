<template>
    <Header />
    <Banner />
    <Service />
    <Pricing />
    <Footer />
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
import Banner from "./layouts/Banner.vue";
import Service from "./layouts/Service.vue";
import Pricing from "./layouts/Pricing.vue";

export default {
    name: "Home",
    components: {
        Header,
        Footer,
        Banner,
        Service,
        Pricing
    },
    beforeCreate() {
        this.$store.commit('initialiseStore');
    }
};
</script>
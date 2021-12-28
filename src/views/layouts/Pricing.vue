<template>
    <section id="pricing" class="css-5a2xxx">
        <div class="css-1yxrvuu">
            <div class="css-249jpg">
                <p class="css-1crervx">Price list</p>
                <h2 class="css-12z9bd6">Bảng giá dịch vụ</h2>
            </div>
            <div class="css-5igbqq">
                <div class="active css-5r7xs9" v-for="service of mainServices" :key="service.id">
                    <div class="css-vurnku">
                        <div class="css-1uv2t23">
                            <div class="css-17q98">
                                <span class="text-2xl font-extrabold text-green-300 sm:pr-12">{{ service.name }}</span>
                            </div>
                        </div>
                        <ul class="css-146a2l4">
                            <li
                                class="closed css-jz4eht"
                                v-for="packageService of service.package_services"
                                :key="packageService.id"
                            >
                                <div class="css-4v50qp">
                                    <button aria-label="list icon" class="css-ryi24">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 512 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"
                                            />
                                        </svg>
                                    </button>
                                    <div class="css-vurnku">
                                        <div class="css-1vdepfj">{{ packageService.name }}</div>
                                        <div class="css-1fck1av">
                                            <div class="package__price css-1x8idnp">
                                                <div class="price">
                                                    <span>{{ packageService.price }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="css-vurnku"></div>
                                    </div>
                                </div>
                                <div class="css-1pwm4hx">
                                    <div class="package__price css-1x8idnp">
                                        <div class="price price-custom">
                                            <span>{{ packageService.price }}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import RequestFactory from "../../requests/RequestFactory.js";

const MainServiceRequest = RequestFactory.get("mainService");

export default {
    name: "Pricing",
    data() {
        return {
            mainServices: [],
        }
    },
    created() {
        this.getMainServices();
    },
    methods: {
        async getMainServices() {
            try {
                const response = await MainServiceRequest.getMainServices();
                this.mainServices = await response.data.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {

    }
};
</script>
<style>
.css-zb0hob {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

@media screen and (min-width: 768px) {
    .css-zb0hob {
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
}
.css-5igbqq {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

@media screen and (min-width: 768px) {
    .css-5igbqq {
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
}
.css-5r7xs9 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    padding: 10px;
    border-radius: 4px;
    -webkit-flex: 0 1 100%;
    -ms-flex: 0 1 100%;
    flex: 0 1 100%;
    background: #47c038f2;
    border-radius: 10px;
    margin-left: 0;
    position: relative;
    margin-top: 40px;
    padding: 50px 15px 50px;
}

@media screen and (min-width: 640px) {
    .css-5r7xs9 {
        padding: 62px 25px 50px 25px;
    }
}

@media screen and (min-width: 768px) {
    .css-5r7xs9 {
        -webkit-flex: 0 1 50%;
        -ms-flex: 0 1 50%;
        flex: 0 1 50%;
        margin-left: 25px;
        margin-top: 0;
    }
}

@media screen and (min-width: 1024px) {
    .css-5r7xs9 {
        -webkit-flex: 0 1 45%;
        -ms-flex: 0 1 45%;
        flex: 0 1 45%;
        padding: 62px 30px 50px 30px;
    }
}

@media screen and (min-width: 1220px) {
    .css-5r7xs9 {
        -webkit-flex: 0 1 40%;
        -ms-flex: 0 1 40%;
        flex: 0 1 40%;
    }
}

@media screen and (min-width: 1366px) {
    .css-5r7xs9 {
        -webkit-flex: 0 1 38.5%;
        -ms-flex: 0 1 38.5%;
        flex: 0 1 38.5%;
    }
}

@media screen and (min-width: 420px) and (max-width: 767px) {
    .css-5r7xs9 {
        max-width: 380px;
    }
}

.css-5r7xs9:first-of-type {
    margin-left: 0;
    margin-top: 0;
}

.css-5r7xs9.active {
    background-color: white;
}

.css-5r7xs9.active .package__name {
    color: var(--theme-ui-colors-heading_secondary, #4d515c);
}

.css-5r7xs9.active .package__price > span {
    color: var(--theme-ui-colors-text, #343d48);
}

.css-5r7xs9.active .open {
    color: var(--theme-ui-colors-text, #343d48);
}

.css-5r7xs9.active .closed {
    color: var(--theme-ui-colors-text, #343d48);
    opacity: 0.6;
}
.css-1uv2t23 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    margin-bottom: 35px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 1220px) {
    .css-1uv2t23 {
        margin-bottom: 50px;
    }
}
.css-17q98 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.css-jz4eht {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 15px;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 480px) {
    .css-jz4eht {
        margin-bottom: 22px;
    }
}

@media screen and (min-width: 640px) {
    .css-jz4eht {
        line-height: 1.65;
    }
}

@media screen and (min-width: 1024px) {
    .css-jz4eht {
        font-size: 16px;
    }
}

.css-jz4eht.closed {
    opacity: 0.55;
}

.css-jz4eht.closed button {
    color: #47c038f2;
}

.css-jz4eht.closed .price-custom {
    color: #47c038f2 !important;
}
.css-4v50qp {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.css-ryi24 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 5px;
    width: 32px;
    height: 32px;
    color: inherit;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    width: 25px;
    height: auto;
    color: white;
    padding: 0;
    font-size: 16px;
    margin-left: -1px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-top: 8px;
}

@media screen and (min-width: 480px) {
    .css-ryi24 {
        width: 35px;
        font-size: 22px;
        margin-top: 5px;
    }
}
.css-1vdepfj {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-weight: 600;
    font-size: 18px;
}
.css-1fck1av {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    margin-left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 1220px) {
    .css-1fck1av {
        display: none;
    }
}
.css-1x8idnp {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.7;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
    color: #0f2137;
    margin-bottom: 0;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: right;
    margin-top: -3px;
}

@media screen and (min-width: 640px) {
    .css-1x8idnp {
        font-size: 18px;
        line-height: 1.4;
        margin-top: 2px;
    }
}

@media screen and (min-width: 1024px) {
    .css-1x8idnp {
        font-size: 18px;
    }
}

.css-1x8idnp > span {
    font-weight: normal;
    font-size: 15px;
    line-height: 1.25;
    display: block;
    margin-bottom: 10px;
    color: white;
}

@media screen and (min-width: 480px) {
    .css-1x8idnp > span {
        font-size: 16px;
    }
}

.css-1x8idnp > .price {
    margin-bottom: 0;
    color: white;
}

.css-1x8idnp > .price > sub {
    position: relative;
    bottom: 6px;
}
.css-65w75 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-size: 12px;
}
.css-1pwm4hx {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    margin-left: 0;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    display: none;
}

@media screen and (min-width: 1220px) {
    .css-1pwm4hx {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
}
.css-1s9syq5 {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: #4d515c;
    color: white;
}

@media screen and (min-width: 640px) {
    .css-1s9syq5 {
        padding-top: 100px;
        padding-bottom: 100px;
    }
}

@media screen and (min-width: 1220px) {
    .css-1s9syq5 {
        padding-top: 120px;
        padding-bottom: 120px;
    }
}
</style>
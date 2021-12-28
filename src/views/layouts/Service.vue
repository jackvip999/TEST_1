<template>
    <section id="service" class="css-tkp5t8">
        <div class="css-1yxrvuu">
            <div class="css-249jpg">
                <p class="css-1crervx">Blockchain services</p>
                <h2 class="css-12z9bd6">Dịch vụ cung cấp</h2>
            </div>
            <div class="flex flex-row max-w-screen-lg mx-auto">
                <div class="basis-1/4 mx-auto" v-for="service in mainServices" :key="service.id">
                    <button
                        type="submit"
                        :class="getButton()"
                        @click="setMainService(service.id)"
                    >{{ service.name }}</button>
                </div>
            </div>
        </div>
        <div class="hidden">
            <div class="bg-cyan-500"></div>
            <div class="bg-blue-500"></div>
            <div class="bg-indigo-500"></div>
            <div class="bg-sky-500"></div>
            <div class="bg-red-500"></div>
            <div class="bg-orange-500"></div>
            <div class="bg-yellow-500"></div>
            <div class="bg-lime-500"></div>
            <div class="bg-green-500"></div>
            <div class="bg-emerald-500"></div>
            <div class="bg-violet-500"></div>
        </div>
        <figure
            class="m-6 md:flex mx-auto bg-gray-100 rounded-xl p-8 md:p-6 dark:bg-gray-800 max-w-screen-lg"
        >
            <img
                class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                :src="imageService"
                :alt="titleService"
                width="384"
                height="512"
            />
            <div class="md:p-8 text-center md:text-left space-y-4">
                <figcaption class="font-medium">
                    <div class="text-gray-700 dark:text-gray-500">Đặc điểm nổi bật của</div>
                    <div class="text-sky-500 dark:text-sky-400">{{ titleService }}</div>
                </figcaption>
                <blockquote>
                    <p class="text-lg font-medium">{{ contentService }}</p>
                </blockquote>
            </div>
        </figure>
    </section>
</template>

<script>

import RequestFactory from "../../requests/RequestFactory.js";

const MainServiceRequest = RequestFactory.get("mainService");

const URL_TEST_IMAGE = 'http://hire.test/storage/images/test/';
let COLORS_COPY = ['cyan', 'blue', 'indigo', 'sky', 'red', 'orange', 'yellow', 'lime', 'green', 'emerald', 'violet'];
let COLORS = ['cyan', 'blue', 'indigo', 'sky', 'red', 'orange', 'yellow', 'lime', 'green', 'emerald', 'violet'];

export default {
    name: "Service",
    data() {
        return {
            mainServices: [],
            imageService: "",
            contentService: "",
            titleService: "",
            service_id: 0
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
                this.setMainService(1);
            } catch (error) {
                console.log(error);
            }
        },
        setMainService(id) {
            COLORS = COLORS_COPY;
            const service = this.mainServices.find(service => service.id === id);
            this.imageService = URL_TEST_IMAGE + service?.medium.name;
            this.contentService = service.description;
            this.titleService = service.name;
            this.service_id = id;
        },
        randomColor() {
            const random = Math.floor(Math.random() * COLORS.length);
            const colorRandom = COLORS[random];
            COLORS = COLORS.filter(color => color !== colorRandom);
            return colorRandom;
        },
        getButton() {
            this.color = this.randomColor();
            const classCustom = `mt-10 w-full bg-${this.color}-500 shadow-lg shadow-${this.color}-500/50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-${this.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${this.color}-500`;
            return classCustom;
        }
    },
    computed: {

    }
};
</script>

<style>
.css-1yxrvuu {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    max-width: container;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
}

@media screen and (min-width: 480px) {
    .css-1yxrvuu {
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media screen and (min-width: 768px) {
    .css-1yxrvuu {
        max-width: 780px;
    }
}

@media screen and (min-width: 1024px) {
    .css-1yxrvuu {
        max-width: 1020px;
    }
}

@media screen and (min-width: 1220px) {
    .css-1yxrvuu {
        max-width: 1200px;
    }
}

@media screen and (min-width: 1620px) {
    .css-1yxrvuu {
        max-width: 1310px;
    }
}
.css-249jpg {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: -5px;
    margin-bottom: 50px;
}

@media screen and (min-width: 640px) {
    .css-249jpg {
        margin-bottom: 60px;
    }
}

@media screen and (min-width: 1024px) {
    .css-249jpg {
        margin-bottom: 65px;
    }
}

@media screen and (min-width: 1220px) {
    .css-249jpg {
        margin-bottom: 75px;
    }
}

.css-249jpg title {
    font-size: 24px;
    color: var(--theme-ui-colors-heading_secondary, #4d515c);
    line-height: 1.3;
    text-align: center;
    font-weight: 700;
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
}

@media screen and (min-width: 640px) {
    .css-249jpg title {
        font-size: 28px;
    }
}

@media screen and (min-width: 768px) {
    .css-249jpg title {
        line-height: 1.2;
    }
}

@media screen and (min-width: 1220px) {
    .css-249jpg title {
        font-size: 32px;
    }
}

@media screen and (min-width: 1620px) {
    .css-249jpg title {
        font-size: 36px;
    }
}

.css-249jpg subTitle {
    font-size: 12px;
    color: var(--theme-ui-colors-heading, #47c038f2);
    text-align: center;
    -webkit-letter-spacing: 1.5px;
    -moz-letter-spacing: 1.5px;
    -ms-letter-spacing: 1.5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1.5;
}

@media screen and (min-width: 640px) {
    .css-249jpg subTitle {
        font-size: 14px;
        -webkit-letter-spacing: 2px;
        -moz-letter-spacing: 2px;
        -ms-letter-spacing: 2px;
        letter-spacing: 2px;
    }
}
.css-1crervx {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-size: 12px;
    color: var(--theme-ui-colors-heading, #47c038f2);
    text-align: center;
    -webkit-letter-spacing: 1.5px;
    -moz-letter-spacing: 1.5px;
    -ms-letter-spacing: 1.5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1.5;
    opacity: 1;
}

@media screen and (min-width: 640px) {
    .css-1crervx {
        font-size: 14px;
        -webkit-letter-spacing: 2px;
        -moz-letter-spacing: 2px;
        -ms-letter-spacing: 2px;
        letter-spacing: 2px;
    }
}
.css-12z9bd6 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-family: "Roboto", "Lato", "DM Sans", sans-serif;
    font-weight: 500;
    line-height: 1.5;
    font-family: "Roboto", "Lato", "DM Sans", sans-serif;
    line-height: 1.5;
    font-weight: 500;
    font-size: 20px;
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
    color: var(--theme-ui-colors-heading, #47c038f2);
    font-size: 24px;
    color: var(--theme-ui-colors-heading_secondary, #4d515c);
    line-height: 1.3;
    text-align: center;
    font-weight: 700;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
}

@media screen and (min-width: 640px) {
    .css-12z9bd6 {
        font-size: 28px;
    }
}

@media screen and (min-width: 768px) {
    .css-12z9bd6 {
        line-height: 1.2;
    }
}

@media screen and (min-width: 1220px) {
    .css-12z9bd6 {
        font-size: 32px;
    }
}

@media screen and (min-width: 1620px) {
    .css-12z9bd6 {
        font-size: 36px;
    }
}
.css-1fanq14 {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: 640px) {
    .css-1fanq14 {
        width: 85%;
    }
}

@media screen and (min-width: 1366px) {
    .css-1fanq14 {
        padding-top: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-1fanq14 {
        padding-top: 50px;
    }
}
.css-2lk54g {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: 640px) {
    .css-2lk54g {
        width: 85%;
    }
}

@media screen and (min-width: 1366px) {
    .css-2lk54g {
        padding-top: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-2lk54g {
        padding-top: 50px;
    }
}
.css-x4jz8y {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

@media screen and (min-width: 640px) {
    .css-x4jz8y {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
}

.css-x4jz8y support {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.css-x4jz8y support > a {
    margin-right: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 768px) {
    .css-x4jz8y support > a {
        margin-right: 100px;
    }
}

@media screen and (min-width: 1024px) {
    .css-x4jz8y support > a {
        margin-right: 150px;
    }
}

.css-x4jz8y support > a:last-of-type {
    margin-right: 0;
}
.css-sl9o2g {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

@media screen and (min-width: 640px) {
    .css-sl9o2g {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
}

.css-sl9o2g support {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.css-sl9o2g support > a {
    margin-right: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 768px) {
    .css-sl9o2g support > a {
        margin-right: 100px;
    }
}

@media screen and (min-width: 1024px) {
    .css-sl9o2g support > a {
        margin-right: 150px;
    }
}

.css-sl9o2g support > a:last-of-type {
    margin-right: 0;
}

.css-vny190 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.css-vny190 > a {
    margin-right: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 768px) {
    .css-vny190 > a {
        margin-right: 100px;
    }
}

@media screen and (min-width: 1024px) {
    .css-vny190 > a {
        margin-right: 150px;
    }
}

.css-vny190 > a:last-of-type {
    margin-right: 0;
}

.css-1ypw1iq {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.css-1ypw1iq > a {
    margin-right: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 768px) {
    .css-1ypw1iq > a {
        margin-right: 100px;
    }
}

@media screen and (min-width: 1024px) {
    .css-1ypw1iq > a {
        margin-right: 150px;
    }
}

.css-1ypw1iq > a:last-of-type {
    margin-right: 0;
}

.css-10zwoio {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    -webkit-text-decoration: none;
    text-decoration: none;
}
.css-1dh8ivw {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 50px;
}

@media screen and (min-width: 640px) {
    .css-1dh8ivw {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
}

@media screen and (min-width: 768px) {
    .css-1dh8ivw {
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
}
.css-x4aq7e {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    max-width: container;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 50px;
}

@media screen and (min-width: 480px) {
    .css-x4aq7e {
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media screen and (min-width: 768px) {
    .css-x4aq7e {
        max-width: 780px;
    }
}

@media screen and (min-width: 1024px) {
    .css-x4aq7e {
        max-width: 1020px;
    }
}

@media screen and (min-width: 1220px) {
    .css-x4aq7e {
        max-width: 1200px;
    }
}

@media screen and (min-width: 1620px) {
    .css-x4aq7e {
        max-width: 1310px;
    }
}

@media screen and (min-width: 640px) {
    .css-x4aq7e {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
}

@media screen and (min-width: 768px) {
    .css-x4aq7e {
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
}
.css-1v18k4f {
    width: 100%;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    padding-right: 30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

@media screen and (min-width: 480px) {
    .css-1v18k4f {
        padding-right: 20px;
    }
}

@media screen and (min-width: 640px) {
    .css-1v18k4f {
        width: 50%;
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        padding-right: 50px;
    }
}

@media screen and (min-width: 768px) {
    .css-1v18k4f {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        padding-right: 30px;
    }
}
.css-4err61 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    padding-right: 30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

@media screen and (min-width: 480px) {
    .css-4err61 {
        padding-right: 20px;
    }
}

@media screen and (min-width: 640px) {
    .css-4err61 {
        width: 50%;
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        padding-right: 50px;
    }
}

@media screen and (min-width: 768px) {
    .css-4err61 {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        padding-right: 30px;
    }
}
.css-x6qaf {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: 480px) {
    .css-x6qaf {
        padding-bottom: 20px;
    }
}

@media screen and (min-width: 640px) {
    .css-x6qaf {
        width: 50%;
        padding-bottom: 10px;
    }
}

@media screen and (min-width: 768px) {
    .css-x6qaf {
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
    }
}

@media screen and (min-width: 1366px) {
    .css-x6qaf {
        padding-top: 25px;
        padding-bottom: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-x6qaf {
        padding-top: 50px;
        padding-bottom: 50px;
    }
}
.css-19zvv4t {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: 480px) {
    .css-19zvv4t {
        padding-bottom: 20px;
    }
}

@media screen and (min-width: 640px) {
    .css-19zvv4t {
        width: 50%;
        padding-bottom: 10px;
    }
}

@media screen and (min-width: 768px) {
    .css-19zvv4t {
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
    }
}

@media screen and (min-width: 1366px) {
    .css-19zvv4t {
        padding-top: 25px;
        padding-bottom: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-19zvv4t {
        padding-top: 50px;
        padding-bottom: 50px;
    }
}
.css-149peb9 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}

.css-149peb9 a {
    margin: 0 auto;
}

@media screen and (min-width: 768px) {
    .css-149peb9 a {
        margin: 0;
    }
}
.css-1rd1wdv {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}

.css-1rd1wdv a {
    margin: 0 auto;
}

@media screen and (min-width: 768px) {
    .css-1rd1wdv a {
        margin: 0;
    }
}
.css-12xxyoj {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: -5px;
}

.css-12xxyoj title {
    font-size: 24px;
    color: var(--theme-ui-colors-heading_secondary, #4d515c);
    line-height: 1.35;
    font-weight: 700;
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
    margin-bottom: 25px;
}

@media screen and (min-width: 640px) {
    .css-12xxyoj title {
        font-size: 28px;
    }
}

@media screen and (min-width: 768px) {
    .css-12xxyoj title {
        font-size: 32px;
        line-height: 1.3;
    }
}

@media screen and (min-width: 1024px) {
    .css-12xxyoj title {
        font-size: 36px;
        line-height: 1.2;
    }
}

@media screen and (min-width: 1220px) {
    .css-12xxyoj title {
        font-size: 42px;
    }
}

@media screen and (min-width: 1620px) {
    .css-12xxyoj title {
        font-size: 46px;
    }
}

.css-12xxyoj subTitle {
    font-size: 12px;
    color: var(--theme-ui-colors-heading, #47c038f2);
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.5;
}

@media screen and (min-width: 640px) {
    .css-12xxyoj subTitle {
        font-size: 14px;
    }
}

@media screen and (min-width: 1024px) {
    .css-12xxyoj subTitle {
        margin-bottom: 15px;
    }
}
.css-jx1uwu {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: -5px;
}

.css-jx1uwu title {
    font-size: 24px;
    color: var(--theme-ui-colors-heading_secondary, #4d515c);
    line-height: 1.35;
    font-weight: 700;
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
    margin-bottom: 25px;
}

@media screen and (min-width: 640px) {
    .css-jx1uwu title {
        font-size: 28px;
    }
}

@media screen and (min-width: 768px) {
    .css-jx1uwu title {
        font-size: 32px;
        line-height: 1.3;
    }
}

@media screen and (min-width: 1024px) {
    .css-jx1uwu title {
        font-size: 36px;
        line-height: 1.2;
    }
}

@media screen and (min-width: 1220px) {
    .css-jx1uwu title {
        font-size: 42px;
    }
}

@media screen and (min-width: 1620px) {
    .css-jx1uwu title {
        font-size: 46px;
    }
}

.css-jx1uwu subTitle {
    font-size: 12px;
    color: var(--theme-ui-colors-heading, #47c038f2);
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.5;
}

@media screen and (min-width: 640px) {
    .css-jx1uwu subTitle {
        font-size: 14px;
    }
}

@media screen and (min-width: 1024px) {
    .css-jx1uwu subTitle {
        margin-bottom: 15px;
    }
}
.css-f2pjrz {
    font-size: 12px;
    color: var(--theme-ui-colors-heading, #47c038f2);
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.5;
}

@media screen and (min-width: 640px) {
    .css-f2pjrz {
        font-size: 14px;
    }
}

@media screen and (min-width: 1024px) {
    .css-f2pjrz {
        margin-bottom: 15px;
    }
}
.css-h8tja3 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-size: 12px;
    color: var(--theme-ui-colors-heading, #47c038f2);
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.5;
}

@media screen and (min-width: 640px) {
    .css-h8tja3 {
        font-size: 14px;
    }
}

@media screen and (min-width: 1024px) {
    .css-h8tja3 {
        margin-bottom: 15px;
    }
}
.css-14sfm13 {
    font-size: 24px;
    color: var(--theme-ui-colors-heading_secondary, #4d515c);
    line-height: 1.35;
    font-weight: 700;
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
    margin-bottom: 25px;
}

@media screen and (min-width: 640px) {
    .css-14sfm13 {
        font-size: 28px;
    }
}

@media screen and (min-width: 768px) {
    .css-14sfm13 {
        font-size: 32px;
        line-height: 1.3;
    }
}

@media screen and (min-width: 1024px) {
    .css-14sfm13 {
        font-size: 36px;
        line-height: 1.2;
    }
}

@media screen and (min-width: 1220px) {
    .css-14sfm13 {
        font-size: 42px;
    }
}

@media screen and (min-width: 1620px) {
    .css-14sfm13 {
        font-size: 46px;
    }
}
.css-pgs43i {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-family: "Roboto", "Lato", "DM Sans", sans-serif;
    font-weight: 500;
    line-height: 1.5;
    font-family: "Roboto", "Lato", "DM Sans", sans-serif;
    line-height: 1.5;
    font-weight: 500;
    font-size: 20px;
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
    color: var(--theme-ui-colors-heading, #47c038f2);
    font-size: 24px;
    color: var(--theme-ui-colors-heading_secondary, #4d515c);
    line-height: 1.35;
    font-weight: 700;
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
    margin-bottom: 25px;
}

@media screen and (min-width: 640px) {
    .css-pgs43i {
        font-size: 28px;
    }
}

@media screen and (min-width: 768px) {
    .css-pgs43i {
        font-size: 32px;
        line-height: 1.3;
    }
}

@media screen and (min-width: 1024px) {
    .css-pgs43i {
        font-size: 36px;
        line-height: 1.2;
    }
}

@media screen and (min-width: 1220px) {
    .css-pgs43i {
        font-size: 42px;
    }
}

@media screen and (min-width: 1620px) {
    .css-pgs43i {
        font-size: 46px;
    }
}
.css-146a2l4 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.css-ptoteq {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-size: 18px;
    line-height: 36px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.css-iajsij {
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
    line-height: 36px;
    color: #47c038f2;
    padding: 0;
    font-size: 30px;
    margin-left: -1px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: baseline;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    margin-top: 0px;
}

@media screen and (min-width: 480px) {
    .css-iajsij {
        width: 35px;
        margin-top: 2px;
    }
}
.css-ubsbbd {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: 480px) {
    .css-ubsbbd {
        padding-bottom: 20px;
    }
}

@media screen and (min-width: 640px) {
    .css-ubsbbd {
        padding-bottom: 10px;
    }
}

@media screen and (min-width: 768px) {
    .css-ubsbbd {
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
    }
}

@media screen and (min-width: 1366px) {
    .css-ubsbbd {
        padding-top: 25px;
        padding-bottom: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-ubsbbd {
        padding-top: 50px;
        padding-bottom: 50px;
    }
}

.css-ubsbbd listingChild {
    line-height: 36px;
}
.css-jp4zw2 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: 480px) {
    .css-jp4zw2 {
        padding-bottom: 20px;
    }
}

@media screen and (min-width: 640px) {
    .css-jp4zw2 {
        padding-bottom: 10px;
    }
}

@media screen and (min-width: 768px) {
    .css-jp4zw2 {
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
    }
}

@media screen and (min-width: 1366px) {
    .css-jp4zw2 {
        padding-top: 25px;
        padding-bottom: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-jp4zw2 {
        padding-top: 50px;
        padding-bottom: 50px;
    }
}

.css-jp4zw2 listingChild {
    line-height: 36px;
}
.css-5a2xxx {
    background-color: #f5f5f5;
    /* background-image: url(_next/static/images/patternBG-474a27273daccfe62d0e4b3c1b00acc3.png); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
}

@media screen and (min-width: 640px) {
    .css-5a2xxx {
        padding-top: 100px;
        padding-bottom: 100px;
    }
}

@media screen and (min-width: 1220px) {
    .css-5a2xxx {
        padding-top: 120px;
        padding-bottom: 120px;
    }
}

.css-5a2xxx::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 100%;
    background-size: 350px 350px;
    height: 100%;
    opacity: 0.3;
    z-index: 0;
}
</style>
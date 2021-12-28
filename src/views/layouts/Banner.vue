<template>
    <section id="home" class="css-1mgfx0n">
        <div class="css-j3b8xb">
            <div class="css-dbjgzi">
                <h2 class="headingBanner css-1dzj44">
                    Hệ thống cung cấp dịch vụ
                    <div
                        class="textEmphasize css-vurnku"
                        v-show="getSettingBannerTitle"
                    >{{ getSettingBannerTitle }}</div>
                </h2>
                <div class="css-4cffwv">
                    <button @click="getLogin" class="login__btn css-acrp6e" aria-label="Signin">Đăng nhập</button>
                </div>
            </div>
            <div class="css-1jttz78">
                <img
                    v-show="getSettingBannerImage"
                    :src="getSettingBannerImage"
                    alt="banner"
                    class="bannerThumb css-9taffg"
                />
            </div>
        </div>
    </section>
</template>

<script>

import RequestFactory from "../../requests/RequestFactory.js";

const SettingRequest = RequestFactory.get("setting");
const URL_SETTING_IMAGE = 'http://hire.test/storage/images/settings/';

export default {
    name: "Banner",
    data() {
        return {
            settings: []
        }
    },
    created() {
        this.getSettings()
    },
    methods: {
        async getSettings() {
            try {
                const response = await SettingRequest.getSettings();
                this.settings = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        getLogin() {
            this.$router.push({ name: "Login" });
        },
    },
    computed: {
        getSettingBannerImage() {
            const image = URL_SETTING_IMAGE + this.settings.find(setting => setting.setting_key === "BANNER_IMAGE")?.medium.name;
            return image;
        },
        getSettingBannerTitle() {
            return this.settings.find(setting => setting.setting_key === "BANNER_TITLE")?.setting_value;
        },
    }
};
</script>

<style lang="css">
.css-1mgfx0n {
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
    border-bottom-right-radius: 100px;
    padding-top: 150px;
    padding-bottom: 100px;
    background-color: #fafafa;
}

.css-1mgfx0n .textEmphasize {
    color: #47c038f2;
}

.css-1mgfx0n .headingBanner {
    margin-top: 50px;
}

.css-1mgfx0n .bannerThumb {
    width: 475px;
    height: 580px;
}

@media screen and (min-width: 480px) {
    .css-1mgfx0n {
        overflow: initial;
        border-bottom-right-radius: 150px;
    }
}

@media screen and (min-width: 768px) {
    .css-1mgfx0n {
        overflow: hidden;
        padding-bottom: 110px;
    }
}

@media screen and (min-width: 1220px) {
    .css-1mgfx0n {
        border-bottom-right-radius: 250px;
        padding-bottom: 120px;
    }
}

@media screen and (min-width: 1366px) {
    .css-1mgfx0n {
        padding-top: 140px;
        padding-bottom: 150px;
    }
}

@media screen and (min-width: 1620px) {
    .css-1mgfx0n {
        padding-top: 130px;
    }
}

.css-1mgfx0n container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.css-1mgfx0n contentBox {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
}

@media screen and (min-width: 640px) {
    .css-1mgfx0n contentBox {
        width: 85%;
    }
}

@media screen and (min-width: 768px) {
    .css-1mgfx0n contentBox {
        width: 55%;
    }
}

@media screen and (min-width: 1024px) {
    .css-1mgfx0n contentBox {
        width: 50%;
    }
}

@media screen and (min-width: 1220px) {
    .css-1mgfx0n contentBox {
        width: 55%;
    }
}

@media screen and (min-width: 1366px) {
    .css-1mgfx0n contentBox {
        padding-top: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-1mgfx0n contentBox {
        padding-top: 50px;
    }
}

.css-1mgfx0n imageBox {
    display: none;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    text-align: right;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .css-1mgfx0n imageBox {
        display: block;
    }
}

.css-1mgfx0n .login__btn {
    color: white;
    background-color: #47c038f2;
}
.css-k008qs {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.css-j3b8xb {
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
}

@media screen and (min-width: 480px) {
    .css-j3b8xb {
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media screen and (min-width: 768px) {
    .css-j3b8xb {
        max-width: 780px;
    }
}

@media screen and (min-width: 1024px) {
    .css-j3b8xb {
        max-width: 1020px;
    }
}

@media screen and (min-width: 1220px) {
    .css-j3b8xb {
        max-width: 1200px;
    }
}

@media screen and (min-width: 1620px) {
    .css-j3b8xb {
        max-width: 1310px;
    }
}
.css-9880cl {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
}

@media screen and (min-width: 640px) {
    .css-9880cl {
        width: 85%;
    }
}

@media screen and (min-width: 768px) {
    .css-9880cl {
        width: 55%;
    }
}

@media screen and (min-width: 1024px) {
    .css-9880cl {
        width: 50%;
    }
}

@media screen and (min-width: 1220px) {
    .css-9880cl {
        width: 55%;
    }
}

@media screen and (min-width: 1366px) {
    .css-9880cl {
        padding-top: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-9880cl {
        padding-top: 50px;
    }
}
.css-dbjgzi {
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
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 0;
}

@media screen and (min-width: 640px) {
    .css-dbjgzi {
        width: 85%;
    }
}

@media screen and (min-width: 768px) {
    .css-dbjgzi {
        width: 55%;
    }
}

@media screen and (min-width: 1024px) {
    .css-dbjgzi {
        width: 50%;
    }
}

@media screen and (min-width: 1220px) {
    .css-dbjgzi {
        width: 55%;
    }
}

@media screen and (min-width: 1366px) {
    .css-dbjgzi {
        padding-top: 25px;
    }
}

@media screen and (min-width: 1620px) {
    .css-dbjgzi {
        padding-top: 50px;
    }
}
.css-1dzj44 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-family: "Roboto", "Lato", "DM Sans", sans-serif;
    font-weight: 500;
    line-height: 1.5;
    color: #4d515c;
    font-size: 25px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 25px;
}

@media screen and (min-width: 480px) {
    .css-1dzj44 {
        font-size: 40px;
    }
}

@media screen and (min-width: 640px) {
    .css-1dzj44 {
        font-size: 40px;
    }
}

@media screen and (min-width: 768px) {
    .css-1dzj44 {
        font-size: 40px;
    }
}

@media screen and (min-width: 1024px) {
    .css-1dzj44 {
        font-size: 48px;
        margin-bottom: 30px;
    }
}

@media screen and (min-width: 1220px) {
    .css-1dzj44 {
        font-size: 50px;
    }
}
.css-vurnku {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
}
.css-4cffwv {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.css-acrp6e {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    text-align: center;
    line-height: inherit;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: inherit;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    background-color: var(--theme-ui-colors-primary, #1f3e76);
    border: 0;
    border-radius: 4px;
    border-radius: 10px;
    font-size: 14px;
    -webkit-letter-spacings: -0.5px;
    -moz-letter-spacings: -0.5px;
    -ms-letter-spacings: -0.5px;
    letter-spacings: -0.5px;
    padding: 11px 20px 10px;
    font-family: "Roboto", "Lato", "DM Sans", sans-serif;
    cursor: pointer;
    line-height: 1.2;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    font-weight: 500;
    border: 1.5px solid #47c038f2;
    background-color: white;
    color: #47c038f2;
}

@media screen and (min-width: 480px) {
    .css-acrp6e {
        font-size: 15px;
    }
}

@media screen and (min-width: 1024px) {
    .css-acrp6e {
        font-size: 16px;
        -webkit-letter-spacings: -0.15px;
        -moz-letter-spacings: -0.15px;
        -ms-letter-spacings: -0.15px;
        letter-spacings: -0.15px;
        padding: 13px 30px;
    }
}

.css-acrp6e:focus {
    outline: 0;
}

.css-acrp6e:hover {
    background-color: white;
    color: #47c038f2;
}
.css-12w2pyn {
    display: none;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    text-align: right;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .css-12w2pyn {
        display: block;
    }
}
.css-1jttz78 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: none;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    text-align: right;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .css-1jttz78 {
        display: block;
    }
}
.css-9taffg {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    max-width: 100%;
    height: auto;
}
.css-tkp5t8 {
    padding-top: 80px;
    padding-bottom: 80px;
}

@media screen and (min-width: 640px) {
    .css-tkp5t8 {
        padding-top: 100px;
        padding-bottom: 100px;
    }
}

@media screen and (min-width: 1220px) {
    .css-tkp5t8 {
        padding-top: 120px;
        padding-bottom: 120px;
    }
}
</style>
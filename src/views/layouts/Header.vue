<template>
    <header class="unSticky css-166dqkt" id="header">
        <div class="css-12snug5">
            <a class="css-mjdw49" @click="redirect('/')">
                <img
                    v-show="getSettingLogoImage"
                    :src="getSettingLogoImage"
                    alt="AutoLike"
                    class="css-9taffg"
                />
            </a>
            <nav class="css-bcbuwq">
                <a v-for="menu of menuRelease" :key="menu.id" @click="redirect(menu.link)">{{ menu.name }}</a>
            </nav>
            <button @click="getLogin()" class="donate__btn css-acrp6e" aria-label="Signin">Đăng nhập</button>
            <div class="drawer__handler css-vurnku" style="display: inline-block">
                <div class="css-1pve9f4">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="26px"
                        width="26px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import RequestFactory from "../../requests/RequestFactory.js";

const MenuRequest = RequestFactory.get("menu");
const SettingRequest = RequestFactory.get("setting");

const URL_SETTING_IMAGE = 'http://hire.test/storage/images/settings/';

export default {
    name: "Header",
    data() {
        return {
            menus: [],
            settings: [],
        };
    },
    created() {
        this.getMenus(),
            this.getSettings();
    },
    methods: {
        async getMenus() {
            try {
                const response = await MenuRequest.getMenus();
                this.menus = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
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
        redirect(link) {
            this.$router.push(link);
        },
    },
    computed: {
        menuRelease() {
            return this.menus.filter(menu => !menu.is_coming_soon);
        },
        getSettingLogoImage() {
            const image = URL_SETTING_IMAGE + this.settings.find(setting => setting.setting_key === "LOGO")?.medium.name;
            return image;
        } 
    }
};
</script>
<style lang="scss">
.css-166dqkt {
    padding: 20px 0;
}

.css-166dqkt .donate__btn {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 15px;
    margin-left: auto;
}

@media screen and (min-width: 480px) {
    .donate__btn {
        margin-right: 20px;
    }
}

@media screen and (min-width: 1024px) {
    .css-166dqkt .donate__btn {
        margin-right: 0;
        margin-left: 0;
    }
}

.css-166dqkt.sticky {
    position: fixed;
    background-color: var(--theme-ui-colors-background, #ffffff);
    color: #000000;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    padding-top: 15px;
    padding-bottom: 15px;
}

.css-166dqkt.sticky nev > a {
    color: var(--theme-ui-colors-text, #343d48);
}

.css-166dqkt.sticky .donate__btn:hover {
    box-shadow: rgba(31, 62, 118, 0.57) 0px 9px 20px -5px;
    background-color: #47c038f2;
    color: white;
}

@-webkit-keyframes animation-1fhz2lg {
    from {
        position: fixed;
        opacity: 1;
    }

    to {
        position: absolute;
        opacity: 1;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
    }
}

@keyframes animation-1fhz2lg {
    from {
        position: fixed;
        opacity: 1;
    }

    to {
        position: absolute;
        opacity: 1;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
    }
}
.css-1lekzkb {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.css-12snug5 {
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
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

@media screen and (min-width: 480px) {
    .css-12snug5 {
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media screen and (min-width: 768px) {
    .css-12snug5 {
        max-width: 780px;
    }
}

@media screen and (min-width: 1024px) {
    .css-12snug5 {
        max-width: 1020px;
    }
}

@media screen and (min-width: 1220px) {
    .css-12snug5 {
        max-width: 1200px;
    }
}

@media screen and (min-width: 1620px) {
    .css-12snug5 {
        max-width: 1310px;
    }
}

.css-16gvokb {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    margin-right: 15px;
}

.css-mjdw49 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    -webkit-text-decoration: none;
    text-decoration: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    margin-right: 15px;
}
.css-9taffg {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    max-width: 100%;
    height: auto;
}
.css-jcd5a8 {
    margin-left: auto;
    margin-right: auto;
    display: none;
}

@media screen and (min-width: 1024px) {
    .css-jcd5a8 {
        display: block;
    }
}

.css-jcd5a8 a {
    font-size: 16px;
    font-weight: 400;
    padding-left: 25px;
    padding-right: 25px;
    cursor: pointer;
    line-height: 1.2;
}

.css-jcd5a8 a.active {
    color: #47c038f2;
}
.css-bcbuwq {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    display: none;
}

@media screen and (min-width: 1024px) {
    .css-bcbuwq {
        display: block;
    }
}

.css-bcbuwq a {
    font-size: 16px;
    font-weight: 400;
    padding-left: 25px;
    padding-right: 25px;
    cursor: pointer;
    line-height: 1.2;
}

.css-bcbuwq a.active {
    color: #47c038f2;
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
.css-vurnku {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
}
.css-1pve9f4 {
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
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 26px;
    cursor: pointer;
}

@media screen and (min-width: 1024px) {
    .css-1pve9f4 {
        display: none;
    }
}
</style>
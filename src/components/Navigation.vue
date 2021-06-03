<template>
    <header class="lh-header">
     <div class="lh-logo">
            <router-link to="/">
                <span class="text-logo">L&D</span>
            </router-link>
        </div>
        <div class="lh-header-container">
            <nav class="lh-nav">
                <div class="lh-links">
                    <div v-for="(route, index) in routes" :key="index">
                        <lh-button type="inline">
                            <router-link :to="route.path">{{ route.name }}</router-link>
                        </lh-button>
                    </div>
                </div>
            </nav>
            <nav class="lh-mobile-nav">
                <lh-slide no-overlay close-on-navigation>
                    <div v-for="(route, index) in routes" :key="index">
                        <router-link :to="route.path">{{ route.name }}</router-link>
                    </div>
                </lh-slide>
            </nav>
        </div>
    </header>
</template>
<script>

    import LhButton from './Button';
    import LhSlide from './Slide';

    export default {
        name: 'lh-navigation',
        data() {
            return {
                routes: this.$router.options.routes,
                verticalOffset: 10,
                dark: false,
                mode: 'Dark'
            }
        },
        methods: {
            openModal(ref) {
                this.$refs[ref].open();
            },
            closeModal(ref) {
                this.$refs[ref].close();
            },
            toggleMode() {
                if (this.dark) {
                    this.mode = 'Light';
                    document.body.classList.remove('light');
                    document.body.classList.add('dark');
                } else {
                    this.mode = 'Dark';
                    document.body.classList.add('light');
                    document.body.classList.remove('dark');
                }
            }
        },
        components: {
            LhButton,
            LhSlide
        }
    }
</script>

<style scoped lang="scss">

    @import "../assets/sass/mixins.scss";
    @import "../assets/sass/globals.scss";

    .lh-header {
        display: flex;
        align-items: center;
        position: absolute;
        width: 100%;
        /*padding: 0em 1rem;*/

        @media (max-width: 1024px) {
            /*padding: 1em;*/
        }

        &.scroll-bg {
            background-color: $white;
        }
    }

    .lh-logo {
        color: $black;
        padding: 1em;
        position: absolute;

        .text-logo {
            font-family: 'DidotLTPro-bold', sans-serif;
        }

        a {
            display: block;
            color: $black;
            font-size: 1.5em;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    .lh-header-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;

        @media (max-width: 900px) {
            padding: 0.5em 0;
        }

        .lh-nav {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            /*padding-right: 1em;*/
            align-items: center;

            .lh-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 1em 0;
                margin-right: 1em;
                @include border-radius();

                @media (max-width: 1024px) {
                    /*padding-right: 1em;*/
                    /*padding-left: 1em;*/
                }

                @media (max-width: 900px) {
                    display: none;
                }

                & > * {
                    margin: 0px 10px;
                }

                a {
                    text-transform: uppercase;
                    color: var(--inline-button-text-color);

                    &:hover {
                        color: var(--inline-button-hover-color);
                    }

                    @media (max-width: 1024px) {
                        font-size: 14px;
                    }
                }
            }
        }

        .lh-mobile-nav {
            display: none;
            padding-right: 1em;

            a {
                color: var(--background-color);
                padding: 0.7em;
                display: block;
                width: 100%;
                text-transform: uppercase;
            }

            .lh-header-accordion {
                padding: 0.7em;
            }

            @media(max-width: 900px) {
                display: block;
            }
        }
    }
</style>
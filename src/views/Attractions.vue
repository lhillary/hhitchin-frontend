<template>
    <div class="lh-attractions">
        <section class="lh-attractions-top">
            <div class="left-attractions">
                <span class="smallcaps highlight">Attractions</span>
                <h1 class="display">Things to Do</h1>
                <p>Thinking of heading up early to explore Michigan's thumb? Check out our list of some of the best sights to see around Lake Huron, particularly in the Port Austin/Caseville area.</p>
            </div>
            <div class="right-attractions">
                <div class="lh-img-holder">
                    <img src="../assets/img/attractions.png" alt="Lydia & Diana" />
                </div>
            </div>
        </section>
        <section class="lh-attractions-list-container">
            <div class="divider">
                <h3 class="smallcaps highlight">Check These Out</h3>
            </div>
            <nav class="lh-nav">
                <div class="lh-links">
                    <div v-for="(route, index) in routes" :key="index">
                        <lh-button type="inline">
                            <router-link :to="route.path">{{ route.name }}</router-link>
                        </lh-button>
                    </div>
                </div>
            </nav>
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
    </div>
</template>

<script>
    import LhButton from '../components/Button';

    export default {
        name: 'Attractions',
        data() {
            return {
                routes: [
                    {path: '/attractions', name: 'Port Austin'},
                    {path: '/attractions/caseville', name: 'Casevile'}
                ]
            }
        },
        components: {
            LhButton
        }
    }
</script>

<style scoped lang="scss">

    @import "../assets/sass/mixins.scss";
    @import "../assets/sass/globals.scss";

    h1, h3, p {
        text-align: left;
    }

    p {
        font-size: 20px !important;
        padding-right: 4em;

        @media (max-width: 800px) {
            padding: 0 2em;
        }

        @media (max-width: 460px) {
            padding: 0 2em 0 0;
        }
    }

    h1 {
        margin-bottom: 0.25em;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: rgba(0,0,0,0.25);
        border-radius: 1.8em;
    }

    .lh-attractions-top {
        height: 100vh;
        overflow: scroll;
        min-height: 500px;
        display: flex;

        @media (max-width: 800px) {
            flex-direction: column-reverse;
            height: unset;
        }

        .left-attractions, .right-attractions {
            padding: 5em 1em 5em 3em;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (max-width: 800px) {
                padding-left: 2em;
                align-items: center;
            }

            @media (max-width: 460px) {
                align-items: flex-start;
            }
        }

        .right-attractions {
            width: 50%;
            background-color: $yellow;
            align-items: center;
            flex-direction: row;
            padding: 5em 2em 5em 2em;

            @media (max-width: 800px) {
                width: 100%;
                flex-direction: column;
            }

            img {
                width: 100%;
                padding-bottom: 0.4em;
            }

           .lh-img-holder {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h1 {
                    text-align: center;

                    @media (max-width: 800px) {
                        font-size: 4em !important;
                    }
                }
            }
        }

        .left-attractions {
            width: 50%;
            align-items: flex-start;

            @media (max-width: 800px) {
                width: 100%;
            }
        }
    }

    .divider {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 0 1em;

        @media (max-width: 1024px) {
            padding: 1em 0 0 0;
        }

        .smallcaps {
            margin-top: 1em;
            margin-bottom: 0;
        }
    }

    .lh-attractions-list-container {
        height: 100vh;
        padding-bottom: 4em;
        min-height: 500px;
        overflow: scroll;
    }

    .lh-attractions-list {
        height: 100%;
        padding: 2em 3em;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 1024px) {
            padding: 1em;
        }

        @media (max-width: 800px) {
            padding: 1em;
        }
    }

    .lh-nav {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;

            .lh-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 1em 0;
                margin-right: 1em;

                & > * {
                    margin: 0px 10px;
                }

                a {
                    text-transform: uppercase;
                    color: $black;

                    &:hover {
                        color: $black;
                    }

                    @media (max-width: 1024px) {
                        font-size: 14px;
                    }
                }
            }
        }

    
</style>
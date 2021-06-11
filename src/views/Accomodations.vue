<template>
        <div class="lh-accomodations">
            <section class="lh-accomodations-top">
                <div class="left-accomodations">
                    <div class="lh-img-holder">
                        <img src="../assets/img/accomodations.png" alt="Lydia & Diana" />
                    </div>
                </div>
                <div class="right-accomodations">
                    <span class="smallcaps highlight">Accomodations</span>
                    <h1 class="display">Where to Stay</h1>
                    <p>Even though it's not the big city, there are still plenty of places you can stay in the thumb! It all depends on your preferences, of course, but there are a (small but fierce) variety of hotels, motels, and cottages available in the area. We've listed at least one campsite as well, for you adventurous folks.</p>
                </div>
            </section>
            <section class="lh-accomodations-list-container">
                <div class="divider">
                    <h3 class="smallcaps highlight">Some Suggestions...</h3>
                </div>
                <div class="lh-accomodations-list">
                    <lh-card v-for="(accom, index) in accomodations" type="accom" :key="index" :title="accom.name" :address="accom.address" :phone="accom.phone" :href="accom.href" :img="accom.img"></lh-card>
                </div>
            </section>
        </div>
</template>

<script>
    import LhCard from '../components/Card';

    export default {
        name: 'Accomodations',
        data() {
            return {
                accomodations: [
                    {
                        name: 'Bella Vista Inn & Sunset Bay Resort',
                        address: '6024 Port Austin Rd, Caseville, MI 48725',
                        phone: '989-856-2650',
                        href: 'http://casevillesunset.com/',
                        img: require('../assets/img/bella.jpg')
                    },
                    {
                        name: 'Beachcomber Motel & Apartments',
                        address: '158 W Spring St, Port Austin, MI 48467',
                        phone: '989-738-8354',
                        href: 'https://beachcomberpa.com/',
                        img: require('../assets/img/beachcomber.jpeg')
                    },
                    {
                        name: 'Rainbow Motel',
                        address: '6850 Division St #9624, Caseville, MI 48725',
                        phone: '989-856-3693',
                        href: 'https://www.google.com/maps/place/Rainbow+Motel/@43.9496269,-83.2699827,15z/data=!4m8!3m7!1s0x0:0xde4a7bed4fa9b6ac!5m2!4m1!1i2!8m2!3d43.9496169!4d-83.2699826',
                        img: require('../assets/img/rainbow-motel.jpg')
                    },
                    {
                        name: 'Ameriway Inn & Suites',
                        address: '898 N Van Dyke Rd, Bad Axe, MI 48413',
                        phone: '989-269-3200',
                        href: 'https://www.ameriwayinnandsuites.com/',
                        img: require('../assets/img/airway.jpg')
                    },
                    {
                        name: 'Sleeper State Park',
                        address: '6573 State Park Rd, Caseville, MI 48725',
                        phone: '989-856-4411',
                        href: 'https://www.michigan.org/property/albert-e-sleeper-state-park',
                        img: require('../assets/img/sleeper.jpg')
                    },
                    {
                        name: 'Holiday Inn Express & Suites',
                        address: '55 Rapson Ln W, Bad Axe, MI 48413',
                        phone: '989-269-5293',
                        href: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/bad-axe/bdxmi/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-BDXMI',
                        img: require('../assets/img/holiday.jpeg')
                    },
                    {
                        name: 'Krebs Lane Cottages',
                        address: '2966 Port Austin Rd, Port Austin, MI 48467',
                        phone: '989-738-8548',
                        href: 'https://www.google.com/maps/place/KREBS+LANE+COTTAGES/@44.0020142,-83.1060142,15z/data=!4m2!3m1!1s0x0:0x59bff09d0906f389?sa=X&ved=2ahUKEwiukJ2lgfvwAhUaHs0KHetWDeUQ_BIwEnoECD0QBQ',
                        img: require('../assets/img/cottages.jpg')
                    },
                    {
                        name: 'Franklin Inn',
                        address: '1070 E Huron Ave, Bad Axe, MI 48413',
                        phone: '989-269-9951',
                        href: 'https://franklininnmi.com/',
                        img: require('../assets/img/franklin.jpg')
                    }
                ]
            }
        },
        components: {
            LhCard
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

    .lh-accomodations-top {
        height: 100vh;
        overflow: scroll;
        min-height: 500px;
        display: flex;

        @media (max-width: 800px) {
            flex-direction: column-reverse;
            height: unset;
        }

        .left-accomodations, .right-accomodations {
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

        .left-accomodations {
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

        .right-accomodations {
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

    .lh-accomodations-list-container {
        height: 100vh;
        padding-bottom: 4em;
        min-height: 500px;
        overflow: scroll;
    }

    .lh-accomodations-list {
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
    
</style>
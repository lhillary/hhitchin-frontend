<template>
    <div class="lh-accomodations">
    <div class="left-accomodations">
        <div class="left-content">
            <a class="accomodation-card" v-for="(content, index) in leftContent1" :key="index" :href="content.href" target="_blank">
                <h5>{{ content.name }}</h5>
                <p>{{ content.address }}</p>
                <p>{{ content.phone }}</p>
                <div class="overlay"></div>
            </a>
        </div>
        <div class="left-content">
            <a class="accomodation-card" v-for="(content, index) in leftContent2" :key="index" :href="content.href" target="_blank">
                <h5>{{ content.name }}</h5>
                <p>{{ content.address }}</p>
                <p>{{ content.phone }}</p>
                <div class="overlay"></div>
            </a>
        </div>
    </div>
    <div class="right-accomodations">
      <span class="smallcaps highlight">Accomodations</span>
      <h1 class="display">Where to Stay</h1>
      <p>Even though it's not the big city, there are still plenty of places you can stay in the thumb! It all depends on your preferences, of course, but there are a (small but fierce) variety of hotels, motels, and cottages available in the area. We've listed at least one campsite as well, for you adventurous folks.</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Accomodations',
        data() {
            return {
                leftContent1: [
                    {
                        name: 'Beachcomber Motel & Apartments',
                        address: '158 W Spring St, Port Austin, MI 48467',
                        phone: '989-738-8354',
                        href: 'https://beachcomberpa.com/'
                    },
                    {
                        name: 'Rainbow Motel',
                        address: '6850 Division St #9624, Caseville, MI 48725',
                        phone: '989-856-3693',
                        href: 'https://www.google.com/maps/place/Rainbow+Motel/@43.9496269,-83.2699827,15z/data=!4m8!3m7!1s0x0:0xde4a7bed4fa9b6ac!5m2!4m1!1i2!8m2!3d43.9496169!4d-83.2699826'
                    },
                    {
                        name: 'Ameriway Inn & Suites',
                        address: '898 N Van Dyke Rd, Bad Axe, MI 48413',
                        phone: '989-269-3200',
                        href: 'https://www.ameriwayinnandsuites.com/'
                    },
                    {
                        name: 'Sleeper State Park',
                        address: '6573 State Park Rd, Caseville, MI 48725',
                        phone: '989-856-4411',
                        href: 'https://www.michigan.org/property/albert-e-sleeper-state-park'
                    }
                ],
                leftContent2: [
                    {
                        name: 'Holiday Inn Express & Suites',
                        address: '55 Rapson Ln W, Bad Axe, MI 48413',
                        phone: '989-269-5293',
                        href: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/bad-axe/bdxmi/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-BDXMI'
                    },
                    {
                        name: 'Krebs Lane Cottages',
                        address: '2966 Port Austin Rd, Port Austin, MI 48467',
                        phone: '989-738-8548',
                        href: 'https://www.google.com/maps/place/KREBS+LANE+COTTAGES/@44.0020142,-83.1060142,15z/data=!4m2!3m1!1s0x0:0x59bff09d0906f389?sa=X&ved=2ahUKEwiukJ2lgfvwAhUaHs0KHetWDeUQ_BIwEnoECD0QBQ'
                    },
                    {
                        name: 'Franklin Inn',
                        address: '1070 E Huron Ave, Bad Axe, MI 48413',
                        phone: '989-269-9951',
                        href: 'https://franklininnmi.com/'
                    }
                ]
            }
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

    .accomodation-card {
        padding: 1em;
        border: 1px solid $black;
        border-radius: 1.8em;
        margin-bottom: 1.5em;
        background-color: $white;
        position: relative;

        h5 {
            text-transform: uppercase;
            margin: 0 0 0.25em;
            text-decoration: underline;
        }

        p {
            font-size: 16px !important;
            margin: 0;
            padding: 0;
        }

        &:hover .overlay {
            opacity: 1;
        }
    }

    .lh-accomodations {
        height: 100vh;
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

            .left-content {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                height: 100%;
                width: 50%;
                overflow: scroll;

                @media (max-width: 800px) {
                    width: 100%;
                }

                &:first-child {
                    padding-right: 0.5em;
                }

                &:last-child {
                    padding-left: 0.5em;
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
    
</style>
<template>
  <div class="lh-home">
    <div class="left-home">
      <span class="smallcaps highlight">Save The Date</span>
      <h1 class="display">Diana & Lydia</h1>
      <h3 class="smallcaps">25. September. 2021 | Caseville, MI</h3>
      <p>We look forward to celebrating with you! This site will be updated on a regular basis, so be sure to check back for more details as the big day approaches.</p>
    </div>
    <div class="right-home">
      <div class="lh-img-holder">
        <img src="../assets/img/wedding-photo.png" alt="Lydia & Diana" />
        <h1 class="display">Gettin' Hitched</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/globals.scss";
@import "../assets/sass/mixins.scss";

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

.lh-home {
  height: 100vh;
  min-height: 500px;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .left-home {
    width: 50%;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .right-home {
    width: 50%;
    background-color: $yellow;

    img {
      width: 100%;
      border-bottom: 1px solid $black;
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

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .left-home, .right-home {
    padding: 5em 1em 5em 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 800px) {
      padding-left: 2em;
      align-items: center;
    }

    @media (max-width: 460px) {
      align-items: flex-start;
    }
  }
}
</style>

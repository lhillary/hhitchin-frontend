<template>
  <div class="lh-gifts">
    <div class="left-gifts">
      <a class="box-link" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550215074?eventType=Wedding" target="_blank">
        <img src="../assets/img/bed-bath-and-beyond.svg" alt="Bed Bath & Beyond Registry" />
        <div class="overlay"></div>
      </a>
    </div>
    <div class="right-gifts">
      <span class="smallcaps highlight">Gifts & Registry</span>
      <h1 class="display">Yayyy Gifts</h1>
      <p>The gift of partying with us on our big day is all we ask of you! But if you're feeling generous and would like some guidance, we are registered at <a class="special-link" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550215074?eventType=Wedding" target="_blank">Bed Bath & Beyond</a>. Seriously, though, we will be grateful for anything you bring us, even if it's just your face!</p>
    </div>
  </div>
</template>

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

.lh-gifts {
  height: 100vh;
  min-height: 500px;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .left-gifts, .right-gifts {
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

  .left-gifts {
    width: 50%;
    background-color: $yellow;
    align-items: center;

    a {
      position: relative;
      display: block;
      padding: 2em;
      border: 3px solid #000;
      background: white;
      border-radius: 2em;
      max-width: 250px;

      &:hover .overlay {
        opacity: 1;
      }
    }

    img {
      width:100%;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .right-gifts {
    width: 50%;
    align-items: flex-start;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
}
</style>
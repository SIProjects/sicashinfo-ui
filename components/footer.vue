<template>
  <footer>
    <div class="container">
      <h3 class="is-size-4 is-uppercase">{{ $t('footer.contact_us') }}</h3>
      <div class="line"></div>
      <a href="mailto:support@sicash.network">support@sicash.network</a>
      <ul class="links">
        <li>
          <a target="_blank" href="https://www.facebook.com/SiCashProject">
            <Icon icon="facebook" brands /> {{ $t('footer.facebook') }}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/sicashofficial">
            <Icon icon="twitter" brands /> {{ $t('footer.twitter') }}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://discord.com/invite/BXHhFEG">
            <Icon icon="discord" brands /> {{ $t('footer.discord') }}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/SIProjects/SICash.Network">
            <Icon icon="github" brands /> Github
          </a>
        </li>
      </ul>
      <div class="copyright">
        2020 SICash Foundation &copy; All rights Reserved
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
  footer {
    padding-top: 6rem;
    padding-bottom: 6rem;
    background-color: #353a41;
    text-align: center;
    color: white;
  }
  a:link, a:visited, a:hover, a:active {
    color: inherit;
  }
  .line {
    width: 2rem;
    height: 1px;
    margin: 0.5rem auto;
    background-color: white;
  }
  .links {
    display: flex;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(242, 242, 242, 0.2);
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 2rem;
      margin-bottom: 2rem;
      > li {
        flex: 50%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    @media (min-width: 769px) {
      justify-content: space-between;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }
  }
  span.fab, span.fas, span.sicash-icon {
    font-size: 2em;
    vertical-align: middle;
  }
</style>

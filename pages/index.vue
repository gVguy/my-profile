<template>
  <div class="page-content">
    <section class="intro">
      <p class="nice-to-meet">Nice to meet you, I'm</p>
      <TheCard class="avatar-container">
        <img class="avatar" src="/avatar_512.png" alt="My avatar">
      </TheCard>
      <h1 class="heading">Ivan Chepurin</h1>
      <p class="subheading">Web developer</p>
    </section>
    <section class="about">
      <p>
        <span class="key">What I like: </span>
        <span class="value">Full remote, async work, calm and supportive environment.</span>
      </p>
      <p>
        <span class="key">What matters: </span>
        <span class="value">Kindness, honesty, open communication.</span>
      </p>
      <p>
        <span class="key">What drives me: </span>
        <span class="value">Functional & beautiful UX, scalable well-coded systems.</span>
      </p>
    </section>
    <section class="links">
      <ul>
        <li>
          <a href="https://gvguy.com/IvanChepurin-webDeveloper.pdf" target="_blank">
            <SvgoResumeIcon />
            CV
          </a>
        </li>
        <li>
          <a href="https://gvguy.com/#start" target="_blank">
            <SvgoWebIcon />
            Website
          </a>
        </li>
        <li>
          <a href="https://github.com/gVguy/my-profile/" target="_blank">
            <SvgoGithubIcon />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gvguy/" target="_blank">
            <SvgoLinkedinIcon />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://t.me/vabides" target="_blank">
            <SvgoTelegramIcon />
            Telegram
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  max-height: 700px;
  margin: auto 0;
  @include screen($md) {
    max-height: none;
    flex-grow: 0;
  }
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 22px;
    .nice-to-meet {
      margin-bottom: 12px;
      color: rgba(white, .8);
    }
    .heading {
      font-family: var(--font-2);
      font-size: 64px;
      text-align: center;
      @include screen($sm) {
        font-size: 52px;
      }
    }
    .subheading {
      font-size: 32px;
      color: rgba(white, .8);
      @include screen($sm) {
        font-size: 26px;
      }
    }
    .avatar-container {
      width: 222px;
      height: 222px;
      border-radius: 44px;
      // background: rgba(black, .6);
      // border: 1px solid rgba(white, .4);
      // display: flex;
      // align-items: flex-end;
      .avatar {
        width: 95%;
        margin: auto auto 0 0;
      }
    }
  }
  .about {
    p {
      margin: 12px 0;
      .key {
        font-weight: normal;
      }
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      margin: 22px 0;
      @include screen($md) {
        flex-direction: column;
        width: 222px;
        margin-left: auto;
        margin-right: auto;
      }
      li {
        @include screen($md) {
          padding: 12px 0;
        }
        a {
          color: white;
          transition: color .3s;
          outline: none;
          font-size: 22px;
          text-decoration: none;
          @include screen($md) {
            padding: 12px 0;
          }
          &:hover,
          &:focus {
            color: lightseagreen;
          }
        }
      }
    }
  }
}
</style>

<script>
  import {
    faHome,
    faExternalLinkAlt,
    faEnvelope,
    faPhoneAlt
  } from "@fortawesome/free-solid-svg-icons";
  import { faFacebook } from "@fortawesome/free-brands-svg-icons";
  import Icon from "fa-svelte";

  export let segment;
</script>

<style type="text/postcss">
  nav {
    @apply flex bg-white px-6 relative;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5); */
    top: 25px;
    font-weight: 300;
    max-width: 1200px;
    margin: auto;
    z-index: 5;
    min-height: 200px;

    div {
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .navigation {
    @apply relative;
    /* top: -30px; */
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    color: #414447;
    font-size: 20px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    padding: 1em 0.5em;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: black;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
  }

  h4 {
    font-family: "Playfair Display", serif;
    font-size: 24px;
    font-weight: 700;
  }

  :global(.nav-item) {
    @apply text-gray-600 p-4 text-sm;
    transition: 0.3s;

    &:hover {
      @apply text-gray-700;
    }

    &:not(:last-child) {
      border-right: 1px solid #eee;
    }

    .nav-icon {
      @apply text-gray-300;
      font-size: 50px;
      transition: 0.3s;

      &:hover {
        @apply text-gray-400;
      }
    }
  }
</style>

<nav class="hlc-shadow">
  <div class="flex-shrink mr-5">
    <img src="hlc-logo-black-90x90.png" alt="Healthy Living Community" />
  </div>
  <div class="flex-shrink mr-5">
    <h4>
      Healthy Living
      <br />
      Community
    </h4>
  </div>
  <div class="flex-grow navigation">
    <div class="text-right">
      <ul>
        <li>
          <a class={segment === undefined ? 'selected' : ''} href=".">Home</a>
        </li>
        <li>
          <a class={segment === 'about' ? 'selected' : ''} href="about">
            About
          </a>
        </li>
        <li>
          <a class={segment === 'services' ? 'selected' : ''} href="services">
            Services
          </a>
        </li>
        <li>
          <a class={segment === 'policies' ? 'selected' : ''} href="policies">
            Policies
          </a>
        </li>
        <li>
          <a class={segment === 'faq' ? 'selected' : ''} href="faq">FAQ</a>
        </li>
        <li>
          <a class={segment === 'location' ? 'selected' : ''} href="location">
            Location
          </a>
        </li>

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
        <li>
          <a
            rel="prefetch"
            class={segment === 'blog' ? 'selected' : ''}
            href="blog">
            blog
          </a>
        </li>
        <li style="display: none">
          <a href="404">404</a>
        </li>
      </ul>
    </div>
    <div class="text-right flex ml-6 pl-6">
      <div class="flex-1 nav-item">
        <a
          href="https://www.google.com/maps/place/Healthy+Living+Family+Medicine/@45.5010788,-122.6419802,13z/data=!4m5!3m4!1s0x0:0xd50c150241c3d305!8m2!3d45.496872!4d-122.6399088"
          target="_blank"
          alt="Address"
          class="flex">
          <div class="flex-shrink">
            <Icon class="nav-icon" icon={faHome} />
          </div>
          <div class="flex-grow">
            3605 SE 26th Ave
            <br />
            <span class="text-sm">Portland, OR 97202</span>
          </div>
        </a>
      </div>
      <div class="flex-1 nav-item">
        <a
          href="https://phr.charmtracker.com/login.sas?FACILITY_ID=9fac109f10b85efdeadfd56aed2ab60a43b1154fc374a4756c8f7ea08edb2f3fd95fcbc3b76e32a2"
          target="_blank"
          alt="open patient portal"
          class="flex">
          <div class="flex-shrink">
            <Icon class="nav-icon" icon={faExternalLinkAlt} />
          </div>
          <div class="flex-grow">
            Go to Patient Portal
            <br />
            <span class="text-sm">(opens in new window)</span>
          </div>
        </a>
      </div>
      <div class="flex-shrink flex nav-item">
        <a href="https://www.facebook.com/HealthyLivingFamilyMedicine/" target="_blank" alt="HLC Facebook Page">
          <Icon class="nav-icon mx-2" icon={faFacebook} />
        </a>
        <a href="mailto:drkerry@healthylivingfamilymedicine.com" alt="Email Contact">
          <Icon class="nav-icon mx-2" icon={faEnvelope} />
        </a>
      </div>
      <div class="flex-shrink nav-item">
        <a
          href="tel:19712314536"
          class="rounded-full bg-yellow-900 hover:bg-orange-900 text-white
          text-xs py-2 px-3">
          <Icon icon={faPhoneAlt} class="mr-2" />
          (971) 231-4536
        </a>
      </div>
    </div>
  </div>
</nav>

import FeatureBanner from "./FeatureBanner";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white shadow-md rounded-lg pl-[3rem]">

        <div class="flex items-center text-sm text-gray-800 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" class="mr-2">
            <title>mobile icon</title>
            <path fill="#000" fill-rule="nonzero"
              d="M1.364 0A1.37 1.37 0 0 0 0 1.364v17.272A1.37 1.37 0 0 0 1.364 20h9.09a1.37 1.37 0 0 0 1.364-1.364V1.364A1.37 1.37 0 0 0 10.455 0H1.364zM.909 3.182h10v13.182h-10V3.182zm3.636 14.545h2.728a.455.455 0 0 1 0 .91H4.545a.455.455 0 0 1 0-.91z">
            </path>
          </svg>
          <span>Experience the Nykaa mobile app</span>
        </div>

        <div class="flex gap-3">
          <a href="https://nykaa.onelink.me/2573509543/aba6fc39" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play" class="h-9" />
          </a>
          <a href="https://nykaa.onelink.me/2573509543/aba6fc39" target="_blank" rel="noopener noreferrer">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store" class="h-9" />
          </a>
        </div>
      </div>

      <FeatureBanner />

      <SocialMediaLinks />
      {/* <div class="bg-[#e80071] py-3">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="flex justify-center items-center gap-2 text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <img
            src="https://images-static.nykaa.com/media/wysiwyg/2020/helpCenter.svg"
            alt="HELP CENTER"
            class="w-5 h-5"
          />
          HELP CENTER  
        </a>
      </div> */}
      <div class="bg-[#e80071] py-3">
  <a
    href="https://wa.me/919876543210?text=Hi%20I%20need%20help%20with%20the%20Help%20Center"
    target="_blank"
    rel="noopener noreferrer"
    class="flex justify-center items-center gap-2 text-white text-sm font-medium hover:opacity-90 transition-opacity"
  >
    <img
      src="https://images-static.nykaa.com/media/wysiwyg/2020/helpCenter.svg"
      alt="HELP CENTER"
      class="w-5 h-5"
    />
    HELP CENTER  
  </a>
</div>

      <div class="bg-[#e80071] py-4 mt-[2px]">
        <p class="text-center text-xs text-white font-medium">
          <span class="mr-1">©</span>2025 NYKAA E-RETAIL LIMITED All Rights Reserved.
        </p>
      </div>
      <div class="bg-white px-4 md:px-8 py-6">
  <div class="max-w-screen-xl mx-auto">
    <strong class="block text-sm text-gray-800 font-semibold mb-3">
      Popular Links
    </strong>
    <div class="flex flex-wrap text-xs text-gray-600 leading-relaxed">
      <span>lipstick,</span>
      <span>highlighter,</span>
      <span>hair serum,</span>
      <span>concealer,</span>
      <span>face mask,</span>
      <span>biotique,</span>
      <span>lip gloss,</span>
      <span>perfume for women,</span>
      <span>facial kit,</span>
      <span>bb cream,</span>
      <span>victoria secret,</span>
      <span>love beauty and planet shampoo,</span>
      <span>eyeliner,</span>
      <span>hair mask,</span>
      <span>face wash for oily skin,</span>
      <span>ordinary,</span>
      <span>toner,</span>
      <span>eyeshadow palette,</span>
      <span>cleanser,</span>
      <span>chemist at play,</span>
      <span>mascara,</span>
      <span>loreal professional,</span>
      <span>hair extensions,</span>
      <span>olay cream,</span>
      <span>fogg,</span>
      <span>lip tint,</span>
      <span>under eye cream,</span>
      <span>wax strips,</span>
      <span>shower gel,</span>
      <span>sunscreen for face,</span>
      <span>insight cosmetics,</span>
      <span>face foundation,</span>
      <span>hair removal machine,</span>
      <span>mac foundation,</span>
      <span>choker,</span>
      <span>oud perfume,</span>
      <span>makeup pouch,</span>
      <span>olaplex,</span>
      <span>body mist,</span>
      <span>wella shampoo,</span>
      <span>huda beauty foundation,</span>
      <span>night cream,</span>
      <span>facewash,</span>
      <span>nyx,</span>
      <span>schwarzkopf shampoo,</span>
      <span>blue heaven,</span>
      <span>peel off mask,</span>
      <span>best lip balm,</span>
      <span>face scrub,</span>
      <span>cetaphil face wash,</span>
      <span>mederma cream,</span>
      <span>multivitamins tablet,</span>
      <span>himalaya face wash,</span>
      <span>garnier face wash,</span>
      <span>hair color for women,</span>
      <span>cetaphil moisturizers,</span>
      <span>ponds face wash,</span>
      <span>streax hair serum,</span>
      <span>nivea body lotions,</span>
      <span>vaseline body lotions,</span>
      <span>sugar lipstick,</span>
      <span>biotin tablet,</span>
      <span>aqualogica sunscreen,</span>
      <span>salicylic acid face wash,</span>
      <span>fogg perfume,</span>
      <span>clean and clear face wash,</span>
      <span>neutrogena sunscreen,</span>
      <span>pears soaps,</span>
      <span>hair color for men,</span>
      <span>dry cleansers,</span>
      <span>face serum</span>
    </div>
  </div>
</div>

    </>
  );
};
export default Footer;

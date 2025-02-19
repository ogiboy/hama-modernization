import { FaGooglePlusG, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-white bg-[#0C0C0C] bg-dividerWhite bg-repeat-x font-robotoSlab">
      <address className="custom-container text-center pt-[150px] flex items-baseline justify-between flex-wrap not-italic">
        <article className="w-fit">
          <h3 className="pr-7 uppercase bg-whiteWave bg-no-repeat bg-bottom pb-[28px]">
            Projenizi Konuşun
          </h3>

          <p className="mt-10 text-xl leading-7 font-thin">
            0 542 344 09 70 <br /> 0 532 362 89 35
          </p>

          <a href="mailto:info@hamamutfak.com">info@hamamutfak.com</a>
        </article>

        <article className="w-fit">
          <h3 className="pr-7 uppercase bg-whiteWave bg-no-repeat bg-bottom pb-[28px]">
            Bize Ulaşın
          </h3>

          <p className="mt-10 text-xl leading-7 font-thin">
            Cevizli Mahallesi Zuhal Cad. <br /> A4 Blok No:46 D/29 Maltepe
          </p>
        </article>

        <div className="w-fit">
          <h3 className="pr-7 uppercase bg-whiteWave bg-no-repeat bg-bottom pb-[28px]">
            Bizi Takip Edin
          </h3>

          <section className="mt-10 w-full h-full flex justify-center items-center">
            <a className="border-2 border-[#262626] rounded-[30px] w-[90px] h-[60px] text-[26px] mx-[3px] leading-[60px] hover:bg-[#6476a8] hover:border-[#6476a8] flex justify-center items-center">
              <FaFacebookF />
            </a>
            <a className="border-2 border-[#262626] rounded-[30px] w-[90px] h-[60px] text-[26px] mx-[3px] leading-[60px] hover:bg-[#6dcbef] hover:border-[#6dcbef] flex justify-center items-center">
              <FaTwitter />
            </a>
            <a className="border-2 border-[#262626] rounded-[30px] w-[90px] h-[60px] text-[26px] mx-[3px] leading-[60px] hover:bg-[#d97b71] hover:border-[#d97b71] flex justify-center items-center">
              <FaGooglePlusG />
            </a>
          </section>
        </div>
      </address>

      <section className="w-full h-[302px] mt-[45px] bg-buildingDark bg-no-repeat">
        <div className="custom-container w-full h-full text-[#222] flex justify-around items-end">
          <p className="text-[16px] text-[#8d8d8d] leading-[36px] font-light">
            Copyright © 2019 Hama Endüstriyel Mutfak Sanayi Ve Ticaret Limited
            Şirketi. Tüm hakları saklıdır.
          </p>

          <p className="text-[16px] text-[#8d8d8d] leading-[36px]">
            Design by:{' '}
            <a
              className="text-mainColor hover:text-white"
              target="_blank"
              href="https://demarkelabs.com/"
            >
              De Marke Labs
            </a>
          </p>
        </div>
      </section>
    </footer>
  )
}
export default Footer

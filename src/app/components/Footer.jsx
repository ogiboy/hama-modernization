import { FaGooglePlusG, FaTwitter, FaFacebookF } from 'react-icons/fa'
import Image from 'next/image'

import { Roboto_Slab, Montserrat } from 'next/font/google'

import blackWave from '../../../public/black-wave.png'
import whiteWave from '../../../public/white-small-wave.png'

const Footer = () => {
  return (
    <footer className="text-white bg-[#0C0C0C] bg-[url('/divider-white.png')] bg-repeat-x border-2 border-red-800 border-dashed">
      <address className="text-center mt-[150px] flex items-baseline justify-center gap-5 flex-wrap">
        <article className="w-[400px]">
          <h3 className="pr-7 uppercase bg-[url('/white-small-wave.png')] bg-no-repeat bg-bottom">
            Projenizi Konuşun
          </h3>

          <p className="mt-10 text-xl leading-7 font-thin">
            0 542 344 09 70 <br /> 0 532 362 89 35
          </p>

          <a href="mailto:info@hamamutfak.com">info@hamamutfak.com</a>
        </article>

        <article className="w-[400px]">
          <h3 className="pr-7 uppercase bg-[url('/white-small-wave.png')] bg-no-repeat bg-bottom">
            Bize Ulaşın
          </h3>

          <p className="mt-10 text-xl leading-7 font-thin">
            Cevizli Mahallesi Zuhal Cad. <br /> A4 Blok No:46 D/29 Maltepe
          </p>
        </article>

        <div className="w-[400px]">
          <h3 className="pr-7 uppercase bg-[url('/white-small-wave.png')] bg-no-repeat bg-bottom">
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
        <div className="w-full h-full text-[#222] flex justify-around items-end">
          <p className="text-[16px]">
            Copyright © 2019 Hama Endüstriyel Mutfak Sanayi Ve Ticaret Limited
            Şirketi. Tüm hakları saklıdır.
          </p>

          <p className="text-[16px]">
            Design by:{' '}
            <a target="_blank" href="https://demarkelabs.com/">
              De Marke Labs
            </a>
          </p>
        </div>
      </section>
    </footer>
  )
}
export default Footer

import Heading from '@/app/components/Heading'
import PageHeader from '@/app/components/PageHeader'
import { Fragment } from 'react'

const About = () => {
  const aboutDetails = [
    {
      id: 0,
      text: `HAMA Endüstriyel Mutfak San. Ve Tic. Ltd. Şti.(HAMA), Endüstriyel
            Mutfak, Çamaşırhane, Açık Büfe, Servis Ekipmanları ve Medikal
            Ekipmanlar konusunda, Hotel, Restaurant, Cafeteria, Fast Food
            Zincirleri, Eğitim Kurumları, Hastaneler, Alışveriş Merkezleri,
            Bankalar, Ofis Binaları gibi işletmeler için uzman ve dinamik proje
            yöneticileri ve teknik kadrosu ile Projelendirme, Satış, Montaj ve
            Satış Sonrası Servis konularında hizmet vermek amacı ile 2018
            yılında kurulmuştur.`,
    },

    {
      id: 2,
      text: `Şirket kurucularının sektördeki 22 yıllık proje tasarım ve satış
            deneyiminden yola çıkılarak kurulan HAMA için ana prensip, Mutfak,
            Çamaşırhane ve Açık büfelerde işletim şeması doğru sağlık
            kurallarına uygun, (HACCP Regulations), yatırımcı ve işletmecilerin
            yüksek teknoloji ve kaliteli çözüm beklentisine cevap verecek
            planlamayı sağlamaktır.`,
    },

    {
      id: 3,
      text: `Proje grubu tarafından bu ana prensip doğrultusunda her türlü ortama
            uygun, verimlilik arttırıcı çok yönlü tasarımlar hazırlanmakta ve
            projelerin anahtar teslimi kurulumu gerçekleştirilmektedir.`,
    },
    {
      id: 4,
      text: `HAMA, Proje tasarım ve kurulum aşamasında, yapıların işletim
            aşamasını da göz önüne alarak proje risklerini yönetir ve bu sayede
            projenin değerini ve performansını arttırarak işverenin başarılı
            olmasında ona destek olur.`,
    },
    {
      id: 5,
      text: `HAMA, yerli ve ithal birçok ekipmanın tedarikini Türkiye de sektörün
            öncüsü olan markalardan sağlamaktadır. Ayrıca iş birlikteliği
            yaptığı firmalar ile beraber paslanmaz çelik mutfak teçhizatı
            üretimini gerçekleştirmektedir.`,
    },
  ]

  const listItems = [
    'Müşteri Odaklı Hizmet',
    'İş Ahlakı ve Dürüstlük',
    'Çalışanların Mutluluğu',
    'İş Ortaklarımıza Saygı',
    'Kaliteli Ürün Kaliteli Hizmet',
    'Müşteri Memnuniyeti',
  ]

  const sections = [
    {
      id: 1,
      heading: 'Vizyonumuz',
      headingLevel: 'h2',
      paragraph: `Bölgesel pazarda ve yakın coğrafyada (Orta doğu, Türki
            Cumhuriyetler, Afrika) ilk 5 markadan biri olmak.`,
    },
    {
      id: 2,
      heading: 'Misyonumuz',
      headingLevel: 'h2',
      paragraph: `Endüstriyel Mutfak sektöründe, çalışanları ile birlikte sürekli
            gelişerek, evrensel kalite ve standartlarda proje, ürün ve hizmetler
            sunarak müşterilerin memnuniyetini sağlamak.`,
    },
    {
      id: 3,
      heading: 'Müşteri Odaklı Olmak',
      headingLevel: 'h3',
      paragraph: `Müşterilerimiz için değer yaratmak, beklentilerine kalite ve
            hizmette süreklilik sağlayarak karşılık vermek önceliğimizdir.
            Projelerimiz ve ürünlerimize sahip çıkarak satış sonrasında da
            müşterilerimizin yanında olmak görevimizdir.`,
    },
    {
      id: 4,
      heading: 'İş Ahlakı ve Dürüstlük İlkelerine Bağlı Kalmak',
      headingLevel: 'h3',
      paragraph: `Tüm ilişkilerimizde dürüst, adilane, iyi niyet ve anlayış ile
            davranarak yasalara ve ahlak kurallarına daima uymak ilkemizdir.
            Topluma ve çevreye sürekli bir katma değer sağlamak görevimizdir.`,
    },
    {
      id: 5,
      heading: 'Çalışanların Mutluluğunu Sağlamak',
      headingLevel: 'h3',
      paragraph: `Hizmetlerimizin kalitesi çalışanlarımızın kalitesi ile başlar.
            Çalışanların özlük haklarının tam ve doğru biçimde kullanılmasını
            sağlamak, dürüst, adil, ayrımcı olmayan, güvenli ve sağlıklı bir
            yaklaşımda bulunmak, bireysel gelişimleri için gerekli çabayı
            göstermek kurumumuzun devamlılığını sağlamak için seçtiğimiz yoldur.`,
    },
    {
      id: 6,
      heading: 'Tedarikçi / İş Ortaklarımıza Saygı Duymak',
      headingLevel: 'h3',
      paragraph: `İyi bir müşteriden beklendiği şekilde adil ve saygılı davranmak,
            yükümlülüklerimizi zamanında yerine getirmek için gerekli özeni
            göstermek, İş yaptığımız kişi ve kuruluşlar ile iş ortaklarımızın
            gizli bilgilerini özenle korumak en temel ilkelerimizdendir.`,
    },
  ]

  function Section({ title, content, headingLevel }) {
    return (
      <section className="">
        <Heading
          as={headingLevel}
          className="bg-blackWave bg-no-repeat bg-bottom pb-[18px]"
        >
          {title}
        </Heading>
        <p>{content}</p>
      </section>
    )
  }

  return (
    <main>
      <PageHeader heading="HAMA" paragraph="ENDÜSTRİYEL MUTFAK HİZMETLERİ" />

      <div className="custom-container h-[400px] mt-[150px] bg-slate-400">
        slider
      </div>

      <div className="lg:w-[1200px] md:w-[992px] sm:w-[750px] mx-auto">
        <article className="text-[#222] font-robotoSlab w-full flex justify-between items-start flex-wrap mt-[60px]">
          <div className="w-2/3 ">
            {aboutDetails.map((paragraph) => {
              return (
                <p
                  className="mb-5 font-light text-xl leading-9 text-[20px] first:first-letter:text-[54px]"
                  key={paragraph.id}
                >
                  {paragraph.text}
                </p>
              )
            })}
          </div>
          <div className="w-1/3 pl-[15px]">
            <ol className="py-5 pl-5 bg-[#f7f8f9] list-none counter-list font-montserrat">
              {listItems.map((item, index) => {
                return (
                  <li key={index} className="leading-[48px] text-xl">
                    {item}
                  </li>
                )
              })}
            </ol>
          </div>
        </article>
      </div>

      <article className="custom-container py-[110px] text-center">
        <h4 className="text-mainColor tracking-[11px]">
          VİZYONUMUZ / MİSYONUMUZ
        </h4>
        {sections.slice(0, 2).map((section) => {
          return (
            <Fragment key={section.id}>
              <br />
              <br />
              <br />
              <Section
                title={section.heading}
                content={section.paragraph}
                headingLevel={section.headingLevel}
              />
            </Fragment>
          )
        })}
      </article>
      <article className="py-[110px] text-center bg-[#f7f8f9]">
        <div className="custom-container">
          <h4 className="text-mainColor tracking-[11px]">DEĞERLERİMİZ</h4>
          {sections.slice(2).map((section) => {
            return (
              <Fragment key={section.id}>
                <br />
                <Section
                  key={section.id}
                  title={section.heading}
                  content={section.paragraph}
                  headingLevel={section.headingLevel}
                />
              </Fragment>
            )
          })}
        </div>
      </article>

      <article className="z-50 bg-aboutUs bg-fixed bg-[110%] bg-no-repeat py-[110px] text-white w-full mx-auto">
        <h4 className="text-center tracking-[11px] font-light">
          BULUNDUĞUMUZ PROJELER
        </h4>

        <section className="custom-container flex justify-around items-center text-nowrap flex-wrap font-bold font-robotoSlab mt-[90px]">
          <ul className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base">
            <li>Fenerbahçe Topuk Yaylası Resort & Sport - Bolu</li>
            <li>Wyndham Grand İstanbul Europe - İstanbul</li>
            <li>Le Mirage Hotel - Katar Doha</li>
            <li>Bagram Hava Üssü - Afganistan</li>
          </ul>

          <ul className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base">
            <li>Türmenbaşı Uluslararası Havaalanı - Türkmenistan</li>
            <li>The Grand Tarabya - İstanbul</li>
            <li>Park Hyatt İstanbul Maçka Palas - İstanbul</li>
            <li>D Hotel Maris - Marmaris</li>
          </ul>

          <ul className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base">
            <li>Radisson Blu Iveria Hotel - Gürcistan</li>
            <li>Radisson Blu Hotel & Spa - İstanbul</li>
            <li>
              Hilton İstanbul Bomonti Hotel & Conferance Center - İstanbul
            </li>
            <li>Hilton İstanbul Kozyatağı - İstanbul</li>
          </ul>

          <ul className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base">
            <li>Payne Amerikan Askeri Kampı - Afganistan</li>
            <li>Geranimo Amerikan Askeri Kampı - Afganistan</li>
            <li>Bağdat Amerikan Askeri Kampı - Irak</li>
            <li>Reina, Suada Club İstanbul - Ortaköy</li>
          </ul>
        </section>
      </article>
    </main>
  )
}
export default About

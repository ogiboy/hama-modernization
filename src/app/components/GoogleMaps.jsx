import { GoogleMapsEmbed } from '@next/third-parties/google'

const Map = () => {
  return (
    <section className="custom-container mx-auto my-14">
      <GoogleMapsEmbed
        mode="place"
        q="Zuhal+Caddesi,No:46,D:29"
        apiKey="AIzaSyApHzxiThZSdPYE00cv6-Q6pY3T_4WNESE"
        height="520px"
        width="100%"
      />
    </section>
  )
}
export default Map

import commonStyles from '../styles/pages/common.module.css'
import advertStyles from '../styles/components/advert.module.css'

const Advert = () => (
	<div className={`${advertStyles['ad-div']} ${commonStyles['common-right']}`}>
		{/* <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div> */}
		{/* <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div> */}
		<div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
		<div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
		<div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
		<div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
		{/* <div><img src="http://blogimages.jspang.com/flutter_ad1.jpg" width="100%" /></div> */}
	</div>
)

export default Advert

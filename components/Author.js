import { Avatar, Divider } from 'antd'
import { GithubOutlined, WechatOutlined, QqOutlined, ZhihuOutlined } from '@ant-design/icons'
import authorStyles from '../styles/components/author.module.css'

const Author = () => {
	return (
		<div className={authorStyles['author-div']}>
			<div>
				<Avatar size={100} src="https://avatars3.githubusercontent.com/u/19323442?s=460&u=24cf094d1f2d53f3589130b073d3fb3efa74a8ac&v=4"  className={authorStyles['author-img']} />
			</div>
			<div className={authorStyles['author-introducation']}>
				前端程序员，专注于WEB前端开发和PC重构。雄关漫步真如铁，而今迈步从头越。此地维权无门，此时无能为力，此心随波逐流。
			</div>
			<Divider>社交帐号</Divider>
			<Avatar size={28} icon={<GithubOutlined />} className={authorStyles['account']} />
			<Avatar size={28} icon={<WechatOutlined />} className={authorStyles['account']} />
			<Avatar size={28} icon={<ZhihuOutlined />} className={authorStyles['account']} />
			<Avatar size={28} icon={<QqOutlined />} className={authorStyles['account']} />
		</div>
	)
}

export default Author

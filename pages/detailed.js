import React from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb } from 'antd'
import { CalendarOutlined, FolderAddOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import commonStyles from '../styles/pages/common.module.css'
import detailedStyles from '../styles/pages/detailed.module.css'

const Detailed = () => (
	<>
		<Head>
			<title>Detailed page</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header />
		<Row className={commonStyles['common-mail']} type="flex" justify="center">
			<Col className={commonStyles['common-left']} xs={24} sm={24} md={16} lg={18} xl={14} >
				<div className={detailedStyles['bread-div']}>
					<Breadcrumb>
						<Breadcrumb.Item>
							<a href='/' >首页</a>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							<a href='/list' >视频列表</a>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							xxx title xxx
						</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div>
					<div className={detailedStyles['detailed-title']}>
						React实战视频教程-技术胖Blog开发(更新08集)
					</div>
					<div className={`${detailedStyles['center']} ${commonStyles['list-icon']}`} >
						<span><CalendarOutlined /> 2019-06-28</span>
						<span><FolderAddOutlined /> 视频教程</span>
						<span><FireOutlined /> 5498人</span>
					</div>
					<div className={detailedStyles['detailed-content']}>
					详细内容，详细内容，详细内容，详细内容，详细内容，
					</div>
				</div>
			</Col>
			<Col xs={0} sm={0} md={7} lg={5} xl={4} >
				<Author />
				<Advert />
			</Col>
		</Row>
		<Footer />
	</>
)

export default Detailed


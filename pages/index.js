import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { Row, Col, List, Breadcrumb } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import commonStyles from '../styles/pages/common.module.css'
import listStyles from '../styles/pages/list.module.css'

const Home = (list) => {
	const [myList, setMyList] = useState(list.data);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Row className={commonStyles['common-main']} type="flex" justify="center">
				<Col className={commonStyles['common-left']} xs={24} sm={24} md={16} lg={18} xl={14} >
					<div className={commonStyles['bread-div']} >
						<Breadcrumb>
							<Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
							<Breadcrumb.Item><a>视频列表</a></Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<List
						header={<div>最新日志</div>}
						itemLayout="vertical"
						dataSource={myList}
						renderItem={item => (
							<List.Item>
								<div className={listStyles['list-title']}>{item.title}</div>
								<div className={listStyles['list-icon']}>
									<span> <CalendarOutlined />{item.addTime}</span>
									<span> <FolderOutlined /> {item.typeName}</span>
									<span> <FireOutlined /> {item.viewCount}人</span>
								</div>
								<div className={listStyles['list-context']}>{item.intro}</div>
							</List.Item>
						)}
					/>
				</Col>
				<Col xs={0} sm={0} md={7} lg={5} xl={4} >
					<Author />
					<Advert />
				</Col>
			</Row>
			<Footer />
		</div>
	)
}

Home.getInitialProps = async () => {
	const promise = new Promise((resolve) => {
		axios('http://127.0.0.1:7001/getArticleList').then((res) => {
			console.log(res.data);
			resolve(res.data);
		})
	})
	return await promise;
}

export default Home

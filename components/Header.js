import React from 'react';
import { Row, Col, Menu } from 'antd'
import { SmileOutlined, HomeOutlined, YoutubeOutlined, } from '@ant-design/icons'
import styles from '../styles/components/header.module.css'
const Header = () => (
	<div className={styles.header}>
		<Row type="flex" justify="center">
			<Col xs={24} sm={24} md={10} lg={15} xl={12} >
				<span className={styles['header-logo']}>幽灵自醒</span>
				<span className={styles['header-text']}>前端开发---专注PC重构</span>
			</Col>
			<Col xs={0} sm={0} md={14} lg={8} xl={6} >
				<Menu mode="horizontal">
					<Menu.Item key="home">
						<HomeOutlined />
						首页
					</Menu.Item>
					<Menu.Item key="video">
						<YoutubeOutlined />
						视频
					</Menu.Item>
					<Menu.Item key="life">
						<SmileOutlined />
						生活
					</Menu.Item>
				</Menu>
			</Col>
		</Row>
	</div>
)

export default Header;

import React from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import { CalendarOutlined, FolderAddOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import commonStyles from '../styles/pages/common.module.css'
import detailedStyles from '../styles/pages/detailed.module.css'

const Detailed = () => {
	let markdown = '# P01:课程介绍和环境搭建\n' +
		'[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
		'> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
		'**这是加粗的文字**\n\n' +
		'*这是倾斜的文字*`\n\n' +
		'***这是斜体加粗的文字***\n\n' +
		'~~这是加删除线的文字~~ \n\n' +
		'\`console.log(111)\` \n\n' +
		'# p02:来个Hello World 初始Vue3.0\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n' +
		'***\n\n\n' +
		'# p03:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p04:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p05:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p06:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p07:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p03:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p04:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'#  p05:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p06:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p07:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p03:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p04:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p05:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p06:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p07:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p03:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p04:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p05:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p06:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'# p07:Vue3.0基础知识讲解\n' +
		'> aaaaaaaaa\n' +
		'>> bbbbbbbbb\n' +
		'>>> cccccccccc\n\n' +
		'``` var a=11; ```'
	return (
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
							<ReactMarkdown
								source={markdown}
								escapeHtml={false}
							/>
						</div>
					</div>
				</Col>
				<Col xs={0} sm={0} md={7} lg={5} xl={4} >
					<Author />
					<Advert />
					<Affix offsetTop={5} >
						<div className={`${detailedStyles['detailed-nav']} ${commonStyles['common-right']}`}>
							<div className={detailedStyles['nav-title']}>文章目录</div>
							<MarkNav
								className={detailedStyles['article-menu']}
								source={markdown}
								ordered
							/>
						</div>
					</Affix>
				</Col>
			</Row>
			<Footer />
		</>
	)
}

export default Detailed


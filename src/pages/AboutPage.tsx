import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>关于我 | 我的技术博客</title>
        <meta name="description" content="全栈工程师张三，分享前端工程化与性能优化心得。" />
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>关于我</h1>
        <div className={styles.aboutContent}>
          <p>👋 你好，我是孟德，一名热爱技术的在校学生。</p>
          <p>目前专注于前端工程化、性能优化和React生态。在疯狂学习提升自己中</p>
          <p>这个博客记录我的学习心得、实战技巧，希望能帮助到同样热爱前端的你。</p>
          <p>📧 联系我：meng.de@example.com</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
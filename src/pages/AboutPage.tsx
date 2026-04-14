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
          <p>👋 你好，我是黑色一天，一名热爱技术的在校学生。</p>
          <p>大家好，我是一名计算机专业的在校学生。平时喜欢研究编程、软件和互联网相关技术，做事踏实有耐心，喜欢动手实践解决问题。在学习上认真严谨，也乐于和同学交流合作，希望在大学期间不断提升自己，在计算机这条路上稳步前行。目前专注于前端工程化、性能优化和React生态。在疯狂学习提升自己中</p>
          <p>这个博客记录我的学习心得、实战技巧，希望能帮助到同样热爱前端的你。</p>
          <p>📧 联系我：heiseyitian@example.com</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
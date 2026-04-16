import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const ForumPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>技术论坛 | 我的技术博客</title>
        <meta
          name="description"
          content="专注前端、后端、编程学习交流的技术论坛，分享开发经验、问题解答与实战项目。"
        />
      </Helmet>

      <div className={styles.page}>
        <h1 className={styles.pageTitle}>技术论坛</h1>

        <div className={styles.forumContent}>
          <p>💬 欢迎来到我的技术论坛，这里是开发者交流、学习、互助的小天地。</p>

          <p>
            无论你是前端、后端、移动端开发者，还是刚入门的编程新手，都可以在这里分享学习心得、提问求助、讨论技术趋势、展示自己的项目作品。
            我会定期分享前端工程化、React 开发、性能优化等干货内容，也欢迎大家积极发帖交流。
          </p>

          <h3 className={styles.forumSubTitle}>论坛板块</h3>
          <ul className={styles.forumList}>
            <li>📝 前端开发：HTML/CSS/JS、React、Vue、工程化</li>
            <li>⚙️ 后端技术：Node.js、数据库、接口开发</li>
            <li>🐛 问题求助：编程报错、bug 排查、思路指导</li>
            <li>🚀 项目实战：实战案例、开源项目、学习路线</li>
            <li>📚 学习资源：优质教程、工具推荐、学习心得</li>
          </ul>

          <h3 className={styles.forumSubTitle}>论坛规则</h3>
          <p>文明交流、尊重他人、拒绝广告、专注技术、共同进步～</p>

          <p>📌 论坛持续更新中，欢迎常来交流技术！</p>
        </div>
      </div>
    </>
  );
};

export default ForumPage;
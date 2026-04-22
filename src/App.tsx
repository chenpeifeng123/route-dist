import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ForumPage from './pages/ForumPage'; // 👈 新增导入论坛页面

const App: React.FC = () => {
  const [blogTitle] = useState<string>("Welcome to my blog!");

  const handleSubscribe = (email: string) => {
    console.log("App 组件收到了订阅邮箱:", email);
    alert(`感谢订阅！邮箱 ${email} 已收到。`);
  };

  const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useTheme();

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return <>{children}</>;
  };

  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div className={styles.pageLayout}>
          <Header title={blogTitle} />
          <Nav />

          <main className={styles.mainArea}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:id" element={<ArticleDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              
              {/* 👇 在这里加上论坛路由 */}
              <Route path="/forum" element={<ForumPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Sidebar onSubscribe={handleSubscribe} />
          <Footer />
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
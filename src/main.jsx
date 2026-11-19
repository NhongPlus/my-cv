import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const skillGroups = [
  { label: 'Ngôn ngữ', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'C#'] },
  { label: 'Framework & Library', items: ['ReactJS', 'Vue.js 3', 'Redux', 'React Router'] },
  { label: 'UI/CSS', items: ['Mantine', 'Ant Design', 'Element UI', 'TailwindCSS', 'Bootstrap 5'] },
  { label: 'API & Realtime', items: ['Axios', 'RESTful API'] },
  { label: 'Công cụ', items: ['Git', 'GitHub', 'Vite', 'Storybook', 'Postman', 'Figma'] },
  { label: 'AI Coding Agent', items: ['Cursor', 'ChatGPT', 'Gemini'] },
];

const experiences = [
  {
    role: 'Fresher Frontend',
    date: '12/2025 – 08/2026',
    company: 'Công ty Icomm Media & Tech, Jsc',
    highlights: [
      'Phát triển giao diện Dashboard theo dõi trạng thái thiết bị, chỉ số AI Detection và Health-Check.',
      'Tích hợp bộ lọc đa điều kiện cho Browser Profile và tính năng cảnh báo dung lượng máy khi tạo profile.',
      'Xây dựng các màn hình quản lý, tra cứu Log lỗi (log-action-account, handle-error-with-ai), tự động di chuyển đến node bị lỗi.',
      'Phát triển các Node xử lý dữ liệu và tự động hóa tác vụ (Screenshot, Key press, Condition) chạy đa nền tảng (Windows, Docker, Server).',
      'Xây dựng và tối ưu các luồng tự động hóa tương tác/cào dữ liệu trên các nền tảng mạng xã hội.',
    ],
  },
  {
    role: 'Intern Frontend',
    date: '12/2024 – 06/2025',
    company: 'Công ty Atomi Digital',
    highlights: [
      'Xây dựng giao diện người dùng từ thiết kế Figma theo chuẩn perfect-pixel.',
      'Sử dụng ReactJS kết hợp với Mantine UI để dựng giao diện và xử lý form.',
    ],
  },
];

const projects = [
  {
    name: 'Website thi online',
    highlights: [
      'Xây dựng hệ thống quản lý thi trực tuyến dành cho Admin, Teacher và Student.',
      'Hỗ trợ import đề thi từ file Word và quản lý câu hỏi có hình ảnh.',
      'Phát triển các chức năng quản lý đề thi, câu hỏi, môn học, làm bài thi và chấm điểm.',
      'Hỗ trợ giám sát thi, thống kê kết quả và phân quyền người dùng.',
    ],
    demo: 'https://nhongplus.id.vn/login',
  },
  {
    name: 'Website quản lý lớp học',
    highlights: [
      'Xây dựng hệ thống quản lý lớp học với các vai trò Admin, Teacher, Student.',
      'Phát triển các chức năng quản lý học viên, giáo viên, lớp học, lịch học và điểm danh.',
      'Xây dựng module quản lý học phí, thanh toán, báo cáo thống kê và phân quyền theo RBAC.',
    ],
    demo: 'https://education-center-platform.vercel.app/',
  },
];

const projectTech = 'ReactJS, Node.js, ExpressJS, PostgreSQL, Socket.IO, Mantine UI';

function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 3h3l2 5-2 1.5a15 15 0 0 0 4.5 4.5L16 12l5 2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 6c0-1.7.7-3 2-3Z" /></svg>;
}

function LocationIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function ExternalLinkIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></svg>;
}

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

function Contact({ href, icon: Icon, children }) {
  return (
    <a className="contact-item" href={href}>
      <Icon />
      {children}
    </a>
  );
}

function App() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top">BAO LONG <span aria-hidden="true">/</span> CV</a>
          <nav aria-label="Điều hướng CV">
            <a href="#about">Giới thiệu</a>
            <a href="#experience">Kinh nghiệm</a>
            <a href="#projects">Dự án</a>
          </nav>
        </div>
      </header>

      <div className="page" id="top">
        <header className="hero">
          <div className="hero-content">
            <h1>Nguyễn Ngọc<br />Bảo Long</h1>
            <p className="hero-subtitle">Frontend Developer · Intern Web</p>
            <div className="contact-row">
              <Contact href="mailto:nnbaolong260324@gmail.com" icon={MailIcon}>nnbaolong260324@gmail.com</Contact>
              <Contact href="tel:0395500961" icon={PhoneIcon}>0395 500 961</Contact>
              <span className="contact-item"><LocationIcon />Ngọc Hồi, Hà Nội</span>
            </div>
          </div>
        </header>

        <main>
          <Section id="about" title="Tóm tắt bản thân">
            <p>Bản thân có kinh nghiệm thực tế với ReactJS, JavaScript/TypeScript và xây dựng giao diện Dashboard, xử lý Workflow Automation. Có tư duy tối ưu UI/UX, tinh thần chủ động học hỏi công nghệ mới và mong muốn đóng góp vào các sản phẩm web quy mô lớn.</p>
          </Section>

          <Section id="skills" title="Kỹ năng">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <span className="skill-label">{group.label}</span>
                <div className="tags">
                  {group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </Section>

          <Section id="experience" title="Kinh nghiệm làm việc">
            {experiences.map((experience) => (
              <article className="entry" key={experience.company}>
                <div className="entry-heading">
                  <h3>{experience.role}</h3>
                  <span className="date">{experience.date}</span>
                </div>
                <p className="entry-meta">{experience.company}</p>
                <ul>
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            ))}
          </Section>

          <Section id="projects" title="Dự án cá nhân">
            {projects.map((project) => (
              <article className="entry project" key={project.name}>
                <div className="entry-heading"><h3>{project.name}</h3></div>
                <ul>
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <p className="project-tech"><strong>Công nghệ:</strong> {projectTech}</p>
                <a className="demo-link" href={project.demo} target="_blank" rel="noopener noreferrer">
                  Xem website demo
                  <ExternalLinkIcon />
                </a>
              </article>
            ))}
          </Section>

          <Section id="education" title="Học vấn">
            <div className="education-line"><strong>Đại học Đại Nam</strong></div>
          </Section>
        </main>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

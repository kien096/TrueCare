"use client";

import { useEffect } from "react";

const heroImage = "/images/hero.png";
const merchantImage = "/images/merchant.png";

const reasons = [
  { icon: "search", title: "Thông tin tiệm rõ ràng", text: "Dịch vụ, bảng giá, vị trí và đánh giá — bạn nắm đủ thông tin trước khi quyết định." },
  { icon: "event_available", title: "Giữ chỗ trước 30 phút", text: "Đặt lịch trước để đảm bảo có slot. Tới tiệm là vào làm, không cần chờ đợi." },
  { icon: "verified_user", title: "Minh bạch sau dịch vụ", text: "Check-in bằng QR và ảnh trước/sau giúp cả bạn và tiệm có bằng chứng rõ ràng." },
  { icon: "star", title: "Đánh giá từ khách thực tế", text: "Mỗi review đều gắn với lượt dịch vụ thật. Không có đánh giá ảo hay bình luận không xác thực." },
];

const useCases = [
  { title: "Trước cuộc hẹn quan trọng", text: "Một chiếc xe sạch sẽ thể hiện sự chuyên nghiệp khi bạn gặp đối tác hay khách hàng." },
  { title: "Sau những ngày mưa", text: "Xe bám bụi, bạn muốn rửa nhưng ngại tiệm đông. Đặt trước để có slot ngay." },
  { title: "Tiện đường đi làm về", text: "Chọn tiệm thuận lộ trình, giữ chỗ sẵn và ghé rửa trên đường về nhà." },
  { title: "Chăm sóc xe định kỳ", text: "Xem lại tiệm đã dùng, đặt lịch lại nhanh chóng — không cần tìm kiếm lại từ đầu." },
];

const services = ["Rửa ngoài", "Rửa trong ngoài", "Hút bụi nội thất", "Vệ sinh kính", "Rửa gầm", "Combo giờ vàng"];

const faqs = [
  { q: "TrueCare có hỗ trợ tìm tiệm rửa xe gần vị trí của tôi không?", a: "Có. Ứng dụng sẽ hiển thị các tiệm gần bạn nhất, kèm bảng giá và loại dịch vụ để bạn lựa chọn." },
  { q: "Tôi có cần gọi điện trước cho tiệm không?", a: "Không cần. Bạn chọn tiệm và giữ chỗ trên ứng dụng, tiệm sẽ nhận được thông báo ngay lập tức." },
  { q: "TrueCare chỉ dành cho dịch vụ car spa cao cấp?", a: "Không. Hiện tại TrueCare tập trung vào rửa xe hàng ngày. Các dịch vụ detailing, vệ sinh nội thất và bảo dưỡng nhanh sẽ sớm được bổ sung." },
  { q: "Làm sao để biết tiệm nào uy tín?", a: "Mỗi tiệm đều có đánh giá từ khách hàng thực tế, kèm ảnh trước/sau dịch vụ để bạn tham khảo trước khi quyết định." },
];

const steps: [string, string, string][] = [
  ["1", "Mở ứng dụng", "Xem tiệm gần bạn"],
  ["2", "Chọn dịch vụ", "Gói phù hợp nhu cầu"],
  ["3", "Giữ chỗ", "Đảm bảo slot trong 30 phút"],
  ["4", "Check-in", "Quét QR khi đến tiệm"],
  ["5", "Hoàn tất", "Xem ảnh và đánh giá"],
];

function Icon({ name }: { name: string }) {
  return <span className="material-symbols-outlined" aria-hidden="true">{name}</span>;
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], [data-stagger]");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      {/* ─── HERO ─── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__badge"><Icon name="directions_car" /> Nền tảng đặt lịch rửa xe &amp; chăm sóc xe ô tô</div>
            <h1 id="hero-title">Đặt lịch rửa xe<br /><em>chủ động</em> và minh bạch.</h1>
            <p className="hero__sub">
              Tìm tiệm uy tín gần bạn, xem bảng giá, giữ chỗ trước 30 phút và nhận ảnh xác nhận sau dịch vụ.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#booking"><Icon name="calendar_month" /> Đặt lịch rửa xe</a>
              <a className="btn btn--outline" href="#how-it-works"><Icon name="play_circle" /> Cách hoạt động</a>
            </div>
          </div>
          <div className="hero__visual" data-reveal="right">
            <img src={heroImage} alt="Xe đang được chăm sóc tại tiệm rửa xe chuyên nghiệp" />
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS (Quy trình) ─── */}
      <section className="section section--soft" id="how-it-works">
        <div className="section__inner">
          <div className="sh sh--center" data-reveal>
            <div className="sh__kicker">Cách hoạt động</div>
            <h2>Đặt lịch chỉ trong vài bước</h2>
            <p>Từ lúc mở ứng dụng đến khi hoàn tất dịch vụ tại tiệm — đơn giản và nhanh chóng.</p>
          </div>
          <div className="steps-list" data-stagger>
            {steps.map(([num, title, text]) => (
              <div className={`step-item${num === "3" ? " step-item--active" : ""}`} key={num}>
                <div className="step-item__num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY TRUECARE ─── */}
      <section className="section" id="about">
        <div className="section__inner">
          <div className="two-col">
            <div className="two-col__media" data-reveal="left">
              <img src={heroImage} alt="Nhân viên đang chăm sóc xe ô tô" />
            </div>
            <div className="two-col__text" data-reveal="right">
              <div className="sh__kicker">Về TrueCare</div>
              <h2>Rửa xe không nên là chuyện phải lo.</h2>
              <p>Tìm tiệm trên bản đồ, tới nơi thì đông, chờ 30–40 phút mà không biết giá trước. Đó là trải nghiệm mà hầu hết chủ xe đang chấp nhận.</p>
              <p>TrueCare thay đổi điều đó: thông tin tiệm rõ ràng, đặt lịch chủ động, giữ chỗ trước và có ảnh xác nhận sau mỗi lượt dịch vụ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REASONS (gộp Benefits + Differences) ─── */}
      <section className="section section--dark" id="reasons">
        <div className="section__inner">
          <div className="sh sh--center" data-reveal>
            <div className="sh__kicker">Điểm khác biệt</div>
            <h2>Không chỉ tìm tiệm — mà giúp bạn chọn đúng tiệm.</h2>
            <p>Bản đồ cho bạn địa chỉ. TrueCare cho bạn thông tin để ra quyết định.</p>
          </div>
          <div className="reason-grid" data-stagger>
            {reasons.map((r) => (
              <article className="reason-card" key={r.title}>
                <div className="reason-card__icon"><Icon name={r.icon} /></div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="section section--soft" id="use-cases">
        <div className="section__inner">
          <div className="sh sh--center" data-reveal>
            <div className="sh__kicker">Tình huống thực tế</div>
            <h2>Khi nào bạn cần TrueCare?</h2>
            <p>Những tình huống quen thuộc mà việc chủ động đặt lịch sẽ giúp bạn tiết kiệm thời gian.</p>
          </div>
          <div className="card-grid" data-stagger>
            {useCases.map((item, i) => (
              <article className="card" key={item.title}>
                <div className="card__num">0{i + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MERCHANT ─── */}
      <section className="section" id="merchant">
        <div className="section__inner">
          <div className="two-col">
            <div className="two-col__text" data-reveal="left">
              <div className="sh__kicker">Tiệm đối tác</div>
              <h2>Tiệm trên TrueCare đều được kiểm duyệt trước khi lên sàn.</h2>
              <p>Chúng tôi hợp tác với các tiệm có bảng giá minh bạch, quy trình vận hành chuẩn và cam kết chụp ảnh trước/sau mỗi lượt dịch vụ.</p>
            </div>
            <div className="two-col__media" data-reveal="right">
              <img src={merchantImage} alt="Kỹ thuật viên chăm sóc xe chuyên nghiệp" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TASCO + VETC PARTNER ─── */}
      <section className="section section--green">
        <div className="section__inner">
          <div className="partner-block" data-reveal>
            <div className="sh sh--center">
              <div className="sh__kicker">Đối tác chiến lược</div>
              <h2>Hợp tác cùng Tasco — tích hợp thanh toán VETC.</h2>
              <p>TrueCare hợp tác với Tập đoàn Tasco, đơn vị vận hành hệ thống thu phí không dừng VETC trên toàn quốc, để mang đến trải nghiệm thanh toán liền mạch cho chủ xe.</p>
            </div>
            <div className="partner-logos">
              <div className="partner-logos__item">
                <div className="partner-logos__icon"><Icon name="toll" /></div>
                <span>Tasco Group</span>
              </div>
              <div className="partner-logos__item">
                <div className="partner-logos__icon"><Icon name="contactless" /></div>
                <span>VETC</span>
              </div>
            </div>
            <ul className="partner-features" data-stagger>
              <li><Icon name="check_circle" />Thanh toán dịch vụ rửa xe qua tài khoản giao thông VETC — không cần tiền mặt.</li>
              <li><Icon name="check_circle" />Tích điểm VETC Loyalty mỗi lượt rửa xe, quy đổi 1 điểm = 1 VNĐ.</li>
              <li><Icon name="check_circle" />Liên kết thẻ E-tag sẵn có — hơn 5 triệu xe ô tô đã dán thẻ trên toàn quốc.</li>
              <li><Icon name="check_circle" />Một tài khoản cho cả phí đường bộ, gửi xe và chăm sóc xe.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section section--soft" id="booking">
        <div className="section__inner">
          <div className="sh sh--center" data-reveal>
            <div className="sh__kicker">Dịch vụ</div>
            <h2>Đa dạng gói dịch vụ, phù hợp mọi nhu cầu.</h2>
            <p>Từ rửa ngoài nhanh đến chăm sóc toàn diện — chọn gói phù hợp với lịch trình của bạn.</p>
          </div>
          <div className="service-tags" data-stagger>
            {services.map((s) => <span key={s}><Icon name="local_car_wash" />{s}</span>)}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section">
        <div className="section__inner">
          <div className="sh sh--center" data-reveal>
            <div className="sh__kicker">FAQ</div>
            <h2>Câu hỏi thường gặp</h2>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-block" id="contact">
        <div className="cta-block__inner" data-reveal>
          <h2>Dùng thử miễn phí.<br />Không cần đăng ký tài khoản.</h2>
          <p className="cta-block__sub">Mở ứng dụng, chọn tiệm và đặt lịch ngay — chỉ mất 30 giây.</p>
          <a className="btn btn--primary btn--lg" href="#booking"><Icon name="arrow_forward" /> Đặt lịch ngay</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#">True<span>Care</span></a>
        <nav>
          <a href="#how-it-works">Cách hoạt động</a>
          <a href="#about">Về TrueCare</a>
          <a href="#merchant">Tiệm đối tác</a>
        </nav>
        <a className="header-cta" href="#booking">Đặt lịch ngay</a>
        <button className="menu-button" type="button" aria-label="Mở menu"><Icon name="menu" /></button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#">True<span>Care</span></a>
      <div className="footer__links">
        <a href="#">Chính sách bảo mật</a>
        <a href="#">Điều khoản sử dụng</a>
        <a href="#">Dành cho tiệm</a>
        <a href="#contact">Liên hệ</a>
      </div>
      <p>© 2026 TrueCare. Đặt lịch rửa xe và chăm sóc xe ô tô uy tín gần bạn.</p>
    </footer>
  );
}

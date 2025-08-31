import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("JS çalışıyor!");
    
    // Header scroll efekti
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Smooth scroll
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // SSS detay animasyonu
    const details = document.querySelectorAll("details");
    details.forEach((detail) => {
      const summary = detail.querySelector("summary");
      const content = detail.querySelector("p");

      content.style.height = "0px";
      content.style.overflow = "hidden";
      content.style.transition = "height 0.7s ease";

      summary.addEventListener("click", () => {
        if (detail.hasAttribute("open")) {
          content.style.height = content.scrollHeight + "px";
          setTimeout(() => (content.style.height = "0px"), 10);
        } else {
          content.style.height = content.scrollHeight + "px";
          setTimeout(() => (content.style.height = "auto"), 300);
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header
        style={{
          padding: scrolled ? "12px 0" : "25px 0",
          background: scrolled
            ? "#a3c4f3"
            : "linear-gradient(90deg, #f9e1e4, #a3c4f3)",
        }}
      >
        <h1>Qpien Destek Merkezi</h1>
        <nav>
          <ul>
            <li>
              <a href="#nasil-kullanilir">Nasıl Kullanılır?</a>
            </li>
            <li>
              <a href="#hesap-baglama">Hesap Bağlama</a>
            </li>
            <li>
              <a href="#nelere-dikkat">Nelere Dikkat Edilir?</a>
            </li>
            <li>
              <a href="#sss">SSS</a>
            </li>
            <li>
              <a href="#iletisim">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="nasil-kullanilir">
          <h2>Nasıl Kullanılır?</h2>
          <p>
            Qpien paneline giriş yaparak eğitim materyallerini inceleyebilir,
            adım adım yönlendirmeleri takip edebilirsiniz.
          </p>
        </section>

        <section id="hesap-baglama">
          <h2>Nasıl Hesap Bağlanır?</h2>
          <ul>
            <li>
              Qpien hesabı nasıl açılır? Qpien resmi sitesine gidip kayıt
              formunu doldurarak kolayca hesap açabilirsiniz.
            </li>
            <li>
              Hesap bağlamak için gerekli bilgiler nelerdir? Kullanıcı adı,
              şifre ve e-posta adresiniz gereklidir.
            </li>
            <li>
              Hesap bağlama sırasında sorun yaşarsam ne yapmalıyım? Destek
              ekibi ile iletişime geçebilir veya sıkça sorulan sorular kısmını
              kontrol edebilirsiniz.
            </li>
          </ul>
        </section>

        <section id="nelere-dikkat">
          <h2>Nelere Dikkat Edilir?</h2>
          <ul>
            <li>
              Hesap bilgilerini paylaşmak güvenli midir? Hesap bilgileriniz
              kesinlikle kimseyle paylaşılmamalıdır.
            </li>
            <li>
              Eğitim sırasında nelere dikkat etmeliyim? İnternet bağlantınızın
              stabil olmasına dikkat edin ve tarayıcınızın güncel olduğundan
              emin olun.
            </li>
          </ul>
        </section>

        <section id="sss">
          <h2>Sıkça Sorulan Sorular</h2>
          <details>
            <summary>Qpien hesabı nasıl açılır?</summary>
            <p>
              Qpien resmi sitesine gidip kayıt formunu doldurarak kolayca
              hesap açabilirsiniz.
            </p>
          </details>
          <details>
            <summary>Şifre nasıl sıfırlanır?</summary>
            <p>
              Şifrenizi unuttuysanız, giriş sayfasındaki “Şifremi Unuttum”
              bağlantısına tıklayarak sıfırlama işlemini başlatabilirsiniz.
            </p>
          </details>
          <details>
            <summary>Destek ekibiyle nasıl iletişim kurarım?</summary>
            <p>
              Destek ekibine destek@qpien.com adresinden veya 0555 555 55 55
              numaralı telefondan ulaşabilirsiniz.
            </p>
          </details>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <p>E-posta: destek@qpien.com</p>
          <p>Telefon: 0555 555 55 55</p>
        </section>
      </main>

      <footer>
        <p>© 2025 Qpien Destek Merkezi</p>
      </footer>
    </div>
  );
}

export default App;

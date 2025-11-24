import logo from "./assets/half_price_patio_logo.png";
import heroBanner from "./assets/hero_banner.jpg";

import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Left side - Brand */}
          <div className="flex items-center gap-3 text-white font-medium tracking-wider">
            <img
              src={logo}
              alt="Half-Price Patio logo"
              className="w-12 h-12 rounded-full object-cover drop-shadow"
            />
            <span className="text-lg sm:text-xl uppercase">HALF-PRICE PATIO</span>
          </div>

          {/* Right side - Links */}
          <div className="relative text-xs sm:text-sm">
            <details className="group">
              <summary className="flex items-center gap-2 text-white/80 hover:text-white cursor-pointer uppercase tracking-wide font-medium">
                Shop Products
                <span className="text-white/60 group-open:rotate-180 transition-transform duration-200">▼</span>
              </summary>
              <div className="absolute right-0 mt-3 w-44 bg-black/95 border border-white/10 rounded-md shadow-lg shadow-black/40 overflow-hidden">
                <a
                  href="https://www.patioresorts.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wide"
                >
                  Patio Resorts
                </a>
                <div className="h-px bg-white/10" />
                <a
                  href="https://www.ashleyfurniture.com/c/outdoor/"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wide"
                >
                  Ashley Furniture
                </a>
              </div>
            </details>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[75vh] flex items-center justify-center pt-24 sm:pt-28">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBanner})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-wider mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Affordable Outdoor Living
          </h1>
          <div className="mb-6">
            <div className="w-[11rem] h-[11rem] md:w-[13.5rem] md:h-[13.5rem] lg:w-[15.5rem] lg:h-[15.5rem] rounded-full flex items-center justify-center overflow-hidden bg-[#f0ebe5] shadow-lg shadow-black/30">
              <img
                src={logo}
                alt="Half-Price Patio logo"
                className="w-[8.5rem] h-[8.5rem] md:w-[11rem] md:h-[11rem] lg:w-[12.5rem] lg:h-[12.5rem] object-contain"
              />
            </div>
          </div>
          <p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-wider"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Now Open!
          </p>
          <div className="w-24 h-px bg-white/60 mx-auto mt-4"></div>
        </div>
      </section>

      {/* Social Icons */}
      <section className="bg-black py-12 flex justify-center">
        <div className="flex flex-col items-center gap-6">
          <p
            className="text-white/90 text-4xl sm:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Financing Available!
          </p>
          <p
            className="text-white/80 text-xl sm:text-2xl text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Click{' '}
            <a
              href="https://provider.macu.com/customer?t=QXQ3KjF0dUJXSXBhM0lPWDFIZVhTMHExdWlTUGNlTUttd1FJSTlPdUduV3g3SCpTRE9iMzJnRTRWRFdmQjVBSTRQQnQzUklzNTJIR3djSXVFR3lieUNsUjBoVTk1RXV5dG1xM25OdUJEWUlibCoxKjFzT2w4eXgqMTR4OVR2RGQ5SzdjQmNXY2VCNTJrZHI1bjdnOFhNZWgxOWM2Y3hVZWNtUWNSek9zKjFkeTJDbHZFRXZGYmRRQUM0d2l2Q1FidFBFVTA5TE14TUpYTGw4KjFKbEtyeHRjUHlmWHc9PQ=="
              className="text-red-500 underline hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{' '}
            to start your application
          </p>
          <div className="flex items-center gap-10 text-white/80">
            <a
              href="https://www.facebook.com/people/Half-Price-Patio/61577871245882/"
              className="transition-transform duration-300 hover:scale-110 hover:text-white"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path d="M22 12.073C22 6.49 17.523 2 12 2S2 6.49 2 12.073C2 17.1 5.657 21.245 10.438 22v-6.997H7.898v-2.93h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.242 0-1.63.77-1.63 1.562v1.882h2.773l-.443 2.93h-2.33V22C18.343 21.245 22 17.1 22 12.073Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/halfprice_patio/"
              className="transition-transform duration-300 hover:scale-110 hover:text-white"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path d="M7 3C4.24 3 2 5.24 2 8v8c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H7Zm0 2h10c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3Zm11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-white space-y-12">
          <div className="text-center space-y-3">
            <h2
              className="text-4xl md:text-5xl tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h2>
            <p className="text-white/70 text-lg">
              Questions about our collections or financing? Send us a note and we&apos;ll get back to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-wide">Drop us a line!</h3>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Better yet, see us in person!</h3>
                <p className="text-white/70 leading-relaxed">
                  We love our customers! Feel free to visit our showroom during normal business hours or contact us for an appointment. Explore our selection of patio sets, fire pits, and other outdoor decor to enhance your outdoor living and dining experience!
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Half-Price Patio</h3>
                <p className="text-white/80">7825 East Evans Road, Suite 400, Scottsdale, AZ, USA</p>
                <a href="tel:4805731312" className="block text-white hover:text-white/70 transition">
                  480-573-1312
                </a>
                <a href="mailto:sales@halfprice-patio.com" className="block text-white hover:text-white/70 transition">
                  sales@halfprice-patio.com
                </a>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Hours</h3>
                <details className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white/80">
                  <summary className="cursor-pointer flex items-center justify-between text-white font-medium">
                    View hours
                    <span className="text-white/60 text-sm">v</span>
                  </summary>
                  <div className="mt-3 space-y-2">
                    <p>Mon: By Appointment</p>
                    <p>Tues: By Appointment</p>
                    <p>Wed: By Appointment</p>
                    <p>Thu: 10:00am - 5:00pm</p>
                    <p>Fri: 10:00am - 5:00pm</p>
                    <p>Sat: 10:00am - 5:00pm</p>
                    <p>Sun: 10:00am - 4:00pm</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-black pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center text-white space-y-3">
            <h3
              className="text-3xl md:text-4xl tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Us
            </h3>
            <p className="text-white/70">
              7825 East Evans Road, Suite 400, Scottsdale, AZ, USA
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-lg border border-white/10 shadow-lg shadow-black/30">
            <iframe
              title="Half-Price Patio location"
              src="https://www.google.com/maps?q=7825+East+Evans+Road,+Suite+400,+Scottsdale,+AZ,+USA&output=embed"
              loading="lazy"
              allowFullScreen
              className="w-full h-[360px] md:h-[520px] grayscale-[30%] hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-4 pb-10">
        <div className="max-w-6xl mx-auto text-white/80 text-sm space-y-3">
          <p>Copyright © 2025 Half-Price Patio, LLC. All Rights Reserved.</p>
          <p>Address: 7825 Evans Road, Suite 400 • Scottsdale, AZ 85260</p>
          <p>Phone: 480-573-1312</p>
          <div className="space-y-1">
            <p>Email:</p>
            <a href="mailto:sales@halfprice-patio.com" className="block text-white hover:text-white/70 transition">
              sales@halfprice-patio.com
            </a>
            <a href="mailto:admin@halfprice-patio.com" className="block text-white hover:text-white/70 transition">
              admin@halfprice-patio.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import logo from "./assets/half-price-patio-logo.svg";
import heroBanner from "./assets/hero_banner.jpg";




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
              className="w-12 h-12 object-contain drop-shadow"
            />
            <span className="text-xl uppercase">HALF-PRICE PATIO</span>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.patioresorts.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide font-medium uppercase"
            >
              PATIO RESORTS
            </a>
            <a
              href="https://www.ashleyfurniture.com/c/outdoor/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide font-medium uppercase"
            >
              ASHLEY FURNITURE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[75vh] flex items-center justify-center">
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
        <div className="relative z-10 text-center px-6">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-wider mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Affordable Outdoor Living
          </h1>
          <div className="w-24 h-px bg-white/60 mx-auto"></div>
        </div>
      </section>

      {/* Social Icons */}
      <section className="bg-black py-12 flex justify-center">
        <div className="flex flex-col items-center gap-6">
          <p
            className="text-white text-5xl tracking-wider"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Now Open!
          </p>
          <p
            className="text-white/80 text-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Click{' '}
            <a
              href="https://provider.macu.com/customer?t=QXQ3KjF0dUJXSXBhM0lPWDFIZVhTMHExdWlTUGNlTUttd1FJSTlPdUduV3g3SCpTRE9iMzJnRTRWRFdmQjVBSTRQQnQzUklzNTJIR3djSXVFR3lieUNsUjBoVTk1RXV5dG1xM25OdUJEWUlibCoxKjFzT2w4eXgqMTR4OVR2RGQ5SzdjQmNXY2VCNTJrZHI1bjdnOFhNZWgxOWM2Y3hVZWNtUWNSek9zKjFkeTJDbHZFRXZGYmRRQUM0d2l2Q1FidFBFVTA5TE14TUpYTGw4KjFKbEtyeHRjUHlmWHc9PQ=="
              className="text-white underline hover:text-white/60"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{' '}
            for financing
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
              <form
                className="space-y-6"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-[0.2em] text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-[0.2em] text-white/70">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-[0.2em] text-white/70">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us what you're looking for"
                    rows={4}
                    className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto uppercase tracking-[0.25em] bg-white text-black px-8 py-3 rounded-md font-semibold transition duration-300 hover:bg-white/90"
                >
                  Send
                </button>
              </form>
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
    </div>
  );
}

export default App;

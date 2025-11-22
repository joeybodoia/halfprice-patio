import logo from "./assets/half-price-patio-logo.svg";

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left side - Brand */}
          <div className="flex items-center gap-3 text-white">
            <img
              src={logo}
              alt="Half-Price Patio logo"
              className="w-12 h-12 object-contain drop-shadow"
            />
            <span className="text-xl font-light tracking-wider">Half-Price Patio</span>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.patioresorts.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide font-light"
            >
              Patio Resorts
            </a>
            <a
              href="https://www.ashleyfurniture.com/c/outdoor/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide font-light"
            >
              Ashley Furniture
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
            backgroundImage: 'url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wider mb-6">
            Affordable Outdoor Living
          </h1>
          <div className="w-24 h-px bg-white/60 mx-auto"></div>
        </div>
      </section>

      {/* Social Icons */}
      <section className="bg-black py-12 flex justify-center">
        <div className="flex flex-col items-center gap-6">
          <p className="text-white text-2xl tracking-wider">Now Open!</p>
          <p className="text-white/80 text-base">
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
    </div>
  );
}

export default App;

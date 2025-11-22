function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left side - Brand */}
          <div className="text-white text-xl font-light tracking-wider">
            Half-price patio
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide font-light"
            >
              Patio Resorts
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide font-light"
            >
              Ashley Furniture
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center">
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
    </div>
  );
}

export default App;

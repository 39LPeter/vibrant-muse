import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 transition-smooth ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg shadow-soft"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-white">FT</span>
              </div>
              <span className="font-heading font-bold text-xl hidden sm:block">
                Fresh Thoughts
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className="text-foreground/70 hover:text-foreground transition-smooth font-medium"
                activeClassName="text-primary"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-foreground/70 hover:text-foreground transition-smooth font-medium"
                activeClassName="text-primary"
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className="text-foreground/70 hover:text-foreground transition-smooth font-medium"
                activeClassName="text-primary"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="text-foreground/70 hover:text-foreground transition-smooth font-medium"
                activeClassName="text-primary"
              >
                Contact
              </NavLink>
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-in fade-in slide-in-from-top-4">
              <NavLink
                to="/"
                className="block text-foreground/70 hover:text-foreground transition-smooth font-medium py-2"
                activeClassName="text-primary"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block text-foreground/70 hover:text-foreground transition-smooth font-medium py-2"
                activeClassName="text-primary"
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className="block text-foreground/70 hover:text-foreground transition-smooth font-medium py-2"
                activeClassName="text-primary"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="block text-foreground/70 hover:text-foreground transition-smooth font-medium py-2"
                activeClassName="text-primary"
              >
                Contact
              </NavLink>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-white">FT</span>
                </div>
                <span className="font-heading font-bold text-xl">
                  Fresh Thoughts
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Made with ♥ for thinkers and dreamers
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/"
                    className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Join the community and get fresh perspectives in your inbox.
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-2xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button className="rounded-2xl gradient-primary text-white">
                  Subscribe
                </Button>
              </form>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                >
                  <span className="sr-only">TikTok</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                >
                  <span className="sr-only">X</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Fresh Thoughts Blog. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

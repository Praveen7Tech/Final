"use client"

import  React from "react"

import { ChevronRight, Globe } from "lucide-react"
import "./FooterGuest.css"

const footerLinks = {
  column1: [
    { text: "FAQ", href: "#" },
    { text: "Investor Relations", href: "#" },
    { text: "Privacy", href: "#" },
    { text: "Speed Test", href: "#" },
  ],
  column2: [
    { text: "Help Centre", href: "#" },
    { text: "Jobs", href: "#" },
    { text: "Cookie Preferences", href: "#" },
    { text: "Legal Notices", href: "#" },
  ],
  column3: [
    { text: "Account", href: "#" },
    { text: "Ways to Watch", href: "#" },
    { text: "Corporate Information", href: "#" },
    { text: "Only on Netflix", href: "#" },
  ],
  column4: [
    { text: "Media Centre", href: "#" },
    { text: "Terms of Use", href: "#" },
    { text: "Contact Us", href: "#" },
  ],
}

export default function FooterG() {
  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log("Email submitted")
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Email Signup Section */}
        <div className="signup-section">
          <h2 className="signup-title">Ready to watch? Enter your email to create or restart your membership.</h2>

          <form className="signup-form" onSubmit={handleEmailSubmit}>
            <div className="input-group">
              <input type="email" placeholder="Email address" className="email-input" required />
              <button type="submit" className="get-started-btn">
                Get Started
                <ChevronRight size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <p className="contact-text">
            Questions? Call{" "}
            <a href="tel:000-800-919-1743" className="phone-link">
              000-800-919-1743
            </a>
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="links-grid">
            <div className="links-column">
              {footerLinks.column1.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.text}
                </a>
              ))}
            </div>

            <div className="links-column">
              {footerLinks.column2.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.text}
                </a>
              ))}
            </div>

            <div className="links-column">
              {footerLinks.column3.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.text}
                </a>
              ))}
            </div>

            <div className="links-column">
              {footerLinks.column4.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="language-section">
          <div className="language-selector">
            <Globe size={16} />
            <select className="language-dropdown">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
            </select>
          </div>
        </div>

        {/* Netflix India */}
        <div className="netflix-region">
          <p>Netflix India</p>
        </div>

        {/* reCAPTCHA Notice */}
        <div className="recaptcha-notice">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <a href="#" className="learn-more-link">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

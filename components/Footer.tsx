import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AgataSoftware</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professionele website ontwikkeling met moderne technologieën. 
              Wij creëren responsive en gebruiksvriendelijke websites die perfect aansluiten bij uw bedrijf.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Info@agatasoftware.nl</p>
              <p>Lelystad, Nederland</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 AgataSoftware - KVK 92654762 - Alle rechten voorbehouden
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


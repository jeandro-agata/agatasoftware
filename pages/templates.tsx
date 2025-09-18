import Layout from '../components/Layout';
import Link from 'next/link';

const templates = [
  {
    id: 1,
    name: 'Bedrijfswebsite',
    description: 'Professionele website voor uw bedrijf met moderne uitstraling',
    features: ['Responsive design', 'Contactformulier', 'SEO geoptimaliseerd', 'Snelle laadtijden'],
    price: 'Vanaf €1.200',
    category: 'Bedrijf'
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'Perfect voor creatieven om hun werk te tonen',
    features: ['Galerij systeem', 'Blog functionaliteit', 'Social media integratie', 'Contact pagina'],
    price: 'Vanaf €800',
    category: 'Portfolio'
  },
  /*{
    id: 3,
    name: 'E-commerce Store',
    description: 'Complete webshop met betalingsmogelijkheden',
    features: ['Product catalogus', 'Winkelwagen', 'Betalingsintegratie', 'Voorraadbeheer'],
    price: 'Vanaf €2.500',
    category: 'E-commerce'
  },*/
  {
    id: 4,
    name: 'Restaurant Website',
    description: 'Aantrekkelijke website voor restaurants en cafés',
    features: ['Menu weergave', 'Reserveringssysteem', 'Locatie informatie', 'Openingstijden'],
    price: 'Vanaf €1.500',
    category: 'Horeca'
  },
  {
    id: 5,
    name: 'Blog Platform',
    description: 'Moderne blog met content management systeem',
    features: ['CMS integratie', 'Categorieën', 'Zoekfunctie', 'Commentaar systeem'],
    price: 'Vanaf €900',
    category: 'Blog'
  },
  /*{
    id: 6,
    name: 'Landing Page',
    description: 'Eén pagina website voor specifieke campagnes',
    features: ['Call-to-action buttons', 'Lead capture', 'Analytics integratie', 'A/B testing'],
    price: 'Vanaf €600',
    category: 'Marketing'
  }*/
];

export default function Templates() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Website Templates
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Kies uit onze collectie professionele templates of laat een volledig op maat gemaakte website ontwerpen.
            </p>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {template.category}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {template.price}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {template.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {template.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href={`/demo/${template.id}`}
                      className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                    >
                      Bekijk Demo
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                    >
                      Meer Info
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Development Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Niets Gevonden?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Wij maken ook volledig op maat gemaakte websites. Vertel ons uw wensen en wij realiseren uw droomwebsite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Bespreek Uw Project
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}


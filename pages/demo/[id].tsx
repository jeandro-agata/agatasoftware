import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const demoTemplates = {
  1: {
    name: 'Bedrijfswebsite',
    description: 'Professionele website voor uw bedrijf met moderne uitstraling',
    features: ['Responsive design', 'Contactformulier', 'SEO geoptimaliseerd', 'Snelle laadtijden'],
    price: 'Vanaf €1.200',
    category: 'Bedrijf',
    demoContent: {
      hero: {
        title: 'Welkom bij Uw Bedrijf',
        subtitle: 'Professionele dienstverlening die u kunt vertrouwen',
        cta: 'Neem Contact Op'
      },
      services: [
        { name: 'Consultancy', description: 'Strategisch advies voor uw bedrijf' },
        { name: 'Implementatie', description: 'Praktische uitvoering van plannen' },
        { name: 'Ondersteuning', description: 'Continue begeleiding en ondersteuning' }
      ],
      about: {
        title: 'Over Ons',
        content: 'Wij zijn een ervaren team van professionals die zich inzetten voor het succes van uw bedrijf. Met jarenlange ervaring in de branche leveren wij kwaliteit en betrouwbaarheid.'
      }
    }
  },
  2: {
    name: 'Portfolio Website',
    description: 'Perfect voor creatieven om hun werk te tonen',
    features: ['Galerij systeem', 'Blog functionaliteit', 'Social media integratie', 'Contact pagina'],
    price: 'Vanaf €800',
    category: 'Portfolio',
    demoContent: {
      hero: {
        title: 'Creatieve Portfolio',
        subtitle: 'Ontdek mijn werk en projecten',
        cta: 'Bekijk Werk'
      },
      projects: [
        { name: 'Web Design Project', image: 'project1.jpg', category: 'Web Design' },
        { name: 'Brand Identity', image: 'project2.jpg', category: 'Branding' },
        { name: 'Mobile App', image: 'project3.jpg', category: 'App Design' }
      ],
      about: {
        title: 'Over Mij',
        content: 'Ik ben een gepassioneerde designer met een oog voor detail en een liefde voor creatieve oplossingen.'
      }
    }
  },
  3: {
    name: 'E-commerce Store',
    description: 'Complete webshop met betalingsmogelijkheden',
    features: ['Product catalogus', 'Winkelwagen', 'Betalingsintegratie', 'Voorraadbeheer'],
    price: 'Vanaf €2.500',
    category: 'E-commerce',
    demoContent: {
      hero: {
        title: 'Online Winkel',
        subtitle: 'Ontdek onze collectie unieke producten',
        cta: 'Shop Nu'
      },
      products: [
        { name: 'Premium Product 1', price: '€29.99', image: 'product1.jpg' },
        { name: 'Premium Product 2', price: '€39.99', image: 'product2.jpg' },
        { name: 'Premium Product 3', price: '€49.99', image: 'product3.jpg' }
      ],
      features: {
        title: 'Waarom Kiezen Voor Ons',
        items: ['Gratis verzending', '30 dagen retourrecht', 'Veilige betaling', '24/7 klantenservice']
      }
    }
  },
  4: {
    name: 'Restaurant Website',
    description: 'Aantrekkelijke website voor restaurants en cafés',
    features: ['Menu weergave', 'Reserveringssysteem', 'Locatie informatie', 'Openingstijden'],
    price: 'Vanaf €1.500',
    category: 'Horeca',
    demoContent: {
      hero: {
        title: 'Restaurant De Gouden Leeuw',
        subtitle: 'Authentieke smaken in een moderne setting',
        cta: 'Reserveer Tafel'
      },
      menu: {
        title: 'Ons Menu',
        categories: [
          { name: 'Voorgerechten', items: ['Soep van de dag', 'Gebakken camembert', 'Garnalen cocktail'] },
          { name: 'Hoofdgerechten', items: ['Ribeye steak', 'Zalm met groenten', 'Vegetarische pasta'] },
          { name: 'Desserts', items: ['Tiramisu', 'Chocolade mousse', 'Fruit salade'] }
        ]
      },
      info: {
        title: 'Restaurant Informatie',
        hours: 'Ma-Zo: 17:00 - 22:00',
        location: 'Hoofdstraat 123, Amsterdam',
        phone: '+31 20 1234567'
      }
    }
  },
  5: {
    name: 'Blog Platform',
    description: 'Moderne blog met content management systeem',
    features: ['CMS integratie', 'Categorieën', 'Zoekfunctie', 'Commentaar systeem'],
    price: 'Vanaf €900',
    category: 'Blog',
    demoContent: {
      hero: {
        title: 'Tech Blog',
        subtitle: 'De nieuwste trends in technologie en web development',
        cta: 'Lees Meer'
      },
      posts: [
        { title: 'De Toekomst van Web Development', excerpt: 'Ontdek de nieuwste trends...', date: '15 maart 2024', category: 'Web Dev' },
        { title: 'CSS Grid vs Flexbox', excerpt: 'Een vergelijking van de twee...', date: '10 maart 2024', category: 'CSS' },
        { title: 'JavaScript Best Practices', excerpt: 'Tips voor betere code...', date: '5 maart 2024', category: 'JavaScript' }
      ],
      about: {
        title: 'Over Deze Blog',
        content: 'Een plek waar technologie en creativiteit samenkomen. Ik deel mijn ervaringen en inzichten over web development.'
      }
    }
  },
  6: {
    name: 'Landing Page',
    description: 'Eén pagina website voor specifieke campagnes',
    features: ['Call-to-action buttons', 'Lead capture', 'Analytics integratie', 'A/B testing'],
    price: 'Vanaf €600',
    category: 'Marketing',
    demoContent: {
      hero: {
        title: 'Transformeer Uw Bedrijf',
        subtitle: 'Ontdek hoe onze oplossing uw productiviteit kan verhogen met 300%',
        cta: 'Start Gratis Proefperiode'
      },
      benefits: [
        { title: 'Verhoog Productiviteit', description: 'Bespaar 10+ uur per week' },
        { title: 'Verlaag Kosten', description: 'Tot 50% kostenbesparing' },
        { title: 'Verbeter Resultaten', description: 'Zichtbare verbetering in 30 dagen' }
      ],
      cta: {
        title: 'Klaar om te Beginnen?',
        subtitle: 'Sluit u aan bij 10.000+ tevreden klanten',
        button: 'Start Nu - Gratis'
      }
    }
  }
};

export default function Demo() {
  const router = useRouter();
  const { id } = router.query;
  
  // Redirect naar uitgebreide demo-overzichtspagina
  useEffect(() => {
    if (id) {
      // Voor portfolio demo, ga naar portfolio tab, anders naar overzicht
      const defaultSlug = id === '2' ? 'portfolio' : 'overzicht';
      router.replace(`/demo/${id}/${defaultSlug}`);
    }
  }, [id, router]);
  
  if (!id || !demoTemplates[id as keyof typeof demoTemplates]) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Demo Niet Gevonden</h1>
            <p className="text-gray-600 mb-8">Deze demo bestaat niet.</p>
            <Link href="/templates" className="bg-gray-900 text-white px-6 py-3 rounded-lg">
              Terug naar Templates
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const template = demoTemplates[id as keyof typeof demoTemplates];

  return (
    <Layout>
      {/* Demo Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-4">
                {template.category}
              </span>
              <span className="text-lg font-semibold text-gray-900">
                {template.price}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {template.name} - Live Demo
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {template.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Bestel Deze Template
              </Link>
              <Link
                href="/templates"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Alle Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Demo Navigation */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600">
                  {template.name} - Live Demo
                </div>
                <div className="w-32 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Demo Content Area */}
            <div className="p-8">
              {id === '1' && <BedrijfswebsiteDemo content={template.demoContent} />}
              {id === '2' && <PortfolioDemo content={template.demoContent} />}
              {id === '3' && <EcommerceDemo content={template.demoContent} />}
              {id === '4' && <RestaurantDemo content={template.demoContent} />}
              {id === '5' && <BlogDemo content={template.demoContent} />}
              {id === '6' && <LandingPageDemo content={template.demoContent} />}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Inbegrepen Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {template.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Demo Components
function BedrijfswebsiteDemo({ content }: { content: any }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.hero.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{content.hero.subtitle}</p>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold">
          {content.hero.cta}
        </button>
      </div>

      {/* Services */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Onze Diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.services.map((service: any, index: number) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.about.title}</h2>
        <p className="text-gray-600">{content.about.content}</p>
      </div>
    </div>
  );
}

function PortfolioDemo({ content }: { content: any }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.hero.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{content.hero.subtitle}</p>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold">
          {content.hero.cta}
        </button>
      </div>

      {/* Projects Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mijn Werk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.projects.map((project: any, index: number) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Afbeelding</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">{project.category}</span>
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.about.title}</h2>
        <p className="text-gray-600">{content.about.content}</p>
      </div>
    </div>
  );
}

function EcommerceDemo({ content }: { content: any }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.hero.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{content.hero.subtitle}</p>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold">
          {content.hero.cta}
        </button>
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Onze Producten</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.products.map((product: any, index: number) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Afbeelding</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-xl font-bold text-gray-900">{product.price}</p>
                <button className="w-full mt-3 bg-gray-900 text-white py-2 rounded-lg">
                  In Winkelwagen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.features.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.features.items.map((item: string, index: number) => (
            <div key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RestaurantDemo({ content }: { content: any }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.hero.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{content.hero.subtitle}</p>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold">
          {content.hero.cta}
        </button>
      </div>

      {/* Menu */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{content.menu.title}</h2>
        <div className="space-y-6">
          {content.menu.categories.map((category: any, index: number) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
              <div className="space-y-2">
                {category.items.map((item: string, itemIndex: number) => (
                  <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{item}</span>
                    <span className="text-gray-500">€12-18</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.info.title}</h2>
        <div className="space-y-2 text-gray-600">
          <p><strong>Openingstijden:</strong> {content.info.hours}</p>
          <p><strong>Locatie:</strong> {content.info.location}</p>
          <p><strong>Telefoon:</strong> {content.info.phone}</p>
        </div>
      </div>
    </div>
  );
}

function BlogDemo({ content }: { content: any }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.hero.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{content.hero.subtitle}</p>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold">
          {content.hero.cta}
        </button>
      </div>

      {/* Blog Posts */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recente Artikelen</h2>
        <div className="space-y-6">
          {content.posts.map((post: any, index: number) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-gray-900 font-semibold hover:underline">
                Lees Meer →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.about.title}</h2>
        <p className="text-gray-600">{content.about.content}</p>
      </div>
    </div>
  );
}

function LandingPageDemo({ content }: { content: any }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gray-50 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.hero.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{content.hero.subtitle}</p>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg">
          {content.hero.cta}
        </button>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Waarom Kiezen Voor Ons?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.benefits.map((benefit: any, index: number) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">{content.cta.title}</h2>
        <p className="text-lg mb-6">{content.cta.subtitle}</p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg">
          {content.cta.button}
        </button>
      </div>
    </div>
  );
}

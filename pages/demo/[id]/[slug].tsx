import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../../components/Layout';
import Link from 'next/link';

const demoConfig: Record<string, {
  name: string;
  category: string;
  price: string;
  routes: Array<{ slug: string; label: string }>;
}> = {
  '1': { name: 'Bedrijfswebsite', category: 'Bedrijf', price: 'Vanaf €1.200', routes: [
    { slug: 'overzicht', label: 'Overzicht' },
    { slug: 'over-ons', label: 'Over ons' },
    { slug: 'diensten', label: 'Diensten' },
    { slug: 'cases', label: 'Cases' },
    { slug: 'prijzen', label: 'Prijzen' },
    { slug: 'contact', label: 'Contact' },
  ]},
  '2': { name: 'Portfolio Website', category: 'Portfolio', price: 'Vanaf €800', routes: [
    { slug: 'portfolio', label: 'Portfolio' },
    { slug: 'bio', label: 'Bio' },
    { slug: 'diensten', label: 'Diensten' },
    { slug: 'prijzen', label: 'Prijzen' },
    { slug: 'contact', label: 'Contact' },
  ]},
  '3': { name: 'E-commerce Store', category: 'E-commerce', price: 'Vanaf €2.500', routes: [
    { slug: 'overzicht', label: 'Overzicht' },
    { slug: 'producten', label: 'Producten' },
    { slug: 'categorieen', label: 'Categorieën' },
    { slug: 'winkelwagen', label: 'Winkelwagen' },
    { slug: 'afrekenen', label: 'Afrekenen' },
    { slug: 'verzending', label: 'Verzending' },
  ]},
  '4': { name: 'Restaurant Website', category: 'Horeca', price: 'Vanaf €1.500', routes: [
    { slug: 'overzicht', label: 'Overzicht' },
    { slug: 'menu', label: 'Menu' },
    { slug: 'reserveren', label: 'Reserveren' },
    { slug: 'galerij', label: 'Galerij' },
    { slug: 'locatie', label: 'Locatie' },
    { slug: 'contact', label: 'Contact' },
  ]},
  '5': { name: 'Blog Platform', category: 'Blog', price: 'Vanaf €900', routes: [
    { slug: 'overzicht', label: 'Overzicht' },
    { slug: 'artikelen', label: 'Artikelen' },
    { slug: 'categorieen', label: 'Categorieën' },
    { slug: 'over', label: 'Over' },
    { slug: 'nieuwsbrief', label: 'Nieuwsbrief' },
    { slug: 'contact', label: 'Contact' },
  ]},
  '6': { name: 'Landing Page', category: 'Marketing', price: 'Vanaf €600', routes: [
    { slug: 'overzicht', label: 'Overzicht' },
    { slug: 'voordelen', label: 'Voordelen' },
    { slug: 'features', label: 'Features' },
    { slug: 'testimonials', label: 'Testimonials' },
    { slug: 'prijzen', label: 'Prijzen' },
    { slug: 'cta', label: 'Call to Action' },
  ]},
};

function SectionHeader({ id }: { id: string }) {
  const cfg = demoConfig[id];
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-3">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-3">{cfg.category}</span>
          <span className="text-sm font-medium text-gray-800">{cfg.price}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{cfg.name} - Demo</h1>
        <Link
          href="/contact"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block"
        >
          Bestel Deze Template
        </Link>
      </div>
    </section>
  );
}

export default function DemoSubpage() {
  const router = useRouter();
  const { id, slug } = router.query as { id?: string; slug?: string };

  if (!id || !demoConfig[id]) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Demo Niet Gevonden</h1>
            <p className="text-gray-600 mb-8">Deze demo bestaat niet.</p>
            <Link href="/templates" className="bg-gray-900 text-white px-6 py-3 rounded-lg">Terug naar Templates</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const cfg = demoConfig[id];

  return (
    <Layout>
      <SectionHeader id={id} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Browser Interface */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Browser Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white border border-gray-300 rounded px-3 py-1 text-sm text-gray-600">
                    {cfg.name.toLowerCase().replace(/\s+/g, '-')}.com
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Browser Navigation */}
            <div className="bg-white border-b border-gray-200">
              <div className="flex items-center space-x-1 px-4 py-2">
                {cfg.routes.map((route) => {
                  const href = route.slug ? `/demo/${id}/${route.slug}` : `/demo/${id}`;
                  const isActive = (slug || 'overzicht') === route.slug;
                  return (
                    <Link
                      key={route.slug}
                      href={href}
                      className={`px-3 py-1 text-sm rounded ${
                        isActive 
                          ? 'bg-gray-100 text-gray-900 font-medium' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {route.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Browser Content */}
            <div className="p-8 min-h-96">
              {renderContent(id, slug || 'overzicht')}
            </div>

            {/* Browser Footer */}
            <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>© 2024 {cfg.name}</span>
                  <span>•</span>
                  <span>Privacy</span>
                  <span>•</span>
                  <span>Terms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Powered by AgataSoftware</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ziet u dit template zitten?</h2>
          <p className="text-gray-600 mb-6">Neem contact op en we passen het volledig aan op uw merk.</p>
          <Link href="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold">Vraag een offerte aan</Link>
        </div>
      </section>
    </Layout>
  );
}

function renderContent(id: string, slug: string) {
  switch (id) {
    case '1':
      return renderBusiness(slug);
    case '2':
      return renderPortfolio(slug);
    case '3':
      return renderEcommerce(slug);
    case '4':
      return renderRestaurant(slug);
    case '5':
      return renderBlog(slug);
    case '6':
      return renderLanding(slug);
    default:
      return null;
  }
}

function renderBusiness(slug: string) {
  if (slug === 'overzicht') {
    return (
      <div className="space-y-8">
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sterke eerste indruk</h2>
          <p className="text-gray-600">Een homepage die professionaliteit en vertrouwen uitstraalt.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Consultancy','Implementatie','Ondersteuning'].map((s) => (
            <div key={s} className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{s}</h3>
              <p className="text-gray-600">Korte omschrijving van de dienst en toegevoegde waarde.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (slug === 'over-ons') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Onze Missie</h2>
          <p className="text-gray-600">Wij helpen bedrijven groeien met digitale oplossingen die werken.</p>
          <ul className="space-y-2">
            {['Transparant','Betrouwbaar','Resultaatgericht'].map((v) => (
              <li key={v} className="flex items-center text-gray-700"><span className="w-2 h-2 bg-gray-900 rounded-full mr-2"></span>{v}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg h-64"></div>
      </div>
    );
  }
  if (slug === 'diensten') {
    return (
      <div className="space-y-6">
        {[
          { t: 'Webdesign', d: 'Modern, gebruiksvriendelijk en conversiegericht.' },
          { t: 'Development', d: 'Schaalbare en snelle implementaties.' },
          { t: 'SEO', d: 'Beter gevonden worden in zoekmachines.' },
        ].map((row) => (
          <div key={row.t} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{row.t}</h3>
            <p className="text-gray-600">{row.d}</p>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'cases') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Case A','Case B','Case C'].map((c) => (
          <div key={c} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{c}</h3>
              <p className="text-gray-600 text-sm">Korte beschrijving van het resultaat.</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'prijzen') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { n: 'Basis', p: '€1.200', f: ['3 pagina’s','Responsive','Contactformulier'] },
          { n: 'Pro', p: '€2.000', f: ['6 pagina’s','Blog','SEO basics'] },
          { n: 'Maatwerk', p: 'Op aanvraag', f: ['Ongelimiteerd','Integraties','Strategie'] },
        ].map((plan) => (
          <div key={plan.n} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">{plan.n}</h3>
            <p className="text-2xl font-bold text-gray-900 mb-4">{plan.p}</p>
            <ul className="space-y-2 mb-4">
              {plan.f.map((x) => (
                <li key={x} className="text-gray-600">{x}</li>
              ))}
            </ul>
            <button className="w-full bg-gray-900 text-white py-2 rounded-lg">Kies plan</button>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'contact') {
    return (
      <div className="p-6 border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Samenwerken?</h2>
        <p className="text-gray-600 mb-4">Vertel over je project en planning.</p>
        <Link href="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block">Stuur bericht</Link>
      </div>
    );
  }
  return null;
}

function renderPortfolio(slug: string) {
  if (slug === 'portfolio') {
    return <PortfolioConfigurator />;
  }
  if (slug === 'bio') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 h-60 bg-gray-200 rounded-lg"></div>
        <div className="md:col-span-2 space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">Over mij</h2>
          <p className="text-gray-600">Ik ben een multidisciplinair ontwerper met focus op eenvoud.</p>
          <p className="text-gray-600">Ervaring met Figma, React, animaties en merkstrategie.</p>
        </div>
      </div>
    );
  }
  if (slug === 'diensten') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { t: 'Branding', d: 'Logo, kleuren en typografie' },
          { t: 'Webdesign', d: 'Pixel-perfect UI/UX' },
          { t: 'Front-end', d: 'Interactie en animaties' },
        ].map((x) => (
          <div key={x.t} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">{x.t}</h3>
            <p className="text-gray-600">{x.d}</p>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'prijzen') {
    return (
      <div className="space-y-6">
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900">Pakket Portfolio</h3>
          <p className="text-2xl font-bold text-gray-900">€800</p>
          <ul className="mt-3 text-gray-600 list-disc list-inside">
            <li>5 pagina’s</li>
            <li>CMS koppeling</li>
            <li>Snelle hosting</li>
          </ul>
        </div>
      </div>
    );
  }
  if (slug === 'contact') {
    return (
      <div className="p-6 border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Samenwerken?</h2>
        <p className="text-gray-600 mb-4">Vertel over je project en planning.</p>
        <Link href="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block">Stuur bericht</Link>
      </div>
    );
  }
  return null;
}

function PortfolioConfigurator() {
  const [columns, setColumns] = useState<number>(3);
  const [borderRadius, setBorderRadius] = useState<number>(12);
  const [imageHeight, setImageHeight] = useState<number>(160);
  const [gap, setGap] = useState<number>(24);
  const [showText, setShowText] = useState<boolean>(true);

  const colClass = columns === 1
    ? 'grid-cols-1'
    : columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3';

  return (
    <div className="space-y-8">
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Laat je werk spreken</h2>
        <p className="text-gray-600">Minimalistische grid lay-out voor je beste projecten.</p>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Aanpassen</h3>
          <p className="text-sm text-gray-600 mt-1">Pas de layout en styling van je portfolio aan</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Layout Controls */}
            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Layout</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kolommen</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      value={columns}
                      onChange={(e) => setColumns(Number(e.target.value))}
                    >
                      <option value={1}>1 kolom</option>
                      <option value={2}>2 kolommen</option>
                      <option value={3}>3 kolommen</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">Afstand tussen items</label>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{gap}px</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={48}
                      value={gap}
                      onChange={(e) => setGap(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0px</span>
                      <span>48px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Styling Controls */}
            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Styling</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">Hoekradius</label>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{borderRadius}px</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={32}
                      value={borderRadius}
                      onChange={(e) => setBorderRadius(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0px</span>
                      <span>32px</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">Afbeelding hoogte</label>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{imageHeight}px</span>
                    </div>
                    <input
                      type="range"
                      min={80}
                      max={800}
                      value={imageHeight}
                      onChange={(e) => setImageHeight(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>80px</span>
                      <span>800px</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={showText}
                        onChange={(e) => setShowText(e.target.checked)}
                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Titel en beschrijving tonen</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`grid ${colClass}`}
        style={{ gap: `${gap}px` }}
      >
        {Array.from({ length: columns * 3 }).map((_, i) => {
          const grayVariants = [
            'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 
            'bg-slate-100', 'bg-slate-200', 'bg-slate-300',
            'bg-zinc-100', 'bg-zinc-200', 'bg-zinc-300'
          ];
          const cardVariants = [
            'bg-white', 'bg-gray-50', 'bg-slate-50',
            'bg-white', 'bg-gray-50', 'bg-slate-50',
            'bg-white', 'bg-gray-50', 'bg-slate-50'
          ];
          const borderVariants = [
            'border-gray-200', 'border-gray-300', 'border-gray-400',
            'border-slate-200', 'border-slate-300', 'border-slate-400',
            'border-zinc-200', 'border-zinc-300', 'border-zinc-400'
          ];
          
          const grayClass = grayVariants[i % grayVariants.length];
          const cardClass = cardVariants[i % cardVariants.length];
          const borderClass = borderVariants[i % borderVariants.length];
          
          return (
            <div
              key={i}
              className={`border overflow-hidden ${cardClass} ${borderClass} shadow-sm hover:shadow-md transition-shadow`}
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <div
                className={grayClass}
                style={{ 
                  height: `${imageHeight}px`,
                  borderTopLeftRadius: `${borderRadius}px`, 
                  borderTopRightRadius: `${borderRadius}px` 
                }}
              />
              {showText && (
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Project {i + 1}</h3>
                  <p className="text-gray-600 text-sm">Hoekradius: {borderRadius}px • Hoogte: {imageHeight}px • Gap: {gap}px</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function renderEcommerce(slug: string) {
  if (slug === 'overzicht') {
    return (
      <div className="space-y-8">
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Conversie-gericht design</h2>
          <p className="text-gray-600">Duidelijke call-to-actions en snelle laadtijden.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-36 bg-gray-200"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-gray-100 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (slug === 'producten') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-44 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Product {i + 1}</h3>
              <p className="text-gray-700 font-bold">€{(i + 1) * 9}.99</p>
              <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded-lg">In winkelwagen</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'categorieen') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['Nieuw','Sale','Kleding','Accessoires','Schoenen','Tech','Home','Beauty'].map((c) => (
          <div key={c} className="p-6 border border-gray-200 rounded-lg text-center">
            <div className="h-24 bg-gray-200 rounded mb-3"></div>
            <span className="font-semibold text-gray-900">{c}</span>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'winkelwagen') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 border border-gray-200 rounded-lg flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded"></div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Product {i + 1}</p>
                <p className="text-gray-600 text-sm">Variant • Maat M</p>
              </div>
              <span className="font-semibold">€{(i + 1) * 12}.99</span>
            </div>
          ))}
        </div>
        <div className="p-6 border border-gray-200 rounded-lg h-fit">
          <h3 className="font-semibold text-gray-900 mb-3">Overzicht</h3>
          <div className="flex justify-between text-gray-700 mb-1"><span>Subtotaal</span><span>€75,97</span></div>
          <div className="flex justify-between text-gray-700 mb-4"><span>Verzending</span><span>€4,99</span></div>
          <div className="flex justify-between font-semibold text-gray-900 mb-4"><span>Totaal</span><span>€80,96</span></div>
          <Link href="#" className="w-full inline-block text-center bg-gray-900 text-white py-2 rounded-lg">Afrekenen</Link>
        </div>
      </div>
    );
  }
  if (slug === 'afrekenen') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 border border-gray-200 rounded-lg space-y-4">
          <h3 className="font-semibold text-gray-900">Bezorggegevens</h3>
          <div className="grid grid-cols-2 gap-3">
            <input className="border border-gray-300 rounded px-3 py-2" placeholder="Voornaam" />
            <input className="border border-gray-300 rounded px-3 py-2" placeholder="Achternaam" />
            <input className="col-span-2 border border-gray-300 rounded px-3 py-2" placeholder="Adres" />
            <input className="border border-gray-300 rounded px-3 py-2" placeholder="Postcode" />
            <input className="border border-gray-300 rounded px-3 py-2" placeholder="Plaats" />
          </div>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg space-y-4">
          <h3 className="font-semibold text-gray-900">Betaling</h3>
          <div className="space-y-2">
            {['iDEAL','Creditcard','PayPal'].map((m) => (
              <label key={m} className="flex items-center gap-2">
                <input type="radio" name="pay" /> <span>{m}</span>
              </label>
            ))}
          </div>
          <button className="w-full bg-gray-900 text-white py-2 rounded-lg mt-2">Plaats bestelling</button>
        </div>
      </div>
    );
  }
  if (slug === 'verzending') {
    return (
      <div className="p-6 border border-gray-200 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Verzendinformatie</h3>
        <p className="text-gray-600">Wij verzenden binnen 1-2 werkdagen met track & trace.</p>
      </div>
    );
  }
  return null;
}

function renderRestaurant(slug: string) {
  if (slug === 'overzicht') {
    return (
      <div className="space-y-6">
        <div className="h-56 bg-gray-200 rounded-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Menu','Reserveren','Locatie'].map((s) => (
            <div key={s} className="p-6 border border-gray-200 rounded-lg text-center">
              <h3 className="font-semibold text-gray-900">{s}</h3>
              <p className="text-gray-600 text-sm">Snelle toegang tot info</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (slug === 'menu') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Voorgerechten','Hoofdgerechten','Desserts'].map((cat) => (
          <div key={cat} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{cat}</h3>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-700">Gerecht {i + 1}</span>
                <span className="text-gray-500">€{10 + i}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'reserveren') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-gray-200 rounded-lg space-y-3">
          <h3 className="font-semibold text-gray-900">Reserveer tafel</h3>
          <input className="border border-gray-300 rounded px-3 py-2" placeholder="Naam" />
          <input type="date" className="border border-gray-300 rounded px-3 py-2" />
          <input type="time" className="border border-gray-300 rounded px-3 py-2" />
          <select className="border border-gray-300 rounded px-3 py-2"><option>2 personen</option><option>4 personen</option></select>
          <button className="bg-gray-900 text-white py-2 rounded-lg">Bevestig</button>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Openingstijden</h3>
          <p className="text-gray-600">Ma-Zo 17:00 - 22:00</p>
        </div>
      </div>
    );
  }
  if (slug === 'galerij') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-32 bg-gray-200 rounded"></div>
        ))}
      </div>
    );
  }
  if (slug === 'locatie') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 h-64 bg-gray-200 rounded"></div>
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Adres</h3>
          <p className="text-gray-600">Hoofdstraat 123, Amsterdam</p>
        </div>
      </div>
    );
  }
  if (slug === 'prijzen') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { n: 'Basis', p: '€1.200', f: ['3 pagina’s','Responsive','Contactformulier'] },
          { n: 'Pro', p: '€2.000', f: ['6 pagina’s','Blog','SEO basics'] },
          { n: 'Maatwerk', p: 'Op aanvraag', f: ['Ongelimiteerd','Integraties','Strategie'] },
        ].map((plan) => (
          <div key={plan.n} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">{plan.n}</h3>
            <p className="text-2xl font-bold text-gray-900 mb-4">{plan.p}</p>
            <ul className="space-y-2 mb-4">
              {plan.f.map((x) => (
                <li key={x} className="text-gray-600">{x}</li>
              ))}
            </ul>
            <button className="w-full bg-gray-900 text-white py-2 rounded-lg">Kies plan</button>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'contact') {
    return (
      <div className="p-6 border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Samenwerken?</h2>
        <p className="text-gray-600 mb-4">Vertel over je project en planning.</p>
        <Link href="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block">Stuur bericht</Link>
      </div>
    );
  }
  return null;
}

function renderBlog(slug: string) {
  if (slug === 'overzicht') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-6 border border-gray-200 rounded-lg">
            <div className="h-32 bg-gray-200 rounded mb-3"></div>
            <h3 className="font-semibold text-gray-900">Artikel {i + 1}</h3>
            <p className="text-gray-600 text-sm">Korte samenvatting van het artikel.</p>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'artikelen') {
    return (
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">De Toekomst van Web {i + 1}</h3>
            <p className="text-gray-600">Diepere inhoud met lees meer.</p>
            <button className="mt-2 text-gray-900 font-semibold hover:underline">Lees meer</button>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'categorieen') {
    return (
      <div className="flex flex-wrap gap-3">
        {['Web','Design','CSS','JS','Infra','AI'].map((c) => (
          <span key={c} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">{c}</span>
        ))}
      </div>
    );
  }
  if (slug === 'over') {
    return (
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-gray-900">Over deze blog</h3>
        <p className="text-gray-600">Ik schrijf over web development en technologie.</p>
      </div>
    );
  }
  if (slug === 'nieuwsbrief') {
    return (
      <div className="p-6 border border-gray-200 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Schrijf je in</h3>
        <div className="flex gap-2">
          <input className="flex-1 border border-gray-300 rounded px-3 py-2" placeholder="E-mail" />
          <button className="bg-gray-900 text-white px-4 rounded">Inschrijven</button>
        </div>
      </div>
    );
  }
  if (slug === 'contact') {
    return (
      <div className="p-6 border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Samenwerken?</h2>
        <p className="text-gray-600 mb-4">Vertel over je project en planning.</p>
        <Link href="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block">Stuur bericht</Link>
      </div>
    );
  }
  return null;
}

function renderLanding(slug: string) {
  if (slug === 'overzicht') {
    return (
      <div className="space-y-8">
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Maximale conversie</h2>
          <p className="text-gray-600">Heldere opbouw met sterke CTA’s.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Voordelen','Social proof','CTA’s'].map((s) => (
            <div key={s} className="p-6 border border-gray-200 rounded-lg text-center">
              <h3 className="font-semibold text-gray-900">{s}</h3>
              <p className="text-gray-600 text-sm">Kernonderdelen uitgewerkt</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (slug === 'voordelen') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">Voordeel {i + 1}</h3>
            <p className="text-gray-600">Korte uitleg over het voordeel.</p>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'features') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">Feature {i + 1}</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Detail A</li>
              <li>Detail B</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'testimonials') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-6 border border-gray-200 rounded-lg">
            <p className="text-gray-700">“Geweldig resultaat, sterk aanbevolen!”</p>
            <p className="mt-2 text-sm text-gray-500">— Klant {i + 1}</p>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'prijzen') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { n: 'Starter', p: '€600' },
          { n: 'Growth', p: '€1.200' },
          { n: 'Scale', p: 'Op aanvraag' },
        ].map((x) => (
          <div key={x.n} className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">{x.n}</h3>
            <p className="text-2xl font-bold text-gray-900">{x.p}</p>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg">Kies plan</button>
          </div>
        ))}
      </div>
    );
  }
  if (slug === 'cta') {
    return (
      <div className="text-center p-10 bg-gray-900 text-white rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Klaar om te starten?</h3>
        <p className="mb-6 text-gray-200">Plan een demo of start direct.</p>
        <Link href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded font-semibold inline-block">Plan een gesprek</Link>
      </div>
    );
  }
  return null;
}



import React from 'react';
import { useParams, Link } from 'react-router';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { ArrowLeft, Globe, Briefcase, TrendingUp, Mail, Phone } from 'lucide-react';
import { companies } from '../data/companies';
import { Button } from '../components/ui/button';

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";

export function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  const company = companies.find(c => c.id === id);

  if (!company) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Entreprise non trouvée</h1>
          <p className="text-slate-600 mb-8">L'entreprise que vous recherchez n'existe pas.</p>
          <Button asChild>
            <Link to="/companies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au portefeuille
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      
      {/* Hero */}
      <PageHeader
        highlight={company.industry}
        title={<>{company.name}</>}
        subtitle={company.description}
        backgroundImage={PLACEHOLDER_IMAGE}
      >
        <Button asChild className="bg-white text-slate-950 hover:bg-cyan-50 rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase transition-all">
          <Link to="/contact">Nous contacter</Link>
        </Button>
      </PageHeader>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 md:px-32 lg:px-[15vw]">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Services & Expertises</h2>
            <p className="text-slate-600 max-w-3xl">
              {company.name} offre une gamme complète de services pour répondre aux besoins spécifiques du marché africain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-slate-200 p-6 hover:border-cyan-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 font-bold text-lg mb-4 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service}</h3>
                <p className="text-sm text-slate-600">
                  Solution spécialisée adaptée aux défis du secteur.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-24 bg-slate-50">
        <div className="w-full px-8 md:px-32 lg:px-[15vw]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Globe size={28} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">12+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">Pays d'Intervention</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Briefcase size={28} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{company.services.length}</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">Services Clés</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <TrendingUp size={28} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">+25%</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">Croissance Annuelle</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="w-full px-8 md:px-32 lg:px-[15vw] text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Collaborer avec {company.name}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Découvrez comment notre expertise peut transformer vos projets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-white text-lg px-10 h-14 rounded-full">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Nous contacter
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10 h-14 rounded-full">
              <Link to="/companies">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Retour au portefeuille
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { MapPin, Phone, Mail, Send, ArrowRight, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const ContactFormSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-8 lg:px-[15vw] py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[rgb(0,64,128)] text-white p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 border-l-4 border-cyan-500 pl-4 text-[rgb(255,255,255)]">{t('contactForm.hqTitle')}</h3>
              <div className="space-y-8">
                <div className="flex gap-6 group/item">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">{t('contactForm.addressLabel')}</span>
                    <p className="text-white text-lg leading-relaxed">
                      272, Avenue Colonel Mondjiba,
                      <br />
                      Kinshasa – Ngaliema, RDC
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group/item">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">{t('contactForm.phoneLabel')}</span>
                    <p className="text-white text-lg text-[20px]">+243 81 000 0000</p>
                  </div>
                </div>
                <div className="flex gap-6 group/item">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">{t('contactForm.emailLabel')}</span>
                    <p className="text-white text-lg">info@itmafrica.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
          </div>

          <div className="bg-slate-50 p-8 border border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">{t('contactForm.socialTitle')}</h4>
              <p className="text-slate-500 text-sm">{t('contactForm.socialSubtitle')}</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#004080] hover:text-white transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#004080] hover:text-white transition-all">
                <ArrowRight size={18} className="-rotate-45" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white p-0">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('contactForm.formTitle')}</h2>
              <p className="text-slate-500 text-lg leading-relaxed">{t('contactForm.formIntro')}</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t('contact.form.name')}</label>
                  <Input placeholder={t('contactForm.namePlaceholder')} className="h-14 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t('contact.form.email')}</label>
                  <Input type="email" placeholder={t('contactForm.emailPlaceholder')} className="h-14 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t('contact.form.phone')}</label>
                  <Input placeholder={t('contactForm.phonePlaceholder')} className="h-14 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t('contactForm.divisionsLabel')}</label>
                  <Select>
                    <SelectTrigger className="h-14 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none">
                      <SelectValue placeholder={t('contactForm.divisionPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{t('contactForm.divGeneral')}</SelectItem>
                      <SelectItem value="partnership">{t('contactForm.divPartnership')}</SelectItem>
                      <SelectItem value="hr">{t('contactForm.divHr')}</SelectItem>
                      <SelectItem value="mining">{t('contactForm.divMining')}</SelectItem>
                      <SelectItem value="energy">{t('contactForm.divEnergy')}</SelectItem>
                      <SelectItem value="investors">{t('contactForm.divInvestors')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t('contact.form.message')}</label>
                <Textarea placeholder={t('contactForm.messagePlaceholder')} className="min-h-[200px] bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-0 rounded-none resize-none text-base p-6" />
              </div>

              <div className="pt-4">
                <Button size="lg" type="button" className="w-full md:w-auto bg-[rgb(0,64,128)] hover:bg-cyan-600 text-white text-lg font-bold h-16 px-12 rounded-none transition-colors flex items-center gap-3">
                  {t('contact.form.submit')}
                  <Send size={20} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

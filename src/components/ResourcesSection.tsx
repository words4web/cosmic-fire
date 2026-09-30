import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowRight, X, Clock, Calendar, User, ChevronRight } from 'lucide-react';
import { ARTICLES_DATA } from '../data/mockData';
import { ArticleItem } from '../types';

interface ResourcesSectionProps {
  standalone?: boolean;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ standalone = false }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="resources-section" className={`py-24 bg-[#F8F5ED] relative overflow-hidden ${standalone ? 'pt-32' : 'border-t border-[#E7DED0]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[2px] bg-[#FF4D0A]" />
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold">
              KNOWLEDGE &amp; ENGINEERING PAPERS
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#171B18] leading-[1.08]">
            FIRE SAFETY INSIGHTS.
          </h2>

          <p className="text-base text-[#52514B] mt-3">
            Technical guidance, statutory compliance analyses, and life-safety whitepapers curated by accredited fire protection specialists.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#FFFDF8] rounded-2xl border border-[#E7DED0] hover:border-[#FF4D0A] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-[#FF4D0A]/10 hover:-translate-y-1 group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#171B18]">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFDF8]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-tech text-[#171B18] font-bold border border-[#E7DED0]">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] font-mono-tech text-[#52514B] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FF4D0A]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FF4D0A]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#171B18] mb-3 group-hover:text-[#FF4D0A] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52514B] leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full pt-4 border-t border-[#E7DED0] flex items-center justify-between text-xs font-bold font-mono-tech text-[#171B18] group-hover:text-[#FF4D0A] transition-colors"
                >
                  <span>Read Technical Paper</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-[#171B18]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#FFFDF8] rounded-3xl border border-[#E7DED0] shadow-2xl p-6 sm:p-10 z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E7DED0] mb-6">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#FF4D0A] font-bold">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-8 h-8 rounded-full bg-[#F2EBDD] hover:bg-[#E7DED0] flex items-center justify-center text-[#171B18]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#171B18] mb-4">
                {selectedArticle.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-[#52514B] pb-6 border-b border-[#E7DED0] mb-6">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#FF4D0A]" />
                  {selectedArticle.author}
                </span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#52514B] leading-relaxed mb-8">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E7DED0] flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#171B18] hover:bg-[#FF4D0A] text-white text-xs font-bold font-mono-tech uppercase tracking-wider transition-colors"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

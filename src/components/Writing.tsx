import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Writing = () => {
  const articles = [
    {
      title: "HK Enters the Stablecoin License Era: \"Stable\" Growth Under a High Bar",
      link: "https://mp.weixin.qq.com/s/1WeeQPYN_F97P8tRcPFKBw"
    },
    {
      title: "Decoding the Metaverse: Empowering Industrial Digital Transformation",
      link: "https://mp.weixin.qq.com/s/hiK3XwVx5V6zfC6Vn25hXg"
    },
    {
      title: "Interchain NFTs are coming to Cosmos",
      link: "https://medium.com/@interchain-io/interchain-nfts-are-coming-to-cosmos-e01e3abe3d37"
    },
    {
      title: "Exploring IOBScan: Your Aggregator for the Interchain",
      link: "https://blog.cosmos.network/exploring-iobscan-your-aggregator-for-the-interchain-5e13369c1dcb"
    }
  ];

  return (
    <section id="writing" className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="magazine-grid mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sunset uppercase tracking-[0.3em] text-[10px] font-bold block mb-4"
            >
              Writing
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]"
            >
              Thoughts on paper, ideas in motion.
            </motion.h2>
          </div>
        </div>

        <div className="border-t border-charcoal/10">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="magazine-grid py-8 md:py-12 border-b border-charcoal/10 group cursor-pointer hover:bg-oatmeal/50 transition-colors px-4 -mx-4"
            >
              <div className="col-span-10 md:col-span-9 flex items-center mb-0">
                <h3 className="text-lg md:text-[23px] font-bold group-hover:text-sunset transition-colors leading-tight">
                  {article.title}
                </h3>
              </div>
              <div className="col-span-2 md:col-span-3 flex items-center justify-end">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-sunset group-hover:border-sunset group-hover:text-white transition-all transform group-hover:-rotate-45">
                    <ArrowRight size={14} className="md:w-4 md:h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;

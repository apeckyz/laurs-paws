import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import ImageGrid from '../ui/ImageGrid';
import { GALLERY_IMAGES } from '../../utils/constants';

const Gallery = () => {
  return (
    <section id="gallery" className="relative z-10 bg-gradient-to-br from-brand-blue to-brand-peach bg-opacity-10 section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Our Work"
          subtitle="See the amazing transformations and happy pets we've cared for"
        />
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Before & After Grooming</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_IMAGES.beforeAfter.map((images, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <BeforeAfterSlider 
                  beforeImage={images.before}
                  afterImage={images.after}
                  alt={`Grooming transformation ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Happy Clients</h3>
          <ImageGrid images={GALLERY_IMAGES.showcase} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

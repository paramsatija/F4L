import { motion } from 'framer-motion';
import { Shirt, Car, Hotel, Camera, MapPin, Phone, Mail, Clock } from 'lucide-react';

const INFO_CATEGORIES = [
  {
    icon: Shirt,
    title: 'Dress Code',
    items: [
      'Black Tie / Evening Gown required',
      'Cocktail attire for Silver tier',
      'Designer wear encouraged',
      'Professional styling available on request',
    ],
  },
  {
    icon: Car,
    title: 'Parking & Transport',
    items: [
      'Complimentary valet parking for all guests',
      'Premium drop-off point at venue entrance',
      'Luxury shuttle service from partner hotels',
      'Helicopter landing pad available',
    ],
  },
  {
    icon: Hotel,
    title: 'Hotel Partners',
    items: [
      'Burj Al Arab - 30% discount for guests',
      'Atlantis The Palm - Special packages',
      'Armani Hotel - Exclusive rates',
      'Book through us for best rates',
    ],
  },
  {
    icon: Camera,
    title: 'Photography Policy',
    items: [
      'Professional photographers on-site',
      'Red carpet photos included',
      'Personal photography encouraged',
      'Official photos delivered within 48 hours',
    ],
  },
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Venue',
    value: 'Burj Park, Downtown Dubai',
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 4 XXX XXXX',
    link: 'tel:+97140000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@fashionsforlove.com',
    link: 'mailto:info@fashionsforlove.com',
  },
  {
    icon: Clock,
    label: 'Support Hours',
    value: '24/7 Available',
    link: null,
  },
];

export function PracticalInfoSection() {
  return (
    <section className="relative py-20 bg-grey-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-vibrant-red/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-vibrant-red text-sm tracking-[0.4em] uppercase mb-3">
            Essential Information
          </p>
          <h2 className="font-display text-display-md text-white mb-4 uppercase">
            Everything You Need to Know
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Plan your perfect evening with our comprehensive guide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {INFO_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark p-6 rounded-xl border border-white/10 hover:border-vibrant-red/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-vibrant-red/20 to-crimson/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-vibrant-red" />
                  </motion.div>
                  <h3 className="font-headline text-xl text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-start gap-2 text-white/70 text-sm"
                    >
                      <span className="text-vibrant-red mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-2xl border border-gold/30"
        >
          <h3 className="font-headline text-2xl text-white mb-6 text-center tracking-wide">
            Contact & Location
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {CONTACT_INFO.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-vibrant-red/10 mb-3"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon className="w-6 h-6 text-gold" />
                  </motion.div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                    {contact.label}
                  </p>
                  <p className="text-white text-sm font-medium">
                    {contact.value}
                  </p>
                </motion.div>
              );

              return contact.link ? (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              ) : (
                <div key={contact.label}>{content}</div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-white/40 text-sm mb-2">
            Have questions? Our concierge team is here to help
          </p>
          <motion.button
            className="inline-flex items-center gap-2 text-vibrant-red hover:text-white transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" />
            Contact Concierge
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

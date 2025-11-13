"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Camera, CheckCircle, Clock, Eye, Heart, HelpCircle, Images, Instagram, Mail, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          button={{
            text: "Contact Me",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Where memories meet artistry"
          description="Professional photography services capturing life's most precious moments with creative vision and technical excellence"
          tag="Portfolio Gallery"
          tagIcon={Camera}
          buttons={[
            {
              text: "View Gallery",
              href: "portfolio"
            },
            {
              text: "Book Session",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031979111-yxxqhoxv.jpg",
              imageAlt: "Professional landscape photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031979991-yg8pkdfv.jpg",
              imageAlt: "Portrait photography session"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031980777-l1tlnef1.jpg",
              imageAlt: "Nature photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031981602-jzjp63tx.jpg",
              imageAlt: "Wedding photography"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Passionate about capturing authentic moments that tell your unique story through the lens of creativity and emotion."
          features={[
            {
              icon: Eye,
              title: "Creative Vision",
              description: "Every photograph is crafted with artistic intent, capturing not just images but emotions and stories that resonate."
            },
            {
              icon: Heart,
              title: "Personal Connection",
              description: "Building relationships with clients to understand their vision and create images that truly reflect their personality."
            },
            {
              icon: Award,
              title: "Professional Quality",
              description: "Using top-tier equipment and techniques to deliver stunning, high-resolution images that exceed expectations."
            },
            {
              icon: Clock,
              title: "Timely Delivery",
              description: "Efficient workflow and post-processing ensure your precious memories are delivered promptly without compromising quality."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Photography Services"
          description="Comprehensive photography solutions tailored to capture your special moments"
          tag="Services"
          tagIcon={Camera}
          buttons={[
            {
              text: "View Portfolio",
              href: "portfolio"
            }
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: "1",
              title: "Portrait Photography",
              description: "Professional headshots and personal portraits that capture personality and character with perfect lighting and composition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031984000-lcpbae8l.jpg",
              imageAlt: "Portrait photography session"
            },
            {
              id: "2",
              title: "Landscape Photography",
              description: "Breathtaking natural landscapes and scenic photography showcasing the beauty of nature through artistic composition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031984631-uqzjbbo3.jpg",
              imageAlt: "Landscape photography"
            },
            {
              id: "3",
              title: "Wedding Photography",
              description: "Elegant wedding photography capturing every precious moment from ceremony to celebration with timeless style.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031985334-r27yygo5.jpg",
              imageAlt: "Wedding photography"
            },
            {
              id: "4",
              title: "Event Photography",
              description: "Dynamic event coverage for corporate functions, parties, and special occasions with professional documentation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031986039-mritgruf.jpg",
              imageAlt: "Event photography"
            },
            {
              id: "5",
              title: "Commercial Photography",
              description: "High-quality commercial photography for businesses, products, and marketing materials with creative visual solutions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031986680-3ncnal0d.jpg",
              imageAlt: "Commercial photography"
            },
            {
              id: "6",
              title: "Nature Photography",
              description: "Wildlife and nature photography capturing the raw beauty and essence of the natural world in stunning detail.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031987391-g7xfaxjh.jpg",
              imageAlt: "Nature photography"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Gallery Collections"
          description="Curated photography collections showcasing the finest work across different styles and subjects"
          tag="Gallery"
          tagIcon={Images}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Portfolio",
              name: "Wedding Memories Collection",
              price: "View Gallery",
              rating: 5,
              reviewCount: "120+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031988148-53r2219w.jpg",
              imageAlt: "Wedding photography collection",
              onProductClick: () => window.open('/wedding-gallery', '_blank')
            },
            {
              id: "2",
              brand: "Portfolio",
              name: "Portrait Artistry Series",
              price: "View Gallery",
              rating: 5,
              reviewCount: "85+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031988818-unlp2ufr.jpg",
              imageAlt: "Portrait photography collection",
              onProductClick: () => window.open('/portrait-gallery', '_blank')
            },
            {
              id: "3",
              brand: "Portfolio",
              name: "Nature & Landscape Works",
              price: "View Gallery",
              rating: 5,
              reviewCount: "200+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031989383-ort48qty.jpg",
              imageAlt: "Nature photography collection",
              onProductClick: () => window.open('/nature-gallery', '_blank')
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Photography by the Numbers"
          description="Professional achievements and client satisfaction metrics"
          tag="Statistics"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Photos Captured This Year"
            },
            {
              id: "2",
              value: "150+",
              description: "Happy Clients Served"
            },
            {
              id: "3",
              value: "50+",
              description: "Wedding Events Covered"
            },
            {
              id: "4",
              value: "5+",
              description: "Years Professional Experience"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Creative Team"
          description="Passionate professionals dedicated to capturing your perfect moments"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Alex Rivera",
              role: "Lead Photographer",
              description: "Award-winning photographer with 8 years of experience specializing in wedding and portrait photography. Passionate about storytelling through images.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031990516-ovtgdm5r.jpg",
              imageAlt: "Portrait of Alex Rivera",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/alexrivera_photo"
                },
                {
                  icon: Camera,
                  url: "https://portfolio.alexrivera.com"
                }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Photography Assistant",
              description: "Creative assistant and second shooter with expertise in lighting and post-processing. Ensuring every detail is perfectly captured.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031991095-9qx2m7cz.jpg",
              imageAlt: "Portrait of Sarah Chen",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/sarahchen_photo"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Collaborating with top venues, publications, and organizations"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031991641-kisge0jc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031992528-e15ucq1b.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031993277-qgmsya88.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031993894-bl2q5tzb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031994406-xvne0qmu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031995248-icd7pb4r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031995899-l40mimwe.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about booking and photography services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What photography packages do you offer?",
              content: "I offer customized photography packages for weddings, portraits, events, and commercial work. Each package includes professional editing and high-resolution digital galleries. Contact me for detailed pricing and package options."
            },
            {
              id: "2",
              title: "How far in advance should I book?",
              content: "I recommend booking at least 2-3 months in advance, especially for weddings and special events. Popular dates during peak seasons may require even earlier booking to ensure availability."
            },
            {
              id: "3",
              title: "Do you travel for photography sessions?",
              content: "Yes, I'm available for travel within the region and destination photography. Travel fees may apply depending on location and distance. I love exploring new venues and locations for unique shoots."
            },
            {
              id: "4",
              title: "What is your editing and delivery timeline?",
              content: "Standard turnaround time is 2-3 weeks for edited photos after the session. Rush delivery options are available for an additional fee. All images are delivered through a professional online gallery."
            },
            {
              id: "5",
              title: "Can I request specific shots or styles?",
              content: "Absolutely! I encourage discussing your vision and specific shot requests during our consultation. I'm happy to accommodate special requests and work with your preferred style preferences."
            },
            {
              id: "6",
              title: "What happens if weather affects outdoor shoots?",
              content: "I monitor weather forecasts closely and will discuss backup plans or rescheduling options. Many outdoor locations offer covered areas, and sometimes dramatic weather creates stunning photographic opportunities."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to capture your special moments?"
          description="Let's discuss your photography needs and create beautiful memories together. Reach out to schedule a consultation or ask any questions."
          tagIcon={Mail}
          inputPlaceholder="Your email address"
          buttonText="Contact Me"
          termsText="By contacting me, you agree to discuss your photography needs and receive information about services and availability."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763031996561-q1mpwb44.jpg"
          imageAlt="Photography studio workspace"
          mediaPosition="right"
          onSubmit={(email) => console.log('Contact form submitted:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="PhotoStudio"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Wedding Photography",
                  href: "weddings"
                },
                {
                  label: "Portrait Sessions",
                  href: "portraits"
                },
                {
                  label: "Event Photography",
                  href: "events"
                }
              ]
            },
            {
              title: "Gallery",
              items: [
                {
                  label: "Wedding Gallery",
                  href: "wedding-gallery"
                },
                {
                  label: "Portrait Gallery",
                  href: "portrait-gallery"
                },
                {
                  label: "Nature Gallery",
                  href: "nature-gallery"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Equipment & Process",
                  href: "process"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/photostudio",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Camera,
              href: "https://portfolio.photostudio.com",
              ariaLabel: "View our portfolio"
            },
            {
              icon: Mail,
              href: "mailto:hello@photostudio.com",
              ariaLabel: "Send us an email"
            }
          ]}
          copyrightText="© 2024 PhotoStudio. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
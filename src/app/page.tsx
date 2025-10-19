"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [{"id":"hero-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-interior-1760908602319-d65010dc.jpg","alt":"pizzeria interior"},{"id":"about-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-preparation-1760908607317-d68a8207.jpg","alt":"pizza preparation"},{"id":"feature-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/wood-fired-pizza-1760908609749-60b9b620.jpg","alt":"wood fired pizza"},{"id":"feature-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/fresh-ingredients-1760908612271-ffed128c.jpg","alt":"fresh ingredients"},{"id":"product-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pepperoni-pizza-1760908616150-a1716916.jpg","alt":"pepperoni pizza"},{"id":"product-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/vegetable-pizza-1760908622823-472194e1.jpg","alt":"vegetable pizza"},{"id":"product-3","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/cheese-pizza-1760908626554-21e35518.jpg","alt":"cheese pizza"},{"id":"team-member","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/chef-portrait-1760908629812-d01bb28e.jpg","alt":"chef portrait"},{"id":"testimonial","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/happy-customer-in-restaurant-1760908632941-8fd146e5.jpg","alt":"happy customer in restaurant"},{"id":"contact-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-ambiance-1760908636305-6fad17c3.jpg","alt":"pizzeria ambiance"}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Experience handcrafted pizzas made with the finest ingredients"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[{ text: "Order Now", href: "https://example.com" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Authentic Recipes", description: "Passed down through generations", icon: "Star" },
              { title: "Fresh Ingredients", description: "Locally sourced and organic" }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Wood Fired Flavor", description: "Taste the difference", imageSrc: assetMap.find(a => a.id === "feature-1")?.url },
              { title: "Fresh Ingredients", description: "Quality you can taste", imageSrc: assetMap.find(a => a.id === "feature-2")?.url }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              { id: "1", brand: "Pizzeria", name: "Pepperoni Pizza", price: "$12.99", rating: 5, reviewCount: "200", imageSrc: assetMap.find(a => a.id === "product-1")?.url },
              { id: "2", brand: "Pizzeria", name: "Veggie Pizza", price: "$11.99", rating: 5, reviewCount: "150", imageSrc: assetMap.find(a => a.id === "product-2")?.url },
              { id: "3", brand: "Pizzeria", name: "Cheese Pizza", price: "$10.99", rating: 5, reviewCount: "100", imageSrc: assetMap.find(a => a.id === "product-3")?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Join Us"
            title="Stay Updated"
            description="Sign up for our newsletter for special offers and updates."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url}
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Explore", items: [
                  { label: "Menu", href: "menu" },
                  { label: "About", href: "about" },
                  { label: "Contact", href: "contact" }
                ] }
            ]}
            copyrightText="© 2023 Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
import { Navbar1 } from "@/components/relume/Navbar1";
import { Header71 } from "@/components/relume/Header71";
import { Stats19 } from "@/components/relume/Stats19";
import { Portfolio13 } from "@/components/relume/Portfolio13";
import { Layout419 } from "@/components/relume/Layout419";
import { Team19 } from "@/components/relume/Team19";
import { Testimonial1 } from "@/components/relume/Testimonial1";
import { Logo4 } from "@/components/relume/Logo4";
import { Faq1 } from "@/components/relume/Faq1";
import { Cta25 } from "@/components/relume/Cta25";
import { Footer7 } from "@/components/relume/Footer7";

const cta = {
  title: "Contact Us",
  href: "https://greenwood-homes.com/contact/",
};

export default function Home() {
  return (
    <>
      <Navbar1
        logo={{ src: "/images/gwhweblogo1020-4faa02ba82.png", alt: "Greenwood Homes logo" }}
        navLinks={[
          { title: "About", url: "https://greenwood-homes.com/about/" },
          { title: "Portfolio", url: "https://greenwood-homes.com/portfolio/" },
          { title: "Team", url: "https://greenwood-homes.com/team/" },
          { title: "Testimonials", url: "https://greenwood-homes.com/testimonials/" },
        ]}
        buttons={[cta]}
      />

      <Header71
        heading="Award-Winning Custom Home Builder"
        description="Greenwood Homes is a licensed general contractor building custom homes in Nevada, California, Idaho, Utah, and Hawaii. With offices in Incline Village, Coeur d'Alene, and Kauai, we have been creating exceptional custom homes since 1998."
        buttons={[cta]}
        image={{
          src: "/images/incline-village-cutting-edge-modern-greenwood-homes-featured-86c5cfc249.jpg",
          alt: "Cutting Edge Modern custom home by Greenwood Homes",
        }}
      />

      <Stats19
        tagline="Since 1998"
        heading="A trusted builder across the West"
        description="Licensed general contractor in California, Nevada, Idaho, Utah, and Hawaii, with offices in Incline Village, Nevada; Coeur d'Alene, Idaho; and Kauai, Hawaii."
        stats={[
          { percentage: "1998", heading: "Founded" },
          { percentage: "50+", heading: "Custom homes completed" },
          { percentage: "5", heading: "States served" },
          { percentage: "3", heading: "Offices" },
        ]}
        image={{ src: "/images/ltcrop-c4a89fa01f.jpg", alt: "Lake Tahoe" }}
      />

      <Portfolio13
        tagline="Selected Work"
        heading="Project Portfolio"
        description="A selection of custom homes completed across Lake Tahoe, Idaho, and Hawaii."
        projects={[
          {
            title: "Lakeview Serenity",
            description: "Lake Tahoe",
            image: {
              src: "/images/006-475lakeshore_phjoystrotz-e74d7e7ed6.jpg",
              alt: "Lakeview Serenity by Greenwood Homes",
            },
            url: "https://greenwood-homes.com/portfolio/lakeview-serenity/",
            button: {
              title: "View Project",
              href: "https://greenwood-homes.com/portfolio/lakeview-serenity/",
            },
            tags: [],
          },
          {
            title: "Lakeview Chalet",
            description: "Lake Tahoe",
            image: {
              src: "/images/19-observation-260-high-res-13-ig-post-crop-ad249bfa8c.jpg",
              alt: "Lakeview Chalet by Greenwood Homes",
            },
            url: "https://greenwood-homes.com/portfolio/dollarpoint/",
            button: {
              title: "View Project",
              href: "https://greenwood-homes.com/portfolio/dollarpoint/",
            },
            tags: [],
          },
          {
            title: "Clear Creek Fairway",
            description: "Lake Tahoe",
            image: {
              src: "/images/clear-creek-mountain-modern-home-greenwood-homes-tahoe-truckee-017-4b0479315f.jpg",
              alt: "Clear Creek Fairway by Greenwood Homes",
            },
            url: "https://greenwood-homes.com/portfolio/clear-creek-mountain-modern/",
            button: {
              title: "View Project",
              href: "https://greenwood-homes.com/portfolio/clear-creek-mountain-modern/",
            },
            tags: [],
          },
          {
            title: "Cabin in the Woods",
            description: "Idaho",
            image: {
              src: "/images/godfrey-002-592f2af2c9.jpg",
              alt: "Cabin in the Woods by Greenwood Homes",
            },
            url: "https://greenwood-homes.com/portfolio/cabin-in-the-woods/",
            button: {
              title: "View Project",
              href: "https://greenwood-homes.com/portfolio/cabin-in-the-woods/",
            },
            tags: [],
          },
          {
            title: "Hale Pakika",
            description: "Hawaii",
            image: {
              src: "/images/006_hale_pakika-web-4f380e5cda.jpg",
              alt: "Hale Pakika by Greenwood Homes",
            },
            url: "https://greenwood-homes.com/portfolio/hale_pakika/",
            button: {
              title: "View Project",
              href: "https://greenwood-homes.com/portfolio/hale_pakika/",
            },
            tags: [],
          },
        ]}
        button={{
          title: "View All Projects",
          href: "https://greenwood-homes.com/portfolio/",
        }}
      />

      <Layout419
        tagline="About Greenwood Homes"
        heading="Quality construction, professionally delivered"
        description="Greenwood Homes is an award-winning custom home builder with over 50 custom homes completed and full construction divisions in Nevada, California, Hawaii, Idaho, and Utah. We collaborate closely with homeowners, architects, and designers throughout every phase of the project."
        buttons={[cta]}
        data={[
          {
            subheading: "Since 1998",
            description:
              "Based in Incline Village, Nevada, we create exceptional custom homes around the Lake Tahoe Basin, Truckee, and Hawaii, and have recently expanded to Idaho and Utah.",
            image: { src: "/images/59-c3478cdc8a.jpg", alt: "Custom home built by Greenwood Homes" },
          },
          {
            subheading: "Licensed General Contractor",
            description:
              "Licensed in California, Nevada, Idaho, Utah, and Hawaii, offering new construction of custom homes as well as remodel and renovation services.",
            image: { src: "/images/kahalawai_04-b3ab15fa86.jpeg", alt: "Custom home built by Greenwood Homes" },
          },
        ]}
      />

      <Team19
        tagline="Meet the Team"
        heading="The people behind every home"
        description="From project managers to office leadership, our team brings quality craftsmanship and honest, upfront client relationships to every build."
        button={{
          title: "Meet the Full Team",
          href: "https://greenwood-homes.com/team/",
        }}
        teamMembers={[
          {
            image: { src: "/images/kevin-hanna_4x4_2025-04_2-47053f6700.jpg", alt: "Kevin Hanna" },
            name: "Kevin Hanna",
            jobTitle: "President, CEO",
            description:
              "The driving force behind Greenwood Homes, building the company on the principles of quality craftsmanship, unsurpassed customer service, and honest upfront client relationships.",
            socialLinks: [],
          },
          {
            image: { src: "/images/linda-tokunaga_4x4_2025-d89b0ecf32.jpg", alt: "Linda Tokunaga" },
            name: "Linda Tokunaga",
            jobTitle: "Office Manager",
            description:
              "Over 20 years in the residential appraisal business and owner of Linda Tokunaga Appraisal Service, bringing a wealth of knowledge to the office.",
            socialLinks: [],
          },
          {
            image: { src: "/images/kathie500-ad0988eb72.jpg", alt: "Kathie Goldberg" },
            name: "Kathie Goldberg",
            jobTitle: "Accounting Manager",
            description:
              "A former Silicon Valley software developer whose attention to detail and communication skills are invaluable to our accounting duties.",
            socialLinks: [],
          },
          {
            image: { src: "/images/julia-square-web-01ff0ca6d3.jpg", alt: "Julia Dirnu" },
            name: "Julia Dirnu",
            jobTitle: "Accounting Assistant",
            description:
              "A graduate of San Jose State University who relocated to the Lake Tahoe area to support the Greenwood accounting team.",
            socialLinks: [],
          },
          {
            image: { src: "/images/adam_headshot_6x6-b1585dad7e.jpeg", alt: "Adam Jackson" },
            name: "Adam Jackson",
            jobTitle: "Project Manager",
            description:
              "Studied International Business Management at Cal Poly and brings strong leadership, communication, and logistics skills to every client build.",
            socialLinks: [],
          },
          {
            image: { src: "/images/matt-hanna-sq-3266e23f51.jpg", alt: "Matthew Hanna" },
            name: "Matthew Hanna",
            jobTitle: "Project Manager",
            description:
              "Brings commercial and residential project management experience, holding a Bachelor's in Economics from Bates College.",
            socialLinks: [],
          },
        ]}
      />

      <Testimonial1
        quote="We would enthusiastically recommend Greenwood Homes for any building project, large or small. Kevin and his staff guided us through the entire process with little anxiety, and the project was completed under time and under budget. We continue to be impressed by the quality and craftsmanship."
        name="Greenwood Homes Client"
        position="Incline Village, Lake Tahoe"
        companyName="Greenwood Homes"
      />

      <Logo4
        heading="Awards & Recognition"
        description="Proud recipient of Tahoe Quarterly Mountain Home Awards and long-standing craftsmanship recognition."
        buttons={[]}
        logos={[{ src: "/images/tq-logo-med-ivory-d6359c45b9.png", alt: "Tahoe Quarterly" }]}
      />

      <Faq1
        heading="Frequently Asked Questions"
        description="Answers to common questions about building with Greenwood Homes."
        footerHeading="Have a question about your project?"
        footerDescription="We're happy to discuss your custom home, remodel, or renovation."
        button={cta}
        questions={[
          {
            title: "Where does Greenwood Homes build?",
            answer:
              "We build custom homes in Nevada, California, Idaho, Utah, and Hawaii, with offices in Incline Village, Nevada; Coeur d'Alene, Idaho; and Kauai, Hawaii.",
          },
          {
            title: "How long has Greenwood Homes been building?",
            answer:
              "Since 1998. We have completed over 50 custom homes and established full construction divisions across five states.",
          },
          {
            title: "Is Greenwood Homes a licensed general contractor?",
            answer:
              "Yes. We are licensed in California (844360), Nevada (75871), Hawaii (30129), Idaho (59886), and Utah (14013486-5501).",
          },
          {
            title: "What services does Greenwood Homes offer?",
            answer:
              "We offer new construction of custom homes, remodel and renovation, pre-construction budgeting, construction management, and sustainability-focused building.",
          },
        ]}
      />

      <Cta25
        heading="Take the Next Step"
        description="Ready to build the custom home of your dreams? Contact our team to get started."
        buttons={[cta]}
      />

      <Footer7
        logo={{ src: "/images/gwhweblogo1020-4faa02ba82.png", alt: "Greenwood Homes logo" }}
        columnLinks={[
          {
            links: [
              { title: "Portfolio", url: "https://greenwood-homes.com/portfolio/" },
              { title: "About", url: "https://greenwood-homes.com/about/" },
              { title: "Team", url: "https://greenwood-homes.com/team/" },
              { title: "Testimonials", url: "https://greenwood-homes.com/testimonials/" },
            ],
          },
          {
            links: [
              { title: "Contact Us", url: "https://greenwood-homes.com/contact/" },
              { title: "Blog", url: "https://greenwood-homes.com/blog/" },
            ],
          },
        ]}
        footerText="Greenwood Homes is a licensed general contractor in California (844360), Nevada (75871), Hawaii (30129), Idaho (59886), and Utah (14013486-5501)."
        footerLinks={[{ title: "Contact Us", url: "https://greenwood-homes.com/contact/" }]}
      />
    </>
  );
}
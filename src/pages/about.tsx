import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="SPARKIFY HUB - Digital Marketing Agency"
        description="Learn more about SPARKIFY HUB, a dedicated Digital Marketing Agency with 2 years of experience. Discover the journey, skills, and passion that drive us to create innovative and user-friendly digital solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About SPARKIFY HUB - Digital Marketing Agency",
          description:
            "Dive into the story of SPARKIFY HUB, a Digital Marketing Agency. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional digital solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "SPARKIFY HUB -  Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "SPARKIFY HUB portfolio, SPARKIFY HUB, Digital Marketing Agency",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Why Choose Sparkify Hub" details={EXPERIENCE} />
      <ExperienceShowcaseList title="We Build Digital Experiences" details={EDUCATION} />
    </>
  );
}

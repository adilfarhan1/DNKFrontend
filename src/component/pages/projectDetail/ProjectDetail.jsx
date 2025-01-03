import React, { useEffect, useState } from "react";
import ProjectBanner from "./components/ProjectBanner";
import DetailProject from "./components/DetailProject";
import PartnerSection from "../home/components/PartnerSection";
import TalkSection from "../home/components/TalkSection";
import { Helmet } from "react-helmet";
import { useProjectServices } from "../../../services/projectServices";
import { useParams } from "react-router-dom";
import { URL } from "../../../url/axios";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const currentYear = new Date().getFullYear();

  const { getProjectById } = useProjectServices();

  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchProjectData = async () => {
      try {
        const response = await getProjectById(slug);
        if (response.success) {
          const projectData = response.data;
          if (projectData) {
            setProjectData(projectData);
          }
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [slug]);

  useEffect(() => {
    if (projectData) {
      const { projectname, developer, locationname, about, about1, about2 } =
        projectData;
      setKeywords([
        `${projectname}`,
        `${developer.replace(/-/g, " ")} ${projectname}`,
        `${developer.replace(/-/g, " ")}`,
        `${projectname} by ${developer.replace(/-/g, " ")}`,
        `${projectname} at ${locationname}`,
        `${locationname}`,
        `Properties in ${locationname}`,
        `Buy property in ${locationname}`,
        `Best property ${currentYear}`,
        `${locationname} properties`,
        `Dubai property prices ${currentYear}`,
        `${projectname} Property Price ${currentYear}`,
        `Best Developer in Dubai - ${developer.replace(/-/g, " ")}`,
        "Luxury properties in Dubai",
        "Dubai off-plan properties",
        "Cheap property for sale in Dubai",
        "Freehold properties in Dubai",
        `Dubai property market ${currentYear}`,
        `${currentYear} Dubai real estate`,
        `Best property investments in Dubai ${currentYear}`,
        `${currentYear} Dubai off-plan projects`,
        `${currentYear} Off-plan villas in Dubai`,
        "Dubai property investment returns",
        "Buy off-plan apartments in Dubai",
        `Best areas to invest in Dubai ${currentYear}`,
        "Dubai real estate investment opportunities",
        "Dubai commercial property for sale",
        "Office spaces for sale in Dubai",
        "Warehouses for sale in Dubai",
        "Luxury beachfront properties Dubai",
        "Pre-launch projects in Dubai",
        `Upcoming off-plan projects Dubai ${currentYear}`,
        `${currentYear} New property launches in Dubai`,
        `Property market report Dubai ${currentYear}`,
        `Dubai real estate news ${currentYear}`,
        `${developer.replace(/-/g, " ")} Best Project?`,
        `${about}`,
        `${about1}`,
        `${about2}`,
      ]);
    }
  }, [projectData]);

  if (!projectData) {
    return (
      <div className="bg-[#040406] text-center">
        <p className="m-auto loader !w-[24px] !h-[24px] hidden"></p>
      </div>
    );
  }

  const {
    projectname,
    about,
    about1,
    about2,
    startingprice,
    thumbnail,
    developer,
    locationname,
  } = projectData;

  return (
    <div>
      <Helmet>
        <title>
          {`${projectname} at ${locationname} - ${developer.replace(
            /-/g,
            " "
          )}`}
        </title>
        <meta name="description" content={`${about}, ${about1}, ${about2}`} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href={`https://www.dnkre.com/projects/${slug}`} />
        <meta
          property="og:title"
          content={`${projectname} at ${locationname} - ${developer.replace(
            /-/g,
            " "
          )}`}
        />
        <meta
          property="og:description"
          content={`${about}, ${about1}, ${about2}`}
        />
        <meta property="og:image" content={`${URL}${thumbnail}`} />
        <meta
          property="og:url"
          content={`https://www.dnkre.com/projects/${slug}`}
        />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta
          property="og:title"
          content={`${projectname} at ${locationname} - ${developer.replace(
            /-/g,
            " "
          )}`}
        />
        <meta
          property="og:description"
          content={`${about}, ${about1}, ${about2}`}
        />
        <meta property="og:image" content={`${URL}${thumbnail}`} />
        <meta
          property="og:url"
          content={`https://www.dnkre.com/projects/${slug}`}
        />
        <meta property="og:type" content="product" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${projectname} at ${locationname} - ${developer.replace(
            /-/g,
            " "
          )}`}
        />
        <meta
          name="twitter:description"
          content={`${about}, ${about1}, ${about2}`}
        />
        <meta name="twitter:image" content={`${URL}${thumbnail}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "product",
            mainEntity: {
              "@type": "product",
              name: `${projectname} at ${locationname} - ${developer.replace(
                /-/g,
                " "
              )}`,
              description: `${about} ${about1} ${about2}`,
              keywords: keywords.join(", "),
              image: `${URL}${thumbnail}`,
              url: `https://www.dnkre.com/projects/${slug}`,
              offers: {
                "@type": "product",
                price: `${startingprice}`,
                priceCurrency: "AED",
                availability: "http://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "DNK Real Estate",
                  logo: "https://www.dnkre.com/logo.webp",
                },
                itemOffered: {
                  "@type": "product",
                  name: `${projectname} by ${developer.replace(/-/g, " ")}`,
                  image: `${URL}${thumbnail}`,
                  url: `https://www.dnkre.com/projects/${slug}`,
                },
                offeredBy: {
                  "@type": "Organization",
                  name: "dnkre.com",
                  logo: "https://www.dnkre.com/logo.webp",
                  sameAs: [
                    "https://www.instagram.com/dnk_re/",
                    "https://www.facebook.com/dnkrealestate1/",
                    "https://www.linkedin.com/company/dnkrealestate/",
                    "https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+971555769195",
                    contactType: "Sales",
                    email: "info@dnkre.com",
                    areaServed: "United Arab Emirates",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "AE",
                    streetAddress: "Suite No. 2602, Silver Tower, Marasi Drive",
                    addressLocality: "Business Bay",
                    addressRegion: "Dubai",
                    postalCode: "26048",
                  },
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "28",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "John Doe",
                  },
                  reviewBody:
                    "Amazing property with fantastic amenities and prime location!",
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <ProjectBanner />
      <DetailProject />
      <PartnerSection />
      <TalkSection />
    </div>
  );
};

export default ProjectDetail;

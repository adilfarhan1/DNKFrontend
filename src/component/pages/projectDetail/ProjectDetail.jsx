import React, { useCallback, useEffect, useState } from "react";
import ProjectBanner from "./components/ProjectBanner";
import DetailProject from "./components/DetailProject";
import TalkSection from "../home/components/TalkSection";
import DnkLogo from "../../../assets/logo/dnklogo_1.webp";
import { useProjectServices } from "../../../services/projectServices";
import { useParams } from "react-router-dom";
import { URL } from "../../../url/axios";
import { Helmet } from "react-helmet-async";
import ExploreProjects from "./components/ExploreProjects";
import MobileSliderInfo from "./components/MobileSliderInfo";

const currentYear = new Date().getFullYear();

export const ProjectDetail = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [keywords, setKeywords] = useState([]);

  const { getProjectById } = useProjectServices();

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

  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProjectData();
  }, [slug]);

  useEffect(() => {
    if (projectData) {
      const { projectname, developer, locationname, projectkeyword } =
        projectData;
      setKeywords([
        `${projectname}`,
        `${projectkeyword}`,
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
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    coverimage,
    developer,
    locationname,
    projectdescription,
    developerlogo,
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
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="description" content={`${projectdescription}${about}`} />
        <link rel="canonical" href={`https://www.dnkre.com/projects/${slug}`} />
        <link
          rel="preload"
          as="image"
          href={`${URL}${coverimage}`}
          type="image/webp"
          fetchpriority="high"
        ></link>
        {developerlogo ? (
          <link
            rel="preload"
            as="image"
            href={`${URL}${encodeURIComponent(developerlogo)}`}
            type="image/webp"
            fetchpriority="high"
          />
        ) : (
          <link
            rel="preload"
            as="image"
            href={DnkLogo}
            type="image/webp"
            fetchpriority="high"
          />
        )}

        <meta name="author" content="DNK Real Estate" />

        {/* Ensure the page is indexable */}
        <meta name="robots" content="index, follow" />

        <meta
          property="og:url"
          content={`https://www.dnkre.com/projects/${slug}`}
        />
        <meta property="og:type" content="https://www.dnkre.com/" />
        <meta
          property="og:title"
          content={`${projectname} at ${locationname} - ${developer.replace(
            /-/g,
            " "
          )}`}
        />
        <meta
          property="og:description"
          content={`${projectdescription}${about}`}
        />
        <meta property="og:image" content={`${URL}${thumbnail}`} />

        <link rel="shortcut icon" href="https://www.dnkre.com/logo.ico" />

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
          content={`${projectdescription}${about}`}
        />
        <meta name="twitter:image" content={`${URL}${thumbnail}`} />
        <script type="application/ld+json">
          {JSON.stringify([
            // Organization Schema
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "DNK Real Estate",
              logo: "https://www.dnkre.com/logo.webp",
              url: "https://dnkre.com",
              sameAs: [
                "https://www.instagram.com/dnk_re/",
                "https://www.facebook.com/dnkrealestate1/",
                "https://www.linkedin.com/company/dnkrealestate/",
                "https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA",
              ],
              telephone: "+971555769195",
              email: "info@dnkre.com",
              address: "Merasi Drive, Business Bay, Dubai",
            },

            // BreadcrumbList Schema
            {
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://dnkre.com",
                    name: "Home",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Place",
                    name: `${locationname}`,
                    "@id": `https://www.dnkre.com/projects/${slug}`,
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Brand",
                    name: `${developer.replace(/-/g, " ")}`,
                    "@id": `https://www.dnkre.com/projects/${slug}`,
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@type": "House",
                    name: `${projectname}`,
                    "@id": `https://www.dnkre.com/projects/${slug}`,
                  },
                },
              ],
              numberOfItems: 4,
            },

            // ItemPage Schema
            {
              "@context": "http://schema.org",
              "@type": "ItemPage",
              mainEntity: {
                "@type": "WebPage",
                name: `${projectname} at ${locationname} - ${developer.replace(
                  /-/g,
                  " "
                )}`,
                description: `${about} ${about1} ${about2}`,
                keywords: keywords.join(", "),
                url: `https://www.dnkre.com/projects/${slug}`,
                image: `${URL}${thumbnail}`,

                offers: [
                  {
                    "@type": "Offer",
                    name: `${projectname} at ${locationname} - ${developer.replace(
                      /-/g,
                      " "
                    )}`,
                    availability: "https://schema.org/InStock",
                    price: `${startingprice}`,
                    priceCurrency: "AED",
                    itemOffered: {
                      "@type": "House",
                      name: `${projectname} at ${locationname} - ${developer.replace(
                        /-/g,
                        " "
                      )}`,
                      logo: `${URL}${thumbnail}`,
                      url: `https://www.dnkre.com/projects/${slug}`,
                      image: `${URL}${coverimage}`,
                    },
                    offeredBy: {
                      "@type": "Organization",
                      name: "DNK Real Estate",
                      address: "Suite No. 2602, Silver Tower, Marasi Drive",
                      telephone: "+971555769195",
                      email: "info@dnkre.com",
                      image: "https://www.dnkre.com/logo.webp",
                      sponsor: {
                        "@type": "Organization",
                        url: `https://www.dnkre.com/projects/${slug}`,
                        name: `${developer.replace(/-/g, " ")}`,
                      },
                    },
                  },
                ],
              },
            },
          ])}
        </script>
      </Helmet>
      <ProjectBanner />
      <DetailProject />
      <ExploreProjects />
      <MobileSliderInfo />
      <TalkSection />
    </div>
  );
};

export default ProjectDetail;

import React, { useEffect, useState } from 'react'
import BannerBuy from '../projectDetail/components/BannerBuy'
import BannerNews from './components/BannerNews'
import NewsMain from './components/NewsMain'
import { useParams } from 'react-router-dom'
import { userNewsServices } from '../../../services/newsServices'
import { Helmet } from 'react-helmet'
import { URL } from '../../../url/axios'
import MainBannerNews from './components/MainBannerNews'

export const NewsDetail = () => {
   const { newsurl } = useParams();
  const [newsData, setNewstData] = useState(null);
  
  const { getNewsById } = userNewsServices();

      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchNewstData();
      }, [newsurl]);

    const fetchNewstData = async () => {
      try {
        const response = await getNewsById(newsurl);
        if (response.success) {
          const newsData = response.data;
          if (newsData) {
            setNewstData(newsData);
          }
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    if (!newsData) {
      return <div>Loading...</div>;
    }
  
    const { newstitle, newskeyword, newsdescription, newsthumbnail } = newsData;
  
  return (
    <>
      <Helmet>
        <title>{newstitle}</title>
        <meta name="keywords" content={`${newskeyword}`} />
        <meta name="description" content={`${newsdescription}`} />
        <link rel="canonical" href={`https://www.dnkre.com/news/${newsurl}`} />
        <meta name="author" content="DNK Real Estate" />

        {/* Ensure the page is indexable */}
        <meta name="robots" content="index, follow" />

        <meta
          property="og:url"
          content={`https://www.dnkre.com/news/${newsurl}`}
        />
        <meta property="og:type" content="https://www.dnkre.com/" />
        <meta property="og:title" content={newstitle} />
        <meta property="og:description" content={`${newsdescription}`} />
        <meta property="og:image" content={`${URL}${newsthumbnail}`} />
        <link
          rel="preload"
          as="image"
          href={`${URL}${newsthumbnail}`}
          type="image/webp"
        ></link>

        <link rel="shortcut icon" href="https://www.dnkre.com/logo.ico" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={newstitle} />
        <meta name="twitter:description" content={`${newsdescription}`} />
        <meta name="twitter:image" content={`${URL}${newsthumbnail}`} />
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
                    "@type": "News",
                    name: `${newstitle}`,
                    "@id": `https://www.dnkre.com/news/${newsurl}`,
                  },
                },
              ],
              numberOfItems: 2,
            },

            // ItemPage Schema
            {
              "@context": "http://schema.org",
              "@type": "ItemPage",
              mainEntity: {
                "@type": "WebPage",
                name: `${newstitle}`,
                description: `${newsdescription}`,
                keywords: `${newsdescription}`,
                url: `https://www.dnkre.com/news/${newsurl}`,
                image: `${URL}${newsthumbnail}`,
              },
            },
          ])}
        </script>
      </Helmet>
      <MainBannerNews />
      <NewsMain />
    </>
  );
}

export default NewsDetail
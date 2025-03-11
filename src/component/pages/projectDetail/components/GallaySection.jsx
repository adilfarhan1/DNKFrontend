import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadImg from "../../../../assets/icons/loadimg.webp";
import { IoClose } from "react-icons/io5";
import { URL } from "../../../../url/axios";
import useLazyLoadImage from "../../../../hooks/useLazyLoadImage ";
import { useProjectServices } from '../../../../services/projectServices';

export const GallaySection = () => {
    const { slug } = useParams();
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { getProjectById } = useProjectServices();
    const [isVisible1, imgRef1] = useLazyLoadImage(projectData?.gallary1);
    const [isVisible2, imgRef2] = useLazyLoadImage(projectData?.gallary2);
    const [isVisible3, imgRef3] = useLazyLoadImage(projectData?.gallary3);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
        useEffect(() => {
          fetchProject();
        }, [slug]);
      
       const fetchProject = async () => {
         try {
           const response = await getProjectById(slug);
    
           if (response.success) {
             const projectData = response.data;
    
             if (projectData) {
               setProjectData(projectData);
             } else {
               setError("No project found with the provided ID.");
             }
           } else {
             setError("Failed to fetch project details.");
           }
         } catch (err) {
           console.error("Failed to fetch team details", err);
           setError("An error occurred while fetching team details.");
         } finally {
           setLoading(false);
         }
      };
    
       if (loading) {
         return (
           <div className="bg-[#040406] text-center">
             <p className="m-auto loader !w-[24px] !h-[24px]"></p>
           </div>
         ); // Loading indicator
       }
    
       if (error) {
         return <div>{error}</div>; // Display error message
    }
    
     // Function to open modal with the selected image
      const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
      };
    
      // Function to close the modal
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };
    
  return (
    <>
      <h2>{projectData?.mainhead}</h2>
      {projectData.about && <p>Personally Visited & Approved</p>}

      <div
        className="grid 
                    grid-cols-3 mb-3"
      >
        <div
          className="col-span-2 mr-1 h-[170px] md:h-[285px] w-full"
          ref={imgRef1}
          onClick={() =>
            handleImageClick(
              projectData?.gallary1
                ? URL + encodeURIComponent(projectData.gallary1)
                : LoadImg
            )
          }
          role="img"
          aria-label={`${projectData.projectname}, ${projectData.altgallary1}`}
          style={{
            backgroundImage: `url(${
              isVisible1 && projectData?.gallary1
                ? URL + encodeURIComponent(projectData.gallary1)
                : LoadImg
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="ml-1">
          <div
            className=""
            ref={imgRef2}
            onClick={() =>
              handleImageClick(
                projectData?.gallary2
                  ? URL + encodeURIComponent(projectData.gallary2)
                  : LoadImg
              )
            }
            role="img"
            aria-label={`${projectData.projectname}, ${projectData.altgallary2}`}
            style={{
              backgroundImage: `url(${
                isVisible2 && projectData?.gallary2
                  ? URL + encodeURIComponent(projectData.gallary2)
                  : LoadImg
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "49.5%",
            }}
          ></div>
          <div className="h-[1.5%] w-full"></div>
          <div
            className=""
            ref={imgRef3}
            onClick={() =>
              handleImageClick(
                projectData?.gallary3
                  ? URL + encodeURIComponent(projectData.gallary3)
                  : LoadImg
              )
            }
            role="img"
            aria-label={`${projectData.projectname}, ${projectData.altgallary3}`}
            style={{
              backgroundImage: `url(${
                isVisible3 && projectData?.gallary3
                  ? URL + encodeURIComponent(projectData.gallary3)
                  : LoadImg
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "49.5%",
            }}
          >
            {/* <div className="white-cover flex">
                  <p className="m-auto text-[#000000] ">View More</p>
                </div> */}
          </div>
              </div>
              
      </div>
      {/* Modal for fullscreen image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-screen max-h-screen object-contain"
              loading="lazy"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 bg-white text-black p-2 rounded-full shadow-lg"
            >
              <IoClose
                className="text-[1.2rem] text-[#000]"
                aria-label="close"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default GallaySection
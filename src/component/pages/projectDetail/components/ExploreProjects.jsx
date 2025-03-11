import React from 'react'
import ProjectList from '../../home/components/ProjectList'

export const ExploreProjects=()=> {
  return (
    <div className=" w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] relative">
            <div className=" py-5  px-4  md:py-9 relative">
                <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
                    Explore other projects across Dubai
                </h3>
                <div className="px-4 xl:px-0">
                    <ProjectList />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExploreProjects
"use client"
import { motion as m } from "framer-motion";
const ProjectCards = ({image, subtitle, title, description}) => {
  return (
    <m.div whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="aspect-video border border-gray-50 dark:border-gray-800 rounded-xl bg-white dark:bg-black shadow-md ">
      <img className="rounded-xl" src={image} alt={title} />
      <div className="px-6">

        <div className="flex gap-4  my-3 ">
          <div>
            <h2 className="text-lg font-medium text-gray-700 dark:text-white">{title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          </div>
        </div>
        <div>
          <p className=" pb-5 dark:text-gray-400">{description}</p>
        </div>


      </div>


    </m.div>
  )
}
export default ProjectCards;
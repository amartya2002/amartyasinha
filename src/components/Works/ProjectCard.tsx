"use client"
const ProjectCards = ({ image, subtitle, title, description }) => {
  return (
    <div className="  space-y-4">
      <img className="rounded-2xl hover:scale-105 duration-300   " src={image} alt={title} />
      <div className="px-6 py-3  bg-[#1d1c21] rounded-3xl">

        <div className="flex gap-4  my-3 ">
          <div>
            <h2 className="text-lg font-medium text-gray-700 dark:text-white">{title}</h2>
            <p className="text-sm  dark:text-gray-400">{subtitle}</p>
          </div>
        </div>
        <div>
          <p className=" pb-5 dark:text-gray-400">{description}</p>
        </div>


      </div>


    </div>
  )
}
export default ProjectCards;
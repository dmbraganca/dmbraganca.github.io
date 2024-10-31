import Image from "next/image";


const ProjectCard = ({ projects = [] }) => {
  return (
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-between">
      {projects.map((project, index) => (
        <div
          className="flex mx-auto flex-col max-w-[320px] w-full h-[236px] project-card py-4 px-8 bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-md gap-1"
          key={index}
        >
          <Image
            className="rounded-full p-2 border border-zinc-300 dark:border-zinc-700/40"
            width={48}
            height={48}
            src={project.logo}
            alt={`${project.name} logo`}
          />
          <div className="w-[276px] h-[152px] flex flex-col gap-4">
            <h2 className="leading-7 font-semibold text-zinc-800 dark:text-zinc-100">{project.name}</h2>
            <p className="w-[276px] h-[48px] font-inter text-sm line-clamp-3 leading-6 text-zinc-700 dark:text-zinc-400">
              {project.content}
            </p>
            <a
              className="flex flex-row items-center gap-2 py-2 leading-7 hover:underline text-zinc-800 dark:text-zinc-300"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-zinc-800 dark:fill-zinc-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.6784 5.0784C15.2411 4.51572 16.0042 4.19961 16.8 4.19961C17.5958 4.19961 18.3589 4.51572 18.9216 5.0784C19.4843 5.64108 19.8004 6.40425 19.8004 7.2C19.8004 7.99576 19.4843 8.75892 18.9216 9.3216L17.4516 10.7904C17.2877 10.9602 17.1971 11.1876 17.1993 11.4236C17.2014 11.6596 17.2962 11.8852 17.4632 12.052C17.6301 12.2188 17.8559 12.3134 18.0919 12.3153C18.3278 12.3172 18.5551 12.2264 18.7248 12.0624L20.1936 10.5936C21.068 9.68831 21.5518 8.47582 21.5408 7.21728C21.5299 5.95873 21.0251 4.75483 20.1351 3.86487C19.2452 2.97491 18.0413 2.4701 16.7827 2.45917C15.5242 2.44823 14.3117 2.93204 13.4064 3.8064L9.8064 7.4064C9.33881 7.87403 8.9729 8.43323 8.7316 9.04894C8.49031 9.66464 8.37884 10.3236 8.40419 10.9844C8.42954 11.6452 8.59116 12.2936 8.87892 12.889C9.16668 13.4844 9.57436 14.014 10.0764 14.4444C10.258 14.596 10.492 14.67 10.7277 14.6504C10.9634 14.6309 11.182 14.5193 11.3361 14.3398C11.4901 14.1603 11.5674 13.9274 11.551 13.6914C11.5347 13.4554 11.4261 13.2353 11.2488 13.0788C10.9347 12.8099 10.6795 12.4789 10.4993 12.1067C10.3192 11.7345 10.2179 11.3291 10.2019 10.9158C10.1859 10.5026 10.2555 10.0906 10.4064 9.70553C10.5572 9.3205 10.786 8.9708 11.0784 8.6784L14.6784 5.0784Z" />
                <path d="M13.9236 9.55556C13.742 9.40396 13.508 9.32995 13.2723 9.34953C13.0366 9.3691 12.818 9.48071 12.6639 9.66018C12.5099 9.83966 12.4326 10.0726 12.449 10.3086C12.4653 10.5446 12.5739 10.7646 12.7512 10.9212C13.0653 11.1901 13.3205 11.521 13.5007 11.8932C13.6808 12.2655 13.7821 12.6709 13.7981 13.0841C13.8141 13.4973 13.7445 13.9094 13.5936 14.2944C13.4428 14.6795 13.214 15.0292 12.9216 15.3216L9.3216 18.9216C8.75892 19.4842 7.99575 19.8004 7.2 19.8004C6.40425 19.8004 5.64108 19.4842 5.0784 18.9216C4.51572 18.3589 4.1996 17.5957 4.1996 16.8C4.1996 16.0042 4.51572 15.241 5.0784 14.6784L6.5484 13.2096C6.71226 13.0397 6.80287 12.8124 6.80071 12.5764C6.79855 12.3404 6.70379 12.1147 6.53685 11.9479C6.3699 11.7811 6.14412 11.6866 5.90814 11.6847C5.67216 11.6827 5.44486 11.7735 5.2752 11.9376L3.8064 13.4064C3.34795 13.8491 2.98228 14.3788 2.73071 14.9644C2.47915 15.55 2.34674 16.1799 2.3412 16.8172C2.33566 17.4546 2.45711 18.0866 2.69846 18.6765C2.9398 19.2664 3.29622 19.8024 3.7469 20.2531C4.19759 20.7037 4.73352 21.0602 5.32342 21.3015C5.91332 21.5429 6.54539 21.6643 7.18273 21.6588C7.82007 21.6532 8.44992 21.5208 9.03554 21.2692C9.62116 21.0177 10.1508 20.652 10.5936 20.1936L14.1936 16.5936C14.6612 16.1259 15.0271 15.5667 15.2684 14.951C15.5097 14.3353 15.6212 13.6764 15.5958 13.0156C15.5705 12.3548 15.4088 11.7063 15.1211 11.1109C14.8333 10.5155 14.4256 9.98599 13.9236 9.55556Z" />
              </svg>
              {project.link}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProjectCard;

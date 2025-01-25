

const ServiceCard = ({icon:Icon,title,desc}) => {
  return (
    <div className="w-full bg-neutral-100 hover:bg-neutral-200  rounded-xl flex flex-col items-center justify-center text-center gap-4 cursor-pointer p-7 space-y-4 ease-in-out duration-300">
      <div className="w-full flex items-center justify-center gap-x-3">
        <div className="size-12 flex items-center justify-center rounded-xl bg-neutral-400/40">
          <Icon className='size-7 text-neutral-800'/>
        </div>
        <h1 className="text-2xl text-neutral-800 font-bold">
          {title}
        </h1>
      </div>
      <p className="text-neutral-600 text-sm font-normal">
        {desc}
      </p>

    </div>
  )
}

export default ServiceCard

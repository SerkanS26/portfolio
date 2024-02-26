import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col px-4  sm:px-8 md:px-12 lg:px-20 lg:flex-row xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src="/hero.png"
          alt="profile image"
          fill
          className="object-contain "
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        {/* TITLE */}
        <h1 className="text-4xl font-bold md:text-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          aperiam amet error consequuntur, deleniti optio corrupti,
          necessitatibus reprehenderit repellat unde ipsam ratione nisi magni.
          Rem quia iure nulla explicabo accusantium.
        </p>
        {/*BUTTONS*/}
        <div className="flex gap-4 w-full ">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

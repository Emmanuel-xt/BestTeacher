import Feed from "@components/Feed";


function page() {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className=" text-4xl font-extrabold text-center">
        Tell Your
        <br className="max-md:hidden" />
        <span className="blue_blue"> Experiences with us</span>
      </h1>
      <p className="desc text-center">
       Every Experience is a story waiting to be shared . Let us learn from you. Start sharing Today. 
      </p>
      <Feed />
    </section>
  );
}

export default page;

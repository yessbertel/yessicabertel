import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* presentation */}
          <div className="text-center xl:text-left">
            <span>Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I’m <br /> <span>Yessica Bertel</span>
            </h1>
            <p className="max-w-[500px] mb-9 ">
              I enjoy creating clean, functional interfaces and constantly
              improving my skills. I’m currently focused on growing as a Full
              Stack Developer, with a strong interest in AI-powered tools.
            </p>
            {/* CV and Social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl"/>
                </Button>
                <div className="mb-8 xl:mb-0">

                </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

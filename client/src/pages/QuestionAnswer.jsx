import rule from "../assets/rules-and-regulations.png";
import money from "../assets/MONEY-TRANSFER.png";
import register from "../assets/REGISTER.png";
import Container from "../components/Container";
import ImageBoxDesigner from "../components/ImageBoxDesigner";
import Sidebar from "../components/Sidebar";
import HomeCardSections from "../components/HomeCardSections";

const QuestionAnswer = () => {
  return (
    <div className=" text-white  px-6 py-10 font-sans">
      <Container className=" flex flex-col md:flex-row gap-8 ">
        <div className="">
          {/* Category Title */}
          <h2 className="text-3xl font-bold mb-4">
            Category: <span className="text-white">FAQ</span>
          </h2>
          <div className="">
            <div className="mb-20">
              {/* Header */}
              <div className="mb-6 text-center">
                <span className="bg-yellow-400 hover:bg-[#ff7c7c] duration-200 text-black text-xs font-semibold px-2 py-1 rounded">
                  FAQ
                </span>
                <h1 className="text-3xl font-bold mt-3 hover:text-[#ff7c7c] duration-200">
                  একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
                </h1>
                <p className="text-sm  mt-1">👤 By | January 26, 2025</p>
              </div>

              {/* Image */}

              <ImageBoxDesigner
                imgSrc={rule}
                alt="Rules and Regulation"
                height={"350px"}
              />
              {/* Main Content */}
              <p className="text-lg leading-relaxed mb-10 text-center">
                <span className="font-bold">WINPBU</span> – শর্ত এবং নিয়ম এই
                শর্ত গুলো না পড়ে আপনারা কখনোই একাউন্ট খুলবেন না! সকল সুপার এবং
                মাস্টার এজেন্ট এবং সকল ইউজার এর নিয়মের এই নিয়মাবলী।{" "}
                <a
                  href="#"
                  className=" underline hover:text-[#ff7c7c] duration-200"
                >
                  [Read More...]
                </a>
              </p>
            </div>
            <div className="mb-10">
              {/* Header */}
              <div className="mb-6 text-center">
                <span className="bg-yellow-400 hover:bg-[#ff7c7c] duration-200 text-black text-xs font-semibold px-2 py-1 rounded">
                  FAQ
                </span>
                <h1 className="text-3xl font-bold mt-3 hover:text-[#ff7c7c] duration-200">
                  একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
                </h1>
                <p className="text-sm mt-1">👤 By | January 26, 2025</p>
              </div>

              {/* Image */}
              <ImageBoxDesigner
                imgSrc={money}
                alt="Money Transfer"
                height={"350px"}
              />
              {/* Main Content */}
              <p className="text-lg leading-relaxed mb-10  text-center">
                বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিংএর সময় সীমাঃ-
                ব্যাংকে কিভাবে এ কিভাবে লেনদেন করবেন?
              </p>
            </div>
            <div className="mb-20">
              {/* Header */}
              <div className="mb-6 text-center">
                <span className="bg-yellow-400 hover:bg-[#ff7c7c] duration-200 text-black text-xs font-semibold px-2 py-1 rounded">
                  FAQ
                </span>
                <h1 className="text-3xl font-bold mt-3 hover:text-[#ff7c7c] duration-200">
                  একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
                </h1>
                <p className="text-sm  mt-1">👤 By | January 26, 2025</p>
              </div>

              {/* Image */}
              <ImageBoxDesigner
                imgSrc={register}
                alt="Register"
                height={"350px"}
              />
              {/* Main Content */}
              <p className="text-lg leading-relaxed mb-10 text-center">
                <span className="font-bold">WINPBU</span> – শর্ত এবং নিয়ম এই
                শর্ত গুলো না পড়ে আপনারা কখনোই একাউন্ট খুলবেন না! সকল সুপার এবং
                মাস্টার এজেন্ট এবং সকল ইউজার এর নিয়মের এই নিয়মাবলী।{" "}
                <a
                  href="#"
                  className=" underline hover:text-[#ff7c7c] duration-200"
                >
                  [Read More...]
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="">
          {/* Sidebar */}

          <Sidebar />
        </div>
      </Container>
        <HomeCardSections />
    </div>
  );
};

export default QuestionAnswer;

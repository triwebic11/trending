
import rule from "../assets/rules-and-regulations.png"
import money from '../assets/MONEY-TRANSFER.png'
import register from '../assets/REGISTER.png'

const QuestionAnswer = () => {
  return (
    <div className=" text-white  px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto   flex flex-col md:flex-row gap-8 ">
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
                <p className="text-sm  mt-1">
                  👤 By | January 26, 2025
                </p>
              </div>

              {/* Image */}
              <div className="mb-6">
                <img
                  src={rule}
                  alt="Rules and Regulations"
                  className="w-full rounded-lg shadow-lg hover:translate-3"
                />
              </div>
              {/* Main Content */}
              <p className="text-lg leading-relaxed mb-10 text-center">
                <span className="font-bold">WINPBU</span> – শর্ত এবং নিয়ম
                এই শর্ত গুলো না পড়ে আপনারা কখনোই একাউন্ট খুলবেন না! সকল সুপার এবং মাস্টার
                এজেন্ট এবং সকল ইউজার এর নিয়মের এই নিয়মাবলী।{' '}
                <a href="#" className=" underline hover:text-[#ff7c7c] duration-200">
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
                <p className="text-sm mt-1">
                  👤 By | January 26, 2025
                </p>
              </div>

              {/* Image */}
              <div className="mb-6">
                <img
                  src={money}
                  alt="money"
                  className="w-full rounded-lg shadow-lg hover:translate-3"
                />
              </div>
              {/* Main Content */}
              <p className="text-lg leading-relaxed mb-10  text-center">
                বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিংএর সময় সীমাঃ- ব্যাংকে কিভাবে এ কিভাবে লেনদেন করবেন?

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
                <p className="text-sm  mt-1">
                  👤 By | January 26, 2025
                </p>
              </div>

              {/* Image */}
              <div className="mb-6">
                <img
                  src={register}
                  alt="register"
                  className="w-full rounded-lg shadow-lg hover:translate-3"
                />
              </div>
              {/* Main Content */}
              <p className="text-lg leading-relaxed mb-10 text-center">
                <span className="font-bold">WINPBU</span> – শর্ত এবং নিয়ম
                এই শর্ত গুলো না পড়ে আপনারা কখনোই একাউন্ট খুলবেন না! সকল সুপার এবং মাস্টার
                এজেন্ট এবং সকল ইউজার এর নিয়মের এই নিয়মাবলী।{' '}
                <a href="#" className=" underline hover:text-[#ff7c7c] duration-200">
                  [Read More...]
                </a>
              </p>
            </div>
          </div>


        </div>

        <div className="">
          {/* Sidebar */}

          <aside>
            <h3 className="text-lg font-semibold mb-2">Search</h3>
            <div className="flex border border-gray-500 mb-16">
              <input
                type="text"
                className="flex-grow px-3 py-4 bg-transparent text-white focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-[#ff7c7c] text-black font-semibold px-4">
                Search
              </button>
            </div>
            <h3 className="text-2xl font-semibold mb-4 border-dotted border-b-2 border-gray-600 pb-1">
              Recent Posts
            </h3>
            <ul className="space-y-4 text-sm ">
              <li className="border-b-1 border-dotted border-gray-600 pb-1"> এজেন্ট কে ফেন নাম্বার দিয়ে খুঁজুন</li>
              <li className="border-b-1 border-dotted border-gray-600 pb-1"> কিভাবে আমি ভেরিফাই তে এজেন্ট হতে পারি?</li>
              <li className="border-b-1 border-dotted border-gray-600 pb-1"> ভেরিফাই সাইট</li>
              <li className="border-b-1 border-dotted border-gray-600 pb-1"> একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?</li>
              <li className="border-b-1 border-dotted border-gray-600 pb-1"> WINPBU তে কিভাবে নেনদেন করবেন?</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 border-b-2 border-dotted border-gray-600 pb-1">
              Recent Comments
            </h3>
            <p className="text-sm  mt-2">No comments to show.</p>
          </aside>
        </div>


      </div>
    </div>
  );
};

export default QuestionAnswer;


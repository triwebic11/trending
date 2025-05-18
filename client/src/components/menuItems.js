export const menuItems = [
  { title: "হোম পেইজ ", path: "/" },
  { title: "প্রশ্ন উত্তর", path: "/questionanswer" },
  {
    title: "সাইট ",
    submenu: [
      { title: "প্রক্সী লিঙ্কঃ", path: "/proxylink" },
      { title: "ভেল্কি", path: "/velki" },
    ],
  },
  {
    title: "এজেন্ট কে খজুন ",
    submenu: [
      { title: "এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন", path: "/suchagent" },
    ],
  },
  {
    title: "এজেন্ট লিস্ট  ",
    submenu: [
      { title: "মাষ্টার এজেন্ট লিস্ট", path: "/masteragentlist" },
      { title: "সুপার এজেন্ট লিস্ট", path: "/superagentlist" },
      { title: "সাব এডমিন লিস্ট", path: "/subadminlist" },
      { title: "সাইট এডমিন লিস্ট", path: "/siteadminlist" },
    ],
  },
  { title: "কাস্টমার সার্ভিস ", path: "/customerservics" },
];

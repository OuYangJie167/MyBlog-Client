import Mock from "mockjs";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "	https://resume-1313271688.cos.ap-guangzhou.myqcloud.com/%E7%BD%91%E9%A1%B5%E7%AE%80%E5%8E%86/index.html",
});

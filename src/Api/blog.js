import request from "./request.js";

export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
      params: {
        page,
        limit,
        categoryid,
      },
    });
  }

export async function getBlogCategories() {
    return await request.get("/api/blogtype");
}
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}
// 提交评论
export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo);
}
// 获取评论
export async function getComments(blogId, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogId,
      page,
      limit
    }
  });
} 

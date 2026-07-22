import { blogs } from "../data/blogs.js";

export function validateBlogExists(req, res, next) {
    const blogId = Number(req.params.blogId)
    const blog = blogs.find((b) => b.id === blogId);

    if(!blog) {
        res.status(404).json({
            message: "Blog not found"
        })
    }

    req.blog = blog

    next()
}
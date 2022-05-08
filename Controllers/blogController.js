const BlogModel = require('../model/blogSchema')

exports.getHomepage = (req, res, next) => {
    res.status(200).json({message: "this is home page"})
}
exports.postCreateBlog = async(req, res, next) => {
    const blog = await BlogModel.create({
        title: req.body.title,
        desc: req.body.desc
    })
    res.status(201).json({message: "blog is created",blog})
}

exports.getDeleteBlog = async(req, res, next) => {
    await BlogModel.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({message: "blog is deleted"})
}
exports.getShowBlog = async(req, res, next) => {
    const blogs=await BlogModel.find()
    res.status(200).json(blogs)
}
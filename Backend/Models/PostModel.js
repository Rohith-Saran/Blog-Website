const express = require("express");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    file: { type: String }

})

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
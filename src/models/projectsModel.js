import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    image: {
        type: String,
        required: [true, "Please provide an image"],
    },
    previewUrl: {
        type: String,
        required: [true, "Please provide a demo link"],
    },
    tag: {
        type: Array,
        required: [true, "Please provide technologies"],
    },
    
    });

const Projects = mongoose.model('Projects', projectsSchema);

export default Projects;
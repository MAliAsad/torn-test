const ffmpeg = require('fluent-ffmpeg'); 

function getVideoDurationInSeconds(videoPath) { 
    return new Promise((resolve, reject) => { 
        ffmpeg.ffprobe(videoPath, (err, metadata) => { 
            if (err) { 
                reject(err); 
            } else { 
                const duration = metadata.format.duration;
                resolve(duration); 
            } 
        }); 
    }); 
}

module.exports = {
    async beforeCreate(event) {
        // const { data, files }  = event.params;
        console.log("🚀 ~ beforeCreate ~ data, files:", JSON.stringify(event));

        throw new Error("Not implemented");

        // debugger
        // if(files.video && files.video.path) {
        //     try {
        //         const durationInSeconds = await getVideoDurationInSeconds(files.video.path);
        //         data.duration = durationInSeconds;
        //     } catch (error) {
        //         console.log('Error getting video duration: ', error);
        //     }
        // }

        // if(!data.publishDate) {
        //     data.publishDate = new Date()
        // }
    },
    async beforeUpdate(event) {
        // const { data, files }  = event.params;

        // if(files.video && files.video.path) {
        //     try {
        //         const durationInSeconds = await getVideoDurationInSeconds(files.video.path);
        //         data.duration = durationInSeconds;
        //     } catch (error) {
        //         console.log('Error getting video duration: ', error);
        //     }
        // }
    },
}
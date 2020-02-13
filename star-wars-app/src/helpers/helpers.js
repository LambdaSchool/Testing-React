export default function(seconds , cb) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("test");
            cb("test");
        }, seconds * 2000);
    })
}
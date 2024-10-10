const gulp = require('gulp')

function firstTask(done) {
    console.log('Pirma uzduotis')
    done()
}
function secondTask(done) {
    console.log('Antra uzduotis')
    done()
}  
function thirdTask(done) {
    console.log('Trecia uzduotis')
    done()
}  

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }
  


// exports.default = gulp.series(firstTask, secondTask, thirdTask)
exports.default = gulp.parallel(firstTask, secondTask, thirdTask)
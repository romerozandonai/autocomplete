module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      sass: { 
        files: [
          'scss/app.scss',
          'scss/plugins/bootstrap.scss',
          'scss/plugins/variables.scss',
          'scss/structure/main.scss',
        ],
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
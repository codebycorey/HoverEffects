module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					outputStyle: 'compressed'
				}
			}
		},
		watch: {
			css: {
				files: ['sass/*.scss'],
				tasks: ['compass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['compass', 'watch']);
}
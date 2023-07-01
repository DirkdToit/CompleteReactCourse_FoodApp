module.exports = function(plop) {
  plop.setGenerator('js-file', {
    description: 'Generate a JavaScript file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the file name (without the .js extension):',
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Enter the Directory destination after src:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{directory}}/{{name}}.js',
        templateFile: 'plopTemplates/js-file-template.hbs',
      },
    ],
  });
};

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
      {
        type: 'input',
        name: 'fileType',
        message: 'Type of file? (api/js):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{directory}}/{{name}}.js',
        templateFile: 'plopTemplates/{{fileType}}-file-template.hbs',
      },
    ],
  });
};

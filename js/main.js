window.onload = () => {
  //View elements
  const rootElement = document.getElementById('root');
  const addNewBtn = document.getElementById('addNewBtn');
  const inputTodo = document.getElementById('inputTodo');
  const breadCrumb = document.getElementById('breadCrumb');
  const mainView = document.getElementById('mainView');

  //Main root object
  const todoTree = {
    root: {
      folder1: {},
      folder2: {},
      folder3: {}
    }
  };
  const currentRoot = todoTree.root;

  const createBreadCrumb = () => {};

  const openIssue = e => {
    if (e.target.className !== 'issue-node') return;
    //open issue here
  };
  const createView = () => {
    let resultEle = '<ul>';
    const eachRecursive = obj => {
      resultEle += '<ul>';
      for (var k in obj) {
        resultEle += `<li id=${k} class="issue-node">${k}</li>`;
        if (typeof obj[k] == 'object' && obj[k] !== null) eachRecursive(obj[k]);
        else {
          console.log('yes');
        }
      }
      resultEle += '</ul>';
    };
    eachRecursive(todoTree.root);
    resultEle += '</ul>';
    mainView.innerHTML = resultEle;
  };

  const addNew = () => {
    const inputValue = inputTodo.value;
    currentRoot[inputValue] = {};
    createView();
  };
  createView();

  addNewBtn.onclick = addNew;
  mainView.onclick = openIssue;
};

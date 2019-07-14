window.onload = () => {
  //View elements
  const rootElement = document.getElementById('root');
  const addNewBtn = document.getElementById('addNewBtn');
  const inputTodo = document.getElementById('inputTodo');
  const breadCrumb = document.getElementById('breadCrumb');
  const mainView = document.getElementById('mainView');

  //Main root object
  const todoTree = {
    root: {}
  };
  let currentRoot = todoTree.root;

  let breadCrumbEle = Object.keys(todoTree);
  const createBreadCrumb = () => {
    console.log(breadCrumbEle);
    let result = '';
    for (let i = 0; i < breadCrumbEle.length; i++) {
      if (i > 0) result += ' >>';
      result += `<a href='#' class="menu-item">${breadCrumbEle[i]}<a>`;
    }
    breadCrumb.innerHTML = result;
  };
  createBreadCrumb();

  const createView = () => {
    let resultEle = '<ul>';
    for (let k in currentRoot) {
      resultEle += `<li id=${k} class="issue-node">${k}</li>`;
    }
    resultEle += '</ul>';
    mainView.innerHTML = resultEle;
  };

  const openIssue = e => {
    if (e.target.className !== 'issue-node') return;
    const issueName = e.target.innerText;
    breadCrumbEle.push(issueName);
    currentRoot = currentRoot[issueName];
    createBreadCrumb();
    createView();
  };

  const gotoFolder = e => {
    if (e.target.className !== 'menu-item') return;
    const issueName = e.target.innerText;
    const newBreadCrumb = [];
    currentRoot = todoTree;
    for (let ele of breadCrumbEle) {
      newBreadCrumb.push(ele);
      currentRoot = currentRoot[ele];
      if (ele === issueName) {
        break;
      }
    }
    breadCrumbEle = newBreadCrumb;
    createBreadCrumb();
    createView();
  };

  const addNew = () => {
    const inputValue = inputTodo.value;
    if (breadCrumbEle.includes(inputValue)) {
      return alert('issue already exists');
    }
    currentRoot[inputValue] = {};
    createView();
  };
  createView();

  addNewBtn.onclick = addNew;
  mainView.onclick = openIssue;
  breadCrumb.onclick = gotoFolder;
};

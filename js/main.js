window.onload = () => {
  //View elements
  const rootElement = document.getElementById('root');
  const addNewBtn = document.getElementById('addNewBtn');
  const inputTodo = document.getElementById('inputTodo');
  const breadCrumb = document.getElementById('breadCrumb');
  const mainView = document.getElementById('mainView');

  //Main root object
  const todoRoot = {
    root: {
      folder1: {
        sub1: {
          fl1: { fl1: { fl1: { fl1: '1', fl2: '2' }, fl2: '2' }, fl2: '2' },
          fl2: '2'
        },
        sub2: '2'
      },
      folder2: {
        fl1: '1',
        fl2: '2'
      },
      folder3: {
        fl1: '1',
        fl2: '2'
      }
    }
  };

  const createBreadCrumb = () => {};

  const createView = () => {
    let resultEle = '<ul>';
    const eachRecursive = obj => {
      resultEle += '<ul>';
      for (var k in obj) {
        // console.log(obj[k]);
        resultEle += `<li>${k}</li>`;
        if (typeof obj[k] == 'object' && obj[k] !== null) eachRecursive(obj[k]);
        else {
          console.log('yes');
        }
      }
      resultEle += '</ul>';
    };
    eachRecursive(todoRoot.root);
    resultEle += '</ul>';
    mainView.innerHTML = resultEle;
  };

  const addNew = () => {
    createView();
  };
  createView();

  addNewBtn.onclick = addNew;
};

const dataStorage = (() => {
    function storeProject(data) {
        localStorage.setItem(`project${data.key}`, JSON.stringify(data));
    }

    function removeProject(key) {
        localStorage.removeItem(`project${key}`);
    }

    function storeTodo(data) {
        localStorage.setItem(`todo${data.key}`, JSON.stringify(data));
    }

    function removeTodo(key) {
        localStorage.removeItem(`todo${key}`);
    }

    function loadStoredData() {
        
    }

    return { storeProject, removeProject, storeTodo, removeTodo, loadStoredData };
})();

export { dataStorage };
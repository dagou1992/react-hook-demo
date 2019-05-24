const create = str => 'MAIN_' + str;

export default {
    INIT_PAGE: create('INIT_PAGE'),
    TO_SEARCH: create('TO_SEARCH'),
    PAGE_LOADING: create('PAGE_LOADING'),
    CHANGE_ERROR: create('CHANGE_ERROR'),
}
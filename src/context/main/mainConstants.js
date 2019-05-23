const create = str => 'MAIN_' + str;

export default {
    INIT_PAGE: create('INIT_PAGE'),
    PAGE_LOADING: create('PAGE_LOADING'),
    CHANGE_ERROR: create('CHANGE_ERROR'),
}
import { createStore } from "vuex";
import auth from "./modules/auth";
import artikel from "./modules/artikel";
import detail from "./modules/detail";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        artikel,
        detail
    },
});

export default store;
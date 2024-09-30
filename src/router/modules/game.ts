import {Helpers} from "@/plugins/Helpers";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
    path: '',
    component: MainLayout,
    children: [
        {
            path: 'indie-game',
            name: 'indie.index',
            component: Helpers.lazyload('Game/GameIndie'),
        },
        {
            path: 'entry-game',
            name: 'entry.index',
            component: Helpers.lazyload('Game/GameEntry'),
        },
        {
            path: 'community',
            name: 'community.index',
            component: Helpers.lazyload('Game/Community'),
        },
    ],
}

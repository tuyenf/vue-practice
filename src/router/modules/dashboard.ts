import {Helpers} from "@/plugins/Helpers";
import MainLayout from "@/layouts/MainLayout.vue";
import PhotoIndex from '@/views/Photo/index.vue';

export default {
    path: '',
    component: MainLayout,
    children: [
        {
            path: '',
            name: 'photo.index',
            component: Helpers.lazyload('Photo/index'),
        }
    ],
}

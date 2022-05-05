import { createRouter ,createWebHistory} from 'vue-router';
import DcHeros from './pages/DcHeros';
import VueCalendar from './pages/VueCalendar';
import HomePage from './pages/HomePage';
import MarkDown from './pages/MarkDown';
import VueSlider from './pages/VueSlider';
import VueCalculator from './pages/VueCalculator';
import ReuseableModal from './pages/ReuseableModal';
import  ChatsVue from './pages/ChatsVue';
import store from './store/index';
import UserCrud from './pages/UserCrud';
import TensorFlow from './pages/TensorFlow';


const routes = [
    {path:'/',component:HomePage},
    {path:'/dc-heros',component:DcHeros},
    {path: '/calendar', component: VueCalendar },
    {path: '/markdown', component: MarkDown },
    {path: '/slider-carousel', component: VueSlider },
    {path: '/calculator', component: VueCalculator, meta: {middleware:'auth'}, },
    {path: '/reuseable-modal', component: ReuseableModal },
    {path: '/chat', 
    component: ChatsVue,
    meta: {middleware:'auth'},
    },
    {path: '/user-crud', component: UserCrud },
    {path: '/tensorflow', component: TensorFlow },
  ];

const router = createRouter({
   history:createWebHistory(),
    routes
});


router.beforeEach((to, _,next)=>{
  if(to.meta.middleware){
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if(middleware){
      middleware.default(next,store);
    }
    else{
      next();
    }
  }
  else{
    next();
  }
});
export default router;
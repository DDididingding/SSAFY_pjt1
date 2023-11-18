import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/user/LoginForm.vue'
import Register from '@/components/user/RegistPage.vue'
import UserMypage from '@/components/mypage/UserMy.vue'
import TrainerRegist from '@/components/trainer/TrainerRegist.vue'
import UserRegist from '@/components/user/UserRegist.vue'
import BoardRegist from '@/components/board/BoardRegist.vue'
import ReviewRegist from '@/components/review/ReviewRegist.vue'
import TrainerMypage from '@/components/mypage/TrainerMy.vue'
import TrainerDetail from '@/components/trainer/TrainerDetail.vue'
import PtDetail from '@/components/trainer/PtDetail.vue'
import VideoDetail from '@/components/video/VideoDetail.vue'
import VideoRegist from '@/components/video/VideoRegist.vue'
import BoardList from '@/components/board/BoardList.vue'
import VideoList from '@/components/video/VideoList.vue'
import Home from '@/components/common/HOME.vue'
import ReviewList from '@/components/review/ReviewList.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component: Register
    },
    {
      path:'/userMypage/',
      name:'userMypage',
      component: UserMy
    },
    {
      path:'/trainerRegist',
      name:'TrainerRegist',
      component: TrainerRegist
    },
    {
      path:'/userRegist',
      name:'UserRegist',
      component: UserRegist
    },
    {
      path:'/boardRegist',
      name:'BoardRegist',
      component: BoardRegist
    },
    {
      path:'/reviewRegist',
      name:'ReviewRegist',
      component: ReviewRegist
    },
    {
      path: '/trainerMypage/:member_code',
      name: 'trainerMypage',
      component: TrainerMy
    },
    {
      path: '/trainerDetail/:member_code', // :member_code를 사용하여 동적인 세그먼트를 나타냄
      name: 'TrainerDetail',
      component: TrainerDetail
    },
    {
      path: '/ptDetail',
      name: 'PtDetail',
      component: PtDetail
    },
    {
      path: '/videoDetail',
      name: 'VideoDetail',
      component: VideoDetail
    },
    {
      path: '/videoRegist',
      name: 'VideoRegist',
      component: VideoRegist
    },
    {
      path: '/boardList',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/videoList',
      name: 'VideoList',
      component: VideoList
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Root',
      component: Home
    }, 
    {
      path: '/reviewList',
      name: 'ReviewList',
      component: ReviewList
    },            
  ]
})

export default router
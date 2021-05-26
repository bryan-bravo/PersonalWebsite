import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ProjectDashboard from '@/components/ProjectDashboard.vue'
import ProjectArticle from '@/components/ProjectArticle.vue'
import FileUpload from '@/components/FileUpload.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    path: '/projects',
    name: 'ProjectDashboard',
    component: ProjectDashboard
  },
  {
    path: '/project/:projectId',
    name: 'ProjectArticle',
    component: ProjectArticle,
    props: true
  },
  {
    path:'fileupload',
    name: FileUpload,
    component: FileUpload
  }


]

const router = new VueRouter({
  routes
})

export default router

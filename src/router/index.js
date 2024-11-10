import { createRouter, createWebHistory } from 'vue-router'

import AboutMe from '@/components/AboutMe.vue';
import Projects from '@/components/Projects.vue';
import Resume from '@/components/Resume.vue';
import Contact from '@/components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
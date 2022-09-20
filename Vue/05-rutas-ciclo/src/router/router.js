import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: ()=> import(/*webpackChunkName: "PokemonLayout"*/ '@/modules/pokemon/layouts/PokemonLayout.vue'),
    children: [
      { 
        path: 'home', 
        name:'pokemon-home',
        component: ()=> import (/* webpackChunkName:"ListPage"*/ '@/modules/pokemon/pages/ListPage'), 
      },
      {
        path: 'about',
        name:'pokemon-about',
        component: ()=> import (/* webpackChunkName:"AboutPage"*/'@/modules/pokemon/pages/AboutPage')
      },
      { 
        path: 'pokemon-id/:id', 
        name:'pokemon-id',
        component: () => import(/* webpackChunkName:"PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"),
        props:(route) =>{
          console.log(route)
          const  id = Number(route.params.id)
          return isNaN(id )? {id:1}: {id: id}
        }
      },
      {
        path: '',
        redirect: {name: 'pokemon-about'}
      },
  ]
  },
  //DBZ Layout
  {
    path: '/dbz',
    name: 'dbz',
    component: () => import(/*webpackChunkName: "DbzLayout"*/'@/modules/dbz/layouts/DragonBallLayout.vue'),
    children: [
      {
        path: 'character',
        name: 'dbz-character',
        component: () => import(/*webpackChunkName: "CharactersDbz"*/ '@/modules/dbz/pages/Characters.vue'),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: ()=> import(/*webpackChunkName: "AboutDbz"*/'@/modules/dbz/pages/About.vue')
      },
      {
        path: '',
        redirect:{name:'dbz-character'}
      }
    ]
  },
  
  { 
    path: '/:pathMatch(.*)*', 
    component: (NoPageFound)=> import(/* webpackChunkName:"NoPageFound"*/ "@/modules/shared/pages/NoPageFound" ) 
    // redirect: '/home'
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


export default router;
import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from '@/entities/user'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'

import { SidebarItemType } from '../../model/types/sidebar'

export const getSidebarItems = (createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Home'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'About'
      }
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true
        },
        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'Articles',
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }
))

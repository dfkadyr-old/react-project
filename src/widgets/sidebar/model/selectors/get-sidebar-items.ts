import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from '@/entities/user'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import { RoutePath } from '@/shared/const/router'

import { SidebarItemType } from '../../model/types/sidebar'

export const getSidebarItems = (createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Home'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About'
      }
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'Articles',
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }
))

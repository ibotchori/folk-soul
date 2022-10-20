import {
  DoorIcon,
  HomeIcon,
  MemberIcon,
  MusicalKeyIcon,
  YoutubeIcon,
} from 'assets'

export const navButtonsData = [
  {
    id: 1,
    label: 'მთავარი',
    path: '/dashboard',
    icon: HomeIcon,
  },
  {
    id: 2,
    label: 'ჯგუფის წევრები',
    path: '/members',
    nestedPath: '/members/new',
    icon: MemberIcon,
  },
  {
    id: 3,
    label: 'სოციალური ქსელები',
    path: '/social-links',
    nestedPath: '/social-links/new',
    icon: YoutubeIcon,
  },
  {
    id: 4,
    label: 'ბენდის შესახებ',
    path: '/band-info',
    nestedPath: '/band-info/edit',
    icon: MusicalKeyIcon,
  },
  {
    id: 5,
    label: 'გადი გარეთ',
    path: '/',
    icon: DoorIcon,
  },
]

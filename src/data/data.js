import cryptoImg from './images/crypto.png'
import heroesImg from './images/heroes.png'
import phoneImg from './images/phone.png'

export const myProjects = [
  {
    title: 'Heroes App',
    text: 'Texto de Heroes App y un poquito mas de info para rellenar para la próxima con algúna cosilla',
    image: heroesImg,
    technologies: ['javascript', 'react'],
    links: [
      {
        platformName: 'Github',
        platformLink: 'https://github.com/Luvwen/HeroesApp-with-React'
      },
      {
        platformName: 'Netlify',
        platformLink: 'https://luvwen-heroapp-react.netlify.app/'
      }
    ]
  },
  {
    title: 'Cryptocurrency App',
    text: 'Texto de Cryptocurrency App y un poquito mas de info para rellenar para la próxima con algúna cosilla',
    image: cryptoImg,
    technologies: ['javascript', 'react', 'redux'],
    links: [
      {
        platformName: 'Github',
        platformLink: 'https://github.com/Luvwen/Cryptocurrency-App'
      },
      {
        platformName: 'Github Pages',
        platformLink: 'https://luvwen.github.io/Cryptocurrency-App/'
      }
    ]
  },
  {
    title: 'Phone store',
    text: 'Texto de Phone store y un poquito mas de info para rellenar para la próxima con algúna cosilla',
    image: phoneImg,
    technologies: ['javascript', 'react'],
    links: [
      {
        platformName: 'Github',
        platformLink: 'https://github.com/Luvwen/phone-shop-balino'
      },
      {
        platformName: 'Netlify',
        platformLink: 'https://phone-app-balino.netlify.app'
      }
    ]
  }
]

import cryptoImg from './images/crypto.png'
import heroesImg from './images/heroes.png'
import phoneImg from './images/phone.png'
import dbmoviespage from './images/dbmoviespage.png'
export const myProjects = [
  {
    title: 'Db Movies Page',
    text: 'Página inspirada en The Movie DB',
    image: dbmoviespage,
    technologies: ['typescript', 'react', 'redux', 'Firebase'],
    links: [
      {
        platformName: 'Github',
        platformLink: 'https://github.com/Luvwen/dbmoviepage'
      },
      {
        platformName: 'Vercel',
        platformLink: 'https://dbmoviepage.vercel.app/'
      }
    ]
  },
  {
    title: 'Phone store',
    text: 'Landing page para comprar celulares',
    image: phoneImg,
    technologies: ['javascript', 'react', 'Firebase'],
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
  },
  {
    title: 'Heroes App',
    text: 'Web estática con información de superheroes de Marvel y Dc',
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
    text: 'Página informativa sobre las distintas criptomonedas vigentes',
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
  }
]

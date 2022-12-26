import cryptoImg from './images/cryptocurrencies.png'
import heroesImg from './images/heroes.png'
import phoneImg from './images/phoneshop.png'
import dbmoviespage from './images/dbmoviespage.png'
export const myProjects = [
  {
    title: 'Db Movies Page',
    text: 'Página inspirada en The Movie DB donde se puede crear cuenta, agregar a favoritos y visualizar distintas categorias de películas y series, hecha enteramente con Typescript y Redux',
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
    text: 'Landing page para comprar celulares con carrito, sistema de favoritos y tracking de ordenes de compra con Firebase',
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
    text: 'Web estática con información de superheroes de Marvel y Dc y su respectivo buscador',
    image: heroesImg,
    technologies: ['javascript', 'react', ],
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
    text: 'Página informativa sobre las distintas criptomonedas vigentes y sus mas recientes noticias ',
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
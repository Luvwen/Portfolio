import phoneImg from './images/phoneshop.png'
import dbmoviespage from './images/dbmoviespage.png'
import tictactoe from './images/tictactoe.png'

export const myProjects = [
  {
    title: 'Tic-Tac-Toe',
    text: 'Juego Tic-Tac-Toe donde podes jugar contra otro jugador, diseño responsive y mobile first.',
    image: tictactoe,
    technologies: ['javascript', 'react', 'Chakra UI'],
    links: [
      {
        platformName: 'Github',
        platformLink: 'https://github.com/Luvwen/Tic-tac-toe'
      },
      {
        platformName: 'Vercel',
        platformLink: 'https://tic-tac-toe.luvwen.vercel.app/'
      }
    ]
  },
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
]
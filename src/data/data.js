import cryptoImg from './images/crypto.png'
import heroesImg from './images/heroes.png'
import phoneImg from './images/phone.png'

export const myProjects = [
  {
    title: 'Heroes App',
    text: 'Texto de Heroes App',
    image: heroesImg,
    technologies: ['javascript', 'react'],
    links: [
      { github: 'https://github.com/Luvwen/HeroesApp-with-React' },
      { netlify: 'https://luvwen-heroapp-react.netlify.app/' }
    ]
  },
  {
    title: 'Cryptocurrency App',
    text: 'Texto de Cryptocurrency App',
    image: cryptoImg,
    technologies: ['javascript', 'react', 'redux'],
    links: [
      { github: 'https://github.com/Luvwen/Cryptocurrency-App' },
      { netlify: 'https://luvwen.github.io/Cryptocurrency-App/' }
    ]
  },
  {
    title: 'Phone store',
    text: 'Texto de Phone store',
    image: phoneImg,
    technologies: ['javascript', 'react'],
    links: [
      { github: 'https://github.com/Luvwen/phone-shop-balino' },
      { netlify: 'https://phone-app-balino.netlify.app' }
    ]
  }
]

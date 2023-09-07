import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      items: {
        name: 'Name',
        description: 'Description'
      },
      form: {
        name: 'Name',
        description: 'Description',
        image: 'Image URL',
        button: 'Load Character Serie'
      }
    }
  },
  es: {
    translation: {
      items: {
        name: 'Nombre',
        description: 'Descripción'
      },
      form: {
        name: 'Nombre',
        description: 'Descripción',
        image: 'URL de la imagen',
        button: 'Cargar Personaje Serie'
      }
    }
  }
}
i18n.use(initReactI18next).init({
  resources,
  lng: 'en'
})

export default i18n

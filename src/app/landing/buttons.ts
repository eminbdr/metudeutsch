
class Tools{
  static calendarLinkGenerator(syear:any, smonth:any, sday:any, shour:any, sminute:any, 
    fyear:any, fmonth:any, fday:any, fhour:any, fminute:any, title:any, description:any,location:any){


    

    return `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=${syear}${smonth}${sday}T${shour}${sminute}00/${fyear}${fmonth}${fday}T${fhour}${fminute}00&ctz=Türkiye&details=${description}&location=${location}` 
  }
}

export class LandingValues{
  static other_platforms = [
    {
      id: "yt-music",
      value:
        'https://music.youtube.com/playlist?list=PL02TqV5xmkLHpmmHVrtZHPXGQ8Fn5E2Um&si=b7KfAeYGvABvozly',
      ico_url:
        'https://img.icons8.com/?size=160&id=v2g5nBwZDzuw&format=png',
      status: 'active',
    },
    {
      id: "spotify",
      value:
        'https://open.spotify.com/playlist/4OOwZqXG8mAMoClVhPZYGo?si=ce12e1fa677c4b97',
      ico_url:
        'https://img.icons8.com/?size=160&id=116712&format=png',
      status: 'active',
    },
  
  ]

  static button_values = [
  { name:"",
    name_de:'Lese Über Metu Deutsch',
    name_en:'Read About Metu Deutsch',
    id: "faq",
    value: '/faq',
    ico_url: '../assets/Deutsch2.png',
    style: 'background-color: #f5f5f5; color: black;',
    status: 'active',
    calendar : ''

  },
  { name:"",
    name_de: "Folgen Unsere Instagram Seite",
    name_en:"Follow Our Instagram Page",
    id: "instagram",
    value: 'https://www.instagram.com/metu_deutsch/',
    ico_url: 'https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico',
    status: 'active',
    calendar: ''
  },
  { name:"",
    name_de: 'MD-Hauptbahnof (Hauptgruppe)  <p>(Kontaktieren uns zu beitreten)</p>',
    name_en:'MD-Hauptbahnof (Main Group) <p>(Contact us to join)</p>',
    id: "whatsapp",
    value: 'https://docs.google.com/forms/d/1fM6wWItV7nsStW3H552mOBmXE9uNh_JoIHfW_kxvXjE/edit#responses',
    ico_url: '../assets/wp.svg',
    status: 'disabled',
    description: "Bitte kontaktieren uns für die WhatsApp-Gruppe.",
    addfunc: "console.log('Hello')",
    calendar: ''
  },
  { name:"",
    name_de: 'Anderer WP Gruppe',
    name_en:"Other WP Group",
    id: "other-whatsapp",
    value: 'https://chat.whatsapp.com/F8i0FhuHVn78cMlwbxNX7L',
    ico_url: '../assets/wp.svg',
    status: 'active',
    calendar: ''
  },
  { name:"",
    name_de: "Unsere Discord Server",
    name_en:"Our Discord Server",
    id: "discord",
    value: 'https://discord.gg/45Qzy9qduV',
    ico_url:
      'https://upload.wikimedia.org/wikipedia/tr/c/c7/Discord_logo_new.svg',
    status: 'active',
    style: 'width:32px',
    calendar:''
  },

];}

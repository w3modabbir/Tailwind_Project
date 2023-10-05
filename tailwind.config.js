tailwind.config = {
    theme: {
      extend: {
        colors: {
          'primarycolor': '#1C1D28',
          'secoundarycolor': '#fff',
          'peracolor': '#161722',
          'bottuncolor': '#FFD2A4',
          'bgcolor': '#FFF5EB',
          'joinbg': '#F5F2F0'
        },
        maxWidth: {
            'container': '1280px',
        },
        fontSize: {
            'navmamu': '16px',
        },
        fontFamily: {
           'robotoconsider': "Roboto Condensed, sans-serif",
        },
        backgroundImage: {
          'banner': "url('images/banner.jpg')",
          'visit': "url('images/visit.jpg')",
          'overlay': "linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);",
          'textcolor': "linear-gradient(0deg, #A54E2B -53.83%, #DC9853 62.61%);",
        }
      }
    }
  }
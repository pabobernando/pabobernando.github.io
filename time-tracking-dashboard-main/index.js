const jsonData = [{
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const container = document.querySelector('.time-box')

function changeFilter(def) {
  container.innerHTML = ''
  const value = def || document.querySelector('input[name="filter"]:checked').value;
  for (const data of jsonData) {
    const newDiv = document.createElement('div')
    const title = data.title.split(' ').join('-').toLowerCase()
    newDiv.classList.add('grid-item')

    newDiv.classList.add(title)
    newDiv.innerHTML = `
              <img src="./images/icon-${title}.svg" class="imgDaily" alt="" srcset="">
              <div class="text-item">
                <div>
                  <div class="title-box">
                    <h2>${data.title}</h2>
                    <h2 class="right">...</h2>
                  </div>
                </div>
                <div class="time">
                  <h1>${data.timeframes[value].current}hrs</h1>
                  <p class="lastWeek">Last Week -${data.timeframes[value].previous}</p>
                </div>
            </div>
        `
    container.appendChild(newDiv)
  }
}

changeFilter('daily')
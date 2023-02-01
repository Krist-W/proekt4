let review =[
    {
      id: 1,
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQv2ata9UAu4N6pqtfQZ-k3TGy8myR1PUtJUoZ9kr-ONIxpDwlt",
      text: "Давно хотела пойти на курсы керамики, долго выбирала, боялась прогадать и все же записалась. Хорошие курсы с прекрасным преподавателем где царит творческая атмосфера и можно отдохнуть душой. А чай с печеньками приятное дополнение. Преподаватель объясняет все понятно, а т.к. у всех уровень в группе разный дает советы каждому.",
      name: "Александра",
      date: "1 декабря 2022 г."
    },
    {
       image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTR9fgUveMrvdA0f8x7_YLSiK10x6jtae4LcuVgPYgG7vgY8XFG",
       text: "Сейчас прохожу курс академический рисунок и масляная живопись. Самая профессиональная школа творчества! Прекрасная атмосфера, уютные студии и интенсивные уроки, все что надо для развития!",
       name: "Владимир",
       date: "20 декабря 2022 г."
    },
    {
      id: 3, 
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkaVS_LoCxA1UONgtmGZdUUAgH9DaTTXEpYwz2KRwOxcCVE_lF",
      text: "Посетили в выходные мастер-класс живопись маслом - впечатления потясающие! Все очень понравилось: атмосфера, профессиональные и деликатные советы наставника, результат - свой личный шедевр и удовольствие от процесса! Обязательно пойду еще!",
      name: "Светлана",
      date: "10 января 2023 г."
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaNuLpzkiHO185urP6a3lBMoFR7DdIYnGGo4gjaLNFNkcgCdu",
      text: "Мы с любимым человеком заказали необычный формат мастер класса: Романтическое свидание. И такое оказалось возможно!)) Отлично провели время и нарисовали одну большую картину с фотографии из нашего альбома!",
      name: "Анна",
      date: "21 января 2023 г."
    },

    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO3PTN_QAAlbNmp0t1BdZG8SufIckPtWPCAGxQyL8thhpN4U3",
      text: "Отличное! Креативное место для творческого отдыха по выходным для взрослых.",
      name: "Максим",
      date: "23 января 2023 г."
      }
    ]
    
    let id = 1
    const container = document.getElementById("container")
  

    function randomNumbers(min, max) {
      const x = Math.random()  * (max - min) + min
      return Math.floor(x)
    }

    console.log(randomNumbers)

    function randomButton() {
      id = randomNumbers(1,5)
      reviews(id)
    }

    console.log(randomButton)


 function next() {
  if (id < 5) id += 1
  else id = 1
  reviews(id)
}

function previous() {
  if (id > 1) id -= 1
  else id = 5
  reviews(id)
}


    function reviews(id) {
      container.innerHTML = ""
      container.innerHTML += `
         <div class="review-content">
            <img class="image" src="${review[id - 1].image}"/>
            <p class="text">${review[id - 1].text}</p>
            <p class="name">${review[id - 1].name}</p>
            <p class="date">${review[id - 1].date}</p>

            <div class="button-container">
            <div class="button-previous">
            <button class="button" id="previous(${review.id})"> <<< </button></div>
            <div class="button-random">
            <button class="button" id="buttonRandom(${review.id})">Случайный отзыв</button></div>
            <div class="button-next">
            <button class="button" id="next(${review.id})"> >>> </button></div>
            </div>
            </div>
          
        
         `
          document.getElementById(`next(${review.id})`).addEventListener("click", next)
          document.getElementById(`previous(${review.id})`).addEventListener("click", previous)
          document.getElementById(`buttonRandom(${review.id})`).addEventListener("click", randomButton)

      }

      
  
   reviews(id)



    
const allreviews = [
   {
      id: 1,
      name: "Lek",
      job: "Blackburn",
      img: "https://robohash.org/providentdolorexcepturi.png?size=50x50&set=set1",
     text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
   },
   {
      id: 2,
      name: "Codie",
      job: "Dionsetto",
      img: "https://robohash.org/autetnon.jpg?size=50x50&set=set1",
     text: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla."
   },
   {
      id: 3,
      name: "Kalina",
      job: "Stait",
      img: "https://robohash.org/dolorconsequaturqui.bmp?size=50x50&set=set1",
     text: "In sagittis dui vel nisl."
   },
   {
      id: 4,
      name: "Catha",
      job: "De Stoop",
      img: "https://robohash.org/rerumminimaeveniet.bmp?size=50x50&set=set1",
     text: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
   },
   {
      id: 5,
      name: "Jo-anne",
      job: "Cutmere",
      img: "https://robohash.org/quasisolutaveritatis.bmp?size=50x50&set=set1",
     text: "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
   },
   {
      id: 6,
      name: "Chiarra",
      job: "Zanre",
      img: "https://robohash.org/velsuntquos.jpg?size=50x50&set=set1",
     text: "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum."
   },
   {
      id: 7,
      name: "Hazel",
      job: "Renihan",
      img: "https://robohash.org/quodquasdoloribus.bmp?size=50x50&set=set1",
     text: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl."
   },
   {
      id: 8,
      name: "Haley",
      job: "Molyneux",
      img: "https://robohash.org/aperiamdeseruntbeatae.png?size=50x50&set=set1",
     text: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor."
   },
]
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

console.log(allreviews);
// allreviews.forEach(review => {
//    img.src = review.img;
//    author.innerText = review.name;
//    info.innerText = review.text;
//    job.innerText = review.job;
// })

var count = 0;
document.addEventListener('DOMContentLoaded', function() {
   prepareReviewData(count);
})

prevBtn.addEventListener('click', () => {
   count--;
   if(count < 0) {
      count = allreviews.length - 1;
   }
   prepareReviewData(count);
})
nextBtn.addEventListener('click', () => {
   count++;
   if(count > (allreviews.length - 1)) {
      count = 0;
   }
   prepareReviewData(count);
})
randomBtn.addEventListener('click', () => {
   count = Math.floor(Math.random() * allreviews.length);
   // console.log(count);
   prepareReviewData(count);
})

function prepareReviewData(person) {
   img.src = allreviews[person].img;
   author.innerText = allreviews[person].name;
   info.innerText = allreviews[person].text;
   job.innerText = allreviews[person].job;
}
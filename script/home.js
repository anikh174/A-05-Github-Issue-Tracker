let allIssue = [];
const loadedData = () => {
  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {
      allIssue = data.data;
      displayCards(allIssue);
    });
};

const displayCards = cards => {
  const allCards = document.getElementById('all-cards');
  allCards.innerHTML = '';

  document.getElementById('count').innerText = cards.length;

  cards.forEach(card => {
    const Div = document.createElement('div');
    Div.innerHTML = `
     <div class="bg-white shadow-sm items-center space-y-5 p-4 cursor-pointer ${(card.status)}"">
          <div class="flex justify-between items-center">
            <img class="w-6 h-6" src="./assets/Open-Status.png" alt="">
            <div class="${(card.status)} p-2">
              <h2 class="font-bold">${card.status}</h2>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="font-semibold text-[#1F2937] line-clamp-1  text-sm">${card.title}</h2>
            <p class="line-clamp-2 text-[#64748B] text-[12px]">${card.description}</p>
            <div class="flex justify-between">
              ${(card.labels)}
            </div>
          </div>
        </div>

        <div class="shadow-md p-4">
          <p class="text-[#64748B]">${card.author? card.author: "not found"}</p>
          <p class="text-[#64748B]">${card.createdAt}</p>
        </div>
    `;
    allCards.appendChild(Div);
  });
};

loadedData();

const activeBtn = active => {
  const allBtn = document.getElementById('all-btn');
  const openBtn = document.getElementById('open-btn');
  const closedBtn = document.getElementById('closed-btn');

  allBtn.classList.remove('btn-primary');
  openBtn.classList.remove('btn-primary');
  closedBtn.classList.remove('btn-primary');
  document.getElementById(active).classList.add('btn-primary');
};

const allBtn = () => {
  displayCards(allIssue);
  activeBtn('all-btn');
};
const openBtn = () => {
  const openCards = allIssue.filter(card => card.status === 'open');
  displayCards(openCards);
  activeBtn('open-btn');
};

const closedBtn = () => {
  const closedCards = allIssue.filter(card => card.status === 'closed');
  displayCards(closedCards);
  activeBtn('closed-btn');
};


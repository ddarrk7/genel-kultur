let username = "";
let currentQuestionIndex = 0;

const questions = [
    { question: "Türkiye'nin başkenti neresidir?", options: ["İstanbul", "Ankara", "İzmir", "Bursa"], answer: "Ankara" },
    { question: "Dünyanın en büyük okyanusu hangisidir?", options: ["Atlas", "Hint", "Pasifik", "Arktik"], answer: "Pasifik" },
    { question: "Ay'ın yüzeyine ilk ayak basan insan kimdir?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"], answer: "Neil Armstrong" },
    { question: "Einstein'ın ünlü denklemi nedir?", options: ["E=mc²", "F=ma", "v=d/t", "P=mv"], answer: "E=mc²" },
    { question: "Işık yılı neyi ifade eder?", options: ["Zaman birimi", "Mesafe birimi", "Işık şiddeti birimi", "Enerji birimi"], answer: "Mesafe birimi" },
    { question: "Dünyanın en büyük çölü hangisidir?", options: ["Sahra", "Arktik", "Antarktik", "Gobi"], answer: "Antarktik" },
    { question: "En büyük gezegen hangisidir?", options: ["Mars", "Venüs", "Jüpiter", "Satürn"], answer: "Jüpiter" },
    { question: "Roma İmparatorluğu ne zaman yıkıldı?", options: ["476", "753", "410", "1453"], answer: "476" },
    { question: "Mona Lisa'nın ressamı kimdir?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "Bir ışık yılı, hangi mesafeyi ifade eder?", options: ["Yaklaşık 9.46 trilyon kilometre", "1.5 milyon kilometre", "300 bin kilometre", "4.2 milyar kilometre"], answer: "Yaklaşık 9.46 trilyon kilometre" },
    { question: "Hangi gezegenin halkaları vardır?", options: ["Mars", "Venüs", "Jüpiter", "Satürn"], answer: "Satürn" },
    { question: "Cahille sohbet etmek, hangi filozof tarafından öğütlenmiştir?", options: ["Sokrat", "Platon", "Aristoteles", "Epiktetos"], answer: "Sokrat" },
    { question: "Dünyanın en derin okyanusu hangisidir?", options: ["Pasifik Okyanusu", "Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu"], answer: "Pasifik Okyanusu" },
    { question: "Avrupa'daki en büyük ülke hangisidir?", options: ["Almanya", "Fransa", "Rusya", "İngiltere"], answer: "Rusya" },
    { question: "Birleşmiş Milletler'in merkezi nerede bulunur?", options: ["Brüksel", "Paris", "New York", "Cenevre"], answer: "New York" },
    { question: "Dünyanın en yüksek dağı nedir?", options: ["K2", "Everest", "Kangchenjunga", "Makalu"], answer: "Everest" },
    { question: "İlk insanlı uzay uçuşunu yapan Sovyet kozmonotu kimdir?", options: ["Yuri Gagarin", "Valentina Tereshkova", "Sergey Korolev", "Vladimir Komarov"], answer: "Yuri Gagarin" },
    { question: "Hangi elementin kimyasal sembolü 'Au' dur?", options: ["Altın", "Argon", "Alüminyum", "Astatin"], answer: "Altın" },
    { question: "Birincil renkler hangileridir?", options: ["Kırmızı, mavi, sarı", "Kırmızı, yeşil, mor", "Mavi, yeşil, kırmızı", "Sarı, yeşil, mavi"], answer: "Kırmızı, mavi, sarı" },
    { question: "Hangi gezegen en hızlı dönmektedir?", options: ["Jüpiter", "Merkür", "Venüs", "Satürn"], answer: "Jüpiter" },
    { question: "Özgürlük Anıtı hangi şehirde yer almaktadır?", options: ["Washington DC", "New York", "Los Angeles", "Chicago"], answer: "New York" },
    { question: "Ortalama insan vücudu kaç litre kan taşır?", options: ["3-4 litre", "4-5 litre", "5-6 litre", "6-7 litre"], answer: "4-5 litre" },
    { question: "Kutsal kitap Kur'an-ı Kerim hangi dilde indirilmiştir?", options: ["Türkçe", "Arapça", "İbranice", "Latince"], answer: "Arapça" },
    { question: "İlk bilgisayarın adı nedir?", options: ["ENIAC", "IBM 5100", "UNIVAC", "Colossus"], answer: "ENIAC" },
    { question: "Birleşmiş Milletler hangi yılda kurulmuştur?", options: ["1945", "1950", "1939", "1923"], answer: "1945" },
    { question: "Albert Einstein hangi teoriyi geliştirmiştir?", options: ["Işığın Hızı Teorisi", "Görelilik Teorisi", "Atom Teorisi", "Kuantum Teorisi"], answer: "Görelilik Teorisi" },
    { question: "Süleyman Tapınağı hangi kutsal kitapta geçmektedir?", options: ["Tevrat", "Kur'an", "İncil", "Bhagavad Gita"], answer: "Tevrat" },
    { question: "Dünyanın en yüksek şelalesi hangisidir?", options: ["Niagara Şelalesi", "Angel Şelalesi", "Victoria Şelalesi", "Iguazu Şelalesi"], answer: "Angel Şelalesi" },
    { question: "Kimya elementlerinden hangisi en ağırdır?", options: ["Uranyum", "Plütonyum", "Altın", "Osmiyum"], answer: "Osmiyum" },
    { question: "En eski uygarlıklardan biri olan Mezopotamya hangi nehirlerin arasında yer alır?", options: ["Nil ve Fırat", "Fırat ve Dicle", "Ganj ve Brahmaputra", "Amazon ve Mississippi"], answer: "Fırat ve Dicle" },
    { question: "İlk Nobel Ödülü'nü kim kazanmıştır?", options: ["Marie Curie", "Albert Einstein", "Henri Becquerel", "Wilhelm Röntgen"], answer: "Wilhelm Röntgen" },
    { question: "Hangi gezegen en yavaş dönen gezegen olarak bilinir?", options: ["Venüs", "Mars", "Satürn", "Neptün"], answer: "Venüs" },
    { question: "İlk televizyon yayını ne zaman yapılmıştır?", options: ["1930", "1928", "1940", "1952"], answer: "1928" },
    { question: "Venüs'ün yüzeyi hangi gaz ile kaplıdır?", options: ["Oksijen", "Amonyak", "Karbon Dioksit", "Karbondioksit"], answer: "Karbon Dioksit" },
    { question: "İnsanın en büyük organı nedir?", options: ["Beyin", "Karaciğer", "Cilt", "Kalp"], answer: "Cilt" },
    { question: "Giza Piramitleri hangi Mısır hükümdarına ait?" , options: ["Firavun Keops", "Firavun Ramses", "Firavun Tutankamon", "Firavun Merenptah"], answer: "Firavun Keops" },
    { question: "Dünyanın en uzun nehri hangisidir?", options: ["Nil Nehri", "Amazon Nehri", "Yangtze Nehri", "Mississippi Nehri"], answer: "Nil Nehri" },
    { question: "Dünyadaki en yüksek yapay yapı hangisidir?", options: ["Burj Khalifa", "Eiffel Kulesi", "Empire State Building", "Tokyo Tower"], answer: "Burj Khalifa" },
    { question: "Görünür ışığın en kısa dalga boyuna sahip rengi hangisidir?", options: ["Kırmızı", "Mavi", "Yeşil", "Mor"], answer: "Mor" },
    { question: "Hangi ülke dünyanın en büyük alkol üreticisidir?", options: ["Rusya", "ABD", "Fransa", "Japonya"], answer: "Rusya" }
];

function startQuiz() {
    username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Lütfen adınızı girin!");
        return;
    }
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        alert(username + ", testi tamamladınız!");
        return;
    }

    let questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected) {
    let correct = questions[currentQuestionIndex].answer;
    if (selected === correct) {
        alert("Doğru cevap!");
    } else {
        alert("Yanlış cevap! Doğru cevap: " + correct);
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById("next-btn").style.display = "none";
    loadQuestion();
}
